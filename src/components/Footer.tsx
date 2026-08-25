import React from 'react';
import { RubElHizb, CrescentAndStar } from './IslamicDecorations';
import { Heart, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-[#d4af37]/20 bg-[#022c22] py-14 px-4 sm:px-6 lg:px-8 text-center z-10">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center space-y-6">
        {/* Emblem */}
        <div className="flex items-center gap-3 text-[#d4af37]/50">
          <RubElHizb size={16} />
          <CrescentAndStar size={28} />
          <RubElHizb size={16} />
        </div>

        {/* Text & Creator Attribution */}
        <div className="space-y-2">
          <p className="font-serif text-base sm:text-lg text-[#fdfcf0] tracking-[0.2em] uppercase font-normal">
            Rabi-ul-Awwal <span className="italic text-[#d4af37] font-serif">Mubarak</span>
          </p>
          <p className="font-arabic text-sm text-[#d4af37]/75 font-normal pt-0.5" dir="rtl">
            صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ
          </p>
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#fdfcf0]/50 pt-0.5">
            Peace, Blessings & Goodwill Upon Humankind • 1447 AH
          </p>

          {/* Created by attribution */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-1.5 text-xs text-[#fdfcf0]/80">
            <span className="flex items-center gap-1.5 text-[#d4af37]">
              <span>Created with deep love</span>
              <Heart size={12} className="text-red-400 fill-red-400 inline animate-pulse" />
              <span>by</span>
            </span>
            <span className="font-serif text-sm font-semibold tracking-wide text-[#fdfcf0] bg-[#064e3b]/80 border border-[#d4af37]/35 px-3 py-0.5 rounded-full shadow-sm">
              Mohammad Faizan Ansari
            </span>
          </div>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          id="back-to-top-btn"
          aria-label="Back to top of page"
          className="p-3 rounded-full bg-[#064e3b] hover:bg-[#08634b] border border-[#d4af37]/35 hover:border-[#d4af37] text-[#d4af37] transition-all shadow-md active:scale-95 cursor-pointer"
        >
          <ArrowUp size={15} />
        </button>
      </div>
    </footer>
  );
};

