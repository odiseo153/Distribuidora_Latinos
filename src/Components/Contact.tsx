import React from "react";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <div className="py-12 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold text-black dark:text-gray-200 mb-6">
            Información de Contacto
          </h2>
       

          {/* Información de Contacto */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-blue-500" />
              <div>
                <h3 className="text-lg font-semibold text-black dark:text-gray-200">
                  Teléfono
                </h3>
                <p className="text-black dark:text-gray-400">+1 809 236 0100</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-blue-500" />
              <div>
                <h3 className="text-lg font-semibold text-black dark:text-gray-200">
                  Correo Electrónico
                </h3>
                <p className="text-black dark:text-gray-400">distribuidoralatinos@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-blue-500" />
              <div>
                <h3 className="text-lg font-semibold text-black dark:text-gray-200">
                  Dirección
                </h3>
                <p className="text-black dark:text-gray-400">
                  Calle Miramar Norte #71, Los Frailes 1ro, Santo Domingo Este
                </p>
              </div>
            </div>
          </div>

          {/* Redes Sociales */}
          <div className="flex space-x-6 mt-8">
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
