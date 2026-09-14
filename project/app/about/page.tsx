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
    <main className="overflow-hidden bg-transparent">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative min-h-[90vh] overflow-hidden bg-transparent">

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
                  Shri Pradeep Maharaj Ji
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
              <div className="flex h-36 w-12 flex-col items-center justify-center border border-[#B68B3C]/30 bg-transparent">
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
     Shri Pradeep Maharaj Ji
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
                  Shri Pradeep Maharaj Ji
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
      {/* ========================================
    SPECIAL ACHIEVEMENTS / REACH
======================================== */}
{/* =========================================================
    SPECIAL ACHIEVEMENTS
========================================================= */}
<section className="relative overflow-hidden bg-[#F4EBDD] py-24 md:py-32">

  {/* =====================================================
      BACKGROUND
  ====================================================== */}

  {/* soft radial glow */}
  <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#D7A35D]/20 blur-3xl" />
  <div className="pointer-events-none absolute -right-40 top-[40%] h-[420px] w-[420px] rounded-full bg-[#7A2E2E]/10 blur-3xl" />

  {/* subtle decorative circles */}
  <div className="pointer-events-none absolute right-[8%] top-[12%] h-24 w-24 rounded-full border border-[#7A2E2E]/10" />
  <div className="pointer-events-none absolute right-[11%] top-[15%] h-12 w-12 rounded-full border border-[#B68B3C]/20" />

  <div className="pointer-events-none absolute bottom-[8%] left-[6%] h-32 w-32 rounded-full border border-[#B68B3C]/15" />


  <div className="relative mx-auto max-w-7xl px-6 md:px-12">

    {/* =====================================================
        TITLE
    ====================================================== */}

    <div className="relative mb-20 max-w-3xl">

      <p className="text-[12px] font-semibold uppercase tracking-[0.35em] text-maroon">
        Special Achievements
      </p>

      <h2 className="mt-4 font-serif-display text-4xl font-medium leading-tight text-[#2B2B2B] md:text-5xl lg:text-6xl">
        A Journey Built
        <span className="block text-[#7A2E2E]">
          Through Learning
        </span>
      </h2>

      <p className="mt-5 max-w-xl text-sm leading-7 text-[#2B2B2B]/55 md:text-base">
        From Gurukul education to spiritual studies across India and
        an important chapter of Bhagwat studies in America.
      </p>

      {/* small decorative rule */}
      <div className="mt-7 flex items-center gap-3">
        <span className="h-px w-16 bg-[#B68B3C]" />
        <span className="h-2 w-2 rotate-45 bg-[#7A2E2E]" />
        <span className="h-px w-16 bg-[#B68B3C]" />
      </div>

    </div>


    {/* =====================================================
        EARLY JOURNEY — 2006 → 2009
    ====================================================== */}

    <div className="relative">

      {/* giant background number */}
      <div className="pointer-events-none absolute -top-20 right-0 select-none font-serif-display text-[190px] leading-none text-[#7A2E2E]/[0.045] md:text-[270px]">
        2006
      </div>


      <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">

        {/* IMAGE COMPOSITION */}
        <div className="relative min-h-[500px]">

          {/* back shadow panel */}
          <div
            className="absolute left-8 top-10 h-[390px] w-[75%] rotate-[-7deg] bg-[#7A2E2E]/10"
          />

          {/* gold outline */}
          <div
            className="absolute left-4 top-5 h-[390px] w-[75%] rotate-[-3deg] border border-[#B68B3C]/30"
          />

          {/* main image */}
          <div
            className="group absolute left-0 top-0 h-[400px] w-[78%] overflow-hidden border-[8px] border-[#FFF9F0] bg-[#FFF9F0] shadow-[0_35px_80px_rgba(43,43,43,0.15)]"
            style={{
              clipPath:
                'polygon(5% 0,100% 0,96% 94%,88% 100%,0 100%,0 7%)',
            }}
          >
            <img
              src="/usa1.jpeg"
              alt="Early study journey"
              className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

            <div className="absolute bottom-7 left-7">
               <p className="mt-2 font-serif-display text-3xl text-white">
                USA
              </p>

            </div>
          </div>


          {/* floating mini image */}
          <div
            className="absolute bottom-0 right-0 h-40 w-32 rotate-[6deg] overflow-hidden border-[6px] border-[#FFF9F0] bg-white shadow-[0_20px_45px_rgba(43,43,43,0.16)] md:h-48 md:w-36"
          >
            <img
              src="/usa.jpeg"
              alt="Maharishi Vedic Vishwa Vidyalaya"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>


          {/* floating year tag */}
          <div className="absolute right-[20%] top-4 flex h-16 w-16 rotate-[-8deg] items-center justify-center rounded-[20px] bg-[#7A2E2E] shadow-xl">
            <span className="font-serif-display text-xl text-[#E4C77A]">
              06
            </span>
          </div>

        </div>


        {/* JOURNEY DETAILS */}
        <div className="relative">

          <p className="text-[12px] font-semibold uppercase tracking-[0.3em] text-maroon">
            The Foundation
          </p>

          <h3 className="mt-3 font-serif-display text-5xl text-[#7A2E2E] md:text-4xl">
            Where the journey began
          </h3>


          {/* 2006 */}
          <div className="mt-8 flex gap-5">

            <div className="flex flex-col items-center">
              <span className="h-3 w-3 rounded-full bg-[#7A2E2E]" />
              <span className="mt-2 h-full w-px bg-[#B68B3C]/25" />
            </div>

            <div className="pb-7">
              <p className="font-serif-display text-2xl text-[#7A2E2E]">
                2006
              </p>

              <p className="mt-1 text-sm font-medium text-[#2B2B2B]">
                Ayodhya Gurukul
              </p>

              <p className="mt-2 text-xs leading-6 text-[#2B2B2B]/45">
                The beginning of a path rooted in Gurukul learning.
              </p>
            </div>

          </div>


          {/* 2007 */}
          <div className="flex gap-5">

            <div className="flex flex-col items-center">
              <span className="h-3 w-3 rounded-full bg-[#B68B3C]" />
              <span className="mt-2 h-full w-px bg-[#B68B3C]/25" />
            </div>

            <div className="pb-7">
              <p className="font-serif-display text-2xl text-[#7A2E2E]">
                2007
              </p>

              <p className="mt-1 text-sm font-medium text-[#2B2B2B]">
                Maharishi Vedic Vishwa Vidyalaya
              </p>

              <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-[#2B2B2B]/35">
                Madhya Pradesh
              </p>
            </div>

          </div>


          {/* 2008 */}
          <div className="flex gap-5">

            <div className="flex flex-col items-center">
              <span className="h-3 w-3 rounded-full bg-[#7A2E2E]" />
              <span className="mt-2 h-full w-px bg-[#B68B3C]/25" />
            </div>

            <div className="pb-7">
              <p className="font-serif-display text-2xl text-[#7A2E2E]">
                2008
              </p>

              <p className="mt-1 text-sm font-medium text-[#2B2B2B]">
                Pune
              </p>
            </div>

          </div>


          {/* 2009 */}
          <div className="flex gap-5">

            <div className="flex flex-col items-center">
              <span className="h-3 w-3 rounded-full bg-[#B68B3C]" />
            </div>

            <div>
              <p className="font-serif-display text-2xl text-[#7A2E2E]">
                2009
              </p>

              <p className="mt-1 text-sm font-medium text-[#2B2B2B]">
                Madhya Pradesh
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>


    {/* =====================================================
        DELHI — 2010
    ====================================================== */}

    <div className="relative mt-28 md:mt-36">

      <div className="relative overflow-hidden rounded-[38px] bg-[#EFE2D5] p-6 md:p-10">

        {/* giant 2010 */}
        <div className="pointer-events-none absolute -bottom-16 -right-5 font-serif-display text-[180px] leading-none text-[#7A2E2E]/[0.055] md:text-[260px]">
          2010
        </div>

        <div className="relative grid items-center gap-10 md:grid-cols-[0.7fr_1.3fr]">

          <div>

            <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#B68B3C]">
              Delhi
            </p>

            <p className="mt-3 font-serif-display text-7xl leading-none text-[#7A2E2E]">
              2010
            </p>

            <p className="mt-2 text-sm text-[#2B2B2B]/50">
              Three-month chapter
            </p>

          </div>


          <div>

            <p className="max-w-xl font-serif-display text-2xl leading-relaxed text-[#2B2B2B] md:text-3xl">
              Another important stage before the journey moved
              toward deeper spiritual study.
            </p>

          </div>

        </div>

      </div>

    </div>


    {/* =====================================================
        USA — BHAGWAT STUDIES
    ====================================================== */}

    <div className="relative mt-28 md:mt-36">

      {/* outer shadow */}
      <div className="absolute -bottom-5 left-5 right-5 top-5 bg-[#7A2E2E]/10" />

      <div className="relative overflow-hidden bg-[#241C1C]">

        {/* decorative circles */}
        <div className="pointer-events-none absolute right-[-90px] top-[-90px] h-72 w-72 rounded-full border border-[#E4C77A]/10" />
        <div className="pointer-events-none absolute bottom-[-120px] left-[-100px] h-80 w-80 rounded-full border border-[#E4C77A]/10" />

        <div className="grid lg:grid-cols-[0.8fr_1.2fr]">

          {/* LEFT STORY */}
          <div className="relative flex flex-col justify-between p-8 md:p-12 lg:p-16">

            <div>

              <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#E4C77A]">
                A Defining Chapter
              </p>

              <p className="mt-8 font-serif-display text-7xl leading-none text-white md:text-8xl">
                USA
              </p>

              <p className="mt-4 font-serif-display text-3xl text-[#E4C77A]">
                2010 — 2012
              </p>

            </div>


            <div className="mt-14">

              <p className="text-[9px] uppercase tracking-[0.3em] text-white/35">
                1 April 2010 → 8 April 2012
              </p>

              <h3 className="mt-4 font-serif-display text-3xl text-white md:text-4xl">
                Bhagwat Studies
              </h3>

              <p className="mt-4 max-w-sm text-sm leading-7 text-white/50">
                He went to America for studies, dedicating this period
                to learning the Bhagwat.
              </p>

            </div>

          </div>


          {/* RIGHT IMAGE COLLAGE */}
         <div className="relative min-h-[500px] overflow-hidden bg-[#312727] p-5 md:min-h-[560px] md:p-10">

  {/* Main study image */}
  <div className="relative h-[390px] w-full md:h-[470px]">

    <img
      src="/study.jpeg"
      alt="Bhagwat study period in America"
      className="h-full w-full rounded-[4px] object-cover"
      loading="lazy"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

  </div>


  {/* Secondary image */}
  <div className="absolute bottom-6 right-6 z-10 h-[150px] w-[115px] rotate-[4deg] overflow-hidden border-[5px] border-[#312727] bg-white shadow-2xl sm:h-[175px] sm:w-[135px] md:bottom-10 md:right-10 md:h-[210px] md:w-[165px]">

    <img
      src="/usa.jpeg"
      alt="Bhagwat study period"
      className="h-full w-full object-cover"
      loading="lazy"
    />

  </div>



            {/* date label */}
            <div className="absolute left-8 top-8 md:left-12 md:top-12">

              <span className="border border-white/20 bg-black/30 px-4 py-2 text-[9px] uppercase tracking-[0.25em] text-white backdrop-blur-md">
                1 APR 2010 — 8 APR 2012
              </span>

            </div>

          </div>

        </div>

      </div>

    </div>


    {/* =====================================================
        2015
    ====================================================== */}

    <div className="relative mt-28 md:mt-36">

      <div className="grid items-center gap-10 md:grid-cols-[1fr_1.2fr]">

        <div>

          <p className="font-serif-display text-[110px] leading-none text-maroon/50 md:text-[150px]">
            2015
          </p>

        </div>


        <div>

          <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#B68B3C]">
            A New Chapter
          </p>

          <h3 className="mt-3 font-serif-display text-3xl text-[#7A2E2E] md:text-4xl">
            The Katha Journey Begins
          </h3>

          <p className="mt-4 max-w-lg text-sm leading-7 text-[#2B2B2B]/50">
            In 2015, a new chapter began with the start of his
            Katha journey.
          </p>

          <div className="mt-7 flex items-center gap-3">

            <span className="h-3 w-3 rounded-full bg-[#7A2E2E]" />
            <span className="h-px w-16 bg-[#B68B3C]" />
            <span className="h-2 w-2 rotate-45 bg-[#B68B3C]" />

          </div>

        </div>

      </div>

    </div>


    {/* =====================================================
        REACH
    ====================================================== */}

    <div className="relative mt-24 border-t border-[#CDBFAF] pt-14 md:mt-32">

      <div className="grid gap-12 md:grid-cols-3">

        {/* 70–80 */}
        <div className="group">

          <p className="font-serif-display text-5xl text-[#7A2E2E] transition-transform duration-500 group-hover:-translate-y-2 md:text-6xl">
            70–80
          </p>

          <div className="mt-3 h-[2px] w-10 bg-[#B68B3C]" />

          <p className="mt-4 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#2B2B2B]/55">
            Janambhumi Kathas
          </p>

          <p className="mt-1 text-xs text-[#2B2B2B]/40">
            Lakhimpur
          </p>

        </div>


        {/* States */}
        <div className="group">

          <p className="font-serif-display text-5xl text-[#7A2E2E] transition-transform duration-500 group-hover:-translate-y-2 md:text-6xl">
            7–8
          </p>

          <div className="mt-3 h-[2px] w-10 bg-[#B68B3C]" />

          <p className="mt-4 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#2B2B2B]/55">
            States
          </p>

          <p className="mt-1 text-xs text-[#2B2B2B]/40">
            Katha across India
          </p>

        </div>


        {/* International */}
        <div className="group">

          <p className="font-serif-display text-5xl text-[#7A2E2E] transition-transform duration-500 group-hover:-translate-y-2 md:text-6xl">
            USA
          </p>

          <div className="mt-3 h-[2px] w-10 bg-[#B68B3C]" />

          <p className="mt-4 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#2B2B2B]/55">
            International Study
          </p>

          <p className="mt-1 text-xs text-[#2B2B2B]/40">
            Bhagwat Studies
          </p>

        </div>

      </div>

    </div>

  </div>
</section>
     
    </main>
  );
}