import React from "react";
import "./styles/Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-brand">Gideon Mwinami</h3>
          <p>Web Developer — clean code, thoughtful design.</p>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>
            <a href="mailto:mwinamigideon@gmail.com">mwinamigideon@gmail.com</a>
          </p>
          <p>
            <a href="tel:+254793811204">+254 793 811 204</a>
          </p>
          <p>
            <a
              href="https://wa.me/254793811204"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Gideon on WhatsApp (opens in new tab)"
            >
              Chat on WhatsApp
            </a>
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a
                href="https://github.com/Tacci24"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my GitHub profile (opens in new tab)"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/gideonmwinami"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my LinkeIn profile (opens in new tab)"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} Gideon Mwinami. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
