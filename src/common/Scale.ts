import { Random } from "./utils";

export class Scale {
  public key: typeof Keys[number];
  public scale: typeof Scales[number];

  constructor() {
    this.key = Random.fromArray(Keys);
    this.scale = Random.fromArray(Scales);
  }

  public toString() {
    return `${this.key} ${this.scale}`;
  }
}

export default Scale;

export const Keys = ["A", "A#/B♭", "B", "C", "C#/D♭", "D", "D#/E♭", "E", "F", "F#/G♭", "G", "G#/A♭"];
export const Scales = ["Major", "Minor"];