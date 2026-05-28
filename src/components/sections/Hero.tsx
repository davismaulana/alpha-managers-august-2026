import React from 'react';
import { FadeIn } from '../animations/FadeIn';
import { scrollToLeadForm } from '../../lib/constants';
import { Calendar, Clock, Users, Video, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full bg-black overflow-hidden md:min-h-screen md:flex md:flex-col md:justify-center pt-20 md:pt-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(155,75,255,0.18),transparent_55%)] pointer-events-none" />

      <div className="relative z-10 w-full">
        <FadeIn direction="up" delay={0.05} duration={0.7}>
          <div className="w-full">
            <picture>
              <source
                type="image/webp"
                media="(min-width: 768px)"
                srcSet="/hero-poster.webp"
              />
              <source
                type="image/webp"
                srcSet="/hero-poster-mobile.webp"
              />
              <source
                media="(min-width: 768px)"
                srcSet="/hero-poster.jpg"
              />
              <img
                src="/hero-poster-mobile.jpg"
                alt="The Million Dollar Sales Team — Coach Ferly F. Raya · Alpha Leaders Community · 25 Juni 2026"
                width={2400}
                height={1350}
                loading="eager"
                fetchPriority="high"
                className="block w-full h-auto"
              />
            </picture>
          </div>
        </FadeIn>

        <div className="container mx-auto px-4 md:px-6 mt-10 md:mt-12">
          <FadeIn direction="up" delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <button
                onClick={scrollToLeadForm}
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[var(--cf-gold)] px-10 text-base md:text-lg font-black text-black transition hover:bg-[var(--cf-cream)] hover:text-[var(--cf-ink)] cursor-pointer shadow-[0_18px_42px_rgba(212,175,106,0.32)]"
              >
                Daftar Sekarang
                <ArrowRight className="h-5 w-5" />
              </button>
              <p className="max-w-sm text-sm text-zinc-300 text-center sm:text-left">
                Isi Owner Profile dulu. Tim internal akan meninjau kecocokan sebelum undangan dikirim.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.35}>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
              {[
                { icon: Calendar, label: 'Kamis, 25 Juni 2026' },
                { icon: Clock, label: '08.00 – 12.00 WIB' },
                { icon: Video, label: 'Online via Zoom' },
                { icon: Users, label: 'Owner-only' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-3 text-xs sm:text-sm font-bold text-gold-200"
                >
                  <item.icon className="h-4 w-4 shrink-0" />
                  <span className="leading-tight">{item.label}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export { Hero };
