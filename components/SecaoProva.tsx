export function SecaoProva() {
  return (
    <section className="section">
      <div className="container">
        <span className="section-tag">A diferença em números</span>
        <h2>
          Quanto você perde aceitando{" "}
          <span className="destaque">o que o banco oferece.</span>
        </h2>

        <div className="section-content">
          <p>
            Dívida de R$ 5.000 no cartão, com 1 ano de atraso. A diferença entre{" "}
            <strong>aceitar</strong> e <strong>exigir</strong>:
          </p>
        </div>

        <div className="prova-tabela">
          <div className="prova-linha">
            <div className="prova-linha-label">
              Dívida original
              <small>Cartão rotativo</small>
            </div>
            <div className="prova-linha-val">R$ 5.000,00</div>
          </div>

          <div className="prova-linha desconto">
            <div className="prova-linha-label">
              Desconto de 90%
              <small>Portaria 1.243, Art. 5º</small>
            </div>
            <div className="prova-linha-val">− R$ 4.500,00</div>
          </div>

          <div className="prova-linha">
            <div className="prova-linha-label">
              Subtotal
              <small>Após desconto da lei</small>
            </div>
            <div className="prova-linha-val">R$ 500,00</div>
          </div>

          <div className="prova-linha bonus">
            <div className="prova-linha-label">
              Bônus 12% à vista
              <small>Art. 6º §2º</small>
            </div>
            <div className="prova-linha-val">− R$ 60,00</div>
          </div>

          <div className="prova-linha fgts">
            <div className="prova-linha-label">
              FGTS
              <small>Caixa, saldo &gt; R$ 440</small>
            </div>
            <div className="prova-linha-val">− R$ 440,00</div>
          </div>

          <div className="prova-final">
            <span className="prova-final-label">Você paga do bolso</span>
            <span className="prova-final-val">R$ 0,00</span>
          </div>
        </div>

        <div className="prova-citacao">
          <p>
            Sem o manual, o banco te oferece R$ 1.500. Com o manual, você paga
            R$ 0. <strong>A diferença não é o desconto. É saber exigir.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
