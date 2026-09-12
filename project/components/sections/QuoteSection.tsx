'use client';

import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { saintData } from '@/data/saint';
import { siteImages } from '@/data/images';

export function QuoteSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative overflow-hidden bg-transparent py-24 md:py-32">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-[#7A2E2E]/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#B68B3C]/8 blur-3xl" />

      <div
        ref={ref}
        className={`relative mx-auto max-w-7xl px-6 md:px-12 ${
          isVisible ? 'is-visible' : ''
        } reveal`}
      >
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* LEFT — Quote */}
          <div className="relative max-w-2xl">
            {/* Large decorative quote */}
            <div className="absolute -left-3 -top-12 font-serif-display text-[100px] leading-none text-[#7A2E2E]/10 md:-left-6 md:-top-16 md:text-[140px]">
              “
            </div>

            <div className="relative z-10">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#B68B3C]">
                A Thought for the Soul
              </p>

              <h2 className="font-serif-display text-3xl font-medium leading-[1.35] text-[#2B2B2B] md:text-4xl lg:text-5xl">
                Let knowledge guide the mind,
                <span className="block text-[#7A2E2E]">
                  devotion guide the heart,
                </span>
                <span className="block">
                  and seva guide our actions.
                </span>
              </h2>

              {/* Divider */}
              <div className="mt-8 flex items-center gap-3">
                <span className="h-px w-14 bg-[#B68B3C]" />
                <span className="h-2 w-2 rotate-45 bg-[#B68B3C]" />
                <span className="h-px w-14 bg-[#B68B3C]" />
              </div>

              {/* Attribution */}
              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-[#7A2E2E]">
                {saintData.quote.attribution}
              </p>

              <p className="mt-3 max-w-md text-sm leading-6 text-[#2B2B2B]/55">
                A simple reminder that true wisdom finds meaning through
                devotion, knowledge and selfless service.
              </p>
            </div>
          </div>

          {/* RIGHT — Photo */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Decorative circle */}
            <div className="absolute -right-3 -top-3 h-24 w-24 rounded-full border border-[#B68B3C]/30 md:-right-6 md:-top-6 md:h-32 md:w-32" />

            {/* Photo frame */}
            <div className="relative h-[380px] w-full max-w-[430px] overflow-hidden rounded-[45%_45%_18%_18%] border-[8px] border-white bg-white shadow-[0_25px_70px_rgba(43,43,43,0.12)] md:h-[470px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={siteImages.meditation.src}
                alt={siteImages.meditation.alt}
                className="h-full w-full object-cover object-center"
                loading="lazy"
              />
            </div>

            {/* Gold accent */}
            <div className="absolute -bottom-5 -left-3 flex h-16 w-16 items-center justify-center rounded-full bg-[#7A2E2E] shadow-lg md:-left-6">
              <span className="font-serif-display text-2xl text-[#E4C77A]">
                ॐ
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}