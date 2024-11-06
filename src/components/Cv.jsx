import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Cv() {
  return (
    <div className="cvPage">
      <div className="paperBackground">
        <header id="info">
          <div className="left">
            <h1>Dorine Okowo</h1>
            <h2>Web Developer</h2>
          </div>

          <div className="right">
            <strong>Email:</strong>{" "}
            <a href="mailto:dorineokowo0@gmail.com">dorineokowo0@gmail.com</a>
            <br />
            <strong>GitHub:</strong>{" "}
            <a href="https://github.com/dorineokowo">
              https://github.com/dorineokowo
            </a>
          </div>
        </header>

        <main>
          <section id="profile">
            <div className="left">
              <h3>Profile</h3>
            </div>
            <div className="right">
              <p>
                As a web developer with two years of experience, I specialize in
                creating dynamic, responsive, and user-friendly websites. My
                technical expertise spans HTML, CSS, JavaScript, React and
                Node.js, allowing me to deliver robust digital solutions
                tailored to meet client needs. I bring a unique blend of
                technical proficiency, creative problem-solving, and a
                results-oriented mindset to every project. My commitment to
                excellence drives me to not only meet but exceed client
                expectations, ensuring that the solutions I develop are both
                innovative and effective.
              </p>
            </div>
          </section>
          <hr />

          <section id="skills">
            <div className="left">
              <h3>Skills</h3>
            </div>
            <div className="right">
              <ul>
                <li>
                  HTML and CSS: Proficient in semantic HTML and modern CSS
                  techniques, including Flexbox and Grid..
                </li>
                <li>
                  Javascript: Strong understanding of JavaScript fundamentals,
                  ES6 features, and DOM manipulation..
                </li>
                <li>
                  React:Proficient in building dynamic user interfaces using
                  React, with a solid understanding of component lifecycle,
                  state management, and hooks.
                </li>
                <li>
                  Version control:Experience with Git for version control and
                  collaboration.
                </li>
                <li>
                  {" "}
                  Ability to create layouts that work on various screen sizes
                  using media queries and responsive frameworks.
                </li>
                <li>
                  Communication: Strong interpersonal and communication skills
                  for effective employee engagement and collaboration; Excellent
                  verbal and written communication skills, effectively conveying
                  information to diverse audiences.
                </li>

                <li>Teamwork</li>
              </ul>
            </div>
          </section>
          <hr />

          <section id="experience">
            <div className="left">
              <h3>Experience</h3>
            </div>

            <div className="right">
              <div className="workItem">
                <div className="workTitleLeft">
                  <h4>Tech Teaching Assistant</h4>
                  <h5>Glad Technology</h5>
                </div>
                <div className="workTitleRight">
                  <h5>2nd June 2024 - Present</h5>
                </div>
                <div className="workTitleLeft">
                  <p>
                    Supported the HR department with administrative tasks such
                    as filing, data entry, and scheduling interviews. Assisted
                    in organizing employee training sessions, ensuring training
                    materials were prepared and distributed. Participated in
                    employee orientation programs, helping new hires acclimate
                    to the company culture and policies. Assisted in the
                    preparation of HR reports and presentations for management
                    review.
                  </p>
                </div>
              </div>

              <div className="workItem">
                <div className="workTitleLeft">
                  <h4>Digital Skills Trainer</h4>
                  <h5>Compassion International, ACK Yala CDC</h5>
                </div>
                <div className="workTitleRight">
                  <h5>November 2023 - Present</h5>
                </div>
                <div className="workTitleLeft">
                  <p>
                    Developed and delivered training programs focused on web
                    development, digital literacy, and other relevant tech
                    skills to refugee communities. Tailored curriculum to meet
                    the diverse learning needs of participants, ensuring
                    accessibility and inclusivity. Provided hands-on
                    instruction, guidance, and mentorship to support
                    participants in acquiring technical skills and building
                    confidence. Collaborated with community organizations and
                    stakeholders to identify training needs, develop
                    partnerships, and promote the program. Monitored participant
                    progress, assessed learning outcomes, and provided ongoing
                    support and feedback to facilitate skill development and
                    growth. Organized workshops, seminars, and networking events
                    to enhance participants' professional development and job
                    readiness in the tech industry.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <hr />

          <section id="education">
            <div className="left">
              <h3>Education</h3>
            </div>
            <div className="right">
              <strong>Maseno University</strong>
              <br />
              Bachelor of Science in Human Resource Management with IT
              <br />
              Aug 2019 - Dec 2023
              <br />
              <br />
              <strong>Glad Technology</strong>
              <br />
              Certificate in Web Development (JavaScript, Node.js, React,
              MongoDB, Bootstrap, HTML, CSS)
              <br />
              June 2023 - Nov 2023
              <br />
              <br />
              <strong>Power Learn Project</strong>
              <br />
              Certificate in Software Development and Entrepreneurship
              <br />
              Nov 2022 - May 2023
              <br />
              <br />
            </div>
          </section>
          <hr />
          <section id="certifications">
            <div className="left">
              <h3>Certifications</h3>
            </div>
            <div className="right">
              <strong>Baylor University - Exchange Badge</strong>
              <br />
              Awarded for participating in a cross-cultural educational program
              between Compassion International students in Kenya and Baylor
              University students in the USA, demonstrating a commitment to
              intercultural learning.
              <br />
              <a href="https://www.credly.com/go/TZ6mt1y6f0ZYAKzNI1clAA">
                Baylor University Exchange Badge
              </a>
              <br />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Cv;
