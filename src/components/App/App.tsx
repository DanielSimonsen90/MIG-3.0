import { useEffect } from "react";
import { useGenerateIdea } from "../../hooks/useGenerateIdea";
import Idea from "../Idea";

export default function App() {
  const [idea, generateIdea] = useGenerateIdea();

  useEffect(() => {
    generateIdea(); // TODO: Remove for release
  }, []);

  return (
    <main id="main">
      <h1>Music Idea Generator 3.0</h1>
      <p className="muted">Created by Daniel Simonsen</p>
      {idea ? <Idea idea={idea} /> : <p>Click the button to generate an idea...</p>}
      <button onClick={generateIdea}>Generate!</button>
    </main>
  );
}