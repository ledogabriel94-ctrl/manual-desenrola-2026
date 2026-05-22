# Meta Pixel — Arquitetura

Implementação profissional do Pixel da Meta (Facebook) com:

- 1 pixel base, 1 disparo de `PageView` automático
- Eventos do funil **InitiateCheckout** e **ViewContent** com `event_id` + `external_id` (deduplicação pronta)
- Eventos auxiliares (`ScrollDepth`, `ButtonClick`)
- **Conversions API (CAPI)** servidor a servidor — mirror automático dos eventos do browser + endpoint dedicado de Purchase via webhook
- Captura de `_fbp`, `_fbc` (do cookie e do `fbclid` da URL)
- Passagem desses identificadores como query params pro checkout — pra atribuição cross-domain quando o gateway disparar o webhook
- **Purchase NUNCA dispara no client** (só via webhook server-side, quando o pagamento é confirmado de verdade)

## Pixel oficial

```
Nome: Pixel Desenrola Brasil
ID:   27073901088892728
```

Esse é o **único** pixel autorizado. Configurado via `NEXT_PUBLIC_META_PIXEL_ID`.

## Variáveis de ambiente

Veja `.env.local.example`. As 3 que importam pro tracking:

| Var | Onde define | Função |
|---|---|---|
| `NEXT_PUBLIC_META_PIXEL_ID` | Local + Vercel (Public) | ID do pixel, exposto no browser |
| `META_CAPI_ACCESS_TOKEN` | Vercel (Encrypted) | Token de Conversions API (server-only) |
| `META_TEST_EVENT_CODE` | Opcional, só pra teste | Marca eventos como "teste" no Events Manager |
| `GATEWAY_WEBHOOK_SECRET` | Vercel (Encrypted) | HMAC secret pra validar webhook do gateway |

### Como gerar o token de CAPI

1. Events Manager → **pixel desenrola brasil** → aba **Configurações**
2. Rola até **API de Conversões** → **Gerar token de acesso**
3. Cola em `META_CAPI_ACCESS_TOKEN` (no Vercel, marcando como Encrypted/Secret)

## Eventos implementados

| Evento | Onde dispara | Quando | Tipo |
|---|---|---|---|
| `PageView` | `app/layout.tsx` (inline base) | Cada page load | Pixel + CAPI* |
| `ViewContent` | `components/ViewContentTracker.tsx` | Quando a seção `<Oferta>` entra em 40% do viewport | Pixel + CAPI |
| `InitiateCheckout` | `components/CheckoutButton.tsx` | Click no CTA "Quero o manual" / "Quero o manual por R$ 27" | Pixel + CAPI |
| `ButtonClick` | `components/CheckoutButton.tsx` | Click no CTA (custom event auxiliar) | Pixel + CAPI |
| `ScrollDepth` | `components/PixelTracker.tsx` | 25%, 50%, 75%, 90% de scroll | Pixel + CAPI |
| **`Purchase`** | `app/api/webhook/gateway/route.ts` | **Quando o gateway POSTar confirmação de pagamento** | **CAPI only** |

\* `PageView` na base só dispara via pixel inline (sem CAPI). Pra mirror, basta chamar `track('PageView')` num componente client se quiser.

## Fluxo de deduplicação

Cada evento (exceto Purchase) é disparado simultaneamente:

1. **Pixel** (browser) → `fbq('track', 'X', params, { eventID: <uuid> })`
2. **CAPI** (servidor) → `POST /api/conversions` com o **mesmo** `event_id`

A Meta deduplica pelo par `(event_name, event_id)`. Se um dos dois falhar (adblocker, rede), o outro chega — sem contagem dupla.

## Identificadores persistentes

- `external_id` — UUID gerado na 1ª visita, salvo em `localStorage` (`mdn_ext_id`). Hashado SHA-256 antes de ir pro CAPI.
- `_fbp` — cookie do pixel JS. Capturado em `localStorage` (`mdn_fbp`) pra disponibilizar no servidor.
- `_fbc` — cookie do pixel JS, ou sintético a partir de `?fbclid=` na URL.

Esses 3 são passados como query params pro GGCheckout no momento do click:

```
https://ggcheckout.app/checkout/...?external_id=...&fbp=...&fbc=...&event_id=...&placement=oferta_card
```

