import { Header } from "../Header";
import { Footer } from "../Footer";
import Routes from "../Routes";
import Providers from "../../providers";

export default function App() {
  return (
    <div id="app">
      <Providers>
        <Header />
        <Routes />
        <Footer />
      </Providers>
    </div>
  );
}