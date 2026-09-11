'use client';

import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { gurukulData } from '@/data/gurukul';
import { siteImages } from '@/data/images';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { GurukulPhotoStory } from '@/components/sections/GurukulPhotoStory';
import { FinalCTASection } from '@/components/sections/FinalCTASection';

export default function GurukulPage() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/gurukul2.jpeg"
          alt={siteImages.studentsClassroom.alt}
         className="h-25 w-full object-cover object-center rounded-xl"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/30 to-charcoal/70" />
        <div className="absolute inset-0 flex items-end justify-center pb-16">
          <div className="text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-saffron">
              {gurukulData.organization}
            </p>
           
           
          </div>
        </div>
      </section>

      {/* Supporting text */}
    

      {/* Sections */}
      <section className="section-padding bg-cream">
        <div ref={ref} className="container-max">
          <div className="grid gap-px overflow-hidden rounded-sm border border-beige/50 bg-beige/50 md:grid-cols-2 lg:grid-cols-3">
            {gurukulData.sections.map((section, i) => (
              <div
                key={section.id}
                className={`reveal ${isVisible ? 'is-visible' : ''} group bg-ivory p-8 transition-all duration-300 hover:bg-cream`}
                style={{ transitionDelay: `${i * 0.06}s` }}
              >
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-saffron">
                  {section.label}
                </p>
                <h3 className="font-serif-display text-xl font-medium text-charcoal">
                  {section.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {section.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo story */}
      <GurukulPhotoStory />

      {/* Final CTA */}
  
    </>
  );
}
