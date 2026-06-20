import React from 'react';
import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from '../animations/FadeIn';
import { scrollToLeadForm } from '../../lib/constants';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-[#E5DBC7] text-zinc-900 overflow-hidden relative md:min-h-screen md:flex md:flex-col md:justify-center">
      <div className="absolute left-0 top-0 h-2 w-full bg-black" />
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <FadeIn direction="up">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-normal">
            Apply for Community Invitation
          </h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <p className="text-xl md:text-2xl font-medium text-zinc-600 mb-8 tracking-normal">
            Jakarta | By Invitation Only | Manager Accountability Program
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.4}>
          <div className="flex flex-col items-center">
            <Button
              variant="primary"
              size="lg"
              className="text-xl px-12 py-8 rounded-full shadow-2xl hover:shadow-gold-600/20 transform hover:-translate-y-1 transition-all mb-6"
              onClick={scrollToLeadForm}
            >
              Apply Now <ArrowRight className="ml-2 w-6 h-6" />
            </Button>

            <p className="text-zinc-500 font-medium">
              Tim Alpha Leaders meninjau profil Anda sebelum mengirim konfirmasi seat.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export { FinalCTA };
