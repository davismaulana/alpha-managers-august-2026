import React from 'react';
import { Button } from '../ui/Button';
import { FadeIn } from '../animations/FadeIn';
import { openRegistrationCTA } from '../../lib/constants';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full bg-black pt-16 pb-4 md:pt-0 md:pb-0 md:min-h-screen md:flex md:items-center md:justify-center overflow-hidden">

      {/* Main Hero Image */}
      <div className="relative w-full max-w-[1920px] mx-auto">
        <FadeIn duration={1.2}>
          <img
            src="/main-poster.png"
            alt="Poster event Alpha Managers Agustus 2026"
            className="w-full h-auto object-contain"
          />
        </FadeIn>

        {/* Interactive Overlay Button */}
        {/* Mobile: Always visible | Desktop: Hover to reveal */}
        <div className="absolute inset-x-0 bottom-[5%] md:bottom-[15%] flex justify-center z-10 opacity-100 md:opacity-0 md:hover:opacity-100 transition-opacity duration-300">
           <Button
             className="w-[200px] h-[50px] md:w-[300px] md:h-[60px] cursor-pointer"
             onClick={openRegistrationCTA}
           >
             Apply untuk Undangan
           </Button>
        </div>
      </div>

    </section>
  );
};

export { Hero };
