import { useState, useEffect } from "react";
import { ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import logoDesenrola from "@/assets/logo-desenrola.png";

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
  {
    id: "tempo",
    tipo: "opcoes" as const,
    pergunta: "Há quanto tempo seu nome está negativado?",
    opcoes: [
      "Menos de 6 meses",
      "De 6 meses a 1 ano",
      "Mais de 1 ano",
      "Não sei / não estou negativado(a)",
    ],
  },
  {
    id: "credores",
    tipo: "opcoes" as const,
    pergunta: "Com quantos bancos ou credores você tem dívida?",
    opcoes: ["Só 1", "2 ou 3", "Mais de 3"],
  },
  {
    id: "objetivo",
    tipo: "opcoes" as const,
    pergunta: "O que você mais quer resolver agora?",
    opcoes: [
      "Limpar meu nome (sair do Serasa/SPC)",
      "Parar de receber cobranças",
      "Voltar a ter crédito",
      "Pagar minhas dívidas mais barato",
    ],
  },
];

const TOTAL_ETAPAS = PERGUNTAS.length;

// Tempo total da tela "Analisando seu perfil" (10s) + frases que vão trocando.
const ANALISE_MS = 10000;
const FRASES_ANALISE = [
  "Analisando suas respostas...",
  "Verificando o seu perfil de dívida...",
  "Calculando o melhor caminho de negociação...",
  "Cruzando com as condições disponíveis...",
  "Preparando o seu resultado personalizado...",
];

export function Quiz({ onComplete }: { onComplete: () => void }) {
  const [etapa, setEtapa] = useState(0);
  const [respostas, setRespostas] = useState<Record<string, string>>({});
  const [analisando, setAnalisando] = useState(false);
  const [passo, setPasso] = useState(0);

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

  // "Analisando": frases trocam ao longo do tempo e ao final vai pro resultado.
  useEffect(() => {
    if (!analisando) return;
    const perStep = ANALISE_MS / FRASES_ANALISE.length;
    const stepIv = setInterval(() => {
      setPasso((p) => Math.min(p + 1, FRASES_ANALISE.length - 1));
    }, perStep);
    const t = setTimeout(() => {
      onComplete();
    }, ANALISE_MS);
    return () => {
      clearInterval(stepIv);
      clearTimeout(t);
    };
  }, [analisando, onComplete]);

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
              <ul className="mt-1 w-full max-w-sm space-y-2.5 text-left">
                {FRASES_ANALISE.map((f, idx) => (
                  <li
                    key={f}
                    className={`flex items-center gap-2.5 text-sm sm:text-base font-medium transition-colors duration-300 ${
                      idx <= passo ? "text-foreground" : "text-foreground/30"
                    }`}
                  >
                    {idx < passo ? (
                      <CheckCircle2 className="size-5 shrink-0 text-[#009c3b]" />
                    ) : idx === passo ? (
                      <span className="size-5 shrink-0 rounded-full border-2 border-[#009c3b]/30 border-t-[#009c3b] animate-spin" />
                    ) : (
                      <span className="size-5 shrink-0 rounded-full border-2 border-foreground/15" />
                    )}
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
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
        className="animate-cta inline-flex w-full sm:w-auto sm:mx-auto items-center justify-center gap-2 rounded-full bg-[#009c3b] hover:bg-[#00822f] text-white text-sm sm:text-base font-bold px-8 py-4 shadow-lg transition hover:scale-[1.02] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        Continuar
        <ArrowRight className="size-5 shrink-0" />
      </button>
    </form>
  );
}
