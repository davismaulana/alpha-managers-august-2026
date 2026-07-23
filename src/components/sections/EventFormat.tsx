import React from 'react';
import { Button } from '../ui/Button';
import { ArrowRight, Calendar, Check, Clock, MapPin } from 'lucide-react';
import { FadeIn } from '../animations/FadeIn';
import { openRegistrationCTA } from '../../lib/constants';

const EventFormat: React.FC = () => {
  const tickets = [
    'Lunch & 2x Coffee Break',
    'Handbook Materi',
    'Sertifikat',
    'Q&A dengan Mentor',
    'Pre-Test & Post-Test',
    'Networking Eksklusif Managers',
    'Potongan untuk Kelas Berikutnya'
  ];

  return (
    <section className="py-32 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-gold-900/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-zinc-800/20 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <FadeIn direction="up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Detail Event & Investasi Program
            </h2>
          </FadeIn>
        </div>

        <FadeIn direction="up" delay={0.16}>
          <div className="max-w-5xl mx-auto">
            <div className="rounded-[32px] border border-gold-500/20 bg-[linear-gradient(180deg,#17181d_0%,#111216_100%)] p-8 md:p-10 shadow-[0_30px_100px_-40px_rgba(0,0,0,0.8)]">
              <div className="border-b border-gold-500/20 pb-8 md:pb-10">
                <p className="text-center text-xs tracking-[0.34em] text-gold-300 uppercase mb-5">
                  Exclusive Community Sharing
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="flex flex-col items-center">
                    <MapPin className="w-8 h-8 text-gold-400 mb-3" />
                    <p className="text-gold-200 font-medium text-lg">Aloft Hotel by Marriott, Jakarta Barat</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Calendar className="w-8 h-8 text-gold-400 mb-3" />
                    <p className="text-gold-200 font-medium text-lg">Kamis, 13 Agustus 2026</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Clock className="w-8 h-8 text-gold-400 mb-3" />
                    <p className="text-gold-200 font-medium text-lg">09.00 – 17.00 WIB</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-10 pt-8 md:pt-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold-300">
                    Premium Offline Jakarta
                  </p>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-zinc-300">
                    Executive session intensif untuk membentuk manager yang lebih kuat dalam memimpin tim, menjaga ritme kerja, dan mengunci hasil di lapangan.
                  </p>

                  <div className="mt-8 flex flex-wrap items-end gap-4">
                    <span className="text-5xl md:text-6xl font-black leading-none text-gold-400">
                      3.999.999
                    </span>
                    <span className="pb-1 text-xl text-zinc-500 line-through">
                      7.999.999
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                    Harga final untuk batch saat ini. Tempat terbatas dan konfirmasi peserta dilakukan langsung via WhatsApp.
                  </p>

                  <div className="mt-8">
                    <Button
                      className="h-14 w-full rounded-2xl bg-gradient-to-r from-gold-500 to-gold-600 text-black hover:from-gold-400 hover:to-gold-500 shadow-none"
                      onClick={openRegistrationCTA}
                    >
                      Daftar via WA <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold-300">
                    Tiket Termasuk
                  </p>
                  <div className="mt-6 grid gap-4">
                    {tickets.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-4 rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-4"
                      >
                        <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-500 text-black">
                          <Check className="h-3.5 w-3.5" />
                        </div>
                        <p className="text-base leading-relaxed text-zinc-100">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export { EventFormat };
