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
          {/* Gaming Header - Enhanced */}
          <div className="text-center mb-20">
            <div className="relative">
              {/* Glowing effect behind title */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
              </div>
              
              <div className="relative">


                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 relative">
                  <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl font-mono tracking-tight">
                    JURASSIC WORLD
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent drop-shadow-2xl font-mono tracking-tight">
                    EVOLUTION 3
                  </span>
                </h1>

                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link 
                    to="/dinosaurs"
                    className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg font-mono font-bold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span className="relative flex items-center gap-2">
                      🦖 EXPLORE DATABASE
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                  </Link>
                  <a 
                    href="https://jwe3-api.up.railway.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-gray-900/80 border border-cyan-400/40 rounded-lg font-mono font-bold text-cyan-300 hover:border-cyan-400 hover:bg-gray-900 transition-all duration-300"
                  >
                    <span className="flex items-center gap-2">
                      📡 API DOCS
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          

         

          {/* Primary Navigation Cards */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-black font-mono mb-8 text-center">
              <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                [ACCESS DATABASE]
              </span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Dinosaurs Card */}
              <Link to="/dinosaurs" className="group">
                <div className="relative h-full">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 h-full flex flex-col items-center justify-center group-hover:scale-105 transform">
                    <div className="absolute top-4 left-4 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-200"></div>
                    
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">🦖</div>
                    <h2 className="text-3xl font-black font-mono mb-3">
                      <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                        DINOSAURS
                      </span>
                    </h2>
                    <p className="text-gray-400 text-sm font-mono text-center mb-3">
                      <span className="text-cyan-400">&gt;</span> Browse all species
                    </p>
                    <p className="text-xs text-gray-500 font-mono text-center mb-4">
                      Complete database of prehistoric creatures
                    </p>
                    
                    <div className="mt-auto px-4 py-2 border border-cyan-400/30 rounded-lg text-cyan-300 text-xs font-mono group-hover:border-cyan-400 group-hover:shadow-lg group-hover:shadow-cyan-500/20 transition-all duration-300">
                      ACCESS DATABASE →
                    </div>
                  </div>
                </div>
              </Link>

              {/* Families Card */}
              <Link to="/families" className="group">
                <div className="relative h-full">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl p-8 rounded-2xl border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 h-full flex flex-col items-center justify-center group-hover:scale-105 transform">
                    <div className="absolute top-4 left-4 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-4 right-4 w-3 h-3 bg-pink-400 rounded-full animate-pulse delay-200"></div>
                    
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">🦕</div>
                    <h2 className="text-3xl font-black font-mono mb-3">
                      <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                        FAMILIES
                      </span>
                    </h2>
                    <p className="text-gray-400 text-sm font-mono text-center mb-3">
                      <span className="text-purple-400">&gt;</span> Explore family groups
                    </p>
                    <p className="text-xs text-gray-500 font-mono text-center mb-4">
                      Taxonomic classifications and relationships
                    </p>
                    
                    <div className="mt-auto px-4 py-2 border border-purple-400/30 rounded-lg text-purple-300 text-xs font-mono group-hover:border-purple-400 group-hover:shadow-lg group-hover:shadow-purple-500/20 transition-all duration-300">
                      ACCESS DATABASE →
                    </div>
                  </div>
                </div>
              </Link>

              {/* Dig Sites Card */}
              <Link to="/dig-sites" className="group">
                <div className="relative h-full">
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/30 to-amber-500/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl p-8 rounded-2xl border border-orange-500/30 hover:border-orange-400/60 transition-all duration-300 h-full flex flex-col items-center justify-center group-hover:scale-105 transform">
                    <div className="absolute top-4 left-4 w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-4 right-4 w-3 h-3 bg-amber-400 rounded-full animate-pulse delay-200"></div>
                    
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">⛏️</div>
                    <h2 className="text-3xl font-black font-mono mb-3">
                      <span className="bg-gradient-to-r from-orange-300 to-amber-300 bg-clip-text text-transparent">
                        DIG SITES
                      </span>
                    </h2>
                    <p className="text-gray-400 text-sm font-mono text-center mb-3">
                      <span className="text-orange-400">&gt;</span> Discover locations
                    </p>
                    <p className="text-xs text-gray-500 font-mono text-center mb-4">
                      Fossil excavation sites worldwide
                    </p>
                    
                    <div className="mt-auto px-4 py-2 border border-orange-400/30 rounded-lg text-orange-300 text-xs font-mono group-hover:border-orange-400 group-hover:shadow-lg group-hover:shadow-orange-500/20 transition-all duration-300">
                      ACCESS DATABASE →
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Secondary Navigation - Diets & Habitats */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-black font-mono mb-8 text-center">
              <span className="bg-gradient-to-r from-rose-300 to-teal-300 bg-clip-text text-transparent">
                [BROWSE BY CATEGORY]
              </span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Diets Card */}
              <Link to="/diets" className="group">
                <div className="relative h-full">
                  <div className="absolute -inset-1 bg-gradient-to-r from-rose-500/30 to-pink-500/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl p-8 rounded-2xl border border-rose-500/30 hover:border-rose-400/60 transition-all duration-300 h-full flex flex-col items-center justify-center group-hover:scale-105 transform">
                    <div className="absolute top-4 left-4 w-3 h-3 bg-rose-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-4 right-4 w-3 h-3 bg-pink-400 rounded-full animate-pulse delay-200"></div>
                    
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">🍖</div>
                    <h2 className="text-3xl font-black font-mono mb-3">
                      <span className="bg-gradient-to-r from-rose-300 to-pink-300 bg-clip-text text-transparent">
                        DIETS
                      </span>
                    </h2>
                    <p className="text-gray-400 text-sm font-mono text-center mb-3">
                      <span className="text-rose-400">&gt;</span> Browse by dietary type
                    </p>
                    <p className="text-xs text-gray-500 font-mono text-center mb-4">
                      Carnivore, Herbivore, Omnivore & more
                    </p>
                    
                    <div className="mt-auto px-4 py-2 border border-rose-400/30 rounded-lg text-rose-300 text-xs font-mono group-hover:border-rose-400 group-hover:shadow-lg group-hover:shadow-rose-500/20 transition-all duration-300">
                      ACCESS DATABASE →
                    </div>
                  </div>
                </div>
              </Link>

              {/* Habitats Card */}
              <Link to="/habitats" className="group">
                <div className="relative h-full">
                  <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/30 to-emerald-500/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl p-8 rounded-2xl border border-teal-500/30 hover:border-teal-400/60 transition-all duration-300 h-full flex flex-col items-center justify-center group-hover:scale-105 transform">
                    <div className="absolute top-4 left-4 w-3 h-3 bg-teal-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-4 right-4 w-3 h-3 bg-emerald-400 rounded-full animate-pulse delay-200"></div>
                    
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">🌍</div>
                    <h2 className="text-3xl font-black font-mono mb-3">
                      <span className="bg-gradient-to-r from-teal-300 to-emerald-300 bg-clip-text text-transparent">
                        HABITATS
                      </span>
                    </h2>
                    <p className="text-gray-400 text-sm font-mono text-center mb-3">
                      <span className="text-teal-400">&gt;</span> Explore by environment
                    </p>
                    <p className="text-xs text-gray-500 font-mono text-center mb-4">
                      Terrestrial, Aquatic, Aerial & Semi-Aquatic
                    </p>
                    
                    <div className="mt-auto px-4 py-2 border border-teal-400/30 rounded-lg text-teal-300 text-xs font-mono group-hover:border-teal-400 group-hover:shadow-lg group-hover:shadow-teal-500/20 transition-all duration-300">
                      ACCESS DATABASE →
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Quick Facts - Dino Facts Carousel */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-xl rounded-2xl border border-purple-500/30 p-8 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl"></div>
              
              <div className="relative">
                <h3 className="text-2xl md:text-3xl font-black font-mono mb-8 text-center">
                  <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                    💡 DID YOU KNOW?
                  </span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-purple-400/20 hover:border-purple-400/50 transition-all">
                    <div className="text-4xl mb-4">🦴</div>
                    <h4 className="text-lg font-bold font-mono text-purple-300 mb-2">Mesozoic Era</h4>
                    <p className="text-sm text-gray-300 font-mono">
                      Dinosaurs ruled Earth for over 165 million years during the Triassic, Jurassic, and Cretaceous periods
                    </p>
                  </div>
                  <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-pink-400/20 hover:border-pink-400/50 transition-all">
                    <div className="text-4xl mb-4">📏</div>
                    <h4 className="text-lg font-bold font-mono text-pink-300 mb-2">Size Variety</h4>
                    <p className="text-sm text-gray-300 font-mono">
                      From tiny Microraptor (40cm) to massive Argentinosaurus (35m), dinosaurs came in incredible sizes
                    </p>
                  </div>
                  <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-purple-400/20 hover:border-purple-400/50 transition-all">
                    <div className="text-4xl mb-4">🌍</div>
                    <h4 className="text-lg font-bold font-mono text-purple-300 mb-2">Global Presence</h4>
                    <p className="text-sm text-gray-300 font-mono">
                      Dinosaur fossils have been discovered on every continent, including Antarctica
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

           {/* Timeline Section */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-black font-mono mb-8 text-center">
              <span className="bg-gradient-to-r from-orange-300 to-red-300 bg-clip-text text-transparent">
                [GEOLOGICAL TIMELINE]
              </span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative bg-gradient-to-br from-red-900/30 to-orange-900/30 backdrop-blur-xl rounded-xl border border-red-400/30 p-6 hover:border-red-400/60 transition-all group">
                <div className="absolute top-4 right-4 w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                <div className="text-4xl mb-3">🌋</div>
                <h4 className="text-xl font-black font-mono text-red-300 mb-2">TRIASSIC</h4>
                <p className="text-sm text-gray-400 font-mono mb-2">252 - 201 Million Years Ago</p>
                <p className="text-xs text-gray-300 font-mono">
                  First dinosaurs appear. Hot, dry climate. Pangaea supercontinent dominates.
                </p>
              </div>
              <div className="relative bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-xl rounded-xl border border-blue-400/30 p-6 hover:border-blue-400/60 transition-all group">
                <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="text-4xl mb-3">🌊</div>
                <h4 className="text-xl font-black font-mono text-blue-300 mb-2">JURASSIC</h4>
                <p className="text-sm text-gray-400 font-mono mb-2">201 - 145 Million Years Ago</p>
                <p className="text-xs text-gray-300 font-mono">
                  Golden age of dinosaurs. Warm climate. First birds evolve from theropods.
                </p>
              </div>
              <div className="relative bg-gradient-to-br from-green-900/30 to-emerald-900/30 backdrop-blur-xl rounded-xl border border-green-400/30 p-6 hover:border-green-400/60 transition-all group">
                <div className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <div className="text-4xl mb-3">🌿</div>
                <h4 className="text-xl font-black font-mono text-green-300 mb-2">CRETACEOUS</h4>
                <p className="text-sm text-gray-400 font-mono mb-2">145 - 66 Million Years Ago</p>
                <p className="text-xs text-gray-300 font-mono">
                  Peak diversity. Flowering plants emerge. Ends with mass extinction event.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Section - Enhanced */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-black font-mono mb-8 text-center">
              <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                [DATABASE STATISTICS]
              </span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-cyan-900/40 to-blue-900/40 backdrop-blur-xl rounded-xl border border-cyan-400/30 p-6 text-center hover:border-cyan-400/60 hover:scale-105 transition-all duration-300 group">
                <div className="text-4xl md:text-5xl font-black font-mono mb-3">
                  <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">100+</span>
                </div>
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">🦖</div>
                <p className="text-sm text-gray-300 font-mono font-bold">Dinosaur Species</p>
              </div>
              <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-xl rounded-xl border border-purple-400/30 p-6 text-center hover:border-purple-400/60 hover:scale-105 transition-all duration-300 group">
                <div className="text-4xl md:text-5xl font-black font-mono mb-3">
                  <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">20+</span>
                </div>
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">🦕</div>
                <p className="text-sm text-gray-300 font-mono font-bold">Families</p>
              </div>
              <div className="bg-gradient-to-br from-orange-900/40 to-amber-900/40 backdrop-blur-xl rounded-xl border border-orange-400/30 p-6 text-center hover:border-orange-400/60 hover:scale-105 transition-all duration-300 group">
                <div className="text-4xl md:text-5xl font-black font-mono mb-3">
                  <span className="bg-gradient-to-r from-orange-300 to-amber-300 bg-clip-text text-transparent">15+</span>
                </div>
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">⛏️</div>
                <p className="text-sm text-gray-300 font-mono font-bold">Dig Sites</p>
              </div>
              <div className="bg-gradient-to-br from-teal-900/40 to-emerald-900/40 backdrop-blur-xl rounded-xl border border-teal-400/30 p-6 text-center hover:border-teal-400/60 hover:scale-105 transition-all duration-300 group">
                <div className="text-4xl md:text-5xl font-black font-mono mb-3">
                  <span className="bg-gradient-to-r from-teal-300 to-emerald-300 bg-clip-text text-transparent">4</span>
                </div>
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">🌍</div>
                <p className="text-sm text-gray-300 font-mono font-bold">Habitat Types</p>
              </div>
            </div>
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
