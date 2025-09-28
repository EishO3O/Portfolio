import React from "react";
import LiquidEther from "../effects/LiquidEther/LiquidEther";
import LogoLoop from "../styles/LogoLoop"; // correct file path
import "../styles/Intro.css";

export default function Intro() {
  return (
    <section id="intro" className="intro-section">
      {/* LiquidEther background */}
      <LiquidEther
        colors={["#1E3A8A", "#3B82F6", "#F97316"]}
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}
      />

      <div className="intro-text">
        <div className="greeting">Hi! I'm</div>
        <div className="name-gradient">Eisha Janel Alva</div>
        <p>
          I am a BS Computer Science senior specializing in frontend development and UI/UX design, 
          with proficiency in Figma, React.js, HTML, CSS, and JavaScript! <br />
          Currently advancing backend and cloud skills to become a full-stack developer, 
          with a strong focus on delivering scalable and user-centric digital solutions.
        </p>
        {/* Buttons */}
        <div className="intro-buttons">
          <a href="/resume.pdf" download className="shiny-btn">
            <span className="shiny-text">Download Resume</span>
          </a>
          <a href="#contact" className="shiny-btn">
            <span className="shiny-text">Reach Out To Me</span>
          </a>
        </div>
      </div>
      {/* Move logo-loop-header here, just above logo loop */}
      <div className="logo-loop-header">
        <span className="shiny-text">My Tech Stack</span>
      </div>
      <div className="intro-logo-loop">
        <LogoLoop />
      </div>
    </section>
  );
}
