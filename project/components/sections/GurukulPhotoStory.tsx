'use client';

import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { gurukulData } from '@/data/gurukul';
import { siteImages } from '@/data/images';
import { SectionHeading } from '@/components/shared/SectionHeading';

const photoStoryImages = [
  siteImages.studentsClassroom, // gurukul.jpeg
  siteImages.studentsLearning,  // gurukul2.jpeg
  siteImages.studentsListening, // gurukul1.jpeg
  siteImages.studentsLearning,  // gurukul2.jpeg
  siteImages.studentsClassroom, // gurukul.jpeg
  siteImages.studentsListening, // gurukul1.jpeg
];

export function GurukulPhotoStory() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="section-padding bg-transparent">
      <SectionHeading label={gurukulData.photoStory.title} title={gurukulData.photoStory.title} />

      <div ref={ref} className="container-wide mt-16">
       <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
  {photoStoryImages.map((img, i) => (
    <div
      key={i}
      className={`reveal ${
        isVisible ? 'is-visible' : ''
      } group`}
      style={{ transitionDelay: `${i * 0.1}s` }}
    >
      <div
        className={`
          relative overflow-hidden rounded-2xl
          bg-white shadow-md
          transition-all duration-500
          hover:-translate-y-2 hover:shadow-2xl
          ${i === 0 || i === 3 ? 'lg:translate-y-6' : ''}
        `}
      >
        <img
          src={img.src}
          alt={img.alt}
          className="
            h-[280px] w-full
            object-cover object-center
            transition-transform duration-700
            group-hover:scale-105
            md:h-[300px]
          "
          loading="lazy"
        />

        {/* Elegant overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2B2B2B]/75 via-transparent to-transparent" />

        {/* Number */}
        <div className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow-md">
          <span className="text-xs font-semibold text-[#7A2E2E]">
            {String(i + 1).padStart(2, '0')}
          </span>
        </div>

        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="font-serif-display text-xl font-medium text-white">
            {gurukulData.photoStory.captions[i]}
          </p>

          <div className="mt-2 h-[2px] w-8 bg-[#B68B3C] transition-all duration-500 group-hover:w-14" />
        </div>
      </div>
    </div>
  ))}
</div>
      </div>
    </section>
  );
}
