import React from 'react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { FadeIn } from '../animations/FadeIn';

const Speakers: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-black md:min-h-screen md:flex md:flex-col md:justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <FadeIn direction="up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Digembleng Langsung Oleh "Gurunya" Para Manager di Perusahaan Multinational
            </h2>
          </FadeIn>
        </div>

        {/* Two speakers side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">

          {/* Main Speaker — Coach Ferly */}
          <FadeIn direction="left" delay={0.1} className="h-full">
            <Card className="p-6 sm:p-8 border-gold-600/30 bg-zinc-900/50 group hover:border-gold-500/50 h-full backdrop-blur-sm">
              <Badge className="mb-4 sm:mb-6 bg-gold-500 text-black font-bold border-none px-3 py-1 text-xs sm:text-sm">
                MAIN SPEAKER
              </Badge>

              <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
                {/* Photo */}
                <div className="relative mb-5 sm:mb-6">
                  <div className="absolute inset-0 w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-gold-500/30 via-gold-600/20 to-transparent blur-xl group-hover:blur-2xl transition-all duration-700 opacity-60 group-hover:opacity-80" />
                  <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full p-1 bg-gradient-to-br from-gold-400/60 via-gold-500/40 to-gold-600/30 group-hover:from-gold-400/80 group-hover:via-gold-500/60 group-hover:to-gold-600/50 transition-all duration-500">
                    <div className="w-full h-full rounded-full overflow-hidden bg-zinc-900 ring-1 ring-white/5">
                      <img
                        src="/coach-ferly-august.png"
                        alt="Coach Ferly F. Raya"
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                        style={{ objectPosition: '50% 18%' }}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">Coach Ferly F. Raya</h3>
                <p className="text-gold-400 font-medium mb-1 text-sm sm:text-base">Senior Head Coach for Trillion-Scale Business Owner</p>
                <p className="text-gray-500 text-xs sm:text-sm">Alpha Leaders Community</p>
              </div>

              <div className="space-y-3 sm:space-y-4 border-t border-zinc-700/50 pt-5 sm:pt-6">
                <p className="text-gray-300 font-medium text-sm sm:text-base">Akan membagikan:</p>
                <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                  {[
                    "10+ tahun sebagai Senior Head Business Coach di salah satu coaching firm terbaik di Asia Tenggara",
                    "Former Vice President di perusahaan telekomunikasi multinasional",
                    "Pengalaman lebih dari 20 tahun di industri garmen dengan klien brand-brand multinasional",
                    "Business Owner dengan visi membawa bisnis menuju IPO Ready 2030",
                    "Founder & Advisor Alpha Leaders Community",
                    "Telah diliput di berbagai podcast dan media entrepreneur nasional",
                    "Membantu ratusan business owner dengan skala bisnis ratusan miliar hingga triliunan rupiah membangun sistem bisnis yang lebih autopilot dan scalable"
                  ].map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </FadeIn>

          {/* Guest Speaker — Shoeb Kagda */}
          <FadeIn direction="right" delay={0.3} className="h-full">
            <Card className="p-6 sm:p-8 border-gold-600/30 bg-zinc-900/50 group hover:border-gold-500/50 h-full backdrop-blur-sm">
              <Badge className="mb-4 sm:mb-6 bg-transparent border-gold-500 text-gold-500 font-bold px-3 py-1 text-xs sm:text-sm">
                SPECIAL GUEST SPEAKER
              </Badge>

              <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
                <div className="relative mb-5 sm:mb-6">
                  <div className="absolute inset-0 w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-gold-500/20 via-gold-600/10 to-transparent blur-xl opacity-50" />
                  <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-br from-gold-400/40 via-gold-500/30 to-gold-600/20">
                    <div className="w-full h-full rounded-full overflow-hidden bg-zinc-900 ring-1 ring-white/5">
                      <img src="/shoeb-kagda.jpg" alt="Shoeb Kagda" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" style={{ objectPosition: '50% 10%', transform: 'scale(1.0)' }} loading="lazy" />
                    </div>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">Shoeb Kagda</h3>
                <p className="text-gold-400 font-medium mb-1 text-sm sm:text-base">Country Director SMU Indonesia</p>
                <p className="text-gray-500 text-xs sm:text-sm">Business, economy, and leadership observer</p>
              </div>

              <div className="space-y-3 sm:space-y-4 border-t border-zinc-700/50 pt-5 sm:pt-6">
                <p className="text-gray-300 font-medium text-sm sm:text-base">Akan berbagi:</p>
                <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                  {[
                    "Founder Globe Asia & Indonesia Economic Forum",
                    "Mantan Group Editor in Chief BeritaSatu Media Holdings",
                    "Pengalaman lebih dari 35 tahun meliput dan menganalisis dunia bisnis, ekonomi, dan kepemimpinan di Asia Tenggara",
                    "Telah mewawancarai dan berdiskusi langsung dengan ratusan CEO, investor, entrepreneur, dan business leader terkemuka di Indonesia",
                    "Pembicara dan moderator pada berbagai forum bisnis, ekonomi, dan kepemimpinan tingkat nasional maupun internasional"
                  ].map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </FadeIn>

        </div>

      </div>
    </section>
  );
};

export { Speakers };
