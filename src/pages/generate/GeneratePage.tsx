import Idea from "../../components/Idea";
import { useIdea } from "../../providers";

export function GeneratePage() {
  const [idea] = useIdea();
  return (
    <main id="main">
      {idea ? <Idea idea={idea} /> : <p>Click the button to generate an idea...</p>}
    </main> 
  )
}