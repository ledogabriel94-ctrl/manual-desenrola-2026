import { TopBar } from "@/components/TopBar";
import { HeroCarousel } from "@/components/HeroCarousel";
import { Section1News } from "@/components/Section1News";
import { Section2Traps } from "@/components/Section2Traps";
import { Section3Routes } from "@/components/Section3Routes";
import { Section4Test } from "@/components/Section4Test";
import { Section5Product } from "@/components/Section5Product";
import { Section6Authority } from "@/components/Section6Authority";
import { Section7Pricing } from "@/components/Section7Pricing";
import { Section8FAQ } from "@/components/Section8FAQ";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-off-white">
      <TopBar />
      <HeroCarousel />
      <Section1News />
      <Section2Traps />
      <Section3Routes />
      <Section4Test />
      <Section5Product />
      <Section6Authority />
      <Section7Pricing />
      <Section8FAQ />
      <Footer />
    </main>
  );
}
