import Image from "next/image";

const bancos = [
  { nome: "Caixa Econômica Federal", complemento: "app + Caixa Tem" },
  { nome: "Nubank", complemento: "" },
  { nome: "Itaú", complemento: "" },
  { nome: "Bradesco", complemento: "incluindo Bradescard e Losango" },
  { nome: "Santander", complemento: "" },
  { nome: "Banco do Brasil", complemento: "" },
];

const cadaBancoCom = [
  "Como acessar a Rota 1 (Desenrola Oficial)",
  "Como acessar a Rota 2 (Programa Paralelo)",
  "Pegadinhas específicas daquele banco",
  "Canais alternativos (telefone, WhatsApp)",
];

const bonus = [
  {
    titulo: "Tabela Oficial de Descontos",
    desc: "Fonte: Portaria 1.243 do Ministério da Fazenda. Veja exatamente quanto o banco É OBRIGADO a te dar de desconto, baseado no tempo da sua dívida.",
  },
  {
    titulo: "15 Mensagens Prontas para Copiar",
    desc: "Mensagens testadas pra cada situação: primeira abordagem, contraproposta, recusa de acordo ruim, pedido de supervisor, fechamento. Você copia e cola direto no chat do banco.",
  },
  {
    titulo: "Checklist de 7 Dias",
    desc: "Plano dia a dia pra você sair do nome sujo em uma semana. Imprime ou abre no celular.",
  },
];

export function Section5Product() {
  return (
    <section
      id="produto"
      className="bg-off-white py-20 md:py-28"
      aria-labelledby="produto-title"
    >
      <div className="mx-auto max-w-3xl px-6">
        <div className="flex flex-col items-center">
          <div className="w-48 md:w-72">
            <Image
              src="/pdf-mockup.svg"
              alt="Capa do Manual Desenrola 2026"
              width={288}
              height={384}
            />
          </div>

          <h2
            id="produto-title"
            className="mt-10 text-center font-display text-3xl font-extrabold leading-tight md:text-5xl"
          >
            Manual Desenrola 2026
          </h2>
          <p className="mt-4 max-w-prose text-center font-body text-lg text-cinza-grafite md:text-xl">
            <strong className="font-bold text-cinza-grafite">
              PDF visual completo
            </strong>{" "}
            com tudo que você precisa pra limpar seu nome.
          </p>
        </div>

        <h3 className="mt-14 font-display text-xl font-bold text-cinza-grafite md:text-2xl">
          Passo a passo dos 6 maiores bancos:
        </h3>
        <ul className="mt-6 space-y-3" role="list">
          {bancos.map((banco) => (
            <li key={banco.nome} className="flex items-start gap-3">
              <span aria-hidden className="text-verde">
                ✅
              </span>
              <span>
                <strong className="font-semibold text-cinza-grafite">
                  {banco.nome}
                </strong>
                {banco.complemento && (
                  <span className="text-cinza-grafite"> ({banco.complemento})</span>
                )}
              </span>
            </li>
          ))}
        </ul>

        <h3 className="mt-12 font-display text-xl font-bold text-cinza-grafite md:text-2xl">
          Cada banco com:
        </h3>
        <ul className="mt-6 space-y-2 pl-1 text-cinza-grafite" role="list">
          {cadaBancoCom.map((item) => (
            <li key={item} className="before:mr-2 before:content-['–']">
              {item}
            </li>
          ))}
        </ul>

        <h3 className="mt-12 font-display text-xl font-bold text-cinza-grafite md:text-2xl">
          Mais o capítulo completo da Rota 3:
        </h3>
        <p className="mt-3 text-cinza-grafite">Serasa Limpa Nome, passo a passo.</p>

        <div className="mt-16 rounded-2xl bg-verde-light p-6 md:p-10">
          <h3 className="flex items-center gap-3 font-display text-2xl font-extrabold text-verde-dark md:text-3xl">
            <span aria-hidden>🎁</span> Bônus embutidos no manual
          </h3>
          <ul className="mt-8 space-y-6" role="list">
            {bonus.map((b) => (
              <li
                key={b.titulo}
                className="rounded-2xl bg-white p-5 md:p-6"
              >
                <p className="flex items-center gap-2 font-display text-lg font-bold text-cinza-grafite md:text-xl">
                  <span aria-hidden>🎁</span> {b.titulo}
                </p>
                <p className="mt-2 text-cinza-grafite">{b.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
