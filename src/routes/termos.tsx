import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/termos")({
  head: () => ({
    meta: [
      { title: "Termos de uso — Manual Desenrola 2026" },
      {
        name: "description",
        content: "Termos de uso do Manual Desenrola 2026, material educativo independente.",
      },
    ],
  }),
  component: TermosPage,
});

function TermosPage() {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Link to="/" className="text-sm text-primary hover:underline">
          ← Voltar ao início
        </Link>
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-secondary">
          Termos de uso
        </h1>
        <div className="mt-8 space-y-6 text-muted-foreground">
          <p>
            Ao adquirir o Manual Desenrola 2026, você concorda com estes termos. O material é
            educativo e independente, não constitui aconselhamento jurídico ou financeiro
            personalizado.
          </p>
          <h2 className="text-lg font-semibold text-secondary">1. Natureza do produto</h2>
          <p>
            O Manual Desenrola 2026 é um PDF educativo de orientação geral. Não somos
            representantes do Governo Federal, Banco Central, Serasa, FGTS ou qualquer
            instituição financeira.
          </p>
          <h2 className="text-lg font-semibold text-secondary">2. Pagamento e entrega</h2>
          <p>
            O acesso ao material é enviado por e-mail após a confirmação do pagamento.
          </p>
          <h2 className="text-lg font-semibold text-secondary">3. Reembolso</h2>
          <p>
            Oferecemos garantia de 7 dias. Caso o material não te ajude, basta solicitar
            reembolso pelo e-mail de suporte dentro desse prazo.
          </p>
          <h2 className="text-lg font-semibold text-secondary">4. Uso permitido</h2>
          <p>
            O conteúdo é de uso pessoal. É proibida a redistribuição, revenda ou reprodução
            sem autorização.
          </p>
        </div>
      </div>
    </div>
  );
}
