
import "./Perspective.css";
import BrainVisual from "./BrainVisual";

function Perspective() {
  return (
    <section id="about" className="perspective-section">
      <div className="perspective-container">
        <div className="perspective-heading">
          <span className="section-label">02 / MY EXPERTISE</span>

          <h2>
            What I <em>bring to the table.</em>
          </h2>

          <p>
            I bring together brand, marketing, people and business
            thinking to understand what a business truly needs
            and what will move it forward.
          </p>
        </div>

        <div className="brain-experience">
          <BrainVisual />
        </div>

        <p className="perspective-closing">
          Bringing clarity to complexity. Creating direction from connection.
        </p>
      </div>
    </section>
  );
}

export default Perspective;
