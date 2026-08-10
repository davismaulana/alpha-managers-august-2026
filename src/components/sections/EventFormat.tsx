import React from 'react';
import { Button } from '../ui/Button';
import { ArrowRight, Calendar, Clock, MapPin } from 'lucide-react';
import { FadeIn } from '../animations/FadeIn';
import { openRegistrationCTA } from '../../lib/constants';

const EventFormat: React.FC = () => {
  const tickets = [
    'Breakfast, Lunch & Coffee Break',
    'Handbook Materi',
    'Sertifikat',
    'Q&A dengan Mentor',
    'Pre-Test & Post-Test',
    'Networking Eksklusif Managers',
    'Potongan untuk Kelas Berikutnya'
  ];

  return (
    <section className="py-32 bg-zinc-950 relative overflow-hidden">

      {/* Background Elements */}
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

        {/* Event Details Banner */}
        <FadeIn direction="up" delay={0.1}>
          <div className="max-w-4xl mx-auto mb-16">
            <div className="overflow-hidden rounded-[28px] border border-gold-500/30 bg-[linear-gradient(155deg,rgba(18,15,9,0.98),rgba(35,28,16,0.94))] shadow-[0_35px_80px_-35px_rgba(212,175,106,0.35)]">
              <div className="border-b border-gold-500/20 px-8 py-7 md:px-10">
                <p className="text-center text-xs tracking-[0.34em] text-gold-300 uppercase mb-5">Exclusive Community Sharing</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="flex flex-col items-center">
                    <MapPin className="w-8 h-8 text-gold-400 mb-3" />
                    <p className="text-gold-200 font-medium text-lg">Aloft Hotel by Marriott, Jakarta Barat</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Calendar className="w-8 h-8 text-gold-400 mb-3" />
                    <p className="text-gold-200 font-medium text-lg">Kamis, 1 Oktober 2026</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Clock className="w-8 h-8 text-gold-400 mb-3" />
                    <p className="text-gold-200 font-medium text-lg">09.00 – 17.00 WIB</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-0">
                <div className="border-b border-gold-500/15 lg:border-b-0 lg:border-r px-8 py-8 md:px-10 md:py-10 text-center lg:text-left">
                  <div className="inline-flex rounded-full border border-green-400/25 bg-green-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.24em] text-green-300">
                    By Invitation Only · Free
                  </div>
                  <p className="mt-6 text-xs tracking-[0.32em] text-gold-300 uppercase">Investasi Program</p>
                  <p className="mt-2 text-xs tracking-[0.32em] text-gold-300 uppercase">Promo Khusus Presale</p>
                  <div className="mt-5 flex items-center justify-center gap-3 lg:justify-start">
                    <span className="text-zinc-500 line-through text-xl md:text-2xl">9.999.999</span>
                    <span className="text-white font-bold text-4xl md:text-5xl">7.999.999</span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-zinc-300">
                    Mengacu pada brief client di Google Doc: invitation session ini gratis untuk peserta terpilih, dan penawaran program lanjutannya menggunakan harga presale berikut.
                  </p>
                </div>
                <div className="px-8 py-8 md:px-10 md:py-10">
                  <p className="text-xs tracking-[0.32em] text-gold-300 uppercase mb-5 text-center lg:text-left">Tiket Termasuk</p>
                  <div className="grid gap-3">
                    {tickets.map((item) => (
                      <div key={item} className="rounded-2xl border border-white/8 bg-white/5 px-4 py-3.5 text-sm text-zinc-200">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
        <FadeIn direction="up" delay={0.4}>
          <div className="flex justify-center">
            <Button
              variant="outline"
              className="w-fit border-gold-600 text-gold-400 hover:bg-gold-600 hover:text-white"
              onClick={openRegistrationCTA}
            >
              Daftar via WA <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export { EventFormat };
