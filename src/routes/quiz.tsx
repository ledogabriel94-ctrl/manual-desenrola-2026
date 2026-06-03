import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import logoDesenrola from "@/assets/logo-desenrola.png";

export const Route = createFileRoute("/quiz")({
  head: () => ({
    meta: [
      { title: "Descubra seu perfil de negociação — Manual Desenrola" },
      {
        name: "description",
        content: "Responda algumas perguntas rápidas para descobrir o melhor caminho para negociar suas dívidas.",
      },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
  }),
  component: Quiz,
});

/* ───────────────────────────────────────────────────────────────
   PERGUNTAS DO QUIZ
   tipo: "texto"  → campo de digitação (ex.: nome)
   tipo: "opcoes" → múltipla escolha
   👉 edite/adicione perguntas aqui livremente.
   ─────────────────────────────────────────────────────────────── */
const PERGUNTAS = [
  {
    id: "nome",
    tipo: "texto" as const,
    pergunta: "Para começar, qual é o seu nome?",
    placeholder: "Digite seu nome",
  },
  {
    id: "faixa",
    tipo: "opcoes" as const,
    pergunta: "Qual é a sua faixa salarial atual?",
    opcoes: [
      "Desempregado(a)",
      "Até R$ 2.640 (até 2 salários mínimos)",
      "De R$ 2.641 a R$ 6.600 (2 a 5 salários mínimos)",
      "De R$ 6.601 a R$ 13.200 (5 a 10 salários mínimos)",
      "Acima de R$ 13.200 (mais de 10 salários mínimos)",
    ],
  },
  {
    id: "tipo",
    tipo: "opcoes" as const,
    pergunta: "Qual o tipo de dívida que deseja renegociar?",
    opcoes: [
      "Dívidas bancárias (banco, financeira)",
      "Cartão de crédito",
      "Financiamento de veículo ou imóvel",
      "Contas de serviços (água, luz, telefone)",
      "Outros tipos de dívida",
    ],
  },
];

const TOTAL_ETAPAS = PERGUNTAS.length;

function Quiz() {
  const navigate = useNavigate();
  const [etapa, setEtapa] = useState(0);
  const [respostas, setRespostas] = useState<Record<string, string>>({});
  const [analisando, setAnalisando] = useState(false);

  const atual = PERGUNTAS[etapa];

  function avancar(valor: string) {
    const novas = { ...respostas, [atual.id]: valor };
    setRespostas(novas);

    if (etapa < TOTAL_ETAPAS - 1) {
      setEtapa((e) => e + 1);
    } else {
      // Última pergunta respondida → análise → libera o resultado
      try {
        localStorage.setItem("quiz_completo", "1");
        localStorage.setItem("quiz_respostas", JSON.stringify(novas));
        localStorage.setItem("quiz_nome", novas.nome || "");
      } catch {
        /* ignore */
      }
      setAnalisando(true);
    }
  }

  function voltar() {
    if (etapa > 0) setEtapa((e) => e - 1);
  }

  // Quando entra em "analisando", aguarda e leva pro resultado
  useEffect(() => {
    if (!analisando) return;
    const t = setTimeout(() => {
      navigate({ to: "/resultado", replace: true });
    }, 2600);
    return () => clearTimeout(t);
  }, [analisando, navigate]);

  const progresso = analisando ? 100 : Math.round((etapa / TOTAL_ETAPAS) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f4f7f5] to-white flex flex-col">
      <div className="h-1.5 w-full bg-[#009c3b]" aria-hidden />

      <header className="bg-white/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-center">
          <img src={logoDesenrola} alt="Manual Desenrola" className="h-8 sm:h-9 w-auto" />
        </div>
      </header>

      {/* barra de progresso */}
      <div className="bg-white border-b border-border">
        <div className="container mx-auto px-4 py-3 max-w-2xl">
          <div className="flex items-center justify-between text-xs font-semibold text-foreground/60 mb-1.5">
            <span>{analisando ? "Concluído" : `Etapa ${etapa + 1} de ${TOTAL_ETAPAS}`}</span>
            <span>{progresso}%</span>
          </div>
          <div className="h-2 w-full rounded-full bg-foreground/10 overflow-hidden">
            <div
              className="h-full rounded-full bg-[#009c3b] transition-all duration-500 ease-out"
              style={{ width: `${progresso}%` }}
            />
          </div>
        </div>
      </div>

      <main className="flex-1 flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-2xl">
          {analisando ? (
            <div className="text-center flex flex-col items-center gap-5 animate-fade-up">
              <div className="size-14 rounded-full border-4 border-[#009c3b]/25 border-t-[#009c3b] animate-spin" />
              <h2 className="text-2xl sm:text-3xl font-black text-[#002776]">
                Analisando seu perfil...
              </h2>
              <p className="text-foreground/65 max-w-md">
                Estamos preparando o caminho de negociação mais indicado para o seu caso. Aguarde um instante.
              </p>
            </div>
          ) : (
            <div key={etapa} className="animate-fade-up">
              <div className="flex items-center justify-center gap-2 mb-5">
                <span className="flex size-7 items-center justify-center rounded-full bg-[#002776] text-sm font-black text-white">
                  {etapa + 1}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-[#002776] text-center leading-tight">
                {atual.pergunta}
              </h1>

              {atual.tipo === "texto" ? (
                <PerguntaTexto
                  placeholder={atual.placeholder}
                  valorInicial={respostas[atual.id] || ""}
                  onConfirmar={avancar}
                />
              ) : (
                <div className="mt-8 flex flex-col gap-3">
                  {atual.opcoes!.map((opcao) => {
                    const selecionada = respostas[atual.id] === opcao;
                    return (
                      <button
                        key={opcao}
                        type="button"
                        onClick={() => avancar(opcao)}
                        className={`group flex items-center justify-between gap-3 rounded-2xl border-2 bg-white px-5 py-4 text-left font-semibold transition-all hover:border-[#009c3b] hover:shadow-md ${
                          selecionada ? "border-[#009c3b] shadow-md" : "border-border"
                        }`}
                      >
                        <span className="text-foreground">{opcao}</span>
                        <span className="flex size-7 shrink-0 items-center justify-center rounded-full border-2 border-border text-transparent transition group-hover:border-[#009c3b] group-hover:text-[#009c3b]">
                          <CheckCircle2 className="size-5" />
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}

              {etapa > 0 && (
                <button
                  type="button"
                  onClick={voltar}
                  className="mt-6 mx-auto block text-sm font-medium text-foreground/50 hover:text-foreground transition"
                >
                  ← Voltar
                </button>
              )}
            </div>
          )}
        </div>
      </main>

      <footer className="border-t border-border bg-white py-4">
        <div className="container mx-auto px-4 flex items-center justify-center gap-2 text-xs text-foreground/50">
          <ShieldCheck className="size-4 text-[#009c3b]" />
          <span>Suas respostas são confidenciais e usadas só para indicar o melhor caminho.</span>
        </div>
      </footer>
    </div>
  );
}

function PerguntaTexto({
  placeholder,
  valorInicial,
  onConfirmar,
}: {
  placeholder?: string;
  valorInicial: string;
  onConfirmar: (valor: string) => void;
}) {
  const [valor, setValor] = useState(valorInicial);
  const podeAvancar = valor.trim().length >= 2;

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (podeAvancar) onConfirmar(valor.trim());
  }

  return (
    <form onSubmit={submit} className="mt-8 flex flex-col gap-4">
      <input
        type="text"
        autoFocus
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-2xl border-2 border-border bg-white px-5 py-4 text-lg font-semibold text-foreground outline-none transition focus:border-[#009c3b]"
      />
      <button
        type="submit"
        disabled={!podeAvancar}
        className="inline-flex w-full sm:w-auto sm:mx-auto items-center justify-center gap-2 rounded-full bg-[#009c3b] hover:bg-[#00822f] text-white text-sm sm:text-base font-bold px-8 py-4 shadow-lg transition hover:scale-[1.02] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        Continuar
        <ArrowRight className="size-5 shrink-0" />
      </button>
    </form>
  );
}
