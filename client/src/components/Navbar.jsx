import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Navbar.css";

const chapters = [
  { number: "01", label: "Signal", id: "home" },
  { number: "02", label: "Perspective", id: "about" },
  { number: "03", label: "Journey", id: "journey" },
  { number: "04", label: "Philosophy", id: "impact" },
  { number: "05", label: "Connect", id: "contact" },
];

function Navbar() {
  const [activeChapter, setActiveChapter] = useState("home");

  useEffect(() => {
    const sections = chapters
      .map((chapter) => document.getElementById(chapter.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveChapter(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-35% 0px -35% 0px",
        threshold: [0, 0.2, 0.5, 0.8],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <motion.header
        className="signal-header"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <button
          className="signal-wordmark"
          onClick={() => scrollTo("home")}
          aria-label="Back to beginning"
        >
          THE SIGNAL<span>®</span>
        </button>

        <div className="header-status">
          <span className="status-dot" />
          AN EXPLORATION OF PERSPECTIVE
        </div>
      </motion.header>

      <motion.nav
        className="chapter-rail"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        aria-label="Page chapters"
      >
        <span className="rail-label">EXPLORE</span>

        {chapters.map((chapter) => {
          const isActive = activeChapter === chapter.id;

          return (
            <button
              key={chapter.id}
              className={`chapter-link ${
                isActive ? "active" : ""
              }`}
              onClick={() => scrollTo(chapter.id)}
              aria-label={`Go to ${chapter.label}`}
              aria-current={isActive ? "location" : undefined}
              title={chapter.label}
            >
              <span>{chapter.number}</span>
              <i />
            </button>
          );
        })}
      </motion.nav>
    </>
  );
}

export default Navbar;
