'use client';

import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { SectionHeading } from '@/components/shared/SectionHeading';
import {
  GraduationCap,
  Sparkles,
  HeartHandshake,
  Users,
  CalendarHeart,
  Sprout,
} from 'lucide-react';

const sevaItems = [
  {
    icon: GraduationCap,
    title: 'Education',
    description: '[Add description of educational seva initiatives here.]',
  },
  {
    icon: Sparkles,
    title: 'Spiritual Awareness',
    description: '[Add description of spiritual awareness programs here.]',
  },
  {
    icon: HeartHandshake,
    title: 'Gurukul Seva',
    description: '[Add description of Gurukul service activities here.]',
  },
  {
    icon: Users,
    title: 'Community Service',
    description: '[Add description of community service initiatives here.]',
  },
  {
    icon: CalendarHeart,
    title: 'Religious Events',
    description: '[Add description of religious event organization here.]',
  },
  {
    icon: Sprout,
    title: 'Youth Development',
    description: '[Add description of youth development programs here.]',
  },
];

export function SevaSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="seva" className="section-padding bg-transparent">
      <SectionHeading
        label="Seva"
        title="Seva"
        subtitle="Seva as a path of compassion, responsibility and devotion."
      />

      <div ref={ref} className="container-max mt-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sevaItems.map((item, i) => (
            <div
              key={item.title}
              className={`reveal ${isVisible ? 'is-visible' : ''} group rounded-sm border border-beige/40 bg-transparent/30 p-8 transition-all duration-300 hover:border-saffron/30 hover:bg-transparent hover:shadow-md`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-saffron/10 transition-colors duration-300 group-hover:bg-saffron/20">
                <item.icon className="h-5 w-5 text-saffron" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif-display text-xl font-medium text-charcoal">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
