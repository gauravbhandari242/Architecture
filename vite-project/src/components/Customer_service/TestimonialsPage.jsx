import React, { useRef, useState, useEffect } from "react";

const testimonialData = [
  {
    text: "I worked with Sashakt Architect for my home project, and the experience was outstanding.",
    img: "/img/5743c31442b54e049b95c4b298ff73fa0a4d6701.png",
    name: "Ravish",
    role: "Client",
  },
  {
    text: "My experience is very good with Sashakt Architect. He is always available for us.",
    img: "/img/5743c31442b54e049b95c4b298ff73fa0a4d6701.png",
    name: "Amit",
    role: "Client",
  },
  {
    text: "Amazing design and support throughout the project.",
    img: "/img/5743c31442b54e049b95c4b298ff73fa0a4d6701.png",
    name: "Neha",
    role: "Client",
  },
  {
    text: "Creative, professional, and attentive to all details. Highly recommend!",
    img: "/img/5743c31442b54e049b95c4b298ff73fa0a4d6701.png",
    name: "Priya",
    role: "Client",
  },
];

const TestimonialsPage = () => {
  const trackRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll every 3s
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? testimonialData.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === testimonialData.length - 1 ? 0 : currentIndex + 1);
  };

  // Swipe support for mobile
  useEffect(() => {
    const track = trackRef.current;
    let startX = 0;
    let endX = 0;

    const touchStart = (e) => (startX = e.touches[0].clientX);
    const touchMove = (e) => (endX = e.touches[0].clientX);
    const touchEnd = () => {
      if (startX - endX > 50) nextSlide();
      if (endX - startX > 50) prevSlide();
    };

    track.addEventListener("touchstart", touchStart);
    track.addEventListener("touchmove", touchMove);
    track.addEventListener("touchend", touchEnd);

    return () => {
      track.removeEventListener("touchstart", touchStart);
      track.removeEventListener("touchmove", touchMove);
      track.removeEventListener("touchend", touchEnd);
    };
  }, [currentIndex]);

  // Inline Styles
  const styles = {
    section: { padding: "120px 20px", maxWidth: "1200px", margin: "0 auto", fontFamily: "Arial, sans-serif" },
    header: { textAlign: "center", marginBottom: "40px"  },
    tag: { color: "black", fontWeight: "bold", letterSpacing: "2px" },
    title: { fontSize: "32px", margin: "10px 0" },
    subtitle: { fontSize: "16px", color: "#555" },
    carouselWrapper: { position: "relative", overflow: "hidden" },
    scrollArea: { overflow: "hidden" },
    scrollTrack: {
      display: "flex",
      transition: "transform 0.5s ease-in-out",
      transform: `translateX(-${currentIndex * 100}%)`,
    },
    card: {
      minWidth: "100%",
      padding: "40px",
      margin: "20px",
      background: "#fff",
      borderRadius: "15px",
      boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
      textAlign: "left",
    },
    stars: { color: "#ffcc00", marginBottom: "15px" },
    client: { display: "flex", alignItems: "center", marginTop: "20px" },
    clientImg: { width: "50px", height: "50px", borderRadius: "50%", marginRight: "15px" },
    arrow: {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      background: "#ff6600",
      color: "#fff",
      border: "none",
      fontSize: "24px",
      padding: "10px",
      borderRadius: "50%",
      cursor: "pointer",
      zIndex: 10,
    },
    arrowLeft: { left: "10px" },
    arrowRight: { right: "10px" },
    dots: { textAlign: "center", marginTop: "20px" },
    dot: {
      display: "inline-block",
      width: "12px",
      height: "12px",
      background: "#ccc",
      borderRadius: "50%",
      margin: "0 5px",
      cursor: "pointer",
    },
    dotActive: { background: "#ff6600" },
  };

  return (
    <section style={styles.section}>
      <div style={styles.header}>
        <h4 style={styles.tag}>TESTIMONIALS</h4>
        <h1 style={styles.title}>What Our Clients Say</h1>
        <p style={styles.subtitle}>Real feedback from our happy clients</p>
      </div>

      <div style={styles.carouselWrapper}>
        <button style={{ ...styles.arrow, ...styles.arrowLeft }} onClick={prevSlide}>
          &#8592;
        </button>

        <div style={styles.scrollArea} ref={trackRef}>
          <div style={styles.scrollTrack}>
            {testimonialData.map((item, index) => (
              <div style={styles.card} key={index}>
                <div style={styles.stars}>★★★★★</div>
                <p>{item.text}</p>
                <div style={styles.client}>
                  <img style={styles.clientImg} src={item.img} alt={item.name} />
                  <div>
                    <h4>{item.name}</h4>
                    <span>{item.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button style={{ ...styles.arrow, ...styles.arrowRight }} onClick={nextSlide}>
          &#8594;
        </button>
      </div>

      <div style={styles.dots}>
        {testimonialData.map((_, index) => (
          <span
            key={index}
            style={currentIndex === index ? { ...styles.dot, ...styles.dotActive } : styles.dot}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsPage;