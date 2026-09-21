type Node = OscillatorNode | AudioBufferSourceNode;

class SoundEngine {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  private tension: { osc: OscillatorNode; gain: GainNode; lfo: OscillatorNode } | null = null;
  private challenge: { osc: OscillatorNode; bass: OscillatorNode; gain: GainNode; pulse: OscillatorNode } | null = null;
  muted = false;

  constructor() {
    if (typeof window !== "undefined") this.muted = localStorage.getItem("atlas-muted") === "1";
  }

  unlock() {
    if (typeof window === "undefined") return;
    if (!this.ctx) {
      this.ctx = new AudioContext();
      this.master = this.ctx.createGain();
      this.master.gain.value = this.muted ? 0 : 0.16;
      this.master.connect(this.ctx.destination);
    }
    if (this.ctx.state === "suspended") void this.ctx.resume();
  }

  setMuted(value: boolean) {
    this.muted = value;
    localStorage.setItem("atlas-muted", value ? "1" : "0");
    if (this.master) this.master.gain.setTargetAtTime(value ? 0 : 0.16, this.ctx?.currentTime ?? 0, 0.03);
    if (value) { this.suspenseLoop.stop(); this.challengeLoop.stop(); }
  }

  private tone(freq: number, duration: number, type: OscillatorType = "sine", when = 0, volume = 0.22) {
    this.unlock();
    if (!this.ctx || !this.master || this.muted) return;
    const now = this.ctx.currentTime + when;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = type; osc.frequency.setValueAtTime(freq, now);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(volume, now + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    osc.connect(gain); gain.connect(this.master); osc.start(now); osc.stop(now + duration + 0.02);
  }

  private noise(duration = 0.28, volume = 0.08) {
    this.unlock();
    if (!this.ctx || !this.master || this.muted) return;
    const length = Math.max(1, Math.floor(this.ctx.sampleRate * duration));
    const buffer = this.ctx.createBuffer(1, length, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < length; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / length);
    const source = this.ctx.createBufferSource(); const filter = this.ctx.createBiquadFilter(); const gain = this.ctx.createGain();
    source.buffer = buffer; filter.type = "lowpass"; filter.frequency.value = 1200; gain.gain.value = volume;
    source.connect(filter); filter.connect(gain); gain.connect(this.master); source.start();
  }

  whoosh() { this.tone(160, 0.18, "sine", 0, 0.12); this.tone(360, 0.28, "sine", 0.08, 0.08); }
  pageTurn() { this.noise(0.34, 0.07); this.tone(220, 0.18, "triangle", 0.05, 0.07); }
  tick() { this.tone(500, 0.055, "square", 0, 0.06); }
  tickFast() { this.tone(820, 0.07, "square", 0, 0.09); }
  alarm() { this.tone(180, 0.24, "sawtooth", 0, 0.11); this.tone(130, 0.24, "sawtooth", 0.25, 0.1); }
  revealHit() { this.tone(440, 0.14, "sine", 0, 0.1); this.tone(660, 0.28, "sine", 0.08, 0.12); }
  correct() { [523, 659, 784].forEach((n, i) => this.tone(n, 0.32, "sine", i * 0.1, 0.12)); }
  wrong() { this.tone(160, 0.28, "triangle", 0, 0.12); this.tone(120, 0.34, "triangle", 0.12, 0.1); }
  drumroll() { [170, 190, 215, 240, 270].forEach((n, i) => this.tone(n, 0.08, "square", i * 0.1, 0.05)); }
  completeFanfare() { [392, 523, 659, 784].forEach((n, i) => this.tone(n, 0.46, "sine", i * 0.12, 0.12)); }
  winnerFanfare() { [392, 494, 587, 784, 988].forEach((n, i) => this.tone(n, 0.7, "triangle", i * 0.13, 0.14)); }

  curtainOpen() { this.noise(1.25, 0.11); this.tone(92, 0.55, "sine", 0, 0.08); this.tone(184, 0.9, "triangle", 0.35, 0.08); }
  challengeLoop = {
    start: () => { this.unlock(); if (!this.ctx || !this.master || this.muted || this.challenge) return; const osc=this.ctx.createOscillator(); const bass=this.ctx.createOscillator(); const gain=this.ctx.createGain(); const pulse=this.ctx.createOscillator(); const pulseGain=this.ctx.createGain(); osc.type="triangle"; bass.type="sine"; osc.frequency.value=196; bass.frequency.value=98; gain.gain.value=0.0001; pulse.frequency.value=1.5; pulseGain.gain.value=0.05; pulse.connect(pulseGain); pulseGain.connect(gain.gain); osc.connect(gain); bass.connect(gain); gain.connect(this.master); osc.start(); bass.start(); pulse.start(); gain.gain.exponentialRampToValueAtTime(0.045, this.ctx.currentTime+0.7); this.challenge={osc,bass,gain,pulse}; },
    boost: () => { if (!this.ctx || !this.challenge) return; this.challenge.osc.frequency.setTargetAtTime(330, this.ctx.currentTime, 0.08); this.challenge.bass.frequency.setTargetAtTime(165, this.ctx.currentTime, 0.08); this.challenge.gain.gain.setTargetAtTime(0.075, this.ctx.currentTime, 0.08); },
    stop: () => { if (!this.ctx || !this.challenge) return; this.challenge.gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime+0.35); this.challenge.osc.stop(this.ctx.currentTime+0.4); this.challenge.bass.stop(this.ctx.currentTime+0.4); this.challenge.pulse.stop(this.ctx.currentTime+0.4); this.challenge=null; },
  };

  suspenseLoop = {
    start: () => {
      this.unlock();
      if (!this.ctx || !this.master || this.muted || this.tension) return;
      const osc = this.ctx.createOscillator(); const gain = this.ctx.createGain(); const lfo = this.ctx.createOscillator(); const lfoGain = this.ctx.createGain();
      osc.type = "sine"; osc.frequency.value = 74; gain.gain.value = 0.0001; lfo.frequency.value = 0.22; lfoGain.gain.value = 0.035;
      lfo.connect(lfoGain); lfoGain.connect(gain.gain); osc.connect(gain); gain.connect(this.master); osc.start(); lfo.start(); gain.gain.exponentialRampToValueAtTime(0.08, this.ctx.currentTime + 0.6);
      this.tension = { osc, gain, lfo };
    },
    stop: () => {
      if (!this.ctx || !this.tension) return;
      this.tension.gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.25);
      this.tension.osc.stop(this.ctx.currentTime + 0.3); this.tension.lfo.stop(this.ctx.currentTime + 0.3); this.tension = null;
    },
  };
}

export const soundEngine = new SoundEngine();
