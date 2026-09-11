import { siteImages } from '@/data/images';

export function Logo({ className = '', size = 40 }: { className?: string; size?: number }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div
        className="relative flex shrink-0 items-center justify-center overflow-hidden rounded-full border border-saffron/50 bg-ivory shadow-sm"
        style={{ width: size, height: size }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={siteImages.logo.src}
          alt={siteImages.logo.alt}
          className="h-full w-full object-cover"
        />
      </div>
      
    </div>
  );
}
