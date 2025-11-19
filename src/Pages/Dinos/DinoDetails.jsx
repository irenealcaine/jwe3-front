import React, { useEffect, useState } from "react";
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
    if (!items || items.length === 0)
      return <span className="text-gray-500">No disponible</span>;
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
    if (!environment || environment.length === 0)
      return <span className="text-gray-500">No disponible</span>;
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
    if (!cohabitation || cohabitation.length === 0)
      return <span className="text-gray-500">No disponible</span>;
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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black overflow-hidden">
      {/* Elementos decorativos */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10 py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header con animación */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">
              {dino.name || "Cargando..."}
            </h1>
            <p className="text-gray-400 text-lg">
              {dino.era && `Era: ${dino.era}`}
            </p>
          </div>

          {/* Grid de dos columnas */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* COLUMNA IZQUIERDA - Imagen y textos largos */}
            <div className="space-y-6">
              {/* Imagen hero mejorada */}
              <div className="flex justify-center">
                <div className="relative group w-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <img
                    src={
                      dino.image
                        ? `https://jwe3-api.up.railway.app${dino.image}`
                        : dinoPlaceholder
                    }
                    alt={dino.name}
                    className="relative w-full rounded-3xl shadow-2xl border border-gray-700/50 backdrop-blur group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Descripción */}
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50 hover:border-gray-600/80 transition-colors">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-400 rounded"></span>
                  Descripción
                </h2>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {dino.description || "Información no disponible"}
                </p>
              </div>

              {/* Descubrimiento */}
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50 hover:border-gray-600/80 transition-colors">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="w-1 h-6 bg-gradient-to-b from-green-400 to-emerald-400 rounded"></span>
                  Descubrimiento
                </h2>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {dino.discovery || "Información no disponible"}
                </p>
              </div>

              {/* Paleología */}
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50 hover:border-gray-600/80 transition-colors">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="w-1 h-6 bg-gradient-to-b from-indigo-400 to-purple-400 rounded"></span>
                  Paleología
                </h2>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {dino.paleology || "Información no disponible"}
                </p>
              </div>
            </div>

            {/* COLUMNA DERECHA - Datos y estadísticas */}
            <div className="space-y-6">
              {/* Estadísticas */}
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-blue-400 rounded"></span>
                  Estadísticas
                </h2>
                <div className="space-y-4">
                  {[
                    { label: "Altura", value: dino.height, unit: "m" },
                    { label: "Largo", value: dino.length, unit: "m" },
                    { label: "Peso", value: dino.weight, unit: "kg" },
                    {
                      label: "Seguridad",
                      value: dino.security_rating,
                      unit: "/10",
                    },
                  ].map((stat, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 bg-gray-800/50 rounded-xl border border-gray-700/30 hover:border-gray-600/50 transition-all"
                    >
                      <span className="text-gray-400 text-sm font-medium">
                        {stat.label}
                      </span>
                      <span className="text-2xl font-bold text-white">
                        {stat.value || "N/A"}{" "}
                        <span className="text-sm text-gray-500">
                          {stat.unit}
                        </span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Clasificación */}
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="w-1 h-6 bg-gradient-to-b from-amber-400 to-orange-400 rounded"></span>
                  Clasificación
                </h2>
                <div className="space-y-2 text-sm">
                  {[
                    { label: "Familia", value: dino.family },
                    { label: "Género", value: dino.genus },
                    { label: "Territorio", value: dino.territory },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between p-2 bg-gray-800/50 rounded-lg"
                    >
                      <span className="text-gray-400">{item.label}</span>
                      <span className="text-white font-semibold">
                        {item.value || "N/A"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dieta */}
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="w-1 h-6 bg-gradient-to-b from-red-400 to-pink-400 rounded"></span>
                  Dieta
                </h2>
                {renderBadges(
                  dino.diet,
                  "bg-red-500/20 text-red-300 border border-red-500/50"
                )}
              </div>

              {/* Tipo de Feeder */}
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="w-1 h-6 bg-gradient-to-b from-yellow-400 to-amber-400 rounded"></span>
                  Tipo de Alimentación
                </h2>
                {renderBadges(
                  dino.feeder,
                  "bg-yellow-500/20 text-yellow-300 border border-yellow-500/50"
                )}
              </div>

              {/* Dig Sites */}
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="w-1 h-6 bg-gradient-to-b from-orange-400 to-red-400 rounded"></span>
                  Dig Sites
                </h2>
                {renderBadges(
                  dino.dig_sites,
                  "bg-orange-500/20 text-orange-300 border border-orange-500/50"
                )}
              </div>

              {/* Juego */}
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50">
                <h3 className="text-lg font-bold text-white mb-3">Juego</h3>
                <p className="text-gray-300 font-semibold text-sm">
                  {dino.game || "No disponible"}
                </p>
              </div>

              {/* Población Mínima */}
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50">
                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-3">
                  <span className="w-1 h-4 bg-gradient-to-b from-green-400 to-emerald-400 rounded"></span>
                  Población Mínima
                </h3>
                <p className="text-4xl font-bold text-white">
                  {dino.minimum_population || "N/A"}
                </p>
              </div>
            </div>
          </div>

          {/* Sección inferior - A ancho completo */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-blue-400 rounded"></span>
                Requerimientos Ambientales
              </h2>
              {renderEnvironment(dino.environment)}
            </div>

            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-1 h-6 bg-gradient-to-b from-purple-400 to-pink-400 rounded"></span>
                Convivencia
              </h2>
              {renderCohabitation(dino.cohabitation)}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default DinoDetailsPage;
