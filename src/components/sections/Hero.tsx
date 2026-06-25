import React from 'react';
import { Button } from '../ui/Button';
import { FadeIn } from '../animations/FadeIn';
import { openRegistrationCTA } from '../../lib/constants';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full bg-black pt-16 pb-10 md:pt-24 md:pb-12 overflow-hidden">
      <div className="relative w-full max-w-[1920px] mx-auto">
        <FadeIn duration={1.2}>
          <picture>
            <source media="(max-width: 767px)" srcSet="/august-vertical.webp" type="image/webp" />
            <source media="(min-width: 768px)" srcSet="/august-horizontal.webp" type="image/webp" />
            <source media="(max-width: 767px)" srcSet="/august-vertical.png" type="image/png" />
            <img
              src="/august-horizontal.png"
              alt="Poster event Alpha Managers Agustus 2026"
              className="w-full h-auto object-contain"
            />
          </picture>
        </FadeIn>

        <div className="mt-6 flex justify-center px-4">
          <Button
            className="min-w-[220px] h-[52px] md:min-w-[320px] md:h-[60px] cursor-pointer"
            onClick={openRegistrationCTA}
          >
            Daftar via WA
          </Button>
        </div>
      </div>
    </section>
  );
};

export { Hero };
