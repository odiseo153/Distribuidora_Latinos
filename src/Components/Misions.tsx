import React from "react";
import { Target, Eye, Gem } from 'lucide-react';

const MissionVisionValues: React.FC = () => {
  return (
    <div className="p-8  dark:to-gray-900 text-gray-800 dark:text-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <h1 className="text-4xl text-black font-bold text-center mb-8">
          Nuestra <span className="text-blue-600">Esencia</span>
        </h1>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Misión */}
          <div className="text-black flex flex-col items-center bg-white dark:bg-gray-800  rounded-lg p-6 hover:shadow-xl transition-shadow">
            <div className="p-4 bg-blue-600 text-white rounded-full mb-4">
              <Target className="w-8 h-8" />
            </div>
            <h2 className="text-xl text-black font-bold mb-2">Misión</h2>
            <p className="text-center text-black dark:text-gray-400">
              Nuestra misión es ofrecer productos y servicios de la más alta
              calidad que satisfagan las necesidades de nuestros clientes y
              contribuyan al bienestar de la sociedad.
            </p>
          </div>

          {/* Visión */}
          <div className="flex flex-col items-center bg-white text-black  dark:bg-gray-800  rounded-lg p-6 hover:shadow-xl transition-shadow">
            <div className="p-4 bg-green-600 text-white rounded-full mb-4">
              <Eye className="w-8 h-8" />
            </div>
            <h2 className="text-xl font-bold mb-2">Visión</h2>
            <p className="text-center ">
              Ser líderes en nuestra industria, reconocidos por nuestra
              excelencia, innovación y compromiso con el desarrollo sostenible y
              la satisfacción del cliente.
            </p>
          </div>

          {/* Valores */}
          <div className="text-black  flex flex-col items-center bg-white dark:bg-gray-800  rounded-lg p-6 hover:shadow-xl transition-shadow">
            <div className="p-4 bg-red-600 text-white rounded-full mb-4">
              <Gem className="w-8 h-8" />
            </div>
            <h2 className="text-xl font-bold mb-2">Valores</h2>
            <ul className="list-disc list-inside">
              <li>Integridad</li>
              <li>Compromiso</li>
              <li>Excelencia</li>
              <li>Innovación</li>
              <li>Trabajo en equipo</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVisionValues;