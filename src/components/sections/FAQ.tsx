import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { cn } from '../../lib/utils';
import { FadeIn } from '../animations/FadeIn';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Apakah event ini terbuka untuk umum?',
      answer:
        'Tidak. Sesi ini owner-only dan by invitation only agar diskusinya relevan dengan konteks bisnis yang sudah memiliki sales team.',
    },
    {
      question: 'Apakah ada biaya pendaftaran?',
      answer:
        'Tidak ada biaya pendaftaran. Namun peserta tetap dikurasi melalui Owner Profile dan internal assessment.',
    },
    {
      question: 'Kenapa harus mengisi Owner Profile dulu?',
      answer:
        'Agar tim Alpha Leaders dapat memastikan konteks bisnis, skala tantangan, dan kecocokan peserta sebelum undangan Zoom dikirim.',
    },
    {
      question: 'Apakah bisa membawa keluarga atau tim?',
      answer: 'By approval, tergantung konteks bisnis dan relevansi diskusi.',
    },
    {
      question: 'Apakah ini cocok jika saya belum punya sales team?',
      answer:
        'Tidak menjadi prioritas. Sesi ini paling relevan untuk owner yang sudah punya sales team dan ingin membuat performanya lebih terukur.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-zinc-950 md:min-h-screen md:flex md:flex-col md:justify-center">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <FadeIn direction="up">
          <p className="text-[11px] tracking-[0.22em] uppercase text-gold-400 font-black mb-4">
            FAQ
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-10 leading-tight">
            Pertanyaan yang Sering Ditanyakan
          </h2>
        </FadeIn>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <FadeIn key={idx} direction="up" delay={idx * 0.06}>
              <div
                className="border border-white/10 bg-zinc-900/40 hover:border-gold-500/30 transition-all cursor-pointer"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <div className="p-5 md:p-6 flex justify-between items-center gap-4">
                  <h3 className="text-base md:text-lg font-bold text-white">{faq.question}</h3>
                  {openIndex === idx ? (
                    <Minus className="w-5 h-5 text-gold-400 shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-zinc-500 shrink-0" />
                  )}
                </div>

                <div
                  className={cn(
                    'overflow-hidden transition-all duration-300 ease-in-out px-5 md:px-6',
                    openIndex === idx ? 'max-h-60 opacity-100 pb-5 md:pb-6' : 'max-h-0 opacity-0'
                  )}
                >
                  <p className="text-sm md:text-base text-zinc-300 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export { FAQ };
