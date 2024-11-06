import React, { useState } from "react";
import Card from "./Card.jsx";
import Mypic from "../assets/Mypic.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const CardData = [
    {
      title: "HTML & CSS",
      imgSrc:
        "https://images.ctfassets.net/skvkiv2kg4h0/aeSMfrcEd0SP1mEk0WYVE/9156b2596cd65d90da0ea2e32641252e/intro-html-css.jpg?w=534&h=300&fl=progressive&q=50&fm=jpg",
      imgAlt: "HTML and CSS",
      content:
        "Proficient in semantic HTML and modern CSS techniques, including Flexbox and Grid.",
    },
    {
      title: "JAVASCRIPT",
      imgSrc:
        "https://www.pngitem.com/pimgs/m/171-1718042_javascript-logo-png-transparent-png.png",
      imgAlt: "JavaScript Logo",
      content:
        "Strong understanding of JavaScript fundamentals, ES6 features, and DOM manipulation.",
    },
    {
      title: "REACT",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s",
      imgAlt: "React Logo",
      content:
        "Proficient in building dynamic user interfaces using React, with a solid understanding of component lifecycle, state management, and hooks.",
    },
    {
      title: "VERSION CONTROL",
      imgSrc: "https://git-scm.com/images/logos/logomark-black@2x.png",
      imgAlt: "Git Logo",
      content: "Experience with Git for version control and collaboration.",
    },
    {
      title: "RESPONSIVE DESIGN",
      imgSrc:
        "https://www.pngitem.com/pimgs/m/290-2909960_responsive-web-design-icon-web-design-hd-png.png",
      imgAlt: "Responsive Design Icon",
      content:
        "Ability to create layouts that work on various screen sizes using media queries and responsive frameworks.",
    },
    {
      title: "SOFT SKILLS",
      imgSrc:
        "https://media.istockphoto.com/id/1328278554/vector/soft-skills-in-business-concept-tiny-female-character-working-on-laptop-at-huge-human-head.jpg?s=612x612&w=0&k=20&c=8G9163GDR47jl2028_aN57RM4q31YQM_KO40ljOis6o=",
      imgAlt: "Soft Skills Illustration",
      content: (
        <ul>
          <li>Problem-Solving</li>
          <li>Effective Communication</li>
          <li>Time Management</li>
        </ul>
      ),
    },
  ];

  const testimonials = [
    {
      name: "Ben Eastvold",
      feedback:
        "Dorine is an amazing developer. She delivered the project on time with superb quality!",
    },
    {
      name: "Zack Omusugu",
      feedback:
        "Great attention to detail and excellent communication throughout the project.",
    },
    {
      name: "Pherhad Mike",
      feedback: "Highly recommend Dorine. Very professional and knowledgeable.",
    },
  ];

  return (
    <div className={`home ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <button onClick={toggleDarkMode} className="dark-mode-toggle">
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <div className="row align-items-center justify-content-center gx-5 py-5 mx-auto text-center">
        <div className="col-12 col-lg-6 order-sm-2 order-lg-1">
          <p className="greeting">Hello, my name is</p>
          <h1 className="name">Dorine Okowo</h1>
          <div className="loopText">Web Developer</div>
          <p className="intro">
            "Welcome to my portfolio website, where I showcase my expertise as a
            skilled Web Developer. With a focus on modern, responsive design and
            seamless user experiences, I bring a refined aesthetic to every
            project. Here, you'll find a curated selection of my work,
            demonstrating my proficiency in HTML, CSS, JavaScript, and
            React,Node.js"
          </p>
          <a href="/contact" className="custom-btn animate-btn">
            CONTACT ME!
          </a>
        </div>
        <div className="col-12 col-lg-6 order-sm-1 order-lg-2 mt-5">
          <img className="dev-image" src={Mypic} alt="My picture" />
        </div>
      </div>

      <div className="mySkills">
        <h2>My Skills</h2>
      </div>
      <div className="card-container">
        {CardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            imageSrc={card.imgSrc}
            altText={card.imgAlt}
            content={card.content}
          />
        ))}
      </div>

      <div className="testimonials">
        <h2>Testimonials</h2>
        <div className="testimonial-cards">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p className="testimonial-feedback">"{testimonial.feedback}"</p>
              <p className="testimonial-name">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
