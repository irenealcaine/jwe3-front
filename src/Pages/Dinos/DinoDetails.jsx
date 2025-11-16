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

  const renderBadges = (items, colorClass = "bg-blue-900 text-blue-200") => {
    if (!items || items.length === 0) return <span className="text-gray-400">Not available</span>;
    return (
      <div className="flex flex-wrap gap-2">
        {items.map((item, index) => (
          <span
            key={index}
            className={`px-3 py-1 rounded-full text-sm font-medium ${colorClass}`}
          >
            {item}
          </span>
        ))}
      </div>
    );
  };

  const renderEnvironment = (environment) => {
    if (!environment || environment.length === 0) return <span className="text-gray-400">Not available</span>;
    const env = environment[0];
    return (
      <div className="grid grid-cols-2 gap-4">
        <div className="flex justify-between">
          <span className="font-medium text-gray-300">Water:</span>
          <span className="text-blue-400">{env.water}%</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-gray-300">Forest:</span>
          <span className="text-green-400">{env.forest}%</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-gray-300">Open space:</span>
          <span className="text-yellow-400">{env.open_space}%</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-gray-300">Prey:</span>
          <span className="text-red-400">{env.prey}%</span>
        </div>
      </div>
    );
  };

  const renderCohabitation = (cohabitation) => {
    if (!cohabitation || cohabitation.length === 0) return <span className="text-gray-400">Not available</span>;
    const cohab = cohabitation[0];
    return (
      <div className="space-y-3">
        <div>
          <h4 className="font-medium text-green-300 mb-2">Likes:</h4>
          {renderBadges(cohab.likes, "bg-green-900 text-green-200")}
        </div>
        <div>
          <h4 className="font-medium text-red-300 mb-2">Dislikes:</h4>
          {renderBadges(cohab.dislikes, "bg-red-900 text-red-200")}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {dino.name || "Loading..."}
          </h1>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center mb-12">
          <img
            src={
              dino.image
                ? `https://jwe3-api.up.railway.app${dino.image}`
                : dinoPlaceholder
            }
            alt={dino.name}
            className="max-w-md w-full rounded-2xl shadow-2xl border-4 border-gray-600"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Column - Descriptions */}
          <div className="space-y-6">
            
            {/* Description */}
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-600">
              <h2 className="text-2xl font-bold text-white mb-4">
                Description
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {dino.description || "Information not available"}
              </p>
            </div>

            {/* Discovery */}
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-600">
              <h2 className="text-2xl font-bold text-white mb-4">
                Discovery
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {dino.discovery || "Information not available"}
              </p>
            </div>

            {/* Paleology */}
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-600">
              <h2 className="text-2xl font-bold text-white mb-4">
                Paleology
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {dino.paleology || "Information not available"}
              </p>
            </div>

          </div>

          {/* Right Column - Stats and Details */}
          <div className="space-y-6">
            
            {/* Basic Stats */}
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-600">
              <h2 className="text-2xl font-bold text-white mb-6">
                Basic Statistics
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gradient-to-r from-blue-900 to-blue-800 p-4 rounded-lg">
                  <div className="text-blue-300 text-sm font-medium">Height</div>
                  <div className="text-2xl font-bold text-white">{dino.height || "N/A"} m</div>
                </div>
                <div className="bg-gradient-to-r from-green-900 to-green-800 p-4 rounded-lg">
                  <div className="text-green-300 text-sm font-medium">Length</div>
                  <div className="text-2xl font-bold text-white">{dino.length || "N/A"} m</div>
                </div>
                <div className="bg-gradient-to-r from-purple-900 to-purple-800 p-4 rounded-lg">
                  <div className="text-purple-300 text-sm font-medium">Weight</div>
                  <div className="text-2xl font-bold text-white">{dino.weight || "N/A"} kg</div>
                </div>
                <div className="bg-gradient-to-r from-orange-900 to-orange-800 p-4 rounded-lg">
                  <div className="text-orange-300 text-sm font-medium">Security</div>
                  <div className="text-2xl font-bold text-white">{dino.security_rating || "N/A"}/10</div>
                </div>
              </div>
            </div>

            {/* Classification */}
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-600">
              <h2 className="text-2xl font-bold text-white mb-4">
                Classification
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-600">
                  <span className="font-medium text-gray-300">Era:</span>
                  <span className="text-white font-semibold">{dino.era || "N/A"}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-600">
                  <span className="font-medium text-gray-300">Family:</span>
                  <span className="text-white font-semibold">{dino.family || "N/A"}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-600">
                  <span className="font-medium text-gray-300">Genus:</span>
                  <span className="text-white font-semibold">{dino.genus || "N/A"}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium text-gray-300">Territory:</span>
                  <span className="text-white font-semibold capitalize">{dino.territory || "N/A"}</span>
                </div>
              </div>
            </div>

            {/* Diet and Feeding */}
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-600">
              <h2 className="text-2xl font-bold text-white mb-4">
                Diet and Feeding
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-300 mb-2">Diet:</h3>
                  {renderBadges(dino.diet, "bg-red-900 text-red-200")}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-300 mb-2">Feeder:</h3>
                  {renderBadges(dino.feeder, "bg-orange-900 text-orange-200")}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Additional Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          
          {/* Environment */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-600">
            <h2 className="text-2xl font-bold text-white mb-4">
              Environmental Requirements
            </h2>
            {renderEnvironment(dino.environment)}
          </div>

          {/* Cohabitation */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-600">
            <h2 className="text-2xl font-bold text-white mb-4">
              Cohabitation
            </h2>
            {renderCohabitation(dino.cohabitation)}
          </div>

        </div>

        {/* Game and Breeding Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          
          {/* Game Info */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-600">
            <h3 className="text-lg font-bold text-white mb-3">
              Game
            </h3>
            <p className="text-gray-300 font-semibold">{dino.game || "Not available"}</p>
          </div>

          {/* Population */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-600">
            <h3 className="text-lg font-bold text-white mb-3">
              Minimum Population
            </h3>
            <p className="text-2xl font-bold text-white">{dino.minimum_population || "N/A"}</p>
          </div>

          {/* Dig Sites */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-600">
            <h3 className="text-lg font-bold text-white mb-3">
              Dig Sites
            </h3>
            {renderBadges(dino.dig_sites, "bg-gray-700 text-gray-200")}
          </div>

        </div>

      </div>
    </div>
  );
};

export default DinoDetailsPage;
