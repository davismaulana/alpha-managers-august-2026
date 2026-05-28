import React from 'react';
import { FadeIn } from '../animations/FadeIn';
import { StaggerContainer } from '../animations/StaggerContainer';
import { motion } from 'framer-motion';
import { TrendingDown, Activity, Users2, ShieldAlert, UserCog } from 'lucide-react';
import { scrollToLeadForm } from '../../lib/constants';
import { ArrowRight } from 'lucide-react';

const Pain: React.FC = () => {
  const pains = [
    {
      icon: TrendingDown,
      title: 'Budget marketing tinggi, closing rendah',
      desc: 'Budget marketing terus keluar, tetapi leads yang masuk belum konsisten berubah menjadi closing.',
    },
    {
      icon: Activity,
      title: 'Performa sales naik turun',
      desc: 'Performa sales team naik turun, sehingga omzet sulit stabil dan sulit diprediksi.',
    },
    {
      icon: Users2,
      title: 'Tim sibuk, revenue tidak ikut tumbuh',
      desc: 'Tim terlihat sibuk setiap hari, tetapi hasil revenue tidak ikut bertumbuh.',
    },
    {
      icon: ShieldAlert,
      title: 'Mental tim turun setelah penolakan',
      desc: 'Baru beberapa kali ditolak, mental tim turun dan follow-up mulai longgar.',
    },
    {
      icon: UserCog,
      title: 'Owner masih turun mengejar closing',
      desc: 'Owner masih harus ikut turun tangan untuk mendorong sales mengejar target.',
    },
  ];

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-[var(--cf-ink)] via-zinc-950 to-[var(--cf-ink)] md:min-h-screen md:flex md:flex-col md:justify-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-12 md:mb-16">
          <FadeIn direction="up">
            <p className="text-[11px] tracking-[0.22em] uppercase text-gold-400 font-black mb-4">
              Diagnosa
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight">
              Anda Mungkin Sedang
              <br />
              Mengalami Masalah Ini
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="mt-6 text-base md:text-lg text-zinc-400 max-w-2xl leading-relaxed">
              Masalahnya bukan sekadar kurang leads atau kurang orang. Sering kali revenue naik
              turun karena sales team belum bekerja dengan sistem yang sama.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-6xl">
          {pains.map((p, idx) => (
            <motion.div
              key={idx}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className={[
                'group relative border border-white/10 bg-zinc-900/40 backdrop-blur-sm p-6 md:p-7 transition-colors hover:bg-zinc-900/70',
                idx === 4 ? 'md:col-span-2' : '',
              ].join(' ')}
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-[var(--cf-accent)]/70" />
              <div className="flex items-start gap-4">
                <div className="rounded-md border border-gold-500/30 bg-gold-500/10 p-2.5 text-gold-400 shrink-0">
                  <p.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-bold text-white mb-1.5">{p.title}</h3>
                  <p className="text-sm md:text-base text-zinc-400 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        <FadeIn direction="up" delay={0.3}>
          <div className="mt-12 md:mt-16 max-w-4xl">
            <div className="relative border border-gold-500/30 bg-black/50 backdrop-blur-md p-8 md:p-10">
              <p className="text-lg md:text-2xl font-semibold text-white leading-relaxed">
                Jika poin-poin ini terasa familiar, bisnis Anda kemungkinan belum memiliki{' '}
                <span className="text-gold-400">sales system yang scalable</span>. Owner masih
                menjadi penopang utama revenue.
              </p>
              <button
                type="button"
                onClick={scrollToLeadForm}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--cf-gold)] px-6 py-3 text-sm font-black text-black transition hover:bg-[var(--cf-cream)] hover:text-[var(--cf-ink)]"
              >
                Daftar Sekarang <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export { Pain as ProblemStatement };
export { Pain };
