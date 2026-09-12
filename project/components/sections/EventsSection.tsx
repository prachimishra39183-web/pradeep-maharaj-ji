'use client';

import Link from 'next/link';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { events } from '@/data/events';

export function EventsSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative overflow-hidden bg-transparent py-20 md:py-28">

      {/* Soft 3D background orbs */}
      <div className="pointer-events-none absolute -left-24 top-24 h-56 w-56 rounded-full bg-[#7A2E2E]/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-20 h-64 w-64 rounded-full bg-[#B68B3C]/8 blur-3xl" />

      <div
        ref={ref}
        className={`relative mx-auto max-w-6xl px-6 md:px-10 ${
          isVisible ? 'is-visible' : ''
        } reveal`}
      >

        {/* Heading */}
        <div className="mb-12 text-center">

          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#B68B3C]/50" />

            <span className="text-sm text-[#B68B3C]">✦</span>

            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#B68B3C]">
              Gatherings
            </p>

            <span className="text-sm text-[#B68B3C]">✦</span>

            <span className="h-px w-8 bg-[#B68B3C]/50" />
          </div>

          <h2 className="font-serif-display text-3xl font-medium text-[#2B2B2B] md:text-4xl">
            Upcoming
            <span className="text-[#7A2E2E]"> Events</span>
          </h2>

        </div>

        {/* 3D floating event cards */}
        <div className="grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {events.slice(0, 6).map((event, i) => {
            const dateParts = event.date.split(' ');

            return (
              <Link
                key={event.id}
                href="/events"
                className={`group reveal ${
                  isVisible ? 'is-visible' : ''
                } ${i === 1 || i === 4 ? 'lg:translate-y-10' : ''}`}
                style={{
                  transitionDelay: `${i * 0.1}s`,
                }}
              >

                <div className="relative mx-auto w-full max-w-[270px]">

                  {/* Floating shadow underneath */}
                  <div className="absolute inset-x-5 bottom-[-8px] h-8 rounded-full bg-[#7A2E2E]/10 blur-xl transition-all duration-500 group-hover:scale-90 group-hover:bg-[#7A2E2E]/15" />

                  {/* Main card */}
                  <div
                    className="relative h-[205px] overflow-hidden border border-white/80 bg-white/90 p-5 shadow-[0_18px_40px_rgba(43,43,43,0.08)] backdrop-blur-md transition-all duration-500 group-hover:-translate-y-3 group-hover:rotate-1 group-hover:shadow-[0_28px_55px_rgba(43,43,43,0.14)]"
                    style={{
                      borderRadius:
                        i % 2 === 0
                          ? '30px 12px 30px 12px'
                          : '12px 30px 12px 30px',
                    }}
                  >

                    {/* Decorative ring */}
                    <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full border-[10px] border-[#B68B3C]/5" />

                    {/* Small sparkle */}
                    <span className="absolute right-5 top-5 text-xs text-[#B68B3C]/50 transition-transform duration-500 group-hover:rotate-45">
                      ✦
                    </span>

                    {/* Date */}
                    <div className="relative z-10 flex items-center gap-4">

                      <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-2xl bg-[#F8E9E7] shadow-inner transition-transform duration-500 group-hover:scale-105">
                        <span className="text-[8px] font-semibold uppercase tracking-wider text-[#B68B3C]">
                          {dateParts[1] || 'Date'}
                        </span>

                        <span className="font-serif-display text-2xl leading-none text-[#7A2E2E]">
                          {dateParts[0]}
                        </span>
                      </div>

                      <span className="max-w-[110px] truncate rounded-full bg-[#F2F9FF] px-3 py-1 text-[8px] font-semibold uppercase tracking-wider text-[#7A2E2E]">
                        {event.type}
                      </span>

                    </div>

                    {/* Event name */}
                    <div className="relative z-10 mt-5">

                      <h3 className="line-clamp-2 font-serif-display text-lg font-medium leading-snug text-[#2B2B2B] transition-colors duration-300 group-hover:text-[#7A2E2E]">
                        {event.name}
                      </h3>

                      <div className="mt-3 flex items-center gap-1.5 text-[10px] text-[#2B2B2B]/45">
                        <MapPin className="h-3 w-3 text-[#B68B3C]" />
                        <span className="truncate">
                          {event.location}
                        </span>
                      </div>

                    </div>

                    {/* Tiny arrow */}
                    <div className="absolute bottom-4 right-5 flex h-7 w-7 items-center justify-center rounded-full bg-[#F2F9FF] transition-all duration-300 group-hover:bg-[#7A2E2E]">
                      <ArrowUpRight className="h-3.5 w-3.5 text-[#7A2E2E] transition-colors group-hover:text-white" />
                    </div>

                  </div>

                </div>

              </Link>
            );
          })}

        </div>

        {/* Only one simple CTA */}
        <div className="mt-14 text-center">

          <Link
            href="/events"
            className="group inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#7A2E2E]"
          >
            Explore All Events

            <span className="h-px w-7 bg-[#B68B3C] transition-all duration-300 group-hover:w-12" />

            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>

        </div>

      </div>
    </section>
  );
}