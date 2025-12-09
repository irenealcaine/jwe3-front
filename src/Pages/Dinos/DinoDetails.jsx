import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
      <div className="flex flex-wrap gap-2">
        {items.map((item, index) => (
          <span
            key={index}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm ${colorClass} hover:scale-105 transition-transform`}
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
            label: "Agua",
            value: env.water,
            color: "from-blue-500 to-cyan-500",
          },
          {
            label: "Bosque",
            value: env.forest,
            color: "from-green-500 to-emerald-500",
          },
          {
            label: "Espacio abierto",
            value: env.open_space,
            color: "from-yellow-500 to-amber-500",
          },
          {
            label: "Presas",
            value: env.prey,
            color: "from-red-500 to-pink-500",
          },
        ].map((item, idx) => (
          <div key={idx}>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-300">
                {item.label}
              </span>
              <span
                className={`text-lg font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
              >
                {item.value}%
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
        <div>
          <h4 className="font-semibold text-green-400 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400"></span>
            Le encanta compartir con
          </h4>
          {renderBadges(
            cohab.likes,
            "bg-green-500/20 text-green-300 border border-green-500/50"
          )}
        </div>
        <div className="border-t border-gray-700/50 pt-4">
          <h4 className="font-semibold text-red-400 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-400"></span>
            No tolera
          </h4>
          {renderBadges(
            cohab.dislikes,
            "bg-red-500/20 text-red-300 border border-red-500/50"
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white">

      <div className="relative z-10 py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between flex-col md:flex-row">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">
                {dino.name || "Cargando..."}
              </h1>
              {dino.era && (
                <p className="text-gray-400 text-lg">
                  Era: {dino.era}
                </p>
              )}
              {renderBadges(
                dino.diet,
                "bg-red-500/20 text-red-300 border border-red-500/50"
              )}

              <p className="text-gray-300 font-semibold text-sm">
                {dino.game!="Base game" && dino.game}
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
                    Clasificación
                  </h2>
                  <div className="space-y-2 text-sm">
                    {[
                      { label: "Familia", value: dino.family },
                      { label: "Género", value: dino.genus },
                      { label: "Territorio", value: dino.territory },
                    ].filter(item => item.value).map((item, idx) => (
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

              {/* Paleología */}
              {dino.paleology && (
                <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl p-4 rounded-2xl border border-gray-700/50">
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="w-1 h-6 bg-gradient-to-b from-indigo-400 to-purple-400 rounded"></span>
                    Paleoecology
                  </h2>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {dino.paleology}
                  </p>
                </div>
              )}
            </div>

            {/* COLUMNA DERECHA - Datos y estadísticas */}
            <div className="space-y-4">
              {/* Estadísticas */}
              {(dino.height || dino.length || dino.weight || dino.security_rating) && (
                <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl p-4 rounded-2xl border border-gray-700/50">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-blue-400 rounded"></span>
                    Estadísticas
                  </h2>
                  <div className="flex flex-col md:flex-row gap-2">
                    {[
                      { label: "Altura", value: dino.height, unit: "m" },
                      { label: "Largo", value: dino.length, unit: "m" },
                      { label: "Peso", value: dino.weight, unit: "kg" },
                      // {
                      //   label: "Seguridad",
                      //   value: dino.security_rating,
                      //   unit: "",
                      // },
                    ].filter(stat => stat.value).map((stat, idx) => (
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





              {/* Tipo de Feeder */}
              {dino.feeder && dino.feeder.length > 0 && (
                <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl p-4 rounded-2xl border border-gray-700/50">
                  <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="w-1 h-6 bg-gradient-to-b from-yellow-400 to-amber-400 rounded"></span>
                    Tipo de Alimentación
                  </h2>
                  {renderBadges(
                    dino.feeder,
                    "bg-yellow-500/20 text-yellow-300 border border-yellow-500/50"
                  )}
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
              {((dino.environment && dino.environment.length > 0)) && (
                <div className="">
                  {dino.environment && dino.environment.length > 0 && (
                    <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl p-4 rounded-2xl border border-gray-700/50">
                      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <span className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-blue-400 rounded"></span>
                        Requerimientos Ambientales
                      </h2>
                      {renderEnvironment(dino.environment)}
                    </div>
                  )}


                </div>
              )}

              {((dino.cohabitation && dino.cohabitation.length > 0)) && (
                <div className="">

                  {dino.cohabitation && dino.cohabitation.length > 0 && (
                    <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl p-4 rounded-2xl border border-gray-700/50">
                      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <span className="w-1 h-6 bg-gradient-to-b from-purple-400 to-pink-400 rounded"></span>
                        Convivencia
                      </h2>
                      {renderCohabitation(dino.cohabitation)}

                      <h3 className="text-lg font-bold text-white my-3 flex items-center gap-3">
                        <span className="w-1 h-4 bg-gradient-to-b from-green-400 to-emerald-400 rounded"></span>
                        Población Mínima
                      </h3>
                      <p className="text-4xl font-bold text-white">
                        {dino.minimum_population}
                      </p>
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
