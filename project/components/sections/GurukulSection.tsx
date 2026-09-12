'use client';

import Link from 'next/link';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { gurukulData } from '@/data/gurukul';

export function GurukulSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="gurukul"
      className="relative overflow-hidden bg-transparent py-24 md:py-32"
    >

      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#7A2E2E]/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-[#B68B3C]/8 blur-3xl" />

      <div
        ref={ref}
        className={`relative mx-auto max-w-7xl px-6 md:px-12 ${
          isVisible ? 'is-visible' : ''
        } reveal`}
      >

        {/* Opening */}
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">

          {/* LEFT — Story */}
          <div>

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#B68B3C]" />

              <Sparkles className="h-3.5 w-3.5 text-[#B68B3C]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#B68B3C]">
                The Gurukul
              </p>
            </div>

            <h2 className="font-serif-display text-4xl font-medium leading-[1.15] text-[#2B2B2B] md:text-5xl lg:text-6xl">
              Where Knowledge
              <span className="block text-[#7A2E2E]">
                Becomes Sanskar
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-[#2B2B2B]/60 md:text-base">
              A place where learning, discipline, devotion and seva come
              together to shape a meaningful life.
            </p>

            {/* Founder */}
            <div className="mt-10 flex items-center gap-4">

              <div className="h-px w-10 bg-[#B68B3C]" />

              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#B68B3C]">
                  Founder
                </p>

                <h3 className="mt-1 font-serif-display text-xl text-[#7A2E2E]">
                  Pradeep Mishra Maharaj Ji
                </h3>
              </div>

            </div>

            {/* Special Guest */}
            <div className="mt-7 inline-flex items-center gap-4 rounded-2xl border border-[#DCEAF5] bg-white/80 px-5 py-4 shadow-sm backdrop-blur-md">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F8E9E7]">
                <Sparkles className="h-4 w-4 text-[#B68B3C]" />
              </div>

              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#B68B3C]">
                  Special Guest
                </p>

                <p className="mt-1 text-sm font-medium text-[#2B2B2B]">
                  Special Guest
                </p>
              </div>

            </div>

            {/* CTA */}
            <div className="mt-9">
              <Link
                href="/gurukul"
                className="group inline-flex items-center gap-3 rounded-full bg-[#7A2E2E] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Discover the Gurukul

                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>

          </div>

          {/* RIGHT — Creative image composition */}
          <div className="relative mx-auto w-full max-w-[560px]">

            {/* Decorative circle */}
            <div className="absolute -right-5 -top-5 h-28 w-28 rounded-full border border-[#B68B3C]/30 md:-right-8 md:-top-8 md:h-36 md:w-36" />

            {/* Main image */}
            <div className="relative z-10 overflow-hidden rounded-[38px] border-[8px] border-white bg-white shadow-[0_25px_70px_rgba(43,43,43,0.13)]">

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/gurubg.jpeg"
                alt="Life at Jan Kalyan Gurukul Seva Sanstha"
                className="h-[390px] w-full object-cover transition-transform duration-700 hover:scale-105 md:h-[470px]"
                loading="lazy"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B2B2B]/45 via-transparent to-transparent" />

              {/* Image label */}
              <div className="absolute bottom-6 left-6">
                <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/70">
                  Jan Kalyan Gurukul
                </p>

                <p className="mt-1 font-serif-display text-2xl text-white">
                  A Journey of Learning
                </p>
              </div>

            </div>

            {/* Founder floating card */}
            <div className="absolute -bottom-8 -left-5 z-20 w-[210px] overflow-hidden rounded-[24px] border-4 border-[#F2F9FF] bg-white shadow-[0_18px_45px_rgba(43,43,43,0.15)] transition-all duration-500 hover:-translate-y-2 md:-left-8">

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/qt.jpeg"
                alt="Founder of Jan Kalyan Gurukul Seva Sanstha"
                className="h-[145px] w-full object-cover"
                loading="lazy"
              />

              <div className="px-4 py-3">
                <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#B68B3C]">
                  Founder
                </p>

                <p className="mt-1 font-serif-display text-base text-[#7A2E2E]">
                  Pradeep Mishra Maharaj Ji
                </p>
              </div>

            </div>

            {/* Special guest floating card */}
            <div className="absolute -right-4 bottom-8 z-20 w-[180px] overflow-hidden rounded-[22px] border-4 border-[#F2F9FF] bg-white shadow-[0_18px_45px_rgba(43,43,43,0.13)] transition-all duration-500 hover:-translate-y-2 md:-right-7">

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/qt2.png"
                alt="Special guest at Jan Kalyan Gurukul"
                className="h-[115px] w-full object-cover"
                loading="lazy"
              />

              <div className="px-4 py-3">
                <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#B68B3C]">
                  Special Guest
                </p>

                <p className="mt-1 text-xs font-medium text-[#7A2E2E]">
                  Mahant shri suresh chandra awasthi ji maharaj
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Small philosophy strip */}
        

      </div>
    </section>
  );
}