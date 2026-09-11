'use client';

import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { saintData } from '@/data/saint';
import { siteImages } from '@/data/images';

export function QuoteSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={siteImages.templeInterior.src}
          alt={siteImages.templeInterior.alt}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-charcoal/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding">
        <div
          ref={ref}
          className={`container-narrow text-center ${isVisible ? 'is-visible' : ''} reveal`}
        >
          <div className="mb-8 flex justify-center">
            <span className="font-serif-display text-6xl text-saffron/40">&ldquo;</span>
          </div>
          <blockquote className="font-serif-display text-2xl font-light italic leading-relaxed text-ivory md:text-4xl md:leading-relaxed">
            {saintData.quote.text}
          </blockquote>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-saffron">
            {saintData.quote.attribution}
          </p>
        </div>
      </div>
    </section>
  );
}
