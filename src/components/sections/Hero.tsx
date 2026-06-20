import React from 'react';
import { Button } from '../ui/Button';
import { FadeIn } from '../animations/FadeIn';
import { scrollToLeadForm } from '../../lib/constants';
import { Calendar, Clock, Users, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full bg-black pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_10%,rgba(229,200,138,0.18),transparent_32%),linear-gradient(135deg,rgba(0,0,0,1)_0%,rgba(17,24,39,0.92)_62%,rgba(229,219,199,0.18)_100%)]" />
      <div className="absolute left-0 top-24 h-24 w-full -skew-y-3 bg-[#E5DBC7] opacity-10" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.02fr_0.98fr] gap-10 lg:gap-14 items-center">
          <div>
            <FadeIn direction="up" delay={0}>
              <p className="text-xs md:text-sm font-black tracking-normal uppercase text-gold-300 mb-5">
                Alpha Leaders Community · August 2026
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <h1 className="font-serif text-5xl md:text-7xl xl:text-8xl font-bold leading-[0.92] tracking-normal max-w-5xl">
                Alpha Managers
              </h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.4}>
              <p className="mt-6 max-w-2xl text-lg md:text-2xl leading-8 md:leading-10 text-zinc-300">
                Program leadership accountability untuk membentuk manager yang memimpin tim, menjaga KPI,
                mengeksekusi follow-up, dan mengurangi ketergantungan harian pada owner.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.6}>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  className="min-h-14 px-8 text-base md:text-lg cursor-pointer"
                  onClick={scrollToLeadForm}
                >
                  Apply via form
                </Button>
                <Button
                  variant="outline"
                  className="min-h-14 px-8 text-base md:text-lg cursor-pointer"
                  onClick={() =>
                    document.getElementById('event-details')?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  Lihat format event
                </Button>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.8}>
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl">
                {[
                  { icon: Calendar, label: '13 Agustus 2026' },
                  { icon: Clock, label: '09.00-17.00 WIB' },
                  { icon: MapPin, label: 'Jakarta' },
                  { icon: Users, label: 'By invitation only' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.05] px-4 py-3 text-sm font-bold text-gold-200">
                    <item.icon className="h-5 w-5 shrink-0" />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          <FadeIn direction="up" delay={0.2} duration={0.8}>
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-full w-full border border-gold-500/30" />

              <div className="relative z-10 rotate-[-2deg] border border-white/10 bg-[linear-gradient(160deg,rgba(10,10,10,0.96),rgba(36,28,15,0.92))] p-7 shadow-[0_36px_100px_rgba(0,0,0,0.5)]">
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-gold-300">
                  August focus
                </p>
                <div className="mt-6 border-y border-white/10 py-6">
                  <p className="font-serif text-3xl leading-tight text-white">
                    Ubah Manager Anda dari Pemadam Kebakaran
                  </p>
                  <p className="mt-3 text-lg font-semibold leading-snug text-gold-300">
                    Menjadi Penggerak Pertumbuhan
                  </p>
                </div>
                <div className="mt-6 space-y-4 text-sm text-zinc-200">
                  <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
                    <span className="uppercase tracking-[0.16em] text-zinc-500">Target</span>
                    <span className="max-w-[230px] text-right">Manager yang lebih kuat di KPI, delegation, dan accountability.</span>
                  </div>
                  <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
                    <span className="uppercase tracking-[0.16em] text-zinc-500">Audience</span>
                    <span className="max-w-[230px] text-right">Owner, HR, dan Learning Development yang menyiapkan leadership layer.</span>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <span className="uppercase tracking-[0.16em] text-zinc-500">Access</span>
                    <span className="max-w-[230px] text-right text-gold-200">By invitation only</span>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 right-2 z-20 max-w-[250px] bg-[#E5DBC7] px-5 py-4 text-zinc-950 shadow-2xl">
                <p className="text-xs font-black uppercase tracking-normal text-gold-700">Trust proof</p>
                <p className="mt-2 text-lg font-black leading-tight">
                  Owner, HR, dan manager didorong ke implementasi, bukan teori.
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
