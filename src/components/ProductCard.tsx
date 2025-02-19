import React from "react";
import { BsFire } from "react-icons/bs";

interface ProductCardProps {
  imageUrl: string;
  title: string;
  rating: number;
  reviews: number;
  price: number;
  oldPrice: number;
  countdown: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  title,
  rating,
  reviews,
  price,
  oldPrice,
  countdown,
}) => {
  return (
    <div className="lg:w-[20%] bg-white hover:shadow-md rounded-lg overflow-hidden m-4">
      {/* Product Image */}
      <div className="relative">
        <img src={imageUrl} alt={title} className="w-full object-cover" />
        <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow hover:bg-gray-200">
          <img src="/Heart.png" alt="Direction Image" className="h-6 w-6" />
        </button>
      </div>

      {/* Countdown */}
      <div className="bg-[#F3637E] text-white text-center py-3 px-10 flex items-center justify-center rounded-md w-fit mx-auto">
  <img className="w-5 h-5 mr-2" src="/fire.png" alt="Fire Icon" />
  {countdown}
</div>






      {/* Product Details */}
      <div className="p-4 m-[15px]">
        <h2 className="text-[18px] font-semibold">{title}</h2>

        {/* Rating */}
        <div className="flex items-center">
          <div className="flex text-yellow-400">
            {Array.from({ length: 5 }, (_, i) => (
              <svg
                key={i}
                className={`w-5 h-5 ${
                  i < rating ? "fill-current" : "text-gray-300"
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9" />
              </svg>
            ))}
          </div>
          <p className="ml-2 text-sm text-gray-600">{reviews} Review(s)</p>
        </div>

        {/* Price */}
        <div className="mt-2">
          <span className="text-teal-600 font-bold text-xl">
            ${price.toFixed(2)}
          </span>
          <span className="text-gray-400 line-through ml-2">
            ${oldPrice.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