## Como integrar o gateway depois (Purchase)

A rota `app/api/webhook/gateway/route.ts` está pronta. Falta só:

### 1. Configurar o webhook no painel da GGCheckout

URL de destino:
```
https://manualdesnrola.com.br/api/webhook/gateway
```

Método: `POST` · `Content-Type: application/json`

### 2. Body esperado (template)

```jsonc
{
  "transaction_id": "txn_abc123",
  "status": "paid",                  // ou "approved", "succeeded", "completed"
  "value": 27.00,
  "currency": "BRL",
  "payment_method": "pix",
  "customer": {
    "email": "comprador@email.com",
    "phone": "+5511999999999",
    "name": "Maria Silva",
    "document": "12345678900"
  },
  "tracking": {
    "external_id": "...",            // <- vem da query string do checkout
    "fbp": "...",
    "fbc": "...",
    "event_id": "...",
    "placement": "oferta_card",
    "client_ip": "...",
    "client_user_agent": "..."
  }
}
```

> Como passar os campos de `tracking`? Eles chegam ao gateway via query string no momento da redireção (`?external_id=...&fbp=...&fbc=...`). Configure o GGCheckout pra anexá-los no payload do webhook (campo "Custom params" ou similar).

### 3. Assinatura HMAC

Defina `GATEWAY_WEBHOOK_SECRET` (mesmo valor nos 2 lados). O gateway deve enviar o header:

```
X-Gateway-Signature: <hex hmac sha256 do body com o secret>
```

Sem assinatura válida, a rota responde **401**.

### 4. Lógica do endpoint

- Verifica HMAC
- Aceita apenas `status ∈ {paid, approved, succeeded, completed}`
- Gera `event_id = "purchase_<transaction_id>"` (dedup automático em caso de retry)
- POSTa pro CAPI da Meta `Purchase` com `content_ids`, `value`, `currency`, `user_data` (hashado), `event_id`

## Arquivos da implementação

```
lib/pixel/
├── types.ts          Tipos TS dos eventos e payloads
├── product.ts        Definição única do produto (content_ids)
├── client.ts         Wrapper fbq + IDs (external_id, fbp, fbc) + mirror CAPI
└── server.ts         Helper CAPI (hash SHA-256 + POST /events)

components/
├── PixelTracker.tsx       Aquecimento de IDs + ScrollDepth
├── ViewContentTracker.tsx IntersectionObserver dispara ViewContent
└── CheckoutButton.tsx     Substitui <a> dos CTAs, dispara InitiateCheckout

app/api/
├── conversions/route.ts        Mirror CAPI dos eventos do browser
└── webhook/gateway/route.ts    Receptor do gateway → Purchase via CAPI
```

## Validação pós-deploy

1. **Pixel Helper (extensão Chrome)** — abra `manualdesnrola.com.br` e confira:
   - `PageView` no load
   - `ScrollDepth` ao scrollar (custom event)
   - `ViewContent` quando a oferta aparece
   - `InitiateCheckout` ao clicar no CTA

2. **Events Manager → Eventos em tempo real** — deve mostrar os eventos chegando, com tag "Eventos sobrepostos" em `InitiateCheckout` (sinal de dedup OK).

3. **Test Events (Events Manager)** — gere um `META_TEST_EVENT_CODE` no painel, coloque no Vercel, e veja os eventos rotulados como "Test Events".

4. **Match Quality (EMQ)** — em `Diagnostics`, o pixel deve subir gradualmente (precisa de email/phone no Purchase pra chegar a >7/10).

## O que NÃO foi feito (e por que)

- **Purchase no client**: não disparamos. Toda confirmação de pagamento passa pelo webhook, evitando Purchase falso ou em duplicata.
- **Lead/Subscribe/CompleteRegistration**: a landing atual não tem captura de email/form. Quando criar, basta importar `track('Lead', {...})` do `lib/pixel/client`.
- **AddToCart/AddPaymentInfo**: a landing é checkout direto (sem cart próprio). Esses eventos ficariam fake. Se quiser, dá pra disparar `AddToCart` junto com `InitiateCheckout` — mas a Meta já entende a sequência mesmo sem ele.
