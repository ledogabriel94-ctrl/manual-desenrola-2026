import { env } from "@/lib/env";

export function Oferta() {
  return (
    <section className="oferta-section">
      <div className="container">
        <div className="oferta-card">
          <div className="oferta-titulo">Manual Desenrola 2026</div>
          <div className="oferta-sub">PDF completo · acesso imediato</div>

          <div className="oferta-preco">
            R$ 27<span className="oferta-preco-cents">,00</span>
          </div>
          <div className="oferta-parcelas">
            à vista no Pix ou 3x R$ 9,99 no cartão
          </div>

          <a href={env.checkoutUrl} className="btn-cta">
            Quero o manual
          </a>

          <ul className="oferta-features">
            <li>Acesso imediato após o pagamento</li>
            <li>Compatível com celular e computador</li>
            <li>Atualização gratuita até o fim do programa</li>
            <li>Pagamento seguro via GGCheckout</li>
          </ul>

          <div className="oferta-garantia">
            <strong>Garantia incondicional de 7 dias.</strong>
            <br />
            Se você não gostar por qualquer motivo, devolvemos 100% do valor
            pago.
          </div>
        </div>
      </div>
    </section>
  );
}
