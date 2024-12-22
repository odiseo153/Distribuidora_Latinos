import React from 'react';

const About: React.FC = () => {
    return (
        <div className=" text-gray-800 py-16 px-6 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Image Section */}
                <div className="overflow-hidden rounded-lg shadow-lg">
                    <img 
                        src="dl_logo.png" 
                        alt="Distribuidora Latinos" 
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                </div>

                {/* Text Section */}
                <div>
                    <h1 className="text-4xl font-extrabold mb-6 text-blue-600 tracking-tight">
                        Sobre Nosotros
                    </h1>
                    <p className="mb-6 leading-relaxed text-lg text-gray-700">
                        Somos <span className="font-semibold text-blue-500">Distribuidora Latinos</span>, una empresa dedicada a la distribución de productos de alta calidad en toda la región. 
                        Nuestro compromiso es ofrecer a nuestros clientes los mejores productos y servicios, garantizando siempre la satisfacción y confianza.
                    </p>
                    <p className="mb-6 leading-relaxed text-lg text-gray-700">
                        Nos especializamos en la distribución de una amplia gama de productos, incluyendo alimentos, bebidas, productos de limpieza y mucho más. 
                        Trabajamos con las mejores marcas del mercado para asegurar que nuestros clientes reciban solo lo mejor.
                    </p>
             
                </div>
            </div>
        </div>
    );
};

export default About;
