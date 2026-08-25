import React, { useState, useEffect } from 'react';
import { CrescentAndStar, RubElHizb } from './IslamicDecorations';
import { Volume2, VolumeX, Sparkles, Share2, Menu, X, Music } from 'lucide-react';
import { naatAudio } from '../utils/naatAudioEngine';

interface NavbarProps {
  onOpenGreeting: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenGreeting }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(naatAudio.getIsPlaying());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const unsubscribe = naatAudio.subscribe(() => {
      setIsAudioPlaying(naatAudio.getIsPlaying());
    });
    return unsubscribe;
  }, []);

  const toggleSound = async () => {
    await naatAudio.togglePlay();
  };

  const handleShareApp = () => {
    const text = '✨ Rabi-ul-Awwal & Eid Milad-un-Nabi Mubarak! Experience this beautiful Islamic greeting experience with duas and blessings: ' + window.location.href;
    if (navigator.share) {
      navigator.share({
        title: 'Rabi-ul-Awwal & Eid Milad-un-Nabi Mubarak',
        text: 'May this blessed occasion fill your heart with peace, love, mercy, and blessings.',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(text);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2000);
    }
  };

  const navLinks = [
    { label: 'Home', href: '#hero-section' },
    { label: 'Significance', href: '#blessed-month' },
    { label: 'Wisdom', href: '#spiritual-message' },
    { label: 'Duas', href: '#dua-section' },
    { label: 'Greetings', href: '#final-greeting' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#022c22]/90 backdrop-blur-md border-b border-[#d4af37]/20 py-3 shadow-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo & Title */}
        <a
          href="#hero-section"
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="p-1.5 rounded-full bg-[#064e3b] border border-[#d4af37]/40 text-[#d4af37] group-hover:scale-105 transition-transform shadow-md">
            <RubElHizb size={18} />
          </div>
          <div>
            <span className="font-serif font-normal text-base sm:text-lg tracking-[0.15em] uppercase text-[#fdfcf0] group-hover:text-[#d4af37] transition-colors">
              Rabi-ul-Awwal
            </span>
            <span className="hidden sm:inline-block ml-2 text-[10px] uppercase tracking-[0.3em] text-[#d4af37]/80 font-medium">
              Mubarak
            </span>
          </div>
        </a>

        {/* Desktop Navigation links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[11px] lg:text-xs uppercase tracking-[0.2em] font-light text-[#fdfcf0]/70 hover:text-[#d4af37] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Controls (Audio Toggle, Share, Open Greeting) */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Ambient Sound Toggle */}
          <button
            onClick={toggleSound}
            id="ambient-sound-toggle-btn"
            type="button"
            aria-label={isAudioPlaying ? 'Mute ambient chimes' : 'Play peaceful ambient soundscape'}
            title={isAudioPlaying ? 'Mute Ambient Sound' : 'Play Peaceful Ambient Sound'}
            className={`p-2 sm:px-3 sm:py-1.5 rounded-full text-xs font-medium border transition-all flex items-center gap-1.5 cursor-pointer ${
              isAudioPlaying
                ? 'bg-[#064e3b] border-[#d4af37] text-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.35)]'
                : 'bg-[#064e3b]/50 border-[#d4af37]/25 text-[#fdfcf0]/80 hover:text-[#d4af37] hover:border-[#d4af37]/60'
            }`}
          >
            {isAudioPlaying ? <Volume2 size={14} /> : <VolumeX size={14} />}
            <span className="hidden sm:inline text-[10px] uppercase tracking-wider">
              {isAudioPlaying ? 'Sound On' : 'Sound Off'}
            </span>
          </button>

          {/* Quick Share Link */}
          <button
            onClick={handleShareApp}
            id="nav-share-btn"
            type="button"
            aria-label="Share Greeting Website"
            title="Share with loved ones"
            className="p-2 rounded-full bg-[#064e3b]/50 hover:bg-[#064e3b] border border-[#d4af37]/25 hover:border-[#d4af37]/60 text-[#fdfcf0]/80 hover:text-[#d4af37] transition-all cursor-pointer"
          >
            <Share2 size={14} />
          </button>

          {/* Open Greeting Pill CTA */}
          <button
            onClick={onOpenGreeting}
            id="nav-open-greeting-btn"
            type="button"
            className="hidden sm:flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.15em] text-[#d4af37] bg-[#064e3b] hover:bg-[#08634b] border border-[#d4af37]/40 hover:border-[#d4af37] shadow-md transition-all active:scale-95 cursor-pointer"
          >
            <Sparkles size={13} className="text-[#d4af37]" />
            <span>Card ✨</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle-btn"
            type="button"
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 text-[#fdfcf0]/80 hover:text-white rounded-lg transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#022c22]/98 backdrop-blur-xl border-b border-[#d4af37]/20 px-5 py-5 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-xs uppercase tracking-[0.2em] font-light text-[#fdfcf0]/80 hover:text-[#d4af37] border-b border-[#064e3b]"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenGreeting();
            }}
            className="w-full mt-3 py-3 px-4 rounded-full text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37] bg-[#064e3b] border border-[#d4af37]/40 flex items-center justify-center gap-2"
          >
            <Sparkles size={14} />
            <span>Open Mubarakbad Card</span>
          </button>
        </div>
      )}

      {copiedShare && (
        <div className="fixed top-18 right-4 bg-[#064e3b] border border-[#d4af37] text-[#d4af37] text-xs px-3.5 py-1.5 rounded-full shadow-xl animate-fade-in z-50 font-medium tracking-wide">
          Link copied to clipboard!
        </div>
      )}
    </header>
  );
};
