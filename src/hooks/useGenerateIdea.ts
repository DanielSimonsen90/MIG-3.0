import { useState } from "react";
import { Idea } from "../common";
import { IdeaGeneratorService } from "../services";

export function useGenerateIdea() {
  const [idea, setIdea] = useState<Idea | null>(null);
  const generate = async () => {
    const idea = await IdeaGeneratorService.generateIdea()
    setIdea(idea);
  }

  return [idea, generate] as const;
}