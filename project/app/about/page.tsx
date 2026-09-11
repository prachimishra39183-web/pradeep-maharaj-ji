'use client';

import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { saintData } from '@/data/saint';
import { siteImages } from '@/data/images';
import { JourneyTimeline } from '@/components/sections/JourneyTimeline';
import { QuoteSection } from '@/components/sections/QuoteSection';

export default function AboutPage() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <>
      {/* ========================================
          ABOUT HERO
      ======================================== */}
<section className="relative mx-auto my-10 h-[340px] w-[90%] overflow-hidden rounded-2xl shadow-lg md:h-[380px] md:w-[75%] lg:h-[700px] lg:w-[75%]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={siteImages.saintPortrait.src}
          alt={siteImages.saintPortrait.alt}
          className="h-full w-full object-cover object-center"
          loading="eager"
        />

        {/* Dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/30 to-charcoal/70" />

        {/* Hero content */}
        <div className="absolute inset-0 flex items-end justify-center pb-16">
          <div className="text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-saffron">
              About
            </p>

           

            <p className="mt-4 font-serif-display text-xl font-light italic text-ivory/80">
              {saintData.about.label}
            </p>
          </div>
        </div>
      </section>


      {/* ========================================
          ABOUT SECTION
      ======================================== */}
      <section className="section-padding bg-cream">
        <div
          ref={ref}
          className="container-max grid items-center gap-12 md:gap-16 lg:grid-cols-2"
        >

          {/* IMAGE */}
          <div
            className={`reveal ${
              isVisible ? 'is-visible' : ''
            } relative overflow-hidden rounded-2xl shadow-xl`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.jpeg"
              alt="Pradeep Maharaj Ji"
              className="block h-[520px] w-full scale-125 object-cover object-center transition-transform duration-700 hover:scale-[1.3]"
              loading="lazy"
            />

            {/* Soft overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>


          {/* TEXT */}
          <div
            className={`reveal reveal-delay-2 ${
              isVisible ? 'is-visible' : ''
            }`}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-saffron">
              {saintData.about.label}
            </p>

            <h2 className="font-serif-display text-display-md font-medium text-charcoal">
              {saintData.about.heading}
            </h2>

            

            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              {saintData.about.biography}
            </p>
          </div>

        </div>
      </section>


      {/* ========================================
          JOURNEY TIMELINE
      ======================================== */}
      <JourneyTimeline />


      {/* ========================================
          QUOTE
      ======================================== */}
      <QuoteSection />
    </>
  );
}