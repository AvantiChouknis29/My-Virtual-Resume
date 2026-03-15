import React from "react";
import "./CSS/Contacts.css";

function Contact() {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <p>If you'd like to collaborate, discuss opportunities, or connect, feel free to reach out.</p>

      <div id="contact" className="contact-links">

        <div className="contact-card">
          <h3>Email</h3>
          <a href="mailto:avantichouknis.work@gmail.com">
            avantichouknis.work@gmail.com
          </a>
        </div>

        <div className="contact-card">
          <h3>LinkedIn</h3>
          <a
            href="https://www.linkedin.com/in/avantichouknis/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View LinkedIn Profile
          </a>
        </div>

        <div className="contact-card">
          <h3>GitHub</h3>
          <a
            href="https://github.com/AvantiChouknis29"
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub Projects
          </a>
        </div>

      </div>
    </section>
  );
}

export default Contact;