import React from 'react';
import { Card } from '../ui/Card';
import { GitBranch, Gauge, MessageSquareText } from 'lucide-react';
import { FadeIn } from '../animations/FadeIn';
import { StaggerContainer } from '../animations/StaggerContainer';
import { motion } from 'framer-motion';

const ShiftMindset: React.FC = () => {
  const pillars = [
    {
      icon: GitBranch,
      title: 'Manager Performance Architecture',
      desc: 'Menyusun pola kerja manager agar target turun menjadi tindakan tim yang konsisten.',
    },
    {
      icon: Gauge,
      title: 'Accountability Control System',
      desc: 'Membangun kontrol performa yang membuat laporan, review, dan follow-up terasa hidup.',
    },
    {
      icon: MessageSquareText,
      title: 'Leadership Communication',
      desc: 'Membuat arahan, feedback, dan ekspektasi terdengar jelas lalu benar-benar dijalankan.',
    },
  ];

  return (
    <section id="framework" className="scroll-mt-24 py-24 bg-zinc-900/50 md:min-h-screen md:flex md:flex-col md:justify-center">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <FadeIn direction="up">
          <p className="text-gold-500 font-semibold text-sm uppercase tracking-normal mb-4">The framework</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gold-300 to-gold-600 bg-clip-text text-transparent">
              Dari Manager yang Reaktif
            </span>
            <br />
            <span className="text-white">
              Menjadi Mesin Eksekusi yang Bisa Diandalkan
            </span>
          </h2>

          <div className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
            <p>Program ini tidak berhenti di teori leadership.</p>
            <p className="text-white font-semibold mt-2">Fokusnya ada pada tiga pilar perubahan kerja manager:</p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {pillars.map((item, idx) => (
            <motion.div key={idx} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <Card className="p-8 border-gold-600/20 bg-black/40 hover:border-gold-500/40 hover:bg-black/60 transition-all duration-300 group h-full flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-gold-500/10 flex items-center justify-center mb-5 group-hover:bg-gold-500/20 transition-colors">
                  <item.icon className="w-7 h-7 text-gold-500" />
                </div>
                <h3 className="text-xl font-bold text-gold-300 mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
              </Card>
            </motion.div>
          ))}
        </StaggerContainer>

        <FadeIn direction="up" delay={0.3}>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-zinc-400 italic leading-relaxed">
              "Naik level sebagai owner berarti punya manager yang berani memimpin hasil,
              <span className="text-white font-medium"> bukan sekadar menjaga rutinitas.</span>"
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export { ShiftMindset };
