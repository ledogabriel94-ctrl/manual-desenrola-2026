import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";

function VSLPlayer({ videoId, title }: { videoId: string; title: string }) {
  const [playing, setPlaying] = useState(false);
  if (playing) {
    return (
      <iframe
        className="absolute inset-0 w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    );
  }
  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className="absolute inset-0 w-full h-full group cursor-pointer"
      aria-label={`Reproduzir vídeo: ${title}`}
    >
      <img
        src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).src = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
        }}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#ff0000] shadow-2xl group-hover:scale-110 transition">
          <svg viewBox="0 0 24 24" className="w-9 h-9 sm:w-10 sm:h-10 text-white ml-1" fill="currentColor" aria-hidden>
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </button>
  );
}

import {
  ShieldCheck,
  CheckCircle2,
  FileText,
  Clock,
  Smartphone,
  Building2,
  ArrowRight,
  XCircle,
  FileCheck2,
  Scale,
  Landmark,
  Play,
  Download,
  Sparkles,
  BadgeCheck,
  MessageSquare,
  ListChecks,
  Phone,
  Lock as LockIcon,
  Star,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroPerson from "@/assets/hero-person.jpg";
import painPerson from "@/assets/pain-person.jpg";
import manualCover from "@/assets/manual-cover.png";
import manualBook3d from "@/assets/manual-book-3d.png";
import guaranteeSeal from "@/assets/guarantee-seal.png";
import logoDesenrola from "@/assets/logo-desenrola.png";
import logoCaixa from "@/assets/logo-caixa.png";
import logoBB from "@/assets/logo-bb.png";
import logoItau from "@/assets/logo-itau.png";
import logoBradesco from "@/assets/logo-bradesco.png";
import logoSantander from "@/assets/logo-santander.png";
import testimonial1 from "@/assets/testimonial-1.png";
import testimonial2 from "@/assets/testimonial-2.png";
import testimonial3 from "@/assets/testimonial-3.png";
import testimonial4 from "@/assets/testimonial-4.png";
import testimonial5 from "@/assets/testimonial-5.png";

export const Route = createFileRoute("/oferta")({
  head: () => ({
    meta: [
      { title: "Manual Desenrola 2026 — Roteiro educativo para negociar pelo Desenrola" },
      {
        name: "description",
        content:
          "Guia educativo independente. Roteiro prático por banco para negociar pelo Novo Desenrola Brasil. PDF por R$ 27.",
      },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { property: "og:title", content: "Manual Desenrola 2026" },
      { property: "og:type", content: "product" },
    ],
  }),
  component: Landing,
});

// 🔗 Link do checkout (Cakto). Trocar aqui se mudar a oferta/plataforma.
const CHECKOUT_URL = "https://pay.cakto.com.br/39i79c9_910063";

const BR_STRIPE = "bg-[#009c3b]";

function BrazilStripe({ className = "" }: { className?: string }) {
  return (
    <div className={`h-1.5 w-full ${BR_STRIPE} ${className}`} aria-hidden />
  );
}

function AnnouncementBar() {
  return (
    <div className="bg-white border-b border-border">
      <BrazilStripe />
      <div className="container mx-auto px-4 py-2 text-center text-[11px] sm:text-sm font-semibold tracking-wide text-[#002776]">
        <span className="text-[#009c3b]">NOVO DESENROLA BRASIL</span>
        <span className="mx-2 text-foreground/30">•</span>
        <span className="text-foreground/70">Aprenda a ganhar desconto nas suas dívidas</span>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-border">
      <BrazilStripe />
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <img src={logoDesenrola} alt="Novo Desenrola Brasil" className="h-8 sm:h-9 w-auto shrink-0" />
          <nav className="hidden md:flex items-center gap-5 text-sm font-medium text-foreground/70 border-l border-border pl-5">
            <a href="#problema" className="hover:text-[#009c3b] transition">O problema</a>
            <a href="#descontos" className="hover:text-[#009c3b] transition">Descontos</a>
            <a href="#bancos" className="hover:text-[#009c3b] transition">Bancos</a>
            <a href="#garantia" className="hover:text-[#009c3b] transition">Garantia</a>
            <a href="#faq" className="hover:text-[#009c3b] transition">FAQ</a>
          </nav>
        </div>
        <a
          href="#oferta"
          className="animate-cta shrink-0 inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-[#009c3b] hover:bg-[#00822f] text-white text-xs sm:text-sm font-bold px-3.5 sm:px-5 py-2 sm:py-2.5 shadow-md transition whitespace-nowrap"
        >
          <span className="hidden sm:inline">Quero o passo a passo</span>
          <span className="sm:hidden">Quero o guia</span>
          <ArrowRight className="size-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white border-b border-border">
      <div className="container mx-auto px-4 pt-10 pb-16 lg:pt-14 lg:pb-20 relative">
        <div className="flex flex-col items-center text-center gap-5 max-w-4xl mx-auto">
          <img src={logoDesenrola} alt="Novo Desenrola Brasil" className="h-24 md:h-28 w-auto" />
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-[-0.02em] text-[#002776] leading-[1.1]">
            Não aceite nenhuma proposta do banco{" "}
            <span className="text-[#009c3b]">antes de assistir isso.</span>
          </h1>
          <p className="text-base sm:text-lg text-foreground/70 max-w-2xl">
            O Desenrola é gratuito, mas o banco não te entrega um roteiro. Veja como negociar com mais segurança usando o canal certo, a frase certa e o passo a passo por banco.
          </p>
        </div>

        {/* VSL */}
        <div className="mt-10 max-w-5xl mx-auto animate-fade-up">
          <div className="relative rounded-3xl border border-border bg-white p-2 shadow-xl">
            <div className="relative rounded-[20px] overflow-hidden aspect-video bg-black">
              <VSLPlayer videoId="Pc9NWmXa5qk" title="Como negociar pelo Desenrola sem aceitar a primeira proposta do banco" />
            </div>
          </div>


          <div className="mt-10 flex justify-center">
            <a
              href="#oferta"
              className="animate-cta inline-flex items-center gap-2 rounded-full bg-[#009c3b] hover:bg-[#00822f] text-white text-sm font-bold px-8 py-4 shadow-xl shadow-[#009c3b]/30 hover:scale-[1.02] transition"
            >
              QUERO NEGOCIAR MELHOR
              <ArrowRight className="size-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const items = [
    { icon: Download, label: "Acesso imediato" },
    { icon: Building2, label: "6 bancos cobertos" },
    { icon: ShieldCheck, label: "Garantia de 7 dias" },
    { icon: FileText, label: "Baseado em fontes oficiais" },
    { icon: BadgeCheck, label: "Linguagem simples e direta" },
  ];
  return (
    <section className="bg-white border-y border-border">
      <div className="container mx-auto px-4 py-5">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {items.map((it) => (
            <div key={it.label} className="flex items-center gap-2 sm:justify-center text-sm font-semibold text-[#002776]">
              <it.icon className="size-5 text-[#009c3b] shrink-0" />
              <span>{it.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pain() {
  const steps = [
    { n: "01", title: "Você chama o banco", desc: "Sem roteiro, sem saber o que dizer primeiro." },
    { n: "02", title: "O banco oferece a proposta dele", desc: "Geralmente a primeira oferta, não a melhor." },
    { n: "03", title: "Você aceita sem comparar", desc: "Sem saber se existia alternativa melhor." },
  ];
  return (
    <section id="problema" className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="relative">
            <div className={`absolute -top-3 left-6 right-6 h-1.5 ${BR_STRIPE} rounded-full`} />
            <img src={painPerson} alt="Pessoa preocupada com contas" className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/5] lg:aspect-auto lg:h-full" />
          </div>
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-3xl sm:text-4xl font-black text-foreground leading-tight">
              Você pode pagar mais caro por aceitar a primeira proposta.
            </h2>
            <p className="mt-4 text-foreground/70">
              Muita gente chama o banco, recebe uma proposta e aceita rápido por medo de perder a chance. O problema é que a primeira proposta nem sempre é o melhor caminho.
            </p>
            <div className="mt-8 space-y-3">
              {steps.map((s) => (
                <div key={s.n} className="flex gap-4 p-4 rounded-xl border border-border bg-[#f5fbf6] hover:shadow-md transition animate-slide-up">
                  <div className="shrink-0 size-12 rounded-lg bg-[#009c3b] text-white font-black flex items-center justify-center">
                    {s.n}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{s.title}</h3>
                    <p className="text-sm text-foreground/70">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DiscountTables() {
  const rotativo = [
    ["91 a 120 dias", "40%"],
    ["121 a 150 dias", "45%"],
    ["151 a 180 dias", "50%"],
    ["181 a 240 dias", "55%"],
    ["241 a 300 dias", "70%"],
    ["301 a 360 dias", "85%"],
    ["1 a 2 anos atrasado", "90%"],
  ];
  const cdc = [
    ["91 a 120 dias", "30%"],
    ["121 a 150 dias", "35%"],
    ["151 a 180 dias", "40%"],
    ["181 a 240 dias", "45%"],
    ["241 a 300 dias", "60%"],
    ["301 a 360 dias", "75%"],
    ["1 a 2 anos atrasado", "80%"],
  ];

  const badges = ["30% a 90%", "até 48x", "juros até 1,99% ao mês"];

  return (
    <section id="descontos" className="py-20 bg-slate-50 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs font-bold tracking-widest text-[#002776]">
            REGRAS DO PROGRAMA
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-black leading-tight text-[#002776]">
            O que você precisa saber hoje
          </h2>
          <p className="mt-4 text-foreground/70 text-base sm:text-lg">
            Os descontos do Novo Desenrola Brasil variam conforme o tipo da dívida e o tempo de
            atraso. Veja as faixas de referência antes de falar com o banco.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {badges.map((b) => (
              <span
                key={b}
                className="inline-flex items-center gap-1.5 rounded-full bg-white border border-[#009c3b]/30 text-[#00671f] text-xs font-bold px-3 py-1.5 shadow-sm"
              >
                <CheckCircle2 className="size-3.5" />
                {b}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {[
            {
              title: "Rotativo do cartão e cheque especial",
              desc: "Para dívidas de cartão de crédito rotativo e cheque especial.",
              rows: rotativo,
            },
            {
              title: "Crédito pessoal e cartão parcelado",
              desc: "Para CDC sem garantia e cartão de crédito parcelado.",
              rows: cdc,
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-2xl bg-white border border-border shadow-sm overflow-hidden"
            >
              <div className="p-6 border-b border-border">
                <h3 className="font-black text-lg text-[#002776]">{card.title}</h3>
                <p className="mt-1 text-sm text-foreground/70">{card.desc}</p>
              </div>
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 text-foreground/60 text-xs uppercase tracking-wide">
                    <th className="text-left font-semibold px-4 sm:px-6 py-3">Tempo de atraso</th>
                    <th className="text-right font-semibold px-4 sm:px-6 py-3">Desconto até</th>
                  </tr>
                </thead>
                <tbody>
                  {card.rows.map(([faixa, pct]) => (
                    <tr key={faixa} className="border-t border-border/70">
                      <td className="px-4 sm:px-6 py-3 text-foreground/80">{faixa}</td>
                      <td className="px-4 sm:px-6 py-3 text-right font-bold text-[#00671f]">{pct}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>

        <div className="mt-8 max-w-5xl mx-auto rounded-xl border border-amber-200 bg-amber-50 p-5 flex gap-3">
          <ShieldCheck className="size-5 text-amber-700 shrink-0 mt-0.5" />
          <p className="text-sm text-amber-900 leading-relaxed">
            <strong>Importante:</strong> os percentuais dependem da modalidade da dívida, tempo
            de atraso, banco participante e elegibilidade. O programa é gratuito e a negociação
            deve ser feita diretamente pelos canais oficiais do banco. O manual não garante
            aprovação ou desconto; ele ajuda você a entender as regras, organizar as informações
            e negociar com mais segurança.
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center gap-3">
          <a
            href="#oferta"
            className="animate-cta inline-flex items-center gap-2 rounded-full bg-[#009c3b] hover:bg-[#00822f] text-white text-sm sm:text-base font-bold px-6 py-3.5 shadow-md transition"
          >
            Quero o roteiro para negociar com segurança
            <ArrowRight className="size-4" />
          </a>
          <p className="text-xs text-foreground/50 text-center max-w-2xl">
            Fonte: Ministério da Fazenda, Medida Provisória nº 1.355/2026 e regras do Novo
            Desenrola Brasil. Atualizado em 29/05/2026.
          </p>
        </div>
      </div>
    </section>
  );
}



function Mechanism() {
  const without = [
    "Pergunta genérica",
    "Não sabe qual canal usar",
    "Aceita a primeira oferta",
    "Não sabe responder quando o banco nega",
  ];
  const withM = [
    "Canal certo",
    "Frase certa",
    "Roteiro por banco",
    "Respostas prontas",
    "Mais clareza antes de negociar",
  ];
  return (
    <section className="py-20 bg-muted/40 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          
          <h2 className="mt-2 text-3xl sm:text-4xl font-black leading-tight">
            O banco oferece uma proposta. <span className="text-[#009c3b]">O manual te dá um roteiro.</span>
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="rounded-2xl border-2 border-red-200 bg-red-50/60 p-7">
            <div className="flex items-center gap-2 mb-4">
              <XCircle className="size-6 text-red-600" />
              <h3 className="font-black text-red-700 text-lg">Sem o manual</h3>
            </div>
            <ul className="space-y-3">
              {without.map((t) => (
                <li key={t} className="flex gap-2 text-foreground/80">
                  <XCircle className="size-5 text-red-500 shrink-0 mt-0.5" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border-2 border-[#009c3b]/30 bg-white p-7 shadow-xl relative overflow-hidden">
            <div className={`absolute top-0 left-0 right-0 h-1.5 ${BR_STRIPE}`} />
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="size-6 text-[#009c3b]" />
              <h3 className="font-black text-[#00671f] text-lg">Com o manual</h3>
            </div>
            <ul className="space-y-3">
              {withM.map((t) => (
                <li key={t} className="flex gap-2 text-foreground/80">
                  <CheckCircle2 className="size-5 text-[#009c3b] shrink-0 mt-0.5" />
                  <span className="font-medium">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Product() {
  const bullets = [
    "Guia prático completo, 64 páginas",
    "38 perguntas respondidas",
    "Caixa, Banco do Brasil, Itaú, Bradesco, Santander e Nubank",
    "Frases prontas para abrir a negociação",
    "Checklist antes de ligar para o banco",
    "Respostas para objeções comuns",
  ];
  return (
    <section className="py-24 relative overflow-hidden text-white bg-[#00350f]">

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <BookMockup className="animate-float-slow" />
          </div>
          <div>
            
            <h2 className="mt-2 text-3xl sm:text-4xl font-black leading-tight">
              Não é curso. É um manual de campo para usar <span className="text-[#ffdf00]">antes</span> de falar com o banco.
            </h2>
            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {bullets.map((b) => (
                <div key={b} className="flex gap-3 items-start bg-white/10 backdrop-blur border border-white/15 rounded-xl p-4 hover:bg-white/15 transition">
                  <CheckCircle2 className="size-5 text-[#9eff7a] shrink-0 mt-0.5" />
                  <span className="text-sm font-medium">{b}</span>
                </div>
              ))}
            </div>
            <a
              href="#oferta"
              className="animate-cta-gold mt-8 inline-flex items-center gap-2 rounded-full bg-[#ffdf00] hover:bg-[#ffe833] text-[#002776] text-base font-black px-7 py-3.5 shadow-xl transition"
            >
              QUERO O PASSO A PASSO
              <ArrowRight className="size-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Banks() {
  const banks = [
    { name: "Caixa", slug: "caixa", logo: logoCaixa },
    { name: "Banco do Brasil", slug: "bancodobrasil", logo: logoBB },
    { name: "Itaú", slug: "itau", logo: logoItau },
    { name: "Bradesco", slug: "bradesco", logo: logoBradesco },
    { name: "Santander", slug: "santander", logo: logoSantander },
    { name: "Nubank", slug: "nubank" },
  ];
  return (
    <section id="bancos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs font-bold tracking-widest text-[#009c3b]">BANCOS COBERTOS</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-black leading-tight">
            Escolha seu banco e siga o roteiro.
          </h2>
          <p className="mt-3 text-foreground/70">Canal indicado + roteiro de conversa + objeções comuns.</p>
        </div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {banks.map((b, i) => (
            <div key={b.name} className="group relative rounded-2xl border border-border bg-white p-6 hover:shadow-xl hover:-translate-y-1 transition overflow-hidden">
              <div className={`absolute top-0 left-0 right-0 h-1 ${BR_STRIPE}`} />
              <div className="flex items-center gap-3">
                <div className="size-12 rounded-xl bg-muted/60 border border-border flex items-center justify-center p-2">
                  <img
                    src={b.logo ?? `https://cdn.simpleicons.org/${b.slug}`}
                    alt={`Logo ${b.name}`}
                    className="max-w-full max-h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#002776]">BANCO {String(i + 1).padStart(2, "0")}</p>
                  <h3 className="font-black text-foreground">{b.name}</h3>
                </div>
              </div>
              <div className="mt-4 space-y-1.5 text-xs text-foreground/70">
                <p className="flex items-center gap-1.5"><Phone className="size-3.5 text-[#009c3b]" /> Canal indicado</p>
                <p className="flex items-center gap-1.5"><MessageSquare className="size-3.5 text-[#009c3b]" /> Roteiro de conversa</p>
                <p className="flex items-center gap-1.5"><ListChecks className="size-3.5 text-[#009c3b]" /> Objeções comuns</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function Docs() {
  const docs = [
    { icon: Sparkles, title: "Novo Desenrola Brasil", desc: "Programa público de renegociação de dívidas." },
    { icon: FileCheck2, title: "Medida Provisória nº 1.355/2026", desc: "Base legal do novo programa." },
    { icon: FileText, title: "Portaria Normativa MF nº 1.243/2026", desc: "Regras operacionais oficiais." },
    { icon: Scale, title: "Súmula 548 do STJ", desc: "Entendimento sobre quitação de dívidas." },
  ];
  return (
    <section className="py-20 bg-muted/40 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs font-bold tracking-widest text-[#002776]">PROVA DOCUMENTAL</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-black leading-tight">
            Baseado em <span className="text-[#009c3b]">documentos públicos</span>, não em promessa vazia.
          </h2>
        </div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {docs.map((d) => (
            <div key={d.title} className="relative bg-white rounded-2xl border border-border p-6 hover:shadow-xl transition overflow-hidden">
              <div className={`absolute top-0 left-0 right-0 h-1 ${BR_STRIPE}`} />
              <div className="size-12 rounded-xl bg-[#002776]/10 flex items-center justify-center">
                <d.icon className="size-6 text-[#002776]" />
              </div>
              <h3 className="mt-4 font-black text-foreground">{d.title}</h3>
              <p className="mt-2 text-sm text-foreground/70">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Offer() {
  const includes = [
    "Roteiros por banco participante",
    "Tabelas de desconto por tipo de dívida",
    "Frases prontas e checklist para negociar",
    "Atualizações enquanto o programa estiver ativo",
    "Garantia incondicional de 7 dias",
  ];
  return (
    <section id="oferta" className="py-24 relative overflow-hidden bg-muted/30 border-y border-border">
      <div className="absolute top-0 left-0 right-0">
        <BrazilStripe />
      </div>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs font-bold tracking-widest text-[#002776]">A OFERTA</span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
            Acesse o <span className="text-[#002776]">Guia Completo Desenrola 2026</span>
          </h2>
          <p className="mt-4 text-foreground/70 text-lg max-w-2xl mx-auto">
            Material educativo digital com roteiros por banco, tabelas de desconto e checklist para negociar com mais segurança.
          </p>
        </div>

        <div className="mt-12 max-w-5xl mx-auto">
          <div className="relative rounded-2xl border border-border bg-white shadow-md">
            <div className="rounded-2xl bg-white p-5 sm:p-8 lg:p-12">
              <div className="grid lg:grid-cols-5 gap-10 items-center">
                <div className="lg:col-span-2 flex justify-center">
                  <BookMockup size="sm" className="animate-float-slow" />
                </div>
                <div className="lg:col-span-3">
                  <span className="inline-block text-xs font-bold tracking-widest text-[#002776] mb-3">CONTEÚDO INCLUÍDO</span>
                  <ul className="space-y-3">
                    {includes.map((i) => (
                      <li key={i} className="flex gap-2.5 items-start text-foreground/80">
                        <CheckCircle2 className="size-5 text-[#009c3b] shrink-0 mt-0.5" />
                        <span className="text-[15px] font-medium">{i}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 pt-6 border-t border-border">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <span className="text-4xl sm:text-5xl font-black text-foreground leading-none">R$ 27</span>
                      <div className="flex flex-col">
                        <span className="text-xs text-foreground/50">Preço de lançamento</span>
                        <span className="text-xs text-foreground/50 line-through">De R$ 97</span>
                      </div>
                    </div>
                    <p className="text-xs text-foreground/60 mt-2">Pagamento único · Acesso digital imediato</p>
                  </div>

                  <a
                    href={CHECKOUT_URL}
                    className="animate-cta mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-[#009c3b] hover:bg-[#00822f] text-white text-base font-bold px-8 py-4 shadow-md hover:shadow-lg transition"
                  >
                    Acessar o guia completo
                    <ArrowRight className="size-5" />
                  </a>

                  <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-foreground/70">
                    <span className="inline-flex items-center gap-1.5"><ShieldCheck className="size-4 text-[#009c3b]" />Garantia de 7 dias</span>
                    <span className="inline-flex items-center gap-1.5"><LockIcon className="size-4 text-[#009c3b]" />Compra segura</span>
                    <span className="inline-flex items-center gap-1.5"><Download className="size-4 text-[#009c3b]" />Acesso imediato</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-foreground/50 max-w-2xl mx-auto">
            Descontos podem chegar a 90%, conforme regras e elegibilidade do programa.
          </p>
        </div>
      </div>
    </section>
  );
}


function BookMockup({ size = "md", className = "" }: { size?: "sm" | "md"; className?: string }) {
  const maxW = size === "sm" ? 320 : 420;
  const aspect = size === "sm" ? 320 / 450 : 420 / 595;
  return (
    <div
      className={`relative w-full ${className}`}
      style={{ maxWidth: maxW, aspectRatio: aspect }}
    >
      <div className="absolute -inset-10 bg-[#9eff7a]/20 blur-3xl rounded-full" aria-hidden />
      <img
        src={manualBook3d}
        alt="Manual Desenrola 2026 — livro 3D"
        className="relative w-full h-full object-contain drop-shadow-2xl"
      />
    </div>
  );
}

function Testimonials() {
  const testimonials = [
    {
      image: testimonial1,
      name: "Lucas M.",
      profile: "Fatura e acordo bancário",
      text: "O guia me ajudou a entender melhor a conversa com o banco e chegar mais preparado para avaliar a proposta.",
    },
    {
      image: testimonial2,
      name: "Mariana S.",
      profile: "Cartão em atraso",
      text: "Eu estava perdida sobre o que perguntar no atendimento. O guia me ajudou a organizar as informações antes de chamar o banco.",
    },
    {
      image: testimonial3,
      name: "Ana P.",
      profile: "Negociação com banco",
      text: "Não é promessa de desconto, é um passo a passo para negociar com mais clareza. Isso me passou segurança.",
    },
    {
      image: testimonial4,
      name: "Carlos R.",
      profile: "Empréstimo pessoal",
      text: "Gostei principalmente das tabelas e dos roteiros. Fica mais fácil entender se a proposta faz sentido e comparar melhor.",
    },
    {
      image: testimonial5,
      name: "Patrícia A.",
      profile: "Organização antes da negociação",
      text: "O conteúdo é direto, bem explicado e passa confiança. Usei o checklist para não esquecer pontos importantes.",
    },
  ];

  return (
    <section className="py-16 bg-[#F8FAFC] border-y border-[#E5E7EB]">
      <div className="mx-auto max-w-[1120px] px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] leading-tight">
            O que quem acessou destaca
          </h2>
          <p className="mt-3 text-[#475569] text-base leading-relaxed">
            Comentários sobre clareza, organização e segurança antes de falar com o banco.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl bg-white border border-[#E5E7EB] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
              <div className="flex items-center gap-3">
                <img
                  src={t.image}
                  alt={`Foto de ${t.name}`}
                  className="size-12 rounded-full object-cover border border-[#E5E7EB]"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-bold text-[#0F172A]">{t.name}</p>
                  <p className="text-xs text-[#475569]">{t.profile}</p>
                </div>
              </div>
              <div className="mt-3 flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-4 text-[#facc15] fill-[#facc15]" />
                ))}
              </div>
              <p className="mt-3 text-sm text-[#475569] leading-relaxed">
                "{t.text}"
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-[#64748B] leading-relaxed max-w-2xl mx-auto">
          Depoimentos representam experiências individuais com o material. Resultados de negociação variam conforme banco, dívida e elegibilidade.
        </p>
      </div>
    </section>
  );
}

function Guarantee() {
  return (
    <section id="garantia" className="py-14 bg-white border-y border-[#E5E7EB]">
      <div className="mx-auto max-w-[1120px] px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#009c3b] uppercase">
              <ShieldCheck className="size-4" />
              Compra segura
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-[#0F172A] leading-tight">
              Garantia incondicional de 7 dias
            </h2>
            <p className="mt-3 text-[#475569] text-base leading-relaxed max-w-lg">
              Você acessa o guia, lê o conteúdo e decide com calma. Se não gostar, pode solicitar o reembolso dentro de 7 dias, sem burocracia.
            </p>
            <a
              href="#oferta"
              className="animate-cta mt-6 inline-flex items-center gap-2 rounded-full bg-[#009c3b] hover:bg-[#00822f] text-white text-sm font-bold px-6 h-[44px] shadow-sm transition"
            >
              Acessar o guia completo
              <ArrowRight className="size-4" />
            </a>
          </div>

          <div className="rounded-2xl bg-[#F8FAFC] border border-[#E5E7EB] p-6">
            <h3 className="text-sm font-bold tracking-wide text-[#0F172A] uppercase">
              O que isso significa
            </h3>
            <ul className="mt-4 space-y-2.5">
              {[
                "7 dias para avaliar o material",
                "Reembolso total dentro do prazo",
                "Acesso digital imediato após a compra",
                "Pagamento único, sem assinatura",
                "Suporte pelo canal informado na compra",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#475569] text-sm">
                  <CheckCircle2 className="size-4 text-[#009c3b] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 max-w-3xl">
          <p className="text-xs text-[#64748B] leading-relaxed">
            A garantia se refere à satisfação com o conteúdo do guia, não ao resultado da negociação com bancos.
          </p>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "O Desenrola é gratuito?", a: "Sim. O Novo Desenrola Brasil é um programa público e gratuito." },
    { q: "Então por que pagar pelo manual?", a: "O manual não vende acesso ao programa. Ele oferece orientação educativa, roteiro e organização para você negociar com mais clareza." },
    { q: "O manual é um guia educativo independente?", a: "Sim. É um material educativo baseado em documentos públicos, sem vínculo com bancos ou órgãos oficiais." },
    { q: "O desconto é garantido?", a: "Não. Os descontos dependem de banco, tipo de dívida, atraso e regras vigentes. O manual te ajuda a chegar melhor preparado." },
    { q: "Serve para qualquer dívida?", a: "O foco são dívidas bancárias elegíveis ao Desenrola. O manual também traz orientações gerais de negociação." },
    { q: "Como recebo o acesso?", a: "Acesso imediato por e-mail após a confirmação do pagamento." },
    { q: "Posso ler pelo celular?", a: "Sim. O PDF pode ser lido em celular, tablet ou computador." },
    { q: "E se eu não gostar?", a: "Você tem 7 dias para pedir reembolso, sem perguntas." },
  ];
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center">
          <span className="inline-block text-xs font-bold tracking-widest text-[#009c3b]">PERGUNTAS FREQUENTES</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-black">Tire suas dúvidas</h2>
        </div>
        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`q${i}`} className="border-b border-border">
              <AccordionTrigger className="text-left font-bold text-foreground hover:text-[#009c3b]">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/75">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-20 relative overflow-hidden bg-[#00350f]">
      <BrazilStripe />
      <div className="container mx-auto px-4 text-center text-white py-10">
        <Clock className="mx-auto size-10 text-[#ffdf00]" />
        <h2 className="mt-4 text-2xl sm:text-4xl lg:text-5xl font-black max-w-3xl mx-auto leading-tight">
          Antes de falar com o banco, tenha o roteiro na mão.
        </h2>
        <a
          href="#oferta"
          className="animate-cta-gold mt-8 inline-flex items-center gap-2 sm:gap-3 rounded-full bg-[#ffdf00] hover:bg-[#ffe833] text-[#002776] text-sm sm:text-lg font-black px-6 sm:px-10 py-4 sm:py-5 shadow-2xl transition hover:scale-[1.02] max-w-full"
        >
          <span className="whitespace-normal sm:whitespace-nowrap">QUERO O PASSO A PASSO POR R$ 27</span>
          <ArrowRight className="size-5 shrink-0" />
        </a>
        <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-white/80">
          <span className="inline-flex items-center gap-1.5"><Smartphone className="size-4" />Leia no celular</span>
          <span className="inline-flex items-center gap-1.5"><Download className="size-4" />PDF imediato</span>
          <span className="inline-flex items-center gap-1.5"><ShieldCheck className="size-4" />Garantia 7 dias</span>
        </div>
      </div>
      <BrazilStripe />
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground text-white/80 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4 text-center max-w-3xl mx-auto">
          <img src={logoDesenrola} alt="Novo Desenrola Brasil" className="h-10 w-auto opacity-90" />
          <p className="text-xs leading-relaxed">
            Guia educativo independente baseado em documentos públicos. O Novo Desenrola Brasil é um programa gratuito. Este produto oferece orientação educativa, roteiro e organização para negociação. Resultados variam conforme banco, tipo de dívida, elegibilidade e regras vigentes.
          </p>
          <div className="flex gap-5 text-xs">
            <a href="/termos" className="hover:text-white">Termos</a>
            <a href="/privacidade" className="hover:text-white">Privacidade</a>
            <a href="/contato" className="hover:text-white">Contato</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Landing() {
  const navigate = useNavigate();
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    // Trava: só acessa a oferta quem completou o quiz.
    const ok = typeof window !== "undefined" && localStorage.getItem("quiz_completo") === "1";
    if (!ok) {
      navigate({ to: "/quiz", replace: true });
    } else {
      setAllowed(true);
    }
  }, [navigate]);

  if (!allowed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-3 text-foreground/60">
          <div className="size-10 rounded-full border-4 border-[#009c3b]/30 border-t-[#009c3b] animate-spin" />
          <p className="text-sm font-medium">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header />
      <Hero />
      <TrustStrip />
      <Pain />
      <DiscountTables />
      <Mechanism />

      <Product />
      <Banks />
      <Docs />
      <Offer />
      <Testimonials />
      
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
