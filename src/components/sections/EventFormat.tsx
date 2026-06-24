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
    <section className="py-32 bg-zinc-950 relative overflow-hidden md:min-h-screen md:flex md:flex-col md:justify-center">

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-gold-900/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-zinc-800/20 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        <div className="text-center mb-12">
          <FadeIn direction="up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Event Details
            </h2>
          </FadeIn>
        </div>

        {/* Event Details Banner */}
        <FadeIn direction="up" delay={0.1}>
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-r from-gold-600/20 to-gold-900/10 border border-gold-500/30 rounded-2xl p-8 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <MapPin className="w-8 h-8 text-gold-400 mb-3" />
                  <p className="text-gold-200 font-medium text-lg">Jakarta</p>
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
              <div className="text-center mt-6 pt-6 border-t border-gold-500/20">
                <p className="text-white font-bold text-lg md:text-xl">EXCLUSIVE COMMUNITY SHARING · BY INVITATION ONLY · FREE</p>
              </div>
              <div className="mt-6 grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-4">
                <div className="rounded-2xl border border-white/10 bg-black/30 p-5 text-center lg:text-left">
                  <p className="text-xs tracking-[0.3em] text-gold-300 uppercase mb-2">Investasi Program</p>
                  <p className="text-xs tracking-[0.3em] text-gold-300 uppercase mb-4">Promo Khusus Presale</p>
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-zinc-500 line-through text-xl md:text-2xl">9.999.999</span>
                    <span className="text-white font-bold text-3xl md:text-4xl">7.999.999</span>
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <p className="text-xs tracking-[0.3em] text-gold-300 uppercase mb-4 text-center">Tiket Termasuk</p>
                  <div className="grid gap-3">
                    {tickets.map((item) => (
                      <div key={item} className="rounded-xl border border-white/8 bg-white/5 px-4 py-3 text-sm text-zinc-200">
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
              Apply untuk Undangan <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export { EventFormat };
