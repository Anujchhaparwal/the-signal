import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Perspective from "./sections/Perspective";
import Journey from "./sections/Journey";


function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Perspective />

        <Journey />

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
