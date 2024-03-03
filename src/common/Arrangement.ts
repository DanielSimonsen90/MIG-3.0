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
  '8-bit Break',

  'Solo',
  
  'Outro'
] as const;
