'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { gurukulData } from '@/data/gurukul';
import { siteImages } from '@/data/images';
import { SectionHeading } from '@/components/shared/SectionHeading';

export function GurukulSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="gurukul" className="section-padding bg-ivory">
      

      <div ref={ref} className="container-max mt-16">
        {/* Hero image */}
        <div className={`zoom-container mb-16 aspect-[16/9] overflow-hidden rounded-sm shadow-lg ${isVisible ? 'is-visible' : ''} reveal`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={siteImages.studentsClassroom.src}
            alt={siteImages.studentsClassroom.alt}
            className="zoom-image h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Sections grid */}
        <div className="grid gap-px overflow-hidden rounded-sm border border-beige/50 bg-beige/50 md:grid-cols-2 lg:grid-cols-3">
          {gurukulData.sections.slice(0, 6).map((section, i) => (
            <div
              key={section.id}
              className={`reveal ${isVisible ? 'is-visible' : ''} group bg-ivory p-8 transition-all duration-300 hover:bg-cream`}
              style={{ transitionDelay: `${i * 0.08}s` }}
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

        <div className="mt-10 text-center">
          <Link
            href="/gurukul"
            className="group inline-flex items-center gap-2 rounded-full bg-maroon px-8 py-3.5 text-sm font-medium uppercase tracking-wider text-ivory transition-all duration-300 hover:bg-maroon/90 hover:shadow-lg"
          >
            Explore the Gurukul
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
