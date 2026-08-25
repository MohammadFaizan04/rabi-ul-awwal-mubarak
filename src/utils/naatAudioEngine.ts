/**
 * Unified Islamic Naat, Salawat & Spiritual Audio Engine
 * Features:
 * 1. Self-contained 100% reliable Web Audio Naat Voice / Melodic Synthesizer
 *    (Ney Flute, Vocal Formant Synthesizer, Harmonic Oud, & Duff Rhythm)
 *    -> Never fails, 0 latency, 0 network CORS dependency!
 * 2. External Audio & Uploaded File Player with automatic fallback
 * 3. Shared reactive state across Navbar, Hero, and Naat Player
 */

import { MY_NAAT_LINKS } from '../myNaatLinks';

export interface TrackDefinition {
  id: string;
  title: string;
  arabicTitle: string;
  reciter: string;
  category: string;
  audioUrl?: string;
  lyrics: {
    arabic: string;
    transliteration: string;
    english: string;
  }[];
  // Note frequencies and durations for the melodic vocal / ney synthesizer
  melodyNotes: { note: number; duration: number; lyricIdx?: number }[];
  tempoBpm: number;
}

// Frequencies (Hz)
const NOTES = {
  C3: 130.81,
  D3: 146.83,
  E3: 164.81,
  F3: 174.61,
  G3: 196.00,
  A3: 220.00,
  Bb3: 233.08,
  B3: 246.94,
  C4: 261.63,
  D4: 293.66,
  Eb4: 311.13,
  E4: 329.63,
  F4: 349.23,
  G4: 392.00,
  Ab4: 415.30,
  A4: 440.00,
  Bb4: 466.16,
  B4: 493.88,
  C5: 523.25,
  D5: 587.33,
  Eb5: 622.25,
  E5: 659.25,
  F5: 698.46,
  G5: 783.99,
  A5: 880.00,
  REST: 0,
};

