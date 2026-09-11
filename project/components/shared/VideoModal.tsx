'use client';

import { useEffect } from 'react';
import { X, ExternalLink, Calendar, MapPin } from 'lucide-react';
import type { Video } from '@/data/videos';

type VideoModalProps = {
  video: Video | null;
  onClose: () => void;
};

export function VideoModal({ video, onClose }: VideoModalProps) {
  useEffect(() => {
    if (video) {
      document.body.style.overflow = 'hidden';
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleEsc);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleEsc);
      };
    }
  }, [video, onClose]);

  if (!video) return null;

  const hasEmbed = video.videoId || video.youtubeUrl;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-charcoal/80 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      <div className="relative z-10 w-full max-w-3xl animate-scale-in">
        <div className="rounded-sm bg-ivory shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-beige/50 px-6 py-4">
            <span className="rounded-full bg-saffron/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-saffron">
              {video.category}
            </span>
            <button
              onClick={onClose}
              className="text-charcoal/60 transition-colors hover:text-charcoal"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Video / Thumbnail */}
          <div className="aspect-video w-full overflow-hidden">
            {hasEmbed ? (
              <iframe
                src={`https://www.youtube.com/embed/${video.videoId || video.youtubeUrl.split('v=')[1] || ''}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            ) : (
              <div className="relative h-full w-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-charcoal/40">
                  <p className="text-sm text-ivory/80">Video URL to be added</p>
                </div>
              </div>
            )}
          </div>

          {/* Details */}
          <div className="p-6">
            <h3 className="font-serif-display text-xl font-medium text-charcoal">
              {video.title}
            </h3>
            <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                {video.date}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" />
                {video.location}
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {video.description}
            </p>
            {hasEmbed && (
              <a
                href={video.youtubeUrl || `https://www.youtube.com/watch?v=${video.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-maroon transition-colors hover:text-saffron"
              >
                Watch on YouTube
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
