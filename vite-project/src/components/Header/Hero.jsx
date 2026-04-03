import { Link } from "react-router-dom";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Designing spaces with purpose & precision.
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
  );
}
