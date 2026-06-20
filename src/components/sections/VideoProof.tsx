import React from 'react';
import { FadeIn } from '../animations/FadeIn';

const proofCards = [
  {
    label: 'Client testimonial preview',
    title: 'Selected Client Testimonial',
    note: 'Format proof ini disiapkan untuk memperlihatkan bagaimana perubahan cara manager memimpin dan menjaga accountability terasa nyata di lapangan.',
  },
  {
    label: 'Session atmosphere preview',
    title: 'Waiting Room / Session Atmosphere',
    note: 'Struktur modul proof sudah siap. Asset video final ditampilkan setelah versi terkompresi lolos QA mobile dan browser.',
  },
];

const VideoProof: React.FC = () => {
  return (
    <section className="bg-zinc-950 py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-10 md:mb-12">
          <FadeIn direction="up">
            <p className="text-[11px] tracking-[0.22em] uppercase text-gold-400 font-black mb-4">
              Video proof
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight">
              Proof Layer Siap untuk Menunjukkan
              <br />
              Diskusi yang Lebih Tajam dari Webinar Generik
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="mt-5 text-base md:text-lg text-zinc-400 leading-relaxed max-w-2xl">
              Bagian ini disiapkan untuk proof video dan testimonial di bawah fold tanpa memaksa
              asset berat tampil di hero. Struktur final tetap menjaga nuansa executive invitation.
            </p>
          </FadeIn>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {proofCards.map((card, index) => (
            <FadeIn key={card.title} direction="up" delay={0.15 * (index + 1)}>
              <div className="relative overflow-hidden border border-white/10 bg-[linear-gradient(155deg,rgba(12,12,12,0.96),rgba(24,20,11,0.94))] p-4 md:p-5">
                <div className="aspect-[16/10] border border-gold-500/30 bg-[radial-gradient(circle_at_top,rgba(212,175,106,0.16),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] px-6 py-6">
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-gold-300">
                    {card.label}
                  </p>
                  <div className="mt-10 max-w-sm">
                    <p className="font-serif text-2xl text-white md:text-3xl">{card.title}</p>
                    <p className="mt-4 text-sm leading-relaxed text-zinc-300 md:text-base">
                      {card.note}
                    </p>
                  </div>
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
