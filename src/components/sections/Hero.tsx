import React from 'react';
import { FadeIn } from '../animations/FadeIn';
import { scrollToLeadForm } from '../../lib/constants';
import { Calendar, Clock, Users, Video, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full bg-[var(--cf-ink)] pt-28 pb-20 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_8%,rgba(212,175,106,0.16),transparent_36%),linear-gradient(140deg,rgba(5,5,5,1)_0%,rgba(17,17,17,0.94)_55%,rgba(229,219,199,0.10)_100%)]" />
      <div className="absolute left-0 top-28 h-28 w-full -skew-y-3 bg-[var(--cf-cream)] opacity-[0.06]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center md:text-left">
          <FadeIn direction="up" delay={0}>
            <p className="text-[11px] md:text-xs font-black tracking-[0.18em] uppercase text-gold-300 mb-5">
              Exclusive Community Sharing · By Invitation Only
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.15}>
            <h1 className="font-serif text-4xl md:text-6xl xl:text-7xl font-bold leading-[1.02] tracking-normal">
              Sudah Rekrut Banyak Sales,{' '}
              <span className="text-gold-400">Tapi Closing &amp; Revenue</span>{' '}
              Masih Naik Turun?
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <p className="mt-6 max-w-3xl mx-auto md:mx-0 text-base md:text-xl leading-7 md:leading-9 text-zinc-300">
              Setiap bulan Anda menambah sales dan budget marketing, tetapi omzet tetap sulit
              diprediksi karena tim belum punya struktur, target, insentif, dan cara konversi
              yang rapi. Sesi ini membantu owner membangun sales team yang lebih terukur, lebih
              konsisten, dan tidak bergantung penuh pada dorongan harian dari owner.
            </p>
          </FadeIn>
        </div>

        <FadeIn direction="up" delay={0.45} duration={0.8}>
          <div className="relative mx-auto mt-10 md:mt-14 w-full max-w-5xl">
            <div className="absolute -left-3 -top-3 md:-left-5 md:-top-5 h-full w-full border border-gold-500/30 pointer-events-none" aria-hidden="true" />

            <picture>
              <source
                type="image/webp"
                media="(min-width: 768px)"
                srcSet="/hero-poster.webp"
              />
              <source
                type="image/webp"
                srcSet="/hero-poster-mobile.webp"
              />
              <source
                media="(min-width: 768px)"
                srcSet="/hero-poster.jpg"
              />
              <img
                src="/hero-poster-mobile.jpg"
                alt="The Million Dollar Sales Team — Coach Ferly F. Raya · 25 Juni 2026"
                width={1080}
                height={1350}
                loading="eager"
                fetchPriority="high"
                className="relative z-10 block w-full h-auto shadow-[0_36px_100px_rgba(0,0,0,0.55)] border border-gold-500/30"
              />
            </picture>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.6}>
          <div className="mt-10 md:mt-14 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 max-w-5xl mx-auto">
            <button
              onClick={scrollToLeadForm}
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[var(--cf-gold)] px-8 text-base md:text-lg font-black text-black transition hover:bg-[var(--cf-cream)] hover:text-[var(--cf-ink)] cursor-pointer"
            >
              Daftar Sekarang
              <ArrowRight className="h-5 w-5" />
            </button>
            <p className="max-w-md text-sm text-zinc-400 text-center sm:text-left">
              Isi Owner Profile terlebih dahulu. Tim internal akan meninjau kecocokan sebelum
              undangan dikirim.
            </p>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.75}>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-5xl mx-auto">
            {[
              { icon: Calendar, label: 'Kamis, 25 Juni 2026' },
              { icon: Clock, label: '08.00-12.00 WIB' },
              { icon: Video, label: 'Online via Zoom' },
              { icon: Users, label: 'Owner-only' },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-3 text-xs sm:text-sm font-bold text-gold-200"
              >
                <item.icon className="h-4 w-4 shrink-0" />
                <span className="leading-tight">{item.label}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export { Hero };
