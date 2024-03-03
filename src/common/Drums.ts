export class Drums {
  constructor(
    public kick: Kicks,
    public clap: Claps,
    public hihat: Hihats,
    public openhat: Openhats,
    public snare: Snares,
    public tom: boolean,
    public crash: boolean,
    public ride: boolean,
    public perc: boolean
  ) { }
}

export default Drums;

type Kicks = 'Acoustic' | 'Punchy' | 'Lofi' | 'Distorted' | 'Trance' | 'Club';
type Claps = 'Tight' | 'Main' | 'Huge' | 'Reverbed';
type Hihats = 'Acoustic' | 'Tick' | 'Lofi' | 'Lowend'
type Openhats = 'Acoustic' | 'House' | 'Club';
type Snares = 'Acoustic' | 'House' | 'Lofi' | 'Future Bass' | 'Trap' | 'Club' | 'Dubstep';