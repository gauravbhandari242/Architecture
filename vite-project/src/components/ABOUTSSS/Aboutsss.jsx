import "./Aboutsss.css"
export default function About() {
  return (
    <section className="about-area">
      <div className="about-wrapper">

        {/* TOP CONTENT */}
        <div className="about-row">

          {/* LEFT */}
          <div className="about-col-left">
            <span className="about-label">• ABOUT</span>
            <h2 className="about-heading">
              Architecture Rooted in <br />
              Thought, Delivered with <br />
              Precision
            </h2>
          </div>

          {/* RIGHT */}
          <div className="about-col-right">
            <p>
              We are an architecture and project management studio focused on
              creating functional, context-driven spaces through clarity in design and
              precision in execution.
            </p>

            <p>
              Our practice works across residential, commercial, interior,
              boundary design, and project management consultancy, offering
              end-to-end solutions from concept to completion.
            </p>
          </div>

        </div>

        {/* IMAGE */}
        <div className="about-banner">
          <img
            src="img/ab2a4bbd2d3786f5f3db00928b923ec250b28087.png"
            alt="Modern Architecture"
          />
        </div>

      </div>
    </section>
  );
}
