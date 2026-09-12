'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
} from 'lucide-react';

import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import {
  galleryImages,
  galleryCategories,
} from '@/data/gallery';

import type {
  GalleryCategory,
  GalleryImage,
} from '@/data/gallery';

import { SectionHeading } from '@/components/shared/SectionHeading';

export function GallerySection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  const [activeCategory, setActiveCategory] =
    useState<'All' | GalleryCategory>('All');

  const [selectedImage, setSelectedImage] =
    useState<GalleryImage | null>(null);

  const filteredImages =
    activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter(
          (image) => image.category === activeCategory
        );

  const previewImages = filteredImages.slice(0, 9);

  const selectedIndex = selectedImage
    ? filteredImages.findIndex(
        (image) => image.id === selectedImage.id
      )
    : -1;

  const showPrevious = () => {
    if (selectedIndex === -1 || filteredImages.length === 0) return;

    const previousIndex =
      selectedIndex === 0
        ? filteredImages.length - 1
        : selectedIndex - 1;

    setSelectedImage(filteredImages[previousIndex]);
  };

  const showNext = () => {
    if (selectedIndex === -1 || filteredImages.length === 0) return;

    const nextIndex =
      selectedIndex === filteredImages.length - 1
        ? 0
        : selectedIndex + 1;

    setSelectedImage(filteredImages[nextIndex]);
  };

  return (
    <>
      <section
        id="gallery"
        className="section-padding bg-transparent"
      >
        <SectionHeading
          label="The Gallery"
          title="Moments of Seva & Spirituality"
        />

        <div
          ref={ref}
          className={`container-max mt-14 ${
            isVisible ? 'is-visible' : ''
          } reveal`}
        >
          {/* Category Filters */}
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {galleryCategories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full border px-5 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition-all duration-300 ${
                    isActive
                      ? 'border-maroon bg-maroon text-white shadow-md'
                      : 'border-[#C9DCEB] bg-white text-maroon hover:border-maroon hover:bg-maroon hover:text-white'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Empty State */}
          {previewImages.length === 0 && (
            <div className="rounded-3xl border border-[#DCEAF5] bg-white px-6 py-20 text-center">
              <p className="font-serif-display text-2xl text-maroon">
                No photographs yet
              </p>

              <p className="mt-3 text-sm text-charcoal/60">
                Photographs from this category will appear here.
              </p>
            </div>
          )}

          {/* Creative Gallery */}
          {previewImages.length > 0 && (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[180px]">
              {previewImages.map((image, index) => {
                /*
                  Large featured image
                */
                if (index === 0) {
                  return (
                    <button
                      key={image.id}
                      type="button"
                      onClick={() => setSelectedImage(image)}
                      className="group relative min-h-[300px] overflow-hidden rounded-3xl text-left md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-1"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                      {/* Featured Label */}
                      <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-maroon backdrop-blur-sm">
                        Featured Moment
                      </div>

                      {/* Expand Icon */}
                      <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-maroon opacity-0 shadow-md transition-all duration-300 group-hover:opacity-100">
                        <Maximize2 className="h-4 w-4" />
                      </div>

                      {/* Caption */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F2D6A2]">
                          {image.category}
                        </p>

                        <h3 className="font-serif-display text-2xl font-medium text-white">
                          {image.caption}
                        </h3>
                      </div>
                    </button>
                  );
                }

                /*
                  Medium cards
                */
                if (index === 1 || index === 4) {
                  return (
                    <button
                      key={image.id}
                      type="button"
                      onClick={() => setSelectedImage(image)}
                      className="group relative min-h-[220px] overflow-hidden rounded-3xl text-left lg:col-span-2 lg:row-span-1"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-80" />

                      <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-maroon opacity-0 transition-all duration-300 group-hover:opacity-100">
                        <Maximize2 className="h-4 w-4" />
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#F2D6A2]">
                          {image.category}
                        </p>

                        <p className="mt-1 font-serif-display text-lg text-white">
                          {image.caption}
                        </p>
                      </div>
                    </button>
                  );
                }

                /*
                  Small masonry cards
                */
                return (
                  <button
                    key={image.id}
                    type="button"
                    onClick={() => setSelectedImage(image)}
                    className={`group relative min-h-[220px] overflow-hidden rounded-3xl text-left ${
                      index === 2 || index === 5
                        ? 'lg:row-span-2'
                        : 'lg:row-span-1'
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />

                    <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-maroon opacity-0 transition-all duration-300 group-hover:opacity-100">
                      <Maximize2 className="h-4 w-4" />
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#F2D6A2]">
                        {image.category}
                      </p>

                      <p className="mt-1 font-serif-display text-base text-white">
                        {image.caption}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {/* View Full Gallery */}
          <div className="mt-12 text-center">
            <Link
              href="/gallery1"
              className="group inline-flex items-center gap-3 rounded-full border border-maroon bg-white px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] text-maroon transition-all duration-300 hover:bg-maroon hover:text-white hover:shadow-lg"
            >
              View Full Gallery

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close */}
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white text-maroon shadow-lg transition-transform hover:scale-105"
            aria-label="Close gallery"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Previous */}
          {filteredImages.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              className="absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-maroon shadow-lg transition-transform hover:scale-105 md:left-8"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}

          {/* Image */}
          <div
            className="relative h-[75vh] w-full max-w-5xl overflow-hidden rounded-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />

            {/* Bottom information */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-6 pb-6 pt-16">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F2D6A2]">
                {selectedImage.category}
              </p>

              <h3 className="mt-1 font-serif-display text-xl text-white">
                {selectedImage.caption}
              </h3>
            </div>
          </div>

          {/* Next */}
          {filteredImages.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              className="absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-maroon shadow-lg transition-transform hover:scale-105 md:right-8"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}

          {/* Counter */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-maroon">
            {selectedIndex + 1} / {filteredImages.length}
          </div>
        </div>
      )}
    </>
  );
}