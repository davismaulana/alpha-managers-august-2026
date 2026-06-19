import React from 'react';
import { AlertTriangle, ArrowRight } from 'lucide-react';
import { FadeIn } from '../animations/FadeIn';
import { StaggerContainer } from '../animations/StaggerContainer';
import { motion } from 'framer-motion';
import { scrollToLeadForm } from '../../lib/constants';

const ConsequenceUrgency: React.FC = () => {
  const warnings = [
    'Target perusahaan akan semakin sulit tercapai jika manager hanya mengawasi aktivitas tanpa mampu mendorong performa tim.',
    'Karyawan yang potensial pun bisa kehilangan produktivitas jika dipimpin oleh manager tanpa kepemimpinan dan accountability kuat.',
    'Selama owner masih harus turun tangan menyelesaikan masalah tim setiap hari, fungsi manajerial organisasi belum berjalan optimal.',
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
              Target Perusahaan Akan Makin Sulit
              <br />
              <span className="text-[var(--cf-accent)]">Jika Manager Hanya Mengawasi Aktivitas</span>
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

          <FadeIn direction="up" delay={0.2}>
            <button
              type="button"
              onClick={scrollToLeadForm}
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-gold-500/40 px-6 text-sm font-black text-gold-300 transition hover:bg-[var(--cf-gold)] hover:text-black"
            >
              Daftarkan Manager Anda
              <ArrowRight className="h-4 w-4" />
            </button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export { ConsequenceUrgency };
