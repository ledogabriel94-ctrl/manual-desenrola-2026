const fontes = [
  {
    titulo: "Medida Provisória nº 1.355/2026",
    desc: "Assinada pelo Presidente em 04/05/2026",
  },
  {
    titulo: "Portaria nº 1.243 do Ministério da Fazenda",
    desc: "Publicada no Diário Oficial em 05/05/2026",
  },
  {
    titulo: "Comunicados oficiais de:",
    desc: "Caixa, Nubank, Itaú, Bradesco, Santander, Banco do Brasil",
  },
  {
    titulo: "Site oficial:",
    desc: "gov.br/fazenda/desenrola",
  },
];

export function Section6Authority() {
  return (
    <section
      id="autoridade"
      className="bg-bege-papel/40 py-16 md:py-24"
      aria-labelledby="autoridade-title"
    >
      <div className="mx-auto max-w-3xl px-6">
        <h2
          id="autoridade-title"
          className="font-display text-3xl font-extrabold leading-tight md:text-5xl"
        >
          Este manual é baseado em fontes oficiais.
        </h2>

        <ul className="mt-10 space-y-5" role="list">
          {fontes.map((fonte) => (
            <li
              key={fonte.titulo}
              className="flex items-start gap-3 rounded-xl bg-white p-5 md:p-6"
            >
              <span aria-hidden className="mt-1 text-verde">
                ✅
              </span>
              <div>
                <p className="font-display text-lg font-bold text-cinza-grafite">
                  {fonte.titulo}
                </p>
                <p className="mt-1 text-cinza-medio">{fonte.desc}</p>
              </div>
            </li>
          ))}
        </ul>

        <blockquote className="mt-10 border-l-4 border-verde bg-white p-6 md:p-8">
          <p className="text-cinza-grafite">
            Você pode conferir todas as informações nos canais oficiais. Este manual apenas{" "}
            <strong className="font-bold">organiza tudo em formato fácil de aplicar</strong>
            , com passo a passo e mensagens prontas.
          </p>
        </blockquote>

        <aside className="mt-10 rounded-xl border-l-4 border-cinza-medio bg-cinza-grafite/5 p-6">
          <p className="font-display text-base font-bold text-cinza-grafite">
            ⚠️ Aviso legal:
          </p>
          <p className="mt-2 text-cinza-medio">
            Este manual é independente. Não temos vínculo, parceria ou autorização do Governo
            Federal, Banco Central, Serasa ou bancos. Apenas organizamos informação pública
            de forma didática.
          </p>
        </aside>
      </div>
    </section>
  );
}
