import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FamliesPage = () => {
  const [families, setFamilies] = useState({});

  useEffect(() => {
    async function fetchFamilies() {
      const res = await fetch(`https://jwe3-api.up.railway.app/api/families`);
      const data = await res.json();

      //   const sortedData = data.sort((a, b) => a.name.localeCompare(b.name));
      //   setFamilies(sortedData);

      console.log(data);
      setFamilies(data);
    }
    fetchFamilies();
  }, []);

  return (
    <div>
      <h1>Families</h1>
      {Object.entries(families).map(([familyName, familyData]) => (
        <div key={familyName}>
          <h2>{familyName}</h2>

          {familyData.dinosaurs.map((dinosaur) => (
            <Link key={dinosaur.slug} to={`/dinosaurs/${dinosaur.slug}`}>
              <h3>{dinosaur.name}</h3>
              <img
                src={`https://jwe3-api.up.railway.app${dinosaur.image}`}
                alt={dinosaur.name}
              />
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FamliesPage;
