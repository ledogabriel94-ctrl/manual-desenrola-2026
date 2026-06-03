// Pós-build: o TanStack Start (SPA) gera dist/client/_shell.html.
// A Vercel (e qualquer host estático) espera um index.html na raiz.
// Copiamos _shell.html -> index.html para servir "/" e o fallback de SPA.
import { copyFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const dir = join(process.cwd(), "dist", "client");
const shell = join(dir, "_shell.html");
const index = join(dir, "index.html");

if (!existsSync(shell)) {
  console.error("[copy-shell] dist/client/_shell.html não encontrado. O build SPA rodou?");
  process.exit(1);
}
copyFileSync(shell, index);
console.log("[copy-shell] dist/client/index.html criado a partir de _shell.html");
