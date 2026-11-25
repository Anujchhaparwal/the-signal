import { useState } from "react";
import brainImage from "../assets/brain-network.png";
import "./BrainVisual.css";


const regions = [
  {
    id: "clarity",
    number: "01",
    title: "Brand Strategy",
    preview: "A brand is more than what people see.",
    description:
      "I look at how a brand is positioned, how its story is communicated, and how people perceive it. Brand is not just about visibility; it also influences how a business connects with its audience and creates value.",
    position: "region-clarity",
  },
  {
    id: "connection",
    number: "02",
    title: "Marketing & Growth",
    preview: "Marketing should move business forward.",
    description:
      "I focus on what a business needs from its marketing, how its messaging connects with people, and what steps can create meaningful progress. I look at the relationship between brand, demand, communication and growth.",
    position: "region-connection",
  },
  {
    id: "perspective",
    number: "03",
    title: "Leadership & Operations",
    preview: "Bring structure without chaos.",
    description:
      "I believe people affect everything. I focus on understanding how teams work, how communication flows and how operations influence execution, helping bring greater clarity, alignment and purpose to the way people work together.",
    position: "region-perspective",
  },
  {
    id: "simplicity",
    number: "04",
    title: "Business Strategy",
    preview: "Understand the whole picture.",
    description:
      "I look beyond individual problems to understand what a business truly needs, how its different parts connect and which steps will move things forward. My focus is on making complex situations clearer and decisions more purposeful.",
    position: "region-simplicity",
  },
];


function BrainVisual() {
  const [activeRegion, setActiveRegion] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(null);

  const displayedRegion = selectedRegion || activeRegion;

  const handleRegionClick = (id) => {
    setSelectedRegion((current) => (current === id ? null : id));
  };

  const region = regions.find(
    (item) => item.id === displayedRegion
  );

  return (
    <div className="brain-visual">
      <div className="brain-stage">
        <div
          className={`brain-information ${region ? `info-${region.id}` : "info-default"
            }`}
          aria-live="polite"
        >
          <div
            key={region?.id || "instruction"}
            className="brain-info-content"
          >
            {region ? (
              <>
                <span className="brain-info-number">
                  {region.number} / {region.title.toUpperCase()}
                </span>

                <h3>{region.preview}</h3>

                {selectedRegion && (
                  <p>{region.description}</p>
                )}
              </>
            ) : (
              <span className="brain-instruction">
                EXPLORE MY AREAS OF EXPERTISE
              </span>
            )}
          </div>
        </div>
        <div className="brain-graphic">
          <img
            src={brainImage}
            alt="Luminous neural network forming a human brain"
            className="brain-image"
          />


          <svg
            className={`neural-overlay ${displayedRegion ? "is-active" : ""}`}
            viewBox="0 0 620 413"
            aria-hidden="true"
          >
            <defs>
              <filter id="signal-glow">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <mask id="brain-alpha-mask">
                <image
                  href={brainImage}
                  x="0"
                  y="0"
                  width="620"
                  height="413"
                  preserveAspectRatio="none"
                />
              </mask>

              {/* Invisible motion guides */}
              <path id="signal-one" d="M65 185 C150 95 220 255 310 185 S470 90 555 170" />
              <path id="signal-two" d="M85 285 C175 210 245 320 330 250 S470 200 550 275" />
              <path id="signal-three" d="M130 110 C220 160 250 80 340 145 S455 300 525 310" />
              <path id="signal-four" d="M180 340 C250 265 330 350 410 285 S490 255 545 220" />
            </defs>

            <g mask="url(#brain-alpha-mask)">

              {/* Visible neural pathways */}
              <g className="signal-pathways">
                <path d="M65 185 C150 95 220 255 310 185 S470 90 555 170" />
                <path d="M85 285 C175 210 245 320 330 250 S470 200 550 275" />
                <path d="M130 110 C220 160 250 80 340 145 S455 300 525 310" />
                <path d="M180 340 C250 265 330 350 410 285 S490 255 545 220" />
              </g>

              {/* Travelling signals */}
              <g className="travelling-signals" filter="url(#signal-glow)">
                <circle r="3.5">
                  <animateMotion dur="5s" repeatCount="indefinite">
                    <mpath href="#signal-one" />
                  </animateMotion>
                </circle>

                <circle r="3">
                  <animateMotion dur="7s" repeatCount="indefinite">
                    <mpath href="#signal-two" />
                  </animateMotion>
                </circle>

                <circle r="3.5">
                  <animateMotion dur="6s" repeatCount="indefinite">
                    <mpath href="#signal-three" />
                  </animateMotion>
                </circle>

                <circle r="3">
                  <animateMotion dur="8s" repeatCount="indefinite">
                    <mpath href="#signal-four" />
                  </animateMotion>
                </circle>
              </g>

              {/* Pulsating connection points */}
              <g className="signal-pulses">
                <circle cx="310" cy="185" r="5" />
                <circle cx="330" cy="250" r="4" />
                <circle cx="410" cy="285" r="4" />
              </g>

            </g>
          </svg>




          {regions.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`brain-region ${item.position} ${displayedRegion === item.id ? "is-active" : ""
                }`}
              aria-label={`Explore ${item.title}`}
              aria-pressed={selectedRegion === item.id}
              onMouseEnter={() => setActiveRegion(item.id)}
              onMouseLeave={() => setActiveRegion(null)}
              onFocus={() => setActiveRegion(item.id)}
              onBlur={() => setActiveRegion(null)}
              onClick={() => handleRegionClick(item.id)}
            >
              <span>{item.number}</span>
            </button>

          ))}
        </div>
      </div>
    </div>
  );
}

export default BrainVisual;
