import { Random } from "../common/utils";
import { Effects, Idea, Scale, assignArrayWithCallback, Moods, Genre, Drums, Synths, Instruments, assignArrayWithSelection, Kicks, Claps, Hihats, Openhats, Snares, Arrangement } from "../common";
import { DataService } from "./DataService";

export class IdeaGeneratorService {
  public static generateIdea(): Idea {
    const genre = DataService.getRandomGenre();
    const referenceTrack = DataService.getRandomTrackFromGenre(genre);
    const referenceArtist = DataService.getArtistFromTrack(referenceTrack);
    
    return {
      genre: new Genre(
        genre.name, genre.bpm,
        IdeaGeneratorService.generateDrums(genre),
        IdeaGeneratorService.generateSynths(genre),
        IdeaGeneratorService.generateInstruments(genre),
        genre.arrangement
      ),
      reference: {
        artist: referenceArtist,
        track: referenceTrack
      },
      title: IdeaGeneratorService.generateIdeaTitle(),
      scale: new Scale(),
      mood: Random.fromArray(Moods),
      effects: generateEffects(),
      arrangement: IdeaGeneratorService.generateArrangement(genre.arrangement)
    }
  }

  public static generateDrums(genre: Genre): Drums {
    return new Drums(
      Random.chance(genre.drums.kick ? 75 : 50) ? genre.drums.kick : Random.fromArray(Kicks),
      Random.chance(genre.drums.clap ? 75 : 50) ? genre.drums.clap : Random.fromArray(Claps),
      Random.chance(genre.drums.hihat ? 75 : 50) ? genre.drums.hihat : Random.fromArray(Hihats),
      Random.chance(genre.drums.openhat ? 75 : 50) ? genre.drums.openhat : Random.fromArray(Openhats),
      Random.chance(genre.drums.snare ? 75 : 50) ? genre.drums.snare : Random.fromArray(Snares),
      Random.chance(genre.drums.tom ? 75 : 50) ? genre.drums.tom : Random.chance(50),
      Random.chance(genre.drums.crash ? 75 : 50) ? genre.drums.crash : Random.chance(50),
      Random.chance(genre.drums.ride ? 75 : 50) ? genre.drums.ride : Random.chance(50),
      Random.chance(genre.drums.perc ? 75 : 50) ? genre.drums.perc : Random.chance(50)
    )
  }
  public static generateSynths(genre: Genre): Synths {
    return new Synths(
      Random.chance(genre.synths.lead.length > 0 ? 75 : 50) ? genre.synths.lead.length > 0 : Random.chance(50),
      Random.chance(genre.synths.chords.length > 0 ? 75 : 50) ? genre.synths.chords.length > 0 : Random.chance(50),
      Random.chance(genre.synths.bass.length > 0 ? 75 : 50) ? genre.synths.bass.length > 0 : Random.chance(50),
      Random.chance(genre.synths.arp.length > 0 ? 75 : 50) ? genre.synths.arp.length > 0 : Random.chance(50),
      Random.chance(genre.synths.pad.length > 0 ? 75 : 50) ? genre.synths.pad.length > 0 : Random.chance(50)
    )
  }
  public static generateInstruments(genre: Genre): Instruments {
    return new Instruments(
      Random.chance(genre.instruments.piano ? 75 : 50) ? genre.instruments.piano : Random.chance(50),
      Random.chance(genre.instruments.guitar ? 75 : 50) ? genre.instruments.guitar : Random.chance(50),
      Random.chance(genre.instruments.strings ? 75 : 50) ? genre.instruments.strings : Random.chance(50),
      Random.chance(genre.instruments.horns ? 25 : 50) ? genre.instruments.horns : Random.chance(50),
      Random.chance(genre.instruments.flute ? 25 : 50) ? genre.instruments.flute : Random.chance(50),
      Random.chance(genre.instruments.sax ? 25 : 50) ? genre.instruments.sax : Random.chance(50)
    )
  }

  public static generateIdeaTitle(): string {
    const wordCount = Random.between(2, 8);
    const result = assignArrayWithSelection(wordCount, DataService.TrackNameWords).join(' '); // TODO: Consider using GBT to fix the name
    return result.charAt(0).toUpperCase() + result.slice(1);
  }
  public static generateArrangement(genreArrangement: Arrangement): string {
    const arrangement = Random.chance(33) ? genreArrangement : Random.fromArray(DataService.Arrangements);
    return arrangement.sections.join(' - ');
  }
}

function generateEffects() {
  const maxEffects = Object.keys(Effects.All).length;
  const [bigTom, tonals, whiteNoise, subDrop, impacts] = assignArrayWithCallback(maxEffects, () => Random.between(0, 1) === 1);
  return new Effects(bigTom, tonals, whiteNoise, subDrop, impacts);
}