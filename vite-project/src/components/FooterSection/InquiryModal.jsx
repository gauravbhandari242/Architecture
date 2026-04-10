// src/components/InquiryModal/InquiryModal.jsx
import { useState } from "react";
import emailjs from "emailjs-com";
import "./InquiryModal.css";

export default function InquiryModal() {
  const [showModal, setShowModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_c937gc5",       // Replace with your EmailJS Service ID
      "template_00n6hy8",      // Replace with your EmailJS Template ID
      e.target,
      "BvO_9UYZYIktDUKRk"      // Replace with your EmailJS Public Key
    ).then(
      () => {
        setSuccessMessage("✅ Your inquiry has been sent successfully!");
        e.target.reset();
      },
      (error) => {
        console.error("EmailJS error:", error.text);
        setSuccessMessage("❌ Failed to send. Please try again later.");
      }
    );
  };

  return (
    <>
      <button className="inquiry-btn" onClick={() => setShowModal(true)}>
        Send Inquiry
      </button>

      {showModal && (
        <div className="inquiry-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="inquiry-modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowModal(false)}>×</button>
            <h2>Send Inquiry</h2>

            {successMessage ? (
              <div className="success-message">
                <p>{successMessage}</p>
                <button onClick={() => { setShowModal(false); setSuccessMessage(""); }}>Close</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="user_name" placeholder="Your Name" required />

                <label>Email</label>
                <input type="email" name="user_email" placeholder="Your Email" required />

                <label>Phone</label>
                <input type="tel" name="user_phone" placeholder="Your Phone" required />

                <label>Message</label>
                <textarea name="message" placeholder="Your Message"></textarea>

                <button type="submit">Send</button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}