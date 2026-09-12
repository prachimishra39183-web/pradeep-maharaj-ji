'use client';

import Link from 'next/link';
import {
  ArrowDown,
  ArrowUpRight,
  Sparkles,
  BookOpen,
  Heart,
  HandHeart,
} from 'lucide-react';

import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { saintData } from '@/data/saint';
import { JourneyTimeline } from '@/components/sections/JourneyTimeline';
import { QuoteSection } from '@/components/sections/QuoteSection';

export default function AboutPage() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <main className="overflow-hidden bg-[#F2F9FF]">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative min-h-[90vh] overflow-hidden bg-[#F2F9FF]">

        {/* Geometric background */}
        <div className="pointer-events-none absolute right-[-120px] top-[-100px] h-[420px] w-[420px] rotate-45 border border-[#B68B3C]/15" />
        <div className="pointer-events-none absolute right-[-80px] top-[-60px] h-[320px] w-[320px] rotate-45 border border-[#7A2E2E]/10" />

        <div className="mx-auto grid min-h-[90vh] max-w-7xl items-center gap-12 px-6 py-28 md:px-12 lg:grid-cols-[0.8fr_1.2fr]">

          {/* LEFT */}
          <div className="relative z-10">

            <div className="mb-8 flex items-center gap-4">
              <div className="h-12 w-[2px] bg-[#7A2E2E]" />

              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#B68B3C]">
                  The Story
                </p>

                <p className="mt-1 text-[10px] text-[#2B2B2B]/40">
                  Behind the vision
                </p>
              </div>
            </div>

            <h1 className="font-serif-display text-5xl font-medium leading-[1.02] text-[#2B2B2B] md:text-6xl lg:text-7xl">
              A Journey
              <span className="block text-[#7A2E2E]">
                Beyond Words
              </span>
            </h1>

            <p className="mt-7 max-w-md text-sm leading-7 text-[#2B2B2B]/55 md:text-base">
              Discover the person, purpose and vision behind
              Jan Kalyan Gurukul Seva Sanstha.
            </p>

            <div className="mt-10 flex items-center gap-5">

              <div className="flex h-12 w-12 items-center justify-center bg-[#7A2E2E] text-white shadow-lg">
                <Sparkles className="h-4 w-4" />
              </div>

              <div>
                <p className="text-[9px] uppercase tracking-[0.25em] text-[#B68B3C]">
                  Founder
                </p>

                <p className="mt-1 font-serif-display text-xl text-[#7A2E2E]">
                  Shri Pradeep Mishra Maharaj Ji
                </p>
              </div>

            </div>

            <div className="mt-12 flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#7A2E2E]">
              <ArrowDown className="h-4 w-4" />
              Explore the story
            </div>

          </div>


          {/* RIGHT — TEMPLE ARCH STYLE IMAGE */}
          <div className="relative mx-auto w-full max-w-[580px]">

            {/* Outer architectural frame */}
            <div className="absolute inset-[-18px] border border-[#B68B3C]/25" />

            <div className="absolute inset-[-7px] border border-[#7A2E2E]/10" />

            {/* Main image */}
            <div
              className="relative z-10 overflow-hidden bg-white p-2 shadow-[0_30px_80px_rgba(43,43,43,0.13)]"
              style={{
                clipPath:
                  'polygon(8% 0, 92% 0, 100% 8%, 100% 100%, 0 100%, 0 8%)',
              }}
            >

              <div
                className="overflow-hidden"
                style={{
                  clipPath:
                    'polygon(8% 0, 92% 0, 100% 8%, 100% 100%, 0 100%, 0 8%)',
                }}
              >

                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/about.png"
                  alt="Jan Kalyan Gurukul Seva Sanstha"
                  className="h-[500px] w-full object-cover md:h-[620px]"
                  loading="eager"
                />

              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#2B2B2B]/50 via-transparent to-transparent" />

              <div className="absolute bottom-7 left-8">
                <p className="text-[9px] uppercase tracking-[0.3em] text-white/70">
                  Jan Kalyan Gurukul Seva Sanstha
                </p>

                <p className="mt-2 font-serif-display text-2xl text-white">
                  A Vision Taking Shape
                </p>
              </div>

            </div>

            {/* Vertical date marker */}
            <div className="absolute -right-8 top-1/2 z-20 hidden -translate-y-1/2 lg:block">
              <div className="flex h-36 w-12 flex-col items-center justify-center border border-[#B68B3C]/30 bg-[#F2F9FF]">
                <span className="rotate-90 whitespace-nowrap text-[8px] font-semibold uppercase tracking-[0.3em] text-[#7A2E2E]">
                  The Beginning
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          SPECIAL FOUNDER ABOUT
      ===================================================== */}
      <section className="relative bg-[#7A2E2E] py-24 md:py-32">

        {/* Decorative yantra-like lines */}
        <div className="pointer-events-none absolute left-10 top-10 h-28 w-28 rotate-45 border border-white/10" />
        <div className="pointer-events-none absolute bottom-10 right-10 h-36 w-36 rotate-45 border border-[#E4C77A]/15" />

        <div className="mx-auto max-w-7xl px-6 md:px-12">

          <div className="grid items-center gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">

            {/* Founder portrait */}
            <div className="relative mx-auto w-full max-w-[380px]">

              <div className="absolute -left-5 top-8 h-full w-full border border-[#E4C77A]/25" />

              <div className="relative z-10 bg-[#F2D6A2] p-2">

                {/* eslint-disable-next-line @next/next/no-img-element */}
               <div className="relative h-[520px] w-full overflow-hidden">
  <video
    className="h-full w-full object-cover"
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
  >
    <source src="/video.mp4" type="video/mp4" />
  </video>

  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

  <div className="absolute bottom-6 left-6">
    <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/70">
      The Person Behind the Purpose
    </p>
    <h3 className="mt-2 font-serif-display text-2xl text-white">
     Shri Pradeep Mishra Maharaj Ji
    </h3>
  </div>
