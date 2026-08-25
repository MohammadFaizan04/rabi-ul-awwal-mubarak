/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { OpeningSequence } from './components/OpeningSequence';
import { FloatingParticles } from './components/FloatingParticles';
import { ArabesquePatternOverlay } from './components/IslamicDecorations';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { GreetingModal } from './components/GreetingModal';
import { BlessedMonth } from './components/BlessedMonth';
import { SpiritualMessage } from './components/SpiritualMessage';
import { DuaSection } from './components/DuaSection';
import { FinalGreeting } from './components/FinalGreeting';
import { Footer } from './components/Footer';
import { NaatPlayer } from './components/NaatPlayer';

export default function App() {
  const [showIntro, setShowIntro] = useState<boolean>(true);
  const [isGreetingModalOpen, setIsGreetingModalOpen] = useState<boolean>(false);
  const [burstTrigger, setBurstTrigger] = useState<number>(0);

  const handleTriggerBurst = () => {
    setBurstTrigger(Date.now());
  };

  const handleOpenGreeting = () => {
    handleTriggerBurst();
    setIsGreetingModalOpen(true);
  };

  const handleExploreClick = () => {
    const el = document.getElementById('blessed-month');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#022c22] text-[#fdfcf0] overflow-x-hidden selection:bg-[#d4af37]/30 selection:text-[#fff7d6] pb-24">
      {/* Immersive Radial Background Gradient */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-70"
        style={{
          background: 'radial-gradient(circle at 50% 35%, #064e3b 0%, #022c22 100%)',
        }}
        aria-hidden="true"
      />

      {/* Ambient Top-Left Gold Glow Orb */}
      <div 
        className="fixed top-[-10%] left-[-10%] w-[45vw] h-[45vw] max-w-[550px] max-h-[550px] bg-[#d4af37] rounded-full blur-[140px] opacity-10 pointer-events-none z-0" 
        aria-hidden="true"
      />

      {/* Ambient Bottom-Right Emerald Glow Orb */}
      <div 
        className="fixed bottom-[-10%] right-[-10%] w-[45vw] h-[45vw] max-w-[550px] max-h-[550px] bg-[#10b981] rounded-full blur-[140px] opacity-10 pointer-events-none z-0" 
        aria-hidden="true"
      />

      {/* Opening Cinematic Sequence on Initial Load */}
      {showIntro && <OpeningSequence onComplete={() => setShowIntro(false)} />}

      {/* Persistent Background Particle Simulation */}
      <FloatingParticles burstTrigger={burstTrigger} interactive={true} />

      {/* Islamic Geometric Lattice Arabesque Background Overlay */}
      <ArabesquePatternOverlay opacity={0.06} />

      {/* Top Navbar */}
      <Navbar onOpenGreeting={handleOpenGreeting} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* 1. Hero Section */}
        <Hero
          onOpenGreeting={handleOpenGreeting}
          onExploreClick={handleExploreClick}
        />

        {/* 2. Blessed Month Section */}
        <BlessedMonth />

        {/* 3. Spiritual Message & Salawat Reflection */}
        <SpiritualMessage />

        {/* 4. Interactive Dua Section */}
        <DuaSection />

        {/* 5. Final Grand Mubarakbad & Blessing Generator */}
        <FinalGreeting onBurst={handleTriggerBurst} />
      </main>

      {/* Floating Naat & Salawat Audio Player */}
      <NaatPlayer />

      {/* Interactive Glassmorphism Greeting Card Modal */}
      <GreetingModal
        isOpen={isGreetingModalOpen}
        onClose={() => setIsGreetingModalOpen(false)}
        onBurst={handleTriggerBurst}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
