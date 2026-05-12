import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta v7
        azul: "#1E40AF",
        "azul-escuro": "#1E3A8A",
        verde: "#16A34A",
        "verde-escuro": "#15803D",
        "verde-claro": "#DCFCE7",
        "verde-light-text": "#86EFAC",
        laranja: "#EA580C",
        amarelo: "#FEF3C7",
        grafite: "#1F2937",
        cinza: "#4B5563",
        "cinza-claro": "#9CA3AF",
        "bg-suave": "#F9FAFB",
        rule: "#E5E7EB",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-jakarta)", "Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
