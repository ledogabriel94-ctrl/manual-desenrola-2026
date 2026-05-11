# Landing — Manual Desenrola 2026

Landing page de venda do infoproduto Manual Desenrola 2026.

## Desenvolvimento

```bash
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Variáveis de ambiente

Copie `.env.local.example` para `.env.local` e ajuste:

```
NEXT_PUBLIC_CHECKOUT_URL=<link do GGCheckout>
```

Sem essa variável, os botões caem para o fallback `#checkout` (âncora inerte).

## Build de produção

```bash
npm run build
npm start
```

## Deploy na Vercel

1. Push pro GitHub
2. Importar o repositório no Vercel
3. Adicionar variável de ambiente `NEXT_PUBLIC_CHECKOUT_URL`
4. Deploy automático

## TODOs pré-deploy

- [ ] Substituir `public/og-image.png` por imagem real 1200×630 (referência ainda inexistente — o arquivo PNG precisa ser gerado no Canva e adicionado).
- [ ] Preencher CNPJ no `Footer.tsx` quando disponível.
- [ ] Definir `NEXT_PUBLIC_CHECKOUT_URL` no painel da Vercel antes do deploy.
- [ ] Vincular Termos de Uso e Política de Privacidade (atualmente `href="#"`).

## Stack

- Next.js 14 (App Router)
- TypeScript (strict)
- TailwindCSS 3.4
- Swiper.js 12 (HeroCarousel)
- Framer Motion 11 (instalado, uso reservado a animações futuras)
- Lucide React (ícones)
- Fontes via `next/font/google`: Plus Jakarta Sans (display) + Inter (corpo)

## Estrutura

```
app/
├── layout.tsx       Fontes Google + metadata SEO
├── page.tsx         Composição das seções
└── globals.css      Tailwind + reset + Swiper overrides

components/
├── TopBar.tsx       Tarja vermelha sticky
├── HeroCarousel.tsx Carrossel de 7 cards (client component)
├── Section1News.tsx
├── Section2Traps.tsx
├── Section3Routes.tsx
├── Section4Test.tsx
├── Section5Product.tsx
├── Section6Authority.tsx
├── Section7Pricing.tsx
├── Section8FAQ.tsx
├── Footer.tsx
└── ui/CTAButton.tsx Botão CTA reutilizável

lib/
└── env.ts           Lê NEXT_PUBLIC_CHECKOUT_URL

public/
└── pdf-mockup.svg   Capa do manual no Carrossel/Seção 5
```
