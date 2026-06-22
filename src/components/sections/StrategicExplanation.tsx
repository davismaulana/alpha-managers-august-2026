import React from 'react';
import { FadeIn } from '../animations/FadeIn';

const statements = [
  'Problem utamanya bukan manager kurang sibuk, tetapi mereka belum memimpin tim dengan ritme KPI dan accountability yang jelas.',
  'Saat delegasi tidak diikuti standar eksekusi, owner tetap tersedot kembali ke operasional harian.',
  'Perusahaan membutuhkan manager yang mampu menerjemahkan target menjadi tindakan, follow-up, dan hasil yang konsisten.',
];

const StrategicExplanation: React.FC = () => {
  return (
    <section className="bg-black py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <FadeIn direction="up">
            <div className="max-w-2xl">
              <p className="text-[11px] tracking-[0.22em] uppercase text-gold-400 font-black mb-4">
                Akar persoalan
              </p>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight">
                Ini Bukan Problem Training Biasa.
                <br />
                <span className="text-gold-400">Ini Problem Leadership Layer.</span>
              </h2>
              <p className="mt-6 text-base md:text-lg text-zinc-400 leading-relaxed">
                Ketika owner masih harus menutup gap eksekusi setiap hari, artinya organisasi belum
                memiliki lapisan manager yang benar-benar bisa membawa target menjadi tindakan nyata.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <div className="relative overflow-hidden border border-gold-500/30 bg-[linear-gradient(145deg,rgba(8,8,8,0.98),rgba(28,23,14,0.98))] p-8 md:p-10">
              <div className="pointer-events-none absolute inset-0 opacity-[0.08] bg-[linear-gradient(122deg,transparent_30%,var(--cf-gold)_30%,var(--cf-gold)_31%,transparent_31%,transparent_66%,var(--cf-cream)_66%,var(--cf-cream)_66.8%,transparent_66.8%)]" />
              <div className="relative space-y-4">
                {statements.map((statement) => (
                  <div
                    key={statement}
                    className="border-l-2 border-gold-500/60 bg-white/[0.03] px-5 py-4"
                  >
                    <p className="text-base md:text-lg leading-relaxed text-zinc-100">{statement}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export { StrategicExplanation };
