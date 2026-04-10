import "./contact.css";
import { useState } from "react";
import { FaYoutube, FaFacebookF, FaInstagram } from "react-icons/fa";
import emailjs from "emailjs-com";

export default function Contact() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    // Debug: Check form values
    console.log("Form values:", {
      name: form.user_name.value,
      email: form.user_email.value,
      phone: form.user_phone.value,
      service: form.service.value,
      message: form.message.value
    });

    setLoading(true);

    emailjs.sendForm(
      "service_c937gc5",    // ✅ Your Service ID
      "template_00n6hy8",   // ✅ Correct Template ID
      form,
      "BvO_9UYZYIktDUKRk"   // ✅ Public Key
    ).then(
      () => {
        setLoading(false);
        setPopupMessage("✅ Message Sent! Thank you, we will contact you soon.");
        setShowPopup(true);
      },
      (error) => {
        setLoading(false);
        console.log("EmailJS error:", error.text);
        setPopupMessage("❌ Failed to send message. Please try again.");
        setShowPopup(true);
      }
    );

    form.reset();
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
              <p>gauravbhandari242@gmail.com</p>
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
            <a href="https://www.facebook.com/sashaktarchitect" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/sashaktarchitect" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/@sashaktarchitect" target="_blank" rel="noreferrer">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form
          className="contact-form"
          onSubmit={handleSubmit}
          autoComplete="off"
          key={Date.now()} // Forces React to reset the form
        >
          <label>Enter your Name</label>
          <input type="text" name="user_name" placeholder="Name" required autoComplete="off" />

          <label>Enter your Email</label>
          <input type="email" name="user_email" placeholder="Email" required autoComplete="off" />

          <label>Enter your Contact</label>
          <input type="tel" name="user_phone" placeholder="Phone Number" required autoComplete="off" />

          <label>What Services are Required</label>
          <input type="text" name="service" placeholder="Services Required" autoComplete="off" />

          <label>Enter the Message</label>
          <textarea name="message" placeholder="Message" autoComplete="off"></textarea>

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Submit Message"}
          </button>
        </form>

      </div>

      {/* POPUP */}
      {showPopup && (
        <div className="popup">
          <div className="popup-box">
            <h2>{popupMessage}</h2>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
}