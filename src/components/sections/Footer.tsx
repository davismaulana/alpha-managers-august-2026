import React from 'react';
import { FadeIn } from '../animations/FadeIn';

const Footer: React.FC = () => {
  return (
    <footer className="py-10 bg-[var(--cf-ink)] border-t border-white/5">
      <div className="container mx-auto px-4 text-center">
        <FadeIn direction="up">
          <p className="mb-1 text-gold-400 font-bold tracking-[0.08em]">
            Alpha Leaders Community | Coach Ferly F. Raya
          </p>
          <p className="text-zinc-700 text-xs">
            2026 Alpha Leaders. All rights reserved. Program details are confirmed after invitation review.
          </p>
        </FadeIn>
      </div>
    </footer>
  );
};

export { Footer };
