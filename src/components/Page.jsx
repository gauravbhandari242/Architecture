import { useParams } from "react-router-dom";
import pages from "../data/pages";

const Page = () => {
  const { type } = useParams();

  console.log("URL PARAM:", type); // 👈 DEBUG (IMPORTANT)

  const page = pages[type];

  console.log("PAGE FOUND:", page); // 👈 DEBUG

  if (!page) {
    return <h2>Content not found</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{page.title}</h1>

      {page.content.map((item, i) => (
        <p key={i}>{item}</p>
      ))}
    </div>
  );
};

export default Page;