'use client';

import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { cn } from '@/lib/utils';

type SectionHeadingProps = {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
};

export function SectionHeading({
  label,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
}: SectionHeadingProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn(
        'reveal',
        isVisible && 'is-visible',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        'max-w-3xl',
        className
      )}
    >
      {label && (
        <p
          className={cn(
            'mb-4 text-xs font-semibold uppercase tracking-[0.25em]',
            light ? 'text-saffron' : 'text-saffron'
          )}
        >
          {label}
        </p>
      )}
      <h2
        className={cn(
          'font-serif-display text-display-md font-medium',
          light ? 'text-ivory' : 'text-charcoal'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-5 text-base leading-relaxed md:text-lg',
            light ? 'text-ivory/70' : 'text-muted-foreground'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
