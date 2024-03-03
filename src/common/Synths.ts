import { ArrayUtils, Random } from "./utils";

export class Synths {
  public static All = new Synths(true, true, true, true, true);

  public lead: Synth[];
  public bass: Synth[];
  public chords: Synth[];
  public arp: Synth[];
  public pad: Synth[];

  constructor(
    lead: boolean, chords: boolean, bass: boolean,
    arp: boolean = false, pad: boolean = false
  ) {
    this.lead = assignArrayWithCallback(lead ? Random.max(MAX_LAYERS) : 0, () => new Synth());
    this.bass = assignArrayWithCallback(bass ? Random.max(MAX_LAYERS) : 0, () => new Synth());
    this.chords = assignArrayWithCallback(chords ? Random.max(MAX_LAYERS) : 0, () => new Synth());
    this.arp = assignArrayWithCallback(arp ? Random.max(MAX_LAYERS) : 0, () => new Synth());
    this.pad = assignArrayWithCallback(pad ? Random.max(MAX_LAYERS) : 0, () => new Synth());
  }
}

export default Synths;

export const SynthWaveforms = ["sine", "square", "saw", "triangle"];
export const SynthEffects = ["reverb", "delay", "chorus", "phaser", "distortion", "vibrato", 'porta', 'flanger', 'detuned', 'mono'];

const MAX_WAVEFORMS = 2;
const MAX_EFFECTS = SynthEffects.length;
const MAX_LAYERS = 4;

export class Synth {
  public waveforms: typeof SynthWaveforms;
  public effects: typeof SynthEffects;

  constructor() {
    this.waveforms = assignArrayWithSelection(Random.max(MAX_WAVEFORMS), SynthWaveforms);
    this.effects = assignArrayWithSelection(Random.max(MAX_EFFECTS), SynthEffects);
  }

  public toString() {
    return `${ArrayUtils.join(this.waveforms)} waves with effects ${ArrayUtils.join(this.effects)}`;
  }
}

export function assignArrayWithCallback<T>(amount: number, callback: () => T): T[] {
  const result = [];

  for (let i = 0; i < amount; i++) {
    result.push(callback());
  }

  return result;
}

export function assignArrayWithSelection<T>(amount: number, selection: Array<T>): T[] {
  const result = [];

  for (let i = 0; i < amount; i++) {
    result.push(Random.fromArray(selection));
  }

  return result;
}