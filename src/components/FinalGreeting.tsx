import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CrescentAndStar, IslamicLantern, RubElHizb } from './IslamicDecorations';
import { Sparkles, Send, Copy, Check, Heart } from 'lucide-react';
import { ambientAudio } from '../utils/audio';

interface FinalGreetingProps {
  onBurst: () => void;
}

export const FinalGreeting: React.FC<FinalGreetingProps> = ({ onBurst }) => {
  const [recipientName, setRecipientName] = useState('');
  const [senderName, setSenderName] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  const customGreetingText = `✨ Rabi-ul-Awwal & Eid Milad-un-Nabi Mubarak! ✨\n\n${recipientName ? `Dearest ${recipientName},\n\n` : ''}May the divine mercy, peace, and noble blessings of this sacred month of Rabi-ul-Awwal illuminate your life with endless barakah, radiant health, and serene joy.\n\nصَلَّى اللهُ عَلَيْهِ وَسَلَّمَ\n${senderName ? `\nWarmest Duas,\n— ${senderName}` : ''}\n\n🕌 Celebrate this blessed occasion: ${typeof window !== 'undefined' ? window.location.href : ''}`;

  const handleCopyText = () => {
    navigator.clipboard.writeText(customGreetingText);
    setIsCopied(true);
    ambientAudio.playBlessingChime();
    setTimeout(() => setIsCopied(false), 2500);
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(customGreetingText);
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const handleBurstTrigger = () => {
    ambientAudio.playBlessingChime();
    onBurst();
  };

  return (
    <section
      id="final-greeting"
      className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center z-10"
    >
      {/* Central Soft Golden Light Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full bg-radial from-[#d4af37]/20 via-[#064e3b]/15 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Decorative Hanging Lanterns */}
      <div className="flex justify-center items-center gap-6 mb-6">
        <motion.div
          animate={{ rotate: [-2, 2, -2] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="hidden sm:block"
        >
          <IslamicLantern size={32} />
        </motion.div>
        <div className="drop-shadow-[0_0_30px_rgba(212,175,55,0.5)]">
          <CrescentAndStar size={76} />
        </div>
        <motion.div
          animate={{ rotate: [2, -2, 2] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="hidden sm:block"
        >
          <IslamicLantern size={32} />
        </motion.div>
      </div>

      {/* Arabic Stamp */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-arabic text-2xl sm:text-3xl text-[#d4af37] font-normal mb-2"
        dir="rtl"
      >
        كُلُّ عَامٍ وَأَنْتُمْ بِخَيْرٍ
      </motion.p>

      {/* Main Large Typography */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-xs sm:text-sm md:text-base text-[#d4af37] tracking-[0.4em] uppercase mb-2 font-light"
      >
        Rabi-ul-Awwal
      </motion.h2>

      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-wide text-[#fdfcf0] mb-4"
      >
        Eid Milad-un-Nabi <span className="italic text-[#d4af37] font-serif">Mubarak</span> ﷺ
      </motion.h1>

      <div className="h-[1px] w-12 bg-[#d4af37] mx-auto opacity-50 my-5" />

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-sm sm:text-base md:text-lg text-[#fdfcf0]/80 max-w-2xl mx-auto font-light leading-relaxed mb-10"
      >
        May peace, mercy, love, and divine blessings always surround you, your beloved family, and your loved ones today and always.
      </motion.p>

      {/* Interactive Personalized Greeting Creator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-xl mx-auto p-6 sm:p-8 rounded-2xl bg-[#064e3b]/40 border border-[#d4af37]/35 shadow-2xl backdrop-blur-md text-left mb-8"
      >
        <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[#d4af37]/20">
          <div className="flex items-center gap-2">
            <Sparkles size={16} className="text-[#d4af37]" />
            <h3 className="font-serif text-base sm:text-lg font-normal text-[#fdfcf0]">
              Send Mubarakbad to Loved Ones
            </h3>
          </div>
          <RubElHizb size={16} className="text-[#d4af37]/40" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-5">
          <div>
            <label htmlFor="final-recipient-input" className="block text-[11px] uppercase tracking-wider text-[#d4af37]/90 mb-1 font-medium">
              Recipient Name (Optional):
            </label>
            <input
              id="final-recipient-input"
              type="text"
              value={recipientName}
              onChange={(e) => setRecipientName(e.target.value)}
              placeholder="e.g. Grandma, Uncle, Best Friend"
              maxLength={40}
              className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-[#022c22] border border-[#d4af37]/25 text-[#fdfcf0] placeholder-[#fdfcf0]/30 focus:outline-none focus:border-[#d4af37]"
            />
          </div>
          <div>
            <label htmlFor="final-sender-input" className="block text-[11px] uppercase tracking-wider text-[#d4af37]/90 mb-1 font-medium">
              Your Name (Sender):
            </label>
            <input
              id="final-sender-input"
              type="text"
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
              placeholder="e.g. Faiz & Family"
              maxLength={40}
              className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-[#022c22] border border-[#d4af37]/25 text-[#fdfcf0] placeholder-[#fdfcf0]/30 focus:outline-none focus:border-[#d4af37]"
            />
          </div>
        </div>

        {/* Share buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            onClick={handleCopyText}
            id="final-copy-btn"
            type="button"
            className="py-3 px-4 rounded-full text-xs font-semibold uppercase tracking-[0.15em] bg-[#064e3b] hover:bg-[#08634b] text-[#d4af37] border border-[#d4af37]/45 transition-all flex items-center justify-center gap-2 active:scale-98 cursor-pointer"
          >
            {isCopied ? (
              <>
                <Check size={15} className="text-[#d4af37]" />
                <span>Message Copied!</span>
              </>
            ) : (
              <>
                <Copy size={14} />
                <span>Copy Message</span>
              </>
            )}
          </button>

          <button
            onClick={handleShareWhatsApp}
            id="final-whatsapp-btn"
            type="button"
            className="py-3 px-4 rounded-full text-xs font-semibold uppercase tracking-[0.15em] bg-[#064e3b] hover:bg-[#08634b] text-[#d4af37] border border-[#d4af37]/45 transition-all flex items-center justify-center gap-2 active:scale-98 cursor-pointer"
          >
            <Send size={14} />
            <span>Share WhatsApp</span>
          </button>
        </div>
      </motion.div>

      {/* Shower of light trigger */}
      <div className="flex justify-center">
        <button
          onClick={handleBurstTrigger}
          id="final-light-shower-btn"
          type="button"
          className="px-8 py-3 rounded-full text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37] bg-[#064e3b]/80 hover:bg-[#064e3b] border border-[#d4af37]/40 hover:border-[#d4af37] transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] cursor-pointer"
        >
          <Sparkles size={14} className="text-[#d4af37]" />
          <span>Celebrate With Light Shower ✨</span>
        </button>
      </div>
    </section>
  );
};
