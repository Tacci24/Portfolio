import React from "react";
import { useState } from "react";
import "./styles/Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <h1 className="header">Gideon Mwinami</h1>

      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>

      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#hero" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact Gideon
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
