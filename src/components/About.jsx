import React from "react";
import "./styles/About.css";
import aboutImage from "../assets/about-icon.JPG";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-text">
        <h2 className="about-title">About Me</h2>
        <h3 className="about-subtitle">
          Bringing interfaces to life with clean code and thoughtful design.
        </h3>

        <div className="about-content">
          <p>
            I don’t just write code, I build experiences that speak to the user
            before they even click. With every project, I bring structure to
            ideas, clarity to complexity, and elegance to function. My journey
            into frontend development is one of passion, persistence, and
            purpose, grounded in solid fundamentals (HTML, CSS, JavaScript) and
            brought to life with React.
          </p>
          <p>
            I believe great interfaces aren’t just beautiful, they’re intuitive,
            accessible, and fast. That’s the standard I hold myself to. I learn
            quickly, adapt relentlessly, and ship code that’s clean, scalable,
            and future-ready. I’m not here to impress, I’m here to deliver.
          </p>
          <p>
            I'm currently open to job roles, freelance work, and creative tech
            collaborations. If you're looking for someone reliable, skilled, and
            driven — let’s connect and build something remarkable.
          </p>
        </div>
      </div>
      
      <div className="about-image">
        <img src={aboutImage} alt="About Me" />
      </div>
    </section>
  );
}

export default About;
