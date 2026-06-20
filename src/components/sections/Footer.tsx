import React from 'react';
import { FadeIn } from '../animations/FadeIn';

const ALPHA_LEADERS_LOGO_SRC = '/images/alpha-leaders-logo-yellow-ec6454a.png';

const Footer: React.FC = () => {
  return (
    <footer className="pt-10 pb-28 md:py-10 bg-black border-t border-gold-500/15">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4 flex justify-center">
          <div className="rounded-xl border border-gold-500/20 bg-black px-4 py-3 shadow-[0_0_22px_rgba(212,175,106,0.12)]">
            <img
              src={ALPHA_LEADERS_LOGO_SRC}
              alt="Alpha Leaders"
              className="h-14 w-auto max-w-[8.75rem] object-contain md:h-16 md:max-w-[10rem]"
              loading="lazy"
            />
          </div>
        </div>
        <FadeIn direction="up">
          <p className="text-gold-400 font-bold tracking-[0.18em] mb-1">
            ALPHA LEADERS COMMUNITY - COACH FERLY F. RAYA
          </p>
          <p className="text-zinc-500 text-sm mb-4">
            Exclusive community sharing for business owners building scalable sales teams.
          </p>
          <p className="text-zinc-700 text-xs">2026 Alpha Leaders. All rights reserved.</p>
        </FadeIn>
      </div>
    </footer>
  );
};

export { Footer };
