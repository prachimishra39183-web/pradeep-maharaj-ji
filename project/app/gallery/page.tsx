'use client';

import { useState, useMemo } from 'react';
import { galleryImages, galleryCategories, type GalleryCategory } from '@/data/gallery';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { GalleryLightbox } from '@/components/shared/GalleryLightbox';
import { cn } from '@/lib/utils';

type FilterCategory = 'All' | GalleryCategory;

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return galleryImages;
    return galleryImages.filter((img) => img.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <div className="bg-transparent pb-8 pt-32 md:pt-40">
        <SectionHeading label="Gallery" title="The Gallery" subtitle="A visual journey through Katha, Gurukul, seva and spiritual life." />
      </div>

      {/* Category filter */}
      <div className="sticky top-[72px] z-30 bg-transparent/95 backdrop-blur-md border-b border-beige/40">
        <div className="container-max px-6 py-4 md:px-12">
          <div className="flex flex-wrap gap-2">
            {galleryCategories.map((cat) => (
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
        </div>
      </div>

      {/* Masonry grid */}
      <div className="section-padding bg-transparent">
        <div className="container-wide">
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
            {filtered.map((img, i) => (
              <button
                key={img.id}
                onClick={() => setLightboxIndex(i)}
                className="zoom-container group relative mb-4 block w-full overflow-hidden rounded-sm"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.alt}
                  className="zoom-image w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="font-serif-display text-sm font-medium text-ivory">
                    {img.caption}
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-wider text-ivory/60">
                    {img.category}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <GalleryLightbox
        images={filtered}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </>
  );
}
