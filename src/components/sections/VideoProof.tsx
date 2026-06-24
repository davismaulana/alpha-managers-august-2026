import React, { useRef, useState } from 'react';
import { FadeIn } from '../animations/FadeIn';
import { Play } from 'lucide-react';

const proofCards = [
  {
    eyebrow: 'Bukti Nyata',
    title: 'Apa Kata Mereka Tentang Coach Ferly & Alpha Leaders',
    description:
      'Testimoni ini menunjukkan bagaimana peserta dan client merasakan dampak nyata dari framework leadership dan execution yang diajarkan.',
    src: '/testimonial-proof.mp4',
    poster: '/august-horizontal.webp',
    duration: 'Durasi: ±2 menit',
  },
  {
    eyebrow: 'Atmosfer Session',
    title: 'Nuansa Executive Session yang Akan Diterima Peserta',
    description:
      'Lihat bagaimana kualitas room, delivery, dan intensity session dibangun agar para manager dan leader masuk ke ruang belajar yang serius.',
    src: '/waiting-room-proof.mp4',
    poster: '/august-horizontal.webp',
    duration: 'Durasi: ±1 menit',
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

  const handleTogglePlayback = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (video.paused) {
      video.play();
      setPlayingIndex(index);
      return;
    }

    video.pause();
    setPlayingIndex((current) => (current === index ? null : current));
  };

  return (
    <section id="video" className="py-20 bg-[#F5F0E8] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gold-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <FadeIn direction="up">
            <span className="text-gold-500 text-sm font-semibold uppercase tracking-widest">Langkah Pertama</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4 text-gray-900">
              Tonton Bukti Nyata Ini <br />
              <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">
                Sebelum Anda Apply
              </span>
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.15}>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Section ini sekarang mengikuti struktur Pre-ABM secara penuh: background, header, player shell,
              overlay play button, dan caption area di bawah video.
            </p>
          </FadeIn>
        </div>

        <div className="max-w-4xl mx-auto space-y-10">
          {proofCards.map((card, index) => (
            <div key={card.title}>
              <FadeIn direction="up" delay={0.2 + index * 0.1}>
                <div className="relative rounded-2xl overflow-hidden border border-gold-500/30 shadow-[0_8px_40px_-10px_rgba(212,175,106,0.15)]">
                  <video
                    ref={(node) => {
                      videoRefs.current[index] = node;
                    }}
                    className="w-full aspect-video bg-gray-100 object-cover"
                    preload="none"
                    playsInline
                    poster={card.poster}
                    onPlay={() => setPlayingIndex(index)}
                    onPause={() => setPlayingIndex((current) => (current === index ? null : current))}
                    onEnded={() => setPlayingIndex((current) => (current === index ? null : current))}
                    onClick={() => handleTogglePlayback(index)}
                  >
                    <source src={card.src} type="video/mp4" />
                    Browser Anda tidak mendukung pemutaran video.
                  </video>

                  {playingIndex !== index && (
                    <button
                      type="button"
                      className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 cursor-pointer group"
                      onClick={() => handlePlay(index)}
                      aria-label={`Putar video ${card.title}`}
                    >
                      <div className="absolute w-28 h-28 rounded-full bg-gold-500/20 blur-md group-hover:bg-gold-500/30 transition-all duration-300" />
                      <div className="relative w-20 h-20 rounded-full bg-gold-500/90 flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-gold-400 transition-all duration-300 border-2 border-gold-300/50">
                        <Play className="w-8 h-8 text-black fill-black ml-1" />
                      </div>
                      <p className="mt-5 text-white/80 text-sm font-medium tracking-wider uppercase">Putar Video</p>
                    </button>
                  )}
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.35 + index * 0.1}>
                <div className="mt-6 text-center">
                  <p className="text-gold-500 font-semibold text-sm uppercase tracking-[0.2em]">{card.eyebrow}</p>
                  <p className="text-gray-900 font-semibold text-xl md:text-2xl mt-3">{card.title}</p>
                  <p className="text-gray-600 text-sm md:text-base mt-3 max-w-2xl mx-auto">{card.description}</p>
                  <p className="text-gray-500 text-sm mt-2">{card.duration} • Bahasa Indonesia</p>
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { VideoProof };
