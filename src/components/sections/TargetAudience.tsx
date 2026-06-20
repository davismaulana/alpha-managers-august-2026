import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { FadeIn } from '../animations/FadeIn';
import { StaggerContainer } from '../animations/StaggerContainer';
import { motion } from 'framer-motion';

const Audience: React.FC = () => {
  const items = [
    'Business Owner yang sudah punya tim sales, tapi closing dan omzet masih naik turun',
    'Founder yang masih harus ikut turun tangan untuk mengejar target penjualan setiap bulan',
    'Owner yang ingin leads dari marketing bisa dikonversi menjadi revenue lebih maksimal',
    'Bisnis yang ingin memiliki struktur sales, target, dan sistem insentif yang lebih jelas',
    'Business Owner yang ingin scale revenue tanpa bergantung pada owner atau "sales jagoan"',
  ];

  return (
    <section className="py-20 md:py-28 bg-[var(--cf-ink)] md:min-h-screen md:flex md:flex-col md:justify-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-16 items-start">
          <FadeIn direction="up">
            <div>
              <p className="text-[11px] tracking-[0.22em] uppercase text-gold-400 font-black mb-4">
                Kurasi peserta
              </p>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight">
                Siapa yang Paling Cocok Hadir?
              </h2>
              <p className="mt-6 text-base md:text-lg text-zinc-400 leading-relaxed max-w-md">
                Webinar ini khusus untuk Anda jika:
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="space-y-3">
            {items.map((item, idx) => (
              <motion.div
                key={idx}
                variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}
                className="flex items-start gap-4 border-l-2 border-gold-500/40 bg-zinc-900/40 p-5 backdrop-blur-sm"
              >
                <CheckCircle2 className="h-5 w-5 text-gold-400 mt-0.5 shrink-0" />
                <p className="text-base md:text-lg text-zinc-100 leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export { Audience as TargetAudience };
export { Audience };
