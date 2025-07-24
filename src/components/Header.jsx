import React from "react";
import "./styles/Header.css";

function Header() {
  return (
    <header>
      <h1 className="header">Gideon Mwinami</h1>

      <nav className="nav">
        <ul>
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact" c>
              Contact Gideon
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
