import React from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Check, MicOff, Users, Lock, ArrowRight, Calendar, Clock, MapPin } from 'lucide-react';
import { FadeIn } from '../animations/FadeIn';
import { StaggerContainer } from '../animations/StaggerContainer';
import { motion } from 'framer-motion';
import { openRegistrationCTA } from '../../lib/constants';

const EventFormat: React.FC = () => {
  const cards = [
    {
      icon: <Users className="w-8 h-8 text-gold-400" />,
      title: "Diskusi strategis",
      desc: "Bukan kelas massal. Forum diskusi untuk owner serius."
    },
    {
      icon: <Lock className="w-8 h-8 text-gold-400" />,
      title: "Curated audience",
      desc: "Hanya owner bisnis yang lolos seleksi dan relevan."
    },
    {
      icon: <MicOff className="w-8 h-8 text-gold-400" />,
      title: "No recording",
      desc: "Apa yang dibicarakan di sesi ini, tetap di sesi ini."
    },
    {
      icon: <Check className="w-8 h-8 text-gold-400" />,
      title: "By invitation only",
      desc: "Free tapi dikurasi — bukan webinar terbuka untuk umum."
    }
  ];

  return (
    <section className="py-32 bg-zinc-950 relative overflow-hidden md:min-h-screen md:flex md:flex-col md:justify-center">

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-gold-900/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-zinc-800/20 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        <div className="text-center mb-12">
          <FadeIn direction="up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Format Event
            </h2>
          </FadeIn>
        </div>

        {/* Event Details Banner */}
        <FadeIn direction="up" delay={0.1}>
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-r from-gold-600/20 to-gold-900/10 border border-gold-500/30 rounded-2xl p-8 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <MapPin className="w-8 h-8 text-gold-400 mb-3" />
                  <p className="text-gold-200 font-medium text-lg">Jakarta</p>
                </div>
                <div className="flex flex-col items-center">
                  <Calendar className="w-8 h-8 text-gold-400 mb-3" />
                  <p className="text-gold-200 font-medium text-lg">Kamis, 13 Agustus 2026</p>
                </div>
                <div className="flex flex-col items-center">
                  <Clock className="w-8 h-8 text-gold-400 mb-3" />
                  <p className="text-gold-200 font-medium text-lg">09.00 – 17.00 WIB</p>
                </div>
              </div>
              <div className="text-center mt-6 pt-6 border-t border-gold-500/20">
                <p className="text-white font-bold text-lg md:text-xl">EXCLUSIVE COMMUNITY SHARING · BY INVITATION ONLY · FREE</p>
              </div>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-black/30 p-5 text-center">
                  <p className="text-xs tracking-[0.3em] text-gold-300 uppercase mb-2">Promo Khusus Presale</p>
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-zinc-500 line-through text-xl md:text-2xl">9.999.999</span>
                    <span className="text-white font-bold text-3xl md:text-4xl">7.999.999</span>
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <p className="text-xs tracking-[0.3em] text-gold-300 uppercase mb-3 text-center">Termasuk</p>
                  <p className="text-sm text-zinc-300 text-center leading-relaxed">
                    Breakfast, lunch, coffee break, handbook, sertifikat, Q&amp;A, pre-post test, networking, dan potongan kelas berikutnya.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <div className="max-w-7xl mx-auto">
          {/* Cards Grid */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
             {cards.map((item, idx) => (
               <motion.div key={idx} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                 <Card className="h-full bg-zinc-900/40 border border-zinc-800/60 backdrop-blur-sm p-8 hover:bg-zinc-900/60 hover:border-gold-500/30 transition-all duration-300 group flex flex-col items-start text-left">
                   <div className="bg-zinc-800/50 p-3 rounded-xl mb-6 group-hover:bg-gold-500/10 transition-colors">
                     {item.icon}
                   </div>
                   <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold-200 transition-colors">
                     {item.title}
                   </h3>
                   <p className="text-zinc-400 text-sm leading-relaxed">
                     {item.desc}
                   </p>
                 </Card>
               </motion.div>
             ))}
          </StaggerContainer>

          {/* Process Section */}
          <FadeIn direction="up" delay={0.4}>
             <div className="relative rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900/30 backdrop-blur-md">
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/80 to-transparent z-0" />

                <div className="grid grid-cols-1 md:grid-cols-5 gap-0 relative z-10">
                  <div className="col-span-2 p-10 md:p-12 flex flex-col justify-center border-r border-zinc-800/50">
                    <h3 className="text-3xl font-bold text-white mb-4">Proses Kurasi</h3>
                    <p className="text-zinc-400 mb-8">
                      Kami menjaga kualitas forum dengan proses seleksi yang ketat namun transparan.
                    </p>
                    <Button
                      variant="outline"
                      className="w-fit border-gold-600 text-gold-400 hover:bg-gold-600 hover:text-white"
                      onClick={openRegistrationCTA}
                    >
                      Apply untuk Undangan <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>

                  <div className="col-span-3 p-10 md:p-12 grid grid-cols-1 gap-8">
                     {[
                       { step: "01", text: "Isi data singkat Anda", sub: "Tinggalkan profil singkat agar tim bisa membaca konteks bisnis dan peran Anda." },
                       { step: "02", text: "Tim kami melakukan kurasi", sub: "Kami memvalidasi kecocokan peserta agar sesi tetap relevan dan berkualitas." },
                       { step: "03", text: "Undangan eksklusif dikirim", sub: "Peserta yang sesuai akan menerima detail sesi dan arahan kehadiran." }
                     ].map((s, i) => (
                       <div key={i} className="flex items-start">
                         <span className="text-4xl font-bold text-zinc-700 mr-6 leading-none select-none">{s.step}</span>
                         <div>
                           <h4 className="text-lg font-bold text-white mb-1">{s.text}</h4>
                           <p className="text-zinc-500 text-sm">{s.sub}</p>
                         </div>
                       </div>
                     ))}
                  </div>
                </div>
             </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export { EventFormat };
