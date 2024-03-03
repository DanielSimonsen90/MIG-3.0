import { ArrayUtils, Random, StringUtils } from "./utils";

export const SynthWaveforms = ["sine", "square", "saw", "triangle"];
export const SynthEffects = ["reverb", "delay", "chorus", "phaser", "distortion", "vibrato", 'porta', 'flanger', 'detuned', 'mono'];

const MAX_WAVEFORMS = 2;
const MAX_EFFECTS = SynthEffects.length;

export class Synth {
  public waveforms: typeof SynthWaveforms;
  public effects: typeof SynthEffects;

  constructor() {
    this.waveforms = assignArrayWithSelection(Random.between(1, MAX_WAVEFORMS), SynthWaveforms);
    this.effects = assignArrayWithSelection(Random.between(1, MAX_EFFECTS), SynthEffects);
  }

  public toString() {
    return `${ArrayUtils.join(this.waveforms.map(wave => StringUtils.pascalCase(wave)))} waves with effects ${ArrayUtils.join(this.effects.map(effect => StringUtils.pascalCase(effect)))}`;
  }
}

export default Synth; 

export function assignArrayWithSelection<T>(amount: number, selection: Array<T>): T[] {
  const result = [];

  for (let i = 0; i < amount; i++) {
    result.push(Random.fromArray(selection));
  }

  return [...new Set(result)]
}