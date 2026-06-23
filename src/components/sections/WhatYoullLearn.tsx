import React from 'react';
import { Card } from '../ui/Card';
import { UserCheck, Network, Handshake, MessageSquareMore, Speech, Users } from 'lucide-react';
import { FadeIn } from '../animations/FadeIn';
import { StaggerContainer } from '../animations/StaggerContainer';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';
import { openRegistrationCTA } from '../../lib/constants';

const WhatYoullLearn: React.FC = () => {
  const modules = [
    {
      number: "1",
      icon: UserCheck,
      title: "Bagaimana Manager Mendorong Tim Mencapai Target",
      desc: "Cara memindahkan manager dari sekadar pengawas aktivitas menjadi pendorong hasil yang terukur."
    },
    {
      number: "2",
      icon: Network,
      title: "Accountability System",
      desc: "Sistem agar ekspektasi, deadline, dan follow-through tidak berhenti di ruang meeting."
    },
    {
      number: "3",
      icon: Handshake,
      title: "Effective Delegation",
      desc: "Mendelegasikan pekerjaan dengan jelas tanpa menarik semua keputusan kembali ke owner."
    },
    {
      number: "4",
      icon: MessageSquareMore,
      title: "Coaching & Performance Management",
      desc: "Ritme coaching yang membantu manager memperbaiki performa tim tanpa drama berkepanjangan."
    },
    {
      number: "5",
      icon: Speech,
      title: "Leadership Communication",
      desc: "Menyampaikan standar, feedback, dan arah tim secara tegas tanpa kehilangan kejelasan dan kepercayaan."
    },
    {
      number: "6",
      icon: Users,
      title: "Building High Performance Team",
      desc: "Prinsip membangun kultur kerja yang membuat orang bergerak, bertumbuh, dan bertanggung jawab."
    }
  ];

  return (
    <section className="py-24 bg-zinc-950 md:min-h-screen md:flex md:flex-col md:justify-center">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              What You'll Learn
            </h2>
            <p className="text-xl text-gray-400">
              Dalam sesi ini Anda akan memahami:
            </p>
          </FadeIn>
        </div>

        {/* Learning Modules */}
        <StaggerContainer className="grid grid-cols-1 gap-4 max-w-4xl mx-auto mb-16">
          {modules.map((item, idx) => (
            <motion.div key={idx} variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
              <Card className="p-6 border-zinc-800 bg-zinc-900/40 hover:bg-zinc-900/80 hover:border-gold-500/30 transition-all group">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <span className="text-3xl font-bold text-zinc-700 leading-none mb-2 group-hover:text-gold-500/30 transition-colors select-none">
                      {item.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                      <item.icon className="w-5 h-5 text-gold-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gold-400 mb-1">{item.title}</h3>
                    <p className="text-gray-300 group-hover:text-white transition-colors">{item.desc}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Divider Quote */}
        <FadeIn direction="up" delay={0.3}>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xl md:text-2xl text-zinc-400 italic leading-relaxed">
              "Manager yang kuat bukan lahir dari jabatan.{' '}
              <span className="text-white font-medium">Mereka dibangun dengan sistem, ritme, dan standar kepemimpinan yang benar.</span>"
            </p>
          </div>
        </FadeIn>

        {/* Main Outcome Box */}
        <FadeIn direction="up" delay={0.4}>
          <div className="max-w-5xl mx-auto">
            <div className="relative group">
               {/* Soft Glow Behind */}
               <div className="absolute -inset-1 bg-gradient-to-r from-gold-600/20 via-gold-400/10 to-gold-600/20 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-75 transition duration-1000" />

               <div className="relative bg-zinc-950/80 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-10 md:p-16 shadow-2xl">

                 {/* Decorative Top Accent */}
                 <div className="flex justify-center mb-10">
                   <div className="h-px w-24 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
                 </div>

                  <h3 className="text-center text-4xl md:text-5xl font-serif text-white mb-16 tracking-tight">
                    Main <span className="text-gold-500 italic">Outcome</span>
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {/* Vertical Separators for Desktop */}
                    <div className="hidden md:block absolute top-10 bottom-10 left-1/3 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                    <div className="hidden md:block absolute top-10 bottom-10 right-1/3 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

                    {/* Item 1 */}
                    <div className="text-center group/item hover:-translate-y-1 transition-transform duration-500">
                      <span className="text-6xl md:text-7xl font-serif text-white/5 font-bold block mb-4 group-hover/item:text-gold-500/10 transition-colors">01</span>
                      <h4 className="text-xl text-gold-200 font-medium mb-2">Rekrut Orang yang Tepat</h4>
                      <p className="text-gray-400 leading-relaxed text-sm">
                        Manager Anda memiliki pola pikir dan ritme untuk <span className="text-white">mendorong hasil, bukan hanya menjaga aktivitas.</span>
                      </p>
                    </div>

                    {/* Item 2 */}
                    <div className="text-center group/item hover:-translate-y-1 transition-transform duration-500 delay-100">
                      <span className="text-6xl md:text-7xl font-serif text-white/5 font-bold block mb-4 group-hover/item:text-gold-500/10 transition-colors">02</span>
                      <h4 className="text-xl text-gold-200 font-medium mb-2">Tim yang Lebih Mandiri</h4>
                      <p className="text-gray-400 leading-relaxed text-sm">
                        Delegasi bergerak menjadi eksekusi yang <span className="text-white">tetap hidup meski owner tidak masuk ke semua detail.</span>
                      </p>
                    </div>

                    {/* Item 3 */}
                    <div className="text-center group/item hover:-translate-y-1 transition-transform duration-500 delay-200">
                      <span className="text-6xl md:text-7xl font-serif text-white/5 font-bold block mb-4 group-hover/item:text-gold-500/10 transition-colors">03</span>
                      <h4 className="text-xl text-gold-200 font-medium mb-2">Performance Lebih Terjaga</h4>
                      <p className="text-gray-400 leading-relaxed text-sm">
                        Anda memiliki landasan untuk <span className="text-white">membangun middle management yang lebih accountable.</span>
                      </p>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.5}>
          <div className="mt-10 flex justify-center">
            <Button variant="primary" size="lg" className="px-10" onClick={openRegistrationCTA}>
              Apply untuk Undangan <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export { WhatYoullLearn };
