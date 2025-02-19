import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import sampleImg from '../assets/ProductImage.png';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ArrowButton = ({ direction }) => (
  <button className="w-12 h-12 flex items-center justify-center rounded-lg bg-white shadow-md hover:bg-gray-100">
    {direction === 'left' ? (
      <FaChevronLeft className="text-teal-500" size={24} />
    ) : (
      <FaChevronRight className="text-teal-500" size={24} />
    )}
  </button>
);

const products = [
  {
    imageUrl: "/dollred.png",
    title: 'Becca: Rev up the playtime Excitement!',
    rating: 5,
    reviews: 23,
    price: 54.0,
    oldPrice: 54.0,
    countdown: '04:23:08:30',
  },
  {
    imageUrl: "/dollblue.png",
    title: 'Becca: Rev up the playtime Excitement!',
    rating: 5,
    reviews: 23,
    price: 54.0,
    oldPrice: 54.0,
    countdown: '04:23:08:30',
  },
  {
    imageUrl: "/dollred.png",
    title: 'Becca: Rev up the playtime Excitement!',
    rating: 5,
    reviews: 23,
    price: 54.0,
    oldPrice: 54.0,
    countdown: '04:23:08:30',
  },
  {
    imageUrl: "/dollblue.png",
    title: 'Becca: Rev up the playtime Excitement!',
    rating: 5,
    reviews: 23,
    price: 54.0,
    oldPrice: 54.0,
    countdown: '04:23:08:30',
  },
  {
    imageUrl: sampleImg,
    title: 'Becca: Rev up the playtime Excitement!',
    rating: 3,
    reviews: 23,
    price: 5.0,
    oldPrice: 5.0,
    countdown: '04:23:08:30',
  },
  // Additional products as needed...
];

// Helper function to convert countdown string to seconds
const convertCountdownToSeconds = (countdown) => {
  const [days, hours, minutes, seconds] = countdown.split(':').map(Number);
  return days * 86400 + hours * 3600 + minutes * 60 + seconds;
};

// Helper function to format seconds to "DD:HH:MM:SS"
const formatSecondsToCountdown = (seconds) => {
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${String(days).padStart(2, '0')}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
};

const DealsOfDay: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleItems = 4; // Number of items to display at once
  const [countdowns, setCountdowns] = useState(
    products.map((product) => convertCountdownToSeconds(product.countdown))
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdowns((prevCountdowns) =>
        prevCountdowns.map((time) => (time > 0 ? time - 1 : 0))
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, products.length - visibleItems)
    );
  };

  const visibleProducts = products.slice(
    currentIndex,
    currentIndex + visibleItems
  );

  return (
    <section className="w-full p-20">
      <div className="flex flex-wrap justify-center">
        <div style={{ marginRight: '800px' }}>
          <h2 className="text-2xl font-bold mr-50">Deal Of The Day</h2>
        </div>
        <div className="flex justify-between items-center mb-4">
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

      <div className="flex flex-wrap justify-center">
        {visibleProducts.map((product, index) => (
          <ProductCard
            key={index}
            {...product}
            countdown={formatSecondsToCountdown(countdowns[currentIndex + index])}
          />
        ))}
      </div>
    </section>
  );
};

export default DealsOfDay;
