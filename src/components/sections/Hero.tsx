import React from 'react';
import { FadeIn } from '../animations/FadeIn';
import { CTA_LABEL, scrollToLeadForm } from '../../lib/constants';
import { Calendar, Clock, Users, ArrowRight, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[var(--cf-ink)] pb-18 pt-24 md:pb-24 md:pt-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(212,175,106,0.18),transparent_28%),radial-gradient(circle_at_82%_12%,rgba(229,219,199,0.10),transparent_24%),linear-gradient(180deg,rgba(5,5,5,1)_0%,rgba(8,8,8,0.98)_45%,rgba(5,5,5,1)_100%)]" />
      <div className="absolute left-[-8%] top-32 hidden h-[58%] w-[34%] rotate-[9deg] border border-gold-500/15 bg-[linear-gradient(180deg,rgba(212,175,106,0.06),rgba(229,219,199,0.02))] lg:block" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <FadeIn direction="up" delay={0}>
          <p className="mb-5 text-[11px] font-black uppercase tracking-[0.22em] text-gold-300 md:text-xs">
            ALPHA MANAGERS | EXCLUSIVE COMMUNITY SHARING | BY INVITATION ONLY
          </p>
        </FadeIn>

        <div className="grid items-end gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          <FadeIn direction="up" delay={0.2} duration={0.8}>
            <div className="relative">
              <div className="pointer-events-none absolute -left-4 top-8 hidden h-[84%] w-[88%] border border-gold-500/20 bg-[linear-gradient(135deg,rgba(229,219,199,0.08),rgba(212,175,106,0.03))] lg:block" />
              <div className="relative overflow-hidden border border-[var(--cf-cream)]/25 bg-black p-3 shadow-[0_48px_120px_rgba(0,0,0,0.55)] md:p-4">
                <div className="absolute inset-3 border border-[var(--cf-gold)]/45 md:inset-4" />
                <div className="absolute right-0 top-0 h-20 w-20 bg-[linear-gradient(135deg,transparent_48%,rgba(229,219,199,0.28)_48%)] md:h-28 md:w-28" />
                <picture>
                  <source srcSet="/event-poster.webp" type="image/webp" />
                  <img
                    src="/event-poster.jpg"
                    alt="Poster Alpha Managers 13 Agustus 2026 bersama Coach Ferly F. Raya dan Shoeb Kagda"
                    className="relative aspect-[4/5] w-full object-cover object-top"
                    loading="eager"
                    fetchPriority="high"
                  />
                </picture>
              </div>
            </div>
          </FadeIn>

          <div className="relative">
            <FadeIn direction="up" delay={0.4}>
                <div className="border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md md:p-8">
                  <p className="text-[10px] font-black uppercase tracking-[0.24em] text-gold-300">
                    Undangan eksekutif
                  </p>
                <p className="mt-4 font-serif text-3xl leading-tight text-white md:text-4xl">
                  Satu hari untuk membentuk manager yang lebih tegas pada KPI, delegasi, dan
                  accountability.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-zinc-300 md:text-base">
                  Hero sudah membawa seluruh branding event. Halaman ini membantu owner, HR, dan
                  L&amp;D bergerak ke langkah berikutnya: apply untuk undangan dan melihat apakah
                  sesi ini relevan untuk manager inti mereka.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.6}>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {[
                  { icon: Calendar, label: 'Kamis, 13 Agustus 2026' },
                  { icon: Clock, label: '09.00 - 17.00 WIB' },
                  { icon: MapPin, label: 'Jakarta' },
                  { icon: Users, label: 'By invitation only' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 border border-white/10 bg-black/35 px-3 py-3 text-xs font-bold text-gold-200 backdrop-blur-md md:text-sm"
                  >
                    <item.icon className="h-4 w-4 shrink-0" />
                    <span className="leading-tight">{item.label}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.8}>
              <div className="mt-5 border border-gold-500/25 bg-[var(--cf-cream)] p-5 text-zinc-950 shadow-2xl md:p-6">
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-gold-700">
                  Langkah berikutnya
                </p>
                <p className="mt-3 text-sm font-semibold leading-relaxed md:text-base">
                  Scroll ke bawah untuk melihat problem framing, materi, mentor, dan proof layer,
                  lalu kirim profil perusahaan Anda agar tim Alpha Leaders bisa mengkurasi seat.
                </p>
                <button
                  type="button"
                  onClick={() => scrollToLeadForm('hero')}
                  className="mt-5 inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-zinc-950 px-8 text-base font-black text-white transition hover:bg-gold-700 hover:text-black"
                >
                  {CTA_LABEL}
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero };
