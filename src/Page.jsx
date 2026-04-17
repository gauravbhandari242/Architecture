import { useParams } from "react-router-dom";
import pages from "../data/pages";

const Page = () => {
  const { type } = useParams();
  const page = pages[type];

  if (!page) {
    return <h2>Page not found</h2>;
  }

  return (
    <div>
      <h1>{page.title}</h1>
      {page.content.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
};

export default Page;