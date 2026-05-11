"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import Image from "next/image";
import { CTAButton } from "@/components/ui/CTAButton";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const SLIDE_MS = 5000;
const CTA_SLIDE_MS = 7000;

export function HeroCarousel() {
  return (
    <section
      aria-label="Apresentação do Manual Desenrola 2026"
      className="relative w-full"
    >
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        autoplay={{
          delay: SLIDE_MS,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => swiper.autoplay?.start()}
        className="h-[100svh] w-full"
      >
        {/* CARD 1 — A PERGUNTA */}
        <SwiperSlide data-swiper-autoplay={SLIDE_MS}>
          <div className="flex h-[100svh] w-full flex-col items-center justify-center bg-off-white px-6 text-center">
            <h1 className="font-display text-5xl font-extrabold leading-[1.05] text-cinza-grafite md:text-7xl">
              SEU NOME ESTÁ
              <br />
              NO SERASA?
            </h1>
          </div>
        </SwiperSlide>

        {/* CARD 2 — A BOA NOTÍCIA */}
        <SwiperSlide data-swiper-autoplay={SLIDE_MS}>
          <div className="flex h-[100svh] w-full flex-col items-center justify-center bg-verde px-6 text-center text-white">
            <h2 className="font-display text-5xl font-extrabold leading-[1.05] md:text-7xl">
              PARABÉNS.
            </h2>
            <p className="mt-6 max-w-2xl font-body text-xl leading-[1.4] md:text-2xl">
              O Governo Federal acabou de liberar o programa que pode limpar seu nome com até{" "}
              <strong className="font-bold">90% de desconto</strong>.
            </p>
          </div>
        </SwiperSlide>

        {/* CARD 3 — SEU DIREITO POR LEI */}
        <SwiperSlide data-swiper-autoplay={SLIDE_MS}>
          <div className="flex h-[100svh] w-full flex-col items-center justify-center bg-bege-papel px-6 text-center text-cinza-grafite">
            <p className="font-display text-2xl font-bold uppercase tracking-wide md:text-3xl">
              E tem mais:
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-[1.1] md:text-6xl">
              Em até 30 dias, o banco é{" "}
              <span className="text-verde-dark">OBRIGADO POR LEI</span> a limpar seu nome.
            </h2>
            <p className="mt-6 font-body text-sm text-cinza-medio md:text-base">
              (Portaria 1.243 / Ministério da Fazenda)
            </p>
          </div>
        </SwiperSlide>

        {/* CARD 4 — O PRAZO */}
        <SwiperSlide data-swiper-autoplay={SLIDE_MS}>
          <div className="flex h-[100svh] w-full flex-col items-center justify-center bg-vermelho-suave px-6 text-center text-white">
            <h2 className="max-w-3xl font-display text-5xl font-extrabold leading-[1.05] md:text-7xl">
              MAS VOCÊ TEM ATÉ AGOSTO.
            </h2>
            <p className="mt-6 font-body text-2xl leading-[1.4] md:text-3xl">
              90 dias. Depois disso, a porta fecha.
            </p>
          </div>
        </SwiperSlide>

        {/* CARD 5 — A CILADA */}
        <SwiperSlide data-swiper-autoplay={SLIDE_MS}>
          <div className="flex h-[100svh] w-full flex-col items-center justify-center bg-cinza-grafite px-6 text-center text-white">
            <p className="font-display text-2xl font-bold uppercase tracking-wide md:text-3xl">
              E tem um problema.
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-3xl font-extrabold leading-[1.15] md:text-5xl">
              O banco SEMPRE oferece o pior desconto primeiro.
            </h2>
            <p className="mt-6 max-w-2xl font-body text-lg leading-[1.5] md:text-xl">
              Quem não sabe exigir o que tem direito perde{" "}
              <strong className="font-bold text-bege-papel">R$ 2.000 em média</strong>.
            </p>
          </div>
        </SwiperSlide>

        {/* CARD 6 — A SAÍDA */}
        <SwiperSlide data-swiper-autoplay={SLIDE_MS}>
          <div className="flex h-[100svh] w-full flex-col items-center justify-center bg-off-white px-6 text-center text-cinza-grafite">
            <div className="mb-8 w-40 md:w-56">
              <Image
                src="/pdf-mockup.svg"
                alt="Capa do Manual Desenrola 2026"
                width={224}
                height={300}
                priority
              />
            </div>
            <h2 className="max-w-3xl font-display text-3xl font-extrabold leading-[1.1] md:text-5xl">
              Este manual te mostra como{" "}
              <span className="text-verde-dark">EXIGIR SEUS DIREITOS</span>.
            </h2>
            <ul className="mt-8 space-y-2 text-left font-body text-base md:text-lg">
              <li>✓ 6 bancos cobertos</li>
              <li>✓ Mensagens prontas para copiar</li>
              <li>✓ Tabela oficial de descontos</li>
              <li>✓ 3 rotas pra limpar seu nome</li>
            </ul>
          </div>
        </SwiperSlide>

        {/* CARD 7 — A AÇÃO */}
        <SwiperSlide data-swiper-autoplay={CTA_SLIDE_MS}>
          <div className="flex h-[100svh] w-full flex-col items-center justify-center bg-gradient-to-b from-verde to-verde-dark px-6 text-center text-white">
            <h2 className="max-w-3xl font-display text-4xl font-extrabold leading-[1.05] md:text-6xl">
              COMECE A NEGOCIAR HOJE.
            </h2>
            <p className="mt-6 font-display text-3xl font-bold md:text-5xl">
              R$ 27 à vista
            </p>
            <p className="mt-2 font-body text-lg opacity-90 md:text-xl">
              ou 3x de R$ 9,99
            </p>
            <div className="mt-8">
              <CTAButton variant="secondary" size="lg">
                Quero o manual →
              </CTAButton>
            </div>
            <p className="mt-6 font-body text-sm opacity-90 md:text-base">
              ⏰ Programa válido só até agosto/2026
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
