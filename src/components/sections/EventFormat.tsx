import React from 'react';
import { ArrowRight, Calendar, Clock, Video, Lock, Users } from 'lucide-react';
import { FadeIn } from '../animations/FadeIn';
import { scrollToLeadForm } from '../../lib/constants';

const EventDetails: React.FC = () => {
  const steps = [
    {
      step: '01',
      label: 'Mengisi Owner Profile.',
      sub: 'Lengkapi data bisnis, skala revenue, dan tantangan sales team yang sedang dihadapi.',
    },
    {
      step: '02',
      label: 'Melalui internal assessment.',
      sub: 'Tim Alpha Leaders meninjau konteks bisnis untuk memastikan kecocokan diskusi.',
    },
    {
      step: '03',
      label: 'Undangan dikirim jika profil bisnis sesuai dengan konteks diskusi.',
      sub: 'Link Zoom eksklusif dikirim hanya untuk peserta yang relevan.',
    },
  ];

  return (
    <section
      id="event-details"
      className="py-20 md:py-28 bg-[var(--cf-ink)] relative overflow-hidden scroll-mt-24 md:min-h-screen md:flex md:flex-col md:justify-center"
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,transparent_44%,rgba(212,175,106,0.18)_44%,rgba(212,175,106,0.18)_45%,transparent_45%)]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mb-10 md:mb-12">
          <FadeIn direction="up">
            <p className="text-[11px] tracking-[0.22em] uppercase text-gold-400 font-black mb-4">
              Event details
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight">
              Event Details
            </h2>
          </FadeIn>
        </div>

        <FadeIn direction="up" delay={0.1}>
          <div className="max-w-5xl mb-12">
            <div className="border border-gold-500/30 bg-gradient-to-br from-zinc-900/80 to-black/40 backdrop-blur-md p-8 md:p-10">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                <div className="flex flex-col items-start">
                  <div className="rounded-md border border-gold-500/30 bg-gold-500/10 p-2 text-gold-400 mb-3">
                    <Lock className="w-4 h-4" />
                  </div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-400">Format</p>
                  <p className="text-white font-bold text-sm md:text-base mt-1 leading-snug">
                    Exclusive Community Sharing
                  </p>
                </div>
                <div className="flex flex-col items-start">
                  <div className="rounded-md border border-gold-500/30 bg-gold-500/10 p-2 text-gold-400 mb-3">
                    <Users className="w-4 h-4" />
                  </div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-400">Akses</p>
                  <p className="text-white font-bold text-sm md:text-base mt-1 leading-snug">
                    By Invitation Only
                  </p>
                </div>
                <div className="flex flex-col items-start">
                  <div className="rounded-md border border-gold-500/30 bg-gold-500/10 p-2 text-gold-400 mb-3">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-400">Tanggal</p>
                  <p className="text-white font-bold text-sm md:text-base mt-1 leading-snug">
                    Kamis, 25 Juni 2026
                  </p>
                </div>
                <div className="flex flex-col items-start">
                  <div className="rounded-md border border-gold-500/30 bg-gold-500/10 p-2 text-gold-400 mb-3">
                    <Clock className="w-4 h-4" />
                  </div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-400">Jam</p>
                  <p className="text-white font-bold text-sm md:text-base mt-1 leading-snug">
                    08.00 – 12.00 WIB
                  </p>
                </div>
                <div className="flex flex-col items-start col-span-2 md:col-span-1">
                  <div className="rounded-md border border-gold-500/30 bg-gold-500/10 p-2 text-gold-400 mb-3">
                    <Video className="w-4 h-4" />
                  </div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-400">Venue</p>
                  <p className="text-white font-bold text-sm md:text-base mt-1 leading-snug">
                    Online via Zoom
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <div className="max-w-5xl border border-white/10 bg-zinc-900/30 backdrop-blur-md">
            <div className="grid grid-cols-1 md:grid-cols-5">
              <div className="md:col-span-2 p-8 md:p-10 border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-center">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-4">
                  Alur Peserta
                </h3>
                <p className="text-sm md:text-base text-zinc-400 mb-6 leading-relaxed">
                  Kami menjaga kualitas forum dengan proses kurasi yang ketat namun transparan.
                </p>
                <button
                  type="button"
                  onClick={scrollToLeadForm}
                  className="inline-flex w-fit items-center gap-2 rounded-full border border-gold-500/40 px-6 py-3 text-sm font-black text-gold-300 transition hover:bg-[var(--cf-gold)] hover:text-black"
                >
                  Daftar Sekarang <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              <div className="md:col-span-3 p-8 md:p-10 grid grid-cols-1 gap-6">
                {steps.map((s) => (
                  <div key={s.step} className="flex items-start gap-5">
                    <span className="font-serif text-4xl font-bold text-zinc-700 leading-none select-none">
                      {s.step}
                    </span>
                    <div>
                      <h4 className="text-base md:text-lg font-bold text-white mb-1">{s.label}</h4>
                      <p className="text-sm text-zinc-500 leading-relaxed">{s.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export { EventDetails as EventFormat };
export { EventDetails };
