import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FamliesPage = () => {
  const [families, setFamilies] = useState([]);

  useEffect(() => {
    async function fetchFamilies() {
      const res = await fetch(`https://jwe3-api.up.railway.app/api/families`);
      const data = await res.json();
      const sortedData = data.sort((a, b) => a.name.localeCompare(b.name));
      setFamilies(sortedData);
      // console.log(sortedData);
      // setFamilies(data);
    }
    fetchFamilies();
  }, []);

  // Handle scroll to anchor after data loads
  useEffect(() => {
    if (families.length > 0 && window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [families]);

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
                  FAMILY DATABASE
                </span>
                <h1 className="text-4xl md:text-6xl font-black mb-4">
                  <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent drop-shadow-sm font-mono">
                    [FAMILIES]
                  </span>
                </h1>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto font-mono">
                  <span className="text-cyan-400">&gt;</span> Explore dinosaur
                  families and their members
                </p>
              </div>
            </div>
          </div>

          {/* HUD Loading State */}
          {families.length === 0 && (
            <div className="text-center">
              <div className="relative inline-block">
                <div className="w-16 h-16 border-4 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin"></div>
                <div className="absolute inset-2 w-12 h-12 border-2 border-purple-400/20 border-r-purple-400 rounded-full animate-spin animate-reverse"></div>
              </div>
              <p className="text-cyan-300 mt-6 font-mono text-lg">
                <span className="text-cyan-400">[</span>LOADING FAMILIES
                <span className="text-cyan-400">]</span>
                <span className="animate-pulse">...</span>
              </p>
            </div>
          )}

          {/* Family Sections */}
          <div className="space-y-12">
            {families.map((family) => (
              <div key={family.name} id={family.name.toLowerCase().replace(/\s+/g, '-')} className="relative scroll-mt-24">
                {/* Family Header */}
                <div className="mb-6">
                  <div className="relative inline-block">
                    <div className="absolute -inset-2 border border-purple-400/30 rounded-lg"></div>
                    <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-xl px-6 py-3 rounded-lg border border-purple-500/50">
                      <h2 className="text-2xl md:text-3xl font-black font-mono">
                        <span className="text-purple-400">&gt; </span>
                        <span className="bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
                          {family.name}
                        </span>
                      </h2>
                    </div>
                  </div>
                </div>

                {/* Dinosaurs Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {family.dinosaurs.map((dinosaur) => (
                    <Link
                      key={dinosaur.slug}
                      to={`/dinosaurs/${dinosaur.slug}`}
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
                          src={`https://jwe3-api.up.railway.app${dinosaur.image}`}
                          alt={dinosaur.name}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300 filter brightness-110 contrast-110"
                        />

                        {/* Holographic overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 via-transparent to-transparent"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-300/5 to-transparent group-hover:animate-pulse"></div>
                      </div>

                      {/* Content Panel */}
                      <div className="p-4 bg-black/30">
                        <h3 className="text-base md:text-lg font-bold group-hover:text-cyan-300 transition-colors font-mono">
                          <span className="text-cyan-400/60">&gt; </span>
                          {dinosaur.name}
                        </h3>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* HUD Footer Stats */}
          {Object.keys(families).length > 0 && (
            <div className="text-center mt-16">
              <div className="inline-block bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-xl px-8 py-4 rounded-xl border border-cyan-500/30">
                <p className="text-cyan-300 font-mono flex items-center gap-3">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span className="text-cyan-400">[</span>DATABASE STATUS
                  <span className="text-cyan-400">]</span>
                  <span className="text-white font-bold">
                    {Object.keys(families).length}
                  </span>
                  <span className="text-gray-300">families loaded</span>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FamliesPage;
