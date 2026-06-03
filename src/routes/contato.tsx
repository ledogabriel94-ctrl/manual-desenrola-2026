import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, Clock } from "lucide-react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Manual Desenrola 2026" },
      {
        name: "description",
        content: "Entre em contato com o suporte do Manual Desenrola 2026.",
      },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <Link to="/" className="text-sm text-primary hover:underline">
          ← Voltar ao início
        </Link>
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-secondary">Contato</h1>
        <p className="mt-3 text-muted-foreground">
          Tem dúvidas sobre o material? Fale com a gente.
        </p>
        <div className="mt-8 space-y-4">
          <div className="flex items-start gap-4 rounded-lg border border-border bg-card p-5">
            <Mail className="mt-1 h-5 w-5 text-primary" />
            <div>
              <div className="font-medium text-secondary">E-mail de suporte</div>
              <a
                href="mailto:suporte@manualdesenrola.com.br"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                suporte@manualdesenrola.com.br
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4 rounded-lg border border-border bg-card p-5">
            <Clock className="mt-1 h-5 w-5 text-primary" />
            <div>
              <div className="font-medium text-secondary">Horário de atendimento</div>
              <p className="text-sm text-muted-foreground">
                Segunda a sexta, das 9h às 18h (horário de Brasília).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
