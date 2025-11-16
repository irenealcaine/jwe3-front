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

  const truncateText = (text, maxLength = 150) => {
    if (!text) return "No description available";
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  };

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
              <div className="p-6">
                {/* Title */}
                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {dino.name}
                </h2>

                {/* Diet Badge */}
                <div className="mb-3">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    dino.diet && dino.diet.includes('Carnivore') 
                      ? 'bg-red-900 text-red-200' 
                      : dino.diet && dino.diet.includes('Herbivore')
                      ? 'bg-green-900 text-green-200'
                      : 'bg-blue-900 text-blue-200'
                  }`}>
                    {Array.isArray(dino.diet) ? dino.diet.join(', ') : dino.diet || 'Unknown Diet'}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  {truncateText(dino.description)}
                </p>

                {/* Stats */}
                <div className="mt-4 pt-4 border-t border-gray-600 flex justify-between text-xs text-gray-400">
                  <span>Height: {dino.height || 'N/A'} m</span>
                  <span>Weight: {dino.weight || 'N/A'} kg</span>
                </div>

                {/* Hover indicator */}
                <div className="mt-4 flex items-center text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm">Learn more</span>
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
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
