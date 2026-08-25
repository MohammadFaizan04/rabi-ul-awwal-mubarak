import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, 
  Pause, 
  SkipForward, 
  SkipBack, 
  Volume2, 
  VolumeX, 
  Volume1, 
  Music, 
  Upload, 
  ListMusic, 
  Sparkles, 
  X, 
  ChevronUp, 
  ChevronDown, 
  Radio, 
  FileAudio,
  Trash2,
  Check,
  Headphones
} from 'lucide-react';
import { naatAudio, TrackDefinition } from '../utils/naatAudioEngine';
import { RubElHizb } from './IslamicDecorations';

export const NaatPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(naatAudio.getIsPlaying());
  const [currentTrack, setCurrentTrack] = useState<TrackDefinition>(naatAudio.getCurrentTrack());
  const [allTracks, setAllTracks] = useState<TrackDefinition[]>(naatAudio.getAllTracks());
  const [volume, setVolume] = useState<number>(naatAudio.getVolume());
  const [isMuted, setIsMuted] = useState<boolean>(naatAudio.getIsMuted());
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'playlist' | 'lyrics' | 'upload'>('playlist');
  const [customTitle, setCustomTitle] = useState<string>('');
  const [customReciter, setCustomReciter] = useState<string>('');
  const [customUrlInput, setCustomUrlInput] = useState<string>('');
  const [uploadSuccessMsg, setUploadSuccessMsg] = useState<string>('');

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Subscribe to audio engine changes (so Navbar toggle and Player stay 100% in sync)
  useEffect(() => {
    const unsubscribe = naatAudio.subscribe(() => {
      setIsPlaying(naatAudio.getIsPlaying());
      setCurrentTrack(naatAudio.getCurrentTrack());
      setAllTracks(naatAudio.getAllTracks());
      setVolume(naatAudio.getVolume());
      setIsMuted(naatAudio.getIsMuted());
    });
    return unsubscribe;
  }, []);

  const handleTogglePlay = async () => {
    await naatAudio.togglePlay();
  };

  const handleNext = () => {
    naatAudio.nextTrack();
  };

  const handlePrev = () => {
    naatAudio.prevTrack();
  };

  const handleSelectTrack = (index: number) => {
    naatAudio.play(index);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    naatAudio.setVolume(val);
  };

  const handleToggleMute = () => {
    naatAudio.toggleMute();
  };

  // Upload user file
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const fileUrl = URL.createObjectURL(file);
    const newTrack: TrackDefinition = {
      id: `custom-${Date.now()}`,
      title: customTitle.trim() || file.name.replace(/\.[^/.]+$/, ''),
      arabicTitle: 'نَعْت شَرِيف',
      reciter: customReciter.trim() || 'Attached Audio File',
      category: 'User Attached Naat',
      audioUrl: fileUrl,
      tempoBpm: 80,
      melodyNotes: [],
      lyrics: [
        {
          arabic: 'صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ',
          transliteration: 'Sallallahu Alayhi Wa Sallam',
          english: 'Peace and blessings of Allah be upon him.',
        },
      ],
    };

    naatAudio.attachCustomTrack(newTrack);
    setUploadSuccessMsg(`Attached audio: "${newTrack.title}"! Playing now...`);
    setTimeout(() => setUploadSuccessMsg(''), 4000);
  };

  // Attach Web URL
  const handleAttachUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customUrlInput.trim()) return;

    const newTrack: TrackDefinition = {
      id: `custom-url-${Date.now()}`,
      title: customTitle.trim() || 'Custom Naat Stream',
      arabicTitle: 'نَعْت شَرِيف',
      reciter: customReciter.trim() || 'Online Audio',
      category: 'Web Attached Naat',
      audioUrl: customUrlInput.trim(),
      tempoBpm: 80,
      melodyNotes: [],
      lyrics: [
        {
          arabic: 'صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ',
          transliteration: 'Sallallahu Alayhi Wa Sallam',
          english: 'Peace and blessings of Allah be upon him.',
        },
      ],
    };

    naatAudio.attachCustomTrack(newTrack);
    setCustomUrlInput('');
    setUploadSuccessMsg(`Attached audio link! Playing now...`);
    setTimeout(() => setUploadSuccessMsg(''), 4000);
  };

  const handleRemoveTrack = (id: string) => {
    naatAudio.removeCustomTrack(id);
  };

  return (
    <>
      {/* Floating Bottom Audio Player Bar */}
      <aside
        aria-label="Spiritual Naat and Voice Player"
        className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-2xl"
      >
        <div className="relative rounded-2xl bg-[#064e3b]/95 border border-[#d4af37]/45 shadow-[0_15px_40px_rgba(0,0,0,0.6),0_0_30px_rgba(212,175,55,0.2)] backdrop-blur-xl p-3 sm:p-4 text-[#fdfcf0] transition-all duration-300">
          
          {/* Main Controls Row */}
          <div className="flex items-center justify-between gap-3">
            
            {/* Left: Disc / Status & Track Info */}
            <div 
              className="flex items-center gap-3 min-w-0 cursor-pointer group flex-1"
              onClick={() => setIsExpanded(!isExpanded)}
              title="Click to view Naat playlist & lyrics"
            >
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#022c22] border border-[#d4af37]/50 flex items-center justify-center shrink-0 shadow-md">
                <Music size={18} className={`text-[#d4af37] ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '8s' }} />
                {isPlaying && (
                  <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#d4af37] animate-ping" />
                )}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <p className="text-xs sm:text-sm font-serif font-semibold text-[#fdfcf0] truncate group-hover:text-[#d4af37] transition-colors">
                    {currentTrack.title}
                  </p>
                  <span className="text-[9px] uppercase tracking-wider bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#d4af37] px-1.5 py-0.5 rounded-full shrink-0 font-mono">
                    {isPlaying ? 'Playing Voice' : 'Paused'}
                  </span>
                </div>
                <p className="text-[10px] sm:text-[11px] text-[#d4af37]/80 truncate flex items-center gap-1.5 pt-0.5">
                  <span>{currentTrack.reciter}</span>
                  <span>•</span>
                  <span className="font-arabic">{currentTrack.arabicTitle}</span>
                </p>
              </div>
            </div>

            {/* Middle: Sound Visualizer Waves */}
            <div className="hidden md:flex items-center gap-1 h-5 px-2">
              {[0.4, 0.9, 1, 0.6, 0.85, 0.5, 0.95].map((scale, i) => (
                <span
                  key={i}
                  className="w-1 bg-[#d4af37] rounded-full transition-all duration-300"
                  style={{
                    height: isPlaying ? `${scale * 20}px` : '4px',
                    opacity: isPlaying ? 0.9 : 0.35,
                    animation: isPlaying ? `softPulse ${0.5 + i * 0.12}s ease-in-out infinite alternate` : 'none',
                  }}
                />
              ))}
            </div>

            {/* Right: Controls & Volume */}
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              <button
                onClick={handlePrev}
                id="naat-prev-btn"
                type="button"
                aria-label="Previous Naat"
                className="p-1.5 rounded-full hover:bg-white/10 text-[#fdfcf0]/70 hover:text-[#d4af37] transition-colors cursor-pointer"
              >
                <SkipBack size={16} />
              </button>

              <button
                onClick={handleTogglePlay}
                id="naat-main-play-btn"
                type="button"
                aria-label={isPlaying ? 'Pause Naat' : 'Play Naat voice & melody'}
                className="p-2.5 sm:p-3 rounded-full bg-[#d4af37] text-[#022c22] hover:bg-[#ffe699] shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all transform active:scale-95 cursor-pointer font-bold flex items-center justify-center"
              >
                {isPlaying ? <Pause size={17} /> : <Play size={17} className="ml-0.5" />}
              </button>

              <button
                onClick={handleNext}
                id="naat-next-btn"
                type="button"
                aria-label="Next Naat"
                className="p-1.5 rounded-full hover:bg-white/10 text-[#fdfcf0]/70 hover:text-[#d4af37] transition-colors cursor-pointer"
              >
                <SkipForward size={16} />
              </button>

              {/* Volume Slider in Mini Bar */}
              <div className="hidden sm:flex items-center gap-1 pl-1">
                <button
                  onClick={handleToggleMute}
                  type="button"
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                  className="p-1.5 text-[#d4af37]/80 hover:text-[#d4af37]"
                >
                  {isMuted || volume === 0 ? <VolumeX size={15} /> : <Volume2 size={15} />}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  aria-label="Volume slider"
                  className="w-14 sm:w-16 h-1 bg-[#022c22] rounded-lg appearance-none cursor-pointer accent-[#d4af37]"
                />
              </div>

              {/* Menu / Lyrics Drawer Toggle */}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                id="naat-expand-modal-btn"
                type="button"
                aria-label={isExpanded ? 'Collapse Naat Player' : 'Open Naat Menu & Lyrics'}
                className="ml-1 p-1.5 rounded-full bg-[#022c22]/70 border border-[#d4af37]/30 text-[#d4af37] hover:bg-[#022c22] transition-colors cursor-pointer flex items-center gap-1 text-[11px] px-2.5"
              >
                <ListMusic size={14} />
                <span className="hidden sm:inline">Naat Menu</span>
                {isExpanded ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Expanded Modal for Naat selection, Lyrics, and Audio Attachment */}
      <AnimatePresence>
        {isExpanded && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              className="relative w-full max-w-xl max-h-[90vh] rounded-3xl bg-[#064e3b]/95 border border-[#d4af37]/40 shadow-2xl p-5 sm:p-7 text-[#fdfcf0] backdrop-blur-2xl flex flex-col overflow-hidden"
              style={{
                boxShadow: '0 25px 60px rgba(0,0,0,0.8), 0 0 50px rgba(212,175,55,0.25)',
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsExpanded(false)}
                id="close-naat-drawer-btn"
                type="button"
                aria-label="Close Naat Drawer"
                className="absolute top-4 right-4 p-2 text-[#d4af37]/70 hover:text-white rounded-full bg-[#022c22]/50 hover:bg-[#022c22] transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>

              {/* Header Title */}
              <div className="text-center pb-4 border-b border-[#d4af37]/20">
                <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#022c22] border border-[#d4af37]/30 text-[10px] uppercase tracking-[0.25em] text-[#d4af37] font-semibold mb-2">
                  <RubElHizb size={10} />
                  <span>Blessed Naat & Salawat Audio</span>
                  <RubElHizb size={10} />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#fdfcf0]">
                  {currentTrack.title}
                </h3>
                <p className="font-arabic text-base sm:text-lg text-[#d4af37] pt-0.5" dir="rtl">
                  {currentTrack.arabicTitle}
                </p>
                <p className="text-xs text-[#fdfcf0]/70 font-light">
                  {currentTrack.reciter} • {currentTrack.category}
                </p>
              </div>

              {/* Navigation Tabs */}
              <div className="flex items-center justify-center gap-2 my-3 p-1 rounded-xl bg-[#022c22]/80 border border-[#d4af37]/20 text-xs">
                <button
                  onClick={() => setActiveTab('playlist')}
                  type="button"
                  className={`flex-1 py-1.5 px-3 rounded-lg font-medium tracking-wider uppercase transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    activeTab === 'playlist'
                      ? 'bg-[#064e3b] text-[#d4af37] border border-[#d4af37]/40 shadow-sm'
                      : 'text-[#fdfcf0]/60 hover:text-white'
                  }`}
                >
                  <ListMusic size={13} />
                  <span>Naat Playlist</span>
                </button>

                <button
                  onClick={() => setActiveTab('lyrics')}
                  type="button"
                  className={`flex-1 py-1.5 px-3 rounded-lg font-medium tracking-wider uppercase transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    activeTab === 'lyrics'
                      ? 'bg-[#064e3b] text-[#d4af37] border border-[#d4af37]/40 shadow-sm'
                      : 'text-[#fdfcf0]/60 hover:text-white'
                  }`}
                >
                  <Sparkles size={13} />
                  <span>Lyrics & Meaning</span>
                </button>

                <button
                  onClick={() => setActiveTab('upload')}
                  type="button"
                  className={`flex-1 py-1.5 px-3 rounded-lg font-medium tracking-wider uppercase transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    activeTab === 'upload'
                      ? 'bg-[#064e3b] text-[#d4af37] border border-[#d4af37]/40 shadow-sm'
                      : 'text-[#fdfcf0]/60 hover:text-white'
                  }`}
                >
                  <Upload size={13} />
                  <span>Attach Audio</span>
                </button>
              </div>

              {/* Tab Content Area (Scrollable) */}
              <div className="flex-1 overflow-y-auto pr-1 my-2 space-y-3 max-h-[300px] sm:max-h-[340px]">
                {/* 1. PLAYLIST TAB */}
                {activeTab === 'playlist' && (
                  <div className="space-y-2">
                    {allTracks.map((track, idx) => {
                      const isSelected = track.id === currentTrack.id;
                      return (
                        <div
                          key={track.id}
                          onClick={() => handleSelectTrack(idx)}
                          className={`group p-3 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                            isSelected
                              ? 'bg-[#022c22] border-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.25)]'
                              : 'bg-[#022c22]/40 hover:bg-[#022c22]/80 border-[#d4af37]/20 hover:border-[#d4af37]/50'
                          }`}
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 ${
                              isSelected ? 'bg-[#d4af37] text-[#022c22] border-[#d4af37]' : 'border-[#d4af37]/30 text-[#d4af37]'
                            }`}>
                              {isSelected && isPlaying ? (
                                <Pause size={14} />
                              ) : (
                                <Play size={14} className="ml-0.5" />
                              )}
                            </div>
                            <div className="min-w-0">
                              <p className={`text-sm font-serif font-medium truncate ${isSelected ? 'text-[#d4af37]' : 'text-[#fdfcf0]'}`}>
                                {track.title}
                              </p>
                              <p className="text-[11px] text-[#fdfcf0]/60 truncate">
                                {track.reciter}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 shrink-0">
                            <span className="font-arabic text-sm text-[#d4af37]/80 hidden sm:inline" dir="rtl">
                              {track.arabicTitle}
                            </span>
                            {track.id.startsWith('custom') && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleRemoveTrack(track.id);
                                }}
                                title="Remove custom track"
                                className="p-1 text-red-400 hover:text-red-300 hover:bg-red-900/30 rounded-md transition-colors"
                              >
                                <Trash2 size={13} />
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* 2. LYRICS TAB */}
                {activeTab === 'lyrics' && (
                  <div className="space-y-4">
                    {currentTrack.lyrics?.map((line, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-2xl bg-[#022c22]/70 border border-[#d4af37]/20 text-center space-y-1.5"
                      >
                        <p className="font-arabic text-xl sm:text-2xl text-[#d4af37] font-normal leading-loose" dir="rtl">
                          {line.arabic}
                        </p>
                        <p className="text-xs text-[#fdfcf0]/90 font-medium italic">
                          {line.transliteration}
                        </p>
                        <p className="text-xs text-[#fdfcf0]/70 font-light font-serif pt-1">
                          &ldquo;{line.english}&rdquo;
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* 3. UPLOAD / ATTACH TAB */}
                {activeTab === 'upload' && (
                  <div className="space-y-4 text-left">
                    {uploadSuccessMsg && (
                      <div className="p-3 rounded-xl bg-[#022c22] border border-[#d4af37] text-xs text-[#d4af37] flex items-center gap-2">
                        <Check size={16} />
                        <span>{uploadSuccessMsg}</span>
                      </div>
                    )}

                    {/* Info banner about /src/myNaatLinks.ts */}
                    <div className="p-3 rounded-2xl bg-[#022c22]/90 border border-[#d4af37]/40 text-xs space-y-1">
                      <div className="flex items-center gap-2 text-[#d4af37] font-semibold">
                        <RubElHizb size={12} />
                        <span>Naat Links Config File: <code className="text-[#ffe699] font-mono bg-black/40 px-1.5 py-0.5 rounded">src/myNaatLinks.ts</code></span>
                      </div>
                      <p className="text-[11px] text-[#fdfcf0]/70">
                        You can paste your custom MP3 / audio URLs directly into <code className="text-[#d4af37] font-mono">src/myNaatLinks.ts</code>, or attach and test links below!
                      </p>
                    </div>

                    {/* Pre-configured 3 Classic Naat Quick-Update Cards */}
                    <div className="space-y-2.5">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-[#d4af37] flex items-center gap-1.5">
                        <Sparkles size={14} />
                        <span>Set / Update Classic Naat Links</span>
                      </h4>

                      {[
                        {
                          id: 'tala-al-badru',
                          name: "1. Tala'al Badru 'Alayna",
                          arabic: 'طَلَعَ الْبَدْرُ عَلَيْنَا',
                          current: allTracks.find(t => t.id === 'tala-al-badru')?.audioUrl || '',
                        },
                        {
                          id: 'qasida-burda',
                          name: '2. Qasida Burda Sharif',
                          arabic: 'قَصِيدَةُ الْبُرْدَةِ الشَّرِيفَة',
                          current: allTracks.find(t => t.id === 'qasida-burda')?.audioUrl || '',
                        },
                        {
                          id: 'balaghal-ula',
                          name: '3. Balaghal Ula Bi Kamaalihi',
                          arabic: 'بَلَغَ الْعُلَى بِكَمَالِهِ',
                          current: allTracks.find(t => t.id === 'balaghal-ula')?.audioUrl || '',
                        },
                      ].map((item) => (
                        <div key={item.id} className="p-3 rounded-xl bg-[#022c22]/60 border border-[#d4af37]/20 space-y-1.5">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-medium text-[#fdfcf0]">{item.name}</span>
                            <span className="font-arabic text-[#d4af37]" dir="rtl">{item.arabic}</span>
                          </div>
                          <div className="flex gap-2">
                            <input
                              type="url"
                              defaultValue={item.current}
                              placeholder="Paste MP3 audio link here..."
                              id={`url-input-${item.id}`}
                              className="flex-1 px-2.5 py-1.5 text-xs rounded-lg bg-[#022c22] border border-[#d4af37]/30 text-white placeholder-white/30 focus:outline-none focus:border-[#d4af37]"
                            />
                            <button
                              type="button"
                              onClick={() => {
                                const el = document.getElementById(`url-input-${item.id}`) as HTMLInputElement;
                                if (el && el.value.trim()) {
                                  const targetTrack = allTracks.find(t => t.id === item.id);
                                  if (targetTrack) {
                                    targetTrack.audioUrl = el.value.trim();
                                    naatAudio.play(allTracks.findIndex(t => t.id === item.id));
                                    setUploadSuccessMsg(`Updated and playing "${item.name}"!`);
                                    setTimeout(() => setUploadSuccessMsg(''), 4000);
                                  }
                                }
                              }}
                              className="px-3 py-1.5 bg-[#064e3b] hover:bg-[#08634b] border border-[#d4af37]/50 text-[#d4af37] text-xs font-semibold rounded-lg shrink-0 transition-colors cursor-pointer"
                            >
                              Play Link
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* 1. Upload from Device */}
                    <div className="p-4 rounded-2xl bg-[#022c22]/70 border border-[#d4af37]/25 space-y-3">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-[#d4af37] flex items-center gap-1.5">
                        <FileAudio size={15} />
                        <span>Upload Audio File from Device</span>
                      </h4>
                      <p className="text-[11px] text-[#fdfcf0]/75 font-light leading-relaxed">
                        Select any Naat, Salawat, or Nasheed recording (.mp3, .wav, .m4a) from your computer or phone to play instantly.
                      </p>

                      <input
                        type="file"
                        ref={fileInputRef}
                        accept="audio/*"
                        onChange={handleFileUpload}
                        className="hidden"
                      />

                      <button
                        onClick={() => fileInputRef.current?.click()}
                        id="choose-audio-file-btn"
                        type="button"
                        className="w-full py-3 px-4 rounded-xl bg-[#064e3b] hover:bg-[#08634b] border border-[#d4af37]/50 text-[#d4af37] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
                      >
                        <Upload size={15} />
                        <span>Choose Audio File to Attach</span>
                      </button>
                    </div>

                    {/* 2. Custom URL input */}
                    <form onSubmit={handleAttachUrl} className="p-4 rounded-2xl bg-[#022c22]/70 border border-[#d4af37]/25 space-y-3">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-[#d4af37] flex items-center gap-1.5">
                        <Radio size={15} />
                        <span>Attach Any Custom Audio Web Link</span>
                      </h4>
                      <div className="space-y-2">
                        <input
                          type="text"
                          value={customTitle}
                          onChange={(e) => setCustomTitle(e.target.value)}
                          placeholder="Naat Title (e.g. Faslon Ko Takalluf Hai)"
                          className="w-full px-3 py-2 text-xs rounded-xl bg-[#022c22] border border-[#d4af37]/30 text-white placeholder-white/30 focus:outline-none focus:border-[#d4af37]"
                        />
                        <input
                          type="text"
                          value={customReciter}
                          onChange={(e) => setCustomReciter(e.target.value)}
                          placeholder="Reciter Name (e.g. Qari Waheed Zafar Qasmi)"
                          className="w-full px-3 py-2 text-xs rounded-xl bg-[#022c22] border border-[#d4af37]/30 text-white placeholder-white/30 focus:outline-none focus:border-[#d4af37]"
                        />
                        <input
                          type="url"
                          value={customUrlInput}
                          onChange={(e) => setCustomUrlInput(e.target.value)}
                          placeholder="Audio URL (https://.../naat.mp3)"
                          className="w-full px-3 py-2 text-xs rounded-xl bg-[#022c22] border border-[#d4af37]/30 text-white placeholder-white/30 focus:outline-none focus:border-[#d4af37]"
                        />
                      </div>
                      <button
                        type="submit"
                        id="attach-url-btn"
                        className="w-full py-2.5 px-4 rounded-xl bg-[#064e3b] hover:bg-[#08634b] border border-[#d4af37]/50 text-[#d4af37] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
                      >
                        <Radio size={14} />
                        <span>Attach & Play Audio URL</span>
                      </button>
                    </form>
                  </div>
                )}
              </div>

              {/* Bottom Controls inside Modal */}
              <div className="pt-3 border-t border-[#d4af37]/20 flex items-center justify-between gap-4">
                {/* Instant Chime Test Button */}
                <button
                  onClick={() => naatAudio.playInstantSalawatChime()}
                  type="button"
                  className="px-3 py-1.5 rounded-full bg-[#022c22] border border-[#d4af37]/40 text-[#d4af37] hover:bg-[#064e3b] text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                  title="Test audio chime"
                >
                  <Headphones size={13} />
                  <span>Test Chime</span>
                </button>

                {/* Main Prev / Play / Next */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={handlePrev}
                    type="button"
                    className="p-2 rounded-full text-[#fdfcf0]/80 hover:text-[#d4af37] transition-colors cursor-pointer"
                  >
                    <SkipBack size={18} />
                  </button>

                  <button
                    onClick={handleTogglePlay}
                    type="button"
                    className="p-3.5 rounded-full bg-[#d4af37] text-[#022c22] hover:bg-[#ffe699] shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-all transform active:scale-95 cursor-pointer font-bold"
                  >
                    {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-0.5" />}
                  </button>

                  <button
                    onClick={handleNext}
                    type="button"
                    className="p-2 rounded-full text-[#fdfcf0]/80 hover:text-[#d4af37] transition-colors cursor-pointer"
                  >
                    <SkipForward size={18} />
                  </button>
                </div>

                {/* Volume Slider */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handleToggleMute}
                    type="button"
                    className="p-1 text-[#fdfcf0]/70 hover:text-[#d4af37] transition-colors cursor-pointer"
                  >
                    {isMuted || volume === 0 ? (
                      <VolumeX size={16} />
                    ) : volume < 0.5 ? (
                      <Volume1 size={16} />
                    ) : (
                      <Volume2 size={16} />
                    )}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    aria-label="Naat volume slider"
                    className="w-16 sm:w-20 h-1 bg-[#022c22] rounded-lg appearance-none cursor-pointer accent-[#d4af37]"
                  />
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
