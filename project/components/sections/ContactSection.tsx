'use client';

import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { siteConfig } from '@/data/site';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { ContactForm } from '@/components/shared/ContactForm';
import {
  Instagram,
  Facebook,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from 'lucide-react';

export function ContactSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="contact"
      className="section-padding bg-[#F2F9FF]"
    >
      <SectionHeading
        label="Connect With Us"
        title="Connect With Us"
      />

      <div
        ref={ref}
        className={`container-max mt-14 ${
          isVisible ? 'is-visible' : ''
        } reveal`}
      >
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

          {/* LEFT — Contact information */}
          <div className="flex flex-col justify-center">

            

            <p className="mt-5 max-w-lg text-[15px] leading-7 text-charcoal/70">
              {siteConfig.footerDescription}
            </p>

            {/* Contact details */}
            <div className="mt-9 space-y-6">

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-maroon/10">
                  <MapPin className="h-4 w-4 text-maroon" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-maroon">
                    Lakhimpur Kheri,Uttar Pradesh,India
              </p>
                 
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-maroon/10">
                  <Phone className="h-4 w-4 text-maroon" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-maroon">
                    7784901600/7084901600
                  </p>
                
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-maroon/10">
                  <Mail className="h-4 w-4 text-maroon" />
                </div>

                <div>
                  <p className="text-xs font-semibold lowercase tracking-[0.15em] text-maroon">
                    pradeepmishra7784@gmail.com
                  </p>
                  
                </div>
              </div>

            </div>

            {/* Social links */}
            <div className="mt-9 flex gap-3">

              <a
                href="https://www.instagram.com/pradeep_maharajji?stkn=ZTgwM2l0enJzZXN4"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#D6E4EE] bg-white shadow-sm transition-all duration-300 hover:bg-[#F8FBFD] hover:shadow-md"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4 text-maroon" />
              </a>

              <a
                href="https://www.facebook.com/share/18Jn7q5dkX/"  target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#D6E4EE] bg-white shadow-sm transition-all duration-300 hover:bg-[#F8FBFD] hover:shadow-md"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4 text-maroon" />
              </a>

              <a
                href="https://youtube.com/@pradeep_maharajji?si=Vq2QWsPJ6TCmOVv0"
               
               target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#D6E4EE] bg-white shadow-sm transition-all duration-300 hover:bg-[#F8FBFD] hover:shadow-md"
                aria-label="YouTube"
              >
                <Youtube className="h-4 w-4 text-maroon" />
              </a>

            </div>
          </div>

          {/* RIGHT — Separate Contact Form */}
          <div className="rounded-3xl border-2 border-[#C9DCEB] bg-white p-6 shadow-lg sm:p-8 lg:p-10">

            <div className="mb-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-maroon">
                Get In Touch
              </p>

              <h3 className="mt-2 font-serif-display text-3xl font-medium text-charcoal">
                Send Us a Message
              </h3>

              <p className="mt-2 text-sm leading-6 text-charcoal/60">
                Have a question or want to connect with us? Fill out the form below.
              </p>
            </div>

            <ContactForm />

          </div>

        </div>
      </div>
    </section>
  );
}