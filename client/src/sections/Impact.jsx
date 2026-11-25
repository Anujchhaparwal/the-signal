import "./Impact.css";
import { Award } from "lucide-react";

const featuredAwards = [
  {
    id: 1,
    title: "Best Leader",
    year: "2018",
    organization: "LaserSec Technologies",
  },
  {
    id: 2,
    title: "Best COSR Expert",
    year: "2017",
    organization: "LaserSec Technologies",
    description:
      "Challenges, Obstacles and taken Steps, and showcased Results.",
  },
  {
    id: 3,
    title: "Outstanding Performer",
    year: "2014",
    organization: "ShowMeLeads Inc",
  },
  {
    id: 4,
    title: "Sales Operations Professional of the Year",
    year: "2012",
    organization: "Creaform",
  },
];

function Impact() {
  return (
    <section id="impact" className="impact-section">
      <div className="impact-container">
        <div className="impact-heading">
          <span className="section-label">04 / THE IMPACT</span>

          <h2>
            Recognition follows <em>meaningful work.</em>
          </h2>

          <p>
            Across different teams, businesses and roles,
            my work has been recognised for its contribution
            to growth, leadership and execution.
          </p>
        </div>
        <div className="featured-awards">
          {featuredAwards.map((award) => (
            <article className="award-card" key={award.id}>
              <div className="award-card-top">
                <span className="award-year">{award.year}</span>
                <Award className="award-icon" size={22} strokeWidth={1.5} />
              </div>

              <div className="award-card-content">
                <h3>{award.title}</h3>
                <p>{award.organization}</p>

                {award.description && (
                  <span className="award-description">
                    {award.description}
                  </span>
                )}
              </div>

              <div className="award-card-footer">
                <span>PROFESSIONAL RECOGNITION</span>
              </div>
            </article>
          ))}
        </div>
        <div className="impact-reflection">
          <p>
            Recognition across different organisations has been a meaningful
            part of my journey. From marketing and sales operations to
            leadership and team contribution, each recognition reflects the
            value of showing up, understanding what needs to be done and
            making a meaningful difference. For me, the real achievement
            has always been <span>the work behind the recognition.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Impact;
