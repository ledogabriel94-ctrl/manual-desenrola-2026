## Objetivo

Reverter as alterações do último redesign e restaurar a landing page anterior (estilo Brasil — verde/amarelo/azul, com VSL, badges, gradientes, mockup e selo de garantia originais).

## Arquivos a restaurar

1. **`src/styles.css`** — voltar para o design system anterior:
   - Tokens em oklch com `--primary` verde vibrante, `--brand-blue`, `--brand-yellow`, gradientes (`--gradient-primary`, `--gradient-neon`, `--gradient-hero`, `--gradient-blue`).
   - Sombras `--shadow-premium`, `--shadow-neon`, `--shadow-vsl`.
   - Utilitários `.bg-hero-fintech`, `.bg-gradient-primary`, `.bg-brand-blue`, `.bg-brand-yellow`, `.shadow-vsl`, `.bg-grid-dots`, `.glass-panel`, etc.
   - Animações `float-slow`, `float-slower`, `glow-pulse`, `fade-up`, `slide-up`, `slide-left`, `marquee`.
   - Remover import de Google Fonts (Libre Baskerville + IBM Plex) e a redefinição de `--font-sans`/`--font-serif`.

2. **`src/routes/index.tsx`** — restaurar a versão de 667 linhas com:
   - Componentes `AnnouncementBar`, `Header` (com `BrazilStripe`), `Hero` (com VSL e gradientes coloridos), `TrustStrip`, `Pain`, `Mechanism`, `Product`, `Banks`, `Docs`, `Offer`, `Guarantee` (com `GuaranteeSeal` SVG), `FAQ`, `FinalCTA`, `Footer`.
   - Imports originais (`heroPerson`, `painPerson`, `manualCover`, `manualBook3d`, `guaranteeSeal`, `logoDesenrola`) e ícones lucide originais.
   - Constante `BR_STRIPE` e helper `BrazilStripe`.

## Fora do escopo

- Não criar nada novo, não mexer em outras rotas (`/contato`, `/privacidade`, `/termos`), não tocar em componentes UI.