</div>

              </div>

              {/* Founder label */}
              <div className="absolute -bottom-6 -right-6 z-20 bg-white px-6 py-5 shadow-xl">

                <p className="text-[8px] font-semibold uppercase tracking-[0.25em] text-[#B68B3C]">
                  Founder
                </p>

                <p className="mt-1 font-serif-display text-lg text-[#7A2E2E]">
                  Shri Pradeep Mishra Maharaj Ji
                </p>

              </div>

            </div>


            {/* About Founder */}
            <div className="text-white">

              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#E4C77A]" />

                <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#E4C77A]">
                  About the Founder
                </p>
              </div>

              <h2 className="mt-6 font-serif-display text-4xl font-medium leading-tight md:text-5xl">
                The Person Behind
                <span className="block text-[#E4C77A]">
                  The Purpose
                </span>
              </h2>

              <div className="mt-7 max-w-2xl">
                <p className="text-sm leading-8 text-white/70 md:text-base">
                  {saintData.about.biography}
                </p>
              </div>

              {/* Founder philosophy */}
              <div className="mt-9 grid gap-5 sm:grid-cols-2">

                <div className="border-l border-[#E4C77A]/40 pl-5">
                  <p className="text-[9px] uppercase tracking-[0.25em] text-[#E4C77A]">
                    Guided By
                  </p>

                  <p className="mt-2 font-serif-display text-lg">
                    Knowledge & Devotion
                  </p>
                </div>

                <div className="border-l border-[#E4C77A]/40 pl-5">
                  <p className="text-[9px] uppercase tracking-[0.25em] text-[#E4C77A]">
                    Dedicated To
                  </p>

                  <p className="mt-2 font-serif-display text-lg">
                    Education & Seva
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


    
      {/* =====================================================
          SPECIAL GUEST
      ===================================================== */}
      


      {/* =====================================================
          JOURNEY
      ===================================================== */}
      <JourneyTimeline />


      {/* =====================================================
          QUOTE
      ===================================================== */}
    

      {/* =====================================================
          FINAL CTA
      ===================================================== */}
     
    </main>
  );
}