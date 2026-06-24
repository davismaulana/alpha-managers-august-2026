import React from 'react';
import { Card } from '../ui/Card';
import { UserCheck, Network, Handshake, MessageSquareMore, Speech, Users } from 'lucide-react';
import { FadeIn } from '../animations/FadeIn';
import { StaggerContainer } from '../animations/StaggerContainer';
import { motion } from 'framer-motion';
const WhatYoullLearn: React.FC = () => {
  const modules = [
    {
      number: "1",
      icon: UserCheck,
      title: "Bagaimana Manager Mendorong Tim Mencapai Target",
      desc: "Framework untuk memastikan aktivitas tim benar-benar menghasilkan outcome bisnis."
    },
    {
      number: "2",
      icon: Network,
      title: "Accountability System",
      desc: "Cara membangun budaya tanggung jawab tanpa harus terus mengawasi."
    },
    {
      number: "3",
      icon: Handshake,
      title: "Effective Delegation",
      desc: "Delegasi yang membuat pekerjaan selesai dengan standar yang tepat."
    },
    {
      number: "4",
      icon: MessageSquareMore,
      title: "Coaching & Performance Management",
      desc: "Teknik membina dan meningkatkan performa anggota tim."
    },
    {
      number: "5",
      icon: Speech,
      title: "Leadership Communication",
      desc: "Cara memberikan arahan, feedback, dan ekspektasi dengan lebih efektif."
    },
    {
      number: "6",
      icon: Users,
      title: "Building High Performance Team",
      desc: "Membangun tim yang lebih mandiri, disiplin, dan fokus pada hasil."
    }
  ];

  return (
    <section className="py-24 bg-zinc-950 md:min-h-screen md:flex md:flex-col md:justify-center">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Apa yang Akan Dikuasai Oleh Manager Anda
            </h2>
            <p className="text-xl text-gray-400">
              Dalam sesi ini mereka akan memahami:
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
      </div>
    </section>
  );
};

export { WhatYoullLearn };
