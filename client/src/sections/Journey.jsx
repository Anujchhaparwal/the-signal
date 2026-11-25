import { useEffect, useRef, useState } from "react";
import "./Journey.css";

const careerMilestones = [
  {
    id: 1,
    period: "2006–2010",
    title: "Early Foundations",
    roles: [
      {
        company: "Bosch",
        position: "Marketing Specialist",
        dates: "Nov 2006 – May 2008",
      },
      {
        company: "Bosch",
        position: "Marketing Trainee",
        dates: "May 2006 – Oct 2006",
      },
      {
        company: "FARO Technologies",
        position: "Marketing & Communication Manager, Asia",
        dates: "Apr 2009 – Aug 2010",
      },
    ],
  },
  {
    id: 2,
    period: "2010–2015",
    title: "Marketing Leadership",
    roles: [
      {
        company: "Creaform",
        position: "Head of Marketing and Sales",
        dates: "Sep 2010 – Jun 2013",
      },
      {
        company: "ShowMeLeads Inc",
        position: "Senior Manager, Demand Generation & Marketing Automation",
        dates: "Jan 2014 – Jul 2014",
      },
      {
        company: "Appirio",
        position: "Director, Demand Generation, Marketing & Sales Operations",
        dates: "Jan 2015 – Dec 2015",
      },
    ],
  },
  {
    id: 3,
    period: "2014–2020",
    title: "Strategy & Advisory",
    roles: [
      {
        company: "Brand Tadkaa",
        position: "Advisory Board Member",
        dates: "May 2014 – Dec 2019",
      },
      {
        company: "Sonia Specialist",
        position: "Consulting Specialist",
        dates: "Oct 2016 – Present",
      },
      {
        company: "LaserSec",
        position: "VP, Global Sales Marketing",
        dates: "Dec 2016 – Jul 2018",
      },
      {
        company: "RoundGlass",
        position: "Leader – Digital Marketing",
        dates: "May 2018 – Mar 2019",
      },
      {
        company: "RoundGlass",
        position: "Digital Marketing Director",
        dates: "Apr 2019 – Apr 2020",
      },
    ],
  },
  {
    id: 4,
    period: "2020–2023",
    title: "Executive Leadership",
    featured: true,
    roles: [
      {
        company: "i-SmokeStack",
        position: "Founder & CEO",
        linkedinPosition: "CMO",
        dates: "Mar 2020 – Present",
        featured: true,
      },
      {
        company: "Datt Mediproducts",
        position: "Fractional CMO",
        dates: "Apr 2020 – Present",
      },
      {
        company: "LaserSec Technologies",
        position: "VP, Product Marketing",
        dates: "Feb 2021 – Present",
      },
    ],
  },
  {
    id: 5,
    period: "2023–Present",
    title: "Expanding Leadership",
    roles: [
      {
        company: "AYU Inc USA",
        position: "Chief Marketing & Operations Advisor",
        dates: "Jan 2023 – Present",
      },
      {
        company: "AYU Lifescience",
        position: "Fractional Marketing Lead",
        dates: "Apr 2025 – Present",
      },
      {
        company: "Celestial AI",
        position: "Chief Marketing & Operations Advisor",
        dates: "May 2025 – Present",
      },
    ],
  },
];

