import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { FadeIn } from '../animations/FadeIn';
import { StaggerContainer } from '../animations/StaggerContainer';
import { motion } from 'framer-motion';

const ConsequenceUrgency: React.FC = () => {
  const warnings = [
    'Revenue sulit stabil jika performa sales team terus naik turun dan tidak memiliki sistem yang jelas.',
    'Leads dan budget marketing akan terus terbuang jika tim sales gagal mengubahnya menjadi closing.',
    'Selama owner masih harus mengejar closing setiap hari, bisnis belum memiliki sales system yang benar-benar kuat.',
  ];

  return (
    <section className="py-20 md:py-28 bg-[var(--cf-ink)] md:min-h-screen md:flex md:flex-col md:justify-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl">
          <FadeIn direction="up">
            <p className="text-[11px] tracking-[0.22em] uppercase text-[var(--cf-accent)] font-black mb-4">
              Konsekuensi
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight">
              Jika Sales Team Tidak Punya Sistem,
              <br />
              <span className="text-[var(--cf-accent)]">Revenue Akan Tetap Naik Turun</span>
            </h2>
          </FadeIn>

          <StaggerContainer className="mt-10 space-y-4">
            {warnings.map((w, idx) => (
              <motion.div
                key={idx}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="flex items-start gap-4 bg-zinc-900/60 border border-[var(--cf-accent)]/30 p-5 md:p-6"
              >
                <AlertTriangle className="h-5 w-5 text-[var(--cf-accent)] mt-1 shrink-0" />
                <p className="text-base md:text-lg text-zinc-100 leading-relaxed">{w}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export { ConsequenceUrgency };
