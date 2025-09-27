import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import WorkExp from "./components/WorkExp";
import Involvement from "./components/Involvement";
import FeaturedProject from "./components/FeaturedProject";
import TechStack from "./components/TechStack";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Intro />
        <WorkExp />
        <Involvement />
        <FeaturedProject />
        <TechStack />
      </main>
    </>
  );
}

export default App;
