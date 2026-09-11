'use client';

import { saintData } from '@/data/saint';
import { SectionHeading } from '@/components/shared/SectionHeading';

export function JourneyTimeline() {
  return (
    <section className="relative overflow-hidden bg-[#F2F9FF] py-24 md:py-32">
      
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute -left-32 top-40 h-72 w-72 rounded-full bg-[#B68B3C]/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-40 h-72 w-72 rounded-full bg-[#7A2E2E]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">

        {/* Heading */}
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#B68B3C]">
            The Journey
          </p>

          <h2 className="font-serif-display text-4xl font-medium text-[#2B2B2B] md:text-5xl lg:text-6xl">
            Where Devotion
            <span className="block text-[#7A2E2E]">
              Becomes a Journey
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#2B2B2B]/60 md:text-base">
            A story shaped by devotion, knowledge, discipline and seva —
            unfolding one chapter at a time.
          </p>
        </div>

        {/* Journey */}
        <div className="relative">

          {/* Central golden path */}
          <div className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-[#B68B3C]/50 to-transparent md:block" />

          {/* Glowing center */}
          <div className="absolute left-1/2 top-0 hidden h-4 w-4 -translate-x-1/2 rounded-full bg-[#B68B3C] shadow-[0_0_25px_rgba(182,139,60,0.5)] md:block" />

          <div className="space-y-20 md:space-y-28">

            {saintData.journey.map((entry, i) => {
              const isLeft = i % 2 === 0;

              return (
                <div
                  key={entry.number}
                  className="relative grid items-center md:grid-cols-2"
                >

                  {/* Milestone */}
                  <div
                    className={`relative z-10 ${
                      isLeft
                        ? 'md:pr-20'
                        : 'md:col-start-2 md:pl-20'
                    }`}
                  >

                    {/* 3D Card */}
                    <div
                      className="
                        group relative
                        rounded-[28px]
                        border border-[#B68B3C]/20
                        bg-white/80
                        p-7
                        shadow-[0_20px_60px_rgba(43,43,43,0.08)]
                        backdrop-blur-xl
                        transition-all duration-500
                        hover:-translate-y-3
                        hover:rotate-[0.5deg]
                        hover:shadow-[0_30px_80px_rgba(43,43,43,0.14)]
                        md:p-9
                      "
                    >

                      {/* Number */}
                      <div
                        className={`
                          absolute -top-8
                          flex h-16 w-16
                          items-center justify-center
                          rounded-full
                          border-4 border-[#F2F9FF]
                          bg-[#7A2E2E]
                          shadow-xl
                          ${isLeft ? '-right-5 md:-right-8' : '-left-5 md:-left-8'}
                        `}
                      >
                        <span className="font-serif-display text-lg text-white">
                          {entry.number}
                        </span>
                      </div>

                      {/* Year */}
                      <p className="text-sm font-bold tracking-[0.25em] text-[#B68B3C]">
                        {entry.date}
                      </p>

                      {/* Title */}
                      <h3 className="mt-3 font-serif-display text-2xl font-medium text-[#2B2B2B] md:text-3xl">
                        {entry.title}
                      </h3>

                      {/* Small decorative line */}
                      <div className="my-5 h-[2px] w-12 bg-[#B68B3C] transition-all duration-500 group-hover:w-20" />

                      {/* Description */}
                      <p className="text-sm leading-7 text-[#2B2B2B]/65 md:text-base">
                        {entry.description}
                      </p>

                      {/* Bottom chapter label */}
                      <div className="mt-6 flex items-center gap-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#B68B3C]" />
                        <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#2B2B2B]/40">
                          Chapter {entry.number}
                        </span>
                      </div>

                      {/* 3D glow */}
                      <div className="pointer-events-none absolute inset-0 -z-10 rounded-[28px] bg-gradient-to-br from-[#B68B3C]/10 via-transparent to-[#7A2E2E]/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </div>
                  </div>

                  {/* Center milestone */}
                  <div className="absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 md:block">
                    <div className="flex h-12 w-12 rotate-45 items-center justify-center rounded-[10px] border border-[#B68B3C]/40 bg-[#F2F9FF] shadow-lg">
                      <div className="h-3 w-3 -rotate-45 rounded-full bg-[#7A2E2E]" />
                    </div>
                  </div>

                  {/* Empty opposite side */}
                  <div
                    className={`hidden md:block ${
                      isLeft ? 'md:col-start-2' : 'md:col-start-1'
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Ending point */}
          <div className="relative mt-24 flex justify-center">
            <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-[#B68B3C]/40 bg-white shadow-[0_15px_50px_rgba(43,43,43,0.1)]">
              <div className="absolute inset-2 rounded-full border border-dashed border-[#B68B3C]/40" />

              <span className="font-serif-display text-2xl text-[#7A2E2E]">
                ✦
              </span>
            </div>
          </div>

          {/* Final message */}
          <div className="mx-auto mt-10 max-w-xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B68B3C]">
              The Journey Continues
            </p>

            <h3 className="mt-4 font-serif-display text-3xl text-[#7A2E2E] md:text-4xl">
              From Knowledge to Seva
            </h3>

            <p className="mt-4 text-sm leading-7 text-[#2B2B2B]/60">
              Every chapter adds a new meaning to the journey —
              and every step carries the spirit of devotion, learning
              and service forward.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}