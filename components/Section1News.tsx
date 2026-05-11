export function Section1News() {
  return (
    <section
      id="noticia"
      className="bg-off-white py-20 md:py-28"
      aria-labelledby="noticia-title"
    >
      <div className="mx-auto max-w-3xl px-6">
        <h2
          id="noticia-title"
          className="font-display text-3xl font-extrabold leading-tight md:text-5xl"
        >
          Vou te explicar em 1 minuto.
        </h2>

        <div className="mt-8 space-y-8 text-cinza-grafite">
          <p>
            Em 4 de maio deste ano, o Governo Federal abriu um programa que muita gente ainda
            não sabe que existe.
          </p>

          <p>Chama Desenrola Brasil 2.0. E faz uma coisa simples:</p>

          <p className="font-display text-2xl font-bold text-verde-dark md:text-3xl">
            Te dá desconto de até 90% na sua dívida.
          </p>

          {/* Caixa de Cálculo — Exemplo Real */}
          <div className="relative mt-12 mb-12 rounded-3xl border border-cinza-claro/30 bg-gradient-to-br from-off-white to-cinza-claro/10 p-10 md:p-12">
            {/* Tag verde "Exemplo real" */}
            <span className="absolute -top-3.5 left-8 inline-block rounded-full bg-verde px-3.5 py-1.5 font-display text-xs font-extrabold uppercase tracking-widest text-white shadow-lg shadow-verde/30">
              Exemplo real
            </span>

            {/* Título */}
            <h3 className="mb-3 font-display text-2xl font-extrabold leading-tight text-cinza-grafite md:text-3xl">
              Vamos fazer uma conta?
            </h3>

            {/* Intro */}
            <p className="mb-7 text-base leading-relaxed text-cinza-medio md:text-lg">
              Imagina: você tem{" "}
              <strong className="text-cinza-grafite">R$ 5.000</strong> de dívida no
              cartão, atrasada há mais de 1 ano.
            </p>

            {/* Tabela visual de cálculo */}
            <div className="mb-7 rounded-2xl bg-white p-6 shadow-sm md:p-7">
              {/* Linha 1: Valor original */}
              <div className="flex items-center justify-between py-3">
                <span className="text-base text-cinza-medio">
                  Valor original da dívida
                </span>
                <span className="font-display text-base font-bold text-cinza-grafite md:text-lg">
                  R$ 5.000,00
                </span>
              </div>

              <div className="h-px bg-cinza-claro/20" />

              {/* Linha 2: Desconto da Lei */}
              <div className="flex items-center justify-between py-3 text-verde">
                <span className="text-base font-semibold">
                  Desconto da Lei <strong>(-90%)</strong>
                </span>
                <span className="font-display text-base font-bold md:text-lg">
                  − R$ 4.500,00
                </span>
              </div>

              <div className="h-px bg-cinza-claro/20" />

              {/* Linha 3: Valor após desconto */}
              <div className="flex items-center justify-between py-3">
                <span className="text-base text-cinza-medio">
                  Valor após desconto
                </span>
                <span className="font-display text-base font-bold text-cinza-grafite md:text-lg">
                  R$ 500,00
                </span>
              </div>

              <div className="h-px bg-cinza-claro/20" />

              {/* Linha 4: Bônus à vista */}
              <div className="flex items-center justify-between py-3 text-verde">
                <span className="text-base font-semibold">
                  Bônus à vista <strong>(-12%)</strong>
                </span>
                <span className="font-display text-base font-bold md:text-lg">
                  − R$ 60,00
                </span>
              </div>

              {/* Separador duplo destacado */}
              <div className="my-2 h-0.5 bg-cinza-grafite" />

              {/* Linha final: Você paga no Pix */}
              <div className="flex items-baseline justify-between pt-2">
                <span className="font-display text-sm font-extrabold uppercase tracking-wider text-cinza-grafite">
                  Você paga no Pix
                </span>
                <span className="font-display text-3xl font-extrabold text-verde md:text-4xl">
                  R$ 440
                </span>
              </div>
            </div>

            {/* Punchline */}
            <div className="text-center">
              <p className="mb-1 font-display text-lg font-semibold text-cinza-grafite md:text-xl">
                <span className="text-cinza-claro line-through decoration-2">
                  R$ 5.000
                </span>{" "}
                que somem.
              </p>
              <p className="mb-1 font-display text-lg font-semibold text-verde md:text-xl">
                R$ 440 que você paga.
              </p>
              <p className="mb-4 font-display text-lg font-semibold text-cinza-grafite md:text-xl">
                R$ 27 que esse manual custa.
              </p>
              <p className="font-display text-2xl font-extrabold text-cinza-grafite md:text-3xl">
                Faz a conta.
              </p>
            </div>
          </div>

          <p>Funciona assim:</p>

          <ul className="space-y-3 pl-1">
            <li className="flex gap-3">
              <span aria-hidden>🟢</span>
              <span>Você abre o app do seu banco</span>
            </li>
            <li className="flex gap-3">
              <span aria-hidden>🟢</span>
              <span>Vai na opção de renegociação</span>
            </li>
            <li className="flex gap-3">
              <span aria-hidden>🟢</span>
              <span>Negocia direto, sem advogado, sem juiz</span>
            </li>
            <li className="flex gap-3">
              <span aria-hidden>🟢</span>
              <span>Paga com desconto enorme</span>
            </li>
            <li className="flex gap-3">
              <span aria-hidden>🟢</span>
              <span>
                Em até 30 dias, o banco é{" "}
                <strong className="font-bold">OBRIGADO POR LEI</strong> a limpar seu nome
              </span>
            </li>
          </ul>

          <p>O programa dura só 90 dias. Depois fecha.</p>
        </div>

        <aside className="mt-12 rounded-2xl border-l-4 border-verde bg-bege-papel p-6 md:p-8">
          <p className="font-display text-xl font-bold text-cinza-grafite md:text-2xl">
            💡 &ldquo;Se é grátis, por que pagar?&rdquo;
          </p>
          <div className="mt-4 space-y-3 text-cinza-grafite">
            <p>
              O programa do governo é <strong className="font-bold">100% gratuito</strong>.
              Você não paga nada pra usar.
            </p>
            <p>
              O que você paga aqui (R$ 27) é só o{" "}
              <strong className="font-bold">manual</strong> que te ensina a EXIGIR seus
              direitos. Porque tem 6 armadilhas que travam quase todo mundo. Vou te mostrar
              agora.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
