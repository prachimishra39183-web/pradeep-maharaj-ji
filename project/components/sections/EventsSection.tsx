'use client';

import Link from 'next/link';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { events } from '@/data/events';
import { SectionHeading } from '@/components/shared/SectionHeading';

export function EventsSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="section-padding bg-cream">
      <SectionHeading label="Upcoming Events" title="Upcoming Events" />

      <div ref={ref} className="container-max mt-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.slice(0, 6).map((event, i) => (
            <div
              key={event.id}
              className={`reveal ${isVisible ? 'is-visible' : ''} group flex flex-col rounded-sm border border-beige/50 bg-ivory p-6 transition-all duration-300 hover:shadow-lg`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {/* Date badge */}
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-14 w-14 flex-col items-center justify-center rounded-sm bg-maroon text-ivory">
                  <span className="text-[10px] uppercase tracking-wider text-ivory/70">
                    {event.endDate ? 'Multi' : 'Date'}
                  </span>
                  <span className="text-xs font-bold leading-tight">{event.date.split(' ')[0]}</span>
                  <span className="text-[9px] uppercase text-ivory/70">{event.date.split(' ')[1]}</span>
                </div>
                <div>
                  <span className="rounded-full bg-saffron/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-saffron">
                    {event.type}
                  </span>
                </div>
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
                  <span>
                    {event.date} – {event.endDate}
                  </span>
                </div>
              )}

              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                {event.description}
              </p>

              <Link
                href="/events"
                className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-maroon transition-colors hover:text-saffron"
              >
                View Details
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/events"
            className="group inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-maroon transition-colors hover:text-saffron"
          >
            View All Events
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
