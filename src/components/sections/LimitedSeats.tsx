import React from 'react';
import { Card } from '../ui/Card';
import { AlertTriangle } from 'lucide-react';
import { FadeIn } from '../animations/FadeIn';
import { StaggerContainer } from '../animations/StaggerContainer';
import { motion } from 'framer-motion';

const LimitedSeats: React.FC = () => {
  return (
    <section className="py-24 bg-black md:min-h-screen md:flex md:flex-col md:justify-center">
      <div className="container mx-auto px-4 md:px-6">

        <div className="flex flex-col items-center max-w-4xl mx-auto">
          <FadeIn direction="up" delay={0.2}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">
              Tiga Risiko Ini Tidak Bisa Dibiarkan Menjadi Normal
            </h2>
          </FadeIn>

          {/* Warnings */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-16">
            <motion.div variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}>
              <Card className="p-6 border-red-900/40 bg-red-900/10 flex flex-col items-center text-center h-full">
                <AlertTriangle className="w-8 h-8 text-red-500 mb-4" />
                <p className="text-red-200 font-medium text-sm leading-relaxed">Target perusahaan akan semakin sulit tercapai jika manager hanya mengawasi aktivitas tanpa mampu mendorong performa tim.</p>
              </Card>
            </motion.div>
            <motion.div variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}>
              <Card className="p-6 border-red-900/40 bg-red-900/10 flex flex-col items-center text-center h-full">
                <AlertTriangle className="w-8 h-8 text-red-500 mb-4" />
                <p className="text-red-200 font-medium text-sm leading-relaxed">Karyawan yang baik pun bisa kehilangan produktivitas jika dipimpin oleh manager yang tidak memiliki kemampuan leadership dan accountability yang kuat.</p>
              </Card>
            </motion.div>
            <motion.div variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}>
              <Card className="p-6 border-red-900/40 bg-red-900/10 flex flex-col items-center text-center h-full">
                <AlertTriangle className="w-8 h-8 text-red-500 mb-4" />
                <p className="text-red-200 font-medium text-sm leading-relaxed">Selama owner masih harus turun tangan menyelesaikan masalah tim setiap hari, berarti fungsi manajerial di organisasi Anda belum berjalan optimal.</p>
              </Card>
            </motion.div>
          </StaggerContainer>
        </div>

      </div>
    </section>
  );
};

export { LimitedSeats };
