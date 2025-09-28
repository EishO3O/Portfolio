import React from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import WorkExp from "./components/WorkExp";
import Involvement from "./components/Involvement";
import FeaturedProject from "./components/FeaturedProject";
import TechStack from "./components/TechStack";


function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="mt-16"> {/* offset for fixed navbar */}
        <Intro />


        <WorkExp />

        <Involvement />

        <FeaturedProject />

        <TechStack />
      </main>
    </div>
  );
}

export default App;
