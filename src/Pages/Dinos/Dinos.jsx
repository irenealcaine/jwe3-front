import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DinosPage = () => {
  const [dinos, setDinos] = useState([]);
  const [filteredDinos, setFilteredDinos] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [eraFilter, setEraFilter] = useState("");
  const [eras, setEras] = useState([]);

  useEffect(() => {
    async function fetchDinos() {
      const res = await fetch(`https://jwe3-api.up.railway.app/api/dinosaurs`);
      const data = await res.json();
      // Sort dinosaurs alphabetically by name
      const sortedData = data.sort((a, b) => a.name.localeCompare(b.name));
      setDinos(sortedData);
      setFilteredDinos(sortedData);
      
      // Extract unique eras
      const uniqueEras = [...new Set(sortedData.map(dino => dino.era).filter(Boolean))];
      setEras(uniqueEras.sort());
    }
    fetchDinos();
  }, []);

  // Apply filters
  useEffect(() => {
    let filtered = dinos;

    if (nameFilter) {
      filtered = filtered.filter(dino =>
        dino.name.toLowerCase().includes(nameFilter.toLowerCase())
      );
    }

    if (eraFilter) {
      filtered = filtered.filter(dino => dino.era === eraFilter);
    }

    setFilteredDinos(filtered);
  }, [nameFilter, eraFilter, dinos]);

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
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-900/50 to-blue-900/50 border border-cyan-400/50 rounded-lg hover:border-cyan-300 transition-all duration-300 text-cyan-300 hover:text-cyan-100 backdrop-blur-sm hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <span className="mr-2">←</span>
              <span className="text-sm font-mono">BACK TO HOME</span>
            </Link>
          </div>

          {/* Gaming Header */}
          <div className="text-center mb-12">
            <div className="relative inline-block">
              {/* Header HUD Frame */}
              <div className="absolute -inset-4 border-2 border-cyan-400/30 rounded-2xl">
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyan-400 rounded-tl-2xl"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-cyan-400 rounded-tr-2xl"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-cyan-400 rounded-bl-2xl"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-cyan-400 rounded-br-2xl"></div>
              </div>

              <div className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl p-8 rounded-2xl border border-cyan-500/20">
                <span className="inline-block px-4 py-2 bg-cyan-500/20 border border-cyan-400/50 rounded-full text-cyan-300 text-sm font-mono mb-6">
                  SPECIMEN DATABASE
                </span>
                <h1 className="text-4xl md:text-6xl font-black mb-4">
                  <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent drop-shadow-sm font-mono">
                    [DINOSAURS]
                  </span>
                </h1>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto font-mono">
                  <span className="text-cyan-400">&gt;</span> Discover the magnificent creatures that once ruled the Earth
                </p>
              </div>
            </div>
          </div>

          {/* Filters Section */}
          <div className="mb-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl p-6 rounded-xl border border-cyan-500/30">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name Filter */}
                <div className="relative">
                  <label className="block text-cyan-300 text-sm font-mono mb-2">
                    <span className="text-cyan-400">&gt;</span> FILTER BY NAME
                  </label>
                  <input
                    type="text"
                    value={nameFilter}
                    onChange={(e) => setNameFilter(e.target.value)}
                    placeholder="Search dinosaur..."
                    className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-mono"
                  />
                </div>

                {/* Era Filter */}
                <div className="relative">
                  <label className="block text-cyan-300 text-sm font-mono mb-2">
                    <span className="text-cyan-400">&gt;</span> FILTER BY ERA
                  </label>
                  <select
                    value={eraFilter}
                    onChange={(e) => setEraFilter(e.target.value)}
                    className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-mono appearance-none cursor-pointer"
                  >
                    <option value="">All eras</option>
                    {eras.map((era, index) => (
                      <option key={index} value={era}>
                        {era}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Active Filters Display */}
              {(nameFilter || eraFilter) && (
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-cyan-400 text-sm font-mono">Active filters:</span>
                  {nameFilter && (
                    <button
                      onClick={() => setNameFilter("")}
                      className="px-3 py-1 bg-cyan-900/50 text-cyan-200 rounded-full text-xs font-mono border border-cyan-400/50 hover:bg-cyan-800/50 transition-all"
                    >
                      Name: {nameFilter} ✕
                    </button>
                  )}
                  {eraFilter && (
                    <button
                      onClick={() => setEraFilter("")}
                      className="px-3 py-1 bg-purple-900/50 text-purple-200 rounded-full text-xs font-mono border border-purple-400/50 hover:bg-purple-800/50 transition-all"
                    >
                      Era: {eraFilter} ✕
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* HUD Loading State */}
          {filteredDinos.length === 0 && dinos.length === 0 && (
            <div className="text-center">
              <div className="relative inline-block">
                <div className="w-16 h-16 border-4 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin"></div>
                <div className="absolute inset-2 w-12 h-12 border-2 border-purple-400/20 border-r-purple-400 rounded-full animate-spin animate-reverse"></div>
              </div>
              <p className="text-cyan-300 mt-6 font-mono text-lg">
                <span className="text-cyan-400">[</span>LOADING SPECIMENS<span className="text-cyan-400">]</span>
                <span className="animate-pulse">...</span>
              </p>
            </div>
          )}

          {/* No results message */}
          {filteredDinos.length === 0 && dinos.length > 0 && (
            <div className="text-center py-16">
              <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl p-8 rounded-xl border border-cyan-500/30 max-w-md mx-auto">
                <div className="text-6xl mb-4">🦕</div>
                <p className="text-cyan-300 font-mono text-lg mb-2">
                  <span className="text-cyan-400">[</span>NO RESULTS FOUND<span className="text-cyan-400">]</span>
                </p>
                <p className="text-gray-400 text-sm">
                  Try adjusting the search filters
                </p>
              </div>
            </div>
          )}

          {/* HUD Specimen Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filteredDinos.map((dino) => (
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

                  {/* Diet Badges */}
                  <div className="absolute top-2 right-2 space-x-1">
                    {dino.diet.map((dietType, index) => (
                      <span
                        key={index}
                        className={`inline-block px-2 py-1 rounded-full text-xs font-mono border backdrop-blur-sm ${dietType.includes('Carnivore')
                          ? 'bg-red-900/60 text-red-200 border-red-500/50'
                          : dietType.includes('Herbivore')
                            ? 'bg-green-900/60 text-green-200 border-green-500/50'
                            : dietType.includes('Piscivore')
                              ? 'bg-blue-900/60 text-blue-200 border-blue-500/50'
                              : dietType.includes('Omnivore')
                                ? 'bg-purple-900/60 text-purple-200 border-purple-500/50'
                                : 'bg-gray-900/60 text-gray-200 border-gray-500/50'
                          }`}
                      >
                        {
                          dietType.includes('Carnivore')
                            ? '🥩'
                            : dietType.includes('Herbivore')
                              ? '🌿'
                              : dietType.includes('Piscivore')
                                ? '🐟'
                                : dietType.includes('Omnivore')
                                  ? '🍖'
                                  : '❓'
                        }
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content Panel */}
                <div className="p-4 bg-black/30">
                  <h2 className="text-base md:text-lg font-bold group-hover:text-cyan-300 transition-colors font-mono">
                    <span className="text-cyan-400/60">&gt; </span>{dino.name}
                  </h2>
                </div>
              </Link>
            ))}
          </div>

          {/* HUD Footer Stats */}
          {dinos.length > 0 && (
            <div className="text-center mt-16">
              <div className="inline-block bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-xl px-8 py-4 rounded-xl border border-cyan-500/30">
                <p className="text-cyan-300 font-mono flex items-center gap-3">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span className="text-cyan-400">[</span>DATABASE STATUS<span className="text-cyan-400">]</span>
                  <span className="text-white font-bold">{filteredDinos.length}</span>
                  <span className="text-gray-300">of {dinos.length} specimens</span>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DinosPage;
