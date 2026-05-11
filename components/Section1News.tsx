export function Section1News() {
  return (
    <section
      id="noticia"
      className="bg-off-white py-16 md:py-24"
      aria-labelledby="noticia-title"
    >
      <div className="mx-auto max-w-3xl px-6">
        <h2
          id="noticia-title"
          className="font-display text-3xl font-extrabold leading-tight md:text-5xl"
        >
          Vou te explicar em 1 minuto.
        </h2>

        <div className="mt-8 space-y-6 text-cinza-grafite">
          <p>
            Em 4 de maio deste ano, o Governo Federal abriu um programa que muita gente ainda
            não sabe que existe.
          </p>

          <p>Chama Desenrola Brasil 2.0. E faz uma coisa simples:</p>

          <p className="font-display text-2xl font-bold text-verde-dark md:text-3xl">
            Te dá desconto de até 90% na sua dívida.
          </p>

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
