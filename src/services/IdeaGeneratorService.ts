import { Random } from "../common/utils";
import { Effects, Idea, Scale, assignArrayWithCallback, Mood, Moods } from "../common";
import { DataService } from "./DataService";

export class IdeaGeneratorService {
  public static generateIdea(): Idea {
    const genre = DataService.getRandomGenre();
    const referenceTrack = DataService.getRandomTrackFromGenre(genre);
    const referenceArtist = DataService.getArtistFromTrack(referenceTrack);
    
    return {
      genre,
      reference: {
        artist: referenceArtist,
        track: referenceTrack
      },
      title: DataService.generateIdeaTitle(),
      scale: new Scale(),
      mood: Random.fromArray(Moods),
      effects: generateEffects()
    }
  }
}

function generateEffects() {
  const maxEffects = Object.keys(Effects.All).length;
  const [bigTom, tonals, whiteNoise, subDrop, impacts] = assignArrayWithCallback(maxEffects, () => Random.between(0, 1) === 1);
  return new Effects(bigTom, tonals, whiteNoise, subDrop, impacts);
}