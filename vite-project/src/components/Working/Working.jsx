
import "./Working.css"
const projects = [
  {
    id: 1,
    image: "img/8f8506c093697afbdcd80e5d45e7685ab8caaba1.png",
    title: "GREENFIELD — 2025 — Dehradun",
  },
  {
    id: 2,
    image: "img/8f8506c093697afbdcd80e5d45e7685ab8caaba1.png",
    title: "GREENFIELD — 2025 — Dehradun",
  },
  {
    id: 3,
    image: "img/8f8506c093697afbdcd80e5d45e7685ab8caaba1.png",
    title: "GREENFIELD — 2025 — Dehradun",
  },
  {
    id: 4,
    image: "img/8f8506c093697afbdcd80e5d45e7685ab8caaba1.png",
    title: "GREENFIELD — 2025 — Dehradun",
  },
  {
    id: 5,
    image: "img/8f8506c093697afbdcd80e5d45e7685ab8caaba1.png",
    title: "GREENFIELD — 2025 — Dehradun",
  },
  {
    id: 6,
    image: "img/8f8506c093697afbdcd80e5d45e7685ab8caaba1.png",
    title: "GREENFIELD — 2025 — Dehradun",
  },
];

const Working = () => {
  return (
    <section className="Working">
    <div className="scrol">

  <div className="heading-left">
    <h1 className="Working-GET">
      • GET TO KNOW OUR WORK
    </h1>

    <h2 className="Working-POST">
      Delivering thoughtfully designed spaces
    </h2>
  </div>

  <div className="explore-wrapper">
    <a href="/projects" className="explore-btn">
      Explore All Projects →
    </a>
  </div>

</div>

      <div className="container">
        <div className="wrapper">
          {projects.map((project) => (
            <div className="cardd" key={project.id}>
              <img src={project.image} alt={project.title} />
              <p>{project.title}</p>
            </div>
          ))}
        </div>
      </div>




    </section>
  );
};

export default Working;
