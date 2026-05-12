import { FonteCard } from "./FonteCard";

export function FontesOficiais() {
  return (
    <section className="section section-suave">
      <div className="container">
        <span className="section-tag">Tudo verificável</span>
        <h2>
          Nada de achismo.{" "}
          <span className="destaque">Tudo nos documentos oficiais.</span>
        </h2>

        <div className="section-content">
          <p>
            O manual cita e referencia 4 documentos públicos. Cada desconto,
            cada prazo, cada artigo — tudo pode ser conferido nos sites oficiais
            do Governo Federal:
          </p>
        </div>

        <div className="fontes-grid">
          <FonteCard
            numero="Fonte 01"
            icon="📜"
            titulo="Medida Provisória 1.355/2026"
            desc={
              <>
                Renovação do Programa Desenrola Brasil 2.0.{" "}
                <strong>Estende o programa até 03 de agosto de 2026</strong> e
                mantém os descontos mínimos obrigatórios pelos bancos
                signatários.
              </>
            }
            orgao="Casa Civil"
            pub="DOU · MAR/2026"
          />

          <FonteCard
            numero="Fonte 02"
            icon="⚖️"
            titulo="Portaria 1.243/2026"
            desc={
              <>
                Tabela oficial de descontos do Desenrola.{" "}
                <strong>
                  Define que pessoas físicas têm direito a até 90% de desconto
                </strong>{" "}
                em dívidas elegíveis, mais bônus adicional pra pagamento à
                vista.
              </>
            }
            orgao="Ministério da Fazenda"
            pub="DOU · MAR/2026"
          />

          <FonteCard
            numero="Fonte 03"
            icon="📣"
            titulo="Adesão dos 6 Bancos"
            desc={
              <>
                Comunicado oficial confirmando a adesão de{" "}
                <strong>
                  Caixa, Banco do Brasil, Itaú, Bradesco, Santander e Nubank
                </strong>{" "}
                ao Desenrola 2026, com regras vinculantes pra negociação.
              </>
            }
            orgao="Febraban / BACEN"
            pub="Comunicado Conjunto"
          />

          <FonteCard
            numero="Fonte 04"
            icon="🏛"
            titulo="Súmula 548 do STJ"
            desc={
              <>
                Decisão consolidada que obriga o credor a{" "}
                <strong>
                  retirar o nome do Serasa em até 5 dias úteis
                </strong>{" "}
                após o pagamento integral da dívida. Caso não cumpra, gera
                direito a indenização.
              </>
            }
            orgao="Superior Tribunal de Justiça"
            pub="Vigente · 2015"
          />
        </div>
      </div>
    </section>
  );
}
