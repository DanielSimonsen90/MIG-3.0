import { useIdea, useRouter } from "../../providers";

export default function Footer() {
  const [_, generateIdea] = useIdea();
  const [route, navigate] = useRouter();

  function onGenerateClick() {
    if (route === 'customize') navigate('generate');
    generateIdea();
  }

  return (
    <footer className="button-panel">
      <button onClick={onGenerateClick}>Generate!</button>
      {route !== 'customize' && (<>
        <span className="or muted">or do you have something in mind?</span>
        <button className="link" onClick={() => navigate('customize')}>Customize</button>
      </>)}
    </footer>
  );
}