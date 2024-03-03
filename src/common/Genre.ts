import Arrangement from "./Arrangement";
import BPM from "./BPM";
import Drums from "./Drums";
import Instruments from "./Instruments";
import Synths from "./Synths";

export class Genre {
  constructor(
    public name: string,
    public bpm: BPM,
    public drums: Drums,
    public synths: Synths,
    public instruments: Instruments,
    public arrangement: Arrangement,
  ) {}
}

export default Genre;