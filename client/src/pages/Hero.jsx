import React from 'react';
import hero from './images/Hero.png';
import github from './images/Github.png';
import linkedin from './images/Linkedin.webp';
import './CSS/Hero.css';

export default function Hero() {

  const resumeLink = "https://drive.google.com/file/d/10BTyd4W6e9yJU2SwhYNoMb-eQdLItIa_/view?usp=sharing"; // replace with your drive link

  return (
    <div className='image-description-container'>

      <div className="image-container">
        <img src={hero} alt="Hero" />
      </div>

      <div className="description-container">

        <h3 className="hero-description">
          Full-Stack Developer (MERN) | Computer Science Engineer
          <br />
          Passionate about building scalable web applications and intelligent software systems.
        </h3>

        {/* Social Icons */}
        <div className="social-icons">
          <a href="https://github.com/AvantiChouknis29" target="_blank" rel="noopener noreferrer">
            <img className="icon-logo" src={github} alt="GitHub" />
          </a>

          <a href="https://linkedin.com/in/avantichouknis" target="_blank" rel="noopener noreferrer">
            <img className="icon-logo" src={linkedin} alt="LinkedIn" />
          </a>
        </div>

        {/* Resume Button */}
        <div className="resume-section">
          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn"
          >
            View Resume
          </a>
        </div>

      </div>

    </div>
  );
}