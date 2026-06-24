import React from 'react';
import { Card } from '../ui/Card';
import { CheckCircle2 } from 'lucide-react';
import { FadeIn } from '../animations/FadeIn';
import { StaggerContainer } from '../animations/StaggerContainer';
import { motion } from 'framer-motion';

const TargetAudience: React.FC = () => {
  const businessOwner = [
    'Meningkatkan performa manager dan team leader',
    'Membangun middle management yang lebih kuat',
    'Mengurangi ketergantungan tim terhadap owner',
    'Menciptakan budaya accountability dalam organisasi'
  ];

  const learningDevelopment = [
    'Mengembangkan leadership capability para manager',
    'Menyiapkan future leaders dalam perusahaan',
    'Meningkatkan efektivitas tim melalui peningkatan kualitas leadership',
    'Memberikan pembelajaran langsung dari praktisi bisnis yang berpengalaman menangani berbagai industri'
  ];

  return (
    <section className="py-24 bg-zinc-900 overflow-hidden md:min-h-screen md:flex md:flex-col md:justify-center">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Siapa yang Paling Cocok Hadir?
            </h2>
            <p className="text-xl text-gray-400">
              Dua profil utama yang akan paling mendapatkan manfaat dari session ini.
            </p>
          </FadeIn>
        </div>

        <div className="max-w-6xl mx-auto grid gap-6 lg:grid-cols-2">
          <FadeIn direction="up" delay={0.2}>
            <Card className="p-8 border-green-500/20 bg-green-900/10 hover:border-green-500/40 relative group h-full">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-600 to-green-400" />
              <h3 className="text-2xl font-bold text-white mb-8">Business Owner yang ingin:</h3>
              <StaggerContainer className="space-y-6">
                {businessOwner.map((item, idx) => (
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

          <FadeIn direction="up" delay={0.3}>
            <Card className="p-8 border-gold-500/20 bg-gold-500/5 hover:border-gold-500/40 relative group h-full">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-500 to-gold-300" />
              <h3 className="text-2xl font-bold text-white mb-8">HR &amp; Learning Development yang ingin:</h3>
              <StaggerContainer className="space-y-6">
                {learningDevelopment.map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                    className="flex items-start text-gray-200 text-lg"
                  >
                    <CheckCircle2 className="w-6 h-6 text-gold-400 mr-4 flex-shrink-0 mt-1" />
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
