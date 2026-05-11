import { CTAButton } from "@/components/ui/CTAButton";

interface Route {
  number: number;
  title: string;
  subtitle: string;
  desc: string;
  meta: { icon: string; label: string; value: string }[];
  whereLabel: string;
  whereValue: string;
  inManual: string;
}

const routes: Route[] = [
  {
    number: 1,
    title: "DESENROLA OFICIAL",
    subtitle: "(a famosa)",
    desc: "Pra quem se encaixa nos critérios do governo.",
    meta: [
      { icon: "📊", label: "Desconto", value: "30% a 90% (varia por dias de atraso)" },
      {
        icon: "💼",
        label: "Quem entra",
        value: "renda até R$ 8.105 + dívida 91-720 dias",
      },
    ],
    whereLabel: "📲 Onde",
    whereValue: "no app do seu próprio banco",
    inManual:
      "passo a passo do Caixa, Nubank, Itaú, Bradesco, Santander e Banco do Brasil. Tela por tela.",
  },
  {
    number: 2,
    title: "PROGRAMA PARALELO DO BANCO",
    subtitle: "",
    desc: "Cada banco criou um programa INTERNO próprio pra atender quem NÃO se encaixa no Desenrola oficial. Quase ninguém sabe disso.",
    meta: [
      { icon: "📊", label: "Desconto", value: "até 90% também (variável)" },
      { icon: "💼", label: "Quem entra", value: "quem ficou de fora da Rota 1" },
    ],
    whereLabel: "🏦 Programas",
    whereValue: "Renegocia Itaú, Renegocia Bradesco, Santander (até 72x), Nubank Recomeço",
    inManual:
      "como acessar cada um, mensagens prontas e as condições especiais que cada banco oferece.",
  },
  {
    number: 3,
    title: "SERASA LIMPA NOME",
    subtitle: "",
    desc: "Plataforma gratuita do Serasa que aceita dívidas que NÃO entram nem na Rota 1 nem na Rota 2 (dívidas de loja, dívidas muito antigas, etc).",
    meta: [
      { icon: "📊", label: "Desconto", value: "até 90%" },
      { icon: "💼", label: "Quem entra", value: "qualquer pessoa, qualquer dívida" },
    ],
    whereLabel: "📲 Onde",
    whereValue: "app Serasa ou site limpanome.serasa.com.br",
    inManual:
      "passo a passo, como combinar com as outras rotas, e em que casos o Serasa é a MELHOR opção (sim, às vezes vence o Desenrola).",
  },
];

export function Section3Routes() {
  return (
    <section
      id="rotas"
      className="bg-off-white py-20 md:py-28"
      aria-labelledby="rotas-title"
    >
      <div className="mx-auto max-w-5xl px-6">
        <h2
          id="rotas-title"
          className="text-center font-display text-3xl font-extrabold leading-tight md:text-5xl"
        >
          A maioria das pessoas só sabe de uma rota. Você vai conhecer as 3.
        </h2>

        <div className="mx-auto mt-8 max-w-3xl space-y-6 text-cinza-grafite">
          <p>
            Quando você pesquisa &ldquo;como limpar nome&rdquo; no Google, todo mundo te
            fala do Desenrola Oficial.
          </p>
          <p>
            Só que o Desenrola Oficial não pega TODO MUNDO. Tem critérios. Quem ganha mais
            de R$ 8.105 não entra. Quem tem dívida muito antiga também não. Quem tem dívida
            com loja, idem.
          </p>
          <p>Então o que essas pessoas fazem? Ficam achando que não tem solução.</p>
          <p className="font-display text-xl font-bold text-vermelho-dark md:text-2xl">
            ERRADO. Existem outras 2 rotas que ninguém te contou:
          </p>
        </div>

        <ul className="mt-12 grid gap-8 md:grid-cols-3">
          {routes.map((route) => (
            <li
              key={route.number}
              className="flex flex-col rounded-2xl border border-cinza-claro/40 bg-white p-6 shadow-sm md:p-7"
            >
              <div className="mb-2 text-4xl" aria-hidden>
                🛣️
              </div>
              <h3 className="font-display text-lg font-extrabold leading-tight text-cinza-grafite md:text-xl">
                ROTA {route.number} — {route.title}
                {route.subtitle && (
                  <span className="block font-body text-sm font-normal text-cinza-medio">
                    {route.subtitle}
                  </span>
                )}
              </h3>
              <p className="mt-4 text-base text-cinza-grafite">{route.desc}</p>

              <dl className="mt-5 space-y-2 text-sm">
                {route.meta.map((m) => (
                  <div key={m.label} className="flex gap-2">
                    <dt aria-hidden>{m.icon}</dt>
                    <dd>
                      <strong className="font-semibold text-cinza-grafite">
                        {m.label}:
                      </strong>{" "}
                      <span className="text-cinza-grafite">{m.value}</span>
                    </dd>
                  </div>
                ))}
                <div className="flex gap-2">
                  <dt>{route.whereLabel.split(" ")[0]}</dt>
                  <dd>
                    <strong className="font-semibold text-cinza-grafite">
                      {route.whereLabel.split(" ").slice(1).join(" ")}:
                    </strong>{" "}
                    <span className="text-cinza-grafite">{route.whereValue}</span>
                  </dd>
                </div>
              </dl>

              <div className="mt-6 rounded-2xl bg-bege-papel p-4">
                <p className="text-sm text-cinza-grafite">
                  <strong className="font-bold">💡 No manual:</strong> {route.inManual}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <aside className="mx-auto mt-12 max-w-3xl rounded-2xl border-l-4 border-verde bg-verde-light p-6 md:p-8">
          <p className="font-display text-lg font-bold text-cinza-grafite md:text-xl">
            🎯 A regra de ouro:
          </p>
          <p className="mt-2 text-cinza-grafite">
            você pode usar as 3 rotas em paralelo, pra dívidas diferentes. Não importa qual
            seja seu perfil —{" "}
            <strong className="font-bold">sempre tem uma saída pra você</strong> neste
            manual.
          </p>
        </aside>

        <div className="mt-10 flex justify-center">
          <CTAButton variant="primary" size="lg">
            Quero o manual com as 3 rotas — R$ 27
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
