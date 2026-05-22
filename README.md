# Landing — Manual Desenrola 2026

Landing page de venda do infoproduto Manual Desenrola 2026.

## Desenvolvimento

```bash
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Variáveis de ambiente

Copie `.env.local.example` para `.env.local`. O único valor configurável é
`NEXT_PUBLIC_SITE_URL` (usado pelo `metadataBase`). O link de checkout do
Tribopay está hardcoded em `components/Oferta.tsx` e `components/UltimaChamada.tsx`.

## Build de produção

```bash
npm run build
npm start
```

## Deploy na Vercel

1. Push pro GitHub
2. Importar o repositório no Vercel
3. Deploy automático

## TODOs pré-deploy

- [ ] Substituir `public/og-image.png` por imagem real 1200×630 (referência ainda inexistente — o arquivo PNG precisa ser gerado no Canva e adicionado).
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

public/
└── pdf-mockup.svg   Capa do manual no Carrossel/Seção 5
```
