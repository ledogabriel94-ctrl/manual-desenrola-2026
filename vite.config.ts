// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Deploy na Vercel como site ESTÁTICO (SPA).
// O funil é 100% client-side (sem loaders de servidor), então não precisa de SSR.
// nitro:false  -> não gera bundle de servidor/Cloudflare.
// spa.enabled  -> o TanStack Start gera um index.html (shell) estático que serve todas as rotas.
// Saída: dist/client  (configurado no vercel.json).
export default defineConfig({
  nitro: false,
  tanstackStart: {
    spa: { enabled: true },
  },
});
