import React from 'react';
import { FadeIn } from '../animations/FadeIn';
import { openRegistrationCTA } from '../../lib/constants';
import { ArrowRight, Calendar, Clock, Video, Users } from 'lucide-react';

const meta = [
  { icon: Calendar, label: 'Kamis, 25 Juni 2026' },
  { icon: Clock, label: '08.00-12.00 WIB' },
  { icon: Video, label: 'Online via Zoom' },
  { icon: Users, label: 'Owner-only' },
];

const Hero: React.FC = () => {
  return (
    <section className="relative w-full bg-black pt-20 md:pt-28 pb-10 md:pb-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.06]" aria-hidden="true">
        <div className="absolute left-0 top-24 h-28 w-full -skew-y-3 bg-[var(--cf-cream)]" />
      </div>

      <div className="relative w-full max-w-[1280px] mx-auto px-5 md:px-10">
        <FadeIn direction="up" delay={0}>
          <p className="text-center text-[11px] md:text-xs font-black tracking-[0.18em] uppercase text-[var(--cf-gold)] mb-5">
            Exclusive Community Sharing - By Invitation Only
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.15}>
          <h1 className="text-center font-serif text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-[1.06] tracking-tight max-w-[22ch] mx-auto">
            Sales team yang Membawa Bisnis ke{' '}
            <span className="text-[var(--cf-gold)]">Rp10 Miliar</span>, Belum Tentu Bisa
            Membawanya ke <span className="text-[var(--cf-gold)]">Rp100 Miliar.</span>
          </h1>
        </FadeIn>

        <FadeIn direction="up" delay={0.3}>
          <p className="mt-5 md:mt-6 mx-auto max-w-2xl text-center text-sm md:text-base leading-7 text-zinc-300">
            Kini saatnya para business owner membangun sales team yang lebih konsisten, terukur,
            dan tidak terus bergantung pada dorongan owner setiap hari.
          </p>
        </FadeIn>

        <FadeIn duration={1.1} delay={0.45}>
          <div className="relative mt-10 md:mt-12 mx-auto w-full max-w-[1180px] rounded-2xl overflow-hidden shadow-[0_28px_80px_rgba(212,175,106,0.18)] ring-1 ring-white/5">
            <picture>
              <source type="image/webp" media="(min-width: 768px)" srcSet="/hero-poster.webp?v=r5" />
              <source type="image/webp" srcSet="/hero-poster-mobile.webp?v=r5" />
              <source media="(min-width: 768px)" srcSet="/hero-poster.jpg?v=r5" />
              <img
                src="/hero-poster-mobile.jpg?v=r5"
                alt="The Million Dollar Sales Team - Coach Ferly F. Raya - Alpha Leaders Community - 25 Juni 2026"
                width={2400}
                height={1350}
                loading="eager"
                fetchPriority="high"
                className="w-full h-auto block"
              />
            </picture>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.7}>
          <div className="mt-8 md:mt-10 flex flex-col items-center gap-5">
            <button
              type="button"
              onClick={openRegistrationCTA}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--cf-gold)] px-8 md:px-12 py-3.5 md:py-4 text-base md:text-lg font-black text-black transition hover:bg-[var(--cf-cream)] hover:text-[var(--cf-ink)] cursor-pointer shadow-[0_18px_42px_rgba(212,175,106,0.42)]"
              style={{ minHeight: 52 }}
            >
              Daftar Sekarang via WhatsApp
              <ArrowRight className="h-5 w-5" />
            </button>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 max-w-3xl w-full">
              {meta.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2.5 text-[12px] sm:text-sm font-bold text-[var(--cf-cream)]"
                >
                  <Icon className="h-4 w-4 shrink-0 text-[var(--cf-gold)]" />
                  <span className="leading-tight">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export { Hero };
