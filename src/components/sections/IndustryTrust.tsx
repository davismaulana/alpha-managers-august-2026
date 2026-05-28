import React from 'react';
import { FadeIn } from '../animations/FadeIn';

const IndustryTrust: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[var(--cf-ink)] to-zinc-950 md:min-h-screen md:flex md:flex-col md:justify-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-10 md:mb-12">
          <FadeIn direction="up">
            <p className="text-[11px] tracking-[0.22em] uppercase text-gold-400 font-black mb-4">
              Industry trust
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight">
              Dipercaya Berbagai Industri
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="mt-5 text-base md:text-lg text-zinc-400 leading-relaxed max-w-2xl">
              Pendekatan Coach Ferly digunakan lintas industri, dari F&B, retail, kesehatan,
              edukasi, properti, fashion, travel, hingga layanan profesional.
            </p>
          </FadeIn>
        </div>

        <FadeIn direction="up" delay={0.3}>
          <div className="relative">
            <div className="absolute -left-2 -top-2 h-full w-full border border-gold-500/30 pointer-events-none" />
            <picture>
              <source type="image/webp" srcSet="/industry-trust.webp" />
              <img
                src="/industry-trust.png"
                alt="Logo collage of industries Coach Ferly has served"
                className="relative z-10 block w-full h-auto"
                loading="lazy"
              />
            </picture>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export { IndustryTrust };
