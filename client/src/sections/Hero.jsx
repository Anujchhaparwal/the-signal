import { useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown, ArrowUpRight, X } from "lucide-react";


const nodes = [
  {
    id: "brand",
    label: "BRAND",
    number: "01",
    position: "node-one",
    eyebrow: "THE POWER OF PERCEPTION",
    title: "A brand is more than what people see.",
    description:
      "Sonia connects brand identity with business outcomes, understanding how positioning and messaging influence perception, revenue and conversion.",
    keywords: ["Brand strategy", "Messaging", "Positioning"],
    visual: "brand-visual",
    connections: ["people", "ideas"],
  },
  {
    id: "people",
    label: "PEOPLE",
    number: "02",
    position: "node-two",
    eyebrow: "THE HUMAN CONNECTION",
    title: "Understand people. Align everything.",
    description:
      "Her approach starts with understanding how people think, communicate and work together, helping teams move forward with clarity and confidence.",
    keywords: ["Leadership", "Communication", "Team alignment"],
    visual: "people-visual",
    connections: ["brand", "growth"],
  },
  {
    id: "ideas",
    label: "IDEAS",
    number: "03",
    position: "node-three",
    eyebrow: "SEEING WHAT IS OVERLOOKED",
    title: "The answer often lives in the gaps.",
    description:
      "She looks beyond the obvious to identify confusion, missing connections and the unspoken story behind a business problem.",
    keywords: ["Problem solving", "Clarity", "Perspective"],
    visual: "ideas-visual",
    connections: ["brand", "growth"],
  },
  {
    id: "growth",
    label: "GROWTH",
    number: "04",
    position: "node-four",
    eyebrow: "FROM INSIGHT TO ACTION",
    title: "Make the bigger picture actionable.",
    description:
      "Sonia brings market and product insights together with practical strategies that support engagement, visibility and customer acquisition.",
    keywords: ["Strategy", "Execution", "Business growth"],
    visual: "growth-visual",
    connections: ["people", "ideas"],
  },
];



