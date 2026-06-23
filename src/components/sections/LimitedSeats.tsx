import React from 'react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { AlertTriangle, Check } from 'lucide-react';
import { FadeIn } from '../animations/FadeIn';
import { StaggerContainer } from '../animations/StaggerContainer';
import { motion } from 'framer-motion';

const LimitedSeats: React.FC = () => {
  return (
    <section className="py-24 bg-black md:min-h-screen md:flex md:flex-col md:justify-center">
      <div className="container mx-auto px-4 md:px-6">

        <div className="flex flex-col items-center max-w-4xl mx-auto">
          <FadeIn direction="down">
            <Badge variant="warning" className="mb-6 animate-pulse">
              <AlertTriangle className="w-3 h-3 mr-2" />
              LIMITED AVAILABILITY
            </Badge>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">
              Jangan Tunggu Sampai Problem Kepemimpinan Menjadi Normal
            </h2>
          </FadeIn>

          {/* Warnings */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-16">
            <motion.div variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}>
              <Card className="p-6 border-red-900/40 bg-red-900/10 flex flex-col items-center text-center h-full">
                <AlertTriangle className="w-8 h-8 text-red-500 mb-4" />
                <p className="text-red-200 font-medium text-sm leading-relaxed">Target makin sulit tercapai jika manager hanya mengawasi aktivitas tanpa menggerakkan outcome</p>
              </Card>
            </motion.div>
            <motion.div variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}>
              <Card className="p-6 border-red-900/40 bg-red-900/10 flex flex-col items-center text-center h-full">
                <AlertTriangle className="w-8 h-8 text-red-500 mb-4" />
                <p className="text-red-200 font-medium text-sm leading-relaxed">Karyawan bagus bisa kehilangan produktivitas jika dipimpin manager yang lemah dan tidak konsisten</p>
              </Card>
            </motion.div>
            <motion.div variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}>
              <Card className="p-6 border-red-900/40 bg-red-900/10 flex flex-col items-center text-center h-full">
                <AlertTriangle className="w-8 h-8 text-red-500 mb-4" />
                <p className="text-red-200 font-medium text-sm leading-relaxed">Jika owner masih turun tangan setiap hari, fungsi manajerial di bisnis Anda belum benar-benar optimal</p>
              </Card>
            </motion.div>
          </StaggerContainer>

          {/* Qualification Box */}
          <FadeIn direction="up" delay={0.4} className="w-full">
            <div className="w-full border border-gold-600/30 rounded-2xl p-8 md:p-12 bg-gradient-to-b from-zinc-900 to-black relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-gold-600/10 rounded-full blur-[80px]" />

               <h3 className="text-2xl font-bold text-white mb-8 relative z-10 text-center md:text-left">Sesi ini untuk Anda jika:</h3>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 relative z-10 mb-8">
                 {[
                   "Ingin manager lebih kuat menjaga KPI dan disiplin eksekusi",
                   "Membutuhkan pola delegation dan coaching yang lebih rapi",
                   "Sedang membangun atau memperkuat middle management",
                   "Tidak ingin owner terus menjadi pusat semua keputusan operasional"
                 ].map((item, idx) => (
                   <div key={idx} className="flex items-start">
                     <div className="w-6 h-6 rounded-full bg-gold-500/20 text-gold-500 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                       <Check className="w-3 h-3" />
                     </div>
                     <p className="text-gray-300">{item}</p>
                   </div>
                 ))}
               </div>

               <div className="text-center md:text-left pt-6 border-t border-zinc-800">
                 <p className="text-xl text-white font-serif italic">
                   "Ini ruang untuk memperkuat penggerak bisnis Anda."
                 </p>
               </div>
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
};

export { LimitedSeats };
