import { useEffect, useRef } from "react";
import "../styles/WorkExp.css";

export default function WorkExp() {
  const experiences = [
    {
      title: "Wizher – Frontend Developer",
      date: "January 2022 - January 2025",
      desc: "Designed and optimized user flows and interfaces by translating research into intuitive UI, leading end-to-end workflows from wireframes to prototypes that improved usability, engagement, and product adoption.",
    },
    {
      title: "Freelancing – Graphic Designer",
      date: "January 2022 - January 2025",
      desc: "Created visual designs and optimized UI elements, translating concepts into intuitive user experiences for various clients.",
    },
  ];

  const itemsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      itemsRef.current.forEach((item) => {
        if (!item) return;
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          item.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="work" className="work-exp">
      <div className="liquid-bg"></div>
      <div className="content">
        <h2>Work Experience</h2>
        <div className="timeline">
      {experiences.map((exp, index) => (
        <div
          key={index}
          ref={(el) => (itemsRef.current[index] = el)}
          className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
        >
          <div className="timeline-content">
            <h3>{exp.title}</h3>
            <span>{exp.date}</span>
            <p>{exp.desc}</p>
          </div>
        </div>
      ))}
      <div className="line-bottom"></div>
    </div>

      </div>
    </section>
  );
}
