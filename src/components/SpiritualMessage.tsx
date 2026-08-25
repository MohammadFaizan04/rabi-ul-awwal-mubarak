import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CrescentAndStar, RubElHizb } from './IslamicDecorations';
import { Sparkles, Heart } from 'lucide-react';
import { ambientAudio } from '../utils/audio';

export const SpiritualMessage: React.FC = () => {
  const [salawatCount, setSalawatCount] = useState<number>(33);
  const [hasSentRecently, setHasSentRecently] = useState<boolean>(false);

  const handleSendSalawat = () => {
    setSalawatCount((prev) => prev + 1);
    setHasSentRecently(true);
    ambientAudio.playSalawatChime();
    setTimeout(() => setHasSentRecently(false), 1200);
  };

  return (
    <section
      id="spiritual-message"
      className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto z-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.9 }}
        className="relative rounded-3xl p-8 sm:p-12 md:p-14 bg-gradient-to-b from-[#064e3b]/85 to-[#022c22]/90 border border-[#d4af37]/35 shadow-2xl backdrop-blur-xl text-center overflow-hidden"
        style={{
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6), 0 0 45px rgba(212, 175, 55, 0.15)',
        }}
      >
        {/* Subtle Background Rosette */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#d4af37]/5 pointer-events-none">
          <RubElHizb size={420} />
        </div>

        {/* Top Crescent */}
        <div className="flex justify-center mb-6">
          <div className="drop-shadow-[0_0_25px_rgba(212,175,55,0.4)]">
            <CrescentAndStar size={60} />
          </div>
        </div>

        {/* Arabic Salawat Quote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-arabic text-2xl sm:text-3xl md:text-4xl text-[#d4af37] font-normal mb-4"
          dir="rtl"
        >
          اللَّهُمَّ صَلِّ عَلَىٰ سَيِّدِنَا مُحَمَّدٍ وَعَلَىٰ آلِ سَيِّدِنَا مُحَمَّدٍ
        </motion.p>

        {/* English Salutation */}
        <p className="text-[11px] uppercase tracking-[0.25em] text-[#d4af37]/75 font-semibold mb-6">
          Allahumma Salli Ala Sayyidina Muhammadin wa Ala Aali Sayyidina Muhammad
        </p>

        {/* Central Quote Message */}
        <blockquote className="max-w-3xl mx-auto my-6 text-xl sm:text-2xl md:text-3xl font-serif font-normal text-[#fdfcf0] leading-relaxed italic">
          &ldquo;May this blessed month inspire our hearts toward deeper kindness, boundless mercy, enduring patience, harmonious peace, and unconditional love.&rdquo;
        </blockquote>

        <div className="h-[1px] w-16 bg-[#d4af37] mx-auto opacity-50 my-8" />

        {/* Interactive Salawat Counter */}
        <div className="flex flex-col items-center justify-center gap-3">
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#fdfcf0]/75 font-medium">
            Join in sending Salutations ﷺ
          </p>

          <button
            onClick={handleSendSalawat}
            id="send-salawat-btn"
            type="button"
            className="group relative px-7 py-3 rounded-full bg-[#064e3b] hover:bg-[#08634b] border border-[#d4af37]/45 hover:border-[#d4af37] text-[#d4af37] text-xs font-semibold uppercase tracking-[0.15em] shadow-lg transition-all duration-300 transform active:scale-95 flex items-center gap-2.5 cursor-pointer"
          >
            <Heart size={15} className={`text-[#d4af37] transition-transform ${hasSentRecently ? 'scale-125' : 'group-hover:scale-110'}`} />
            <span>Send Salawat ﷺ</span>
            <span className="ml-1 px-2.5 py-0.5 rounded-full bg-[#022c22] text-[#d4af37] text-xs font-mono border border-[#d4af37]/30">
              {salawatCount}
            </span>
          </button>

          {hasSentRecently && (
            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-xs text-[#d4af37] font-medium flex items-center gap-1.5 mt-1"
            >
              <Sparkles size={13} className="text-[#d4af37]" />
              Salawat sent with love and reverence ﷺ
            </motion.p>
          )}
        </div>
      </motion.div>
    </section>
  );
};
