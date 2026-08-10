import React from 'react';
import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from '../animations/FadeIn';
import { openRegistrationCTA } from '../../lib/constants';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-[#E5DBC7] text-zinc-900 overflow-hidden relative">
       {/* Decorative Elements */}
       <div className="absolute top-0 left-0 w-64 h-64 bg-white/20 rounded-full blur-[50px] pointer-events-none" />

       <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">

         <FadeIn direction="up">
           <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
             Daftarkan Manager Anda Sekarang!
           </h2>
         </FadeIn>

         <FadeIn direction="up" delay={0.2}>
           <p className="text-xl md:text-2xl font-medium text-zinc-600 mb-8 tracking-wide">
             Aloft Hotel by Marriott, Jakarta Barat | Kamis, 1 Oktober 2026
           </p>
         </FadeIn>

         <FadeIn direction="up" delay={0.4}>
           <div className="flex flex-col items-center">
             <Button
               variant="primary"
               size="lg"
               className="text-xl px-12 py-8 rounded-full shadow-2xl hover:shadow-gold-600/20 transform hover:-translate-y-1 transition-all mb-6"
               onClick={openRegistrationCTA}
             >
               Daftar via WA <ArrowRight className="ml-2 w-6 h-6" />
             </Button>
           </div>
         </FadeIn>

       </div>
    </section>
  );
};

export { FinalCTA };
