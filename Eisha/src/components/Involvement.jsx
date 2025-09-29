import "../styles/Involvement.css";
import CloudImg from "../assets/Cloud.jpg";
import NotionImg from "../assets/Notion.jpg";
import UiUxImg from "../assets/Ui-Ux.jpg";
export default function Involvement() {
  const text = "Involvement.";



const involvementData = [
  {
    number: "1",
    title: "Cloud Developer Lead",
    subtitle: "Google Developer Groups - Holy Angel University",
    description:
      'Awarded by Google for developing “Trashtrackr,” an AI-powered mobile app that provides smart waste disposal guidance.',
    img: CloudImg,
  },
  {
    number: "2",
    title: "Notion Volunteer",
    subtitle: "Holy Angel University",
    description:
      "Assisted Notion workshops for 50+ students, created 5+ custom templates, and maintained the organization’s workspace to improve productivity, accessibility, and collaboration for 20+ members.",
    img: NotionImg,
  },
  {
    number: "3",
    title: "UI/UX Developer Lead",
    subtitle: "Google Developer Groups - Holy Angel University",
    description:
      "Led a UI/UX workshop for 10+ student teams, guiding prototyping and design application, and designed the GDG HAU website showcased to 150+ attendees at campus events.",
    img: UiUxImg,
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
            <div
              key={idx}
              className="involvement-column"
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <div className="column-overlay">
                <h1 className="column-number">{item.number}</h1>
                <h2 className="column-title">{item.title}</h2>
                <h3 className="column-subtitle">{item.subtitle}</h3>
                <p className="column-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
