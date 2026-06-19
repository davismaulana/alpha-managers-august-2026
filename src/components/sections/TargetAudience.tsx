import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { FadeIn } from '../animations/FadeIn';
import { StaggerContainer } from '../animations/StaggerContainer';
import { motion } from 'framer-motion';

const Audience: React.FC = () => {
  const ownerItems = [
    'Meningkatkan performa manager dan team leader.',
    'Membangun middle management yang lebih kuat.',
    'Mengurangi ketergantungan tim terhadap owner.',
    'Menciptakan budaya accountability dalam organisasi.',
  ];

  const hrItems = [
    'Mengembangkan leadership capability para manager.',
    'Menyiapkan future leaders dalam perusahaan.',
    'Meningkatkan efektivitas tim melalui peningkatan kualitas leadership.',
    'Memberikan pembelajaran langsung dari praktisi bisnis yang berpengalaman menangani berbagai industri.',
  ];

  return (
    <section id="audience-fit" className="scroll-mt-24 bg-[var(--cf-ink)] py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-16 items-start">
          <FadeIn direction="up">
            <div>
              <p className="text-[11px] tracking-[0.22em] uppercase text-gold-400 font-black mb-4">
                Kurasi peserta
              </p>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight">
                Siapa yang Paling
                <br />
                Cocok Hadir?
              </h2>
              <p className="mt-6 text-base md:text-lg text-zinc-400 leading-relaxed max-w-md">
                Program ini disusun untuk owner, HR, dan Learning Development yang ingin melihat
                perubahan performa manager menjadi lebih nyata di lapangan.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-6">
            <StaggerContainer className="space-y-3">
              <motion.div variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}>
                <p className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-gold-300">
                  Untuk business owner yang ingin:
                </p>
              </motion.div>
              {ownerItems.map((item) => (
                <motion.div
                  key={item}
                  variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}
                  className="flex items-start gap-4 border-l-2 border-gold-500/40 bg-zinc-900/40 p-5 backdrop-blur-sm"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
                  <p className="text-base md:text-lg text-zinc-100 leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </StaggerContainer>

            <StaggerContainer className="space-y-3">
              <motion.div variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}>
                <p className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-gold-300">
                  Untuk HR dan Learning Development yang ingin:
                </p>
              </motion.div>
              {hrItems.map((item) => (
                <motion.div
                  key={item}
                  variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}
                  className="flex items-start gap-4 border-l-2 border-white/15 bg-zinc-900/30 p-5 backdrop-blur-sm"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
                  <p className="text-base md:text-lg text-zinc-100 leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Audience as TargetAudience };
export { Audience };
