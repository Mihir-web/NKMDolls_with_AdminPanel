import React, { useState } from "react";
import ProductCard from "./BestProductCard"; // Assuming your ProductCard is in the same directory
import sampleImg from "../assets/dollImg.jpg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

// Data for the products
const products = [
  {
    imageUrl: "/dollred.png",
    title: "Becca: Rev up the playtime Excitement!",
    rating: 5,
    reviews: 23,
    price: 54.0,
    oldPrice: 54.0,
    countdown: "Limited Time Offer!",
  },
  {
    imageUrl: "/dollblue.png",
    title: "Becca: Rev up the playtime Excitement!",
    rating: 4,
    reviews: 15,
    price: 49.0,
    oldPrice: 59.0,
    countdown: "Hurry up!",
  },
  {
    imageUrl: "/dollred.png",
    title: "Becca: Rev up the playtime Excitement!",
    rating: 4,
    reviews: 15,
    price: 49.0,
    oldPrice: 59.0,
    countdown: "Hurry up!",
  },
  {
    imageUrl: "/dollblue.png",
    title: "Becca: Rev up the playtime Excitement!",
    rating: 4,
    reviews: 15,
    price: 49.0,
    oldPrice: 59.0,
    countdown: "Hurry up!",
  },
  {
    imageUrl: "/dollred.png",
    title: "Becca: Rev up the playtime Excitement!",
    rating: 4,
    reviews: 15,
    price: 49.0,
    oldPrice: 59.0,
    countdown: "Hurry up!",
  },
  {
    imageUrl: "/dollblue.png",
    title: "Becca: Rev up the playtime Excitement!",
    rating: 4,
    reviews: 15,
    price: 49.0,
    oldPrice: 59.0,
    countdown: "Hurry up!",
  },
];

// Categories at the top
const categories = ["All", "Dress", "Shoes", "Hair", "Specials", "Bundles"];

const Youmayalsolike: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleItems = 4; // Number of visible products

  // Handlers for next/previous buttons
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, products.length - visibleItems)
    );
  };

  return (
    <div className="w-full p-8 ">
      {/* Category selection */}
      <div className="flex justify-between items-center mb-4 p-8">
        <h2 className="text-2xl font-bold">You may also like</h2>
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full hover:bg-gray-100"
              >
                {category}
              </button>
            ))}
          </div>
          <div className="flex space-x-4">
            <button
              className="w-12 h-12 bg-white flex items-center justify-center rounded-lg shadow-md hover:bg-gray-100 disabled:opacity-50"
              onClick={handlePrev}
              disabled={currentIndex === 0}
            >
              <FaChevronLeft className="text-teal-500" size={24} />
            </button>

            <button
              className="w-12 h-12 bg-white flex items-center justify-center rounded-lg shadow-md hover:bg-gray-100 disabled:opacity-50"
              onClick={handleNext}
              disabled={currentIndex >= products.length - visibleItems}
            >
              <FaChevronRight className="text-teal-500" size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel with arrow buttons */}
      <div className="relative w-full">
        {/* Product list */}
        <div className="flex flex-wrap justify-center">
          {products
            .slice(currentIndex, currentIndex + visibleItems)
            .map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
        </div>
      </div>
      <br />
      <br />
      {/* View All Button */}
      <div className="flex justify-center mt-4">
        <button className="bg-teal-500 text-white px-6 py-2 rounded-tl-xl rounded-tr rounded-bl rounded-br-xl hover:bg-teal-600">
          View All
        </button>
      </div>
      <br/>  <br/>
    </div>
  );
};

export default Youmayalsolike;
