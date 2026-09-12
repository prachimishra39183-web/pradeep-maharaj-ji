'use client';

import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { videos } from '@/data/videos';
import { VideoCard } from '@/components/shared/VideoCard';

export function VideoSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  // Remove the old first video
  const visibleVideos = videos.filter((v) => v.id !== 'v1');

  // Use another video as the highlighted video
  const featured =
    visibleVideos.find((v) => v.id === 'v4') ?? visibleVideos[0];

  const others = visibleVideos
    .filter((v) => v.id !== featured?.id)
    .slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-transparent py-24 md:py-32">

      {/* Decorative background shapes */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#7A2E2E]/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-[#B68B3C]/8 blur-3xl" />

      <div
        ref={ref}
        className={`relative mx-auto max-w-7xl px-6 md:px-12 ${
          isVisible ? 'is-visible' : ''
        } reveal`}
      >

        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">

          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#B68B3C]" />

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B68B3C]">
              Wisdom & Devotion
            </p>

            <span className="h-px w-10 bg-[#B68B3C]" />
          </div>

         

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#2B2B2B]/60 md:text-base">
            Listen, reflect and discover timeless teachings through
            Kathas, discourses and moments of devotion.
          </p>
        </div>

        {/* Creative Featured Area */}
        {featured && (
          <div className="mb-14 flex justify-center">

            <div className="group relative w-full max-w-2xl">

              {/* Decorative circle behind card */}
              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full border border-[#B68B3C]/30" />

              {/* Main small video */}
              <div className="relative overflow-hidden rounded-[28px] border border-[#DCEAF5] bg-white p-3 shadow-[0_20px_60px_rgba(43,43,43,0.10)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(43,43,43,0.15)]">

                <div className="overflow-hidden rounded-[20px]">
                  <VideoCard video={featured} />
                </div>

              </div>

              {/* Floating label */}
              <div className="absolute -bottom-5 left-6 flex items-center gap-3 rounded-full bg-[#7A2E2E] px-5 py-3 shadow-xl">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                  <Play className="h-3.5 w-3.5 fill-white text-white" />
                </div>

                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                  Featured Katha
                </span>
              </div>

            </div>
          </div>
        )}

        {/* Video Cards */}
        <div className="grid gap-6 md:grid-cols-3">

          {others.map((video, i) => (
            <div
              key={video.id}
              className="group relative"
              style={{
                transform: i === 1 ? 'translateY(24px)' : undefined,
              }}
            >

              {/* Number */}
              <div className="absolute -left-2 -top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md">
                <span className="text-xs font-semibold text-[#7A2E2E]">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Card */}
              <div className="overflow-hidden rounded-2xl border border-[#DCEAF5] bg-white p-2 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
                <VideoCard video={video} />
              </div>

            </div>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-20 flex justify-center">

          <Link
            href="/videos"
            className="group inline-flex items-center gap-3 rounded-full border border-[#7A2E2E]/20 bg-white px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#7A2E2E] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#7A2E2E] hover:shadow-lg"
          >
            Explore All Videos

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

        </div>

      </div>
    </section>
  );
}