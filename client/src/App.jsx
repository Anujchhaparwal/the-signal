import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <section id="about" className="placeholder-section">
          <h2>02 — The Perspective</h2>
        </section>

        <section id="journey" className="placeholder-section">
          <h2>03 — The Journey</h2>
        </section>

        <section id="impact" className="placeholder-section">
          <h2>04 — The Philosophy</h2>
        </section>

        <section id="contact" className="placeholder-section">
          <h2>05 — The Connection</h2>
        </section>
      </main>
    </>
  );
}

export default App;
