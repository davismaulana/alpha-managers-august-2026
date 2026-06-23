import React from 'react';
import { ArrowDown } from 'lucide-react';
import { FadeIn } from '../animations/FadeIn';
import { StaggerContainer } from '../animations/StaggerContainer';
import { motion } from 'framer-motion';

const WhyThisHappens: React.FC = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden md:min-h-screen md:flex md:flex-col md:justify-center">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <FadeIn direction="right" className="mb-12 border-l-4 border-gold-500 pl-6">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Kenapa Manager Anda Belum Menjadi Penggerak?
            </h2>
            <p className="text-xl text-gray-400">
              Karena sistem kepemimpinan yang mereka jalankan masih reaktif, bukan terstruktur:
            </p>
          </FadeIn>

          {/* Two-column: wrong vs right approach */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Wrong approaches */}
            <FadeIn direction="left" delay={0.1}>
              <div className="bg-zinc-900/60 border border-red-500/20 rounded-2xl p-8">
                <p className="text-red-400 font-semibold text-sm uppercase tracking-widest mb-6">Pola Lama yang Menahan Tim</p>
                <StaggerContainer className="space-y-4">
                  {[
                    "Manager sibuk mengawasi aktivitas, bukan menggerakkan outcome",
                    "Delegasi berhenti di instruksi tanpa sistem follow-up",
                    "Meeting terjadi rutin, tetapi accountability tidak terkunci",
                    "Owner tetap jadi tempat eskalasi semua masalah"
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                      className="flex items-center gap-3 text-gray-300 text-lg"
                    >
                      <span className="w-2 h-2 rounded-full bg-red-500/60 flex-shrink-0" />
                      {item}
                    </motion.div>
                  ))}
                </StaggerContainer>
              </div>
            </FadeIn>

            {/* Right foundations */}
            <FadeIn direction="right" delay={0.2}>
              <div className="bg-zinc-900/60 border border-gold-500/20 rounded-2xl p-8">
                <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-6">Fondasi Manager yang Mengakselerasi</p>
                <StaggerContainer className="space-y-4">
                  {[
                    "Target jelas yang diterjemahkan menjadi ritme tim",
                    "Sistem accountability yang membuat orang follow-through",
                    "Delegasi yang membangun ownership, bukan ketergantungan",
                    "Coaching dan komunikasi yang menaikkan performa orang"
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}
                      className="flex items-center gap-3 text-gray-300 text-lg"
                    >
                      <span className="w-2 h-2 rounded-full bg-gold-500 flex-shrink-0" />
                      {item}
                    </motion.div>
                  ))}
                </StaggerContainer>
              </div>
            </FadeIn>
          </div>

          {/* Highlighted Insight */}
          <FadeIn direction="up" delay={0.2}>
            <div className="bg-gradient-to-r from-zinc-900 to-black border border-zinc-800 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden group hover:border-gold-500/30 transition-colors">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-50" />

              <p className="text-2xl md:text-3xl font-medium text-white leading-relaxed">
                "Tanpa itu, <span className="text-gold-500 font-bold">Anda tidak sedang membangun manager.</span> Anda hanya sedang menambah lapisan operasional."
              </p>
            </div>
          </FadeIn>

          {/* Decorative Arrow */}
          <FadeIn direction="down" delay={0.4} className="flex justify-center mt-16">
            <ArrowDown className="w-10 h-10 text-zinc-700 animate-bounce" />
          </FadeIn>

        </div>

      </div>
    </section>
  );
};

export { WhyThisHappens };
