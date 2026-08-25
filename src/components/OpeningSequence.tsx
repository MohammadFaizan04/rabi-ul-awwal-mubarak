import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CrescentAndStar, RubElHizb } from './IslamicDecorations';
import { Sparkles, ArrowRight } from 'lucide-react';

interface OpeningSequenceProps {
  onComplete: () => void;
}

export const OpeningSequence: React.FC<OpeningSequenceProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<number>(1);
  const [isSkipped, setIsSkipped] = useState<boolean>(false);

  useEffect(() => {
    if (isSkipped) {
      onComplete();
      return;
    }

    // Sequence timing
    const t1 = setTimeout(() => setStage(2), 700);
    const t2 = setTimeout(() => setStage(3), 1600);
    const t3 = setTimeout(() => setStage(4), 2600);
    const t4 = setTimeout(() => setStage(5), 3700);
    const t5 = setTimeout(() => {
      setStage(6);
      setTimeout(onComplete, 1100);
    }, 5200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [isSkipped, onComplete]);

  const handleSkip = () => {
    setIsSkipped(true);
    onComplete();
  };

  return (
    <AnimatePresence>
      <motion.div
        key="opening-overlay"
        initial={{ opacity: 1 }}
        animate={{ opacity: stage === 6 ? 0 : 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#01110b] overflow-hidden px-4 text-center select-none"
      >
        {/* Stage 1: Central Golden Ambient Light Pulse */}
        <motion.div
          initial={{ scale: 0.2, opacity: 0 }}
          animate={{
            scale: stage >= 1 ? [0.4, 1.2, 1] : 0.2,
            opacity: stage >= 1 ? [0.2, 0.7, 0.5] : 0,
          }}
          transition={{ duration: 2.5, ease: 'easeOut' }}
          className="absolute w-[500px] h-[500px] rounded-full bg-radial from-[#d4af37]/35 via-[#0d533f]/30 to-transparent blur-3xl pointer-events-none"
        />

        {/* Stage 3: Geometric Background Lattice Emerges */}
        {stage >= 3 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 0.18, scale: 1 }}
            transition={{ duration: 1.6 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="w-[600px] h-[600px] rounded-full border border-[#d4af37]/30 flex items-center justify-center">
              <div className="w-[450px] h-[450px] rounded-full border border-emerald-500/20 flex items-center justify-center animate-float-slow">
                <RubElHizb size={280} className="text-[#d4af37]/20" />
              </div>
            </div>
          </motion.div>
        )}

        {/* Stage 4: Crescent & Star Manifestation */}
        <div className="relative z-10 flex flex-col items-center max-w-xl">
          {stage >= 4 && (
            <motion.div
              initial={{ scale: 0.4, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6 drop-shadow-[0_0_25px_rgba(212,175,55,0.6)]"
            >
              <CrescentAndStar size={76} />
            </motion.div>
          )}

          {/* Stage 5: Bismillah & Greeting Typography Reveal */}
          {stage >= 5 && (
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, staggerChildren: 0.2 }}
              className="space-y-3"
            >
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="font-arabic text-2xl md:text-3xl text-[#e5c158] font-normal tracking-wide"
                dir="rtl"
              >
                بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="font-display text-2xl md:text-4xl tracking-widest text-[#f5ecd5] uppercase font-semibold"
              >
                Rabi-ul-Awwal
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xs md:text-sm text-emerald-300/80 tracking-widest uppercase flex items-center justify-center gap-2"
              >
                <Sparkles size={13} className="text-[#d4af37]" />
                Entering the Blessed Experience
                <Sparkles size={13} className="text-[#d4af37]" />
              </motion.p>
            </motion.div>
          )}
        </div>

        {/* Skip button in top-right */}
        <button
          onClick={handleSkip}
          id="skip-intro-btn"
          aria-label="Skip cinematic introduction"
          className="absolute top-6 right-6 z-20 px-3.5 py-1.5 rounded-full text-xs text-[#d4af37]/80 hover:text-[#fff] bg-[#04251b]/80 border border-[#d4af37]/30 hover:border-[#d4af37] transition-all flex items-center gap-1.5 backdrop-blur-md cursor-pointer"
        >
          <span>Skip Intro</span>
          <ArrowRight size={13} />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
