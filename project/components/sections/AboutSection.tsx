'use client';

import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { saintData } from '@/data/saint';

export function AboutSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="section-padding bg-transparent">
      <div
        ref={ref}
        className="container-max grid items-center gap-12 md:gap-16 lg:grid-cols-2"
      >
        {/* Image side */}
        <div
          className={`reveal ${
            isVisible ? 'is-visible' : ''
          } relative overflow-hidden rounded-2xl shadow-xl`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.jpeg"
            alt=" Shri Pradeep Maharaj Ji"
            className="block h-[520px] w-full scale-125 object-cover object-center transition-transform duration-700 hover:scale-[1.3]"
            loading="lazy"
          />

          {/* Soft overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </div>

        {/* Text side */}
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
  );
}