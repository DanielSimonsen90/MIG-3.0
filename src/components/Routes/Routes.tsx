import { useRouter } from "../../providers";
import { GeneratePage, CustomizePage } from '../../pages';

export default function Routes() {
  const [route] = useRouter();
  
  switch (route) {
    case 'generate': return <GeneratePage />;
    case 'customize': return <CustomizePage />;
    default: return <p>404 Not Found. How did you even get here?</p>;
  }
}