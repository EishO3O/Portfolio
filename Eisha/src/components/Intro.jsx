import React from "react";
import LiquidEther from "../effects/LiquidEther";
import "../styles/Intro.css";
import myImage from "../assets/image.png";

export default function Intro() {
  return (
    <section id="intro">
      {/* LiquidEther background */}
      <LiquidEther
        colors={["#1E3A8A", "#3B82F6", "#F97316"]}
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
      />

      {/* Foreground text */}
      <div className="intro-text">
        <div className="greeting">Hi! I'm</div>
        <div className="name-gradient">Richard Ryan</div>

        <p>
          I am a BS Computer Science senior specializing in frontend development and UI/UX design,<br />
          with proficiency in Figma, React.js, HTML, CSS, and JavaScript!<br />
          Currently advancing backend and cloud skills to become a full-stack developer,<br />
          with a strong focus on delivering scalable and user-centric digital solutions.
        </p>

        {/* Buttons container */}
        <div className="intro-buttons">
          <a href="/resume.pdf" download className="shiny-btn">
            <span className="shiny-text">Download Resume</span>
          </a>

          {/* Image between buttons */}
          <img
            src={myImage}
            alt="Decorative"
            className="intro-btn-image"
          />

          <a href="#contact" className="shiny-btn">
            <span className="shiny-text">Reach Out To Me</span>
          </a>
        </div>
      </div>
    </section>
  );
}
