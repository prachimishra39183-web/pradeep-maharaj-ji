'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { siteImages } from '@/data/images';
import { saintData } from '@/data/saint';
import { cn } from '@/lib/utils';

export function HeroSection() {
  const slides = siteImages.heroSlides;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  const showPrevious = () => {
    setActiveIndex(
      (current) => (current - 1 + slides.length) % slides.length
    );
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % slides.length);
  };

  const getSlide = (offset: number) => {
    return slides[(activeIndex + offset) % slides.length];
  };

  const centerSlide = getSlide(0);
  const leftTopSlide = getSlide(1);
  const leftBottomSlide = getSlide(2);
  const rightTopSlide = getSlide(3);
  const rightBottomSlide = getSlide(4);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-F2F9FF">

    {/* ================= SOLID BACKGROUND ================= */}
<div className="absolute inset-0 bg-[#F2F9FF]" />

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1500px] items-center px-5 pb-24 pt-28 sm:px-8 lg:px-10">

        <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-[0.85fr_1.7fr_0.85fr] lg:gap-6">

          {/* ================= LEFT COLUMN ================= */}
          <div className="hidden h-[600px] flex-col gap-5 lg:flex">

            <HeroCollageCard
              slide={leftTopSlide}
              variant="small"
            />

            <HeroCollageCard
              slide={leftBottomSlide}
              variant="small"
            />

          </div>


          {/* ================= CENTER ================= */}
          <div className="relative h-[600px] sm:h-[600px] lg:h-[600px]">

            <div className="absolute inset-0 overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/20">

              <img
                key={centerSlide.src}
                src={centerSlide.src}
                alt={centerSlide.alt}
                className="h-full w-full object-cover animate-hero-image"
              />

              {/* Main image gradient */}
          

              {/* ================= HERO TEXT ================= */}
              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10 lg:p-12">

                <div
                  className={cn(
                    'max-w-3xl transition-all duration-1000',
                    isReady
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-6 opacity-0'
                  )}
                >

                 

                  {/* Buttons */}
                  <div className="mt-7 flex flex-wrap gap-3">

                    <Link
                      href="/about"
                      className="rounded-full bg-ivory px-6 py-3 text-xs font-medium uppercase tracking-wider text-charcoal transition-all duration-300 hover:scale-105 hover:bg-white hover:shadow-xl sm:px-7 sm:text-sm"
                    >
                      Explore His Journey
                    </Link>

                    <Link
                      href="/videos"
                      className="rounded-full border border-white/40 bg-white/10 px-6 py-3 text-xs font-medium uppercase tracking-wider text-ivory backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/20 sm:px-7 sm:text-sm"
                    >
                      Watch Katha
                    </Link>

                  </div>

                </div>

              </div>


              {/* ================= IMAGE LABEL ================= */}
              <div className="absolute right-5 top-5 max-w-[220px] rounded-full border border-white/20 bg-black/20 px-4 py-2 backdrop-blur-md">
                <p className="truncate text-[10px] font-medium uppercase tracking-wider text-white/80">
                  {centerSlide.alt}
                </p>
              </div>

            </div>

          </div>


          {/* ================= RIGHT COLUMN ================= */}
          <div className="hidden h-[600px] flex-col gap-5 lg:flex">

            <HeroCollageCard
              slide={rightTopSlide}
              variant="small"
            />

            <HeroCollageCard
              slide={rightBottomSlide}
              variant="small"
            />

          </div>

        </div>
      </div>


      {/* ================= SLIDER CONTROLS ================= */}
      <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 items-center gap-4">

        <button
          onClick={showPrevious}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/20 text-white/80 backdrop-blur-md transition-all duration-300 hover:border-white/60 hover:bg-black/40 hover:text-white"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>


        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-3 backdrop-blur-md">

          {slides.map((slide, index) => (
            <button
              key={slide.src}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show image ${index + 1}`}
              className={cn(
                'h-1.5 rounded-full transition-all duration-500',
                index === activeIndex
                  ? 'w-8 bg-saffron'
                  : 'w-1.5 bg-white/40 hover:bg-white/70'
              )}
            />
          ))}

        </div>


        <button
          onClick={showNext}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/20 text-white/80 backdrop-blur-md transition-all duration-300 hover:border-white/60 hover:bg-black/40 hover:text-white"
          aria-label="Next image"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

      </div>


      {/* ================= SCROLL INDICATOR ================= */}
      <div className="absolute bottom-8 right-8 z-30 hidden lg:block">
        <ChevronDown className="h-5 w-5 animate-bounce text-white/40" />
      </div>

    </section>
  );
}


/* =========================================================
   COLLAGE IMAGE CARD
========================================================= */

function HeroCollageCard({
  slide,
  variant,
}: {
  slide: {
    src: string;
    alt: string;
  };
  variant: 'small';
}) {
  return (
    <div
      className={cn(
        'group relative min-h-0 flex-1 overflow-hidden rounded-2xl',
        'shadow-xl ring-1 ring-white/10',
        'transition-all duration-700'
      )}
    >

      <img
        src={slide.src}
        alt={slide.alt}
        className={cn(
          'h-full w-full object-cover',
          'transition-transform duration-[4000ms] ease-out',
          'group-hover:scale-105'
        )}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 transition-all duration-500 group-hover:bg-black/15" />

      {/* Bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />

      {/* Image caption */}
      <div className="absolute bottom-4 left-4 right-4">
        <p className="line-clamp-2 text-[10px] font-medium uppercase tracking-wider text-white/80 sm:text-xs">
          {slide.alt}
        </p>
      </div>

    </div>
  );
}
