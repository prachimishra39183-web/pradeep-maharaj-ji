'use client';

import { useMemo, useState } from 'react';
import { Calendar, MapPin, ArrowUpRight, Check, Clock } from 'lucide-react';
import { events } from '@/data/events';

export default function EventsPage() {
  const [view, setView] = useState<'upcoming' | 'journey'>('upcoming');
  

  const today = new Date();

  const completedEvents = useMemo(() => {
    return events.filter((event) => {
      const text = `${event.name} ${event.location}`.toLowerCase();

    return (
  event.date === '25–31 May' ||
  text.includes('namisharan') ||
  text.includes('naimisharan') ||
  text.includes('navi nagar') ||
  text.includes('jalandhar') ||
  text.includes('sitapur')
);
    });
  }, []);

const upcomingEvents = useMemo(() => {
  return events.filter((event) => {
    const text = `${event.name} ${event.location}`.toLowerCase();

    return !(
      event.date === '25–31 May' ||
      text.includes('namisharan') ||
      text.includes('naimisharan') ||
      text.includes('navi nagar') ||
      text.includes('jalandhar') ||
      text.includes('sitapur')
    );
  });
}, []);

  const displayedEvents =
    view === 'upcoming' ? upcomingEvents : completedEvents;

  return (
    <main className="min-h-screen bg-transparent text-[#2B2B2B]">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden px-6 pb-20 pt-32 md:px-12 md:pb-24 md:pt-40 lg:px-20">

        <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-[#B68B3C]/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-[#7A2E2E]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">

          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#B68B3C]">
            Gatherings • Kathas • Seva
          </p>

          <h1
            className="max-w-5xl font-serif-display text-5xl font-medium leading-[0.95] text-[#7A2E2E] md:text-7xl lg:text-8xl"
            style={{
              textShadow:
                '3px 3px 0 #D9C8AD, 6px 6px 0 rgba(122,46,46,0.08)',
            }}
          >
            Moments That
            <span className="block text-[#B68B3C]">
              Gather Us
            </span>
          </h1>

          <div className="mt-8 max-w-2xl border-l border-[#B68B3C]/40 pl-5">
            <p className="text-sm leading-7 text-[#2B2B2B]/60 md:text-base">
              A journey through spiritual gatherings, sacred Kathas and
              moments of devotion across different places.
            </p>
          </div>

          {/* Decorative date */}
          <div className="mt-10 flex items-center gap-4">
            <div className="h-px w-16 bg-[#B68B3C]/50" />
            <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#7A2E2E]/60">
              2026
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================
          VIEW SWITCH
      ========================================================= */}
      <section className="px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-6 border-y border-[#D9C8AD]/70 py-5 md:flex-row md:items-center">

            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#B68B3C]">
                Events
              </p>

              <h2 className="mt-1 font-serif-display text-2xl text-[#2B2B2B]">
                {view === 'upcoming'
                  ? 'Upcoming Gatherings'
                  : 'The Journey'}
              </h2>
            </div>

            <div className="flex rounded-full border border-[#D9C8AD] bg-[#F7F0E3]/70 p-1 backdrop-blur-sm">

              <button
                type="button"
                onClick={() => setView('upcoming')}
                className={`rounded-full px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] transition-all ${
                  view === 'upcoming'
                    ? 'bg-[#7A2E2E] text-white shadow-md'
                    : 'text-[#7A2E2E]/60 hover:text-[#7A2E2E]'
                }`}
              >
                Upcoming
              </button>

              <button
                type="button"
                onClick={() => setView('journey')}
                className={`rounded-full px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] transition-all ${
                  view === 'journey'
                    ? 'bg-[#7A2E2E] text-white shadow-md'
                    : 'text-[#7A2E2E]/60 hover:text-[#7A2E2E]'
                }`}
              >
                Journey
              </button>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          EVENTS
      ========================================================= */}
      <section className="px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <div className="mx-auto max-w-7xl">

          {displayedEvents.length === 0 ? (
            <div className="border border-[#D9C8AD]/60 bg-[#E8D9C7]/60 px-6 py-16 text-center">
              <p className="font-serif-display text-2xl text-[#7A2E2E]">
                No events to display.
              </p>
            </div>
          ) : (

            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

              {displayedEvents.map((event, index) => {

                const isCompleted = view === 'journey';

                return (
                  <article
                    key={event.id}
                    className="group relative"
                  >

                    {/* offset 3D layer */}
                    <div
                      className={`absolute inset-2 translate-x-2 translate-y-2 transition-transform duration-500 group-hover:translate-x-3 group-hover:translate-y-3 ${
                        index % 2 === 0
                          ? 'bg-[#7A2E2E]/8'
                          : 'bg-[#B68B3C]/10'
                      }`}
                    />

                    {/* card */}
                    <div className="relative overflow-hidden border border-[#D9C8AD]/70 bg-[#E8D9C7] p-6 shadow-[0_15px_45px_rgba(43,43,43,0.06)] transition-all duration-500 group-hover:-translate-y-2 group-hover:bg-white group-hover:shadow-[0_25px_60px_rgba(43,43,43,0.12)]">

                      {/* number */}
                      <div className="absolute right-5 top-5 font-serif-display text-5xl text-[#7A2E2E]/[0.08]">
                        {String(index + 1).padStart(2, '0')}
                      </div>

                      {/* status */}
                      <div className="relative z-10 flex items-center justify-between">

                        <div className="flex items-center gap-2">
                          {isCompleted ? (
                            <>
                              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#7A2E2E] text-white">
                                <Check className="h-3.5 w-3.5" />
                              </span>

                              <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#7A2E2E]">
                                Completed
                              </span>
                            </>
                          ) : (
                            <>
                              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#B68B3C]/40 text-[#B68B3C]">
                                <Clock className="h-3.5 w-3.5" />
                              </span>

                              <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#B68B3C]">
                                Upcoming
                              </span>
                            </>
                          )}
                        </div>

                        <ArrowUpRight className="h-4 w-4 text-[#7A2E2E]/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#7A2E2E]" />
                      </div>

                      {/* date */}
                      <div className="relative mt-8">

                        <div className="flex items-end gap-3">
                          <span className="font-serif-display text-5xl leading-none text-[#7A2E2E]">
                            {event.date.split(' ')[0]}
                          </span>

                          <span className="mb-1 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#B68B3C]">
                            {event.date.split(' ').slice(1).join(' ')}
                          </span>
                        </div>

                        <div className="mt-3 h-px w-16 bg-[#B68B3C]/40 transition-all duration-500 group-hover:w-24" />

                      </div>

                      {/* event type */}
                      <p className="relative mt-7 text-[8px] font-semibold uppercase tracking-[0.25em] text-[#B68B3C]">
                        {event.type}
                      </p>

                      {/* title */}
                      <h3 className="relative mt-3 max-w-[85%] font-serif-display text-2xl leading-tight text-[#2B2B2B]">
                        {event.name}
                      </h3>

                      {/* location */}
                      <div className="relative mt-6 flex items-start gap-2">

                        <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#7A2E2E]" />

                        <span className="text-[10px] leading-5 text-[#2B2B2B]/50">
                          {event.location}
                        </span>

                      </div>

                      {/* bottom */}
                      <div className="relative mt-8 border-t border-[#CDBFAF]/60 pt-4">

                        <div className="flex items-center justify-between">

                          <div className="flex items-center gap-2">
                            <Calendar className="h-3.5 w-3.5 text-[#B68B3C]" />

                            <span className="text-[9px] uppercase tracking-[0.15em] text-[#2B2B2B]/40">
                              {isCompleted
                                ? 'A chapter completed'
                                : 'Save the date'}
                            </span>
                          </div>

                          <span className="text-[9px] font-medium text-[#7A2E2E]/40">
                            {event.date}
                          </span>

                        </div>

                      </div>

                    </div>
                  </article>
                );
              })}

            </div>
          )}

        </div>
      </section>

      {/* =========================================================
          JOURNEY STRIP
      ========================================================= */}
      <section className="relative overflow-hidden border-y border-[#D9C8AD]/60 bg-[#F4EBDD]/70 px-6 py-20 md:px-12 lg:px-20">

        <div className="pointer-events-none absolute right-[-50px] top-1/2 -translate-y-1/2 font-serif-display text-[180px] leading-none text-[#7A2E2E]/[0.025] md:text-[280px]">
          यात्रा
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[0.7fr_1.3fr]">

          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#B68B3C]">
              The Journey
            </p>

            <h2
              className="mt-3 font-serif-display text-4xl text-[#7A2E2E] md:text-5xl"
              style={{
                textShadow: '2px 2px 0 #D9C8AD',
              }}
            >
              Every gathering
              <span className="block text-[#2B2B2B]">
                becomes a memory.
              </span>
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            <JourneyStat
              number={completedEvents.length}
              label="Gatherings completed"
            />

            <JourneyStat
              number="04"
              label="Recent locations"
            />

            <JourneyStat
              number="2026"
              label="Year of the journey"
            />

            <JourneyStat
              number="∞"
              label="Moments of seva"
            />

          </div>

        </div>
      </section>

      {/* =========================================================
          BOTTOM CTA
      ========================================================= */}
      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">

          <div className="relative overflow-hidden border border-[#D9C8AD] bg-[#7A2E2E] px-7 py-14 text-center md:px-16 md:py-20">

            <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full border border-white/10" />

            <p className="relative text-[9px] font-semibold uppercase tracking-[0.35em] text-[#E5C982]">
              Walk the path
            </p>

            <h2 className="relative mt-4 font-serif-display text-4xl text-white md:text-6xl">
              Join a sacred gathering.
            </h2>

            <p className="relative mx-auto mt-5 max-w-xl text-sm leading-7 text-white/60">
              Every Katha is an opportunity to listen, learn, reflect and
              come together in devotion.
            </p>

            <a
              href="/contact"
              className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-[#F4EBDD] px-7 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7A2E2E] transition-all duration-300 hover:bg-white hover:shadow-xl"
            >
              Connect With Us
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>

          </div>
        </div>
      </section>

    </main>
  );
}

/* =========================================================
   JOURNEY STAT
========================================================= */

function JourneyStat({
  number,
  label,
}: {
  number: string | number;
  label: string;
}) {
  return (
    <div className="group border-l border-[#D9C8AD] pl-5 transition-transform duration-300 hover:translate-x-1">

      <div
        className="font-serif-display text-4xl text-[#7A2E2E]"
        style={{
          textShadow: '2px 2px 0 #D9C8AD',
        }}
      >
        {number}
      </div>

      <p className="mt-2 max-w-[120px] text-[9px] uppercase leading-4 tracking-[0.15em] text-[#2B2B2B]/45">
        {label}
      </p>

    </div>
  );
}