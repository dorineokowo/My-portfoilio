import React, { useState } from "react";
import TechEmpower from "../assets/TechEmpower.jpeg";
import RottenTomatoes from "../assets/RottenTomatoes.png";
import ShambaLink from "../assets/ShambaLink.png";
import "bootstrap/dist/css/bootstrap.min.css";

function Projects() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  const projectsData = [
    {
      title: "TechEmpower Rural",
      imgSrc: TechEmpower,
      imgAlt: "TechEmpowerRural",
      content:
        "NGO Website empowering rural youths with digital skills,internet access and solar power installation.",
      link: "ghhytf",
    },
    {
      title: "ShambaLink",
      imgSrc: ShambaLink,
      imgAlt: "ShambaLink",
      content:
        "A website connecting farmers with opportunities,agricultural education and markets",
      link: "ghhytf",
    },
    {
      title: "Rotten Tomatoes",
      imgSrc: RottenTomatoes,
      imgAlt: "RottenTomatoes",
      content:
        "RottenTomatoes.com landing page with information about a number of current movies.",
      link: "ghhytf",
    },
    {
      title: "TechEmpower Rural",
      imgSrc: TechEmpower,
      imgAlt: "TechEmpowerRural",
      content:
        "A website connecting farmers with opportunities,agricultural education and markets",
      link: "ghhytf",
    },
  ];
  return (
    <div className={`projectsPage" ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <button onClick={toggleDarkMode} className="dark-mode-toggle">
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <div className="projects-intro">
        <h4>Welcome to my projects portfolio!</h4>
        <p>
          Here, you'll find a collection of my latest work showcasing my skills
          and passion for web development.Feel free to explore, and click on any
          project to learn more about it!
        </p>
      </div>
      <div className="card-container">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <h4 className="project-title">"{project.title}"</h4>
            <img
              src={project.imgSrc}
              alt={project.imgAlt}
              className="project-image"
            />
            <p className="project-description">{project.content}</p>
            <a href={project.link}>View the project</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
