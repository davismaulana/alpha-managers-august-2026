import React from 'react';
import { FadeIn } from '../animations/FadeIn';
import { StaggerContainer } from '../animations/StaggerContainer';
import { motion } from 'framer-motion';
import { Activity, Gauge, TrendingDown, Users2, UserCog } from 'lucide-react';
import { openRegistrationCTA } from '../../lib/constants';
import { ArrowRight } from 'lucide-react';

const Pain: React.FC = () => {
  const pains = [
    {
      icon: TrendingDown,
      title: 'Budget marketing terus keluar',
      desc: 'Budget marketing terus keluar, tapi leads yang masuk gagal dikonversi oleh tim sales.',
    },
    {
      icon: Users2,
      title: 'Performa sales team naik turun',
      desc: 'Performa sales team naik turun, membuat omzet bisnis sulit stabil dan sulit diprediksi.',
    },
    {
      icon: UserCog,
      title: 'Tim sales lebih banyak alasan daripada hasil',
      desc: 'Tim sales lebih banyak alasan daripada hasil, sibuk setiap hari, tapi revenue tidak bertumbuh.',
    },
    {
      icon: Activity,
      title: 'Mental tim langsung turun',
      desc: 'Baru ditolak beberapa kali, mental tim langsung turun dan kehilangan semangat closing.',
    },
    {
      icon: Gauge,
      title: 'Owner masih harus ikut turun tangan',
      desc: 'Owner masih harus ikut turun tangan, untuk nge-push sales setiap hari agar target tercapai.',
    },
  ];

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-[var(--cf-ink)] via-zinc-950 to-[var(--cf-ink)] md:min-h-screen md:flex md:flex-col md:justify-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mb-12 md:mb-16">
          <FadeIn direction="up">
            <p className="text-[11px] tracking-[0.22em] uppercase text-gold-400 font-black mb-4">
              Diagnosa
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight">
              Anda Mungkin Sedang Mengalami Masalah Ini…
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="mt-6 text-base md:text-lg text-zinc-400 max-w-3xl leading-relaxed">
              Jika Anda masih merasakan poin-poin di atas, kemungkinan besar bisnis Anda belum
              memiliki sistem sales yang scalable, dan owner masih menjadi penopang utama revenue
              perusahaan.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-6xl">
          {pains.map((p, idx) => (
            <motion.div
              key={idx}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className={[
                'group relative border border-white/10 bg-zinc-900/40 backdrop-blur-sm p-6 md:p-7 transition-colors hover:bg-zinc-900/70',
                idx === 4 ? 'md:col-span-2' : '',
              ].join(' ')}
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-[var(--cf-accent)]/70" />
              <div className="flex items-start gap-4">
                <div className="rounded-md border border-gold-500/30 bg-gold-500/10 p-2.5 text-gold-400 shrink-0">
                  <p.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-bold text-white mb-1.5">{p.title}</h3>
                  <p className="text-sm md:text-base text-zinc-400 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        <FadeIn direction="up" delay={0.3}>
          <div className="mt-12 md:mt-16 max-w-4xl">
            <div className="relative border border-gold-500/30 bg-black/50 backdrop-blur-md p-8 md:p-10">
              <p className="text-lg md:text-2xl font-semibold text-white leading-relaxed">
                Masalah terbesar bisnis Anda mungkin bukan di produk atau marketing, tapi di sistem
                sales team yang belum dibangun dengan benar.{' '}
                <span className="text-gold-400">
                  Sales yang scalable membutuhkan struktur, target, dan ritme eksekusi.
                </span>
              </p>
              <p className="mt-5 text-sm md:text-base text-zinc-400 leading-relaxed">
                Bisnis besar tidak bertumbuh karena owner bekerja lebih keras setiap hari. Bisnis
                besar bertumbuh karena memiliki sales yang mampu menghasilkan revenue secara
                konsisten!
              </p>
              <button
                type="button"
                onClick={openRegistrationCTA}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--cf-gold)] px-6 py-3 text-sm font-black text-black transition hover:bg-[var(--cf-cream)] hover:text-[var(--cf-ink)]"
              >
                Daftar Sekarang <ArrowRight className="h-4 w-4" />
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
