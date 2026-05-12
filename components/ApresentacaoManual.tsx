import { CarrosselManual } from "./CarrosselManual";

export function ApresentacaoManual() {
  return (
    <section className="manual-section">
      <div className="container">
        <span className="section-tag">Por dentro do manual</span>
        <h2>
          Não é um curso. É um{" "}
          <span className="destaque">manual de campo.</span>
        </h2>
        <p className="manual-lead">
          Cada banco tem capítulo próprio com mockup do app, fluxo completo do
          WhatsApp e cenários{" "}
          <strong>
            &ldquo;Se o atendente recusar X, você responde Y.&rdquo;
          </strong>
        </p>

        <CarrosselManual />

        <div className="manual-stats">
          <div className="stat-item">
            <div className="stat-num">64</div>
            <div className="stat-label">páginas no total</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">38</div>
            <div className="stat-label">perguntas respondidas</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">6</div>
            <div className="stat-label">bancos cobertos</div>
          </div>
        </div>
      </div>
    </section>
  );
}
