import { CheckoutButton } from "@/components/CheckoutButton";
import { env } from "@/lib/env";

export function UltimaChamada() {
  return (
    <section className="ultima-section">
      <div className="container">
        <h2 className="ultima-titulo">
          Daqui pra frente, <span className="destaque">2 caminhos.</span>
        </h2>
        <p className="ultima-sub">E só você decide qual.</p>

        <div className="caminhos">
          <div className="caminho">
            <div className="caminho-num">Caminho 1</div>
            <h3>Tentar sozinho hoje</h3>
            <p>
              Cair na primeira oferta do banco. Aceitar 30% quando tinha direito
              a 90%. Esquecer do bônus. Esquecer do FGTS. Pagar a mais. Como a
              maioria.
            </p>
          </div>

          <div className="caminho recomendado">
            <div className="caminho-num">Caminho 2 · recomendado</div>
            <h3>Investir R$ 27 e ter o passo a passo</h3>
            <p>
              Saber o que falar em cada banco. Conhecer as armadilhas. Aplicar a
              Portaria. Pedir o bônus. Usar o FGTS. Pagar o mínimo permitido por
              lei.
            </p>
          </div>
        </div>

        <CheckoutButton
          href={env.checkoutUrl}
          className="btn-cta-final"
          placement="ultima_chamada"
        >
          Quero o manual por R$ 27
        </CheckoutButton>
      </div>
    </section>
  );
}
