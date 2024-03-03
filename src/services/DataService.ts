import { Genre } from '../common';
import { Random } from '../common/utils';
import { Artists, Tracks, Genres, TrackNameWords, Arrangements } from '../data';

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

  public static Artists = Artists;
  public static Tracks = Tracks;
  public static Genres = Genres;
  public static TrackNameWords = TrackNameWords;
  public static Arrangements = Arrangements;
}