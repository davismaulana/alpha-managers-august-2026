import React from 'react';
import { FadeIn } from '../animations/FadeIn';
import { scrollToLeadForm } from '../../lib/constants';
import {
  Calendar,
  Clock,
  Users,
  ArrowRight,
  Target,
  TrendingUp,
  Award,
  BriefcaseBusiness,
  MessageSquareText,
} from 'lucide-react';

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
                ALPHA MANAGERS | EXCLUSIVE COMMUNITY SHARING | BY INVITATION ONLY
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <h1 className="font-serif text-[2.35rem] md:text-6xl xl:text-7xl font-bold leading-[1.04] tracking-normal max-w-5xl">
                Ubah Manager Anda dari{' '}
                <span className="text-gold-400">Pemadam Kebakaran</span> menjadi{' '}
                <span className="text-gold-400">Penggerak Pertumbuhan</span>
              </h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.4}>
              <p className="mt-6 max-w-2xl text-base md:text-xl leading-7 md:leading-9 text-zinc-300">
                Saatnya perusahaan Anda memiliki manager yang benar-benar bisa diandalkan untuk
                mencapai hasil nyata di lapangan: memimpin tim, menjaga accountability, mendorong KPI,
                dan mengurangi ketergantungan harian pada owner.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.6}>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToLeadForm}
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[var(--cf-gold)] px-8 text-base md:text-lg font-black text-black transition hover:bg-[var(--cf-cream)] hover:text-[var(--cf-ink)] cursor-pointer"
                >
                  Daftarkan Manager Anda
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
              <p className="mt-3 max-w-md text-sm text-zinc-400">
                Isi profil perusahaan dan kebutuhan manager terlebih dahulu. Tim Alpha Leaders akan
                menghubungi Anda untuk konfirmasi seat dan kesesuaian program.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.8}>
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl">
                {[
                  { icon: Calendar, label: 'Kamis, 13 Agustus 2026' },
                  { icon: Clock, label: '09.00-17.00 WIB' },
                  { icon: BriefcaseBusiness, label: 'Jakarta' },
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

          <FadeIn direction="up" delay={0.2} duration={0.8}>
            <div className="relative pb-16 lg:pb-0">
              <div className="absolute -left-4 -top-4 h-full w-full border border-gold-500/30" />

              <div className="relative z-10 bg-gradient-to-br from-zinc-900 via-[#0a0a0a] to-zinc-950 border border-gold-500/30 p-8 md:p-10 rotate-[-2deg] shadow-[0_36px_100px_rgba(0,0,0,0.55)] overflow-hidden">
                <div className="pointer-events-none absolute inset-0 opacity-[0.10] bg-[linear-gradient(115deg,transparent_38%,var(--cf-gold)_38%,var(--cf-gold)_39%,transparent_39%,transparent_60%,var(--cf-cream)_60%,var(--cf-cream)_60.6%,transparent_60.6%)]" />

                <p className="relative text-[10px] tracking-[0.22em] uppercase text-gold-400 font-black mb-6">
                  Manager Performance Command Board
                </p>

                <div className="relative space-y-5">
                  {[
                    {
                      icon: Target,
                      label: 'KPI Discipline',
                      value: 'Target tidak lagi hanya dikejar saat owner turun tangan',
                    },
                    {
                      icon: TrendingUp,
                      label: 'Delegation Standard',
                      value: 'Pekerjaan selesai dengan standar yang jelas',
                    },
                    {
                      icon: Award,
                      label: 'Accountability Rhythm',
                      value: 'Meeting berubah menjadi komitmen dan follow-up',
                    },
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
                      <span className="max-w-[220px] text-right text-[11px] leading-relaxed text-gold-200 md:max-w-[260px] md:text-xs">
                        {row.value}
                      </span>
                    </div>
                  ))}
                  <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4 last:border-b-0 last:pb-0">
                    <div className="flex items-center gap-3">
                      <div className="rounded-md border border-gold-500/40 bg-gold-500/10 p-2 text-gold-400">
                        <MessageSquareText className="h-4 w-4" />
                      </div>
                      <span className="text-sm md:text-base font-semibold text-zinc-100">
                        Leadership Communication
                      </span>
                    </div>
                    <span className="max-w-[220px] text-right text-[11px] leading-relaxed text-gold-200 md:max-w-[260px] md:text-xs">
                      Arahan, feedback, dan ekspektasi lebih tegas
                    </span>
                  </div>
                </div>

                <div className="relative mt-7 flex items-center justify-between border-t border-gold-500/30 pt-5">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-400">
                      Dipandu oleh
                    </p>
                    <p className="font-serif text-lg text-white mt-1">Coach Ferly F. Raya</p>
                    <p className="text-sm text-zinc-400">dan Shoeb Kagda</p>
                  </div>
                  <span className="rounded-full border border-gold-500/40 bg-black/60 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-gold-300">
                    Invitation only
                  </span>
                </div>
              </div>

              <div className="absolute -bottom-8 right-2 z-20 max-w-[260px] bg-[var(--cf-cream)] px-5 py-4 text-zinc-950 shadow-2xl">
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-gold-700">
                  Coaching untuk manager
                </p>
                <p className="mt-2 text-sm font-black leading-tight">
                  Fokus pada disiplin KPI, delegasi, dan eksekusi tim tanpa owner.
                </p>
              </div>

              <div className="absolute -right-2 top-6 z-20 w-[210px] border border-gold-500/30 bg-[linear-gradient(180deg,rgba(9,9,9,0.98),rgba(24,20,11,0.98))] p-4 shadow-2xl sm:-right-8 sm:w-[260px]">
                <div className="aspect-[4/5] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(212,175,106,0.14),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] p-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gold-300">
                    Event Credential
                  </p>
                  <div className="mt-5 border-t border-white/10 pt-4">
                    <p className="font-serif text-xl leading-tight text-white">Alpha Managers</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.18em] text-zinc-400">
                      Exclusive Community Sharing
                    </p>
                  </div>
                  <div className="mt-6 space-y-3 text-sm text-zinc-200">
                    <div className="border-b border-white/10 pb-3">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                        Tanggal
                      </p>
                      <p className="mt-1 font-semibold">Kamis, 13 Agustus 2026</p>
                    </div>
                    <div className="border-b border-white/10 pb-3">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">Jam</p>
                      <p className="mt-1 font-semibold">09.00-17.00 WIB</p>
                    </div>
                    <div className="border-b border-white/10 pb-3">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                        Lokasi
                      </p>
                      <p className="mt-1 font-semibold">Jakarta</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                        Access
                      </p>
                      <p className="mt-1 font-semibold text-gold-300">By invitation only</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export { Hero };
