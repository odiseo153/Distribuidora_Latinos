interface CategoryCardProps {
  category: string;
  image: string;
}

export default function CategoryCard({ category, image }: CategoryCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-105">
      <div className="p-4 text-center">
        <img
          src={image}
          alt={category}
          className="w-20 h-20 object-cover rounded-full mx-auto mb-4 border-2 border-green-700"
        />
        <p className="font-semibold text-lg text-green-800">{category}</p>
      </div>
    </div>
  );
}
