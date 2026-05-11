import { ChevronDown } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";

interface FAQItem {
  q: string;
  a: React.ReactNode;
}

const faqs: FAQItem[] = [
  {
    q: "O programa do governo é grátis. Por que pagar pelo manual?",
    a: (
      <>
        O programa é grátis, mas usar errado custa caro. Quem aceita o primeiro acordo do
        banco perde, em média, R$ 1.500 a R$ 5.000 de desconto. R$ 27 te economiza, em média,
        R$ 2.000.
      </>
    ),
  },
  {
    q: "E se eu não conseguir desconto nenhum?",
    a: (
      <>
        Você tem garantia de 7 dias. Não funcionou? Mande um e-mail, devolvemos. Sem
        perguntas.
      </>
    ),
  },
  {
    q: "Tem certeza que está atualizado? Os apps mudam.",
    a: (
      <>
        Sim. Atualizamos sempre que algum app muda. Você recebe a versão nova de graça.
      </>
    ),
  },
  {
    q: "Tenho dívida muito antiga (mais de 2 anos). Serve pra mim?",
    a: (
      <>
        Sim. O Desenrola Oficial não pega, MAS o manual cobre a Rota 3 (Serasa Limpa Nome)
        que aceita dívidas de qualquer idade.
      </>
    ),
  },
  {
    q: "Funciona pra MEI ou autônomo?",
    a: (
      <>
        Sim. A regra é renda mensal até R$ 8.105. Tanto faz se você é CLT, autônomo, MEI ou
        aposentado.
      </>
    ),
  },
  {
    q: "Preciso de computador? Sou ruim com tecnologia.",
    a: (
      <>
        Não precisa. Você lê o manual no celular e segue os prints, como receita de bolo. Foi
        feito pra quem nunca abriu app de banco.
      </>
    ),
  },
  {
    q: "É um curso longo? Não tenho tempo.",
    a: (
      <>
        Não é curso. É manual visual de consulta rápida. Você abre, vai direto pro capítulo
        do seu banco, e em 20-30 minutos está negociando.
      </>
    ),
  },
  {
    q: "É seguro pagar nesta página?",
    a: (
      <>
        Sim. Compra processada pela GG Checkout (mesma estrutura usada por grandes lojas
        online). Você paga por Pix (acesso liberado em 30 segundos) ou cartão.
      </>
    ),
  },
];

export function Section8FAQ() {
  return (
    <section
      id="faq"
      className="bg-off-white py-20 md:py-28"
      aria-labelledby="faq-title"
    >
      <div className="mx-auto max-w-3xl px-6">
        <h2
          id="faq-title"
          className="font-display text-3xl font-extrabold leading-tight md:text-5xl"
        >
          Dúvidas frequentes
        </h2>

        <ul className="mt-10 divide-y divide-cinza-claro/40 border-y border-cinza-claro/40" role="list">
          {faqs.map((faq, i) => (
            <li key={i}>
              <details className="group">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-left">
                  <span className="font-display text-base font-bold text-cinza-grafite md:text-lg">
                    <span aria-hidden className="mr-2">❓</span>
                    {faq.q}
                  </span>
                  <ChevronDown
                    aria-hidden
                    className="mt-1 h-5 w-5 flex-shrink-0 stroke-cinza-medio transition-transform duration-200 group-open:rotate-180"
                  />
                </summary>
                <div className="pb-6 text-cinza-grafite">{faq.a}</div>
              </details>
            </li>
          ))}
        </ul>

        <aside className="mt-14 rounded-2xl border-l-4 border-vermelho-suave bg-red-50 p-6 md:p-8">
          <h3 className="font-display text-2xl font-extrabold leading-tight text-vermelho-dark md:text-3xl">
            🚨 Última chamada
          </h3>
          <div className="mt-4 space-y-3 text-cinza-grafite">
            <p>
              O Desenrola é uma janela de <strong className="font-bold">90 dias</strong>. Já
              se passaram alguns. O tempo está correndo.
            </p>
            <p>
              Em <strong className="font-bold">agosto</strong>, o programa fecha. Os juros
              voltam ao normal. Seu nome continua sujo.
            </p>
            <p className="font-display text-lg font-bold md:text-xl">
              O melhor momento é hoje. Por R$ 27.
            </p>
          </div>
        </aside>

        <div className="mt-10 flex flex-col items-center gap-4">
          <CTAButton variant="primary" size="lg">
            Quero o manual agora — R$ 27
          </CTAButton>
          <p className="text-sm text-cinza-medio">
            ⏰ Programa aberto até agosto/2026
          </p>
        </div>
      </div>
    </section>
  );
}
