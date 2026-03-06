import React from "react";

const testimonialData = [
  {
    text: `I worked with Sashakt Architect for my home project, and the experience was outstanding. They really listened to my ideas and delivered a design that exceeded my expectations.`,
    img: "img/5743c31442b54e049b95c4b298ff73fa0a4d6701.png",
  },
  {
    text: `I worked with Sashakt Architect for my home project, and the experience was outstanding. They really listened to my ideas and delivered a design that exceeded my expectations.`,
    img: "img/5743c31442b54e049b95c4b298ff73fa0a4d6701.png",
  },
  {
    text: `My experience is very good with Sashakt Architect. He is always available for us.`,
    img: "img/5743c31442b54e049b95c4b298ff73fa0a4d6701.png",
  },
  {
    text: `I worked with Sashakt Architect for my home project, and the experience was outstanding. They really listened to my ideas and delivered a design that exceeded my expectations.`,
    img: "img/5743c31442b54e049b95c4b298ff73fa0a4d6701.png",
  },

  
  {
    text: `My experience is very good with Sashakt Architect. He is always available for us.`,
    img: "img/5743c31442b54e049b95c4b298ff73fa0a4d6701.png",
  },
  {
    text: `I worked with Sashakt Architect for my home project, and the experience was outstanding. They really listened to my ideas and delivered a design that exceeded my expectations.`,
    img: "img/5743c31442b54e049b95c4b298ff73fa0a4d6701.png",
  },

  

  
];

const Customer = () => {
  return (
    <section className="testimonials">
      <div className="testimonial-hed">

    <div className="testimonial-left">
      <h4 className="tag">TESTIMONIALS</h4>
      <h2 className="section-title">What Our Clients Say</h2>
    </div>

    <div className="testimonial-scroll">
      <button>View All <span>→</span></button>
    </div>

  </div>

  
  <div className="scroll-area">
    <div className="scroll-track">
      {[...testimonialData, ...testimonialData, ...testimonialData].map(
        (item, index) => (
          <div className="card" key={index}>
            <div className="stars">★★★★★</div>
            <p>{item.text}</p>

            <div className="client">
              <img src={item.img} alt="client" />
              <div>
                <h4>Ravish</h4>
                <span>Client</span>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  </div>
</section>

  );
};

export default Customer;
