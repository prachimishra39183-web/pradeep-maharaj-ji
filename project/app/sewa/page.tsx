'use client';

import {
  ArrowDown,
  ArrowUpRight,
  Building2,
  Heart,
  HandHeart,
  Utensils,
} from 'lucide-react';

const sevaOptions = [
  {
    number: '01',
    title: 'Ann Daan',
    short: 'Food & nourishment',
    description:
      'Support ann daan and become part of an effort to provide food with dignity and compassion.',
    image: '/food.png',
    icon: Utensils,
  },
  {
    number: '02',
    title: 'Gurukul Nirman',
    short: 'Building the Gurukul',
    description:
      'Contribute towards the construction and development of Jan Kalyan Gurukul Seva Sansthan.',
    image: '/guru.png',
    icon: Building2,
  },
  {
    number: '03',
    title: 'Samanya Seva',
    short: 'Help where needed',
    description:
      'Offer your support towards the needs, activities and initiatives of the Gurukul.',
    image: '/other.png',
    icon: HandHeart,
  },
];

export default function SewaPage() {
  return (
    <main className="overflow-hidden bg-[#F7F0E3] text-[#2B2B2B]">

      {/* =====================================================
          HERO
      ====================================================== */}
     {/* =====================================================
    SEVA HERO — CREATIVE FULL SCREEN
    
===================================================== */}
{/* =====================================================
    SEVA HERO — 3D TEMPLE ARCH
===================================================== */}

<section className="relative min-h-[88vh] overflow-hidden bg-[#F4EBDD]">

  {/* ===================================================
      BACKGROUND GLOW
  ==================================================== */}

  <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#D49A4A]/15 blur-[110px]" />

  <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#7A2E2E]/10 blur-[120px]" />

  <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B68B3C]/[0.05] blur-[90px]" />


  {/* ===================================================
      DECORATIVE ORBITS
  ==================================================== */}

  <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#7A2E2E]/10 animate-[spin_35s_linear_infinite] md:h-[780px] md:w-[780px]" />

  <div className="pointer-events-none absolute left-1/2 top-1/2 h-[470px] w-[470px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#B68B3C]/20 md:h-[620px] md:w-[620px]" />


  {/* ===================================================
      FLOATING DECORATIVE WORDS
  ==================================================== */}

  <div className="pointer-events-none absolute left-[6%] top-[25%] rotate-[-8deg]">

    <p className="font-serif-display text-3xl text-[#7A2E2E]/10 md:text-5xl">
      अन्न
    </p>

    <p className="mt-1 text-[8px] uppercase tracking-[0.3em] text-[#7A2E2E]/25">
      Ann Daan
    </p>

  </div>


  <div className="pointer-events-none absolute right-[7%] top-[27%] rotate-[7deg]">

    <p className="font-serif-display text-3xl text-[#B68B3C]/25 md:text-5xl">
      गुरुकुल
    </p>

    <p className="mt-1 text-right text-[8px] uppercase tracking-[0.3em] text-[#B68B3C]/35">
      Gurukul Nirman
    </p>

  </div>


  <div className="pointer-events-none absolute bottom-[20%] right-[13%] rotate-[-5deg]">

    <p className="font-serif-display text-3xl text-[#7A2E2E]/10 md:text-4xl">
      सेवा
    </p>

  </div>


  {/* ===================================================
      MAIN
  ==================================================== */}

  <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-7xl items-center justify-center px-6 py-28 md:px-12">

    <div className="grid w-full items-center gap-14 lg:grid-cols-[1fr_0.95fr]">

      {/* =================================================
          LEFT CONTENT
      ================================================== */}

      <div className="text-center lg:text-left">

        <div className="flex items-center justify-center gap-3 lg:justify-start">

          <span className="h-px w-10 bg-[#B68B3C]" />

          <span className="text-[9px] font-semibold uppercase tracking-[0.4em] text-[#B68B3C]">
            A Path of Giving
          </span>

          <span className="h-px w-10 bg-[#B68B3C]" />

        </div>


        <h1 className="mt-6 font-serif-display text-5xl font-medium leading-[1.02] text-maroon md:text-6xl lg:text-7xl">

        
            Jan Kalyan Gurukul Sewa Sansthan
          

        </h1>


        <p className="mt-6 max-w-xl text-sm leading-8 text-[#2B2B2B]/55 md:text-base">
          Support Ann Daan, Gurukul development and other meaningful
          seva initiatives through your contribution.
        </p>


        <div className="mt-9 flex flex-wrap justify-center gap-3 lg:justify-start">

          <span className="rounded-full border border-[#7A2E2E]/15 bg-white/50 px-4 py-2 text-[9px] uppercase tracking-[0.2em] text-[#7A2E2E]">
            Ann Daan
          </span>

          <span className="rounded-full border border-[#B68B3C]/25 bg-white/50 px-4 py-2 text-[9px] uppercase tracking-[0.2em] text-[#7A2E2E]">
            Gurukul Nirman
          </span>

          <span className="rounded-full border border-[#7A2E2E]/15 bg-white/50 px-4 py-2 text-[9px] uppercase tracking-[0.2em] text-[#7A2E2E]">
            Other Seva
          </span>

        </div>


        <div className="mt-10 flex items-center justify-center gap-3 lg:justify-start">

          <span className="h-10 w-px bg-[#B68B3C]/40" />

          <p className="text-[8px] uppercase tracking-[0.3em] text-[#2B2B2B]/35">
            Contribute with faith
          </p>

        </div>

      </div>


      {/* =================================================
          RIGHT — 3D TEMPLE ARCH
      ================================================== */}

      <div className="relative mx-auto h-[500px] w-full max-w-[430px]">

        {/* Back architectural frame */}
        <div
          className="absolute inset-[8%] border border-[#B68B3C]/25 rotate-[-4deg]"
          style={{
            borderRadius: '48% 48% 12% 12%',
          }}
        />

        {/* second frame */}
        <div
          className="absolute inset-[13%] border border-[#7A2E2E]/10 rotate-[3deg]"
          style={{
            borderRadius: '48% 48% 12% 12%',
          }}
        />


        {/* =================================================
            MAIN ARCH
        ================================================== */}

        <div
          className="absolute inset-[17%] overflow-hidden bg-[#E8D3AF] shadow-[0_35px_90px_rgba(122,46,46,0.15)]"
          style={{
            borderRadius: '46% 46% 14% 14%',
          }}
        >

          {/* inner arch */}
          <div
            className="absolute inset-4 border border-[#7A2E2E]/15"
            style={{
              borderRadius: '44% 44% 12% 12%',
            }}
          />


          {/* soft temple light */}
          <div className="absolute left-1/2 top-[26%] h-40 w-40 -translate-x-1/2 rounded-full bg-[#FFF1C7]/60 blur-2xl" />


          {/* =================================================
              CENTRAL SEVA SYMBOL
          ================================================== */}

          <div className="absolute left-1/2 top-[24%] flex -translate-x-1/2 flex-col items-center">

            <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-[#B68B3C]/40 bg-[#F7E7C4]/70 shadow-[0_10px_40px_rgba(182,139,60,0.18)] backdrop-blur-sm">

              <div className="absolute inset-3 rounded-full border border-dashed border-[#B68B3C]/35" />

              <span className="font-serif-display text-4xl text-[#7A2E2E]">
                अर्पण
              </span>

            </div>

            <p className="mt-4 text-[8px] font-semibold uppercase tracking-[0.35em] text-[#7A2E2E]/60">
              An Offering
            </p>

          </div>


          {/* =================================================
              TEMPLE BASE
          ================================================== */}

          <div className="absolute bottom-0 left-0 right-0 h-[38%] bg-[#D4B77D]">

            {/* roof */}
            <div className="absolute -top-16 left-1/2 h-24 w-48 -translate-x-1/2 bg-[#C5A45F] [clip-path:polygon(50%_0,100%_100%,0_100%)]" />

            {/* temple body */}
            <div className="absolute bottom-0 left-1/2 h-28 w-40 -translate-x-1/2 bg-[#B78F4F]" />

            {/* center doorway */}
            <div className="absolute bottom-0 left-1/2 h-20 w-16 -translate-x-1/2 rounded-t-full bg-[#7A2E2E]/70" />

            {/* flag */}
            <div className="absolute left-1/2 top-[-90px] h-16 w-px -translate-x-1/2 bg-[#7A2E2E]/60" />

            <div className="absolute left-1/2 top-[-92px] ml-1 h-5 w-9 -translate-x-0 bg-[#7A2E2E]" />

          </div>

        </div>


        {/* =================================================
            FLOATING MINI ELEMENTS
        ================================================== */}

        {/* diya */}
        <div className="absolute bottom-[12%] left-[7%] flex h-12 w-12 items-center justify-center rounded-full bg-[#7A2E2E] shadow-xl">

          <span className="text-lg text-[#E4C77A]">
            ✦
          </span>

        </div>


        {/* gold marker */}
        <div className="absolute right-[5%] top-[14%] flex h-14 w-14 rotate-6 items-center justify-center rounded-2xl bg-[#B68B3C] shadow-xl">

          <span className="font-serif-display text-2xl text-white">
            ॐ
          </span>

        </div>


        {/* floating text plate */}
        <div className="absolute bottom-[6%] right-[4%] rotate-[-5deg] bg-[#F7F0E3] px-5 py-3 shadow-[0_15px_35px_rgba(43,43,43,0.12)]">

          <p className="font-serif-display text-lg text-[#7A2E2E]">
            सेवा
          </p>

          <p className="text-[7px] uppercase tracking-[0.25em] text-[#2B2B2B]/35">
            With purpose
          </p>

        </div>

      </div>

    </div>

  </div>

</section>

      {/* =====================================================
          THREE DAAN OPTIONS
      ====================================================== */}
      <section className="relative px-6 py-20 md:px-12 md:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 max-w-xl">

            <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#B68B3C]">
              Ways to Contribute
            </p>

            <h2 className="mt-3 font-serif-display text-3xl leading-tight md:text-4xl">
              Choose the seva
              <span className="text-[#7A2E2E]"> closest to your heart.</span>
            </h2>

          </div>


          {/* CREATIVE IMAGE PANELS */}
          <div className="grid gap-8 lg:grid-cols-3">

            {sevaOptions.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className={`group relative ${
                    index === 1 ? 'lg:-translate-y-8' : ''
                  }`}
                >

                  {/* 3D back layer */}
                  <div
                    className={`absolute inset-0 ${
                      index === 0
                        ? 'translate-x-4 translate-y-4 bg-[#7A2E2E]/8'
                        : index === 1
                        ? '-translate-x-4 translate-y-4 bg-[#B68B3C]/10'
                        : 'translate-x-4 -translate-y-3 bg-[#7A2E2E]/6'
                    }`}
                  />

                  {/* image panel */}
                  <div className="relative overflow-hidden bg-[#2B2020] shadow-[0_25px_65px_rgba(43,43,43,0.12)]">

                    <div className="relative h-[400px]">

                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                        loading="lazy"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                      {/* number */}
                      <div className="absolute left-5 top-5">

                        <span className="font-serif-display text-4xl text-white/90">
                          {item.number}
                        </span>

                      </div>


                      {/* icon */}
                      <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 backdrop-blur-md">

                        <Icon className="h-4 w-4 text-[#E4C77A]" />

                      </div>


                      {/* bottom content */}
                      <div className="absolute bottom-0 left-0 right-0 p-7">

                        <p className="text-[8px] font-semibold uppercase tracking-[0.3em] text-[#E4C77A]">
                          {item.short}
                        </p>

                        <h3 className="mt-2 font-serif-display text-3xl text-white">
                          {item.title}
                        </h3>

                        <p className="mt-3 max-w-sm text-xs leading-6 text-white/55">
                          {item.description}
                        </p>

                      </div>

                    </div>

                    {/* hover line */}
                    <div className="h-1 w-0 bg-[#B68B3C] transition-all duration-700 group-hover:w-full" />

                  </div>

                  {/* bottom marker */}
                  <div className="mt-4 flex items-center gap-3">

                    <span className="h-px w-8 bg-[#B68B3C]" />

                    <ArrowUpRight className="h-3 w-3 text-[#7A2E2E]" />

                    <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#2B2B2B]/35">
                      Support this seva
                    </span>

                  </div>

                </article>
              );
            })}

          </div>

        </div>
      </section>


      {/* =====================================================
          QR CONTRIBUTION SECTION
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#7A2E2E] px-6 py-24 md:px-12 md:py-32">

        {/* oversized decorative geometry */}
        <div className="pointer-events-none absolute -right-40 top-[-120px] h-[500px] w-[500px] rounded-full border border-white/10" />

        <div className="pointer-events-none absolute -left-40 bottom-[-180px] h-[500px] w-[500px] rounded-full border border-[#E4C77A]/10" />

        <div className="relative mx-auto max-w-6xl">

          <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.65fr]">

            {/* TEXT */}
            <div className="text-white">

              <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#E4C77A]">
                Make Your Contribution
              </p>

              <h2 className="mt-5 max-w-xl font-serif-display text-4xl leading-tight md:text-5xl">
                Let your seva become part of
                <span className="text-[#E4C77A]">
                  {' '}the journey.
                </span>
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-8 text-white/55">
                Scan the QR code to make your contribution towards
                Ann Daan, Gurukul Nirman or other seva initiatives.
              </p>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">

                <span className="text-[9px] uppercase tracking-[0.2em] text-white/40">
                  Ann Daan
                </span>

                <span className="text-[9px] uppercase tracking-[0.2em] text-white/40">
                  Gurukul Nirman
                </span>

                <span className="text-[9px] uppercase tracking-[0.2em] text-white/40">
                  Samanya Daan
                </span>

              </div>

            </div>


            {/* QR */}
            <div className="flex justify-center lg:justify-end">

              <div className="relative">

                {/* 3D layers */}
                <div className="absolute -bottom-5 -left-5 h-full w-full bg-[#E4C77A]/10" />

                <div className="absolute -bottom-2 -left-2 h-full w-full border border-[#E4C77A]/30" />

                <div className="relative w-[280px] bg-[#F7F0E3] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">

                  

                    <img
                      src="/qr.png"
                      alt="Donation QR code"
                      className="aspect-square w-full object-contain"
                    />

                  

                  <div className="mt-5 text-center">

                    <p className="font-serif-display text-2xl text-[#7A2E2E]">
                      Scan to Contribute
                    </p>

                    <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-[#2B2B2B]/40">
                      Jan Kalyan Gurukul Seva Sansthan
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CLOSING
      ====================================================== */}
      <section className="px-6 py-20 text-center md:px-12 md:py-24">

        <div className="mx-auto max-w-2xl">

          <div className="mb-6 flex items-center justify-center gap-3">

            <span className="h-px w-12 bg-[#B68B3C]" />

            <span className="h-2 w-2 rotate-45 bg-[#7A2E2E]" />

            <span className="h-px w-12 bg-[#B68B3C]" />

          </div>

          <p className="font-serif-display text-2xl leading-relaxed text-[#7A2E2E] md:text-3xl">
            सेवा से संस्कार,
            <br />
            संस्कार से समाज।
          </p>

          <p className="mt-4 text-xs text-[#2B2B2B]/40">
            Jan Kalyan Gurukul Seva Sansthan
          </p>

        </div>

      </section>

    </main>
  );
}