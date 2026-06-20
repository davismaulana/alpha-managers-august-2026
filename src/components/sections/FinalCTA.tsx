import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from '../animations/FadeIn';
import { openRegistrationCTA } from '../../lib/constants';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-[var(--cf-cream)] text-zinc-900 overflow-hidden relative md:min-h-screen md:flex md:flex-col md:justify-center">
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/20 rounded-full blur-[50px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
        <FadeIn direction="up">
          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
            Apply for Community Invitation
          </h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.15}>
          <p className="text-base md:text-lg font-bold uppercase tracking-[0.2em] text-zinc-700 mb-8">
            Owner-only | By Invitation Only | Online via Zoom
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.3}>
          <p className="text-lg md:text-xl text-zinc-700 leading-relaxed mb-10 max-w-3xl mx-auto">
            Masalah terbesar bisnis Anda mungkin bukan di produk atau marketing, tapi di sistem
            sales team yang belum dibangun dengan benar.
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.38}>
          <p className="text-lg md:text-xl text-zinc-700 leading-relaxed mb-10 max-w-3xl mx-auto">
            Bisnis besar tidak bertumbuh karena owner bekerja lebih keras setiap hari. Bisnis besar
            bertumbuh karena memiliki sales yang mampu menghasilkan revenue secara konsisten!
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.45}>
          <div className="flex flex-col items-center">
            <button
              type="button"
              onClick={openRegistrationCTA}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--cf-ink)] text-white px-10 md:px-14 py-5 md:py-6 text-lg md:text-xl font-black tracking-wide transition hover:bg-black hover:-translate-y-1 shadow-2xl cursor-pointer"
            >
              Apply <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <p className="mt-5 text-sm md:text-base text-zinc-600 font-medium">
              &lt;Button Apply&gt;
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export { FinalCTA };
