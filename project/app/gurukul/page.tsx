'use client';

import { GurukulPhotoStory } from '@/components/sections/GurukulPhotoStory';

export default function GurukulPage() {
  return (
    <main className="overflow-hidden bg-[#F2F9FF]">

     
      {/* =====================================================
          02 — FOUNDER
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#7A2E2E] px-5 py-24 md:px-10 md:py-32">

        {/* large background text */}
        <div className="pointer-events-none absolute -right-10 top-1/2 -translate-y-1/2 font-serif-display text-[18vw] leading-none text-white/[0.035]">
          FOUNDER
        </div>

        <div className="relative mx-auto max-w-6xl">

          <div className="grid items-center gap-14 md:grid-cols-[0.9fr_1.1fr]">

            {/* founder image */}
            <div className="relative mx-auto w-full max-w-[430px]">

              {/* 3D frame */}
              <div className="absolute -bottom-6 -right-6 h-full w-full rounded-[30px] border border-[#E4C77A]/25" />

              <div className="absolute -bottom-3 -right-3 h-full w-full rounded-[30px] bg-[#B68B3C]/15" />

              <div className="relative overflow-hidden rounded-[30px] bg-white p-2 shadow-[0_35px_80px_rgba(0,0,0,0.28)]">

                  <video
                className="h-[62vh] min-h-[480px] w-full object-cover md:h-[62vh]"
                autoPlay
                muted
                loop
                playsInline
                controls
                preload="metadata"
              >
                <source
                  src="/video1.mp4"
                  type="video/mp4"
                />
              </video>

              </div>

            </div>


            {/* founder information */}
            <div className="relative text-white">

              <p className="text-[10px] uppercase tracking-[0.35em] text-[#E4C77A]">
                Founder
              </p>

              <h2 className="mt-4 max-w-lg font-serif-display text-3xl font-medium leading-tight md:text-5xl">
               Shri Pradeep Mishra
                <span className="block text-[#E4C77A]">
                  Maharaj Ji
                </span>
              </h2>

              <div className="mt-7 h-px w-14 bg-[#E4C77A]" />

              <p className="mt-7 max-w-md text-sm leading-7 text-white/60">
            With a vision to create a space where knowledge, संस्कार, discipline, spirituality and seva come together, Shri Pradeep Mishra Maharaj Ji opened the Jan Kalyan Gurukul Seva Sanstha on 15 April 2026. The Gurukul is envisioned as a place where education goes beyond academics — nurturing character, wisdom, humility and a sense of responsibility in every learner.
              </p>

            </div>

          </div>

        </div>
      </section>

 {/* =====================================================
          01 — GURUKUL INAUGURATION
      ====================================================== */}
      <section className="relative bg-[#F2F9FF] px-5 pb-24 pt-28 md:px-10 md:pb-32 md:pt-36">

        <div className="mx-auto max-w-7xl">

          {/* small heading */}
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px w-12 bg-[#B68B3C]" />

            <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-[#7A2E2E]">
              The Beginning
            </p>
          </div>


          {/* cinematic video */}
          <div className="relative mx-auto max-w-4xl">

            {/* 3D layers */}
            <div className="absolute -bottom-6 -left-6 h-full w-full rounded-[32px] bg-[#7A2E2E]/10" />

            <div className="absolute -bottom-3 -left-3 h-full w-full rounded-[32px] bg-[#B68B3C]/10" />

            <div className="relative overflow-hidden rounded-[32px] bg-black shadow-[0_35px_90px_rgba(43,43,43,0.18)]">

              <video
                className="h-[62vh] min-h-[480px] w-full object-cover md:h-[62vh]"
                autoPlay
                muted
                loop
                playsInline
                controls
                preload="metadata"
              >
                <source
                  src="/video2.mp4"
                  type="video/mp4"
                />
              </video>

              {/* cinematic gradient */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

              <div className="absolute bottom-7 left-7 md:bottom-10 md:left-10">
                <p className="text-[10px] uppercase tracking-[0.35em] text-white/60">
                  Inauguration
                </p>

                <h1 className="mt-2 font-serif-display text-3xl font-medium text-white md:text-4xl">
                  The Beginning of a Vision
                </h1>
              </div>

            </div>

          </div>

        </div>
      </section>



      

      {/* =====================================================
          04 — SPECIAL GUEST
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#F5E9E7] px-5 py-24 md:px-10 md:py-32">

        <div className="mx-auto max-w-6xl">

          <div className="grid items-center gap-14 md:grid-cols-[1.1fr_0.9fr]">

            {/* guest visual */}
            <div className="relative mx-auto w-full max-w-[430px] md:order-2">

              <div className="absolute -bottom-5 -left-5 h-full w-full rounded-[35px] bg-[#7A2E2E]/10" />

              <div className="relative overflow-hidden rounded-[35px] bg-white p-2 shadow-[0_30px_70px_rgba(43,43,43,0.14)]">

                <img
                  src="/guest.jpeg"
                  alt="Special guest at Jan Kalyan Gurukul"
                  className="h-[480px] w-full rounded-[27px] object-cover md:h-[560px]"
                  loading="lazy"
                />

              </div>

            </div>


            {/* guest text */}
            <div className="md:order-1">

              <p className="text-[10px] uppercase tracking-[0.35em] text-maroon ">
                Special Guest
              </p>

            
              <div className="mt-7 h-px w-12 bg-[#B68B3C]" />

              <p className="mt-7 max-w-sm text-sm leading-7 text-black /50">
                A revered spiritual storyteller and Katha Vyas, Mahant Shri Suresh Chandra Awasthi Ji has been a distinguished presence in the world of spiritual discourse. His profound understanding of Sanatan Dharma and his ability to connect timeless wisdom with people make his presence truly meaningful and inspiring.
              </p>

            </div>

          </div>

        </div>
      </section>



      {/* =====================================================
          06 — GURUKUL VISUAL STORY
      ====================================================== */}
    


        

   

      {/* =====================================================
          LIFE AT GURUKUL
          DO NOT CHANGE THIS COMPONENT
      ====================================================== */}

      <GurukulPhotoStory />

    </main>
  );
}