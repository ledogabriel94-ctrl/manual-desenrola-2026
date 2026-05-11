import { CTAButton } from "@/components/ui/CTAButton";

const bullets = [
  "Acesso imediato após o pagamento",
  "Garantia de 7 dias incondicional",
  "Pagamento 100% seguro via GG Checkout",
];

export function Section7Pricing() {
  return (
    <section
      id="preco"
      className="bg-off-white py-20 md:py-28"
      aria-labelledby="preco-title"
    >
      <div className="mx-auto max-w-3xl px-6">
        <h2
          id="preco-title"
          className="text-center font-display text-3xl font-extrabold leading-tight md:text-5xl"
        >
          Comece a negociar HOJE.
        </h2>

        <div className="mt-12 flex flex-col items-center rounded-3xl border-2 border-verde bg-white p-8 shadow-sm md:p-12">
          <span className="inline-flex items-center gap-1 rounded-full bg-verde-light px-3 py-1 font-display text-xs font-bold uppercase tracking-wide text-verde-dark">
            ⭐ Melhor preço
          </span>

          <p className="mt-4 font-body text-base font-medium uppercase tracking-wide text-cinza-medio">
            Hoje, por apenas:
          </p>

          <p className="mt-4 font-display text-7xl font-extrabold leading-none text-verde md:text-9xl">
            R$ 27<span className="text-4xl md:text-5xl">,00</span>
          </p>

          <p className="mt-3 italic text-cinza-medio">à vista no Pix</p>
          <p className="text-cinza-medio">ou em 3x de R$ 9,99 no cartão</p>

          <div className="mt-10">
            <CTAButton variant="primary" size="lg">
              Quero limpar meu nome — R$ 27
            </CTAButton>
          </div>

          <ul
            className="mt-10 w-full space-y-3 border-t border-cinza-claro/30 pt-8 text-cinza-grafite"
            role="list"
          >
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span aria-hidden className="text-verde">
                  ✅
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <aside className="mt-10 rounded-2xl border-l-4 border-verde bg-bege-papel p-6 md:p-8">
          <p className="font-display text-lg font-bold text-cinza-grafite md:text-xl">
            🛡️ Garantia blindada:
          </p>
          <p className="mt-2 text-cinza-grafite">
            Se em 7 dias você não achar que vale 10 vezes o que pagou, devolvemos seu
            dinheiro. Sem perguntas.
          </p>
        </aside>
      </div>
    </section>
  );
}
