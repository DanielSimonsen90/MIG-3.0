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

type Kicks = 'Acoustic' | 'Punchy' | 'Lofi' | 'Distorted' | 'Trance' | 'Club' 
  | 'Classic Hardstyle Kick' | 'Nasty Euphoric Hardstyle Kick' | 'Euphoric Hardstyle Kick' | 'Rawphoric Kick' 
  | 'Rawstyle Kick' | 'Zaag Kick'  | 'Klaplong Kick'
  | 'Hardcore Kick' | 'Frenchcore Kick' 
  | 'Uptempo Kick' | 'Piep Kick'
type Claps = 'Tight' | 'Main' | 'Huge' | 'Reverbed';
type Hihats = 'Acoustic' | 'Tick' | 'Lofi' | 'Lowend'
type Openhats = 'Acoustic' | 'House' | 'Club';
type Snares = 'Acoustic' | 'House' | 'Lofi' | 'Future Bass' | 'Trap' | 'Club' | 'Dubstep';

export const Kicks: Kicks[] = ['Acoustic', 'Punchy', 'Lofi', 'Distorted', 'Trance', 'Club', 'Classic Hardstyle Kick', 'Nasty Euphoric Hardstyle Kick', 'Euphoric Hardstyle Kick', 'Rawphoric Kick', 'Rawstyle Kick', 'Zaag Kick', 'Klaplong Kick', 'Hardcore Kick', 'Frenchcore Kick', 'Uptempo Kick', 'Piep Kick'];
export const Claps: Claps[] = ['Tight', 'Main', 'Huge', 'Reverbed'];
export const Hihats: Hihats[] = ['Acoustic', 'Tick', 'Lofi', 'Lowend'];
export const Openhats: Openhats[] = ['Acoustic', 'House', 'Club'];
export const Snares: Snares[] = ['Acoustic', 'House', 'Lofi', 'Future Bass', 'Trap', 'Club', 'Dubstep'];