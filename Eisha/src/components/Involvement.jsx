import "../styles/Involvement.css";

export default function Involvement() {
  const text = "Involvement."; // full word

  return (
    <section id="involvement" className="involvement-section">
      <div className="involvement-left">
        <div className="vertical-text-container shiny-text">
          {text.split("").map((char, index, arr) => {
            if (index === arr.length - 2) {
              // combine last two chars (t + .)
              return (
                <span key={index} className="vertical-char last-line">
                  {arr[index]}{arr[index + 1]}
                  <div className="inner-vertical-line"></div>
                </span>
              );
            }
            if (index === arr.length - 1) return null; // skip dot since combined

            return (
              <span key={index} className="vertical-char">
                {char}
              </span>
            );
          })}
        </div>
      </div>
      <div className="involvement-content">
        <p>Clubs, organizations, open-source, or community contributions.</p>
      </div>
    </section>
  );
}
