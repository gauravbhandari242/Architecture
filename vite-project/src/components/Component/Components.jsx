import "./components.css";

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
    title: "The Role of PMC in Successful Projects",
    description:
      "Practical knowledge and design insights to help you understand architecture, interiors, and project management.",
    image: "/img/dda66ff90735be53f16950b36dbdfe6015bd37d5.png",
  },
  {
    id: 3,
    title: "The Role of PMC in Successful Projects",
    description:
      "Practical knowledge and design insights to help you understand architecture, interiors, and project management.",
    image: "/img/dda66ff90735be53f16950b36dbdfe6015bd37d5.png",
  },
  {
    id: 4,
    title: "The Role of PMC in Successful Projects",
    description:
      "Practical knowledge and design insights to help you understand architecture, interiors, and project management.",
    image: "/img/dda66ff90735be53f16950b36dbdfe6015bd37d5.png",
  },
];

function Components() {
  return (
    <section className="design">
    <div className="desing-hed">

  <div className="design-left">
    <div className="design-h1">• OUR BLOGS</div>
    <div className="design-h2">Insights & Articles</div>

    <p>
      Practical knowledge and design insights to help you understand
      architecture, interiors, and project management.
    </p>
  </div>

  <div className="Work-scroll">
    <button>
      Explore All Projects <span>→</span>
    </button>
  </div>

</div>

      <div className="blogs-container">
        {blogs.map((blog) => (
          <div className="image" key={blog.id}>
            <img src={blog.image} alt={blog.title} width="357" />

            <h1>{blog.title}</h1>
            <p>{blog.description}</p>
            <button>Read more <span>→</span></button>
          </div>
          
        ))}
      </div>
      
   
    </section>
  );
}

export default Components;
