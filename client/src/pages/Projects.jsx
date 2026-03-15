import React, { useState } from 'react';
import Design from './images/Design.webp';            // Project image
import PopupDesign from './images/Design.png';        // Popup image
import PatentImage from './images/Patent1.jpg';        // Use any image for the patent card
import './CSS/Other.css';

const projectData = {
  id: 1,
  title: 'Unitantra – MERN Stack Web App',
  image: Design,
  popupImage: PopupDesign,
  description:
    'Project Unitantra was a rewarding collaboration with an Australian client, where I took complete ownership of the design and development process. The project involved building a comprehensive three-panel MERN stack web application—each tailored for users, agencies, and administrators. I handled UI/UX design, backend architecture, and catalogue creation through web scraping. The project also incorporated advanced features such as authentication, filtering, and dynamic dashboards, ensuring a robust and scalable solution.',
  link: 'https://unitantra-the-final-frontend.onrender.com/',
};

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = () => {
    setSelectedProject(projectData);
  };

  const handleClose = () => {
    setSelectedProject(null);
  };

  return (
    <>
     <div id="project" className="skill-title">Previous Projects</div>
 <div className="projects-container">
        {/* Project Card */}
        <div className="project-card" onClick={handleCardClick}>
          <img className="project-img" src={projectData.image} alt={projectData.title} />
          <div className="project-content">
            <h3 className="project-title">{projectData.title}</h3>
            <p className="project-desc">
             Full Stack project with MERN Stack, panels, and dashboards.
            </p>
          </div>
        </div>
        <br></br>    <br></br>

       
       
      </div>

      {/* Popup for projectData only */}
      {selectedProject && (
        <div className="expanded-card-overlay" onClick={handleClose}>
          <div className="expanded-card" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={handleClose}>
              ×
            </button>
            <img
              className="expanded-img"
              src={selectedProject.popupImage || selectedProject.image}
              alt={selectedProject.title}
            />
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            <a
              href={selectedProject.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'blue',
                textDecoration: 'underline',
                display: 'inline-block',
                marginTop: '8px',
                fontWeight: '500',
              }}
            >
              Visit Project ↗
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default Projects;
