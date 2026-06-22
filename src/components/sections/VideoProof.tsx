import React from 'react';
import { FadeIn } from '../animations/FadeIn';

const proofCards = [
  {
    label: 'Testimoni client',
    title: 'Apa Kata Mereka Tentang Coach Ferly & Alpha Leaders',
    note: 'Testimoni client ditampilkan dalam treatment gelap dan premium agar tetap terasa seperti invitation page, bukan galeri video generik.',
    src: '/testimonial-proof.mp4',
    poster: '/alpha-managers-og.png',
  },
  {
    label: 'Atmosfer waiting room',
    title: 'Nuansa Session yang Terkurasi untuk Manager Level',
    note: 'Lapisan proof kedua menunjukkan atmosfer event dan kualitas experience yang diterima peserta saat hadir langsung.',
    src: '/waiting-room-proof.mp4',
    poster: '/alpha-managers-og.png',
  },
];

const VideoProof: React.FC = () => {
  return (
    <section className="bg-zinc-950 py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-10 md:mb-12">
          <FadeIn direction="up">
            <p className="text-[11px] tracking-[0.22em] uppercase text-gold-400 font-black mb-4">
              Proof video
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight">
              Proof Layer untuk Menunjukkan
              <br />
              Kaliber Session dan Pengalaman Pesertanya
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="mt-5 text-base md:text-lg text-zinc-400 leading-relaxed max-w-2xl">
              Presentasi videonya mengikuti grammar pre-ABM: poster-led, native playback, dan
              tetap berada di bawah fold agar hero tetap bersih dan poster-first.
            </p>
          </FadeIn>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {proofCards.map((card, index) => (
            <FadeIn key={card.title} direction="up" delay={0.15 * (index + 1)}>
              <div className="relative overflow-hidden border border-white/10 bg-[linear-gradient(155deg,rgba(12,12,12,0.96),rgba(24,20,11,0.94))] p-4 md:p-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,106,0.14),transparent_32%)]" />
                <div className="relative overflow-hidden border border-gold-500/30">
                  <video
                    controls
                    preload="none"
                    playsInline
                    className="aspect-[16/10] w-full bg-black object-cover"
                    poster={card.poster}
                  >
                    <source src={card.src} type="video/mp4" />
                  </video>
                </div>
                <div className="relative px-2 pt-5">
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-gold-300">
                    {card.label}
                  </p>
                  <p className="mt-3 font-serif text-2xl text-white md:text-3xl">{card.title}</p>
                  <p className="mt-4 text-sm leading-relaxed text-zinc-300 md:text-base">
                    {card.note}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export { VideoProof };
