import { FAQItem } from "./FAQItem";

export function FAQ() {
  return (
    <section className="section">
      <div className="container">
        <span className="section-tag">Dúvidas frequentes</span>
        <h2>
          Antes de comprar,{" "}
          <span className="destaque">tira tudo a limpo.</span>
        </h2>

        <div className="faq-list">
          <FAQItem
            pergunta="Por que pagar por um manual se o programa é de graça?"
            resposta={
              <>
                O programa é gratuito. <strong>Mas o banco não.</strong> Você
                liga no banco e ele te oferece a pior proposta possível. Sem
                saber exigir, você aceita 30% quando tinha direito a 90%. O
                manual ensina o passo a passo de cada banco pra você sair do
                telefone com o desconto correto — não o que o banco quer te dar.
              </>
            }
          />

          <FAQItem
            pergunta="Esses descontos de 90% são reais mesmo?"
            resposta={
              <>
                Sim. Estão na{" "}
                <strong>Portaria 1.243 do Ministério da Fazenda</strong>. É o
                desconto mínimo obrigatório pra dívidas de cartão rotativo com
                mais de 1 ano de atraso. Você pode conferir o documento original
                — o link está no próprio manual.
              </>
            }
          />

          <FAQItem
            pergunta="Funciona pra qualquer dívida?"
            resposta={
              <>
                Funciona pra dívidas financeiras (cartão, crédito pessoal,
                cheque especial) contratadas até 31 de dezembro de 2024 e com
                pelo menos 90 dias de atraso. Dívidas com órgãos do governo,
                mensalidades de escola e financiamento imobiliário{" "}
                <strong>não entram</strong>.
              </>
            }
          />

          <FAQItem
            pergunta="E se eu não conseguir aplicar?"
            resposta={
              <>
                Você tem <strong>7 dias de garantia incondicional</strong>. Se
                em uma semana não conseguir o desconto pelo menos uma vez,
                devolvemos 100% do valor. Sem pergunta.
              </>
            }
          />

          <FAQItem
            pergunta="Quanto tempo demora pra ver resultado?"
            resposta={
              <>
                A negociação leva de 15 minutos a 1 hora pelo WhatsApp do banco.{" "}
                <strong>
                  O nome sai do Serasa em até 5 dias úteis
                </strong>{" "}
                após o pagamento — prazo legal pela Súmula 548 do STJ.
              </>
            }
          />

          <FAQItem
            pergunta="Como recebo o manual?"
            resposta={
              <>
                Por e-mail, automaticamente, em até 5 minutos depois do
                pagamento. O PDF abre em qualquer celular, tablet ou computador.
              </>
            }
          />
        </div>
      </div>
    </section>
  );
}
