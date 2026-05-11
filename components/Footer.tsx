import { Mail, Shield, Lock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-cinza-grafite text-white">
      <div className="mx-auto max-w-5xl px-6 py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          <div>
            <p className="font-display text-2xl font-extrabold">
              Manual Desenrola 2026
            </p>
            <p className="mt-3 text-sm text-cinza-claro">
              Guia prático para usar o programa Desenrola Brasil 2.0 e limpar seu nome com
              até 90% de desconto.
            </p>
          </div>

          <div>
            <p className="font-display text-sm font-bold uppercase tracking-wide text-cinza-claro">
              Suporte
            </p>
            <ul className="mt-4 space-y-3 text-sm" role="list">
              <li className="flex items-start gap-2">
                <Mail aria-hidden className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span className="text-cinza-claro">
                  garantia@manualdesenrola.com.br
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Shield aria-hidden className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span className="text-cinza-claro">Garantia: 7 dias incondicional</span>
              </li>
              <li className="flex items-start gap-2">
                <Lock aria-hidden className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span className="text-cinza-claro">
                  Pagamento seguro via GG Checkout
                </span>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-display text-sm font-bold uppercase tracking-wide text-cinza-claro">
              Legal
            </p>
            <ul className="mt-4 space-y-3 text-sm" role="list">
              <li>
                <a href="#" className="text-cinza-claro underline-offset-4 hover:underline hover:text-white">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-cinza-claro underline-offset-4 hover:underline hover:text-white">
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-10 border-white/15" />

        <p className="text-sm leading-[1.75] text-cinza-claro">
          <strong className="font-bold text-white">⚠️ Aviso Legal:</strong> Este manual é
          material educativo e informativo independente. NÃO temos vínculo, parceria,
          autorização ou patrocínio do Governo Federal, Banco Central, Serasa ou qualquer
          instituição financeira. Apresentamos informações públicas e oficiais do programa
          Desenrola Brasil 2.0 organizadas em formato didático. O programa do governo é 100%
          gratuito e pode ser acessado diretamente nos bancos. Resultados de descontos
          variam conforme cada caso e instituição.
        </p>

        <div className="mt-8 flex flex-col gap-1 text-xs text-cinza-claro/70 md:flex-row md:justify-between">
          <p>© 2026 — Todos os direitos reservados.</p>
          <p>CNPJ: [a preencher]</p>
        </div>
      </div>
    </footer>
  );
}
