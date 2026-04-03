
import "./explorework.css";

const projects = [
  {
    id: 1,
    image: "/img/8f8506c093697afbdcd80e5d45e7685ab8caaba1.png",
    title: "GREENFIELD — 2025 — Dehradun",
  },
  {
    id: 2,
    image: "/img/8f8506c093697afbdcd80e5d45e7685ab8caaba1.png",
    title: "GREENFIELD — 2025 — Dehradun",
  },
  {
    id: 3,
    image: "/img/8f8506c093697afbdcd80e5d45e7685ab8caaba1.png",
    title: "GREENFIELD — 2025 — Dehradun",
  },
  {
    id: 4,
    image: "/img/8f8506c093697afbdcd80e5d45e7685ab8caaba1.png",
    title: "GREENFIELD — 2025 — Dehradun",
  },
    {
    id: 5,
    image: "/img/8f8506c093697afbdcd80e5d45e7685ab8caaba1.png",
    title: "GREENFIELD — 2025 — Dehradun",
  },
  {
    id: 6,
    image: "/img/8f8506c093697afbdcd80e5d45e7685ab8caaba1.png",
    title: "GREENFIELD — 2025 — Dehradun",
  },
  {
    id: 7,
    image: "/img/8f8506c093697afbdcd80e5d45e7685ab8caaba1.png",
    title: "GREENFIELD — 2025 — Dehradun",
  },
  {
    id: 8,
    image: "/img/8f8506c093697afbdcd80e5d45e7685ab8caaba1.png",
    title: "GREENFIELD — 2025 — Dehradun",
  },
  {
  id: 9,
    image: "/img/8f8506c093697afbdcd80e5d45e7685ab8caaba1.png",
    title: "GREENFIELD — 2025 — Dehradun",
  },
];

const ExploreButton = () => {
  return (
    <section className="explore-page">
    <h1 className="one-title">
      • GET TO KNOW OUR WORK
    </h1>

      <h1 className="explore-title">Delivering thoughtfully designed spaces</h1>

      <div className="explore-container">
        {projects.map((project) => (
          <div className="explore-card" key={project.id}>
            <img src={project.image} alt={project.title} className="explore-img"/>
            <p>{project.title}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default ExploreButton;