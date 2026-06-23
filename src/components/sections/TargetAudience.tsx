import React from 'react';
import { Card } from '../ui/Card';
import { CheckCircle2 } from 'lucide-react';
import { FadeIn } from '../animations/FadeIn';
import { StaggerContainer } from '../animations/StaggerContainer';
import { motion } from 'framer-motion';

const TargetAudience: React.FC = () => {
  const criteria = [
    "Business owner yang ingin middle management lebih kuat dan bisnis tidak terlalu bergantung pada owner",
    "Owner yang ingin manager mampu menciptakan accountability, bukan hanya membagi tugas",
    "HR atau Learning & Development yang ingin leadership capability tim benar-benar naik di lapangan",
    "Perusahaan yang sedang menyiapkan future leaders dan ingin standar delegation, coaching, serta performance management lebih tajam",
    'Tim yang ingin berhenti dari pola "meeting banyak, follow-through sedikit"'
  ];

  return (
    <section className="py-24 bg-zinc-900 overflow-hidden md:min-h-screen md:flex md:flex-col md:justify-center">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Siapa yang Cocok Hadir?
            </h2>
            <p className="text-xl text-gray-400">
              Sesi ini dirancang untuk owner, HR, dan L&D yang serius memperkuat kualitas manager.
            </p>
          </FadeIn>
        </div>

        <div className="max-w-3xl mx-auto">
          <FadeIn direction="up" delay={0.2}>
            <Card className="p-8 border-green-500/20 bg-green-900/10 hover:border-green-500/40 relative group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-600 to-green-400" />

              <StaggerContainer className="space-y-6">
                {criteria.map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                    className="flex items-start text-gray-200 text-lg"
                  >
                    <CheckCircle2 className="w-6 h-6 text-green-500 mr-4 flex-shrink-0 mt-1" />
                    {item}
                  </motion.div>
                ))}
              </StaggerContainer>
            </Card>
          </FadeIn>
        </div>

      </div>
    </section>
  );
};

export { TargetAudience };
