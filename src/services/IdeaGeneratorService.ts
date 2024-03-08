import OpenAI from "openai";

import { Random } from "../common/utils";
import { 
  Effects, Idea, Scale, 
  assignArrayWithCallback, 
  Moods, Genre, Drums, 
  Synths, Instruments, 
  assignArrayWithSelection, 
  Kicks, Claps, Hihats, 
  Openhats, Snares, Arrangement, 
  Reference 
} from "../common";
import { DataService } from "./DataService";

import { OPENAI_KEY } from '../env.json';
import { Nullable } from "../types";

// @ts-ignore
const openai = new OpenAI({ apiKey: OPENAI_KEY, dangerouslyAllowBrowser: true,  });

export class IdeaGeneratorService {
  public static async generateIdea(idea: Nullable<Idea>): Promise<Idea> {
    const referenceGenre = DataService.getRandomGenre();
    const referenceTrack = DataService.getRandomTrackFromGenre(referenceGenre);
    const referenceArtist = DataService.getArtistFromTrack(referenceTrack);
    
    const genre = new Genre(
      referenceGenre.name, referenceGenre.bpm,
      IdeaGeneratorService.generateDrums(referenceGenre),
      IdeaGeneratorService.generateSynths(referenceGenre),
      IdeaGeneratorService.generateInstruments(referenceGenre),
      referenceGenre.arrangement
    );
    const reference: Reference = {
      artist: referenceArtist,
      track: referenceTrack
    }
    const scale = new Scale();
    const mood = Random.fromArray(Moods);

    return {
      genre, reference, scale, mood,
      title: await IdeaGeneratorService.generateIdeaTitle({ genre, mood, scale, reference }),
      effects: generateEffects(),
      arrangement: IdeaGeneratorService.generateArrangement(referenceGenre.arrangement),
      ...idea
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

  private static isOpenAIAvailable = true;
  public static async generateIdeaTitle(idea: Pick<Idea, 'genre' | 'mood' | 'scale' | 'reference'>): Promise<string> {
    try {
      return IdeaGeneratorService.isOpenAIAvailable 
        ? IdeaGeneratorService.generateIdeaTitleUsingGBT(idea)
        : IdeaGeneratorService.generateIdeaTitleUsingTrackData(idea);
    } catch (err) {
      return IdeaGeneratorService.generateIdeaTitleUsingTrackData(idea);
    }
  }
  private static async generateIdeaTitleUsingGBT(idea: Pick<Idea, 'genre' | 'mood' | 'scale' | 'reference'>): Promise<string> {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{
        role: "user",
        content: `I need a name for a ${idea.mood} ${idea.genre.name} song in ${idea.scale.toString()}.`
        // inspired by ${idea.reference.track.name} by ${idea.reference.artist.name}.
      }]
    }).catch((err) => {
      if (err.type === 'insufficient_quota') { // No more credits on OpenAI
        IdeaGeneratorService.isOpenAIAvailable = false;
      } else console.error(err);
      return { choices: [{ message: { content: IdeaGeneratorService.generateIdeaTitleUsingTrackData(idea) } }] };
    });

    return response.choices[0].message.content;
  }
  private static async generateIdeaTitleUsingTrackData(idea: Pick<Idea, 'genre' | 'mood' | 'scale' | 'reference'>): Promise<string> {
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