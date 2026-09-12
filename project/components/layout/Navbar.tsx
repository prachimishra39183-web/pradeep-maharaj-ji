'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Play } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { useScrolled } from '@/hooks/use-scrolled';
import { Logo } from './Logo';
import { cn } from '@/lib/utils';

export function Navbar() {
  const scrolled = useScrolled(20);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <>
      <header
       className={cn(
  'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
  'bg-[#F7F0E3]/85 backdrop-blur-md border-b border-[#B68B3C]/20 shadow-[0_4px_20px_rgba(122,46,46,0.06)]'
)}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
          <Link href="/" aria-label="Home">
            <Logo size={scrolled ? 45: 49} />
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-7 lg:flex">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  'group relative text-[13px] font-medium uppercase tracking-wider transition-colors duration-300',
                  scrolled || !isHome
                    ? 'text-maroon'
                    : 'text-maroon'
                )}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-saffron transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <Link
              href="/videos"
              className={cn(
                'flex items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-medium uppercase tracking-wider transition-all duration-300',
                scrolled || !isHome
                  ? 'bg-maroon text-ivory hover:bg-maroon/90'
                  : 'bg-transparent/15 text-ivory backdrop-blur-sm border border-ivory/30 hover:bg-transparent/25'
              )}
            >
              <Play className="h-3.5 w-3.5 fill-current" />
              Watch Katha
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn(
              'lg:hidden transition-colors',
              scrolled || !isHome ? 'text-charcoal' : 'text-ivory'
            )}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-[80%] max-w-sm bg-transparent shadow-2xl animate-fade-in">
            <div className="flex items-center justify-between px-6 py-5 border-b border-beige/50">
              <Logo size={36} />
              <button
                onClick={() => setMobileOpen(false)}
                className="text-charcoal"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex flex-col px-6 py-4">
              {siteConfig.navigation.map((item, i) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-beige/30 py-3.5 text-sm font-medium uppercase tracking-wider text-charcoal/80 transition-colors hover:text-maroon"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/videos"
                onClick={() => setMobileOpen(false)}
                className="mt-6 flex items-center justify-center gap-2 rounded-full bg-maroon px-5 py-3 text-sm font-medium uppercase tracking-wider text-ivory"
              >
                <Play className="h-4 w-4 fill-current" />
                Watch Katha
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
