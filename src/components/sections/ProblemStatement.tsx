import React from 'react';
import { FadeIn } from '../animations/FadeIn';
import { StaggerContainer } from '../animations/StaggerContainer';
import { motion } from 'framer-motion';
import { TrendingDown, Activity, Users2, ShieldAlert, UserCog } from 'lucide-react';
import { scrollToLeadForm } from '../../lib/constants';
import { ArrowRight } from 'lucide-react';

const Pain: React.FC = () => {
  const pains = [
    {
      icon: TrendingDown,
      desc: 'Tim sulit mencapai KPI secara konsisten.',
    },
    {
      icon: Activity,
      desc: 'Manager terlalu fokus mengerjakan pekerjaan operasional dibanding memimpin tim.',
    },
    {
      icon: Users2,
      desc: 'Karyawan masih bergantung pada arahan terus-menerus.',
    },
    {
      icon: ShieldAlert,
      desc: 'Delegasi sudah dilakukan, tetapi eksekusinya tetap tidak berjalan.',
    },
    {
      icon: UserCog,
      desc: 'Banyak meeting, sedikit accountability.',
    },
    {
      icon: Activity,
      desc: 'HR sudah mengadakan training, tetapi perubahan performa tidak terlihat.',
    },
  ];

  return (
    <section
      id="problem-section"
      className="relative scroll-mt-24 bg-gradient-to-b from-[var(--cf-ink)] via-zinc-950 to-[var(--cf-ink)] py-20 md:py-28"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-12 md:mb-16">
          <FadeIn direction="up">
            <p className="text-[11px] tracking-[0.22em] uppercase text-gold-400 font-black mb-4">
              Diagnosa
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight">
              Inikah yang
              <br />
              Terjadi di Perusahaan Anda?
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="mt-6 text-base md:text-lg text-zinc-400 max-w-2xl leading-relaxed">
              Masalahnya sering kali bukan pada kemampuan teknis manager. Masalahnya ada pada
              kemampuan mereka memimpin, mengarahkan, mengelola performa, dan membuat tim bergerak
              tanpa harus terus diawasi owner.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {pains.map((p, idx) => (
            <motion.div
              key={idx}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="group relative border border-white/10 bg-zinc-900/40 p-6 backdrop-blur-sm transition-colors hover:bg-zinc-900/70 md:p-7"
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-[var(--cf-accent)]/70" />
              <div className="flex items-start gap-4">
                <div className="rounded-md border border-gold-500/30 bg-gold-500/10 p-2.5 text-gold-400 shrink-0">
                  <p.icon className="h-5 w-5" />
                </div>
                <p className="text-sm leading-relaxed text-zinc-200 md:text-base">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        <FadeIn direction="up" delay={0.3}>
          <div className="mt-12 md:mt-16 max-w-4xl">
            <div className="relative border border-gold-500/30 bg-black/50 backdrop-blur-md p-8 md:p-10">
              <p className="text-lg md:text-2xl font-semibold text-white leading-relaxed">
                Jika pola ini terus berulang, perusahaan bukan hanya kekurangan training.
                Perusahaan sedang kekurangan <span className="text-gold-400">management layer</span>{' '}
                yang bisa dipercaya untuk membawa target menjadi eksekusi.
              </p>
              <button
                type="button"
                onClick={scrollToLeadForm}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--cf-gold)] px-6 py-3 text-sm font-black text-black transition hover:bg-[var(--cf-cream)] hover:text-[var(--cf-ink)]"
              >
                Daftarkan Manager Anda <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export { Pain as ProblemStatement };
export { Pain };
