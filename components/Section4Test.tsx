import { Square } from "lucide-react";

const questions = [
  "Você ganha menos de R$ 8.105 por mês?",
  "Tem dívida atrasada há mais de 90 dias?",
  "A dívida é de cartão, cheque especial ou CDC?",
  "A dívida foi feita até 31 de janeiro de 2026?",
];

interface Result {
  emoji: string;
  bg: string;
  border: string;
  title: string;
  body: React.ReactNode;
}

const results: Result[] = [
  {
    emoji: "🟢",
    bg: "bg-verde-light",
    border: "border-verde",
    title: "Marcou as 4?",
    body: (
      <>
        Sua rota é a <strong className="font-bold">ROTA 1 (Desenrola Oficial)</strong>. Vai
        conseguir os maiores descontos do governo. Está nos capítulos 7 a 12 do manual.
      </>
    ),
  },
  {
    emoji: "🟡",
    bg: "bg-bege-papel",
    border: "border-yellow-500",
    title: "Marcou 2 ou 3?",
    body: (
      <>
        Provavelmente você pode usar a{" "}
        <strong className="font-bold">ROTA 1 pra algumas dívidas</strong> e a{" "}
        <strong className="font-bold">ROTA 2 ou 3 pras outras</strong>. O manual cobre todas.
      </>
    ),
  },
  {
    emoji: "🔴",
    bg: "bg-red-50",
    border: "border-vermelho-suave",
    title: "Marcou 0 ou 1?",
    body: (
      <>
        Sua rota é a <strong className="font-bold">ROTA 2 (programa do banco)</strong> ou{" "}
        <strong className="font-bold">ROTA 3 (Serasa Limpa Nome)</strong>.{" "}
        <strong className="font-bold">Igualmente eficazes, mesmos descontos.</strong> O manual
        te leva pelas duas.
      </>
    ),
  },
];

export function Section4Test() {
  return (
    <section
      id="auto-teste"
      className="bg-off-white py-16 md:py-24"
      aria-labelledby="auto-teste-title"
    >
      <div className="mx-auto max-w-3xl px-6">
        <h2
          id="auto-teste-title"
          className="font-display text-3xl font-extrabold leading-tight md:text-5xl"
        >
          Agora sim: vamos descobrir SUA rota.
        </h2>

        <p className="mt-6 font-display text-lg font-bold text-cinza-grafite md:text-xl">
          Responda mentalmente:
        </p>

        <ul className="mt-6 space-y-3" role="list">
          {questions.map((q, i) => (
            <li
              key={i}
              className="flex items-start gap-4 rounded-xl border border-cinza-claro/40 bg-white p-4"
            >
              <Square
                aria-hidden
                className="mt-1 h-6 w-6 flex-shrink-0 stroke-cinza-medio"
              />
              <span className="text-cinza-grafite">{q}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10 space-y-5">
          {results.map((result, i) => (
            <div
              key={i}
              className={`rounded-2xl border-l-4 p-6 md:p-7 ${result.bg} ${result.border}`}
            >
              <p className="flex items-center gap-2 font-display text-lg font-bold text-cinza-grafite md:text-xl">
                <span aria-hidden>{result.emoji}</span>
                <span>{result.title}</span>
              </p>
              <p className="mt-3 text-cinza-grafite">→ {result.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center font-display text-xl font-extrabold leading-tight text-verde-dark md:text-2xl">
          🎯 Não tem como você sair daqui sem saída.{" "}
          <span className="block font-body text-base font-normal text-cinza-medio">
            Esse manual cobre todos os perfis.
          </span>
        </p>
      </div>
    </section>
  );
}
