import React from "react";
import "./styles/Hero.css";
import heroImage from "../assets/hero-image.jpeg";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h2 className="hero-title">
          Design-Driven. Code-Focused. Built for Impact.
        </h2>

        <div className="hero-description">
          <p>
            Hello, I am Gideon Mwinami, a pixel-perfect Frontend Developer
            crafting sleek, high-impact websites with React, HTML, CSS &
            JavaScript.
          </p>
          <p>
            I don’t just write code, I design experiences. Fast. Responsive.
            Accessible. Always on point.
          </p>
          <p>
            Whether it’s a freelance hustle or your next big project, I am your
            guy. A click away and ready to bring your vision to life.
          </p>
        </div>

        <a href="#contact" className="btn" role="button">
          Let's Connect
        </a>
      </div>

      <div className="hero-image">
        <img src={heroImage} alt="Developer Image" />
      </div>
    </section>
  );
}

export default Hero;
