interface Trap {
  number: number;
  title: string;
  description: string;
  solution: string;
}

const traps: Trap[] = [
  {
    number: 1,
    title: "Você não sabe que pode EXIGIR mais desconto",
    description:
      "A maioria aceita o primeiro acordo achando que “é o que tem”. Não é. A lei garante muito mais. Você tem DIREITO ao desconto cheio — só precisa saber o número certo pra exigir.",
    solution:
      "existe uma sequência de 3 mensagens que força o banco a oferecer o desconto máximo da lei. Você copia, cola no chat do banco, e o sistema ajusta automaticamente.",
  },
  {
    number: 2,
    title: "Você tem direito a 12% EXTRA pagando à vista",
    description:
      "A lei garante 12% adicional de desconto pra quem paga à vista. É seu direito. Mas o banco raramente fala. Se você não pedir, perde.",
    solution:
      "a frase exata pra pedir o bônus à vista sem o banco recusar. Funciona em todos os 6 bancos.",
  },
  {
    number: 3,
    title: "Você gasta tempo na dívida errada",
    description:
      "Algumas dívidas entram no Desenrola. Outras não. Conta de luz? Financiamento de carro? Cartão de loja? Sem saber qual é qual, você perde energia em vão e desiste de tudo.",
    solution:
      "lista exata do que entra, do que não entra, e o que fazer com cada uma. Inclusive as que não entram (Rota 3 resolve).",
  },
  {
    number: 4,
    title: "O FGTS atrapalha se usado na hora errada",
    description:
      "Existe uma sequência: você negocia o desconto primeiro, DEPOIS aciona o FGTS. Fazer ao contrário diminui seu desconto.",
    solution:
      "capítulo dedicado ao uso do FGTS — quando usar, quanto usar, em qual momento usar.",
  },
  {
    number: 5,
    title: "Você não foi avisado do bloqueio em bets",
    description:
      "Quem adere ao Desenrola fica 12 meses sem poder apostar online. Pra muita gente é até bom. Pra outros pode ser problema. Você precisa saber antes de assinar.",
    solution:
      "página inteira sobre essa contrapartida. Pesa os prós e contras pra você decidir consciente.",
  },
  {
    number: 6,
    title: "O prazo é apertado",
    description:
      "90 dias podem parecer muito. Mas quem deixa pra “semana que vem” acaba não fazendo. Em agosto, o programa fecha. Os juros voltam ao normal. Seu nome continua sujo.",
    solution:
      "checklist de 7 dias pra você executar tudo rapidinho. Imprime, marca com X, resolve.",
  },
];

export function Section2Traps() {
  return (
    <section
      id="armadilhas"
      className="bg-off-white py-20 md:py-28"
      aria-labelledby="armadilhas-title"
    >
      <div className="mx-auto max-w-3xl px-6">
        <h2
          id="armadilhas-title"
          className="font-display text-3xl font-extrabold leading-tight md:text-5xl"
        >
          Não é culpa sua. É um sistema feito pra te confundir.
        </h2>

        <div className="mt-8 space-y-6 text-cinza-grafite">
          <p>
            Se você já tentou negociar dívida e saiu com a sensação de &ldquo;será que fiz o
            certo?&rdquo;, saiba que isso é proposital.
          </p>
          <p>
            Existem 6 armadilhas que travam quase todo mundo. Não porque a pessoa seja
            desinformada — é porque o sistema foi projetado pra ser confuso.
          </p>
          <p>Vou te mostrar cada uma. E como o manual resolve:</p>
        </div>

        <ol className="mt-12 space-y-12">
          {traps.map((trap) => (
            <li
              key={trap.number}
              className="border-t border-cinza-claro/40 pt-10 first:border-t-0 first:pt-0"
            >
              <h3 className="flex items-start gap-3 font-display text-xl font-bold leading-snug text-cinza-grafite md:text-2xl">
                <span aria-hidden>🚧</span>
                <span>
                  {trap.number} — {trap.title}
                </span>
              </h3>
              <p className="mt-4 text-cinza-grafite">{trap.description}</p>
              <div className="mt-5 rounded-2xl bg-verde-light p-5">
                <p className="text-cinza-grafite">
                  <strong className="font-bold text-verde-dark">✅ No manual:</strong>{" "}
                  {trap.solution}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
