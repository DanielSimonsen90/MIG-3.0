import { RemoveReadonly } from "../types";

export class Arrangement {
  constructor(
    public sections: RemoveReadonly<typeof ArrangementSections>
  ) {}

  public toString() {
    return this.sections.join(' - ');
  }
}

export default Arrangement;

export const ArrangementSections = [
  'Intro',
  'Verse',
  'Pre-Chorus',
  'Rap-Verse',
  'Build-Up',
  'Melody Reveal',

  'Fake-Drop',
  'Drop',

  'Break',
  'Orchestral-Break',
  'Future-Bass-Break',
  'Trap-Break',
  'Dubstep-Break',
  'Drum-N-Bass-Break',
  'Techno-Break',
  'Reggae-Break',
  '8-bit-Break',
  'Vocal-Chop-Break',
  'Screech-Break',
  'Klaplong-Break',
  'Zaag-Break',
  'Rawstyle-Break',
  'Metal-Break',

  'Solo',
  'Sax Solo',
  
  'Outro'
] as const;
