import React, { useEffect, useState } from "react";

export default function Refund() {
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/page/refund")
      .then((res) => res.json())
      .then((data) => {
        setPage(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []); 

  if (loading) return <p style={{ paddingTop: "130px", textAlign: "center" }}>Loading...</p>;

  if (!page) return <p style={{ paddingTop: "130px", textAlign: "center" }}>Content not found.</p>;

  return (
    <div style={{ paddingTop: "130px", maxWidth: "800px", margin: "auto" }}>
      <h1>{page.title}</h1>
      <p>{page.content}</p>
    </div>
  );
}