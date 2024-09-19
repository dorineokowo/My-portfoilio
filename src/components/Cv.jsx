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
                I am deeply committed to continuous professional development,
                staying current with industry trends, and maintaining a high
                level of productivity. In addition to my HR expertise, I have
                developed a proficiency in web development, including HTML, CSS,
                JavaScript, Bootstrap, React, Node.js. This combination of HR
                knowledge and technical skills allows me to bridge the gap
                between HR and technology. If you are seeking a results-driven
                HR professional who can combine HR expertise with technical
                skills to drive organizational success, I would welcome the
                opportunity to contribute to your team.
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
                  HR Administration: Employee Relations, Labor laws and
                  compliance, Talent acquisition, Recruitment and Selection,
                  Training and Development, Performance Management, Occupational
                  Health and Safety, Workplace Psychology, etc.
                </li>
                <li>
                  HRIS: Experience in working with Human Resource Information
                  Systems (HRIS) and Applicant Tracking Systems (ATS).
                </li>
                <li>
                  Communication: Strong interpersonal and communication skills
                  for effective employee engagement and collaboration; Excellent
                  verbal and written communication skills, effectively conveying
                  information to diverse audiences.
                </li>
                <li>Confidentiality</li>
                <li>Teamwork</li>
                <li>
                  Web Development: HTML, CSS, JavaScript, Node.js, Bootstrap
                </li>
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
