import "./App.css";
import { CardHoverEffectDemo } from "./components/hover";
import { CanvasRevealEffectDemo } from "./components/cre";
import { BackgroundBeamsDemo } from "./components/backbeams";
function App() {
  return (
    <section>
      <CardHoverEffectDemo />
      <CanvasRevealEffectDemo />
      <BackgroundBeamsDemo />
    </section>
  );
}

export default App;