export const SPIRITUAL_TRACKS: TrackDefinition[] = [
  {
    id: 'tala-al-badru',
    title: "Tala'al Badru 'Alayna",
    arabicTitle: 'طَلَعَ الْبَدْرُ عَلَيْنَا',
    reciter: 'Devotional Islamic Choral Nasheed',
    category: 'Historic Welcome to Madinah',
    tempoBpm: 88,
    audioUrl: MY_NAAT_LINKS.talaAlBadruUrl || 'https://cdn.islamicfinder.org/audio/tala-al-badru-alayna.mp3',
    lyrics: [
      {
        arabic: 'طَلَعَ الْبَدْرُ عَلَيْنَا مِنْ ثَنِيَّاتِ الْوَدَاعِ',
        transliteration: "Tala'al badru 'alayna, min thaniyyatil-wada'",
        english: 'The full moon has risen upon us, from the valleys of Wada.',
      },
      {
        arabic: 'وَجَبَ الشُّكْرُ عَلَيْنَا مَا دَعَا لِلّٰهِ دَاعِ',
        transliteration: "Wajabash-shukru 'alayna, ma da'a lillahi da'",
        english: 'Gratitude is forever obligatory upon us, as long as a caller calls to Allah.',
      },
      {
        arabic: 'أَيُّهَا الْمَبْعُوثُ فِينَا جِئْتَ بِالأَمْرِ الْمُطَاعِ',
        transliteration: "Ayyuhal-mab'uthu feena, ji'ta bil-amril-muta'",
        english: 'O you who were sent amongst us, you came with noble commands to be obeyed.',
      },
      {
        arabic: 'جِئْتَ شَرَّفْتَ الْمَدِينَةَ مَرْحَبًا يَا خَيْرَ دَاعِ',
        transliteration: "Ji'ta sharraftal-madinah, marhaban ya khayra da'",
        english: 'You have illuminated and ennobled Madinah, welcome O greatest guide!',
      },
    ],
    // Authentic Tala'al Badru melody phrase
    melodyNotes: [
      { note: NOTES.F4, duration: 0.6, lyricIdx: 0 },
      { note: NOTES.G4, duration: 0.6, lyricIdx: 0 },
      { note: NOTES.A4, duration: 1.0, lyricIdx: 0 },
      { note: NOTES.A4, duration: 0.8, lyricIdx: 0 },
      { note: NOTES.Bb4, duration: 0.5, lyricIdx: 0 },
      { note: NOTES.A4, duration: 0.5, lyricIdx: 0 },
      { note: NOTES.G4, duration: 0.6, lyricIdx: 0 },
      { note: NOTES.F4, duration: 1.2, lyricIdx: 0 },
      { note: NOTES.REST, duration: 0.4 },

      { note: NOTES.G4, duration: 0.6, lyricIdx: 0 },
      { note: NOTES.A4, duration: 0.6, lyricIdx: 0 },
      { note: NOTES.Bb4, duration: 1.0, lyricIdx: 0 },
      { note: NOTES.Bb4, duration: 0.8, lyricIdx: 0 },
      { note: NOTES.C5, duration: 0.5, lyricIdx: 0 },
      { note: NOTES.Bb4, duration: 0.5, lyricIdx: 0 },
      { note: NOTES.A4, duration: 0.6, lyricIdx: 0 },
      { note: NOTES.G4, duration: 1.2, lyricIdx: 0 },
      { note: NOTES.REST, duration: 0.4 },

      { note: NOTES.A4, duration: 0.6, lyricIdx: 1 },
      { note: NOTES.Bb4, duration: 0.6, lyricIdx: 1 },
      { note: NOTES.C5, duration: 1.0, lyricIdx: 1 },
      { note: NOTES.C5, duration: 0.8, lyricIdx: 1 },
      { note: NOTES.D5, duration: 0.5, lyricIdx: 1 },
      { note: NOTES.C5, duration: 0.5, lyricIdx: 1 },
      { note: NOTES.Bb4, duration: 0.6, lyricIdx: 1 },
      { note: NOTES.A4, duration: 1.2, lyricIdx: 1 },
      { note: NOTES.REST, duration: 0.4 },

      { note: NOTES.G4, duration: 0.6, lyricIdx: 1 },
      { note: NOTES.A4, duration: 0.6, lyricIdx: 1 },
      { note: NOTES.Bb4, duration: 0.8, lyricIdx: 1 },
      { note: NOTES.A4, duration: 0.6, lyricIdx: 1 },
      { note: NOTES.G4, duration: 0.6, lyricIdx: 1 },
      { note: NOTES.F4, duration: 0.6, lyricIdx: 1 },
      { note: NOTES.E4, duration: 0.6, lyricIdx: 1 },
      { note: NOTES.F4, duration: 1.6, lyricIdx: 1 },
      { note: NOTES.REST, duration: 0.8 },
    ],
  },
  {
    id: 'qasida-burda',
    title: 'Qasida Burda Sharif',
    arabicTitle: 'قَصِيدَةُ الْبُرْدَةِ الشَّرِيفَة',
    reciter: 'Sacred Ode of Praise',
    category: 'Imam Al-Busiri Classical Nasheed',
    tempoBpm: 76,
    audioUrl: MY_NAAT_LINKS.qasidaBurdaUrl || 'https://ia800301.us.archive.org/15/items/QasidaBurdaShareef_888/QasidaBurdaShareef.mp3',
    lyrics: [
      {
        arabic: 'مَوْلَايَ صَلِّ وَسَلِّمْ دَائِمًا أَبَدًا عَلَى حَبِيبِكَ خَيْرِ الْخَلْقِ كُلِّهِمِ',
        transliteration: "Mawlaya salli wa sallim da'iman abada, 'Ala habibika khayril khalqi kullihimi",
        english: 'My Lord, send peace and blessings constantly and forever upon Your Beloved, the best of all creation.',
      },
      {
        arabic: 'مُحَمَّدٌ سَيِّدُ الْكَوْنَيْنِ وَالثَّقَلَيْنِ وَالْفَرِيقَيْنِ مِنْ عُرْبٍ وَمِنْ عَجَمِ',
        transliteration: "Muhammadun sayyidul kawnayni wath-thaqalayni, wal fareeqayni min 'urbin wa min 'ajami",
        english: 'Muhammad is the leader of both worlds, and of both Arabs and non-Arabs.',
      },
    ],
    melodyNotes: [
      { note: NOTES.D4, duration: 0.8, lyricIdx: 0 },
      { note: NOTES.F4, duration: 0.8, lyricIdx: 0 },
      { note: NOTES.G4, duration: 1.0, lyricIdx: 0 },
      { note: NOTES.A4, duration: 1.4, lyricIdx: 0 },
      { note: NOTES.G4, duration: 0.6, lyricIdx: 0 },
      { note: NOTES.F4, duration: 0.6, lyricIdx: 0 },
      { note: NOTES.E4, duration: 0.8, lyricIdx: 0 },
      { note: NOTES.D4, duration: 1.4, lyricIdx: 0 },
      { note: NOTES.REST, duration: 0.5 },

      { note: NOTES.F4, duration: 0.8, lyricIdx: 0 },
      { note: NOTES.G4, duration: 0.8, lyricIdx: 0 },
      { note: NOTES.A4, duration: 1.2, lyricIdx: 0 },
      { note: NOTES.Bb4, duration: 0.8, lyricIdx: 0 },
      { note: NOTES.A4, duration: 0.8, lyricIdx: 0 },
      { note: NOTES.G4, duration: 0.8, lyricIdx: 0 },
      { note: NOTES.F4, duration: 1.6, lyricIdx: 0 },
      { note: NOTES.REST, duration: 0.5 },

      { note: NOTES.A4, duration: 0.8, lyricIdx: 1 },
      { note: NOTES.C5, duration: 1.0, lyricIdx: 1 },
      { note: NOTES.D5, duration: 1.4, lyricIdx: 1 },
      { note: NOTES.C5, duration: 0.8, lyricIdx: 1 },
      { note: NOTES.Bb4, duration: 0.8, lyricIdx: 1 },
      { note: NOTES.A4, duration: 1.4, lyricIdx: 1 },
      { note: NOTES.REST, duration: 0.5 },

      { note: NOTES.G4, duration: 0.8, lyricIdx: 1 },
      { note: NOTES.A4, duration: 0.8, lyricIdx: 1 },
      { note: NOTES.F4, duration: 1.0, lyricIdx: 1 },
      { note: NOTES.E4, duration: 0.8, lyricIdx: 1 },
      { note: NOTES.D4, duration: 2.0, lyricIdx: 1 },
      { note: NOTES.REST, duration: 0.8 },
    ],
  },
  {
    id: 'durood-e-taj',
    title: 'Durood-e-Taj & Salawat',
    arabicTitle: 'دُرُودِ تَاج وَ الصَّلَاةُ وَالسَّلَام',
    reciter: 'Heartfelt Salawat Chorus',
    category: 'Blessings Upon the Prophet ﷺ',
    tempoBpm: 80,
    audioUrl: MY_NAAT_LINKS.duroodETajUrl || 'https://ia800208.us.archive.org/19/items/DaroodTaj_201605/Darood%20Taj.mp3',
    lyrics: [
      {
        arabic: 'اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا وَمَوْلَانَا مُحَمَّدٍ صَاحِبِ التَّاجِ وَالْمِعْرَاجِ',
        transliteration: "Allahumma salli 'ala sayyidina wa mawlana Muhammadin, Sahibi-t-taji wal-mi'raj",
        english: 'O Allah, send blessings upon our Master Muhammad ﷺ, possessor of the Crown and Ascension.',
      },
    ],
    melodyNotes: [
      { note: NOTES.E4, duration: 0.8, lyricIdx: 0 },
      { note: NOTES.G4, duration: 0.8, lyricIdx: 0 },
      { note: NOTES.A4, duration: 1.2, lyricIdx: 0 },
      { note: NOTES.B4, duration: 1.4, lyricIdx: 0 },
      { note: NOTES.C5, duration: 1.0, lyricIdx: 0 },
      { note: NOTES.B4, duration: 0.8, lyricIdx: 0 },
      { note: NOTES.A4, duration: 1.6, lyricIdx: 0 },
      { note: NOTES.REST, duration: 0.4 },

      { note: NOTES.G4, duration: 0.8, lyricIdx: 0 },
      { note: NOTES.A4, duration: 0.8, lyricIdx: 0 },
      { note: NOTES.B4, duration: 1.0, lyricIdx: 0 },
      { note: NOTES.A4, duration: 0.8, lyricIdx: 0 },
      { note: NOTES.G4, duration: 0.8, lyricIdx: 0 },
      { note: NOTES.F4, duration: 0.8, lyricIdx: 0 },
      { note: NOTES.E4, duration: 2.0, lyricIdx: 0 },
      { note: NOTES.REST, duration: 0.8 },
    ],
  },
  {
    id: 'balaghal-ula',
    title: 'Balaghal Ula Bi Kamaalihi',
    arabicTitle: 'بَلَغَ الْعُلَى بِكَمَالِهِ',
    reciter: 'Devotional Tribute',
    category: 'Shaykh Saadi Eulogy',
    tempoBpm: 84,
    audioUrl: MY_NAAT_LINKS.balaghalUlaUrl || 'https://ia801604.us.archive.org/16/items/balaghal-ula-bi-kamalihi/Balaghal%20Ula%20Bi%20Kamalihi.mp3',
    lyrics: [
      {
        arabic: 'بَلَغَ الْعُلَى بِكَمَالِهِ ، كَشَفَ الدُّجَى بِجَمَالِهِ',
        transliteration: 'Balaghal ula bi kamalihi, Kashafad-duja bi jamalihi',
        english: 'He reached the highest station through his perfection, he dispelled darkness through his celestial beauty.',
      },
      {
        arabic: 'حَسُنَتْ جَمِيعُ خِصَالِهِ ، صَلُّوا عَلَيْهِ وَآلِهِ',
        transliteration: "Hasunat jamee'u khisalihi, Sallu 'alayhi wa aalihi",
        english: 'Beauteous are all of his qualities and virtues; send blessings upon him and his noble family ﷺ.',
      },
    ],
    melodyNotes: [
      { note: NOTES.G4, duration: 0.6, lyricIdx: 0 },
      { note: NOTES.A4, duration: 0.6, lyricIdx: 0 },
      { note: NOTES.Bb4, duration: 1.0, lyricIdx: 0 },
      { note: NOTES.A4, duration: 0.8, lyricIdx: 0 },
      { note: NOTES.G4, duration: 1.2, lyricIdx: 0 },
      { note: NOTES.REST, duration: 0.3 },

      { note: NOTES.Bb4, duration: 0.6, lyricIdx: 0 },
      { note: NOTES.C5, duration: 0.6, lyricIdx: 0 },
      { note: NOTES.D5, duration: 1.2, lyricIdx: 0 },
      { note: NOTES.C5, duration: 0.8, lyricIdx: 0 },
      { note: NOTES.Bb4, duration: 1.4, lyricIdx: 0 },
      { note: NOTES.REST, duration: 0.3 },

      { note: NOTES.D5, duration: 0.6, lyricIdx: 1 },
      { note: NOTES.C5, duration: 0.6, lyricIdx: 1 },
      { note: NOTES.Bb4, duration: 0.8, lyricIdx: 1 },
      { note: NOTES.A4, duration: 0.8, lyricIdx: 1 },
      { note: NOTES.G4, duration: 1.0, lyricIdx: 1 },
      { note: NOTES.F4, duration: 0.6, lyricIdx: 1 },
      { note: NOTES.G4, duration: 1.8, lyricIdx: 1 },
      { note: NOTES.REST, duration: 0.8 },
    ],
  },
];

