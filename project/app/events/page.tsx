'use client';

import { useState } from 'react';
import { Calendar, MapPin, ArrowUpRight, Sparkles } from 'lucide-react';
import { events, type Event } from '@/data/events';
import { cn } from '@/lib/utils';

export default function EventsPage() {
  const [view, setView] = useState<'grid' | 'timeline'>('grid');

  const featured = events[0];
  const remainingEvents = events.slice(1);

  return (
    <main className="overflow-hidden bg-transparent">

      {/* =========================================================
          HERO — SACRED CALENDAR
      ========================================================== */}
      <section className="relative min-h-[520px] overflow-hidden pt-32 md:pt-40">

        {/* Large atmospheric shapes */}
        <div className="absolute left-[-180px] top-[-100px] h-[430px] w-[430px] rounded-full bg-[#7A2E2E]/[0.06] blur-3xl" />

        <div className="absolute right-[-150px] top-20 h-[400px] w-[400px] rounded-full bg-[#B68B3C]/[0.08] blur-3xl" />

        {/* Sacred geometric pattern */}
        <div className="pointer-events-none absolute left-[8%] top-[25%] h-32 w-32 rotate-45 border border-[#B68B3C]/20">
          <div className="absolute inset-5 border border-[#7A2E2E]/10" />
        </div>

        <div className="pointer-events-none absolute right-[8%] top-[35%] h-44 w-44 rotate-12 border border-[#7A2E2E]/10">
          <div className="absolute inset-6 border border-[#B68B3C]/15" />
        </div>

        {/* Small floating diamonds */}
        <div className="absolute left-[18%] top-[48%] h-3 w-3 rotate-45 bg-[#B68B3C]/50" />
        <div className="absolute right-[22%] top-[55%] h-2 w-2 rotate-45 bg-[#7A2E2E]/40" />

        <div className="relative mx-auto max-w-7xl px-6 md:px-12">

          <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">

            {/* LEFT */}
            <div className="relative z-10">

              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-12 bg-[#B68B3C]" />
                <Sparkles className="h-4 w-4 text-[#B68B3C]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#B68B3C]">
                  Gatherings
                </span>
              </div>

              <h1 className="font-serif-display text-5xl font-medium leading-[1.05] text-[#2B2B2B] md:text-6xl lg:text-7xl">
                Moments
                <span className="block text-[#7A2E2E]">
                  That Gather Us
                </span>
              </h1>

              <p className="mt-7 max-w-md text-sm leading-7 text-[#2B2B2B]/55 md:text-base">
                Kathas, spiritual gatherings and moments of collective
                devotion — each carrying its own meaning.
              </p>

              <div className="mt-10 flex items-center gap-5">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className="h-8 w-8 rotate-45 border border-[#F2F9FF] bg-[#F8E9E7]"
                    />
                  ))}
                </div>

                <span className="text-[9px] uppercase tracking-[0.2em] text-[#2B2B2B]/40">
                  Upcoming spiritual gatherings
                </span>
              </div>
            </div>

            {/* FEATURED EVENT */}
            {featured && (
              <FeaturedEvent event={featured} />
            )}

          </div>
        </div>

        {/* Bottom transition */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F2F9FF] to-transparent" />
      </section>


      {/* =========================================================
          EVENT COLLECTION
      ========================================================== */}
      <section className="relative py-14 md:py-20">

        {/* giant background typography */}
        <div className="pointer-events-none absolute -top-5 left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-serif-display text-[100px] text-[#7A2E2E]/[0.025] md:text-[180px]">
          GATHER
        </div>

        <div className="relative mx-auto max-w-7xl px-6 md:px-12">

          {/* section header */}
          <div className="mb-12 flex flex-col justify-between gap-6 border-b border-[#DCEAF5] pb-7 md:flex-row md:items-end">

            <div>
              <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.3em] text-[#B68B3C]">
                The Calendar
              </p>

              <h2 className="font-serif-display text-3xl text-[#2B2B2B] md:text-4xl">
                Upcoming Gatherings
              </h2>
            </div>

            {/* View switch */}
            <div className="flex items-center gap-1 border border-[#DCEAF5] bg-white/60 p-1">
              <button
                onClick={() => setView('grid')}
                className={cn(
                  'px-4 py-2 text-[9px] font-semibold uppercase tracking-wider transition-all',
                  view === 'grid'
                    ? 'bg-[#7A2E2E] text-white'
                    : 'text-[#2B2B2B]/45 hover:text-[#7A2E2E]'
                )}
              >
                Collection
              </button>

              <button
                onClick={() => setView('timeline')}
                className={cn(
                  'px-4 py-2 text-[9px] font-semibold uppercase tracking-wider transition-all',
                  view === 'timeline'
                    ? 'bg-[#7A2E2E] text-white'
                    : 'text-[#2B2B2B]/45 hover:text-[#7A2E2E]'
                )}
              >
                Journey
              </button>
            </div>
          </div>


          {view === 'grid' ? (
            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {remainingEvents.map((event, index) => (
                <CreativeEventCard
                  key={event.id}
                  event={event}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <TimelineView />
          )}

        </div>
      </section>


      {/* =========================================================
          BOTTOM SACRED DIVIDER
      ========================================================== */}
      <section className="relative flex justify-center overflow-hidden pb-24 pt-12">

        <div className="absolute left-1/2 top-0 h-32 w-px bg-gradient-to-b from-[#B68B3C]/40 to-transparent" />

        <div className="relative flex h-20 w-20 items-center justify-center rotate-45 border border-[#B68B3C]/35 bg-white/60">
          <div className="-rotate-45 text-xl text-[#7A2E2E]">
            ✦
          </div>
        </div>

      </section>
    </main>
  );


  /* =============================================================
     TIMELINE
  ============================================================= */

  function TimelineView() {
    return (
      <div className="relative mx-auto max-w-4xl">

        <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#B68B3C]/40 to-transparent md:left-1/2 md:-translate-x-1/2" />

        <div className="space-y-14">
          {remainingEvents.map((event, index) => {

            const left = index % 2 === 0;

            return (
              <div
                key={event.id}
                className="relative grid md:grid-cols-2"
              >

                {/* diamond milestone */}
                <div className="absolute left-5 top-7 z-20 h-5 w-5 -translate-x-1/2 rotate-45 border border-[#B68B3C] bg-transparent md:left-1/2">
                  <div className="absolute inset-1.5 bg-[#7A2E2E]" />
                </div>

                <div
                  className={cn(
                    'ml-10 md:ml-0',
                    left
                      ? 'md:pr-16'
                      : 'md:col-start-2 md:pl-16'
                  )}
                >
                  <CreativeEventCard
                    event={event}
                    index={index}
                  />
                </div>

              </div>
            );
          })}
        </div>
      </div>
    );
  }
}


/* =============================================================
   FEATURED EVENT
============================================================= */

function FeaturedEvent({ event }: { event: Event }) {
  const [day, month] = event.date.split(' ');

  return (
    <div className="relative mx-auto w-full max-w-xl">

      {/* orbit */}
      <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full border border-[#B68B3C]/15" />
      <div className="absolute -right-4 -top-4 h-36 w-36 rounded-full border border-dashed border-[#7A2E2E]/10" />

      {/* floating label */}
      <div className="absolute -left-3 top-8 z-20 rotate-[-8deg] bg-[#7A2E2E] px-4 py-2 text-[8px] font-semibold uppercase tracking-[0.25em] text-white shadow-lg">
        Next Gathering
      </div>

      <div className="relative overflow-hidden bg-white/80 p-7 shadow-[0_30px_80px_rgba(43,43,43,0.10)] backdrop-blur-xl">

        {/* angled top */}
        <div
          className="absolute left-0 top-0 h-2 w-full bg-[#7A2E2E]"
          style={{
            clipPath: 'polygon(0 0, 75% 0, 70% 100%, 0 100%)',
          }}
        />

        <div className="flex items-center gap-7 pt-3">

          {/* giant date */}
          <div className="relative flex h-28 w-24 shrink-0 flex-col items-center justify-center bg-[#F8E9E7]">

            <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#B68B3C]">
              {month}
            </span>

            <span className="font-serif-display text-5xl leading-none text-[#7A2E2E]">
              {day}
            </span>

            <div className="mt-2 h-px w-8 bg-[#B68B3C]" />

            <div className="absolute -bottom-2 -right-2 h-5 w-5 rotate-45 bg-[#B68B3C]" />
          </div>

          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#B68B3C]">
              {event.type}
            </p>

            <h2 className="mt-3 font-serif-display text-2xl leading-tight text-[#2B2B2B] md:text-3xl">
              {event.name}
            </h2>

            <div className="mt-4 flex items-center gap-2 text-[10px] text-[#2B2B2B]/45">
              <MapPin className="h-3.5 w-3.5 text-[#B68B3C]" />
              {event.location}
            </div>
          </div>

        </div>

        <div className="mt-7 flex items-center justify-between border-t border-[#DCEAF5] pt-5">

          <span className="text-[8px] uppercase tracking-[0.2em] text-[#2B2B2B]/35">
            A moment to gather
          </span>

          <ArrowUpRight className="h-4 w-4 text-[#7A2E2E]" />

        </div>

      </div>
    </div>
  );
}


/* =============================================================
   CREATIVE EVENT CARD
============================================================= */

function CreativeEventCard({
  event,
  index,
}: {
  event: Event;
  index: number;
}) {
  const [day, month] = event.date.split(' ');

  return (
    <div
      className="group relative"
      style={{
        transform: index % 3 === 1 ? 'translateY(18px)' : undefined,
      }}
    >

      {/* floating background shape */}
      <div
        className="absolute inset-4 bg-[#7A2E2E]/[0.035] transition-all duration-500 group-hover:inset-1"
        style={{
          clipPath:
            index % 2 === 0
              ? 'polygon(10% 0, 100% 0, 90% 100%, 0 100%)'
              : 'polygon(0 10%, 90% 0, 100% 90%, 10% 100%)',
        }}
      />

     <div className="relative min-h-[210px] border border-[#CDBFAF]/60 bg-[#E8D9C7] p-5 backdrop-blur-md transition-all duration-500 group-hover:-translate-y-2 group-hover:bg-white group-hover:shadow-[0_25px_60px_rgba(43,43,43,0.09)]">

        {/* decorative vertical bar */}
        <div className="absolute bottom-5 left-0 top-5 w-1 bg-gradient-to-b from-[#7A2E2E] via-[#B68B3C] to-transparent" />

        <div className="flex items-start justify-between pl-3">

          <div>
            <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-[#B68B3C]">
              {event.type}
            </span>

            <h3 className="mt-3 max-w-[220px] font-serif-display text-xl leading-snug text-[#2B2B2B] transition-colors group-hover:text-[#7A2E2E]">
              {event.name}
            </h3>
          </div>

          {/* date */}
          <div className="text-right">

            <span className="block font-serif-display text-3xl leading-none text-[#7A2E2E]">
              {day}
            </span>

            <span className="text-[8px] font-semibold uppercase tracking-wider text-[#B68B3C]">
              {month}
            </span>

          </div>
        </div>

        <div className="mt-8 flex items-center gap-2 pl-3 text-[10px] text-[#2B2B2B]/45">
          <MapPin className="h-4 w-4 shrink-0 text-[#B68B3C]" />
          <span className="truncate">{event.location}</span>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-[#DCEAF5] pl-3 pt-3">

          <span className="text-[10px] uppercase tracking-[0.2em] text-[#2B2B2B]/140">
            {event.endDate ? 'Multi-day' : 'Upcoming'}
          </span>

          <div className="flex h-7 w-7 items-center justify-center border border-[#DCEAF5] transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#7A2E2E]">
            <ArrowUpRight className="h-3.5 w-3.5 text-[#7A2E2E] transition-colors group-hover:-rotate-45 group-hover:text-white" />
          </div>

        </div>

      </div>
    </div>
  );
}