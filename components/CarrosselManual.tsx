export function CarrosselManual() {
  return (
    <div className="carousel-3d">
      <div className="carousel-track">

        {/* CARD 1 — App Caixa */}
        <div className="page-card">
          <div className="page-content">
            <div className="page-header-mini">
              <span className="page-header-mini-tag">Caixa Econômica</span>
              <span className="page-header-mini-num">pg 18</span>
            </div>
            <span className="page-q-tag">Pergunta 14 · Passo 1</span>
            <h3 className="page-title-mini">
              Como negociar com a <span className="verde">Caixa</span>?
            </h3>

            <div className="page-mockup-phone">
              <div className="mini-phone">
                <div className="mini-phone-screen">
                  <div className="caixa-mini-header">
                    <div className="caixa-mini-name">
                      <span>Olá,</span> José
                    </div>
                  </div>
                  <div className="caixa-mini-content">
                    <div className="caixa-mini-menu-item">Pagar conta</div>
                    <div className="caixa-mini-menu-item">Pix</div>
                    <div className="caixa-mini-menu-item active">
                      Renegociação
                    </div>
                    <div className="caixa-mini-menu-item">Investir</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 2 — WhatsCAIXA */}
        <div className="page-card">
          <div className="page-content">
            <div className="page-header-mini">
              <span className="page-header-mini-tag">Caixa Econômica</span>
              <span className="page-header-mini-num">pg 21</span>
            </div>
            <span className="page-q-tag">Pergunta 15 · WhatsCAIXA</span>
            <h3 className="page-title-mini">
              O app travou. <span className="verde">E agora?</span>
            </h3>

            <div className="page-whats-mockup">
              <div className="whats-mini-header">
                <div className="whats-mini-avatar">C</div>
                <div>
                  <div className="whats-mini-name">WhatsCAIXA ✓</div>
                  <div className="whats-mini-online">online</div>
                </div>
              </div>
              <div className="whats-mini-body">
                <div className="whats-mini-msg sent">Renegociar</div>
                <div className="whats-mini-msg received">
                  Olá! Pra começar, me informa seu CPF.
                </div>
                <div className="whats-mini-msg sent">12345678900</div>
                <div className="whats-mini-msg received">
                  Encontrei <strong>1 dívida</strong>. Quer negociar?
                </div>
                <div className="whats-mini-msg sent">
                  Quero o desconto da Portaria 1.243...
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 3 — Cenários */}
        <div className="page-card">
          <div className="page-content">
            <div className="page-header-mini">
              <span className="page-header-mini-tag">Caixa Econômica</span>
              <span className="page-header-mini-num">pg 22</span>
            </div>
            <span className="page-q-tag">Pergunta 16 · Cenários</span>
            <h3 className="page-title-mini">
              A oferta veio <span className="verde">baixa.</span>
            </h3>

            <div className="page-cenarios-mockup">
              <div className="cenarios-mini-titulo">🛡 Se ele responder X...</div>

              <div className="cenario-mini">
                <div className="cenario-mini-q">
                  &ldquo;Essa é a oferta máxima.&rdquo;
                </div>
                <div className="cenario-mini-a">
                  Você responde:{" "}
                  <strong>
                    &ldquo;O sistema deve cumprir a Portaria 1.243...&rdquo;
                  </strong>
                </div>
              </div>

              <div className="cenario-mini">
                <div className="cenario-mini-q">
                  &ldquo;Empréstimo novo com taxa menor.&rdquo;
                </div>
                <div className="cenario-mini-a">
                  Você responde:{" "}
                  <strong>
                    &ldquo;Quero o Desenrola, não empréstimo novo.&rdquo;
                  </strong>
                </div>
              </div>

              <div className="cenario-mini">
                <div className="cenario-mini-q">
                  &ldquo;Bônus 12% não existe.&rdquo;
                </div>
                <div className="cenario-mini-a">
                  Você responde:{" "}
                  <strong>&ldquo;Art. 6º §2º da Portaria.&rdquo;</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
