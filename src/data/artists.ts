import { ReferenceArtist } from "../common";

export const Artists = [] as ReferenceArtist[];
export const Tracks = Artists.flatMap(artist => artist.releases);
export const TrackNameWords = Tracks.flatMap(track => track.name.split(' ').map(word => word.toLowerCase()));

export default Artists;