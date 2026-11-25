
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-heading">
          <span className="section-label">05 / THE CONNECTION</span>

          <h2>
            Let's make <em>something meaningful</em> happen.
          </h2>

          <p>
            I believe the right conversations can lead to meaningful ideas,
            stronger connections and new possibilities. If something here
            resonates with you, I'd love to connect.
          </p>
        </div>

        <div className="contact-links">
          <a
            href="https://www.linkedin.com/in/soniaspecialist/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <span>↗</span>
          </a>

          <a
            href="https://soniaaspecialist.com/"
            target="_blank"
            rel="noreferrer"
          >
            Personal Website <span>↗</span>
          </a>

          <a
            href="https://i-smokestack.com/"
            target="_blank"
            rel="noreferrer"
          >
            i-SmokeStack <span>↗</span>
          </a>
        </div>

        <footer className="contact-footer">
          <span>SONIA S.</span>
          <span>FOUNDER & CEO · i-SMOKESTACK</span>
        </footer>
      </div>
    </section>
  );
}

export default Contact;
