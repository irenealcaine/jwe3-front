import { Link } from "react-router-dom";

const HomePage = () => {
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

      <div className="relative z-10 p-4 md:p-8 flex items-center justify-center min-h-screen">
        <div className="max-w-6xl w-full mx-auto">
          {/* Gaming Header */}
          <div className="text-center mb-16">
            <div className="relative inline-block">
              {/* Header HUD Frame */}
              <div className="absolute -inset-2 md:-inset-4 border-2 border-cyan-400/30 rounded-2xl">
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyan-400 rounded-tl-2xl"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-cyan-400 rounded-tr-2xl"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-cyan-400 rounded-bl-2xl"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-cyan-400 rounded-br-2xl"></div>
              </div>

              <div className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl p-8  rounded-2xl border border-cyan-500/20">
                <span className="inline-block px-4 py-2 bg-cyan-500/20 border border-cyan-400/50 rounded-full text-cyan-300 text-sm font-mono mb-6">
                  MAIN DATABASE
                </span>
                <h1 className="text-5xl md:text-7xl font-black mb-4">
                  <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent drop-shadow-sm font-mono">
                    JURASSIC WORLD
                  </span>
                </h1>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto font-mono">
                  <span className="text-cyan-400">&gt;</span> Evolution 3 Database System
                </p>
              </div>
            </div>
          </div>

          {/* Primary Navigation Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Dinosaurs Card */}
            <Link to="/dinosaurs" className="group">
              <div className="relative h-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 h-full flex flex-col items-center justify-center">
                  <div className="absolute top-4 left-4 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                  <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-200"></div>
                  
                  <div className="text-6xl mb-4">🦖</div>
                  <h2 className="text-3xl font-black font-mono mb-3">
                    <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                      DINOSAURS
                    </span>
                  </h2>
                  <p className="text-gray-400 text-sm font-mono text-center">
                    <span className="text-cyan-400">&gt;</span> Browse all species
                  </p>
                  
                  <div className="mt-6 px-4 py-2 border border-cyan-400/30 rounded-lg text-cyan-300 text-xs font-mono group-hover:border-cyan-400 group-hover:shadow-lg group-hover:shadow-cyan-500/20 transition-all duration-300">
                    ACCESS DATABASE →
                  </div>
                </div>
              </div>
            </Link>

            {/* Families Card */}
            <Link to="/families" className="group">
              <div className="relative h-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl p-8 rounded-2xl border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 h-full flex flex-col items-center justify-center">
                  <div className="absolute top-4 left-4 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                  <div className="absolute top-4 right-4 w-3 h-3 bg-pink-400 rounded-full animate-pulse delay-200"></div>
                  
                  <div className="text-6xl mb-4">🦕</div>
                  <h2 className="text-3xl font-black font-mono mb-3">
                    <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                      FAMILIES
                    </span>
                  </h2>
                  <p className="text-gray-400 text-sm font-mono text-center">
                    <span className="text-purple-400">&gt;</span> Explore family groups
                  </p>
                  
                  <div className="mt-6 px-4 py-2 border border-purple-400/30 rounded-lg text-purple-300 text-xs font-mono group-hover:border-purple-400 group-hover:shadow-lg group-hover:shadow-purple-500/20 transition-all duration-300">
                    ACCESS DATABASE →
                  </div>
                </div>
              </div>
            </Link>

            {/* Dig Sites Card */}
            <Link to="/dig-sites" className="group">
              <div className="relative h-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/30 to-amber-500/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl p-8 rounded-2xl border border-orange-500/30 hover:border-orange-400/60 transition-all duration-300 h-full flex flex-col items-center justify-center">
                  <div className="absolute top-4 left-4 w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
                  <div className="absolute top-4 right-4 w-3 h-3 bg-amber-400 rounded-full animate-pulse delay-200"></div>
                  
                  <div className="text-6xl mb-4">⛏️</div>
                  <h2 className="text-3xl font-black font-mono mb-3">
                    <span className="bg-gradient-to-r from-orange-300 to-amber-300 bg-clip-text text-transparent">
                      DIG SITES
                    </span>
                  </h2>
                  <p className="text-gray-400 text-sm font-mono text-center">
                    <span className="text-orange-400">&gt;</span> Discover locations
                  </p>
                  
                  <div className="mt-6 px-4 py-2 border border-orange-400/30 rounded-lg text-orange-300 text-xs font-mono group-hover:border-orange-400 group-hover:shadow-lg group-hover:shadow-orange-500/20 transition-all duration-300">
                    ACCESS DATABASE →
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Secondary Navigation - Diets & Habitats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Diets Card */}
            <Link to="/diets" className="group">
              <div className="relative h-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-rose-500/30 to-pink-500/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl p-6 rounded-2xl border border-rose-500/30 hover:border-rose-400/60 transition-all duration-300 h-full flex flex-col items-center justify-center">
                  <div className="absolute top-4 left-4 w-3 h-3 bg-rose-400 rounded-full animate-pulse"></div>
                  <div className="absolute top-4 right-4 w-3 h-3 bg-pink-400 rounded-full animate-pulse delay-200"></div>
                  
                  <div className="text-5xl mb-3">🍖</div>
                  <h2 className="text-2xl font-black font-mono mb-2">
                    <span className="bg-gradient-to-r from-rose-300 to-pink-300 bg-clip-text text-transparent">
                      DIETS
                    </span>
                  </h2>
                  <p className="text-gray-400 text-sm font-mono text-center">
                    <span className="text-rose-400">&gt;</span> Browse by dietary type
                  </p>
                  
                  <div className="mt-4 px-4 py-2 border border-rose-400/30 rounded-lg text-rose-300 text-xs font-mono group-hover:border-rose-400 group-hover:shadow-lg group-hover:shadow-rose-500/20 transition-all duration-300">
                    ACCESS DATABASE →
                  </div>
                </div>
              </div>
            </Link>

            {/* Habitats Card */}
            <Link to="/habitats" className="group">
              <div className="relative h-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/30 to-emerald-500/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl p-6 rounded-2xl border border-teal-500/30 hover:border-teal-400/60 transition-all duration-300 h-full flex flex-col items-center justify-center">
                  <div className="absolute top-4 left-4 w-3 h-3 bg-teal-400 rounded-full animate-pulse"></div>
                  <div className="absolute top-4 right-4 w-3 h-3 bg-emerald-400 rounded-full animate-pulse delay-200"></div>
                  
                  <div className="text-5xl mb-3">🌍</div>
                  <h2 className="text-2xl font-black font-mono mb-2">
                    <span className="bg-gradient-to-r from-teal-300 to-emerald-300 bg-clip-text text-transparent">
                      HABITATS
                    </span>
                  </h2>
                  <p className="text-gray-400 text-sm font-mono text-center">
                    <span className="text-teal-400">&gt;</span> Explore by environment
                  </p>
                  
                  <div className="mt-4 px-4 py-2 border border-teal-400/30 rounded-lg text-teal-300 text-xs font-mono group-hover:border-teal-400 group-hover:shadow-lg group-hover:shadow-teal-500/20 transition-all duration-300">
                    ACCESS DATABASE →
                  </div>
                </div>
              </div>
            </Link>
          </div>


          {/* API Attribution */}
          <div className="text-center mt-8">
            <p className="text-gray-500 text-xs font-mono">
              Data provided by unofficial API:{" "}
              <a 
                href="https://jwe3-api.up.railway.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors underline"
              >
                JWE3 API
              </a>
            </p>
          </div>

          {/* Developer Footer */}
          <div className="text-center mt-12 pb-8">
            <div className="inline-flex flex-col xl:flex-row items-center gap-4 xl:gap-8 px-4 py-2 bg-gradient-to-r from-gray-900/50 to-black/50 border border-gray-500/30 rounded-lg backdrop-blur-sm">
              <span className="text-gray-400 text-sm font-mono">Developed by Irene Alcaine</span>
              <div className="flex items-center gap-2">
                <a 
                  href="https://irenealcainealvarez.es/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm font-mono"
                  title="Website"
                >
                  Web
                </a>
                <span className="text-gray-600">|</span>
                <a 
                  href="https://github.com/irenealcaine" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm font-mono"
                  title="GitHub"
                >
                  GitHub
                </a>
                <span className="text-gray-600">|</span>
                <a 
                  href="https://www.linkedin.com/feed/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm font-mono"
                  title="LinkedIn"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
