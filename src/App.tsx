import React from 'react';
import { Layout } from './components/layout/Layout';
import { Navigation } from './components/sections/Navigation';
import { Hero } from './components/sections/Hero';
import { Pain } from './components/sections/ProblemStatement';
import { Audience } from './components/sections/TargetAudience';
import { NotForYou } from './components/sections/NotForYou';
import { LearningOutcomes } from './components/sections/WhatYoullLearn';
import { Speakers } from './components/sections/Speakers';
import { Framework } from './components/sections/Framework';
import { EventDetails } from './components/sections/EventFormat';
import { ConsequenceUrgency } from './components/sections/ConsequenceUrgency';
import { IndustryTrust } from './components/sections/IndustryTrust';
import { LeadCapture } from './components/sections/LeadCapture';
import { FAQ } from './components/sections/FAQ';
import { Footer } from './components/sections/Footer';
import { FloatingCTA } from './components/sections/FloatingCTA';

const App: React.FC = () => {
  return (
    <Layout>
      <Navigation />
      <Hero />
      <Pain />
      <Audience />
      <NotForYou />
      <LearningOutcomes />
      <Speakers />
      <Framework />
      <EventDetails />
      <ConsequenceUrgency />
      <IndustryTrust />
      <LeadCapture />
      <FAQ />
      <Footer />
      <FloatingCTA />
    </Layout>
  );
};

export default App;
