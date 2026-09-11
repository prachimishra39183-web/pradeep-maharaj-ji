'use client';

import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { siteImages } from '@/data/images';

const storySlides = [
  { text: 'From Katha...', image: siteImages.fireRitual },
  { text: 'To contemplation.', image: siteImages.meditation },
  { text: 'From learning...', image: siteImages.studentsLearning },
  { text: 'To seva.', image: siteImages.devoteesFire },
  { text: 'From discipline...', image: siteImages.studentsClassroom },
  { text: 'To dharma.', image: siteImages.templeOilLamp },
];

export function VisualStorySection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="bg-charcoal py-20 md:py-28">
      <div ref={ref} className={`container-wide ${isVisible ? 'is-visible' : ''} reveal`}>
        <div className="space-y-0">
          {storySlides.map((slide, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden ${
                i % 2 === 0 ? 'md:ml-0' : 'md:ml-[15%]'
              } ${i % 2 === 0 ? 'md:mr-[15%]' : 'md:mr-0'}`}
            >
              <div className="zoom-container relative aspect-[16/9] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={slide.image.src}
                  alt={slide.image.alt}
                  className="zoom-image h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <p className="font-serif-display text-3xl font-light italic text-ivory md:text-5xl">
                    {slide.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
