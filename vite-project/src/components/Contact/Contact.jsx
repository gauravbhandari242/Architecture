import "./contact.css";
import { useState } from "react";
import { FaYoutube, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Contact() {

  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // page reload stop

    setShowPopup(true); // popup show

    e.target.reset(); // form clean
  };

  return (
    <section className="contact-section">
      <div className="contact-wrapper">

        <div id="Contact" className="overlay"></div>

        {/* LEFT CONTENT */}
        <div className="contact-left">
          <span>• CONTACT US</span>
          <h1>LET’S BUILD TOGETHER</h1>

          <p>
            Contact us to discuss your idea and bring it to reality,
            creating a unique space designed for your future success.
          </p>

          <div className="info-card">

            <div>
              <small>Email</small>
              <p>sashaktarchitect@gmail.com</p>
            </div>

            <div>
              <small>Contact</small>
              <p>+91 85956 50016</p>
            </div>

            <div>
              <small>Location</small>
              <p>
                Raipur Rd, Kailash Vihar, Ladpur,
                Dehradun, Uttarakhand 248008
              </p>
            </div>

          </div>

          <div className="socials">

            <a href="https://www.facebook.com/sashaktarchitect" target="_blank">
              <FaFacebookF />
            </a>

            <a href="https://www.instagram.com/sashaktarchitect" target="_blank">
              <FaInstagram />
            </a>

            <a href="https://www.youtube.com/@sashaktarchitect" target="_blank">
              <FaYoutube />
            </a>

          </div>
        </div>

        {/* RIGHT FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>

          <label>Enter your Name</label>
          <input type="text" placeholder="Name" required />

          <label>Enter your Email</label>
          <input type="email" placeholder="Email" required />

          <label>Enter your Contact</label>
          <input type="tel" placeholder="Phone Number" required />

          <label>What Services are Required</label>
          <input type="text" placeholder="Services Required" />

          <label>Enter the Message</label>
          <textarea placeholder="Message"></textarea>

          <button type="submit">Submit Message</button>

        </form>

      </div>

      {/* POPUP */}
      {showPopup && (
        <div className="popup">
          <div className="popup-box">
            <h2>✅ Message Sent</h2>
            <p>Thank you! We will contact you soon.</p>

            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}

    </section>
  );
}
