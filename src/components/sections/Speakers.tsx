import React from 'react';
import { FadeIn } from '../animations/FadeIn';

const Speakers: React.FC = () => {
  const proofs = [
    '10+ tahun sebagai Senior Head Business Coach di salah satu coaching firm terbaik di Asia Tenggara',
    'Former Vice President di perusahaan telekomunikasi multinasional',
    'Pengalaman lebih dari 20 tahun di industri garmen dengan klien brand-brand multinasional',
    'Business Owner dengan visi membawa bisnis menuju IPO Ready 2030',
    'Founder & Advisor Alpha Leaders Community',
    'Telah diliput di berbagai podcast dan media entrepreneur nasional',
    'Membantu ratusan business owner dengan skala bisnis ratusan miliar hingga triliunan rupiah membangun sistem bisnis yang lebih autopilot dan scalable',
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[var(--cf-ink)] to-zinc-950 md:min-h-screen md:flex md:flex-col md:justify-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn direction="up">
            <div className="mb-12 md:mb-14">
              <p className="text-[11px] tracking-[0.22em] uppercase text-gold-400 font-black mb-4">
                Pembawa Sesi
              </p>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight">
                Dibawakan Oleh
                <br />
                <span className="text-gold-400">Coach Ferly F. Raya</span>
              </h2>
              <p className="mt-4 text-base md:text-lg text-zinc-300 font-medium">
                Senior Head Coach for Trillion-Scale Business Owner - Alpha Leaders Community
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 items-start">
            <FadeIn direction="up" delay={0.1}>
              <div className="relative">
                <div className="absolute -left-3 -top-3 h-full w-full border border-gold-500/30" />
                <div className="relative bg-zinc-900/60 border border-white/10 p-3">
                  <img
                    src="/images/coach-ferly.png"
                    alt="Coach Ferly F. Raya"
                    className="w-full aspect-[4/5] object-cover"
                    style={{ objectPosition: '50% 12%' }}
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-4 left-6 right-6 z-10 bg-[var(--cf-cream)] px-5 py-3 text-zinc-950 shadow-xl">
                  <p className="text-[10px] tracking-[0.22em] uppercase font-black text-gold-700">
                    Coach Ferly F. Raya
                  </p>
                  <p className="text-sm font-bold mt-1 leading-snug">
                    Senior Head Coach
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <div className="space-y-3">
                {proofs.map((p, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 border border-white/10 bg-zinc-900/30 p-4 md:p-5"
                  >
                    <span className="font-serif text-xl md:text-2xl text-gold-400 leading-none w-8 shrink-0">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <p className="text-sm md:text-base text-zinc-200 leading-relaxed">{p}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Speakers };
