import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de privacidade — Manual Desenrola 2026" },
      {
        name: "description",
        content: "Política de privacidade do Manual Desenrola 2026.",
      },
    ],
  }),
  component: PrivacidadePage,
});

function PrivacidadePage() {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Link to="/" className="text-sm text-primary hover:underline">
          ← Voltar ao início
        </Link>
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-secondary">
          Política de privacidade
        </h1>
        <div className="mt-8 space-y-6 text-muted-foreground">
          <p>
            Respeitamos sua privacidade e seguimos a Lei Geral de Proteção de Dados (LGPD).
          </p>
          <h2 className="text-lg font-semibold text-secondary">Dados coletados</h2>
          <p>
            Coletamos apenas os dados necessários para processar seu pedido: nome, e-mail e
            informações de pagamento (processadas por gateways de pagamento parceiros).
          </p>
          <h2 className="text-lg font-semibold text-secondary">Uso dos dados</h2>
          <p>
            Utilizamos seus dados exclusivamente para enviar o produto adquirido, prestar
            suporte e enviar atualizações relevantes do material.
          </p>
          <h2 className="text-lg font-semibold text-secondary">Compartilhamento</h2>
          <p>
            Não vendemos nem compartilhamos seus dados com terceiros para fins de marketing.
          </p>
          <h2 className="text-lg font-semibold text-secondary">Seus direitos</h2>
          <p>
            Você pode solicitar acesso, correção ou exclusão de seus dados a qualquer momento
            pelo nosso e-mail de suporte.
          </p>
        </div>
      </div>
    </div>
  );
}
