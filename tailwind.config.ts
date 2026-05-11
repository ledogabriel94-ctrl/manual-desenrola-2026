import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        verde: {
          DEFAULT: "#16A34A",
          dark: "#15803D",
          light: "#DCFCE7",
        },
        cinza: {
          grafite: "#1F2937",
          medio: "#4B5563",
          claro: "#9CA3AF",
        },
        bege: {
          papel: "#FEF3C7",
        },
        vermelho: {
          suave: "#EF4444",
          dark: "#DC2626",
        },
        "off-white": "#FAFAF9",
      },
      fontFamily: {
        display: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "65ch",
      },
    },
  },
  plugins: [],
};

export default config;
