/**
 * Audio synthesis helper using Web Audio API for peaceful, ambient soundscapes
 * Completely self-contained, no external audio files required
 * Default: Sound is OFF until explicitly enabled by user
 */

class AmbientAudioEngine {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private masterGain: GainNode | null = null;
  private droneOsc1: OscillatorNode | null = null;
  private droneOsc2: OscillatorNode | null = null;
  private chimeInterval: number | null = null;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.2, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public start() {
    try {
      this.initContext();
      if (!this.ctx || !this.masterGain) return;

      this.isPlaying = true;
      const now = this.ctx.currentTime;

      // Soft warm base drone (F2 - 87.31Hz & C3 - 130.81Hz harmonic)
      this.droneOsc1 = this.ctx.createOscillator();
      this.droneOsc2 = this.ctx.createOscillator();
      const droneGain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(320, now);

      this.droneOsc1.type = 'sine';
      this.droneOsc1.frequency.setValueAtTime(87.31, now); // F2
      this.droneOsc2.type = 'sine';
      this.droneOsc2.frequency.setValueAtTime(130.81, now); // C3

      droneGain.gain.setValueAtTime(0.001, now);
      droneGain.gain.exponentialRampToValueAtTime(0.08, now + 3);

      this.droneOsc1.connect(filter);
      this.droneOsc2.connect(filter);
      filter.connect(droneGain);
      droneGain.connect(this.masterGain);

      this.droneOsc1.start(now);
      this.droneOsc2.start(now);

      // Play soft initial chime
      this.playGentleChime([349.23, 440.0, 523.25, 698.46]);

      // Periodic soothing chimes
      this.chimeInterval = window.setInterval(() => {
        if (!this.isPlaying) return;
        const chords = [
          [349.23, 440.0, 523.25, 698.46], // F Major
          [261.63, 329.63, 392.0, 523.25], // C Major
          [293.66, 349.23, 440.0, 587.33], // D Minor
          [329.63, 392.0, 493.88, 659.25], // E Minor
        ];
        const randomChord = chords[Math.floor(Math.random() * chords.length)];
        this.playGentleChime(randomChord);
      }, 10000);
    } catch {
      this.isPlaying = false;
    }
  }

  public stop() {
    this.isPlaying = false;
    if (this.chimeInterval) {
      clearInterval(this.chimeInterval);
      this.chimeInterval = null;
    }
    if (this.droneOsc1) {
      try {
        this.droneOsc1.stop();
        this.droneOsc1.disconnect();
      } catch {}
      this.droneOsc1 = null;
    }
    if (this.droneOsc2) {
      try {
        this.droneOsc2.stop();
        this.droneOsc2.disconnect();
      } catch {}
      this.droneOsc2 = null;
    }
  }

  public playGentleChime(frequencies: number[] = [523.25, 659.25, 783.99]) {
    try {
      this.initContext();
      if (!this.ctx || !this.masterGain) return;
      const now = this.ctx.currentTime;

      frequencies.forEach((freq, idx) => {
        const osc = this.ctx!.createOscillator();
        const gain = this.ctx!.createGain();
        const startTime = now + idx * 0.12;

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, startTime);

        gain.gain.setValueAtTime(0.0001, startTime);
        gain.gain.exponentialRampToValueAtTime(0.05, startTime + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 2.5);

        osc.connect(gain);
        gain.connect(this.masterGain!);

        osc.start(startTime);
        osc.stop(startTime + 2.6);
      });
    } catch {}
  }

  public playBlessingChime() {
    this.playGentleChime([440, 554.37, 659.25, 880]);
  }

  public playDuaAmenChime() {
    this.playGentleChime([392.0, 493.88, 587.33, 783.99]);
  }

  public playSalawatChime() {
    this.playGentleChime([523.25, 659.25, 783.99, 1046.5]);
  }
}

export const ambientAudio = new AmbientAudioEngine();
