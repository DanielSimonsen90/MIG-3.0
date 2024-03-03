import Effects from "./Effects";
import { Genre } from "./Genre";
import Mood from "./Mood";
import { Reference } from "./Reference";
import Scale from "./Scale";

export type Idea = {
  genre: Genre;
  reference: Reference;
  title: string;
  scale: Scale;
  mood: Mood;
  effects: Effects;
  arrangement: string;
}