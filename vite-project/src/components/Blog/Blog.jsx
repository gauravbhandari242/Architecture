import React, { useState } from "react";


const faqData = [
  {
    question: "What industries do you serve?",
    answer:
      "We work across residential, commercial, hospitality, and mixed-use developments."
  },
  {
    question: "Do you provide turnkey solutions?",
    answer:
      "Yes, we manage projects from concept to completion."
  },
  {
    question: "How long does a project take?",
    answer:
      "Timelines depend on scope, approvals, and execution complexity."
  },
  {
    question: "Do you offer interior design?",
    answer:
      "Yes, we provide premium interior design and decoration services."
  },
  {
    question: "Can designs be customized?",
    answer:
      "Absolutely. Every project is tailored to client needs and budget."
  },
  {
    question: "Do you handle approvals?",
    answer:
      "Yes, we assist with required drawings and authority approvals."
  },
  {
    question: "What is your design process?",
    answer:
      "Our process includes concept, design development, and execution."
  }
];

export default function Blog() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section  id="Blog" className="faq">
      <div className="faq-wrapper">

              {/* lefte CONTENT */}
        <div className="faq-lefte">
          <span className="faq-tag">• FAQs</span>
          <h2>Frequently asked<br />questions</h2>
             </div>
  

        {/* LEFT IMAGE */}
        <div className="faq-left">
          <img
            src="0086eda015496c49ada9a2eb92f069946222ebde.png"
            alt="Architecture"
          />
        </div>

          <div className="faq-list">
            {faqData.map((item, index) => (
              <div
                className={`faq-item ${openIndex === index ? "open" : ""}`}
                key={index}
                onClick={() => toggle(index)}
              >
                <div className="faq-question">
                  <span>{item.question}</span>
                  <span className="arrow">
                    {openIndex === index ? "x" : "✓"}
                  </span>
                </div>

                {openIndex === index && (
                  <div className="faq-answer">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
      

      </div>
    </section>
  );
}
