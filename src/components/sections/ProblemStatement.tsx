import React from 'react';
import { Card } from '../ui/Card';
import { AlertTriangle, Target, Workflow, ShieldAlert, Users } from 'lucide-react';
import { FadeIn } from '../animations/FadeIn';
import { StaggerContainer } from '../animations/StaggerContainer';
import { motion } from 'framer-motion';

const ProblemStatement: React.FC = () => {
  const painPoints = [
    {
      icon: AlertTriangle,
      title: "KPI Tidak Konsisten",
      desc: "Target bulanan terlihat jelas, tetapi ritme eksekusi di level manager masih naik turun dan sulit dijaga."
    },
    {
      icon: Target,
      title: "Manager Masih Operasional",
      desc: "Banyak manager sibuk memadamkan detail harian, bukan mendorong tim bergerak ke target."
    },
    {
      icon: Workflow,
      title: "Delegasi Tidak Menjadi Eksekusi",
      desc: "Tugas sudah dibagi, tetapi follow-through, ownership, dan hasil akhirnya tetap kembali ke owner."
    },
    {
      icon: ShieldAlert,
      title: "Banyak Meeting, Minim Accountability",
      desc: "Komunikasi terus berjalan, tetapi keputusan, deadline, dan tanggung jawab tidak benar-benar terkunci."
    },
    {
      icon: Users,
      title: "Training Belum Mengubah Performa",
      desc: "HR dan L&D sudah bergerak, tetapi perubahan perilaku kepemimpinan di lapangan masih belum terasa."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black to-zinc-900 md:min-h-screen md:flex md:flex-col md:justify-center">
      <div className="container mx-auto px-4 md:px-6">

        {/* Headline */}
        <div className="text-center mb-16">
          <FadeIn direction="up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white block mb-2">Ubah Manager Anda</span>
              <span className="text-gray-400">Dari Pemadam Kebakaran Menjadi Penggerak Pertumbuhan Bisnis</span>
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-lg text-gray-500 mt-6 max-w-2xl mx-auto">
              Banyak bisnis sudah punya revenue, produk, dan tim.<br />
              Yang belum kuat justru kapasitas manager untuk memimpin orang dan menjaga eksekusi tetap hidup.
            </p>
          </FadeIn>
        </div>

        {/* Pain Point Cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
          {painPoints.map((point, idx) => (
            <motion.div key={idx} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <Card className="border-l-4 border-l-red-500 bg-red-500/5 p-6 hover:bg-red-500/10 transition-colors duration-300 h-full">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-500/20 text-red-500">
                  <point.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{point.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{point.desc}</p>
              </Card>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Bottom Banner */}
        <FadeIn direction="up" delay={0.4}>
          <div className="max-w-4xl mx-auto text-center relative">
              <div className="absolute inset-0 bg-gold-500/20 blur-3xl rounded-full opacity-20" />
              <div className="relative border border-gold-500/30 bg-black/40 backdrop-blur-md rounded-2xl p-8 md:p-12">
                  <p className="text-2xl md:text-3xl font-semibold text-white leading-normal italic">
                    "Masalahnya bukan target Anda terlalu tinggi.<br />
                    Masalahnya sistem kepemimpinan manager Anda belum cukup kuat untuk <span className="text-gold-500">mendorong target itu tercapai.</span>"
                  </p>
              </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export { ProblemStatement };
