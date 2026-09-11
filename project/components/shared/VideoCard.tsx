'use client';

import { Play, Calendar, MapPin } from 'lucide-react';
import type { Video } from '@/data/videos';

type VideoCardProps = {
  video: Video;
  onClick?: (video: Video) => void;
};

export function VideoCard({ video, onClick }: VideoCardProps) {
  return (
    <button
      onClick={() => onClick?.(video)}
      className="group block w-full text-left"
    >
      <div className="zoom-container relative aspect-video overflow-hidden rounded-sm shadow-sm">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={video.thumbnail}
          alt={video.title}
          className="zoom-image h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ivory/90 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-ivory">
            <Play className="h-5 w-5 fill-maroon text-maroon" />
          </div>
        </div>
        <span className="absolute top-3 left-3 rounded-full bg-saffron/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-ivory">
          {video.category}
        </span>
      </div>
      <h3 className="mt-3 font-serif-display text-lg font-medium text-charcoal transition-colors group-hover:text-maroon">
        {video.title}
      </h3>
      <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
        <span className="flex items-center gap-1">
          <Calendar className="h-3 w-3" />
          {video.date}
        </span>
        <span className="flex items-center gap-1">
          <MapPin className="h-3 w-3" />
          {video.location}
        </span>
      </div>
    </button>
  );
}
