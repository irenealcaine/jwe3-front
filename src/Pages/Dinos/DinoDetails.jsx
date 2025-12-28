import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import dinoPlaceholder from "./../../assets/dino.webp";

const DinoDetailsPage = () => {
  const [dino, setDino] = useState({});
  const { slug } = useParams();

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
      <div className="flex flex-wrap gap-2 justify-center">
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
    <div className="bg-gray-900 min-h-screen text-white">
      <div className="relative z-10 py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <Link to="/dinosaurs">⬅️</Link>
          <div className="flex justify-between flex-col md:flex-row">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">
                {dino.name || "Loading..."}
              </h1>
              {dino.era && (
                <p className="text-gray-400 text-lg">
                  {dino.era} {dino.habitat == "Terrestrial" && "dinosaur"}{" "}
                  {dino.habitat == "Aquatic" && "acuatic reptile"}{" "}
                  {dino.habitat == "Aerial" && "flying reptile"}
                </p>
              )}

              {/* Tipo de Feeder */}
              {dino.feeder && dino.feeder.length > 0 && (
                <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl p-4 rounded-2xl border border-gray-700/50">
                  {renderBadges(
                    dino.diet,
                    "bg-red-500/20 text-red-300 border border-red-500/50"
                  )}
                  {renderBadges(
                    dino.feeder,
                    "bg-yellow-500/20 text-yellow-300 border border-yellow-500/50"
                  )}
                </div>
              )}

              <p className="text-gray-300 font-semibold text-sm">
                {dino.game != "Base game" && dino.game}
              </p>
            </div>
            <div className="">
              <img
                src={
                  dino.image
                    ? `https://jwe3-api.up.railway.app${dino.image}`
                    : dinoPlaceholder
                }
                alt={dino.name}
                className="relative md:w-96 w-full"
              />
            </div>
          </div>

          {/* Grid de dos columnas */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* COLUMNA IZQUIERDA - Imagen y textos largos */}
            <div className="space-y-4">
              {/* Clasificación */}
              {(dino.family || dino.genus || dino.territory) && (
                <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl p-4 rounded-2xl border border-gray-700/50">
                  <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="w-1 h-6 bg-gradient-to-b from-amber-400 to-orange-400 rounded"></span>
                    Clasification
                  </h2>
                  <div className="space-y-2 text-sm">
                    {[
                      { label: "Family", value: dino.family },
                      { label: "Genus", value: dino.genus },
                    ]
                      .filter((item) => item.value)
                      .map((item, idx) => (
                        <div
                          key={idx}
                          className="flex justify-between p-2 bg-gray-800/50 rounded-lg"
                        >
                          <span className="text-gray-400">{item.label}</span>
                          <span className="text-white font-semibold">
                            {item.value}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
              )}

              {/* Descripción */}
              {dino.description && (
                <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl p-4 rounded-2xl border border-gray-700/50 ">
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-400 rounded"></span>
                    Description
                  </h2>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {dino.description}
                  </p>
                </div>
              )}

              {/* Descubrimiento */}
              {dino.discovery && (
                <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl p-4 rounded-2xl border border-gray-700/50">
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="w-1 h-6 bg-gradient-to-b from-green-400 to-emerald-400 rounded"></span>
                    Discovery
                  </h2>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {dino.discovery}
                  </p>
                </div>
              )}

              {/* Paleoecología */}
              {dino.palaeoecology && (
                <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl p-4 rounded-2xl border border-gray-700/50">
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="w-1 h-6 bg-gradient-to-b from-indigo-400 to-purple-400 rounded"></span>
                    Palaeoecology
                  </h2>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {dino.palaeoecology}
                  </p>
                </div>
              )}
            </div>

            {/* COLUMNA DERECHA - Datos y estadísticas */}
            <div className="space-y-4">
              {/* Estadísticas */}
              {(dino.height ||
                dino.length ||
                dino.weight) && (
                  <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl p-4 rounded-2xl border border-gray-700/50">
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                      <span className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-blue-400 rounded"></span>
                      Stats
                    </h2>
                    <div className="flex flex-col md:flex-row gap-2">
                      {[
                        { label: "Height", value: dino.height, unit: "m" },
                        { label: "Large", value: dino.length, unit: "m" },
                        { label: "Weight", value: dino.weight, unit: "kg" },
                      ]
                        .filter((stat) => stat.value)
                        .map((stat, idx) => (
                          <div
                            key={idx}
                            className="flex justify-between gap-4 p-2 bg-gray-800/50 rounded-xl border border-gray-700/30 "
                          >
                            <span className="text-gray-400 text-sm font-medium">
                              {stat.label}
                            </span>
                            <span className="text-2xl font-bold text-white">
                              {stat.value}{" "}
                              <span className="text-sm text-gray-500">
                                {stat.unit}
                              </span>
                            </span>
                          </div>
                        ))}
                    </div>
                  </div>
                )}

              {/* Dig Sites */}
              {dino.dig_sites && dino.dig_sites.length > 0 && (
                <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl p-4 rounded-2xl border border-gray-700/50">
                  <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="w-1 h-6 bg-gradient-to-b from-orange-400 to-red-400 rounded"></span>
                    Dig Sites
                  </h2>
                  {renderBadges(
                    dino.dig_sites,
                    "bg-orange-500/20 text-orange-300 border border-orange-500/50"
                  )}
                </div>
              )}
              {dino.environment && dino.environment.length > 0 && (
                <div className="">
                  {dino.environment && dino.environment.length > 0 && (
                    <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl p-4 rounded-2xl border border-gray-700/50">
                      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <span className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-blue-400 rounded"></span>
                        Environmental requirements
                      </h2>
                      {renderEnvironment(dino.environment)}
                    </div>
                  )}
                </div>
              )}

              {dino.cohabitation && dino.cohabitation.length > 0 && (
                <div className="">
                  {dino.cohabitation && dino.cohabitation.length > 0 && (
                    <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl p-4 rounded-2xl border border-gray-700/50">
                      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <span className="w-1 h-6 bg-gradient-to-b from-purple-400 to-pink-400 rounded"></span>
                        Cohabitation
                      </h2>
                      {dino.minimum_population &&
                        <p className="text-lg text-white mt-3 flex items-center gap-3">
                          Minimum poblation: <span className="font-bold">{dino.minimum_population}</span>
                        </p>
                      }
                      {dino.security_rating &&
                        <p className="text-lg text-white pb-3 mb-3 flex items-center gap-3 border-b border-gray-700/50">
                          Security rating: <span className="font-bold">{dino.security_rating}</span>
                        </p>
                      }

                      {renderCohabitation(dino.cohabitation)}
                    </div>
                  )}
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
