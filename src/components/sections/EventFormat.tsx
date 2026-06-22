import React from 'react';
import { Calendar, Clock, Lock, Users, MapPin, ArrowUpRight } from 'lucide-react';
import { FadeIn } from '../animations/FadeIn';

const EventDetails: React.FC = () => {
  const inclusions = [
    'Breakfast, lunch, dan coffee break.',
    'Handbook materi.',
    'Sertifikat.',
    'Q&A dengan mentor.',
    'Pre-test dan post-test.',
    'Networking eksklusif managers.',
    'Potongan untuk kelas berikutnya.',
  ];

  return (
    <section
      id="event-details"
      className="py-20 md:py-28 bg-[var(--cf-ink)] relative overflow-hidden scroll-mt-24"
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,transparent_44%,rgba(212,175,106,0.18)_44%,rgba(212,175,106,0.18)_45%,transparent_45%)]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mb-10 md:mb-12">
          <FadeIn direction="up">
            <p className="text-[11px] tracking-[0.22em] uppercase text-gold-400 font-black mb-4">
              Detail event
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight">
              Detail Program
            </h2>
          </FadeIn>
        </div>

        <FadeIn direction="up" delay={0.1}>
          <div className="max-w-5xl mb-12">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 border border-gold-500/30 bg-gradient-to-br from-zinc-900/80 to-black/40 backdrop-blur-md p-8 md:p-10">
              <div className="flex flex-col items-start">
                <div className="rounded-md border border-gold-500/30 bg-gold-500/10 p-2 text-gold-400 mb-3">
                  <Lock className="w-4 h-4" />
                </div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-400">Format</p>
                  <p className="text-white font-bold text-sm md:text-base mt-1 leading-snug">Exclusive Community Sharing</p>
              </div>
              <div className="flex flex-col items-start">
                <div className="rounded-md border border-gold-500/30 bg-gold-500/10 p-2 text-gold-400 mb-3">
                  <Users className="w-4 h-4" />
                </div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-400">Akses</p>
                  <p className="text-white font-bold text-sm md:text-base mt-1 leading-snug">By Invitation Only</p>
              </div>
              <div className="flex flex-col items-start">
                <div className="rounded-md border border-gold-500/30 bg-gold-500/10 p-2 text-gold-400 mb-3">
                  <Calendar className="w-4 h-4" />
                </div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-400">Tanggal</p>
                <p className="text-white font-bold text-sm md:text-base mt-1 leading-snug">
                  Kamis, 13 Agustus 2026
                </p>
              </div>
              <div className="flex flex-col items-start">
                <div className="rounded-md border border-gold-500/30 bg-gold-500/10 p-2 text-gold-400 mb-3">
                  <Clock className="w-4 h-4" />
                </div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-400">Jam</p>
                <p className="text-white font-bold text-sm md:text-base mt-1 leading-snug">
                  09.00 – 17.00 WIB
                </p>
              </div>
              <div className="flex flex-col items-start col-span-2 md:col-span-1">
                <div className="rounded-md border border-gold-500/30 bg-gold-500/10 p-2 text-gold-400 mb-3">
                  <MapPin className="w-4 h-4" />
                </div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-400">Lokasi</p>
                <p className="text-white font-bold text-sm md:text-base mt-1 leading-snug">
                  Jakarta
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <div className="max-w-5xl border border-white/10 bg-zinc-900/30 backdrop-blur-md">
            <div className="grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr]">
              <div className="p-8 md:p-10 grid grid-cols-1 gap-3 border-b border-white/10 md:border-b-0 md:border-r">
                <h4 className="text-base md:text-lg font-black text-white mb-3">Termasuk</h4>
                {inclusions.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <ArrowUpRight className="h-4 w-4 mt-1 text-gold-400 shrink-0" />
                    <p className="text-sm text-zinc-200 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-400 mb-2">Investasi program</p>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3">
                    Promo khusus presale
                  </h3>
                  <div className="flex items-end gap-3">
                    <span className="text-lg font-semibold text-zinc-500 line-through md:text-2xl">
                      9.999.999
                    </span>
                    <span className="font-serif text-4xl font-bold text-gold-300 md:text-5xl">
                      7.999.999
                    </span>
                  </div>
                  <p className="mt-4 text-sm md:text-base text-zinc-400 leading-relaxed">
                    Untuk owner, HR, dan L&amp;D yang ingin membawa manager inti mereka ke sesi
                    yang lebih terarah, lebih eksklusif, dan langsung bisa diterjemahkan ke
                    performa lapangan.
                  </p>
                </div>
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
