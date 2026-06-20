import React from 'react';
import { Building2, Gauge, Target, TrendingUp, Users } from 'lucide-react';
import { FadeIn } from '../animations/FadeIn';
import { StaggerContainer } from '../animations/StaggerContainer';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { openRegistrationCTA } from '../../lib/constants';

const LearningOutcomes: React.FC = () => {
  const modules = [
    {
      number: '01',
      icon: TrendingUp,
      title: '1. Cara Membuat Struktur Tim Sales yang Lebih Efektif',
      desc: 'Memahami pembagian role agar sales bekerja lebih fokus dan produktif.',
    },
    {
      number: '02',
      icon: Building2,
      title: '2. Cara Menyusun Target & Sistem Insentif Sales',
      desc: 'Membuat target dan komisi yang mampu meningkatkan motivasi sekaligus menjaga profit bisnis.',
    },
    {
      number: '03',
      icon: Target,
      title: '3. Cara Meningkatkan Conversion Leads Menjadi Revenue',
      desc: 'Mengoptimalkan leads dari marketing agar lebih banyak berubah menjadi closing dan omzet.',
    },
    {
      number: '04',
      icon: Gauge,
      title: '4. Exclusive Multi-Branch Sales Team Case Study',
      desc: 'Belajar langsung dari studi kasus sistem sales team pada bisnis dengan banyak cabang dan tim sales yang berkembang.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-zinc-950 md:min-h-screen md:flex md:flex-col md:justify-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-12 md:mb-14">
          <FadeIn direction="up">
            <p className="text-[11px] tracking-[0.22em] uppercase text-gold-400 font-black mb-4">
              Materi sesi
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight">
              Apa yang Akan Anda Pelajari?
            </h2>
            <p className="mt-5 text-base md:text-lg text-zinc-400 leading-relaxed">
              Dalam sesi ini Anda akan memahami:
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="grid grid-cols-1 gap-4 max-w-5xl mb-12">
          {modules.map((m, idx) => (
            <motion.div
              key={idx}
              variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
              className="group relative border border-white/10 bg-zinc-900/40 hover:bg-zinc-900/70 transition-all"
            >
              <div className="absolute top-0 left-0 h-full w-1 bg-[var(--cf-gold)]" />
              <div className="p-6 md:p-7 flex items-start gap-5 md:gap-7">
                <span className="font-serif text-4xl md:text-5xl font-bold text-zinc-700 group-hover:text-gold-500/50 transition-colors leading-none select-none">
                  {m.number}
                </span>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-md bg-gold-500/10 border border-gold-500/30 flex items-center justify-center">
                      <m.icon className="w-4 h-4 text-gold-400" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white">{m.title}</h3>
                  </div>
                  <p className="text-sm md:text-base text-zinc-400 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        <FadeIn direction="up" delay={0.3}>
          <div className="max-w-5xl">
            <button
              type="button"
              onClick={openRegistrationCTA}
              className="inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-zinc-900/60 px-6 py-3 text-sm font-black text-gold-300 transition hover:bg-[var(--cf-gold)] hover:text-black"
            >
              Daftar Sekarang <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export { LearningOutcomes as WhatYoullLearn };
export { LearningOutcomes };