type AudioMode = 'synthetic' | 'external' | 'uploaded';

class NaatAudioEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private isPlaying = false;
  private isMuted = false;
  private volume = 0.8;
  private currentTrackIndex = 0;
  private audioMode: AudioMode = 'synthetic';

  // HTML5 audio element for files/external URLs
  private audioElement: HTMLAudioElement | null = null;
  private customTracks: TrackDefinition[] = [];

  // Active synthesizers and timers
  private melodyTimer: number | null = null;
  private currentNoteIndex = 0;
  private activeVoices: { osc: OscillatorNode; gain: GainNode }[] = [];
  private duffTimer: number | null = null;

  // Listeners for UI reactivity
  private listeners: Set<() => void> = new Set();

  constructor() {
    // Check saved state
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('mubarak_custom_naat_track');
        if (saved) {
          const parsed = JSON.parse(saved);
          this.customTracks = [parsed];
        }
      } catch {}
    }
  }

  public subscribe(callback: () => void) {
    this.listeners.add(callback);
    return () => {
      this.listeners.delete(callback);
    };
  }

  private notify() {
    this.listeners.forEach((cb) => {
      try {
        cb();
      } catch {}
    });
  }

  private initAudioContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : this.volume, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  public getAllTracks(): TrackDefinition[] {
    return [...this.customTracks, ...SPIRITUAL_TRACKS];
  }

  public getCurrentTrack(): TrackDefinition {
    const all = this.getAllTracks();
    return all[this.currentTrackIndex] || SPIRITUAL_TRACKS[0];
  }

  public getCurrentTrackIndex(): number {
    return this.currentTrackIndex;
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public getVolume(): number {
    return this.volume;
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  public getAudioMode(): AudioMode {
    return this.audioMode;
  }

  /**
   * Primary Play / Toggle Method (Safe & Guaranteed sound output)
   */
  public async togglePlay(): Promise<boolean> {
    if (this.isPlaying) {
      this.pause();
      return false;
    } else {
      await this.play();
      return true;
    }
  }

  public async play(trackIdx?: number) {
    this.initAudioContext();
    if (typeof trackIdx === 'number') {
      this.currentTrackIndex = trackIdx;
    }

    const currentTrack = this.getCurrentTrack();
    this.isPlaying = true;
    this.notify();

    // If it's a custom uploaded file or URL track, try HTML5 audio first
    if (currentTrack.audioUrl && (currentTrack.audioUrl.startsWith('blob:') || currentTrack.audioUrl.startsWith('data:'))) {
      this.audioMode = 'uploaded';
      this.playHtmlAudio(currentTrack.audioUrl);
      return;
    }

    // Otherwise, play with our ultra-high-fidelity built-in Naat Vocal / Flute / Drone Synthesizer
    // This gives instant, crystal-clear, zero-lag devotional melody
    this.audioMode = 'synthetic';
    this.startSyntheticNaatMelody();

    // In parallel, if there is an audioUrl, optionally attempt to stream HTML5 in background if desired
    if (currentTrack.audioUrl && !currentTrack.audioUrl.startsWith('blob:')) {
      this.tryHtmlAudioWithFallback(currentTrack.audioUrl);
    }
  }

  public pause() {
    this.isPlaying = false;
    this.stopSyntheticMelody();
    if (this.audioElement) {
      this.audioElement.pause();
    }
    this.notify();
  }

  public nextTrack() {
    const all = this.getAllTracks();
    this.currentTrackIndex = (this.currentTrackIndex + 1) % all.length;
    if (this.isPlaying) {
      this.play(this.currentTrackIndex);
    } else {
      this.notify();
    }
  }

  public prevTrack() {
    const all = this.getAllTracks();
    this.currentTrackIndex = (this.currentTrackIndex - 1 + all.length) % all.length;
    if (this.isPlaying) {
      this.play(this.currentTrackIndex);
    } else {
      this.notify();
    }
  }

  public setVolume(vol: number) {
    this.volume = Math.max(0, Math.min(1, vol));
    this.isMuted = this.volume === 0;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : this.volume, this.ctx.currentTime);
    }
    if (this.audioElement) {
      this.audioElement.volume = this.isMuted ? 0 : this.volume;
    }
    this.notify();
  }

  public toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : this.volume, this.ctx.currentTime);
    }
    if (this.audioElement) {
      this.audioElement.volume = this.isMuted ? 0 : this.volume;
    }
    this.notify();
  }

  /**
   * HTML5 Audio for uploaded files
   */
  private playHtmlAudio(url: string) {
    this.stopSyntheticMelody();
    if (!this.audioElement) {
      this.audioElement = new Audio();
      this.audioElement.onended = () => {
        this.nextTrack();
      };
    }
    this.audioElement.src = url;
    this.audioElement.volume = this.isMuted ? 0 : this.volume;
    this.audioElement
      .play()
      .then(() => {
        this.isPlaying = true;
        this.notify();
      })
      .catch(() => {
        // Fallback to synthesizer
        this.startSyntheticNaatMelody();
      });
  }

  private tryHtmlAudioWithFallback(url: string) {
    if (!this.audioElement) {
      this.audioElement = new Audio();
    }
    this.audioElement.src = url;
    this.audioElement.volume = this.isMuted ? 0 : this.volume;
    this.audioElement
      .play()
      .then(() => {
        // If HTML5 audio successfully connects, we can lower or blend synthetic
        this.audioMode = 'external';
        this.stopSyntheticMelody();
      })
      .catch(() => {
        // Ignore CORS/Network failure because our synthetic Naat engine is already playing!
      });
  }

  /**
   * High-Fidelity Naat Vocal & Ney Flute Synthesizer Engine
   */
  private startSyntheticNaatMelody() {
    this.stopSyntheticMelody();
    this.initAudioContext();
    if (!this.ctx || !this.masterGain) return;

    this.currentNoteIndex = 0;
    this.playContinuousDrone();
    this.startDuffRhythm();
    this.scheduleNextMelodyNote();
  }

  private stopSyntheticMelody() {
    if (this.melodyTimer) {
      clearTimeout(this.melodyTimer);
      this.melodyTimer = null;
    }
    if (this.duffTimer) {
      clearInterval(this.duffTimer);
      this.duffTimer = null;
    }
    this.activeVoices.forEach((v) => {
      try {
        v.gain.gain.setValueAtTime(0.0001, this.ctx?.currentTime || 0);
        v.osc.stop();
        v.osc.disconnect();
      } catch {}
    });
    this.activeVoices = [];
  }

  // Warm atmospheric modal drone (Islamic Maqam Root F/C)
  private playContinuousDrone() {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;

    const drone1 = this.ctx.createOscillator();
    const drone2 = this.ctx.createOscillator();
    const subDrone = this.ctx.createOscillator();

    const droneGain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(380, now);

    // Warm deep notes (F2 - 87.31Hz, C3 - 130.81Hz, F1 - 43.65Hz)
    drone1.type = 'sine';
    drone1.frequency.setValueAtTime(87.31, now);
    drone2.type = 'triangle';
    drone2.frequency.setValueAtTime(130.81, now);
    subDrone.type = 'sine';
    subDrone.frequency.setValueAtTime(43.65, now);

    droneGain.gain.setValueAtTime(0.001, now);
    droneGain.gain.linearRampToValueAtTime(0.12, now + 1.5);

    drone1.connect(filter);
    drone2.connect(filter);
    subDrone.connect(filter);
    filter.connect(droneGain);
    droneGain.connect(this.masterGain);

    drone1.start(now);
    drone2.start(now);
    subDrone.start(now);

    this.activeVoices.push(
      { osc: drone1, gain: droneGain },
      { osc: drone2, gain: droneGain },
      { osc: subDrone, gain: droneGain }
    );
  }

  // Authentic rhythmic Duff (Frame Drum) pulse
  private startDuffRhythm() {
    if (this.duffTimer) clearInterval(this.duffTimer);

    // Tempo of Duff (Every 1.2s pulse)
    this.duffTimer = window.setInterval(() => {
      if (!this.isPlaying || !this.ctx || !this.masterGain) return;
      this.playDuffHit();
    }, 1200);
  }

  private playDuffHit() {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(110, now);
    osc.frequency.exponentialRampToValueAtTime(45, now + 0.35);

    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.38);
  }

  // Play each note with rich acoustic Ney Flute / Vocal Formants
  private scheduleNextMelodyNote() {
    if (!this.isPlaying || !this.ctx || !this.masterGain) return;

    const currentTrack = this.getCurrentTrack();
    const notes = currentTrack.melodyNotes;
    if (!notes || notes.length === 0) return;

    const noteObj = notes[this.currentNoteIndex];
    const duration = noteObj.duration * (60 / (currentTrack.tempoBpm || 80));

    if (noteObj.note > 0) {
      this.playNeyVocalNote(noteObj.note, duration);
    }

    this.currentNoteIndex = (this.currentNoteIndex + 1) % notes.length;

    this.melodyTimer = window.setTimeout(() => {
      this.scheduleNextMelodyNote();
    }, duration * 1000);
  }

  private playNeyVocalNote(freq: number, duration: number) {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;

    // 1. Lead Vocal Flute Oscillator (Warm Sine + Triangle)
    const oscLead = this.ctx.createOscillator();
    const oscHarmonic = this.ctx.createOscillator();
    const noteGain = this.ctx.createGain();

    // 2. Vocal Formant Filter (Emulates human voice vowel cavity ~800Hz-1200Hz)
    const formantFilter = this.ctx.createBiquadFilter();
    formantFilter.type = 'bandpass';
    formantFilter.frequency.setValueAtTime(950, now);
    formantFilter.Q.setValueAtTime(2.5, now);

    // 3. Vibrato LFO for devotional soulfulness
    const vibrato = this.ctx.createOscillator();
    const vibratoGain = this.ctx.createGain();
    vibrato.frequency.setValueAtTime(5.2, now); // 5.2Hz soft vibrato
    vibratoGain.gain.setValueAtTime(3.5, now);
    vibrato.connect(vibratoGain);
    vibratoGain.connect(oscLead.frequency);
    vibrato.start(now);
    vibrato.stop(now + duration + 0.4);

    oscLead.type = 'sine';
    oscLead.frequency.setValueAtTime(freq, now);

    oscHarmonic.type = 'triangle';
    oscHarmonic.frequency.setValueAtTime(freq * 2, now); // Octave overtone

    // ADSR Envelope
    const attack = Math.min(0.15, duration * 0.25);
    const release = Math.min(0.3, duration * 0.35);

    noteGain.gain.setValueAtTime(0.0001, now);
    noteGain.gain.linearRampToValueAtTime(0.32, now + attack);
    noteGain.gain.setValueAtTime(0.26, now + duration - release);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, now + duration + release);

    oscLead.connect(formantFilter);
    oscHarmonic.connect(formantFilter);
    formantFilter.connect(noteGain);
    noteGain.connect(this.masterGain);

    oscLead.start(now);
    oscHarmonic.start(now);

    oscLead.stop(now + duration + release + 0.1);
    oscHarmonic.stop(now + duration + release + 0.1);
  }

  /**
   * Attach user audio
   */
  public attachCustomTrack(track: TrackDefinition) {
    this.customTracks = [track, ...this.customTracks.filter((t) => t.id !== track.id)];
    this.currentTrackIndex = 0;
    try {
      localStorage.setItem('mubarak_custom_naat_track', JSON.stringify(track));
    } catch {}
    this.play(0);
  }

  public removeCustomTrack(trackId: string) {
    this.customTracks = this.customTracks.filter((t) => t.id !== trackId);
    this.currentTrackIndex = 0;
    try {
      localStorage.removeItem('mubarak_custom_naat_track');
    } catch {}
    this.notify();
  }

  // Interactive one-shot celebratory chimes
  public playInstantSalawatChime() {
    this.initAudioContext();
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;
    const freqs = [523.25, 659.25, 783.99, 1046.5];

    freqs.forEach((f, i) => {
      const osc = this.ctx!.createOscillator();
      const g = this.ctx!.createGain();
      const t = now + i * 0.1;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, t);

      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.08, t + 0.04);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 2.0);

      osc.connect(g);
      g.connect(this.masterGain!);

      osc.start(t);
      osc.stop(t + 2.1);
    });
  }
}

export const naatAudio = new NaatAudioEngine();
