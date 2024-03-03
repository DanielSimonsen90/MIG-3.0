import Genre from "./Genre";

export class Reference {
  constructor(
    public artist: ReferenceArtist,
    public track: ReferenceTrack
  ) {}
}

export class ReferenceTrack {
  constructor(
    public name: string,
    public genres: Genre[]
  ) {}
}

export class ReferenceArtist {
  constructor(
    public name: string,
    public tracks: ReferenceTrack[],
    public remixes: ReferenceTrack[] = []
  ) {}

  public get releases(): ReferenceTrack[] {
    return this.tracks.concat(this.remixes);
  }
}