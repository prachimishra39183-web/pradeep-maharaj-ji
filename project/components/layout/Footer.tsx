import Link from 'next/link';
import { Instagram, Facebook, Youtube } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-20">
        <div className="grid gap-12 md:grid-cols-3 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Logo size={47} />
            </div>

            
            <p className="max-w-md text-sm leading-relaxed text-ivory/60">
              {siteConfig.footerDescription}
            </p>

            {/* Social Media */}
            <div className="mt-6 flex gap-4">

              {/* Instagram */}
              <a
                
                href="https://www.instagram.com/pradeep_maharajji?stkn=ZTgwM2l0enJzZXN4"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F2F9FF] border border-[#D6E4EE] shadow-sm transition-all duration-300 hover:bg-white hover:border-[#D6E4EE] hover:shadow-md"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4 text-maroon" />
              </a>

              {/* Facebook */}
              <a
                  href="https://www.facebook.com/share/18Jn7q5dkX/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F2F9FF] border border-[#D6E4EE] shadow-sm transition-all duration-300 hover:bg-white hover:border-[#D6E4EE] hover:shadow-md"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4 text-maroon" />
              </a>

              {/* YouTube */}
              <a
               href="https://youtube.com/@pradeep_maharajji?si=Vq2QWsPJ6TCmOVv0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F2F9FF] border border-[#D6E4EE] shadow-sm transition-all duration-300 hover:bg-white hover:border-[#D6E4EE] hover:shadow-md"
                aria-label="YouTube"
              >
                <Youtube className="h-4 w-4 text-maroon" />
              </a>

            </div>
          </div>

          {/* Links */}
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-saffron">
              Explore
            </p>

            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {siteConfig.navigation.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-ivory/60 transition-colors duration-300 hover:text-ivory"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
         

        </div>

        {/* Copyright */}
        <div className="mt-14 border-t border-ivory/10 pt-6">
          <p className="text-center text-xs text-ivory/40">
            {siteConfig.copyright}
          </p>
        </div>

      </div>
    </footer>
  );
}