import React, { useState } from "react";
import "./CSS/Other.css";

/* Tech Stack Icons */
import java from "./images/Java.png";
import reactIcon from "./images/React.png";
import node from "./images/Node.png";
import mongo from "./images/MongoDB.png";
import HTML from "./images/HTML.png";
import CSS from "./images/CSS.png";

const experienceData = [
  {
    id: 1,
    role: "Software Innovation",
    company: "Techdawn Innovations Pvt. Ltd., Kolhapur",
    duration: "July 2024 – Present",
    description:
      "Co-inventor of a patented automated kiosk-based stamp paper issuance system for secure e-governance services.",
    link: "https://iprsearch.ipindia.gov.in/RQStatus/PatentCertificatePDF.aspx?AppNo=MjAyNDIxMDgzNzYx&FullPath=LVBhdGVudENlcnRpZmljYXRlMjYtMTEtMjAyNS5wZGY=",
    techStack: [java]
  },

  {
    id: 2,
    role: "Software Developer",
    company: "Shri Venkatesh Consultants (SVCWorldEd)",
    duration: "June 2024 – Oct 2024",
    description:
      "Designed and developed a full-stack web application using React, Node.js, and MongoDB.",
    link: "https://unitantra-the-final-frontend.onrender.com/",
    techStack: [reactIcon, node, HTML, CSS, mongo]
  },

  {
    id: 3,
    role: "Intern Web App and Software Development",
    company: "Shri Venkatesh Consultants (SvcWorldEd)",
    duration: "Jan 2024 - May 2024",
    description:
      "Designed UI workflows and led a team responsible for university data scraping.",
    techStack: [mongo]
  },

  {
    id: 4,
    role: "Software Engineer Intern",
    company: "Techdawn Innovations Pvt. Ltd., Kolhapur",
    duration: "Jan 2024 - May 2024",
    description:
      "Provided technical consultancy and worked on innovative software architecture solutions.",
    link: "https://iprsearch.ipindia.gov.in/RQStatus/PatentCertificatePDF.aspx?AppNo=MjAyNDIxMDE1Mzk1&FullPath=LVBhdGVudENlcnRpZmljYXRlMDctMDMtMjAyNS5wZGY="
  }
];

function Update() {

  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <>
      <section id="work">

        <h2 className="skill-title">Work Experience</h2>

        <div className="rocket-container">

          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className="rocket-step"
              onClick={() => setSelectedCard(exp)}
            >

              <div className="planet"></div>

              <div className="rocket-card">

                <h3>{exp.role}</h3>

                <p className="company">{exp.company}</p>

                <span className="duration">{exp.duration}</span>

                {/* Tech Stack Images */}
                {exp.techStack && (
                  <div className="tech-stack-card">
                    {exp.techStack.map((tech, index) => (
                      <img
                        key={index}
                        src={tech}
                        alt="tech"
                        className="tech-icon-card"
                      />
                    ))}
                  </div>
                )}

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* Popup Modal */}

      {selectedCard && (
        <div
          className="expanded-card-overlay"
          onClick={() => setSelectedCard(null)}
        >

          <div
            className="expanded-card"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="close-btn"
              onClick={() => setSelectedCard(null)}
            >
              ×
            </button>

            <h2>{selectedCard.role}</h2>

            <p className="company">{selectedCard.company}</p>

            <span className="duration">{selectedCard.duration}</span>

            <p>{selectedCard.description}</p>

            {selectedCard.link && (
              <a
                href={selectedCard.link}
                target="_blank"
                rel="noopener noreferrer"
                className="experience-link"
              >
                View Work →
              </a>
            )}

          </div>

        </div>
      )}

    </>
  );
}

export default Update;