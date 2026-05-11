import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Manual Desenrola 2026 — Limpe seu nome com até 90% de desconto",
  description:
    "Manual completo passo a passo dos 6 maiores bancos do Brasil. Use o programa Desenrola 2026 e limpe seu nome no Serasa em até 30 dias.",
  openGraph: {
    title: "Manual Desenrola 2026",
    description: "Comece a negociar HOJE — R$ 27 à vista",
    images: ["/og-image.png"],
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${jakarta.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
