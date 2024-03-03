import { useState } from "react";
import { Idea } from "../common";
import { IdeaGeneratorService } from "../services";

export function useGenerateIdea() {
  const [idea, setIdea] = useState<Idea | null>(null);
  const generate = () => {
    setIdea(IdeaGeneratorService.generateIdea());
  }

  return [idea, generate] as const;
}