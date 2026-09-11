'use client';

import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';
import type { Article } from '@/data/articles';

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link href={`/articles/${article.id}`} className="group block">
      <div className="zoom-container aspect-[16/10] overflow-hidden rounded-sm shadow-sm">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={article.image}
          alt={article.title}
          className="zoom-image h-full w-full object-cover"
        />
      </div>
      <span className="mt-4 inline-block rounded-full bg-saffron/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-saffron">
        {article.category}
      </span>
      <h3 className="mt-3 font-serif-display text-xl font-medium text-charcoal transition-colors group-hover:text-maroon">
        {article.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
        {article.description}
      </p>
      <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
        <Calendar className="h-3 w-3" />
        <span>{article.date}</span>
      </div>
    </Link>
  );
}
