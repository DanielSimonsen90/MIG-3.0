import { Genre, assignArrayWithSelection } from '../common';
import { Random } from '../common/utils';
import { Artists, Tracks, Genres, TrackNameWords } from '../data';

export class DataService {
  public static getRandomGenre(): typeof Genres[number] {
    return Random.fromArray(Genres);
  }

  public static getRandomTrackFromGenre(genre: Genre): typeof Tracks[number] {
    return Random.fromArray(Tracks.filter(track => track.genres.includes(genre)));
  }

  public static getArtistFromTrack(track: typeof Tracks[number]) {
    return Artists.find(artist => artist.releases.includes(track));
  }

  public static generateIdeaTitle(): string {
    const wordCount = Random.between(2, 8);
    const result = assignArrayWithSelection(wordCount, TrackNameWords).join(' '); // TODO: Consider using GBT to fix the name
    return result.charAt(0).toUpperCase() + result.slice(1);
  }
}