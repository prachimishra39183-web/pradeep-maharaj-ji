'use client';

import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { saintData } from '@/data/saint';
import { siteImages } from '@/data/images';

export function IntroductionSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="section-padding bg-ivory">
      <div
        ref={ref}
        className={`container-wide grid items-center gap-12 md:gap-20 lg:grid-cols-12 ${isVisible ? 'is-visible' : ''} reveal`}
      >
        {/* Text — asymmetric, left side */}
        <div className="lg:col-span-7 lg:col-start-1">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-saffron">
            {saintData.introduction.label}
          </p>
          <h2 className="font-serif-display text-display-md font-medium leading-tight text-charcoal">
            {saintData.introduction.heading}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {saintData.introduction.paragraph}
          </p>
        </div>

        {/* Image — right side, smaller */}
        <div className="lg:col-span-4 lg:col-start-9">
          <div className="zoom-container aspect-[3/4] overflow-hidden rounded-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={siteImages.diyaWarm.src}
              alt={siteImages.diyaWarm.alt}
              className="zoom-image h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
