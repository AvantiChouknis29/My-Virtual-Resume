import React, { useState } from "react";
import "./CSS/Other.css";

import NodeImg from "./images/Node.png";
import ReactImg from "./images/React.png";
import MongoImg from "./images/MongoDB.png";
import Java from "./images/Java.png"
import HTML from "./images/HTML.png"
import CSS from "./images/CSS.png"


const cardData = [
  {
    id: 1,
    title: "",
    image: MongoImg,
    description:
      "Experience working with MongoDB for designing scalable NoSQL databases, managing collections, and integrating databases with MERN stack applications.",
  },
  {
    id: 2,
    title: "",
    image: ReactImg,
    description:
      "Building modern responsive interfaces using React, component-based architecture, hooks, and state management for scalable frontend applications.",
  },
  {
    id: 3,
    title: "",
    image: NodeImg,
    description:
      "Developing backend APIs using Node.js and Express, handling authentication, database communication, and REST API development.",
  },
  {
    id: 4,
    title: "",
    image: Java,
    description:
      "Proficient in Java programming with strong understanding of object-oriented programming (OOP) concepts",
  },
  {
    id: 5,
    title: "",
    image: HTML,
    description:
      "Experienced in developing responsive user interfaces by integrating HTML with CSS and JavaScript.",
  },
  {
    id: 6,
    title: "",
    image: CSS,
    description:
      "Proficient in CSS3 for designing responsive and visually appealing web interfaces",
  },
  
];

function Other() {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleClose = () => {
    setSelectedCard(null);
  };

  return (
    <section className="skills-section">
      <h2 className="skill-title">Skills & Offerings</h2>

      <div className="card-container">
        {cardData.map((card) => (
          <div
            className="card"
            key={card.id}
            onClick={() => handleCardClick(card)}
          >
            <img className="card-img" src={card.image} alt={card.title} />
            <h3>{card.title}</h3>
          </div>
        ))}
      </div>

      {selectedCard && (
        <div className="expanded-card-overlay" onClick={handleClose}>
          <div
            className="expanded-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={handleClose}>
              ×
            </button>

            <img
              className="expanded-img"
              src={selectedCard.image}
              alt={selectedCard.title}
            />

            <h2>{selectedCard.title}</h2>
            <p>{selectedCard.description}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Other;