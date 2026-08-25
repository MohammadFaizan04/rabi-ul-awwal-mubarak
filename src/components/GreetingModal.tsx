import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Copy, Check, Share2, Sparkles, Send } from 'lucide-react';
import { CrescentAndStar, RubElHizb, IslamicLantern } from './IslamicDecorations';
import { ambientAudio } from '../utils/audio';

interface GreetingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBurst: () => void;
  recipientName?: string;
  senderName?: string;
}

export const GreetingModal: React.FC<GreetingModalProps> = ({
  isOpen,
  onClose,
  onBurst,
  recipientName: initialRecipient = '',
  senderName: initialSender = '',
}) => {
  const [recipient, setRecipient] = useState(initialRecipient);
  const [sender, setSender] = useState(initialSender);
  const [isCopied, setIsCopied] = useState(false);
  const [isCustomizing, setIsCustomizing] = useState(false);

  if (!isOpen) return null;

  const fullBlessingText = `${recipient ? `Dearest ${recipient},\n\n` : ''}✨ مبارك عليكم شهر ربيع الأول ✨\nMay the light, mercy, and peace of this blessed month of Rabi-ul-Awwal and Eid Milad-un-Nabi ﷺ fill your heart, your family, and your home with endless serenity, good health, and barakah.\n\nصَلَّى اللهُ عَلَيْهِ وَسَلَّمَ\n${sender ? `\nWith heartfelt duas,\n— ${sender}` : ''}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullBlessingText);
    setIsCopied(true);
    ambientAudio.playBlessingChime();
    setTimeout(() => setIsCopied(false), 2500);
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(fullBlessingText);
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#01140e]/80 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-lg rounded-2xl bg-[#064e3b]/95 border border-[#d4af37]/35 shadow-2xl p-6 sm:p-8 text-center backdrop-blur-2xl z-10 overflow-hidden"
          style={{
            boxShadow: '0 25px 60px rgba(0,0,0,0.7), 0 0 50px rgba(212,175,55,0.15)',
          }}
        >
          {/* Subtle Islamic corner rosettes */}
          <div className="absolute -top-6 -left-6 text-[#d4af37]/10 pointer-events-none">
            <RubElHizb size={120} />
          </div>
          <div className="absolute -bottom-6 -right-6 text-[#d4af37]/10 pointer-events-none">
            <RubElHizb size={120} />
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            id="close-greeting-modal-btn"
            aria-label="Close Greeting Card"
            className="absolute top-4 right-4 p-2 text-[#d4af37]/70 hover:text-[#fdfcf0] hover:bg-[#022c22]/50 rounded-full transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>

          {/* Decorative Top Lantern & Emblem */}
          <div className="flex justify-center items-center gap-4 mb-3">
            <IslamicLantern size={26} className="hidden sm:block text-[#d4af37]" />
            <div className="drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]">
              <CrescentAndStar size={54} />
            </div>
            <IslamicLantern size={26} className="hidden sm:block text-[#d4af37]" />
          </div>

          {/* Arabic Calligraphy Header */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-1 my-3"
          >
            <p className="font-arabic text-2xl sm:text-3xl text-[#d4af37] font-medium" dir="rtl">
              مبارك عليكم شهر ربيع الأول
            </p>
            <p className="font-arabic text-base sm:text-lg text-[#d4af37]/80" dir="rtl">
              صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ
            </p>
          </motion.div>

          {/* Title */}
          <h3 className="font-serif text-2xl sm:text-3xl font-normal tracking-wide text-[#fdfcf0] mt-2 mb-1">
            Eid Milad-un-Nabi <span className="italic text-[#d4af37] font-serif">Mubarak</span>
          </h3>

          <div className="h-[1px] w-10 bg-[#d4af37] mx-auto opacity-40 my-3" />

          {/* Recipient custom line if set */}
          {recipient && (
            <p className="text-xs font-semibold text-[#d4af37] uppercase tracking-[0.2em] mb-2">
              For: {recipient}
            </p>
          )}

          {/* Greeting message text body */}
          <div className="my-4 p-4 rounded-xl bg-[#022c22]/85 border border-[#d4af37]/20 text-[#fdfcf0]/85 text-xs sm:text-sm leading-relaxed text-center font-light">
            <p className="mb-2">
              May the divine light and blessings of Rabi-ul-Awwal illuminate your path with grace, forgiveness, compassion, and boundless peace.
            </p>
            <p className="text-xs text-[#d4af37] italic font-serif">
              &ldquo;And We have not sent you, [O Muhammad], except as a mercy to the worlds.&rdquo;
            </p>
            {sender && (
              <p className="mt-3 pt-2 border-t border-[#d4af37]/15 text-[11px] text-[#d4af37] font-medium uppercase tracking-wider">
                Sent with warm prayers by {sender}
              </p>
            )}
          </div>

          {/* Personalize Accordion */}
          <div className="mb-4 text-left">
            <button
              onClick={() => setIsCustomizing(!isCustomizing)}
              id="customize-greeting-toggle"
              type="button"
              className="text-xs text-[#d4af37] hover:text-[#fdfcf0] transition-colors flex items-center gap-1.5 mx-auto font-medium uppercase tracking-[0.1em] cursor-pointer"
            >
              <Sparkles size={12} />
              <span>{isCustomizing ? 'Hide Personalization' : 'Personalize Greeting Card (Add Names)'}</span>
            </button>

            {isCustomizing && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-3 p-3.5 rounded-xl bg-[#022c22] border border-[#d4af37]/25 space-y-2.5"
              >
                <div>
                  <label htmlFor="card-recipient-input" className="block text-[11px] uppercase tracking-wider text-[#d4af37]/90 mb-1">
                    Recipient Name (Optional):
                  </label>
                  <input
                    id="card-recipient-input"
                    type="text"
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                    placeholder="e.g. My Dear Family / Brother Ali"
                    maxLength={40}
                    className="w-full px-3 py-2 text-xs rounded-lg bg-[#064e3b]/50 border border-[#d4af37]/25 text-[#fdfcf0] placeholder-[#fdfcf0]/30 focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
                <div>
                  <label htmlFor="card-sender-input" className="block text-[11px] uppercase tracking-wider text-[#d4af37]/90 mb-1">
                    Your Name (Sender):
                  </label>
                  <input
                    id="card-sender-input"
                    type="text"
                    value={sender}
                    onChange={(e) => setSender(e.target.value)}
                    placeholder="e.g. Fatima & Family"
                    maxLength={40}
                    className="w-full px-3 py-2 text-xs rounded-lg bg-[#064e3b]/50 border border-[#d4af37]/25 text-[#fdfcf0] placeholder-[#fdfcf0]/30 focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
              </motion.div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-[#d4af37]/20">
            <button
              onClick={handleCopy}
              id="copy-greeting-btn"
              type="button"
              className="w-full py-2.5 px-4 rounded-full text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-200 flex items-center justify-center gap-2 bg-[#064e3b] hover:bg-[#08634b] text-[#d4af37] border border-[#d4af37]/45 shadow-md active:scale-98 cursor-pointer"
            >
              {isCopied ? (
                <>
                  <Check size={14} className="text-[#d4af37]" />
                  <span>Blessing Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>Copy Blessing</span>
                </>
              )}
            </button>

            <button
              onClick={handleShareWhatsApp}
              id="share-whatsapp-btn"
              type="button"
              className="w-full py-2.5 px-4 rounded-full text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-200 flex items-center justify-center gap-2 bg-[#064e3b] hover:bg-[#08634b] text-[#d4af37] border border-[#d4af37]/45 shadow-md active:scale-98 cursor-pointer"
            >
              <Send size={14} />
              <span>Share WhatsApp</span>
            </button>
          </div>

          {/* Particle Burst Trigger on Demand */}
          <div className="mt-4 flex justify-center">
            <button
              onClick={() => {
                onBurst();
                ambientAudio.playBlessingChime();
              }}
              id="sparkle-more-btn"
              type="button"
              className="text-[11px] uppercase tracking-[0.15em] text-[#d4af37]/80 hover:text-[#fdfcf0] flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Sparkles size={12} className="text-[#d4af37]" />
              <span>Shower Golden Light ✨</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
