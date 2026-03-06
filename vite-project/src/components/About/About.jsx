import "./About.css";

function About() {
  return (
    <>
      <div id="about" className="about">
        <div className="about-content">
          <ul className="about-list">
            <li className="about-subtitle">• About</li>
          </ul>

          <h1 className="about-title">Who We Are</h1>

          <p className="about-text">
            We are an architecture and design studio focused on creating
            functional, thoughtful, and sustainable spaces. Our work is guided
            by clarity in design, technical precision, and respect for context.
            We believe good architecture is simple, honest, and purposeful.
            Each project is approached with sensitivity to site, climate, and
            user experience.
          </p>
        </div>

        <div className="about-image">
          <img src="/img/image 3.png" alt="Architecture studio work" />
        </div>
      

      <div className="about-stats">
        <div className="box">
          <h1>10+</h1>
          <p>Years of Expertise</p>
        </div>

        <div className="box">
          <h1>120+</h1>
          <p>Total Clients</p>
        </div>

        <div className="box">
          <h1>200+</h1>
          <p>Projects Delivered</p>
        </div>

        <div className="box">
          <h1>5+</h1>
          <p>Awards</p>
        </div>
        </div>
      </div>
    </>
  );
}

export default About;
