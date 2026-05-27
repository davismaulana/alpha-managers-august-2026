import React from 'react';
import { FadeIn } from '../animations/FadeIn';

const Footer: React.FC = () => {
  return (
    <footer className="py-10 bg-[var(--cf-ink)] border-t border-white/5">
      <div className="container mx-auto px-4 text-center">
        <FadeIn direction="up">
          <p className="text-gold-400 font-bold tracking-[0.18em] mb-1">
            ALPHA LEADERS COMMUNITY — COACH FERLY F. RAYA
          </p>
          <p className="text-zinc-500 text-sm mb-4">
            Exclusive community sharing for business owners building scalable sales teams.
          </p>
          <p className="text-zinc-700 text-xs">© 2026 Alpha Leaders. All rights reserved.</p>
        </FadeIn>
      </div>
    </footer>
  );
};

export { Footer };
