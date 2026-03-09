import "./Footer.css"
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ContactFooter = () => {
  return (
    <section id="footer" className="contact-footer">
      <div className="footer-container">

        {/* LEFT IMAGE */}
        <div className="footer-image">
          <img
            src="/img/f3c65e340b6f47f7b85d6af5d1a445aed1d483a3.png" 
            alt="Architecture"
            width="357vw"
            />
        </div>

        {/* RIGHT CONTENT */}
        <div className="footer-content">

          <div className="footer-top">
            <h2>
              Let’s Turn Your Vision <br /> into Built Form
            </h2>

            {/* FIXED BUTTON */}
          <button className="inquiry-btn">Send Inquiry</button>

          </div>

          <hr />

          <div className="footer-middle">

            {/* Contact Info */}
            <div className="contact-info">
              <p className="email">
                <a href="mailto:Sashaktarchitect@gmail.com">
                  Sashaktarchitect@gmail.com
                </a>
              </p>

              <p className="phone">
                <a href="tel:+918267879678">
                  +91 82678 79678
                </a>
              </p>

              <p className="address">
                Raipur Rd, Kailash Vihar, Ladpur, Dehradun,<br />
                Uttarakhand 248008
              </p>

              {/* SOCIAL ICONS */}
              <div className="social-icons">
                <a href="https://www.facebook.com/sashaktarchitect" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF />
                </a>
                <a href="https://www.instagram.com/sashaktarchitect" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
                <a href="https://www.twitter.com/sashaktarchitect" target="_blank" rel="noopener noreferrer">
                  <FaXTwitter />
                </a>
                <a href="https://www.youtube.com/@sashaktarchitect" target="_blank" rel="noopener noreferrer">
                  <FaYoutube />
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div className="footer-links">
              <p><a href="#">Home</a></p>
              <p><a href="#Services">Services</a></p>
              <p><a href="#Work">Work</a></p>
              <p><a href="#about">About</a></p>
              <p><a href="#Blog">Blog</a></p>
            </div>

          </div>

          <hr />

    <div className="footer-bottom">
  <a href="#">Terms of Use</a>
  <span className="divider">|</span>
  <a href="#">Privacy Policy</a>
  <span className="divider">|</span>
  <a href="#">Refund Policy</a>
</div>


        </div>
      </div>
    </section>
  );
};

export default ContactFooter;
