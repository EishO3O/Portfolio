import "../styles/Involvement.css";

export default function Involvement() {
  const text = "Involvement.";

  const involvementData = [
    {
      number: "1",
      title: "Cloud Developer Lead",
      subtitle: "Google Developer Groups - Holy Angel University",
      description:
        'Awarded by Google for developing “Trashtrackr,” an AI-powered mobile app that provides smart waste disposal guidance.',
    },
    {
      number: "2",
      title: "Notion Volunteer",
      subtitle: "Holy Angel University",
      description:
        "Assisted Notion workshops for 50+ students, created 5+ custom templates, and maintained the organization’s workspace to improve productivity, accessibility, and collaboration for 20+ members.",
    },
    {
      number: "3",
      title: "UI/UX Developer Lead",
      subtitle: "Google Developer Groups - Holy Angel University",
      description:
        "Led a hands-on UI/UX workshop for students, guiding 10+ teams through iterative prototyping and interface enhancements, helping them apply design principles to PHCI and other professional subjects. Designed and launched the GDG HAU website, showcasing the organization’s projects and events; presented to 150+ attendees across General Assembly, Org Fest, and other campus activities.",
    },
  ];

  return (
    <section id="involvement" className="involvement-section">
      <div className="involvement-left">
        <div className="vertical-text-container shiny-text">
          {text.split("").map((char, index, arr) => {
            if (index === arr.length - 2) {
              return (
                <span key={index} className="vertical-char last-line">
                  {arr[index]}
                  {arr[index + 1]}
                  <div className="inner-vertical-line"></div>
                </span>
              );
            }
            if (index === arr.length - 1) return null;
            return (
              <span key={index} className="vertical-char">
                {char}
              </span>
            );
          })}
        </div>
      </div>
      <div className="involvement-content">
        <div className="involvement-columns">
          {involvementData.map((item, idx) => (
            <div key={idx} className="involvement-column">
              <h1 className="column-number">{item.number}</h1>
              <h2 className="column-title">{item.title}</h2>
              <h3 className="column-subtitle">{item.subtitle}</h3>
              <p className="column-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
