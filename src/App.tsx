import React from 'react';
import { Layout } from './components/layout/Layout';
import { Navigation } from './components/sections/Navigation';
import { Hero } from './components/sections/Hero';
import { LeadCapture } from './components/sections/LeadCapture';
import { Pain } from './components/sections/ProblemStatement';
import { StrategicExplanation } from './components/sections/StrategicExplanation';
import { Audience } from './components/sections/TargetAudience';
import { LearningOutcomes } from './components/sections/WhatYoullLearn';
import { Speakers } from './components/sections/Speakers';
import { EventDetails } from './components/sections/EventFormat';
import { ConsequenceUrgency } from './components/sections/ConsequenceUrgency';
import { IndustryTrust } from './components/sections/IndustryTrust';
import { VideoProof } from './components/sections/VideoProof';
import { FinalCTA } from './components/sections/FinalCTA';
import { FAQ } from './components/sections/FAQ';
import { Footer } from './components/sections/Footer';
import { FloatingCTA } from './components/sections/FloatingCTA';

const App: React.FC = () => {
  return (
    <Layout>
      <Navigation />
      <Hero />
      <LeadCapture />
      <Pain />
      <StrategicExplanation />
      <Audience />
      <LearningOutcomes />
      <Speakers />
      <EventDetails />
      <ConsequenceUrgency />
      <IndustryTrust />
      <VideoProof />
      <FAQ />
      <FinalCTA />
      <Footer />
      <FloatingCTA />
    </Layout>
  );
};

export default App;
