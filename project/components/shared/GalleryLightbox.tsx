'use client';

import { useEffect, useState, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryImage } from '@/data/gallery';

type GalleryLightboxProps = {
  images: GalleryImage[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export function GalleryLightbox({ images, index, onClose, onNavigate }: GalleryLightboxProps) {
  const isOpen = index !== null;

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && index !== null && index > 0) onNavigate(index - 1);
      if (e.key === 'ArrowRight' && index !== null && index < images.length - 1) onNavigate(index + 1);
    },
    [isOpen, index, images.length, onClose, onNavigate]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKey);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKey);
      };
    }
  }, [isOpen, handleKey]);

  if (!isOpen || index === null) return null;

  const image = images[index];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-charcoal/90 backdrop-blur-sm animate-fade-in" onClick={onClose} />

      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-20 text-ivory/70 transition-colors hover:text-ivory"
        aria-label="Close"
      >
        <X className="h-7 w-7" />
      </button>

      {index > 0 && (
        <button
          onClick={() => onNavigate(index - 1)}
          className="absolute left-4 top-1/2 z-20 -translate-y-1/2 text-ivory/70 transition-colors hover:text-ivory md:left-8"
          aria-label="Previous"
        >
          <ChevronLeft className="h-8 w-8" />
        </button>
      )}

      {index < images.length - 1 && (
        <button
          onClick={() => onNavigate(index + 1)}
          className="absolute right-4 top-1/2 z-20 -translate-y-1/2 text-ivory/70 transition-colors hover:text-ivory md:right-8"
          aria-label="Next"
        >
          <ChevronRight className="h-8 w-8" />
        </button>
      )}

      <div className="relative z-10 max-h-[85vh] max-w-4xl animate-scale-in">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image.src}
          alt={image.alt}
          className="max-h-[75vh] w-auto rounded-sm object-contain"
        />
        <p className="mt-4 text-center font-serif-display text-lg font-light text-ivory/80">
          {image.caption}
        </p>
      </div>
    </div>
  );
}
