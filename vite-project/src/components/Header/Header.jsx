import "./Header.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Body scroll disable when menu open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [menuOpen]);

  const handleClose = () => {
    setMenuOpen(false);
  };

  return (
    <div className="img-back">
      
      {/* NAVBAR */}
      <nav className="navbar">
        <h1 className="logo">
          <img src="/img/Vector.png" width="40" alt="Logo" />
        </h1>

        {/* Hamburger */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </div>

        {/* MENU */}
        <ul className={`menu ${menuOpen ? "active" : ""}`}>
          <li>
            <Link to="/" onClick={handleClose}>Home</Link>
          </li>

          <li>
            <Link to="/Aboutsss" onClick={handleClose}>About</Link>
          </li>

          <li>
            <Link to="/Servicecopy" onClick={handleClose}>Services</Link>
          </li>

          <li>
            <Link to="/Working" onClick={handleClose}>Work</Link>
          </li>

          <li>
            <Link to="/Blog" onClick={handleClose}>Blog</Link>
          </li>

          <li>
            <Link to="/Contact" onClick={handleClose}>Contact</Link>
          </li>

          <li>
            <Link
              to="/Contact"
              className="nabvar-btn"
              onClick={handleClose}
            >
              Book a Consultation
            </Link>
          </li>
        </ul>
      </nav>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Designing spaces with
            <br /> purpose & precision.
          </h1>

          <p>
            We are an architecture and design studio creating thoughtful,
            functional, and timeless spaces through context-driven design
            and careful execution.
          </p>

          <div className="hero-btn">
            <Link to="/Contact" className="btn primary">
              Book a Consultation
            </Link>

            <Link to="/Working" className="btn secondary">
              Explore Our Work
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
