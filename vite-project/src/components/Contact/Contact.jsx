import { FaYoutube, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Contact  () {
  return (
    <section className="contact-section">
      <div className="contact-wrapper">

        

        {/* dark overlay */}
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
                Raipur Rd, Kailash Vihar, Ladpur, Dehradun,
                Uttarakhand 248008
              </p>
            </div>
          </div>

          {/* SOCIAL ICONS */}
          <div className="socials">
  <a 
    href="https://www.facebook.com/sashaktarchitect" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <FaFacebookF />
  </a>

  <a 
    href="https://www.instagram.com/sashaktarchitect" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <FaInstagram />
  </a>

  <a 
    href="https://www.youtube.com/@sashaktarchitect" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <FaYoutube />
  </a>
</div>

        </div>

        {/* RIGHT FORM */}
        <div className="contact-form">
        
          <label>Enter your Name</label>
          <input type="text" placeholder="Name" />

          <label>Enter your Email</label>
          <input type="email" placeholder="Email" />

          <label>Enter your Contact</label>
          <input type="tel" placeholder="Phone Number" />

          <label>What Services are Required</label>
          <input type="text" placeholder="Services Required" />

          <label>Enter the Message</label>
          <textarea placeholder="Message"></textarea>

          <button type="submit">Submit Message</button>
        </div>

      </div>
    </section>
  );
}
