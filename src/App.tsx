import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Problems } from './components/Problems';
import { Solution } from './components/Solution';
import { HowItWorks } from './components/HowItWorks';
import { Economics } from './components/Economics';
import { ServiceFeatures } from './components/ServiceFeatures';
import { Responsibility } from './components/Responsibility';
import { TargetAudience } from './components/TargetAudience';
import { LegalScheme } from './components/LegalScheme';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#333333] font-['Inter',sans-serif] selection:bg-[#FFD700] selection:text-[#1A2A6C]">
      {/* 1. Navigation Header */}
      <Header />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero / Title Section */}
        <Hero />

        {/* 2. Problem Section */}
        <Problems />

        {/* 3. Solution Section */}
        <Solution />

        {/* 4. How it works (4 steps) */}
        <HowItWorks />

        {/* 5. Economics of the deal (1,000 RUB benchmark + interactive calculator) */}
        <Economics />

        {/* 6. What's included in service */}
        <ServiceFeatures />

        {/* 7. Distribution of responsibility */}
        <Responsibility />

        {/* 8. Target audience */}
        <TargetAudience />

        {/* 9. Legal construction */}
        <LegalScheme />
      </main>

      {/* 10. Footer with contacts (strictly no application form) */}
      <Footer />
    </div>
  );
}
