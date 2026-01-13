import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HabitatsPage = () => {
  const [habitats, setHabitats] = useState([]);

  useEffect(() => {
    async function fetchHabitats() {
      const res = await fetch(`https://jwe3-api.up.railway.app/api/habitats`);
      const data = await res.json();
      setHabitats(data);
    //   console.log(data);
    }
    fetchHabitats();
  }, []);

  const getHabitatIcon = (habitatName) => {
    const icons = {
      'Terrestrial': '🦖',
      'Aerial': '🦅',
      'Aquatic': '🌊',
      'Semi-Aquatic': '🏝️',
    };
    return icons[habitatName] || '🦕';
  };

  const getHabitatColor = (habitatName) => {
    const colors = {
      'Terrestrial': {
        border: 'border-green-500/30 hover:border-green-400/60',
        glow: 'from-green-500/30 to-lime-500/30',
        text: 'from-green-300 to-lime-300',
        accent: 'text-green-400',
        dot: 'bg-green-400',
        button: 'border-green-400/30 text-green-300 group-hover:border-green-400 group-hover:shadow-green-500/20'
      },
      'Aerial': {
        border: 'border-sky-500/30 hover:border-sky-400/60',
        glow: 'from-sky-500/30 to-blue-500/30',
        text: 'from-sky-300 to-blue-300',
        accent: 'text-sky-400',
        dot: 'bg-sky-400',
        button: 'border-sky-400/30 text-sky-300 group-hover:border-sky-400 group-hover:shadow-sky-500/20'
      },
      'Aquatic': {
        border: 'border-blue-500/30 hover:border-blue-400/60',
        glow: 'from-blue-500/30 to-cyan-500/30',
        text: 'from-blue-300 to-cyan-300',
        accent: 'text-blue-400',
        dot: 'bg-blue-400',
        button: 'border-blue-400/30 text-blue-300 group-hover:border-blue-400 group-hover:shadow-blue-500/20'
      },
      'Semi-Aquatic': {
        border: 'border-teal-500/30 hover:border-teal-400/60',
        glow: 'from-teal-500/30 to-emerald-500/30',
        text: 'from-teal-300 to-emerald-300',
        accent: 'text-teal-400',
        dot: 'bg-teal-400',
        button: 'border-teal-400/30 text-teal-300 group-hover:border-teal-400 group-hover:shadow-teal-500/20'
      },
    };
    return colors[habitatName] || colors['Terrestrial'];
  };

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
                  HABITAT DATABASE
                </span>
                <h1 className="text-4xl md:text-6xl font-black mb-4">
                  <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent drop-shadow-sm font-mono">
                    [HABITATS]
                  </span>
                </h1>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto font-mono">
                  <span className="text-cyan-400">&gt;</span> Explore dinosaurs by habitat type
                </p>
              </div>
            </div>
          </div>

          {/* HUD Loading State */}
          {habitats.length === 0 && (
            <div className="text-center">
              <div className="relative inline-block">
                <div className="w-16 h-16 border-4 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin"></div>
                <div className="absolute inset-2 w-12 h-12 border-2 border-purple-400/20 border-r-purple-400 rounded-full animate-spin animate-reverse"></div>
              </div>
              <p className="text-cyan-300 mt-6 font-mono text-lg">
                <span className="text-cyan-400">[</span>LOADING HABITATS<span className="text-cyan-400">]</span>
                <span className="animate-pulse">...</span>
              </p>
            </div>
          )}

          {/* Habitat Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {habitats.map((habitat) => {
              const colors = getHabitatColor(habitat.name);
              return (
                <Link key={habitat.name} to={`/habitats/${habitat.name.toLowerCase().replace(' ', '-')}`} className="group">
                  <div className="relative h-full">
                    <div className={`absolute -inset-1 bg-gradient-to-r ${colors.glow} rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    <div className={`relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl p-6 rounded-2xl border ${colors.border} transition-all duration-300 h-full flex flex-col`}>
                      <div className={`absolute top-4 left-4 w-3 h-3 ${colors.dot} rounded-full animate-pulse`}></div>
                      <div className={`absolute top-4 right-4 w-3 h-3 ${colors.dot} rounded-full animate-pulse delay-200`}></div>
                      
                      <div className="text-5xl mb-4 text-center">{getHabitatIcon(habitat.name)}</div>
                      <h2 className="text-2xl font-black font-mono mb-2 text-center">
                        <span className={`bg-gradient-to-r ${colors.text} bg-clip-text text-transparent`}>
                          {habitat.name.toUpperCase()}
                        </span>
                      </h2>
                      <p className={`text-sm font-mono text-center mb-4 ${colors.accent}`}>
                        {habitat.dinosaurs?.length || 0} species
                      </p>
                      
                      <div className={`mt-auto text-center px-3 py-2 border rounded-lg text-xs font-mono ${colors.button} transition-all duration-300`}>
                        VIEW SPECIES →
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HabitatsPage;
