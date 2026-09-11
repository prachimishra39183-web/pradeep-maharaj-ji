'use client';

import { useState } from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { events, type Event } from '@/data/events';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { cn } from '@/lib/utils';

export default function EventsPage() {
  const [view, setView] = useState<'grid' | 'timeline'>('grid');

  return (
    <>
      {/* Page Header */}
      <div className="bg-cream pb-10 pt-32 md:pt-40">
        <SectionHeading
          label="Events"
          title="Spiritual Gatherings"
        />

        <p className="mx-auto mt-4 max-w-2xl px-6 text-center text-sm leading-6 text-muted-foreground">
          Join us for Kathas, discourses and spiritual gatherings.
        </p>
      </div>

      {/* View toggle */}
      <div className="sticky top-[72px] z-30 bg-ivory/95 backdrop-blur-md border-b border-beige/40">
        <div className="container-max px-6 py-4 md:px-12">
          <div className="flex gap-2">
            <button
              onClick={() => setView('grid')}
              className={cn(
                'rounded-full px-5 py-2 text-xs font-medium uppercase tracking-wider transition-all duration-300',
                view === 'grid' ? 'bg-maroon text-ivory' : 'border border-beige/60 text-muted-foreground hover:text-charcoal'
              )}
            >
              Grid View
            </button>
            <button
              onClick={() => setView('timeline')}
              className={cn(
                'rounded-full px-5 py-2 text-xs font-medium uppercase tracking-wider transition-all duration-300',
                view === 'timeline' ? 'bg-maroon text-ivory' : 'border border-beige/60 text-muted-foreground hover:text-charcoal'
              )}
            >
              Timeline View
            </button>
          </div>
        </div>
      </div>

      <div className="section-padding bg-ivory">
        <div className="container-max">
          {view === 'grid' ? <GridView /> : <TimelineView />}
        </div>
      </div>
    </>
  );

  function GridView() {
    return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event, i) => (
          <EventCard key={event.id} event={event} index={i} />
        ))}
      </div>
    );
  }

  function TimelineView() {
    return (
      <div className="relative">
        <div className="absolute left-[20px] top-0 h-full w-px bg-beige md:left-1/2 md:-translate-x-1/2" />
        <div className="space-y-12">
          {events.map((event, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div
                key={event.id}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-saffron bg-ivory md:absolute md:left-1/2 md:-translate-x-1/2">
                  <Calendar className="h-4 w-4 text-saffron" />
                </div>
                <div className={`flex-1 md:w-1/2 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                  <EventCard event={event} index={0} flat />
                </div>
                <div className="hidden md:block md:w-1/2" />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

function EventCard({ event, index, flat = false }: { event: Event; index: number; flat?: boolean }) {
  return (
    <div
      className={`group flex flex-col ${flat ? '' : 'rounded-sm border border-beige/50 bg-[#F8DCDC] p-6 transition-all duration-300 hover:shadow-lg'}`}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-14 w-14 flex-col items-center justify-center rounded-sm bg-maroon text-ivory">
          <span className="text-[10px] uppercase tracking-wider text-ivory/70">Date</span>
          <span className="text-xs font-bold leading-tight">{event.date.split(' ')[0]}</span>
          <span className="text-[9px] uppercase text-ivory/70">{event.date.split(' ')[1]}</span>
        </div>
        <span className="rounded-full bg-saffron/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-saffron">
          {event.type}
        </span>
      </div>
      <h3 className="font-serif-display text-xl font-medium text-charcoal transition-colors group-hover:text-maroon">
        {event.name}
      </h3>
      <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
        <MapPin className="h-4 w-4 text-saffron" />
        <span>{event.location}</span>
      </div>
      {event.endDate && (
        <div className="mt-1.5 flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4 text-saffron" />
          <span>{event.date} – {event.endDate}</span>
        </div>
      )}
      
      <button className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-maroon transition-colors hover:text-saffron">
        View Details
        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </div>
  );
}
