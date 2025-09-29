import React from "react";
import "../styles/AboutMe.css"; // make sure to create this CSS file for styling
import profileImg from "../assets/profile.jpg"; // replace with your image path

const AboutMe = () => {
  return (
    <section className="aboutme-section">
      <div className="aboutme-container">
        <div className="aboutme-image">
          <img src={profileImg} alt="Me" />
        </div>
        <div className="aboutme-content">
          <p className="aboutme-bio">
           I’m a BSCS student who loves exploring creativity through design, writing, and gaming. When I’m not coding, you can find me jogging, listening to hype music, or brainstorming my next big idea.
          </p>
          <div className="aboutme-hobbies">
            <span>🎮 Gaming</span>
            <span>🎨 Designing</span>
            <span>✍️ Writing</span>
            <span>🏃‍♂️ Jogging</span>
            <span>🎧 Listening to hype music</span>
          </div>
          <p className="aboutme-funfact">
            I enjoy making playlists for coding marathons—it keeps my bugs dancing 🐞💃 and my brain caffeinated~ 🧠 ☕️
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
