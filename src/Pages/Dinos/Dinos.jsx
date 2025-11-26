import { useEffect, useState } from "react";
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

  // const truncateText = (text, maxLength = 150) => {
  //   if (!text) return "No description available";
  //   return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  // };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-8 px-4">
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {dinos.map((dino) => (
            <Link 
              key={dino.id} 
              to={`/dinosaurs/${dino.slug}`}
              className="group bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-600 hover:shadow-2xl hover:border-gray-500 transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-gray-700">
                <img 
                  src={`https://jwe3-api.up.railway.app${dino.image}`} 
                  alt={dino.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3">
                  <span className="bg-black bg-opacity-60 text-white px-2 py-1 rounded-full text-xs font-medium">
                    {dino.era || "Unknown Era"}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-2">
                {/* Title */}
                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {dino.name}
                </h2>

                {/* Diet Badge */}
                <div className="mb-0s">
                  {dino.diet.map((dietType, index) => (

                  <span key={index} className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    dietType.includes('Carnivore') 
                      ? 'bg-red-900 text-red-200' 
                      : dietType.includes('Herbivore')
                      ? 'bg-green-900 text-green-200'
                      : 'bg-blue-900 text-blue-200'
                  }`}>
                    {dietType || 'Unknown Diet'}
                  </span>
                  ))}
                </div>

                

                
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
