import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle2, Clock, ShieldCheck, BadgeCheck, TrendingDown } from "lucide-react";
import logoDesenrola from "@/assets/logo-desenrola.png";
import personFinance from "@/assets/person-finance.jpg";

// Foto real puxada do site original (sem símbolos do governo).
const IMG_MULHER = "/desenrola/desenrola-mulher.webp";

function BrazilStripe({ className = "" }: { className?: string }) {
  return <div className={`h-1.5 w-full bg-[#009c3b] ${className}`} aria-hidden />;
}

function Cta({
  onClick,
  children = "Quero o passo a passo",
}: {
  onClick: () => void;
  children?: React.ReactNode;
}) {
  return (
    <div className="text-center">
      <button
        type="button"
        onClick={onClick}
        className="animate-cta inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#009c3b] hover:bg-[#00822f] text-white text-sm sm:text-base font-bold px-6 sm:px-9 py-4 shadow-lg transition hover:scale-[1.02]"
      >
        {children}
        <ArrowRight className="size-5 shrink-0" />
      </button>
      <p className="mt-3 text-xs font-semibold text-[#009c3b] flex items-center justify-center gap-1.5">
        <Clock className="size-3.5" /> Vagas limitadas — garanta o seu acesso
      </p>
    </div>
  );
}

export function Resultado({ onContinue }: { onContinue: () => void }) {
  const [nome, setNome] = useState("");

  useEffect(() => {
    setNome(localStorage.getItem("quiz_nome") || "");
  }, []);

  const primeiroNome = nome.split(" ")[0] || "";

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a]">
      <BrazilStripe />

      <header className="border-b border-border">
        <div className="container mx-auto px-4 h-14 flex items-center justify-center">
          <img src={logoDesenrola} alt="Manual Desenrola" className="h-7 sm:h-8 w-auto" />
        </div>
      </header>

      <main className="container mx-auto px-4 max-w-2xl py-8 sm:py-10">
        {/* selo de pré-aprovado */}
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#f1f8f3] border border-[#009c3b]/30 px-4 py-1.5 text-xs font-bold text-[#009c3b]">
            <BadgeCheck className="size-4" /> Análise concluída
          </span>
        </div>

        <h1 className="mt-5 text-center text-2xl sm:text-3xl font-black text-[#002776] leading-tight">
          {primeiroNome ? <>Boa notícia, {primeiroNome}! </> : <>Boa notícia! </>}
          Seu perfil tem alta chance de renegociar com desconto.
        </h1>

        {/* BLOCO 1 (print 3) */}
        <section className="mt-8 rounded-2xl border border-border overflow-hidden">
          <div className="bg-[#002776] p-5 text-center">
            <p className="text-[11px] font-black uppercase tracking-wider text-[#ffdf00]">Novo Desenrola Brasil</p>
            <p className="mt-1 text-sm font-semibold text-white/90">
              Programa do Governo Federal para renegociação de dívidas de famílias, estudantes e empresas
            </p>
          </div>
          <div className="bg-[#f6f7f8] p-5 sm:p-6">
            <p className="text-[1.02rem] leading-relaxed text-foreground/85">
              O Novo Desenrola Brasil é uma iniciativa do Governo Federal que pode garantir a renegociação das
              suas dívidas com <strong>descontos de até 96%</strong>! Se você for aprovado nos critérios do
              programa, poderá limpar seu nome e regularizar sua situação financeira com condições especiais.
              Continue seu cadastro aqui no site para verificar sua elegibilidade.
            </p>
          </div>
        </section>

        {/* BLOCO 2 (print 4) */}
        <section className="mt-6">
          <img
            src={IMG_MULHER}
            alt="Pessoa renegociando dívidas pelo celular"
            className="w-full rounded-2xl border border-border object-cover"
          />
          <div className="mt-4 rounded-2xl bg-[#f6f7f8] p-5 sm:p-6">
            <p className="text-[1.02rem] leading-relaxed text-foreground/85">
              Suas dívidas serão renegociadas diretamente com os credores através do portal oficial. Os
              descontos podem chegar a <strong>96% do valor original</strong>! Para dívidas de até R$ 5.000, o
              desconto pode ser de até <strong>100% dos juros e multas acumulados</strong>.
            </p>
          </div>
        </section>

        {/* BLOCO 3 (print 5) */}
        <section className="mt-6">
          <img
            src={personFinance}
            alt="Nome limpo e acesso ao crédito de volta"
            className="w-full rounded-2xl border border-border object-cover aspect-[16/10]"
          />
          <div className="mt-4 rounded-2xl bg-[#f6f7f8] p-5 sm:p-6">
            <p className="text-[1.02rem] leading-relaxed text-foreground/85">
              Após a renegociação, seu nome será automaticamente retirado dos cadastros de inadimplentes (SPC,
              Serasa, SCPC) em até <strong>5 dias úteis</strong>. Você voltará a ter acesso ao crédito e poderá
              realizar seus sonhos financeiros.
            </p>
          </div>
        </section>

        {/* resumo rápido */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { icon: TrendingDown, t: "Até 96%", d: "de desconto" },
            { icon: CheckCircle2, t: "Até 60x", d: "para parcelar" },
            { icon: ShieldCheck, t: "5 dias úteis", d: "para limpar o nome" },
          ].map((x) => (
            <div key={x.t} className="rounded-xl border border-border p-4 text-center">
              <x.icon className="mx-auto size-6 text-[#009c3b]" />
              <p className="mt-2 font-black text-[#002776]">{x.t}</p>
              <p className="text-xs text-foreground/60">{x.d}</p>
            </div>
          ))}
        </div>

        <div className="my-9">
          <Cta onClick={onContinue} />
        </div>
      </main>

      <footer className="bg-foreground text-white/75 py-10">
        <div className="container mx-auto px-4 max-w-2xl text-center flex flex-col items-center gap-4">
          <img src={logoDesenrola} alt="Manual Desenrola" className="h-9 w-auto opacity-90" />
          <p className="text-xs leading-relaxed max-w-2xl">
            Conteúdo informativo e educativo. Material de orientação para negociação de dívidas. Resultados
            variam conforme o credor, o tipo de dívida e as regras vigentes.
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
