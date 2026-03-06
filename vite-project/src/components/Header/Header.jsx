import React, { useState, useEffect } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // 🔥 Body scroll disable logic
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

        <ul className={`menu ${menuOpen ? "active" : ""}`}>
          <li><a href="/" onClick={handleClose}>Home</a></li>
          <li><a href="Founder" onClick={handleClose}>About</a></li>
          <li><a href="Servicecopy" onClick={handleClose}>Services</a></li>
          <li><a href="ABOUTSSS" onClick={handleClose}>Work</a></li>
          <li><a href="#Blog" onClick={handleClose}>Blog</a></li>
          <li><a href="#Contact" onClick={handleClose}>Contact</a></li>

          <li>
            <a
              href="#Contact"
              className="nabvar-btn"
              onClick={handleClose}
            >
              Book a Consultation
            </a>
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
            <a href="#Contact" className="btn primary">
              Book a Consultation
            </a>
            <a href="#Work" className="btn secondary">
              Explore Our Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
