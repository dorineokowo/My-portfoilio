// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa"; // Importing icons

function Footer() {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <div className="footerSection footerSectionContactInfo">
          <h4>Contact Information</h4>
          <p>
            Email:{" "}
            <a href="mailto:dorineokowo0@gmail.com">dorineokowo0@gmail.com</a>
          </p>
          <p>Phone: +254768629028</p>
        </div>
        <div className="footerSection footerSectionNavigationLinks">
          <h4>Navigation</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Cv">CV</Link>
            </li>
            <li>
              <Link to="/Projects">Projects</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footerSection footerSectionSocialMedia">
          <h4>Follow Me</h4>
          <div className="socialLinks">
            <a
              href="https://linkedin.com/in/dorine-okowo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} /> {/* LinkedIn Icon */}
            </a>
            <a
              href="https://github.com/dorineokowo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={24} /> {/* GitHub Icon */}
            </a>
            <a
              href="https://x.com/okowo4454"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter size={24} /> {/* Twitter Icon */}
            </a>
          </div>
        </div>
      </div>
      <div className="footerCopyright">
        <p>© 2024 Dorine Okowo. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
