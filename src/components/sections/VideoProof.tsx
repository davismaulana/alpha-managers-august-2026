import React, { useRef, useState } from 'react';
import { FadeIn } from '../animations/FadeIn';
import { Play } from 'lucide-react';

const proofCards = [
  {
    label: 'Testimoni client',
    title: 'Apa Kata Mereka Tentang Coach Ferly & Alpha Leaders',
    note: 'Treatment video mempertahankan grammar pre-ABM: dark frame, poster-led preview, dan playback native agar proof terasa premium, bukan galeri biasa.',
    src: '/testimonial-proof.mp4',
    poster: '/august-horizontal.webp',
  },
  {
    label: 'Atmosfer session',
    title: 'Nuansa Experience yang Diterima Peserta Saat Hadir',
    note: 'Video kedua memperlihatkan atmosfer session yang terkurasi untuk leader dan manager level.',
    src: '/waiting-room-proof.mp4',
    poster: '/august-horizontal.webp',
  },
];

const VideoProof: React.FC = () => {
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const handlePlay = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;
    video.play();
    setPlayingIndex(index);
  };

  return (
    <section className="bg-zinc-950 py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-10 md:mb-12">
          <FadeIn direction="up">
            <p className="text-[11px] tracking-[0.22em] uppercase text-gold-400 font-black mb-4">
              Social proof
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight">
              Apa Kata Mereka Tentang Coach Ferly &amp; Alpha Leaders?
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="mt-5 text-base md:text-lg text-zinc-400 leading-relaxed max-w-2xl">
              Video di bawah mengikuti styling pre-ABM seperti yang diminta, dengan preview premium dan native playback.
            </p>
          </FadeIn>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {proofCards.map((card, index) => (
            <FadeIn key={card.title} direction="up" delay={0.15 * (index + 1)}>
              <div className="relative overflow-hidden border border-white/10 bg-[linear-gradient(155deg,rgba(12,12,12,0.96),rgba(24,20,11,0.94))] p-4 md:p-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,106,0.14),transparent_32%)]" />
                <div className="relative overflow-hidden rounded-[24px] border border-gold-500/30 shadow-[0_8px_40px_-10px_rgba(212,175,106,0.15)]">
                  <video
                    ref={(node) => {
                      videoRefs.current[index] = node;
                    }}
                    controls={playingIndex === index}
                    preload="none"
                    playsInline
                    onPlay={() => setPlayingIndex(index)}
                    onPause={() => setPlayingIndex((current) => (current === index ? null : current))}
                    className="aspect-[16/10] w-full bg-black object-cover"
                    poster={card.poster}
                  >
                    <source src={card.src} type="video/mp4" />
                  </video>

                  {playingIndex !== index && (
                    <button
                      type="button"
                      className="absolute inset-0 group cursor-pointer bg-black/28"
                      onClick={() => handlePlay(index)}
                      aria-label={`Putar video ${card.title}`}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-gold-400 group-hover:bg-gold-300 transition-all duration-200 shadow-[0_8px_30px_-4px_rgba(212,175,106,0.55)] group-hover:scale-105">
                          <svg className="w-12 h-12 md:w-16 md:h-16 text-black drop-shadow-lg ml-1" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M8 5v14l11-7z"></path>
                          </svg>
                        </span>
                      </div>
                    </button>
                  )}
                </div>
                <div className="relative px-2 pt-5 text-center">
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-gold-300">
                    {card.label}
                  </p>
                  <p className="mt-3 font-serif text-2xl text-white md:text-3xl">{card.title}</p>
                  <p className="mt-3 text-sm italic leading-relaxed text-gold-300/80 md:text-base">
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
