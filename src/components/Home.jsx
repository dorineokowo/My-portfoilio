import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  const getGreeting = () => {
    const now = new Date();
    const hours = now.getHours();

    if (hours < 12) {
      return "Good Morning 🌅";
    } else if (hours < 18) {
      return "Good Afternoon 🌞";
    } else {
      return "Good Evening 🌙";
    }
  };
  return (
    <div className="home">
      <div className="row align-items-center justify-content-center gx-5 py-5 mx-auto text-center">
        <p className="greeting1">{getGreeting()}</p>
      </div>
      <div className="row align-items-center justify-content-center gx-5 py-5 mx-auto text-center">
        <div className="col-12 col-lg-6 order-sm-2 order-lg-1">
          <p className="greeting">Hello, my name is</p>
          <h1 className="name">Dorine Okowo</h1>
          <div className="loopText">Web Developer</div>
          <p className="intro">
            I design and develop websites for customers of all sizes,
            specializing in creating stylish, modern websites, web services, and
            online stores.
          </p>
          <a href="./Contact.jsx" className="custom-btn">
            CONTACT ME!
          </a>
        </div>
        <div className="col-12 col-lg-6 order-sm-1 order-lg-2 mt-5">
          <img
            className="dev-image"
            src="https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_1280.png"
            alt="Web Development Illustration"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
