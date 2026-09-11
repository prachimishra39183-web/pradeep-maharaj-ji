'use client';

import Link from 'next/link';
import { Play, Calendar, MapPin, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { videos } from '@/data/videos';
import { events } from '@/data/events';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { VideoCard } from '@/components/shared/VideoCard';

export function VideoSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const featured = videos.find((v) => v.featured) ?? videos[0];
  const others = videos.filter((v) => v.id !== featured.id).slice(0, 3);

  return (
    <section className="section-padding bg-ivory">
      <SectionHeading
        label="Katha & Spiritual Discourses"
        
        
      />

      <div ref={ref} className={`container-max mt-16 ${isVisible ? 'is-visible' : ''} reveal`}>
        {/* Featured video */}
       

        {/* Grid of other videos */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {others.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/videos"
            className="group inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-maroon transition-colors hover:text-saffron"
          >
            View All Videos
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
