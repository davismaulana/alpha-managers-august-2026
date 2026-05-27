import React from 'react';
import { FadeIn } from '../animations/FadeIn';
import { scrollToLeadForm } from '../../lib/constants';
import { Calendar, Clock, Users, Video, ArrowRight, Target, TrendingUp, Award } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full bg-[var(--cf-ink)] pt-28 pb-20 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_8%,rgba(212,175,106,0.16),transparent_36%),linear-gradient(140deg,rgba(5,5,5,1)_0%,rgba(17,17,17,0.94)_55%,rgba(229,219,199,0.10)_100%)]" />
      <div className="absolute left-0 top-28 h-28 w-full -skew-y-3 bg-[var(--cf-cream)] opacity-[0.06]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
          <div>
            <FadeIn direction="up" delay={0}>
              <p className="text-[11px] md:text-xs font-black tracking-[0.18em] uppercase text-gold-300 mb-5">
                Exclusive Community Sharing · By Invitation Only
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <h1 className="font-serif text-4xl md:text-6xl xl:text-7xl font-bold leading-[1.02] tracking-normal max-w-5xl">
                Sudah Rekrut Banyak Sales,{' '}
                <span className="text-gold-400">Tapi Closing &amp; Revenue</span>{' '}
                Masih Naik Turun?
              </h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.4}>
              <p className="mt-6 max-w-2xl text-base md:text-xl leading-7 md:leading-9 text-zinc-300">
                Setiap bulan Anda menambah sales dan budget marketing, tetapi omzet tetap sulit
                diprediksi karena tim belum punya struktur, target, insentif, dan cara konversi
                yang rapi. Sesi ini membantu owner membangun sales team yang lebih terukur, lebih
                konsisten, dan tidak bergantung penuh pada dorongan harian dari owner.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.6}>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToLeadForm}
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[var(--cf-gold)] px-8 text-base md:text-lg font-black text-black transition hover:bg-[var(--cf-cream)] hover:text-[var(--cf-ink)] cursor-pointer"
                >
                  Daftar Sekarang
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
              <p className="mt-3 max-w-md text-sm text-zinc-400">
                Isi Owner Profile terlebih dahulu. Tim internal akan meninjau kecocokan sebelum
                undangan dikirim.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.8}>
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl">
                {[
                  { icon: Calendar, label: 'Kamis, 25 Juni 2026' },
                  { icon: Clock, label: '08.00-12.00 WIB' },
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

          <FadeIn direction="up" delay={0.2} duration={0.8}>
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-full w-full border border-gold-500/30" />

              <div className="relative z-10 bg-gradient-to-br from-zinc-900 via-[#0a0a0a] to-zinc-950 border border-gold-500/30 p-8 md:p-10 rotate-[-2deg] shadow-[0_36px_100px_rgba(0,0,0,0.55)] overflow-hidden">
                <div className="pointer-events-none absolute inset-0 opacity-[0.10] bg-[linear-gradient(115deg,transparent_38%,var(--cf-gold)_38%,var(--cf-gold)_39%,transparent_39%,transparent_60%,var(--cf-cream)_60%,var(--cf-cream)_60.6%,transparent_60.6%)]" />

                <p className="relative text-[10px] tracking-[0.22em] uppercase text-gold-400 font-black mb-6">
                  Sales System Command Board
                </p>

                <div className="relative space-y-5">
                  {[
                    { icon: Target, label: 'Struktur Tim & KPI', value: 'Locked' },
                    { icon: TrendingUp, label: 'Target & Insentif', value: 'Calibrated' },
                    { icon: Award, label: 'Lead Conversion', value: 'Scaled' },
                  ].map((row) => (
                    <div
                      key={row.label}
                      className="flex items-center justify-between gap-3 border-b border-white/10 pb-4 last:border-b-0 last:pb-0"
                    >
                      <div className="flex items-center gap-3">
                        <div className="rounded-md border border-gold-500/40 bg-gold-500/10 p-2 text-gold-400">
                          <row.icon className="h-4 w-4" />
                        </div>
                        <span className="text-sm md:text-base font-semibold text-zinc-100">
                          {row.label}
                        </span>
                      </div>
                      <span className="text-[11px] md:text-xs font-black uppercase tracking-[0.18em] text-gold-300">
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="relative mt-7 flex items-center justify-between border-t border-gold-500/30 pt-5">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-400">Bersama</p>
                    <p className="font-serif text-xl text-white mt-1">Coach Ferly F. Raya</p>
                  </div>
                  <span className="rounded-full border border-gold-500/40 bg-black/60 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-gold-300">
                    Owner-only
                  </span>
                </div>
              </div>

              <div className="absolute -bottom-6 right-2 z-20 max-w-[260px] bg-[var(--cf-cream)] px-5 py-4 text-zinc-950 shadow-2xl">
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-gold-700">
                  Senior head coach
                </p>
                <p className="mt-2 text-base font-black leading-tight">
                  Untuk owner yang sales team-nya butuh sistem, bukan motivasi.
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
