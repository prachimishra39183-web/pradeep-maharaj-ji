'use client';

import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { videos, videoCategories, type Video, type VideoCategory } from '@/data/videos';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { VideoCard } from '@/components/shared/VideoCard';
import { VideoModal } from '@/components/shared/VideoModal';
import { cn } from '@/lib/utils';

type FilterCategory = 'All' | VideoCategory;

export default function VideosPage() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const filtered = useMemo(() => {
    return videos.filter((v) => {
      const matchesCategory = activeCategory === 'All' || v.category === activeCategory;
      const matchesSearch =
        searchQuery === '' ||
        v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.location.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <>
      {/* Page header */}
    

      {/* Controls */}
      <div className="sticky top-[72px] z-30 bg-transparent/95 backdrop-blur-md border-b border-beige/40">
        <div className="container-max px-6 py-4 md:px-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {videoCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    'rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-wider transition-all duration-300',
                    activeCategory === cat
                      ? 'bg-maroon text-ivory'
                      : 'border border-beige/60 text-muted-foreground hover:border-saffron hover:text-charcoal'
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search */}
       <div className="relative md:w-64">
  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7A2E2E]/60" />

  <input
    type="text"
    placeholder="Search videos..."
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    className="w-full rounded-full border border-[#B68B3C]/40 bg-[#F7F0E3]/180 py-2 pl-10 pr-4 text-sm text-[#2B2B2B] placeholder:text-[#2B2B2B]/45 outline-none backdrop-blur-sm transition-colors focus:border-[#7A2E2E]"
  />
</div>
          </div>
        </div>
      </div>

      {/* Video grid */}
      <div className="section-padding bg-transparent">
        <div className="container-max">
          {filtered.length === 0 ? (
            <p className="py-20 text-center text-muted-foreground">
              No videos found. Try a different search or category.
            </p>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((video) => (
                <VideoCard
                  key={video.id}
                  video={video}
                  onClick={(v) => setSelectedVideo(v)}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />
    </>
  );
}
