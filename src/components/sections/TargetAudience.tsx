import React from 'react';
import { Card } from '../ui/Card';
import { CheckCircle2 } from 'lucide-react';
import { FadeIn } from '../animations/FadeIn';
import { StaggerContainer } from '../animations/StaggerContainer';
import { motion } from 'framer-motion';

const TargetAudience: React.FC = () => {
  const audiencePoints = [
    'Meningkatkan performa manager dan team leader',
    'Membangun middle management yang lebih kuat',
    'Mengurangi ketergantungan tim terhadap owner',
    'Meningkatkan efektivitas tim melalui peningkatan kualitas leadership',
    'Memberikan pembelajaran langsung dari praktisi bisnis yang berpengalaman menangani berbagai industri',
  ];

  return (
    <section className="py-24 bg-zinc-900 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Acara Ini Cocok untuk Anda yang:
            </h2>
            <p className="text-xl text-gray-400">
              Didesain untuk owner, HR, dan leader yang ingin manager lebih bisa diandalkan di lapangan.
            </p>
          </FadeIn>
        </div>

        <FadeIn direction="up" delay={0.2}>
          <Card className="max-w-5xl mx-auto p-8 md:p-10 border-gold-500/20 bg-[linear-gradient(145deg,rgba(18,18,18,0.98),rgba(34,27,15,0.95))] relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,106,0.12),transparent_32%)]" />
            <div className="relative">
              <StaggerContainer className="grid gap-4">
                {audiencePoints.map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                    className="flex items-start rounded-2xl border border-white/8 bg-white/5 px-5 py-4 text-gray-100"
                  >
                    <CheckCircle2 className="w-6 h-6 text-gold-400 mr-4 flex-shrink-0 mt-0.5" />
                    <span className="text-base md:text-lg leading-relaxed">{item}</span>
                  </motion.div>
                ))}
              </StaggerContainer>
            </div>
          </Card>
        </FadeIn>

      </div>
    </section>
  );
};

export { TargetAudience };
