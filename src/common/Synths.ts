import { Random } from "./utils";
import Synth from "./Synth";

const MAX_LAYERS = 4;
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

  public any() {
    return this.lead.length > 0 || this.bass.length > 0 || this.chords.length > 0 || this.arp.length > 0 || this.pad.length > 0;
  }
}

export default Synths;

export function assignArrayWithCallback<T>(amount: number, callback: () => T): T[] {
  const result = [];

  for (let i = 0; i < amount; i++) {
    result.push(callback());
  }

  return result;
}