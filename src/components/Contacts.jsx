import React from "react";
import "./styles/Contacts.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="contact-title">Get In Touch</h2>
      <p className="contact-description">
        Whether you’re interested in working together, have a question, or just
        want to say hello — my inbox is open.
      </p>

      <div className="contact-items">
        <div className="contact-item">
          <span>Email:</span>
          <a href="mailto:mwinamigideon@gmail.com">mwinamigideon@gmail.com</a>
        </div>

        <div className="contact-item">
          <span>WhatsApp:</span>
          <a
            href="https://wa.me/254793811204"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Gideon on WhatsApp (opens in new tab)"
          >
            Chat on WhatsApp
          </a>
        </div>

        <div className="contact-item">
          <span>Phone:</span>
          <a href="tel:+254793811204">+254 793 811 204</a>
        </div>

        <div className="contact-item">
          <span>GitHub:</span>
          <a
            href="https://github.com/Tacci24"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my GitHub profile (opens in new tab)"
          >
            Follow me here!
          </a>
        </div>

        <div className="contact-item">
          <span>LinkedIn:</span>
          <a
            href="https://www.linkedin.com/in/gideonmwinami"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my LinkeIn profile (opens in new tab)"
          >
            Connect with me here!
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
