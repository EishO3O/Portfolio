import React from "react";
import LiquidEther from "../effects/LiquidEther";
import "../styles/Intro.css";

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
        <div className="greeting">Hi, I'm</div>
        <div className="name">Richard Ryan</div>
        <p>
          A passionate developer crafting modern web experiences with React and
          creative coding.
        </p>
        <a href="#work">View My Work</a>
      </div>
    </section>
  );
}
