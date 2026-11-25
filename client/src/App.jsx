import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Perspective from "./sections/Perspective";
import Journey from "./sections/Journey";
import Impact from "./sections/Impact";


function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Perspective />

        <Journey />

        <Impact />

        <section id="contact" className="placeholder-section">
          <h2>05 — The Connection</h2>
        </section>
      </main>
    </>
  );
}

export default App;
