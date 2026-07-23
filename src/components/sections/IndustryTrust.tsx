import React from 'react';
import { FadeIn } from '../animations/FadeIn';

const IndustryTrust: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="up" delay={0.3}>
          <div className="relative overflow-hidden rounded-[32px] border border-zinc-200/80 bg-white p-6 md:p-8 shadow-[0_24px_80px_-50px_rgba(15,23,42,0.3)]">
            <div className="max-w-3xl mb-8 md:mb-10">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-zinc-950 leading-tight">
                Dipercaya Berbagai Industri
              </h2>
            </div>

            <img
              src="/industry-trust-client.png"
              alt="Logo collage of industries Coach Ferly has served"
              className="relative w-full h-auto rounded-[20px]"
              loading="lazy"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export { IndustryTrust };
