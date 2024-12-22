export default function ImageTextOverlay() {
    return (
      <div className="relative w-full h-[400px] overflow-hidden">
        <img
          src="dl_logo.png"
          alt="Image"
          className="z-0 -mt-50  h-full " 
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-20 p-4">
          <h2 className="text-4xl font-bold mb-4 text-center">Distribuidora Latinos</h2>
          <p className="text-xl text-center max-w-2xl">Distribuidora Latinos es una empresa líder en la distribución de productos a nivel nacional. Nos dedicamos a ofrecer la mejor calidad y servicio a nuestros clientes, asegurando que cada producto llegue a su destino de manera eficiente y puntual. Únase a nosotros y descubra la diferencia que DL puede hacer en su negocio. </p>
        </div>
      </div>
    )
  }
  
  