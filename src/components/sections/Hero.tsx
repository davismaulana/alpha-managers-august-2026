import React from 'react';
import { FadeIn } from '../animations/FadeIn';
import { CTA_LABEL, scrollToLeadForm } from '../../lib/constants';
import {
  Calendar,
  Clock,
  Users,
  ArrowRight,
  MapPin,
  ShieldCheck,
} from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full bg-[var(--cf-ink)] pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-28 lg:pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_8%,rgba(212,175,106,0.16),transparent_36%),linear-gradient(140deg,rgba(5,5,5,1)_0%,rgba(17,17,17,0.94)_55%,rgba(229,219,199,0.10)_100%)]" />
      <div className="absolute left-[44%] top-24 hidden h-[72%] w-[44%] -skew-y-6 border border-[var(--cf-gold)]/18 bg-[linear-gradient(180deg,rgba(229,219,199,0.08),rgba(212,175,106,0.04))] lg:block" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_1fr_6fr] gap-10 lg:gap-0 items-start">
          <div>
            <FadeIn direction="up" delay={0}>
              <p className="text-[11px] md:text-xs font-black tracking-[0.18em] uppercase text-gold-300 mb-5">
                ALPHA MANAGERS | EXCLUSIVE COMMUNITY SHARING | BY INVITATION ONLY
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <h1 className="font-serif text-[2.35rem] md:text-6xl xl:text-[3.8rem] font-bold leading-[1.04] tracking-normal max-w-5xl">
                Ubah Manager Anda dari{' '}
                <span className="text-gold-400">Pemadam Kebakaran</span> menjadi{' '}
                <span className="text-gold-400">Penggerak Pertumbuhan Bisnis</span>
              </h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.4}>
              <div className="mt-5 hidden lg:flex flex-col gap-4">
                <button
                  onClick={() => scrollToLeadForm('hero-desktop')}
                  className="inline-flex w-fit min-h-14 items-center justify-center gap-2 rounded-full bg-[var(--cf-gold)] px-8 text-base md:text-lg font-black text-black transition hover:bg-[var(--cf-cream)] hover:text-[var(--cf-ink)] cursor-pointer"
                >
                  {CTA_LABEL}
                  <ArrowRight className="h-5 w-5" />
                </button>
                <p className="max-w-2xl text-base md:text-xl leading-7 md:leading-8 text-zinc-300">
                  Saatnya perusahaan Anda memiliki manager yang benar-benar bisa diandalkan untuk
                  mencapai hasil nyata di lapangan: memimpin tim, menjaga accountability, mendorong KPI,
                  dan mengurangi ketergantungan harian pada owner.
                </p>
              </div>
              <p className="mt-5 max-w-2xl text-base md:text-xl leading-7 md:leading-8 text-zinc-300 lg:hidden">
                Saatnya perusahaan Anda memiliki manager yang benar-benar bisa diandalkan untuk
                mencapai hasil nyata di lapangan: memimpin tim, menjaga accountability, mendorong KPI,
                dan mengurangi ketergantungan harian pada owner.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.6}>
              <div className="mt-6 flex flex-col sm:flex-row gap-4 lg:hidden">
                <button
                  onClick={() => scrollToLeadForm('hero-mobile')}
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[var(--cf-gold)] px-8 text-base md:text-lg font-black text-black transition hover:bg-[var(--cf-cream)] hover:text-[var(--cf-ink)] cursor-pointer"
                >
                  {CTA_LABEL}
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
              <p className="mt-3 max-w-md text-sm text-zinc-400">
                Executive session ini dikurasi untuk owner, HR, dan L&amp;D yang benar-benar ingin
                membangun manager yang bertanggung jawab atas hasil.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.8}>
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl">
                {[
                  { icon: Calendar, label: 'Kamis, 13 Agustus 2026' },
                  { icon: Clock, label: '09.00-17.00 WIB' },
                  { icon: MapPin, label: 'Jakarta' },
                  { icon: Users, label: 'By invitation only' },
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

          <div className="hidden lg:block" />

          <FadeIn direction="up" delay={0.2} duration={0.8}>
            <div className="relative px-2 pb-10 pt-6 lg:pb-0 lg:pl-3">
              <div className="pointer-events-none absolute inset-x-[16%] top-0 hidden h-32 -skew-y-6 border border-[var(--cf-cream)]/18 bg-[linear-gradient(90deg,rgba(229,219,199,0.16),rgba(212,175,106,0.08))] lg:block" />

              <div className="relative ml-auto max-w-[530px] rotate-[-2deg] border border-[var(--cf-cream)]/35 bg-[linear-gradient(180deg,rgba(10,10,10,0.98),rgba(17,14,10,0.98))] p-[14px] shadow-[0_42px_110px_rgba(0,0,0,0.55)]">
                <div className="absolute inset-[14px] border border-[var(--cf-gold)]/50" />
                <div className="absolute right-0 top-0 h-24 w-24 bg-[linear-gradient(135deg,transparent_50%,rgba(229,219,199,0.26)_50%)]" />

                <div className="relative aspect-[4/5] overflow-hidden border border-white/8 px-7 py-7 md:px-9 md:py-9">
                  <div className="pointer-events-none absolute inset-0 opacity-[0.16] bg-[linear-gradient(121deg,transparent_0%,transparent_48%,var(--cf-gold)_48%,var(--cf-gold)_49%,transparent_49%,transparent_72%,var(--cf-cream)_72%,var(--cf-cream)_72.8%,transparent_72.8%)]" />

                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-gold-300">
                    ALPHA MANAGERS PRIVATE SESSION
                  </p>

                  <div className="mt-12 border-t border-white/10 pt-8">
                    <p className="font-serif text-4xl leading-none text-white md:text-6xl">
                      13 Agustus 2026
                    </p>
                    <p className="mt-4 text-xs uppercase tracking-[0.2em] text-zinc-400 md:text-sm">
                      Jakarta · By Invitation Only
                    </p>
                  </div>

                  <div className="mt-10 grid gap-4 text-sm text-zinc-200 md:text-base">
                    {[
                      'Manager lebih disiplin pada KPI dan hasil tim.',
                      'Delegasi berjalan tanpa owner turun tangan setiap hari.',
                      'Accountability dan komunikasi eksekusi menjadi lebih tegas.',
                    ].map((line) => (
                      <div key={line} className="flex items-start gap-3 border-b border-white/10 pb-4">
                        <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
                        <span className="leading-relaxed">{line}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 border-t border-[var(--cf-gold)]/25 pt-5">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-500">
                      Poster resmi menyusul
                    </p>
                    <p className="mt-2 font-serif text-lg text-[var(--cf-cream)] md:text-xl">
                      Forged for executive-level leadership accountability.
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 left-0 right-6 z-20 ml-auto max-w-[280px] bg-[var(--cf-cream)] px-5 py-4 text-zinc-950 shadow-2xl md:right-10">
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-gold-700">
                  Qualification line
                </p>
                <p className="mt-2 text-sm font-black leading-tight">
                  Dipandu oleh Coach Ferly F. Raya dan Shoeb Kagda untuk owner, HR, dan L&amp;D yang
                  ingin manager bertindak sebagai mesin pertumbuhan.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export { Hero };