function Hero() {
  const [selectedNode, setSelectedNode] = useState(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 60,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 60,
    damping: 20,
  });

  const activeNode = nodes.find(
    (node) => node.id === selectedNode
  );

  const handlePointerMove = (event) => {
    if (window.innerWidth < 768) return;

    const bounds = event.currentTarget.getBoundingClientRect();

    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    mouseX.set(x * 14);
    mouseY.set(y * 14);
  };

  const handlePointerLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      className="signal-hero"
      id="home"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className="hero-grid" />

      <div className="hero-content">
        <motion.div
          className="hero-eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow-line" />
          A DIFFERENT WAY OF SEEING
          <span className="eyebrow-number">/ 001</span>
        </motion.div>

        <motion.h1
          className="editorial-title"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          I notice what
          <br />
          others <em>don't.</em>
        </motion.h1>

        <motion.div
          className="hero-bottom-copy"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p>
            The gaps. The confusion.
            <br />
            The connections waiting to be made.
          </p>

          <button
            className="explore-button"
            onClick={scrollToAbout}
          >
            <span>ENTER THE PERSPECTIVE</span>
            <ArrowUpRight size={17} />
          </button>
        </motion.div>
      </div>

      {/* INTERACTIVE SIGNAL NETWORK */}

      <motion.div
        className="signal-art"
        style={{ x: smoothX, y: smoothY }}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.3 }}
      >
        <div className="orbit orbit-outer" />
        <div className="orbit orbit-middle" />
        <div className="orbit orbit-inner" />

        <svg
          className="network-lines"
          viewBox="0 0 480 480"
          aria-hidden="true"
        >
          <line x1="240" y1="55" x2="240" y2="240" />
          <line x1="425" y1="235" x2="240" y2="240" />
          <line x1="90" y1="390" x2="240" y2="240" />
          <line x1="55" y1="235" x2="240" y2="240" />

          {activeNode && (
            <>
              {activeNode.connections.map((connection) => {
                const target = nodes.find(
                  (node) => node.id === connection
                );

                const positions = {
                  brand: [240, 55],
                  people: [425, 235],
                  ideas: [90, 390],
                  growth: [55, 235],
                };

                const [x1, y1] = positions[activeNode.id];
                const [x2, y2] = positions[target.id];

                return (
                  <line
                    key={connection}
                    className="active-connection"
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                  />
                );
              })}
            </>
          )}
        </svg>

        <motion.div
          className="orbit-core"
          animate={{
            boxShadow: selectedNode
              ? "0 0 65px rgba(85,230,176,0.3)"
              : "0 0 40px rgba(85,230,176,0.12)",
          }}
        >
          <span className="core-cross">+</span>
          <span className="core-text">
            THE
            <br />
            CONNECTOR
          </span>
        </motion.div>

        {nodes.map((node, index) => {
          const isActive = selectedNode === node.id;

          return (
            <motion.button
              key={node.id}
              className={`orbit-node ${node.position} ${isActive ? "selected" : ""
                }`}
              onClick={() =>
                setSelectedNode(isActive ? null : node.id)
              }
              aria-pressed={isActive}
              aria-label={`Explore ${node.label}`}
              animate={{
                scale: isActive ? 1.18 : [1, 1.08, 1],
                opacity: isActive ? 1 : [0.72, 1, 0.72],
              }}
              transition={{
                duration: 2.5 + index * 0.5,
                repeat: isActive ? 0 : Infinity,
                ease: "easeInOut",
                delay: index * 0.3,
              }}
              whileHover={{
                scale: 1.5,
                filter: "brightness(1.6)",
                transition: { duration: 0.2 },
              }}

              whileTap={{
                scale: 1.7,
              }}
            >
              <span />
              <small>{node.label}</small>
            </motion.button>
          );
        })}

        {/* NODE INFORMATION PANEL */}


        {/* EDITORIAL STORY PANEL */}

        <div className="node-info-slot" aria-live="polite">
          {activeNode && (
            <motion.div
              className={`node-info ${activeNode.visual}`}
              key={activeNode.id}
              initial={{ opacity: 0, y: 18, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="story-topline">
                <span>
                  {activeNode.number} / 04
                </span>

                <span className="story-eyebrow">
                  {activeNode.eyebrow}
                </span>

                <button
                  className="node-close"
                  onClick={() => setSelectedNode(null)}
                  aria-label="Close story"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="story-visual">
                <div className="story-visual-ring ring-one" />
                <div className="story-visual-ring ring-two" />
                <div className="story-visual-core">
                  <span>THE SIGNAL</span>
                  <strong>{activeNode.label}</strong>
                </div>
                <div className="story-visual-marker marker-one" />
                <div className="story-visual-marker marker-two" />
                <div className="story-visual-marker marker-three" />
              </div>

              <div className="story-copy">
                <span className="story-kicker">
                  A PERSPECTIVE ON {activeNode.label}
                </span>

                <h3>{activeNode.title}</h3>

                <p>{activeNode.description}</p>

                <div className="story-keywords">
                  {activeNode.keywords.map((keyword) => (
                    <span key={keyword}>{keyword}</span>
                  ))}
                </div>
              </div>

              <div className="story-footer">
                <span>ANATOMY OF A PERSPECTIVE</span>
                <span>{activeNode.number} — 04</span>
              </div>
            </motion.div>
          )}
        </div>


        <div className="art-caption">
          <span>EVERYTHING IS CONNECTED</span>
        </div>
      </motion.div>

      <div className="hero-footer">
        <button onClick={scrollToAbout}>
          <ArrowDown size={15} />
          SCROLL TO DISCOVER
        </button>

        <span>01 — 05</span>
      </div>
    </section>
  );
}

export default Hero;
