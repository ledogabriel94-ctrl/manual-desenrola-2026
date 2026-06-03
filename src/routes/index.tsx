import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Smartphone,
  ShieldCheck,
  AlertTriangle,
  TrendingDown,
  CalendarDays,
  Sparkles,
} from "lucide-react";
import logoDesenrola from "@/assets/logo-desenrola.png";
import { Quiz } from "@/funnel/Quiz";
import { Resultado } from "@/funnel/Resultado";
import { Oferta } from "@/funnel/Oferta";

// Assets reais puxados do site original (em /public/desenrola), sem símbolos do governo.
const VIDEO_SRC = "/desenrola/desenrola-video.mp4";
const VIDEO_POSTER = "/desenrola/desenrola-video-poster.jpg";
const IMG_MULHER = "/desenrola/desenrola-mulher.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Renegociação de dívidas 2026: como limpar o nome com descontos de até 96%" },
      {
        name: "description",
        content:
          "Conteúdo informativo independente. Veja como brasileiros estão renegociando dívidas com descontos de até 96% e parcelamento em até 60 meses pelo Desenrola.",
      },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { property: "og:title", content: "Renegociação de dívidas 2026" },
      { property: "og:type", content: "article" },
    ],
  }),
  component: Funnel,
});

/* ───────────────────────────────────────────────────────────────
   FUNIL EM PÁGINA ÚNICA
   Tudo roda na mesma URL (manualdesenrola.com.br), sem mudar o caminho
   — isso preserva os parâmetros de campanha (UTM) e o pixel funciona.
   As etapas trocam por estado, não por rota.
   ─────────────────────────────────────────────────────────────── */
function Funnel() {
  const [step, setStep] = useState<"materia" | "quiz" | "resultado" | "oferta">("materia");

  // Sobe pro topo a cada troca de etapa.
  useEffect(() => {
    if (typeof window !== "undefined") window.scrollTo(0, 0);
  }, [step]);

  if (step === "quiz") return <Quiz onComplete={() => setStep("resultado")} />;
  if (step === "resultado") return <Resultado onContinue={() => setStep("oferta")} />;
  if (step === "oferta") return <Oferta />;
  return <Advertorial onNext={() => setStep("quiz")} />;
}

function BrazilStripe({ className = "" }: { className?: string }) {
  return <div className={`h-1.5 w-full bg-[#009c3b] ${className}`} aria-hidden />;
}

function CtaButton({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="animate-cta inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#009c3b] hover:bg-[#00822f] text-white text-sm sm:text-base font-bold px-6 sm:px-9 py-4 shadow-lg transition hover:scale-[1.02]"
    >
      {children}
      <ArrowRight className="size-5 shrink-0" />
    </button>
  );
}

function CtaBlock({
  onNext,
  texto = "Verificar Minha Elegibilidade Agora",
}: {
  onNext: () => void;
  texto?: string;
}) {
  return (
    <div className="my-8 rounded-2xl border border-[#009c3b]/25 bg-[#f1f8f3] p-5 sm:p-6 text-center">
      <CtaButton onClick={onNext}>{texto}</CtaButton>
      <p className="mt-3 text-xs font-semibold text-[#009c3b] flex items-center justify-center gap-1.5">
        <Clock className="size-3.5" /> Vagas limitadas — leva menos de 1 minuto
      </p>
    </div>
  );
}

