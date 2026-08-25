import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { CrescentAndStar, IslamicLantern, RubElHizb } from './IslamicDecorations';
import { Sparkles, Heart, ChevronDown, Moon, Music, Play, Pause } from 'lucide-react';
import { ambientAudio } from '../utils/audio';
import { naatAudio } from '../utils/naatAudioEngine';

interface HeroProps {
  onOpenGreeting: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenGreeting, onExploreClick }) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(naatAudio.getIsPlaying());

  useEffect(() => {
    const unsubscribe = naatAudio.subscribe(() => {
      setIsPlayingAudio(naatAudio.getIsPlaying());
    });
    return unsubscribe;
  }, []);

  const handleOpenGreeting = () => {
    ambientAudio.playBlessingChime();
    onOpenGreeting();
  };

  const handleToggleNaat = async () => {
    await naatAudio.togglePlay();
  };

  return (
    <section
      id="hero-section"
      className="relative min-h-[95vh] md:min-h-screen flex flex-col items-center justify-center text-center px-4 pt-24 pb-16 overflow-hidden z-10"
    >
      {/* Decorative Hanging Lanterns on sides */}
      <div className="absolute top-0 left-6 sm:left-14 md:left-24 pointer-events-none z-10">
        <motion.div
          animate={{ y: [0, 6, 0], rotate: [-1.5, 1.5, -1.5] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="drop-shadow-[0_10px_20px_rgba(212,175,55,0.35)]"
        >
          <IslamicLantern size={38} />
        </motion.div>
      </div>

      <div className="absolute top-0 right-6 sm:right-14 md:right-24 pointer-events-none z-10">
        <motion.div
          animate={{ y: [0, 8, 0], rotate: [1.5, -1.5, 1.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="drop-shadow-[0_10px_20px_rgba(212,175,55,0.35)]"
        >
          <IslamicLantern size={44} />
        </motion.div>
      </div>

      {/* Concentric Rotating Decorative Rings from Immersive UI */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-10 flex items-center justify-center">
        <div className="w-[320px] sm:w-[480px] md:w-[620px] h-[320px] sm:h-[480px] md:h-[620px] opacity-15 border border-[#d4af37] rounded-full flex items-center justify-center transform rotate-12 animate-float-slow">
          <div className="w-[240px] sm:w-[380px] md:w-[490px] h-[240px] sm:h-[380px] md:h-[490px] border border-[#d4af37]/60 rounded-full flex items-center justify-center transform -rotate-45">
            <div className="w-[160px] sm:w-[260px] md:w-[340px] h-[160px] sm:h-[260px] md:h-[340px] border border-[#d4af37]/40 rounded-full flex items-center justify-center">
              <svg className="w-28 sm:w-44 h-28 sm:h-44 opacity-20 text-[#d4af37] fill-current" viewBox="0 0 100 100">
                <path d="M50 0 L61 39 L100 50 L61 61 L50 100 L39 61 L0 50 L39 39 Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Central Soft Golden Light Aura */}
      <div className="absolute w-[360px] sm:w-[540px] md:w-[720px] h-[360px] sm:h-[540px] md:h-[720px] rounded-full bg-radial from-[#d4af37]/20 via-[#064e3b]/30 to-transparent blur-3xl pointer-events-none -z-10 animate-soft-pulse" />

      {/* Main Content Container */}
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center">
        {/* Subtle Rosette Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mb-4 flex items-center justify-center gap-2.5 px-4 py-1.5 rounded-full bg-[#064e3b]/80 border border-[#d4af37]/30 backdrop-blur-md shadow-lg"
        >
          <RubElHizb size={13} className="text-[#d4af37]" />
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37]">
            12th Rabi-ul-Awwal • 1447 AH
          </span>
          <RubElHizb size={13} className="text-[#d4af37]" />
        </motion.div>

        {/* Crescent Emblem */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.3 }}
          className="mb-4 drop-shadow-[0_0_30px_rgba(212,175,55,0.4)]"
        >
          <CrescentAndStar size={72} />
        </motion.div>

        {/* Small Eyebrow Calligraphy */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mb-3"
        >
          <p className="font-arabic text-2xl sm:text-3xl md:text-4xl text-[#d4af37] font-normal drop-shadow-sm select-none" dir="rtl">
            بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
          </p>
        </motion.div>

        {/* Main Heading 1: Rabi-ul-Awwal Mubarak */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.55 }}
          className="text-xs sm:text-sm md:text-base font-light tracking-[0.4em] text-[#d4af37] uppercase mt-1 mb-3"
        >
          Rabi-ul-Awwal
        </motion.h2>

        {/* Main Emotional Heading 2: Eid Milad-un-Nabi Mubarak */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.7 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-wide text-[#fdfcf0] leading-tight mb-4"
        >
          Eid Milad-un-Nabi <span className="italic text-[#d4af37] font-serif">Mubarak</span>
        </motion.h1>

        {/* Salawat Honorific tag */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="font-arabic text-xl sm:text-2xl text-[#d4af37]/90 mb-5"
          dir="rtl"
        >
          صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ
        </motion.div>

        {/* Subtitle Message */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="text-sm sm:text-base md:text-lg font-light tracking-[0.1em] text-[#fdfcf0]/80 max-w-2xl leading-relaxed mb-8 px-4"
        >
          May this blessed occasion fill your heart and home with eternal peace, divine mercy, radiant love, and abundant blessings.
        </motion.p>

        {/* Interactive CTA: "Open Mubarakbad ✨" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 1.05 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          {/* Primary Glow CTA Button */}
          <div className="relative group cursor-pointer">
            <div className="absolute -inset-1 bg-[#d4af37] rounded-full blur-md opacity-30 group-hover:opacity-60 transition-opacity duration-300" />
            <button
              onClick={handleOpenGreeting}
              id="open-mubarakbad-hero-btn"
              type="button"
              className="relative px-8 py-3.5 bg-[#064e3b] hover:bg-[#08634b] border border-[#d4af37]/50 rounded-full text-[#d4af37] text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] backdrop-blur-md flex items-center gap-2.5 transition-all duration-300 active:scale-98 shadow-xl cursor-pointer"
            >
              <Sparkles size={16} className="text-[#d4af37] group-hover:rotate-12 transition-transform duration-300" />
              <span>Open Card ✨</span>
            </button>
          </div>

          {/* Quick Play Naat Button */}
          <button
            onClick={handleToggleNaat}
            id="hero-play-naat-btn"
            type="button"
            className={`px-7 py-3.5 rounded-full text-xs sm:text-sm font-medium uppercase tracking-[0.15em] border backdrop-blur-md transition-all duration-300 flex items-center gap-2.5 cursor-pointer shadow-lg ${
              isPlayingAudio
                ? 'bg-[#d4af37] text-[#022c22] border-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.4)]'
                : 'text-[#d4af37] bg-[#064e3b]/70 hover:bg-[#064e3b] border-[#d4af37]/40 hover:border-[#d4af37]'
            }`}
          >
            {isPlayingAudio ? <Pause size={15} /> : <Play size={15} />}
            <span>{isPlayingAudio ? 'Pause Voice' : 'Listen Naat 🎵'}</span>
          </button>

          <button
            onClick={onExploreClick}
            id="explore-significance-btn"
            type="button"
            className="px-6 py-3.5 rounded-full text-xs sm:text-sm font-medium uppercase tracking-[0.15em] text-[#fdfcf0]/80 hover:text-white bg-[#064e3b]/40 hover:bg-[#064e3b]/80 border border-[#d4af37]/25 hover:border-[#d4af37]/60 backdrop-blur-md transition-all duration-300 flex items-center gap-2 cursor-pointer"
          >
            <Heart size={15} className="text-[#d4af37]" />
            <span>Duas</span>
          </button>
        </motion.div>
      </div>

      {/* Lower Status Cards (Immersive UI Layout Accents) */}
      <div className="w-full max-w-5xl mt-14 px-4 hidden md:flex items-center justify-between pointer-events-none opacity-85">
        {/* Left Status */}
        <div className="flex items-center gap-3 text-left">
          <div className="w-10 h-10 rounded-full border border-[#d4af37]/30 flex items-center justify-center backdrop-blur-sm bg-white/5 text-[#d4af37]">
            <Moon size={16} />
          </div>
          <div className="text-[10px] uppercase tracking-widest leading-tight">
            <span className="opacity-50 block text-[#fdfcf0]">Blessed Chapter</span>
            <span className="text-[#d4af37] font-semibold">12 Rabi-ul-Awwal</span>
          </div>
        </div>

        {/* Right Quranic Citation */}
        <div className="text-right max-w-sm">
          <p className="text-[13px] italic font-serif text-[#fdfcf0]/90 leading-snug">
            &ldquo;Indeed, there has come to you from Allah a Light and a clear Book.&rdquo;
          </p>
          <p className="text-[10px] uppercase tracking-widest text-[#d4af37]/70 mt-1">
            Surah Al-Ma&apos;idah 5:15
          </p>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer pointer-events-auto"
        onClick={onExploreClick}
      >
        <span className="text-[10px] uppercase tracking-[0.25em] text-[#d4af37]/80 font-medium">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={16} className="text-[#d4af37]" />
        </motion.div>
      </motion.div>
    </section>
  );
};

