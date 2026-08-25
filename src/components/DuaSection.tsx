import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RubElHizb } from './IslamicDecorations';
import { Heart, Sparkles, Check, Send, ShieldCheck, Sun, Moon } from 'lucide-react';
import { ambientAudio } from '../utils/audio';

interface DuaCardData {
  id: string;
  category: string;
  icon: typeof Heart;
  arabic: string;
  translation: string;
  description: string;
  initialAmens: number;
}

const duasList: DuaCardData[] = [
  {
    id: 'general-peace',
    category: 'Peace & Household Barakah',
    icon: Heart,
    arabic: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
    translation:
      'Our Lord, give us in this world that which is good and in the Hereafter that which is good, and protect us from the punishment of the Fire.',
    description: 'May Allah bless you and your family with peace, mercy, prosperity, and everlasting barakah.',
    initialAmens: 124,
  },
  {
    id: 'light-guidance',
    category: 'Spiritual Illumination & Noor',
    icon: Sun,
    arabic: 'اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُورًا وَفِي لِسَانِي نُورًا وَفِي بَصَرِي نُورًا',
    translation:
      'O Allah, place light in my heart, light on my tongue, and light in my vision.',
    description: 'May your heart be illuminated with guidance, patience, pure intentions, and sincere faith.',
    initialAmens: 89,
  },
  {
    id: 'health-protection',
    category: 'Healing & Protection (Afiyah)',
    icon: ShieldCheck,
    arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالآخِرَةِ',
    translation:
      'O Allah, I ask You for forgiveness and complete well-being (Afiyah) in this world and the Next.',
    description: 'May Allah grant you, your parents, and loved ones sound health, safety, and protection.',
    initialAmens: 142,
  },
];

export const DuaSection: React.FC = () => {
  const [amenState, setAmenState] = useState<{ [key: string]: boolean }>({});
  const [amenCounts, setAmenCounts] = useState<{ [key: string]: number }>({
    'general-peace': 124,
    'light-guidance': 89,
    'health-protection': 142,
  });

  const handleSayAmen = (id: string) => {
    if (!amenState[id]) {
      setAmenState((prev) => ({ ...prev, [id]: true }));
      setAmenCounts((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
      ambientAudio.playDuaAmenChime();
    }
  };

  return (
    <section
      id="dua-section"
      className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto z-10"
    >
      {/* Section Heading */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#064e3b] border border-[#d4af37]/30 text-[11px] text-[#d4af37] uppercase tracking-[0.25em] font-semibold mb-3 shadow-md"
        >
          <RubElHizb size={12} />
          <span>Prayers & Supplications</span>
          <RubElHizb size={12} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#fdfcf0] tracking-wide mb-4"
        >
          A Dua for <span className="italic text-[#d4af37] font-serif">You</span>
        </motion.h2>

        <div className="h-[1px] w-12 bg-[#d4af37] mx-auto opacity-50 my-4" />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm sm:text-base text-[#fdfcf0]/80 font-light leading-relaxed max-w-2xl mx-auto"
        >
          May Allah bless you and your family with boundless peace, divine mercy, sound health, genuine happiness, and eternal barakah.
        </motion.p>
      </div>

      {/* Grid of Duas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {duasList.map((dua, index) => {
          const Icon = dua.icon;
          const isAmened = !!amenState[dua.id];
          const count = amenCounts[dua.id] || dua.initialAmens;

          return (
            <motion.div
              key={dua.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="relative flex flex-col justify-between rounded-2xl p-6 sm:p-7 bg-[#064e3b]/35 border border-[#d4af37]/25 hover:border-[#d4af37]/55 backdrop-blur-md transition-all duration-300 hover:shadow-[0_20px_45px_rgba(0,0,0,0.5),0_0_25px_rgba(212,175,55,0.15)]"
            >
              {/* Category & Icon */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-[#064e3b] text-[#d4af37] border border-[#d4af37]/35">
                      <Icon size={17} />
                    </div>
                    <span className="text-[11px] font-semibold text-[#d4af37]/90 uppercase tracking-[0.15em]">
                      {dua.category}
                    </span>
                  </div>
                  <RubElHizb size={18} className="text-[#d4af37]/30" />
                </div>

                {/* Arabic Supplication */}
                <div className="my-3 p-4 rounded-xl bg-[#022c22]/85 border border-[#d4af37]/20">
                  <p className="font-arabic text-xl sm:text-2xl text-[#d4af37] text-center font-normal leading-loose" dir="rtl">
                    {dua.arabic}
                  </p>
                </div>

                {/* English Meaning */}
                <p className="text-xs italic font-serif text-[#fdfcf0]/80 leading-relaxed mb-3">
                  &ldquo;{dua.translation}&rdquo;
                </p>

                {/* Custom Message */}
                <p className="text-xs text-[#fdfcf0]/75 font-light leading-relaxed mb-5">
                  {dua.description}
                </p>
              </div>

              {/* Interactive Ameen Button */}
              <div className="pt-4 border-t border-[#d4af37]/20 flex items-center justify-between gap-3">
                <button
                  onClick={() => handleSayAmen(dua.id)}
                  id={`say-ameen-btn-${dua.id}`}
                  type="button"
                  className={`w-full py-2.5 px-4 rounded-full text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                    isAmened
                      ? 'bg-[#064e3b] text-[#d4af37] border border-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                      : 'bg-[#064e3b]/70 hover:bg-[#08634b] text-[#d4af37] border border-[#d4af37]/40 hover:border-[#d4af37]'
                  }`}
                >
                  {isAmened ? (
                    <>
                      <Check size={14} className="text-[#d4af37]" />
                      <span>Ameen 🤲</span>
                    </>
                  ) : (
                    <>
                      <Heart size={14} className="text-[#d4af37]" />
                      <span>Say Ameen 🤲</span>
                    </>
                  )}
                </button>

                <div className="shrink-0 text-right">
                  <span className="block text-xs font-mono font-bold text-[#d4af37]">
                    {count}
                  </span>
                  <span className="block text-[9px] uppercase tracking-wider text-[#fdfcf0]/50">
                    Ameens
                  </span>
                </div>
              </div>

              {/* Confirmation Toast Animation */}
              <AnimatePresence>
                {isAmened && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: -5 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-2 text-center text-[10px] uppercase tracking-wider text-[#d4af37] font-medium flex items-center justify-center gap-1"
                  >
                    <Sparkles size={11} />
                    <span>Ameen Ya Rabb al-Alamin 🤲</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
