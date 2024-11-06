import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function Contact() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create form data to send
    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("message", formData.message);

    // Send the form data to formsubmit.co
    fetch("https://formsubmit.co/dorineokowo0@gmail.com", {
      method: "POST",
      body: form,
    })
      .then((response) => response.json())
      .then((data) => {
        alert(`Thank you, ${formData.name}, your message has been sent!`);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className={`contact-page ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <button onClick={toggleDarkMode} className="dark-mode-toggle">
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <div className="contact-page">
        <h4>Nice to meet you!</h4>
        <p>I'd love to hear from you! Please fill out the form below.</p>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label>Name</label>
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label>Email</label>
          </div>

          <div className="form-group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <label>Message</label>
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
