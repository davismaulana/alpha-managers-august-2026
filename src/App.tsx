import React from 'react';
import { Layout } from './components/layout/Layout';
import { Navigation } from './components/sections/Navigation';
import { Hero } from './components/sections/Hero';
import { ProblemStatement } from './components/sections/ProblemStatement';
import { WhyThisHappens } from './components/sections/WhyThisHappens';
import { ShiftMindset } from './components/sections/ShiftMindset';
import { TargetAudience } from './components/sections/TargetAudience';
import { WhatYoullLearn } from './components/sections/WhatYoullLearn';
import { Speakers } from './components/sections/Speakers';
import { EventFormat } from './components/sections/EventFormat';
import { LimitedSeats } from './components/sections/LimitedSeats';
import { FinalCTA } from './components/sections/FinalCTA';
import { ClosingPhilosophy } from './components/sections/ClosingPhilosophy';
import { FAQ } from './components/sections/FAQ';
import { Footer } from './components/sections/Footer';

const App: React.FC = () => {
  return (
    <Layout>
      <Navigation />
      <Hero />
      <ProblemStatement />
      <WhyThisHappens />
      <ShiftMindset />
      <TargetAudience />
      <WhatYoullLearn />
      <Speakers />
      <EventFormat />
      <LimitedSeats />
      <FinalCTA />
      <ClosingPhilosophy />
      <FAQ />
      <Footer />
    </Layout>
  );
};

export default App;
