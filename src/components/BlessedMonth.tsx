import React from 'react';
import { motion } from 'motion/react';
import { RubElHizb } from './IslamicDecorations';
import { Heart, Sparkles, ShieldCheck, Sun } from 'lucide-react';

const virtues = [
  {
    id: 'mercy',
    icon: Heart,
    arabic: 'رَحْمَةٌ لِّلْعَالَمِينَ',
    title: 'Mercy to the Worlds',
    subtitle: 'Rahmatan lil-\'Alamin',
    description:
      'A universal message of boundless compassion, empathy for all living creatures, charity, and upholding the dignity of humankind.',
  },
  {
    id: 'illumination',
    icon: Sun,
    arabic: 'سِرَاجًا مُّنِيرًا',
    title: 'An Illuminating Lamp',
    subtitle: 'Sirajan Munira',
    description:
      'Bringing moral clarity, wisdom, truth, and spiritual illumination to dispel darkness and inspire righteous character.',
  },
  {
    id: 'peace',
    icon: ShieldCheck,
    arabic: 'السَّلَامُ وَالْمَحَبَّةُ',
    title: 'Peace and Harmony',
    subtitle: 'Al-Salam wal-Mahabbah',
    description:
      'Promoting harmony, mutual forgiveness, reconciliation, and spreading greetings of peace (Salam) among all people.',
  },
  {
    id: 'salawat',
    icon: Sparkles,
    arabic: 'الصَّلَاةُ عَلَى النَّبِيِّ',
    title: 'Salawat & Blessings',
    subtitle: 'Sending Salutations ﷺ',
    description:
      'A time to send peace and blessings upon the Prophet Muhammad ﷺ, revitalizing our personal connection and moral values.',
  },
];

export const BlessedMonth: React.FC = () => {
  return (
    <section
      id="blessed-month"
      className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto z-10"
    >
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#064e3b] border border-[#d4af37]/30 text-[11px] text-[#d4af37] uppercase tracking-[0.25em] font-semibold mb-3 shadow-md"
        >
          <RubElHizb size={12} />
          <span>Spiritual Significance</span>
          <RubElHizb size={12} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#fdfcf0] tracking-wide mb-4"
        >
          A Month of <span className="italic text-[#d4af37] font-serif">Blessings</span>
        </motion.h2>

        <div className="h-[1px] w-12 bg-[#d4af37] mx-auto opacity-50 my-4" />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm sm:text-base text-[#fdfcf0]/80 font-light leading-relaxed max-w-2xl mx-auto"
        >
          Rabi-ul-Awwal marks a sacred chapter in Islamic heritage — an opportune time to reflect upon the exemplary character, profound kindness, and noble teachings of the Prophet Muhammad ﷺ.
        </motion.p>
      </div>

      {/* 4 Virtue Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {virtues.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="group relative rounded-2xl p-7 bg-[#064e3b]/35 border border-[#d4af37]/20 hover:border-[#d4af37]/50 backdrop-blur-md transition-all duration-300 hover:shadow-[0_20px_45px_rgba(0,0,0,0.5),0_0_25px_rgba(212,175,55,0.15)] hover:-translate-y-1"
            >
              {/* Corner accent */}
              <div className="absolute top-4 right-4 text-[#d4af37]/20 group-hover:text-[#d4af37]/40 transition-colors">
                <RubElHizb size={24} />
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#064e3b] border border-[#d4af37]/35 text-[#d4af37] shadow-inner shrink-0 group-hover:scale-105 transition-transform">
                  <Icon size={22} />
                </div>

                <div className="space-y-1 flex-1 pr-4">
                  <p className="font-arabic text-lg text-[#d4af37] font-medium" dir="rtl">
                    {item.arabic}
                  </p>
                  <h3 className="font-serif text-xl font-normal text-[#fdfcf0]">
                    {item.title}
                  </h3>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#d4af37]/80 font-medium">
                    {item.subtitle}
                  </p>
                  <p className="text-sm text-[#fdfcf0]/75 font-light leading-relaxed pt-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

