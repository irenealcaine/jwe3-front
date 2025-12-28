import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import dinoPlaceholder from "./../../assets/dino.webp";

const DinoDetailsPage = () => {
  const [dino, setDino] = useState({});
  const { slug } = useParams();

  // Function to get food requirements from environment
  const getFoodRequirement = (dino) => {
    if (!dino.environment || !Array.isArray(dino.environment)) return null;

    const envData = dino.environment[0]; // Get first environment data
    if (!envData) return null;

    const requirements = [];

    if (envData.prey !== undefined && envData.prey > 0) {
      requirements.push({ type: 'Prey', amount: envData.prey, icon: '🦴', color: 'text-red-400' });
    }
    if (envData.fish !== undefined && envData.fish > 0) {
      requirements.push({ type: 'Fish', amount: envData.fish, icon: '🐠', color: 'text-blue-400' });
    }

    return requirements.length > 0 ? requirements : null;
  };

  useEffect(() => {
    async function fetchDinos() {
      const res = await fetch(
        `https://jwe3-api.up.railway.app/api/dinosaurs/${slug}`
      );
      const data = await res.json();
      setDino(data);
    }
    fetchDinos();
  }, [slug]);

  const renderBadges = (
    items,
    colorClass = "bg-blue-500/20 text-blue-300 border border-blue-500/50"
  ) => {
    if (!items || items.length === 0) return null;
    return (
      <div className="flex flex-wrap gap-2">
        {items.map((item, index) => (
          <span
            key={index}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm ${colorClass}`}
          >
            {item}
          </span>
        ))}
      </div>
    );
  };

  const renderEnvironment = (environment) => {
    if (!environment || environment.length === 0) return null;
    const env = environment[0];
    return (
      <div className="space-y-4">
        {[
          {
            label: "Water",
            value: env.water,
            color: "from-blue-500 to-cyan-500",
          },
          {
            label: "Forest",
            value: env.forest,
            color: "from-green-500 to-emerald-500",
          },
          {
            label: "Open Space",
            value: env.open_space,
            color: "from-yellow-500 to-amber-500",
          },
          {
            label: "Sand",
            value: env.sand,
            color: "from-yellow-500 to-amber-500",
          },
          {
            label: "Rock",
            value: env.rock,
            color: "from-yellow-500 to-amber-500",
          },
          {
            label: "Tall leaf",
            value: env.tall_leaf,
            color: "from-yellow-500 to-amber-500",
          },
          {
            label: "Ground leaf",
            value: env.ground_leaf,
            color: "from-yellow-500 to-amber-500",
          },
          {
            label: "Grund fruit",
            value: env.ground_fruit,
            color: "from-yellow-500 to-amber-500",
          },
          {
            label: "Tall fruit",
            value: env.tall_fruit,
            color: "from-yellow-500 to-amber-500",
          },
          {
            label: "Ground fiber",
            value: env.ground_fiber,
            color: "from-yellow-500 to-amber-500",
          },
          {
            label: "Tall fiber",
            value: env.tall_fiber,
            color: "from-yellow-500 to-amber-500",
          }

        ]
          .filter((item) => item.value !== undefined && item.value !== null)
          .map((item, idx) => (
            <div key={idx}>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-300">
                  {item.label}
                </span>
                <span
                  className={`text-lg font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                >
                  {item.value} %
                </span>
              </div>
              <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden backdrop-blur">
                <div
                  className={`h-full bg-gradient-to-r ${item.color} transition-all duration-500`}
                  style={{ width: `${item.value}%` }}
                />
              </div>
            </div>
          ))}
      </div>
    );
  };

  const renderCohabitation = (cohabitation) => {
    if (!cohabitation || cohabitation.length === 0) return null;
    const cohab = cohabitation[0];
    return (
      <div className="space-y-4">
        {cohab.likes &&
          <div>
            <p className="font-semibold text-green-400 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400"></span>
              Likes
            </p>
            {renderBadges(
              cohab.likes,
              "bg-green-500/20 text-green-300 border border-green-500/50"
            )}
          </div>
        }
        {cohab.dislikes &&
          <div className="">
            <p className="font-semibold text-red-400 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-400"></span>
              Dislikes
            </p>
            {renderBadges(
              cohab.dislikes,
              "bg-red-500/20 text-red-300 border border-red-500/50"
            )}
          </div>
        }
      </div>
    );
  };

  return (
    <div className="bg-black min-h-screen text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-green-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Scanline Effect */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent animate-pulse"></div>
      </div>

      <div className="relative z-10 py-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* HUD Navigation */}
          <div className="mb-8">
            <Link
              to="/dinosaurs"
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-900/50 to-blue-900/50 border border-cyan-400/50 rounded-lg hover:border-cyan-300 transition-all duration-300 text-cyan-300 hover:text-cyan-100 backdrop-blur-sm"
            >
              <span className="mr-2">←</span>
              <span className="text-sm font-mono">BACK TO DATABASE</span>
            </Link>
          </div>

          {/* Hero HUD Panel */}
          <div className="relative mb-8">
            <div className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl border-2 border-cyan-500/30 rounded-2xl p-8 shadow-2xl shadow-cyan-500/10">
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400 rounded-tl-2xl"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-400 rounded-tr-2xl"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-400 rounded-bl-2xl"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400 rounded-br-2xl"></div>

              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-1 text-center lg:text-left">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-cyan-500/20 border border-cyan-400/50 rounded-full text-cyan-300 text-xs font-mono mb-4">
                      SPECIMEN DATA
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-6xl font-black mb-4">
                    <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent drop-shadow-sm">
                      {dino.name || "LOADING..."}
                    </span>
                  </h1>
                  {dino.era && (
                    <p className="text-gray-300 text-lg mb-2 font-mono">
                      <span className="text-cyan-400">[</span>
                      {dino.era} {dino.habitat === "Terrestrial" && "DINOSAUR"}{" "}
                      {dino.habitat === "Aquatic" && "AQUATIC REPTILE"}{" "}
                      {dino.habitat === "Aerial" && "FLYING REPTILE"}
                      <span className="text-cyan-400">]</span>
                    </p>
                  )}
                  {dino.game && dino.game !== "Base game" && (
                    <p className="text-green-400 font-mono text-sm">
                      <span className="text-green-500"></span> {dino.game.toUpperCase()}
                    </p>
                  )}
                </div>

                {/* Holographic Image Container */}
                <div className="relative">
                  <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                    {/* Hologram effect border */}
                    <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-2xl animate-pulse"></div>
                    <div className="absolute inset-2 border border-cyan-300/20 rounded-xl"></div>

                    <img
                      src={
                        dino.image
                          ? `https://jwe3-api.up.railway.app${dino.image}`
                          : dinoPlaceholder
                      }
                      alt={dino.name}
                      className="w-full h-full object-cover rounded-2xl filter brightness-110 contrast-110 drop-shadow-2xl"
                    />

                    {/* Hologram overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 via-transparent to-cyan-500/5 rounded-2xl"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-300/5 to-transparent rounded-2xl animate-pulse"></div>
                  </div>

                  {/* Floating HUD Elements */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 border-2 border-green-400 rounded-full bg-green-500/20 flex items-center justify-center animate-pulse">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* HUD Panels Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
            {/* LEFT HUD PANEL - Primary Data */}
            <div className="xl:col-span-6 space-y-6">
              {/* Classification HUD Panel */}
              {(dino.family || dino.genus || dino.territory) && (
                <div className="relative bg-gradient-to-br from-emerald-900/30 to-green-900/30 backdrop-blur-xl p-6 rounded-xl border border-emerald-400/50 shadow-lg shadow-emerald-500/20">
                  {/* HUD Corner Elements */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-emerald-400"></div>
                  <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-emerald-400"></div>

                  <h2 className="text-lg font-bold text-emerald-300 mb-4 flex items-center gap-3 font-mono">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span className="text-emerald-300">[</span>CLASSIFICATION<span className="text-emerald-300">]</span>
                  </h2>
                  <div className="space-y-3">
                    {[
                      { label: "FAMILY", value: dino.family },
                      { label: "GENUS", value: dino.genus },
                    ]
                      .filter((item) => item.value)
                      .map((item, idx) => (
                        <div
                          key={idx}
                          className="flex justify-between items-center p-3 bg-black/30 rounded-lg border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300"
                        >
                          <span className="text-emerald-200/80 font-mono text-sm">{item.label}:</span>
                          <span className="text-emerald-100 font-semibold">
                            {item.value}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
              )}

              {/* Description Data Panel */}
              {dino.description && (
                <div className="relative bg-gradient-to-br from-blue-900/30 to-indigo-900/30 backdrop-blur-xl p-6 rounded-xl border border-blue-400/50 shadow-lg shadow-blue-500/20">
                  <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-blue-400"></div>
                  <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-blue-400"></div>

                  <h2 className="text-lg font-bold text-blue-300 mb-4 flex items-center gap-3 font-mono">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-blue-300">[</span>DESCRIPTION<span className="text-blue-300">]</span>
                  </h2>
                  <div className="bg-black/20 p-4 rounded-lg border border-blue-500/20">
                    <p className="text-gray-200 leading-relaxed text-xl font-light">
                      {dino.description}
                    </p>
                  </div>
                </div>
              )}

              {/* Discovery HUD Panel */}
              {dino.discovery && (
                <div className="relative bg-gradient-to-br from-green-900/30 to-emerald-900/30 backdrop-blur-xl p-6 rounded-xl border border-green-400/50 shadow-lg shadow-green-500/20">
                  <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-green-400"></div>
                  <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-green-400"></div>

                  <h2 className="text-lg font-bold text-green-300 mb-4 flex items-center gap-3 font-mono">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-300">[</span>DISCOVERY LOG<span className="text-green-300">]</span>
                  </h2>
                  <div className="bg-black/20 p-4 rounded-lg border border-green-500/20">
                    <p className="text-gray-200 leading-relaxed text-lg font-light">
                      {dino.discovery}
                    </p>
                  </div>
                </div>
              )}

              {/* Palaeoecology HUD Panel */}
              {dino.palaeoecology && (
                <div className="relative bg-gradient-to-br from-indigo-900/30 to-purple-900/30 backdrop-blur-xl p-6 rounded-xl border border-indigo-400/50 shadow-lg shadow-indigo-500/20">
                  <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-indigo-400"></div>
                  <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-indigo-400"></div>

                  <h2 className="text-lg font-bold text-indigo-300 mb-4 flex items-center gap-3 font-mono">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
                    <span className="text-indigo-300">[</span>PALEO-ECOLOGY<span className="text-indigo-300">]</span>
                  </h2>
                  <div className="bg-black/20 p-4 rounded-lg border border-indigo-500/20">
                    <p className="text-gray-200 leading-relaxed text-lg font-light">
                      {dino.palaeoecology}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* RIGHT HUD SIDEBAR - Critical Data */}
            <div className="xl:col-span-6 space-y-6">

              {/* Stats HUD Panel */}
              {(dino.height || dino.length || dino.weight) && (
                <div className="relative bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-xl p-6 rounded-xl border border-purple-400/50 shadow-lg shadow-purple-500/20">
                  <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-purple-400"></div>
                  <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-purple-400"></div>

                  <h2 className="text-lg font-bold text-purple-300 mb-6 flex items-center gap-3 font-mono">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                    <span className="text-purple-300">[</span>VITAL STATS<span className="text-purple-300">]</span>
                  </h2>
                  <div className="space-y-4">
                    {[
                      { label: "HEIGHT", value: dino.height, unit: "M", color: "text-cyan-400" },
                      { label: "LENGTH", value: dino.length, unit: "M", color: "text-green-400" },
                      { label: "WEIGHT", value: dino.weight, unit: "KG", color: "text-yellow-400" },
                    ]
                      .filter((stat) => stat.value)
                      .map((stat, idx) => (
                        <div
                          key={idx}
                          className="bg-black/40 p-4 rounded-lg border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300"
                        >
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-purple-200/80 font-mono text-xs">{stat.label}</span>
                            <div className="flex items-center gap-2">
                              <div className={`w-2 h-2 ${stat.color} bg-current rounded-full animate-pulse`}></div>
                            </div>
                          </div>
                          <div className="flex items-end gap-2">
                            <span className={`text-2xl font-black ${stat.color} font-mono`}>
                              {stat.value}
                            </span>
                            <span className="text-gray-400 text-sm font-mono mb-1">
                              {stat.unit}
                            </span>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              )}

              {/* Food Requirements HUD Panel */}
              {(() => {
                const foodReqs = getFoodRequirement(dino);
                const hasFoodInfo = foodReqs || (dino.diet && dino.diet.length > 0) || (dino.feeder && dino.feeder.length > 0);
                return hasFoodInfo && (
                  <div className="relative bg-gradient-to-br from-orange-900/30 to-red-900/30 backdrop-blur-xl p-6 rounded-xl border border-orange-400/50 shadow-lg shadow-orange-500/20">
                    <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-orange-400"></div>
                    <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-orange-400"></div>

                    <h2 className="text-lg font-bold text-orange-300 mb-4 flex items-center gap-3 font-mono">
                      <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                      <span className="text-orange-300">[</span>NUTRITIONAL DATA<span className="text-orange-300">]</span>
                    </h2>

                    {/* Diet and Feeder Type */}
                    {((dino.diet && dino.diet.length > 0) || (dino.feeder && dino.feeder.length > 0)) && (
                      <div className="mb-4 space-y-4">
                        {dino.diet && dino.diet.length > 0 && (
                          <div className="bg-black/30 p-4 rounded-lg border border-orange-500/20">
                            <p className="text-xs text-orange-200/80 mb-2 font-mono">DIET TYPE:</p>
                            <div className="flex flex-wrap gap-2">
                              {dino.diet.map((item, index) => (
                                <span
                                  key={index}
                                  className="px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm bg-red-500/20 text-red-300 border border-red-500/50 font-mono"
                                >
                                  {item.toUpperCase()}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        {dino.feeder && dino.feeder.length > 0 && (
                          <div className="bg-black/30 p-4 rounded-lg border border-orange-500/20">
                            <p className="text-xs text-orange-200/80 mb-2 font-mono">FEEDER TYPE:</p>
                            <div className="flex flex-wrap gap-2">
                              {dino.feeder.map((item, index) => (
                                <span
                                  key={index}
                                  className="px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm bg-yellow-500/20 text-yellow-300 border border-yellow-500/50 font-mono"
                                >
                                  {item.toUpperCase()}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Food Amount Requirements */}
                    {foodReqs && (
                      <div>
                        {((dino.diet && dino.diet.length > 0) || (dino.feeder && dino.feeder.length > 0)) && (
                          <div className="border-t border-orange-500/30 pt-4 mt-4">
                            <p className="text-xs text-orange-200/80 mb-3 font-mono">QUANTITY REQUIRED:</p>
                          </div>
                        )}
                        <div className="space-y-3">
                          {foodReqs.map((req, idx) => (
                            <div
                              key={idx}
                              className="bg-black/40 p-4 rounded-lg border border-orange-500/20 hover:border-orange-400/40 transition-all duration-300"
                            >
                              <div className="flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                  <span className="text-2xl">{req.icon}</span>
                                  <span className="text-orange-200 font-medium font-mono">{req.type.toUpperCase()}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <div className={`w-2 h-2 ${req.color} bg-current rounded-full animate-pulse`}></div>
                                  <span className={`text-2xl font-black ${req.color} font-mono`}>
                                    {req.amount}
                                  </span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })()}

              {/* Dig Sites HUD Panel */}
              {dino.dig_sites && dino.dig_sites.length > 0 && (
                <div className="relative bg-gradient-to-br from-amber-900/30 to-orange-900/30 backdrop-blur-xl p-6 rounded-xl border border-amber-400/50 shadow-lg shadow-amber-500/20">
                  <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-amber-400"></div>
                  <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-amber-400"></div>

                  <h2 className="text-lg font-bold text-amber-300 mb-4 flex items-center gap-3 font-mono">
                    <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                    <span className="text-amber-300">[</span>EXCAVATION SITES<span className="text-amber-300">]</span>
                  </h2>
                  <div className="bg-black/20 p-4 rounded-lg border border-amber-500/20">
                    <div className="flex flex-wrap gap-2">
                      {dino.dig_sites.map((site, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm bg-amber-500/20 text-amber-300 border border-amber-500/50 font-mono"
                        >
                          {site.toUpperCase()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {/* Environmental Requirements HUD Panel */}
              {dino.environment && dino.environment.length > 0 && (
                <div className="relative bg-gradient-to-br from-teal-900/30 to-cyan-900/30 backdrop-blur-xl p-6 rounded-xl border border-teal-400/50 shadow-lg shadow-teal-500/20">
                  <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-teal-400"></div>
                  <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-teal-400"></div>

                  <h2 className="text-lg font-bold text-teal-300 mb-6 flex items-center gap-3 font-mono">
                    <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                    <span className="text-teal-300">[</span>HABITAT REQUIREMENTS<span className="text-teal-300">]</span>
                  </h2>
                  <div className="bg-black/20 p-4 rounded-lg border border-teal-500/20">
                    {renderEnvironment(dino.environment)}
                  </div>
                </div>
              )}

              {/* Cohabitation HUD Panel */}
              {dino.cohabitation && dino.cohabitation.length > 0 && (
                <div className="relative bg-gradient-to-br from-rose-900/30 to-pink-900/30 backdrop-blur-xl p-6 rounded-xl border border-rose-400/50 shadow-lg shadow-rose-500/20">
                  <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-rose-400"></div>
                  <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-rose-400"></div>

                  <h2 className="text-lg font-bold text-rose-300 mb-6 flex items-center gap-3 font-mono">
                    <div className="w-2 h-2 bg-rose-400 rounded-full animate-pulse"></div>
                    <span className="text-rose-300">[</span>SOCIAL PROTOCOLS<span className="text-rose-300">]</span>
                  </h2>

                  <div className="space-y-4">
                    {dino.minimum_population && (
                      <div className="bg-black/30 p-4 rounded-lg border border-rose-500/20">
                        <div className="flex justify-between items-center">
                          <span className="text-rose-200/80 font-mono text-sm">MIN POPULATION:</span>
                          <span className="text-rose-100 font-black font-mono text-lg">{dino.minimum_population}</span>
                        </div>
                      </div>
                    )}

                    {dino.security_rating && (
                      <div className="bg-black/30 p-4 rounded-lg border border-rose-500/20">
                        <div className="flex justify-between items-center">
                          <span className="text-rose-200/80 font-mono text-sm">SECURITY RATING:</span>
                          <span className="text-rose-100 font-black font-mono text-lg">{dino.security_rating}</span>
                        </div>
                      </div>
                    )}

                    <div className="bg-black/20 p-4 rounded-lg border border-rose-500/20">
                      {renderCohabitation(dino.cohabitation)}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sección inferior - A ancho completo */}
        </div>
      </div>
    </div>
  );
};

export default DinoDetailsPage;
