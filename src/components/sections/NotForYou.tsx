import React from 'react';
import { X } from 'lucide-react';
import { FadeIn } from '../animations/FadeIn';
import { StaggerContainer } from '../animations/StaggerContainer';
import { motion } from 'framer-motion';

const NotForYou: React.FC = () => {
  const items = [
    'Belum siap membangun sales team dengan target, KPI, dan sistem yang lebih terukur.',
    'Mencari strategi instan tanpa membangun fondasi sales team yang kuat.',
    'Tidak ingin bisnis memiliki sistem penjualan yang berjalan lebih konsisten tanpa bergantung penuh pada owner.',
  ];

  return (
    <section className="py-20 md:py-28 bg-black border-y border-white/5 md:min-h-screen md:flex md:flex-col md:justify-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl">
          <FadeIn direction="up">
            <p className="text-[11px] tracking-[0.22em] uppercase text-[var(--cf-accent)] font-black mb-4">
              Filter peserta
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight">
              Bukan Untuk Anda Jika...
            </h2>
          </FadeIn>

          <StaggerContainer className="mt-10 space-y-4">
            {items.map((item, idx) => (
              <motion.div
                key={idx}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="flex items-start gap-4 border-l-2 border-[var(--cf-accent)]/80 bg-[var(--cf-accent)]/[0.06] px-6 py-5"
              >
                <X className="h-5 w-5 text-[var(--cf-accent)] mt-1 shrink-0" />
                <p className="text-base md:text-lg text-zinc-200 leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export { NotForYou };
