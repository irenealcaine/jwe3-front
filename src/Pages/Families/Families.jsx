import { useEffect, useState } from "react";

const FamliesPage = () => {

    const [families, setFamilies] = useState([]);

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
            {families.map((family) => (
                <div key={family.name}>
                    <h2>{family.name}</h2>
                </div>
            ))}
        </div>
    );
};

export default FamliesPage;