function Journey() {
  const [selectedMilestone, setSelectedMilestone] = useState(null);
  const activeMilestone = careerMilestones.find(
    (milestone) => milestone.id === selectedMilestone
  );
  const detailsRef = useRef(null);

  useEffect(() => {
    if (activeMilestone && detailsRef.current) {
      detailsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [activeMilestone]);
  const handleMilestoneClick = (id) => {
    setSelectedMilestone((current) =>
      current === id ? null : id
    );
  };

  const journeyRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = journeyRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="journey"
      ref={journeyRef}
      className={`journey-section ${isVisible ? "is-visible" : ""}`}
    >
      <div className="journey-container">

        <div className="journey-heading">
          <span className="section-label">03 / THE JOURNEY</span>

          <h2>
            Every experience <em>shapes the next.</em>
          </h2>

          <p>
            A journey across marketing, leadership, strategy
            and the businesses I've helped move forward.
          </p>
        </div>

        <div className="journey-visual">
          <svg
            className="journey-network"
            viewBox="0 0 1200 500"
            preserveAspectRatio="none"
          >
            {/* Main flowing path */}
            <path
              className="journey-main-path"
              pathLength="1"
              d="
    M0 95
    C110 95 145 105 215 155
    C285 205 315 300 405 335
    C465 360 510 350 555 315
    C620 245 660 105 755 120
    C850 135 875 260 960 290
    C1030 315 1070 205 1125 165
    C1160 140 1180 175 1200 205
  "
            />


            {/* Upper branch */}
            <path
              className="journey-branch-path"
              pathLength="1"
              d="M195 140
     C190 80 245 20 320 55
     C390 85 410 165 475 145"
            />

            {/* Lower branch */}
            <path
              className="journey-branch-path"
              pathLength="1"
              d="M555 315
     C575 385 630 465 715 435
     C780 410 805 350 865 365"
            />

            {/* Far upper branch */}
            <path
              className="journey-branch-path"
              pathLength="1"
              d="M755 120
     C785 35 870 35 915 75
     C960 110 975 155 1035 125"
            />

            {/* CAREER MILESTONE NODES */}

            <g className="journey-milestones">

              <g
                className={`milestone-node milestone-1 ${selectedMilestone === 1 ? "is-selected" : ""}`}
                onClick={() => handleMilestoneClick(1)}
                role="button"
                tabIndex={0}
                aria-label="Explore Early Foundations"
                aria-pressed={selectedMilestone === 1}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    handleMilestoneClick(1);
                  }
                }}
              >
                <title>2006–2010</title>
                <circle className="milestone-halo" cx="155" cy="120" r="14" />
                <circle className="milestone-core" cx="155" cy="120" r="5" />
              </g>

              <g
                className={`milestone-node milestone-2 ${selectedMilestone === 2 ? "is-selected" : ""}`}
                onClick={() => handleMilestoneClick(2)}
                role="button"
                tabIndex={0}
                aria-label="Explore Marketing Leadership"
                aria-pressed={selectedMilestone === 2}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    handleMilestoneClick(2);
                  }
                }}
              >
                <title>2010–2015</title>
                <circle className="milestone-halo" cx="405" cy="335" r="14" />
                <circle className="milestone-core" cx="405" cy="335" r="5" />
              </g>

              <g
                className={`milestone-node milestone-3 ${selectedMilestone === 3 ? "is-selected" : ""}`}
                onClick={() => handleMilestoneClick(3)}
                role="button"
                tabIndex={0}
                aria-label="Explore Strategy and Advisory"
                aria-pressed={selectedMilestone === 3}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    handleMilestoneClick(3);
                  }
                }}
              >
                <title>2014–2020</title>
                <circle className="milestone-halo" cx="650" cy="174" r="14" />
                <circle className="milestone-core" cx="650" cy="174" r="5" />
              </g>

              <g
                className={`milestone-node milestone-4 ${selectedMilestone === 4 ? "is-selected" : ""}`}
                onClick={() => handleMilestoneClick(4)}
                role="button"
                tabIndex={0}
                aria-label="Explore Executive Leadership"
                aria-pressed={selectedMilestone === 4}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    handleMilestoneClick(4);
                  }
                }}
              >
                <title>2020–2023</title>
                <circle className="milestone-halo" cx="960" cy="290" r="17" />
                <circle className="milestone-core milestone-featured" cx="960" cy="290" r="7" />
              </g>

              <g
                className={`milestone-node milestone-5 ${selectedMilestone === 5 ? "is-selected" : ""}`}
                onClick={() => handleMilestoneClick(5)}
                role="button"
                tabIndex={0}
                aria-label="Explore Expanding Leadership"
                aria-pressed={selectedMilestone === 5}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    handleMilestoneClick(5);
                  }
                }}
              >
                <title>2023–present</title>
                <circle className="milestone-halo" cx="1140" cy="158" r="14" />
                <circle className="milestone-core" cx="1140" cy="158" r="5" />
              </g>

            </g>

          </svg>

          <div className="journey-instruction">
            SELECT A MILESTONE TO EXPLORE
          </div>
          <div className="journey-legend">
            <div className="legend-item">
              <span className="legend-line legend-career"></span>
              <span>CAREER JOURNEY</span>
            </div>

            <div className="legend-item">
              <span className="legend-line legend-concurrent"></span>
              <span>CONCURRENT ENGAGEMENTS</span>
            </div>
          </div>

        </div>
        {activeMilestone && (
          <div className="journey-details" ref={detailsRef}>
            <div className="journey-details-heading">
              <span>{activeMilestone.period}</span>
              <h3>{activeMilestone.title}</h3>
            </div>

            <div className="journey-roles">
              {activeMilestone.roles.map((role, index) => (
                <div
                  className={`journey-role ${role.featured ? "featured-role" : ""}`}
                  key={`${role.company}-${role.position}-${index}`}
                >
                  <div>
                    <h4>{role.company}</h4>
                    <p>{role.position}</p>
                    {role.linkedinPosition && (
                      <span className="role-note">
                        LinkedIn title: {role.linkedinPosition}
                      </span>
                    )}
                  </div>

                  <span className="role-dates">{role.dates}</span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

export default Journey;
