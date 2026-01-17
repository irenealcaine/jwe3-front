import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const HabitatDetailsPage = () => {
  const [habitatData, setHabitatData] = useState(null);
  const { habitatName } = useParams();

  useEffect(() => {
    async function fetchHabitatData() {
      const res = await fetch(`https://jwe3-api.up.railway.app/api/habitats`);
      const data = await res.json();
      // Match habitat by converting both to lowercase and handling spaces/hyphens
      const habitat = data.find(h => 
        h.name.toLowerCase().replace(' ', '-') === habitatName.toLowerCase()
      );
      if (habitat) {
        // Sort dinosaurs alphabetically
        habitat.dinosaurs.sort((a, b) => a.name.localeCompare(b.name));
        setHabitatData(habitat);
      }
    }
    fetchHabitatData();
  }, [habitatName]);

  const getHabitatColor = (habitatName) => {
    const name = habitatName?.toLowerCase().replace(' ', '-') || '';
    const colors = {
      'terrestrial': {
        border: 'border-green-400/30',
        accent: 'text-green-400',
        gradient: 'from-green-300 to-lime-300',
        badge: 'bg-green-900/60 text-green-200 border-green-500/50',
      },
      'aerial': {
        border: 'border-sky-400/30',
        accent: 'text-sky-400',
        gradient: 'from-sky-300 to-blue-300',
        badge: 'bg-sky-900/60 text-sky-200 border-sky-500/50',
      },
      'aquatic': {
        border: 'border-blue-400/30',
        accent: 'text-blue-400',
        gradient: 'from-blue-300 to-cyan-300',
        badge: 'bg-blue-900/60 text-blue-200 border-blue-500/50',
      },
      'semi-aquatic': {
        border: 'border-teal-400/30',
        accent: 'text-teal-400',
        gradient: 'from-teal-300 to-emerald-300',
        badge: 'bg-teal-900/60 text-teal-200 border-teal-500/50',
      },
    };
    return colors[name] || colors['terrestrial'];
  };

  const colors = habitatData ? getHabitatColor(habitatData.name) : getHabitatColor('terrestrial');

  return (
    <div className="bg-black min-h-screen text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-green-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-orange-500/20 rounded-full blur-2xl animate-pulse delay-700"></div>
      </div>

      {/* Scanline Effect */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent animate-pulse"></div>
      </div>

      <div className="relative z-10 p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          {/* HUD Navigation */}
          <div className="mb-8 flex gap-4">
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-900/50 to-blue-900/50 border border-cyan-400/50 rounded-lg hover:border-cyan-300 transition-all duration-300 text-cyan-300 hover:text-cyan-100 backdrop-blur-sm hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <span className="mr-2">←</span>
              <span className="text-sm font-mono">HOME</span>
            </Link>
            <Link
              to="/habitats"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-900/50 to-blue-900/50 border border-cyan-400/50 rounded-lg hover:border-cyan-300 transition-all duration-300 text-cyan-300 hover:text-cyan-100 backdrop-blur-sm hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <span className="mr-2">←</span>
              <span className="text-sm font-mono">ALL HABITATS</span>
            </Link>
          </div>

          {/* Gaming Header */}
          {habitatData && (
            <div className="text-center mb-12">
              <div className="relative inline-block">
                {/* Header HUD Frame */}
                <div className={`absolute -inset-4 border-2 ${colors.border} rounded-2xl`}>
                  <div className={`absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 ${colors.border} rounded-tl-2xl`}></div>
                  <div className={`absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 ${colors.border} rounded-tr-2xl`}></div>
                  <div className={`absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 ${colors.border} rounded-bl-2xl`}></div>
                  <div className={`absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 ${colors.border} rounded-br-2xl`}></div>
                </div>

                <div className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl p-8 rounded-2xl border border-cyan-500/20">
                  <span className={`inline-block px-4 py-2 bg-cyan-500/20 border ${colors.border} rounded-full ${colors.accent} text-sm font-mono mb-6`}>
                    HABITAT CLASSIFICATION
                  </span>
                  <h1 className="text-4xl md:text-6xl font-black mb-4">
                    <span className={`bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent drop-shadow-sm font-mono`}>
                      [{habitatData.name.toUpperCase()}]
                    </span>
                  </h1>
                  {habitatData.description && (
                    <p className="text-base text-gray-300 max-w-3xl mx-auto mb-4 font-mono">
                      {habitatData.description}
                    </p>
                  )}
                  <p className="text-lg text-gray-300 max-w-2xl mx-auto font-mono">
                    <span className={colors.accent}>&gt;</span> {habitatData.dinosaurs.length} species in this habitat
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* HUD Loading State */}
          {!habitatData && (
            <div className="text-center">
              <div className="relative inline-block">
                <div className="w-16 h-16 border-4 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin"></div>
                <div className="absolute inset-2 w-12 h-12 border-2 border-purple-400/20 border-r-purple-400 rounded-full animate-spin animate-reverse"></div>
              </div>
              <p className="text-cyan-300 mt-6 font-mono text-lg">
                <span className="text-cyan-400">[</span>LOADING DATA<span className="text-cyan-400">]</span>
                <span className="animate-pulse">...</span>
              </p>
            </div>
          )}

          {/* HUD Specimen Grid */}
          {habitatData && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {habitatData.dinosaurs.map((dino) => (
                <Link
                  key={dino.id}
                  to={`/dinosaurs/${dino.slug}`}
                  className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-105 border border-gray-700/50 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  {/* HUD Corner Elements */}
                  <div className="absolute top-1 left-1 w-3 h-3 border-t border-l border-cyan-400/60 rounded-tl-lg z-10"></div>
                  <div className="absolute top-1 right-1 w-3 h-3 border-t border-r border-cyan-400/60 rounded-tr-lg z-10"></div>
                  <div className="absolute bottom-1 left-1 w-3 h-3 border-b border-l border-cyan-400/60 rounded-bl-lg z-10"></div>
                  <div className="absolute bottom-1 right-1 w-3 h-3 border-b border-r border-cyan-400/60 rounded-br-lg z-10"></div>

                  {/* Image Container */}
                  <div className="relative overflow-hidden bg-gray-800/50">
                    <img
                      src={`https://jwe3-api.up.railway.app${dino.image}`}
                      alt={dino.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300 filter brightness-110 contrast-110"
                    />

                    {/* Holographic overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-300/5 to-transparent group-hover:animate-pulse"></div>

                    {/* Habitat Badge */}
                    <div className="absolute top-2 right-2">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-mono border backdrop-blur-sm ${colors.badge}`}>
                        {habitatData.name}
                      </span>
                    </div>
                  </div>

                  {/* Info Panel */}
                  <div className="p-4 bg-gradient-to-b from-gray-900/60 to-black/80 backdrop-blur-sm">
                    <h3 className="font-bold text-base mb-1 text-cyan-100 font-mono truncate">
                      {dino.name}
                    </h3>
                    {dino.era && (
                      <p className="text-xs text-gray-400 font-mono">
                        <span className="text-purple-400">&gt;</span> {dino.era}
                      </p>
                    )}
                  </div>

                  {/* Scan Effect */}
                  <div className="absolute inset-0 border-2 border-cyan-400/0 group-hover:border-cyan-400/30 rounded-xl transition-colors duration-300 pointer-events-none"></div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HabitatDetailsPage;
