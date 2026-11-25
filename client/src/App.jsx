import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Perspective from "./sections/Perspective";
import Journey from "./sections/Journey";
import Impact from "./sections/Impact";
import Contact from "./sections/Contact";


function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Perspective />

        <Journey />

        <Impact />

        <Contact />
      </main>
    </>
  );
}

export default App;
