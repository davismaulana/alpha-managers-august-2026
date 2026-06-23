import React from 'react';
import { FadeIn } from '../animations/FadeIn';

const ShiftMindset: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-900/50 md:min-h-screen md:flex md:flex-col md:justify-center">
      <div className="container mx-auto px-4 md:px-6 text-center">

        {/* Header */}
        <FadeIn direction="up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gold-300 to-gold-600 bg-clip-text text-transparent">
              "Operator"
            </span>
            <span className="text-white mx-3">
              vs
            </span>
            <span className="text-red-400">
              "Leader"
            </span>
          </h2>

          <div className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto space-y-4">
            <p className="font-semibold text-white">Banyak manager masih bekerja seperti operator terbaik di timnya.</p>
            <p className="text-gray-400">Padahal bisnis bertumbuh ketika manager mampu memimpin ritme, keputusan, dan standar performa orang lain.</p>
          </div>
        </FadeIn>

        {/* Core Insight */}
        <FadeIn direction="up" delay={0.2}>
          <div className="max-w-4xl mx-auto mb-16">
            <div className="border border-gold-600/20 bg-black/40 rounded-2xl p-8 md:p-12">
              <p className="text-xl md:text-2xl font-light text-zinc-300 leading-relaxed mb-6">
                Bisnis Anda tidak kekurangan aktivitas.
              </p>
              <p className="text-2xl md:text-3xl font-light text-zinc-300 leading-relaxed">
                Yang kurang adalah manager yang <span className="font-bold text-red-400">mampu menggerakkan manusia</span> dan{' '}
                <span className="font-bold text-red-400 border-b-2 border-red-500 pb-1">membuat target hidup di lapangan.</span>
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Bottom Statement */}
        <FadeIn direction="up" delay={0.3}>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-zinc-400 italic leading-relaxed">
              "Manager yang benar akan <span className="text-white font-medium">membesarkan kapasitas bisnis Anda</span>.{' '}
              Manager yang lemah akan <span className="text-red-400 font-medium">membuat owner terus kembali ke operasional</span>."
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export { ShiftMindset };
