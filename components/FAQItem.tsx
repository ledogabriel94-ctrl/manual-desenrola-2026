interface FAQItemProps {
  pergunta: string;
  resposta: React.ReactNode;
}

export function FAQItem({ pergunta, resposta }: FAQItemProps) {
  return (
    <div className="faq-item">
      <div className="faq-q">{pergunta}</div>
      <div className="faq-a">{resposta}</div>
    </div>
  );
}
