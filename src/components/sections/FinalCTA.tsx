import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from '../animations/FadeIn';
import { CTA_LABEL, scrollToLeadForm } from '../../lib/constants';

const FinalCTA: React.FC = () => {
  return (
    <section className="bg-zinc-950 py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative overflow-hidden border border-gold-500/30 bg-[linear-gradient(145deg,rgba(8,8,8,0.94),rgba(25,20,10,0.96))] px-6 py-12 md:px-12 md:py-16">
          <div className="pointer-events-none absolute inset-0 opacity-[0.08] bg-[linear-gradient(118deg,transparent_35%,var(--cf-gold)_35%,var(--cf-gold)_36%,transparent_36%,transparent_64%,var(--cf-cream)_64%,var(--cf-cream)_64.8%,transparent_64.8%)]" />
          <div className="relative max-w-4xl">
            <FadeIn direction="up">
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-gold-400">
                Apply untuk undangan
              </p>
              <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-white md:text-5xl">
                Saat Manager Naik Kelas, Owner Tidak Perlu Menjadi Pemadam
                <br />
                <span className="text-gold-400">Kebakaran Setiap Hari</span>
              </h2>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-zinc-300 md:text-lg">
                Mulai dari profil perusahaan. Tim Alpha Leaders akan membantu menilai apakah
                program ini cocok untuk kebutuhan manager dan team leader Anda.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <button
                type="button"
                onClick={() => scrollToLeadForm('final-cta')}
                className="mt-8 inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[var(--cf-gold)] px-8 text-base font-black text-black transition hover:bg-[var(--cf-cream)] hover:text-[var(--cf-ink)]"
              >
                {CTA_LABEL}
                <ArrowRight className="h-5 w-5" />
              </button>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export { FinalCTA };
