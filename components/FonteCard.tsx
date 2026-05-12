interface FonteCardProps {
  numero: string;
  icon: string;
  titulo: string;
  desc: React.ReactNode;
  orgao: string;
  pub: string;
}

export function FonteCard({ numero, icon, titulo, desc, orgao, pub }: FonteCardProps) {
  return (
    <div className="fonte">
      <div className="fonte-topo">
        <div className="fonte-icon">{icon}</div>
        <div className="fonte-header">
          <div className="fonte-numero">{numero}</div>
          <div className="fonte-titulo">{titulo}</div>
        </div>
      </div>
      <div className="fonte-desc">{desc}</div>
      <div className="fonte-rodape">
        <div className="fonte-orgao">{orgao}</div>
        <div className="fonte-pub">{pub}</div>
      </div>
    </div>
  );
}
