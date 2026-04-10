import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [menuOpen]);

  const handleClose = () => setMenuOpen(false);

  return (
    <>
      {/* Overlay */}
      <div
        className={`menu-overlay ${menuOpen ? "active" : ""}`}
        onClick={handleClose}
      ></div>

      <nav className="navbar">
        {/* Logo */}
        <h1 className="logo">
          <img src="/img/Vector.png" width="40" alt="Logo" />
        </h1>

        {/* Hamburger */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </div>

        <ul className={`menu ${menuOpen ? "active" : ""}`}>
          <li><Link to="/" onClick={handleClose}>Home</Link></li>
          <li><Link to="/AboutPage" onClick={handleClose}>About</Link></li>
          <li><Link to="/service" onClick={handleClose}>Services</Link></li>
          <li><Link to="/explorework" onClick={handleClose}>Work</Link></li>
          <li><Link to="/exploreblog" onClick={handleClose}>Blog</Link></li>
          <li><Link to="/contact" onClick={handleClose}>Contact</Link></li>

          <li>
            <Link to="/contact" className="navbar-btn" onClick={handleClose}>
              Book a Consultation
            </Link>
          </li>
        </ul>
     
      </nav>
    </>
  );
}
