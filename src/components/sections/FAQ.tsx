import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Plus, Minus } from 'lucide-react';
import { cn } from '../../lib/utils';
import { FadeIn } from '../animations/FadeIn';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Apakah harus manager?",
      answer: "Tidak. Program ini juga cocok untuk supervisor, team leader, atau karyawan yang sedang dipersiapkan menjadi manager."
    },
    {
      question: "Apakah materi lebih teori atau praktik?",
      answer: "Fokus utama program adalah implementasi dan studi kasus yang dapat langsung diterapkan di tempat kerja."
    },
    {
      question: "Apakah ada sesi tanya jawab?",
      answer: "Ya. Akan tersedia sesi diskusi dan Q&A bersama pemateri."
    },
    {
      question: "Apakah mendapatkan sertifikat?",
      answer: "Ya, seluruh peserta akan mendapatkan Certificate of Attendance."
    }
  ];

  return (
    <section className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <FadeIn direction="up">
          <h2 className="text-3xl font-bold text-white text-center mb-12">FAQ</h2>
        </FadeIn>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <FadeIn key={idx} direction="up" delay={idx * 0.1}>
              <Card 
                className="p-6 bg-zinc-900/30 border-zinc-800 hover:border-gold-500/20 cursor-pointer transition-all"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <div className="flex justify-between items-center group">
                  <h3 className="text-lg font-medium text-gold-400 group-hover:text-gold-300 transition-colors">
                    {faq.question}
                  </h3>
                  {openIndex === idx ? (
                    <Minus className="w-5 h-5 text-gray-500" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-500" />
                  )}
                </div>
                
                <div className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    openIndex === idx ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
                  )}>
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export { FAQ };
