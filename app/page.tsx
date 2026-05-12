import { TopBar } from "@/components/TopBar";
import { Hero } from "@/components/Hero";
import { SecaoEnsino } from "@/components/SecaoEnsino";
import { SecaoCaminho } from "@/components/SecaoCaminho";
import { ApresentacaoManual } from "@/components/ApresentacaoManual";
import { SecaoProva } from "@/components/SecaoProva";
import { FontesOficiais } from "@/components/FontesOficiais";
import { Oferta } from "@/components/Oferta";
import { FAQ } from "@/components/FAQ";
import { UltimaChamada } from "@/components/UltimaChamada";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <TopBar />
      <Hero />
      <SecaoEnsino />
      <SecaoCaminho />
      <ApresentacaoManual />
      <SecaoProva />
      <FontesOficiais />
      <Oferta />
      <FAQ />
      <UltimaChamada />
      <Footer />
    </>
  );
}
