import React from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import WorkExp from "./components/WorkExp";
import Involvement from "./components/Involvement";
import FeaturedProject from "./components/FeaturedProject";
import TechStack from "./components/TechStack";
import LogoLoop from "./effects/LogoLoop/LogoLoop";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="mt-16"> {/* offset for fixed navbar */}
        <Intro />

        {/* Logo loop between Intro and WorkExp */}
        <section className="logo-loop-section">
          <LogoLoop
            logos={techLogos}
            speed={120}
            direction="left"
            logoHeight={48}
            gap={40}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#ffffff"
            ariaLabel="Technology partners"
          />
        </section>

        <WorkExp />

        <Involvement />

        <FeaturedProject />

        <TechStack />
      </main>
    </div>
  );
}

export default App;
