import React, { useState } from "react";


function Services() {
  const [active, setActive] = useState(null);

  const servicesData = [
    {
  number: "01",
  title: (
    <>
      ARCHITECTURAL <br /> DESIGN
    </>
  ),
  img: "img/Screenshot (39).png",
  desc: "We create innovative architectural concepts from idea to execution with detailed planning and precision."
},

{
  number: "02",
  title: (
    <>
      RESIDENTIAL <br /> ARCHITECTURE
    </>
  ),
  img: "img/Screenshot (39).png",
  desc: "Modern and functional residential designs tailored perfectly to lifestyle and comfort."
},
{
  number: "03",
  title: (
    <>
      COMMERCIAL <br /> ARCHITECTURE
    </>
  ),
  img: "img/Screenshot (39).png",
  desc: "Professional commercial spaces designed for performance, branding, and aesthetics."
},
{
  number: "04",
  title: (
    <>
      INTERIOR DESIGN /<br /> DECORATION
    </>
  ),
  img: "img/Screenshot (39).png",
  desc: "Elegant interior solutions combining creativity, comfort, and luxury."
},
{
  number: "05",
  title: (
    <>
      PROJECT <br /> MANAGEMENT
    </>
  ),
  img: "img/Screenshot (39).png",
  desc: "Complete project supervision ensuring quality execution and on-time delivery."
}

  ];

  const toggleService = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section id="Services" className="services-section">
      
      <div className="services-header">
        <div className="section-subtitle">• OUR SERVICES</div>
        <h1 className="section-heading">From Idea To Final Product</h1>
      </div>

      <div className="services-container">
        {servicesData.map((service, index) => (
          <div key={index} className="service-wrapper">
            
            <div
              className="service-item"
              onClick={() => toggleService(index)}
            >
              <div className="service-left">
                <span className="service-number">
                  {service.number}
                </span>
                <span className="service-title">
                  {service.title}
                </span>
              </div>

              <span className="service-icon">
                {active === index ? "−" : "+"}
              </span>
            </div>

            <div className={`service-content ${active === index ? "active" : ""}`}>
              <div className="content-inner">
                <img src={service.img} alt={service.title} />
                <p>{service.desc}</p>
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}

export default Services;
