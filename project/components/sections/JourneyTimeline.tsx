'use client';

import { saintData } from '@/data/saint';

const journeyImages = [
  '/qt9.jpeg',
  '/qt4.jpeg',
  '/qt6.jpeg',
  '/qt7.jpeg',
  '/qt5.jpeg',
  '/chp6.jpeg',
];

export function JourneyTimeline() {
  return (
    <section className="relative overflow-hidden bg-transparent py-24 md:py-32">

      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#B68B3C]/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#7A2E2E]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">

        {/* Heading */}
        <div className="mx-auto mb-20 max-w-3xl text-center md:mb-28">

          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#B68B3C]">
            The Journey
          </p>

          <h2 className="font-serif-display text-4xl font-medium leading-tight text-[#2B2B2B] md:text-5xl lg:text-6xl">
            Where Devotion
            <span className="block text-[#7A2E2E]">
              Becomes a Journey
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#2B2B2B]/60 md:text-base">
            A story shaped by devotion, knowledge, discipline and seva —
            unfolding one chapter at a time.
          </p>

        </div>


        {/* Journey chapters */}
        <div className="relative">

          {/* Central line */}
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#B68B3C]/40 to-transparent lg:block" />

          <div className="space-y-28 md:space-y-36">

            {saintData.journey.map((entry, i) => {

              const isImageLeft = i % 2 === 0;

              return (
                <article
                  key={entry.number}
                  className="relative grid items-center gap-10 lg:grid-cols-2 lg:gap-24"
                >

                  {/* ================= IMAGE ================= */}

                  <div
                    className={`relative ${
                      isImageLeft
                        ? 'lg:order-1'
                        : 'lg:order-2'
                    }`}
                  >

                    {/* Large 3D shadow layer */}
                    <div
                      className={`absolute inset-0 rounded-[32px] bg-[#7A2E2E]/10 ${
                        isImageLeft
                          ? 'translate-x-5 translate-y-5 rotate-2'
                          : '-translate-x-5 translate-y-5 -rotate-2'
                      }`}
                    />

                    {/* Gold frame layer */}
                    <div
                      className={`absolute inset-0 rounded-[32px] border-2 border-[#B68B3C]/20 ${
                        isImageLeft
                          ? 'translate-x-2 translate-y-2 rotate-1'
                          : '-translate-x-2 translate-y-2 -rotate-1'
                      }`}
                    />

                    {/* Image */}
                    <div
                      className="
                        group
                        relative
                        h-[380px]
                        overflow-hidden
                        rounded-[32px]
                        border-[7px]
                        border-white
                        bg-white
                        shadow-[0_30px_80px_rgba(43,43,43,0.15)]
                        md:h-[460px]
                      "
                    >

                      <img
                        src={journeyImages[i]}
                        alt={entry.title}
                        className="
                          h-full
                          w-full
                          object-cover
                          object-center
                          transition-transform
                          duration-1000
                          ease-out
                          group-hover:scale-105
                        "
                        loading="lazy"
                      />

                      {/* Image gradient */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                      {/* Chapter number */}
                      <div className="absolute bottom-6 left-6 flex h-16 w-16 items-center justify-center rounded-full border border-white/40 bg-[#7A2E2E]/90 shadow-xl backdrop-blur-md">

                        <span className="font-serif-display text-xl text-[#E4C77A]">
                          {entry.number}
                        </span>

                      </div>

                      {/* Year */}
                      <div className="absolute right-6 top-6 rounded-full border border-white/30 bg-black/25 px-4 py-2 backdrop-blur-md">

                        

                      </div>

                    </div>

                  </div>


                  {/* ================= TEXT ================= */}

                  <div
                    className={`relative ${
                      isImageLeft
                        ? 'lg:order-2'
                        : 'lg:order-1'
                    }`}
                  >

                    {/* Center diamond */}
                    <div className="absolute -top-8 left-1/2 hidden h-10 w-10 -translate-x-1/2 rotate-45 items-center justify-center rounded-lg border border-[#B68B3C]/30 bg-[#F2F9FF] shadow-md lg:flex">

                      <div className="h-2.5 w-2.5 -rotate-45 rounded-full bg-[#7A2E2E]" />

                    </div>


                    {/* Text content */}
                    <div
                      className={`
                        max-w-xl
                        ${
                          isImageLeft
                            ? 'lg:pl-4'
                            : 'lg:ml-auto lg:pr-4'
                        }
                      `}
                    >

                      <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#B68B3C]">
                        Chapter {entry.number}
                      </p>

                      <div className="mt-3 h-px w-14 bg-[#B68B3C]" />

                      <h3 className="mt-6 font-serif-display text-3xl font-medium leading-tight text-[#2B2B2B] md:text-4xl lg:text-5xl">

                        {entry.title}

                      </h3>

                      <p className="mt-6 text-sm leading-8 text-[#2B2B2B]/65 md:text-base">
                        {entry.description}
                      </p>


                      {/* Decorative year */}
                      <div className="mt-8 flex items-center gap-4">

                       
                        

                        <span className="h-px w-16 bg-[#B68B3C]/40" />

                      </div>

                    </div>

                  </div>

                </article>
              );
            })}

          </div>


          {/* ================= END ================= */}

          <div className="relative mt-32 flex flex-col items-center text-center">

            <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-[#B68B3C]/40 bg-white shadow-[0_20px_60px_rgba(43,43,43,0.1)]">

              <div className="absolute inset-2 rounded-full border border-dashed border-[#B68B3C]/40" />

              <span className="font-serif-display text-2xl text-[#7A2E2E]">
                ✦
              </span>

            </div>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.3em] text-[#B68B3C]">
              The Journey Continues
            </p>

            <h3 className="mt-4 font-serif-display text-3xl text-[#7A2E2E] md:text-4xl">
              From Knowledge to Seva
            </h3>

            <p className="mt-4 max-w-xl text-sm leading-7 text-[#2B2B2B]/60">
              Every chapter adds a new meaning to the journey —
              and every step carries the spirit of devotion, learning
              and service forward.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}