import React from "react";
import { Link } from "react-router-dom";

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
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="cv.html">CV</a>
            </li>
            <li>
              <a href="projects.html">Projects</a>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footerSection footerSectionSocialMedia">
          <h4>Follow Me</h4>
          <a
            href="https://linkedin.com/in/dorine-okowo"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/dorineokowo"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </div>
      </div>
      <div className="footerCopyright">
        <p>© 2024 Dorine Okowo. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
