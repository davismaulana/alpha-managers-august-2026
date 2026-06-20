import React from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { ArrowRight, Check } from 'lucide-react';
import { FadeIn } from '../animations/FadeIn';
import { StaggerContainer } from '../animations/StaggerContainer';
import { motion } from 'framer-motion';
import { scrollToLeadForm } from '../../lib/constants';

const ClosingPhilosophy: React.FC = () => {
  const outcomes = [
    'Manager yang lebih kuat memegang KPI, follow-up, dan accountability tim.',
    'Owner yang lebih lepas dari intervensi operasional harian yang seharusnya diselesaikan level manager.',
    'Tim yang bergerak dengan arahan lebih jelas, ritme lebih rapi, dan eksekusi lebih bisa diukur.',
  ];

  return (
    <section className="py-24 bg-black md:min-h-screen md:flex md:flex-col md:justify-center">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-4xl mx-auto mb-16">
          <FadeIn direction="up" delay={0.2}>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-500 mb-8">
              Perusahaan tidak selalu kehilangan momentum karena timnya lemah.
            </h2>
            <h3 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Sering kali momentum hilang karena
              <span className="text-gold-500"> manager belum dibentuk menjadi pemimpin yang mampu mengeksekusi hasil.</span>
            </h3>
          </FadeIn>
        </div>

        <FadeIn direction="up" delay={0.4}>
          <p className="text-xl text-gray-400 mb-8">Jika Anda ingin melihat perubahan nyata pada:</p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {outcomes.map((item, idx) => (
            <motion.div key={idx} variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}>
              <Card className="p-8 border-zinc-800 bg-zinc-900/30 flex flex-col items-center justify-center hover:border-gold-500/30 transition-colors h-full">
                <div className="w-10 h-10 rounded-full bg-gold-500/10 text-gold-500 flex items-center justify-center mb-4">
                  <Check className="w-5 h-5" />
                </div>
                <p className="text-gray-200 font-medium">{item}</p>
              </Card>
            </motion.div>
          ))}
        </StaggerContainer>

        <FadeIn direction="up" delay={0.6}>
          <Button
            variant="primary"
            size="lg"
            className="px-10 py-6 text-lg"
            onClick={scrollToLeadForm}
          >
            Daftarkan Manager Anda <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </FadeIn>
      </div>
    </section>
  );
};

export { ClosingPhilosophy };
