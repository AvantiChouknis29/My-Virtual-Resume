import React, { useState } from "react";
import './CSS/Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h1 className="logo-text">Web Dev</h1>
            </div>

            <button className="navbar-toggle" onClick={toggleMenu}>
                ☰
            </button>

            <ul className={`navbar-ul ${isMenuOpen ? 'show' : ''}`}>
                 <li className="navbar-li">
                  <a className="navbar-item" href="#">Home</a>

                </li>
                
                <li className="navbar-li">
                  <a className="navbar-item" href="#project">Projects</a>

                </li>
                <li className="navbar-li">
                    <a className="navbar-item" href="#workflow">Research</a>
                </li>
            
                <li className="navbar-li">
                    <a className="navbar-item" href="#work">Experience</a>
                </li>
                <li className="navbar-li">
                    <a className="navbar-item" href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
