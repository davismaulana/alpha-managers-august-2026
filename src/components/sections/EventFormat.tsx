import React from 'react';
import { Calendar, Clock, Lock, Users, MapPin, ArrowUpRight } from 'lucide-react';
import { FadeIn } from '../animations/FadeIn';

const EventDetails: React.FC = () => {
  const steps = [
    'Isi profil perusahaan dan kebutuhan manager.',
    'Tim Alpha Leaders meninjau kecocokan dan konteks organisasi.',
    'Tim menghubungi via WhatsApp untuk konfirmasi seat dan instruksi kehadiran.',
  ];

  const inclusions = [
    'Breakfast, lunch, dan coffee break.',
    'Handbook materi.',
    'Certificate of Attendance.',
    'Q&A dengan mentor.',
    'Pre-test dan post-test.',
    'Networking eksklusif managers.',
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
              Event details
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
            <div className="grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr]">
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
                  <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-400 mb-2">
                    Kurasi peserta
                  </p>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3">
                    Executive session untuk owner, HR, dan L&amp;D yang siap membenahi layer manager.
                  </h3>
                  <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
                    Tim Alpha Leaders akan menilai konteks bisnis Anda lebih dulu agar sesi tetap
                    relevan, padat, dan bisa langsung diturunkan menjadi tindakan nyata.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.3}>
          <div className="mt-10 max-w-5xl border border-white/10 bg-zinc-900/30 backdrop-blur-md p-8 md:p-10">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-5">
              Alur Pendaftaran
            </h3>
            <div className="grid md:grid-cols-3 gap-5">
              {steps.map((s, i) => (
                <div key={s} className="border border-gold-500/20 p-4">
                  <p className="text-[11px] tracking-[0.18em] uppercase text-gold-300 mb-2">
                    Step {i + 1}
                  </p>
                  <p className="text-sm text-zinc-100 leading-relaxed">{s}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export { EventDetails as EventFormat };
export { EventDetails };
