import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Header/Navbar";
import Hero from "./components/Header/Hero";
import ScrollToTop from "./components/ScrollToTop";

import Component from "./components/Componenttt/Compon";
import Service from "./components/Servicecopy/Service";
import About from "./components/About/About";
import Work from "./components/work/Work";
import Working from "./components/working/Working";
import Blog from "./components/blog/Blog";
import Contact from "./components/Contact/Contact";
import Footer from "./components/FooterSection/Footer";
import Customer from "./components/Customer_service/Customer";
import Abouts from "./components/abouts/AboutPage";
import Founder from "./components/Founder/Founder";

// Pages
import ExploreButton from "./components/working/explorework";
import ExploreAllBlogPage from "./components/blog/exploreblog";
import TestimonialsPage from "./components/Customer_service/TestimonialsPage.jsx";


// Footer Inquiry Modal
import InquiryModal from "./components/FooterSection/InquiryModal";

// Backend Pages (Terms / Privacy / Refund) placeholders
import Terms from "./components/FooterSection/Terms";
import Privacy from "./components/FooterSection/Privacy";
import Refund from "./components/FooterSection/Refund";
import AboutPage from "./components/abouts/AboutPage";

/* HOME PAGE */
function Home() {
  return (
    <>
      <Hero />
      <About />
      <Service />
      <Work />
      <Working />
      <Blog />
      <Contact />
      <Customer />
      <Component />
    </>
  );
}

function App() {
  return (
    <div className="app">
      <Navbar />
      <ScrollToTop />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* About / Service */}
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/service" element={<Service />} />

        {/* Work Pages */}
        <Route path="/explorework" element={<ExploreButton />} />
        <Route path="/projects" element={<ExploreButton />} />
                <Route path="/testimonials" element={<TestimonialsPage />} />


        {/* Blog Pages */}
        <Route path="/exploreblog" element={<ExploreAllBlogPage />} />
        <Route path="/explore-all-blog" element={<ExploreAllBlogPage />} />
        <Route path="/blog" element={<Blog />} />

        {/* Contact */}
        <Route path="/contact" element={<Contact />} />

        {/* Footer static pages */}
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/refund" element={<Refund />} />

        {/* Fallback route for 404 */}
        <Route
          path="*"
          element={
            <h2 style={{ padding: "50px", textAlign: "center" }}>
              404 Page Not Found
            </h2>
          }
        />
      </Routes>

      {/* Footer */}
      <Footer
        links={{
          terms: "/terms",
          privacy: "/privacy",
          refund: "/refund",
        }}
      />
    </div>
  );
}

export default App;