function Advertorial({ onNext }: { onNext: () => void }) {
  return (
    <div className="min-h-screen bg-white text-[#1a1a1a]">
      <BrazilStripe />

      {/* topo simples — NÃO é gov.br */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 h-14 flex items-center justify-between">
          <img src={logoDesenrola} alt="Manual Desenrola" className="h-7 sm:h-8 w-auto" />
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-foreground/40">
            Conteúdo informativo
          </span>
        </div>
      </header>

      <article className="container mx-auto px-4 max-w-3xl py-8 sm:py-10">
        {/* categoria + meta */}
        <div className="flex items-center gap-2 text-xs font-bold">
          <span className="rounded bg-[#009c3b] px-2 py-1 text-white uppercase tracking-wide">Finanças</span>
          <span className="text-foreground/40">Renegociação de dívidas</span>
        </div>

        <h1 className="mt-4 text-3xl sm:text-4xl lg:text-[2.75rem] font-black leading-[1.12] text-[#002776]">
          Renegociação de dívidas em 2026: como limpar o nome com descontos de até{" "}
          <span className="text-[#009c3b]">96%</span> e parcelamento em até{" "}
          <span className="text-[#009c3b]">60 meses</span>
        </h1>

        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-foreground/50 border-y border-border py-3">
          <span>Por <strong className="text-foreground/70">Redação Manual Desenrola</strong></span>
          <span>•</span>
          <span>Publicado em 04/05/2026</span>
          <span>•</span>
          <span>Atualizado em 02/06/2026</span>
        </div>

        {/* vídeo de destaque (puxado do site original) */}
        <figure className="mt-6">
          <div className="overflow-hidden rounded-2xl border border-border bg-black">
            <video
              className="w-full h-auto"
              src={VIDEO_SRC}
              poster={VIDEO_POSTER}
              controls
              playsInline
              preload="metadata"
            />
          </div>
          <figcaption className="mt-2 text-xs text-foreground/45">
            Entenda em 30 segundos como funciona a renegociação. (Vídeo ilustrativo)
          </figcaption>
        </figure>

        {/* lead */}
        <div className="prose-custom mt-7 space-y-4 text-[1.05rem] leading-relaxed text-foreground/85">
          <p>
            <span className="float-left mr-2 text-5xl font-black leading-none text-[#002776]">M</span>
            ais de <strong>72 milhões de brasileiros</strong> têm o nome negativado — e uma nova janela de
            renegociação de dívidas está abrindo com condições que raramente apareceram antes. Pelo{" "}
            <strong>Desenrola Brasil</strong>, é possível renegociar dívidas em bancos, financeiras, cartões de
            crédito e outros credores com <strong>descontos de até 96%</strong> e{" "}
            <strong>parcelamento em até 60 meses</strong>.
          </p>
          <p>
            O problema? A maioria das pessoas não sabe <em>como</em> negociar, qual canal usar, nem o que dizer
            para conseguir o melhor desconto — e acaba aceitando a primeira proposta. As vagas com as melhores
            condições são limitadas e se esgotam rápido.
          </p>
        </div>

        <CtaBlock onNext={onNext} />

        {/* seção 1 */}
        <h2 className="mt-10 text-2xl font-black text-[#002776]">1. O que está em jogo agora</h2>
        <ul className="mt-4 space-y-3">
          {[
            { icon: TrendingDown, t: "Descontos de até 96%", d: "Negociação direta com os credores, com condições especiais nesta rodada." },
            { icon: CalendarDays, t: "Parcelamento em até 60 meses", d: "Parcelas que cabem no bolso, com condições facilitadas para dívidas menores." },
            { icon: CheckCircle2, t: "Possibilidade de regularizar o nome", d: "Após a quitação ou acordo, o caminho para sair dos cadastros de inadimplentes." },
            { icon: Smartphone, t: "Processo 100% online", d: "Sem burocracia, do celular ou do computador, sem precisar ir ao banco." },
          ].map((item) => (
            <li key={item.t} className="flex gap-3 rounded-xl border border-border p-4">
              <item.icon className="size-6 shrink-0 text-[#009c3b]" />
              <div>
                <p className="font-bold text-foreground">{item.t}</p>
                <p className="text-sm text-foreground/70">{item.d}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* alerta vagas */}
        <div className="mt-8 flex gap-3 rounded-2xl border border-[#ffdf00] bg-[#fffbe6] p-5">
          <AlertTriangle className="size-6 shrink-0 text-[#b8860b]" />
          <div>
            <p className="font-black text-[#002776]">Vagas limitadas para esta rodada</p>
            <p className="mt-1 text-sm text-foreground/75">
              Devido à alta demanda, restam poucas vagas para renegociar com as melhores condições. Quem deixa
              para depois pode pegar uma próxima rodada com condições menos favoráveis.
            </p>
          </div>
        </div>

        {/* imagem secundária (puxada do site original) */}
        <figure className="mt-8">
          <img
            src={IMG_MULHER}
            alt="Mulher renegociando as dívidas pelo celular"
            className="w-full rounded-2xl border border-border object-cover"
          />
        </figure>

        {/* seção 2 */}
        <h2 className="mt-10 text-2xl font-black text-[#002776]">2. Como descobrir o seu caminho</h2>
        <p className="mt-3 text-foreground/80">
          Antes de falar com o banco, o ideal é entender o seu perfil de dívida e qual a melhor estratégia de
          negociação. É rápido e pode ser feito totalmente online:
        </p>
        <ol className="mt-4 space-y-3">
          {[
            "Responda algumas perguntas rápidas sobre a sua situação",
            "Descubra o seu perfil de negociação",
            "Receba o roteiro com o passo a passo certo para o seu caso",
          ].map((passo, i) => (
            <li key={passo} className="flex items-center gap-3">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#009c3b] text-sm font-black text-white">
                {i + 1}
              </span>
              <span className="font-medium text-foreground/85">{passo}</span>
            </li>
          ))}
        </ol>

        <CtaBlock onNext={onNext} />

        {/* nota de transparência (substitui a antiga "Base Legal" com leis do gov) */}
        <div className="mt-10 rounded-2xl bg-[#f6f7f8] p-5 text-sm text-foreground/65 flex gap-3">
          <Sparkles className="size-5 shrink-0 text-foreground/40" />
          <p>
            <strong className="text-foreground/80">Aviso:</strong> este é um conteúdo informativo e um material
            educativo independente. Não temos vínculo com o governo, com bancos ou com órgãos oficiais. O
            Desenrola Brasil é um programa gratuito; aqui você encontra orientação, roteiro e organização para
            negociar melhor. Resultados variam conforme o credor, o tipo de dívida e as regras vigentes.
          </p>
        </div>
      </article>

      {/* rodapé — independente, NÃO gov.br */}
      <footer className="mt-6 bg-foreground text-white/75 py-10">
        <div className="container mx-auto px-4 max-w-3xl text-center flex flex-col items-center gap-4">
          <img src={logoDesenrola} alt="Manual Desenrola" className="h-9 w-auto opacity-90" />
          <p className="text-xs leading-relaxed max-w-2xl">
            Conteúdo informativo e educativo independente. Não somos o governo, banco ou órgão oficial. Material
            de orientação para negociação de dívidas. Resultados variam conforme cada caso.
          </p>
          <div className="flex gap-5 text-xs">
            <a href="/termos" className="hover:text-white">Termos</a>
            <a href="/privacidade" className="hover:text-white">Privacidade</a>
            <a href="/contato" className="hover:text-white">Contato</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
