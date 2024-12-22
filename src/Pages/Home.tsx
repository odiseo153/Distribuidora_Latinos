import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Carousel } from '../Components/Carrusel';
import CategoryCard from '../Components/CategoryCard';
import ImageTextOverlay from '../Components/ImageTextOverlay';
import About from '../Components/About';
import MissionVisionValues from '../Components/Misions';
import Contact from '../Components/Contact';

export default function Home() {
  const categories = [
    { name: 'Desechables', image: 'https://renovapack.com/wp-content/uploads/2022/09/contenedores-bagazo-trigo-1067x800.jpg' },
    { name: 'Embutidos', image: 'https://artemonte.com/wp-content/uploads/Beneficios-de-comer-embutido-768x432.png' },
    { name: 'Pasta', image: 'https://foodandwineespanol.com/wp-content/uploads/2019/10/dectada-pasta.webp' },
    { name: 'Cereales', image: 'https://cards.algoreducation.com/_next/image?url=https%3A%2F%2Ffiles.algoreducation.com%2Fproduction-ts%2F__S3__d28b7889-7383-43c9-8a04-4608923ec17e&w=3840&q=75' },
    { name: 'Bebidas', image: 'https://i0.wp.com/baresycocteles.com/wp-content/uploads/2023/10/1366_2000.jpg?fit=1024%2C653&ssl=1' },
    { name: 'Alcohol', image: 'https://neoactives.com/cdn/shop/articles/Alcohol_600x.jpg?v=1620147243' },
    { name: 'Refrescos', image: 'https://lh5.googleusercontent.com/proxy/RBqHqL8tX4GpmlASnhbau5l2HcazmvEvAAeP7Sq7reu7_uKt7oCm3gp3jDEOwwzsVk9e0QSLWS7Dxxg_wm6au7JvnyLRifUOtoc7abA03lFdDaPj3xW5twORkiw' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <ImageTextOverlay />

      <main className="container mx-auto px-4 py-8">
        {/* Carousel Section */}
        <section className="mb-12">
          <Carousel />
        </section>

        {/* Categories Section */}
        <section className="mb-12 bg-gradient-to-r from-green-50 to-green-100 p-8 rounded-lg shadow-lg">
          <h2 className="text-4xl font-extrabold mb-6 text-green-900 text-center">¿Qué Vendemos?</h2>
          <p className="font-medium text-lg mb-8 text-green-800 text-center">
            Ofrecemos una amplia gama de productos, incluyendo:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {categories.map((category) => (
              <CategoryCard
                key={category.name}
                category={category.name}
                image={category.image}
              />
            ))}
          </div>
        </section>

        {/* Mission, Vision & Values */}
        <MissionVisionValues />

        {/* About Section */}
        <About />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
