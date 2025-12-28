import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DinosPage = () => {
  const [dinos, setDinos] = useState([]);

  useEffect(() => {
    async function fetchDinos() {
      const res = await fetch(`https://jwe3-api.up.railway.app/api/dinosaurs`);
      const data = await res.json();
      // Sort dinosaurs alphabetically by name
      const sortedData = data.sort((a, b) => a.name.localeCompare(b.name));
      setDinos(sortedData);
    }
    fetchDinos();
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Dinosaurs
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover the magnificent creatures that once ruled the Earth
          </p>
        </div>

        {/* Loading State */}
        {dinos.length === 0 && (
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
            <p className="text-gray-300 mt-4">Loading dinosaurs...</p>
          </div>
        )}

        {/* Dinosaurs Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
          {dinos.map((dino) => (
            <Link
              key={dino.id}
              to={`/dinosaurs/${dino.slug}`}
              className="group bg-gray-800 rounded-sm overflow-hidden transition-all duration-300 transform "
            >
              {/* Image Container */}
              <div className="relative overflow-hidden bg-gray-700">
                <img
                  src={`https://jwe3-api.up.railway.app${dino.image}`}
                  alt={dino.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />

                <div className="absolute top-1 right-1 space-x-1">
                  {dino.diet.map((dietType, index) => (

                    <span key={index} className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${dietType.includes('Carnivore')
                      ? 'bg-red-900 text-red-200'
                      : dietType.includes('Herbivore')
                        ? 'bg-green-900 text-green-200'
                        : dietType.includes('Piscivore')
                          ? 'bg-blue-900 text-blue-200'
                          : dietType.includes('Omnivore')
                            ? 'bg-purple-900 text-purple-200'
                            : 'bg-gray-900 text-gray-200'
                      }`}>
                      {
                        dietType.includes('Carnivore')
                          ? '🥩'
                          : dietType.includes('Herbivore')
                            ? '🌿'
                            : dietType.includes('Piscivore')
                              ? '🐟'
                              : dietType.includes('Omnivore')
                                ? '🍖'
                                : '❓'}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-2">
                {/* Title */}
                <h2 className="md:text-lg font-bold group-hover:text-blue-400 transition-colors">
                  {dino.name}
                </h2>


              </div>
            </Link>
          ))}
        </div>

        {/* Footer message */}
        {dinos.length > 0 && (
          <div className="text-center mt-16">
            <p className="text-gray-400">
              Showing {dinos.length} prehistoric species
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DinosPage;
