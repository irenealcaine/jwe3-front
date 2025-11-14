import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import dinoPlaceholder from "./../../assets/dino.webp";

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
      <img
        src={
          dino.image
            ? `https://jwe3-api.up.railway.app${dino.image}`
            : dinoPlaceholder
        }
      />
      <div>
        <h2>Description</h2>
        <p>{dino.description || "FALTA DESCRIPCION"} </p>
      </div>
      <div>
        <h2>Discovery</h2>
        <p>{dino.discovery || "FALTA DISCOVERY"}</p>
      </div>
      <div>
        <h2>Paleology</h2>
        <p>{dino.paleology || "FALTA PALEOLOGY"}</p>
      </div>
      <div>
        <h2>Era</h2>
        <p>{dino.era || "FALTA ERA"}</p>
      </div>
      <div>
        <h2>Family</h2>
        <p>{dino.family || "FALTA FAMILY"}</p>
      </div>
      <div>
        <h2>Genus</h2>
        <p>{dino.genus || "FALTA GENUS"}</p>
      </div>
      <div>
        <h2>Height</h2>
        <p>{dino.height || "FALTA HEIGHT"} m</p>
      </div>
      <div>
        <h2>Length</h2>
        <p>{dino.length || "FALTA LENGTH"} m</p>
      </div>
      <div>
        <h2>Weight</h2>
        <p>{dino.weight || "FALTA WEIGHT"} kg</p>
      </div>
    </div>
  );
};

export default DinoDetailsPage;
