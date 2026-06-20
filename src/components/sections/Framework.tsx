import React from 'react';
import { FadeIn } from '../animations/FadeIn';
import { ArrowRight, GitBranch, Gauge, Workflow } from 'lucide-react';
import { openRegistrationCTA } from '../../lib/constants';

const Framework: React.FC = () => {
  const rows = [
    {
      number: 'I',
      icon: GitBranch,
      title: 'The Scalable Sales Team Structure',
      desc: 'The Scalable Sales Team Structure: membangun tim sales yang tidak bergantung pada owner',
    },
    {
      number: 'II',
      icon: Gauge,
      title: 'The Sales Target & Incentive Framework',
      desc: 'The Sales Target & Incentive Framework: sistem target dan komisi untuk meningkatkan performa tim sales',
    },
    {
      number: 'III',
      icon: Workflow,
      title: 'The Lead Conversion Strategy',
      desc: 'The Lead Conversion Strategy: strategi meningkatkan conversion leads menjadi closing yang lebih konsisten',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-zinc-950 to-[var(--cf-ink)] md:min-h-screen md:flex md:flex-col md:justify-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-12 md:mb-14">
          <FadeIn direction="up">
            <p className="text-[11px] tracking-[0.22em] uppercase text-gold-400 font-black mb-4">
              Framework
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight">
              Akan Membongkar Framework untuk Membangun Sales Team:
            </h2>
          </FadeIn>
        </div>

        <div className="max-w-6xl">
          <div className="relative border border-gold-500/30 bg-black/40 backdrop-blur-md overflow-hidden">
            <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[linear-gradient(120deg,transparent_46%,var(--cf-cream)_46%,var(--cf-cream)_46.4%,transparent_46.4%,transparent_64%,var(--cf-gold)_64%,var(--cf-gold)_64.4%,transparent_64.4%)]" />

            <div className="relative grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
              {rows.map((row) => (
                <div key={row.number} className="p-8 md:p-10">
                  <div className="flex items-center gap-4 mb-5">
                    <span className="font-serif text-3xl md:text-4xl font-bold text-gold-400 leading-none">
                      {row.number}
                    </span>
                    <div className="rounded-md border border-gold-500/30 bg-gold-500/10 p-2 text-gold-400">
                      <row.icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-white mb-3 leading-snug">
                    {row.title}
                  </h3>
                  <p className="text-sm md:text-base text-zinc-400 leading-relaxed">{row.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <FadeIn direction="up" delay={0.2}>
            <button
              type="button"
              onClick={openRegistrationCTA}
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-[var(--cf-gold)] px-6 py-3 text-sm font-black text-black transition hover:bg-[var(--cf-cream)] hover:text-[var(--cf-ink)]"
            >
              Daftar Sekarang <ArrowRight className="h-4 w-4" />
            </button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export { Framework };
