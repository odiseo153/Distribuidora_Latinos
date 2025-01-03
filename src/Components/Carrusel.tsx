import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
//import {foto1} from '../../images/app/foto1.jpg';

const images = [
  "../../images/app/foto1.jpg",
  "../../images/app/foto2.jpg",
  "../../images/app/foto3.jpg",
  "../../images/app/foto4.jpg",
];

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="bg-muted py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-center mb-8">Da un vistazo dentro</h2>
        <div className="relative flex justify-center items-center">
          <button onClick={prevSlide} className="absolute left-0 z-30 p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors duration-300">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div className="w-full max-w-4xl overflow-hidden rounded-lg shadow-lg">
            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="w-full h-96 object-cover" />
          </div>
          <button onClick={nextSlide} className="absolute right-0 z-30 p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors duration-300">
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
        <div className="flex justify-center mt-4 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-green-500' : 'bg-gray-300'} transition-colors duration-300`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};