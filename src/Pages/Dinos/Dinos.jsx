import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DinosPage = () => {
  const [dinos, setDinos] = useState([]);

  useEffect(() => {
    async function fetchDinos() {
      const res = await fetch(`https://jwe3-api.up.railway.app/api/dinosaurs`);
      const data = await res.json();
      setDinos(data);
    }
    fetchDinos();
  }, []);

  return (
    <div className="header">
      <h1 className="title">dinos</h1>
      {console.log(dinos)}
      {dinos.map((dino) => (
        <Link key={dino.id} to={`/dinosaurs/${dino.slug}`}>
          <h2>{dino.name}</h2>
          <img src={`https://jwe3-api.up.railway.app${dino.image}`} />
          <p>{dino.name}</p>
          <p>{dino.era}</p>
          <p>{dino.diet}</p>
          <p>{dino.description}</p>
        </Link>
      ))}
    </div>
  );
};

export default DinosPage;
