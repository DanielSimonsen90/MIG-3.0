import { useState, PropsWithChildren, createContext, useEffect, useContext } from 'react';
import { Idea } from '../common';
import { IdeaGeneratorService } from '../services';
import { Nullable } from '../types';

const IdeaContext = createContext<Nullable<[
  idea: Idea | null,
  generate: () => void,
  setCustomized: (idea: Idea) => void
]>>(null);

export default function IdeaProvider({ children }: PropsWithChildren) {
  const [idea, setIdea] = useState<Idea | null>(null);
  const [customized, setCustomized] = useState<Idea | null>(null);
  const generate = async () => {
    const idea = await IdeaGeneratorService.generateIdea(customized);
    setIdea(idea);
  };

  useEffect(() => {
    generate(); // TODO: Remove for release
  }, []);

  return (
    <IdeaContext.Provider value={[idea, generate, setCustomized]}>
      {children}
    </IdeaContext.Provider>
  );
}

export function useIdea() {
  const context = useContext(IdeaContext);
  if (!context) throw new Error('useIdea must be used within an IdeaProvider');
  return context;
}