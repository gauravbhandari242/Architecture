import React from "react";
import "./exploreblog.css";

const blogs = [
  {
    id: 1,
    title: "The Role of PMC in Successful Projects",
    description:
      "Practical knowledge and design insights to help you understand architecture, interiors, and project management.",
    image: "/img/dda66ff90735be53f16950b36dbdfe6015bd37d5.png",
  },
  {
    id: 2,
    title: "Urban Design Insights",
    description:
      "Learn how urban spaces are planned for efficiency and aesthetics.",
    image: "/img/dda66ff90735be53f16950b36dbdfe6015bd37d5.png",
  },
  {
    id: 3,
    title: "Residential Complex Design Tips",
    description:
      "Smart tips for designing residential spaces for comfort and beauty.",
    image: "/img/dda66ff90735be53f16950b36dbdfe6015bd37d5.png",
  },
  {
    id: 4,
    title: "Corporate Office Interiors",
    description:
      "Best practices for designing modern corporate offices that inspire.",
    image: "/img/dda66ff90735be53f16950b36dbdfe6015bd37d5.png",
  },
  {
    id: 5,
    title: "The Role of PMC in Successful Projects",
    description:
      "Practical knowledge and design insights to help you understand architecture, interiors, and project management.",
    image: "/img/dda66ff90735be53f16950b36dbdfe6015bd37d5.png",
  },
  {
    id: 6,
    title: "Urban Design Insights",
    description:
      "Learn how urban spaces are planned for efficiency and aesthetics.",
    image: "/img/dda66ff90735be53f16950b36dbdfe6015bd37d5.png",
  },
  {
    id: 7,
    title: "Residential Complex Design Tips",
    description:
      "Smart tips for designing residential spaces for comfort and beauty.",
    image: "/img/dda66ff90735be53f16950b36dbdfe6015bd37d5.png",
  },
  {
    id: 8,
    title: "Corporate Office Interiors",
    description:
      "Best practices for designing modern corporate offices that inspire.",
    image: "/img/dda66ff90735be53f16950b36dbdfe6015bd37d5.png",
  },
  {
    id: 9,
    title: "The Role of PMC in Successful Projects",
    description:
      "Practical knowledge and design insights to help you understand architecture, interiors, and project management.",
    image: "/img/dda66ff90735be53f16950b36dbdfe6015bd37d5.png",
  },
  {
    id: 10,
    title: "Urban Design Insights",
    description:
      "Learn how urban spaces are planned for efficiency and aesthetics.",
    image: "/img/dda66ff90735be53f16950b36dbdfe6015bd37d5.png",
  },
  {
    id: 11,
    title: "Residential Complex Design Tips",
    description:
      "Smart tips for designing residential spaces for comfort and beauty.",
    image: "/img/dda66ff90735be53f16950b36dbdfe6015bd37d5.png",
  },
  {
    id: 12,
    title: "Corporate Office Interiors",
    description:
      "Best practices for designing modern corporate offices that inspire.",
    image: "/img/dda66ff90735be53f16950b36dbdfe6015bd37d5.png",
  },
];

const ExploreAllBlogPage = () => {
  return (
    <section className="explore-blog-page">
      <h2 className="blog-small-heading">• OUR BLOGS</h2>
      <h1 className="blog-main-heading">Insights & Articles</h1>

      <div className="blog-page-container">
        {blogs.map((blog) => (
          <div className="blog-page-card" key={blog.id}>
            <img src={blog.image} alt={blog.title} className="blog-page-img" />
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
            <button>
              Read More <span>→</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreAllBlogPage;