import React from "react";
import "./styles/Projects.css";

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="projects-title">My Projects</h2>
      <p className="projects-text">
        I don’t just learn frameworks — I build with them. My portfolio includes
        multiple projects developed with HTML, CSS, JavaScript, and React, from
        interactive games to custom dashboards and utility-driven web apps.
        Every project challenges me to write clean, scalable, and user-centered
        code.
      </p>

      <div className="projects-container">
        <ul className="projects-list">
          <li className="projects-item">
            <a href="https://fresh-outlet.vercel.app/" target="_blank">
              <strong>Kibanda Website</strong>
            </a>
            A food and gas delivery platform.
          </li>
          
          <li className="projects-item">
            <a href="https://portfolio-5k2q.vercel.app/" target="_blank">
              <strong>Portfolio Site</strong>
            </a>
            The very one you're viewing now!
          </li>

          <li className="projects-item">
            <a href="https://tenzies-one-liard.vercel.app/" target="_blank">
              <strong>Tenzies Game</strong>
            </a>
            A game of tenzies. Responsive and interactive.
          </li>

          <li className="projects-item">
            <a href="https://quiz-app-chi-five-44.vercel.app/" target="_blank">
              <strong>Question Website</strong>
            </a>
            Maps over an array of questions, otions and answers.
          </li>

          <li className="projects-item">
            <a href="https://food-delivery-eight-puce.vercel.app/" target="_blank">
              <strong>Food Delivery</strong>
            </a>
            A food delivery website that shows variety of foods, prices and
            joints.
          </li>

          <li className="projects-item">
            <a href="https://assembly-endgame-rouge.vercel.app/" target="_blank">
              <strong>Assembly Endgame</strong>
            </a>
            A game that letsyou guess letter to construct a word, on anywrong
            guess a language is closed out.
          </li>

          <li className="projects-item">
            <a href="https://recipe-generator-three-sand.vercel.app/" target="_blank">
              <strong>Recipe Generator</strong>
            </a>
            A recipe generating website, generates a recipe depending on the
            ingredients fed into it.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Projects;
