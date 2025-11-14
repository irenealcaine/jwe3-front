import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DinoDetailsPage = () => {
  const [dino, setDino] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    async function fetchDinos() {
      const res = await fetch(
        `https://jwe3-api.up.railway.app/api/dinosaurs/${slug}`
      );
      const data = await res.json();
      setDino(data);
    }
    fetchDinos();
  }, []);

  return (
    <div className="header">
      <h1 className="title">{dino.name}</h1>
      {console.log(dino)}
      <img src={`https://jwe3-api.up.railway.app${dino.image}`} />
    </div>
  );
};

export default DinoDetailsPage;
