import React from "react";
import ProductCard from "./BestProductCard";
import sampleImg from "../assets/image (1).png";

const products = [
  {
    imageUrl: "/dollred.png",
    title: "Becca: Rev up the playtime Excitement!",
    rating: 3,
    reviews: 23,
    price: 54.0,
    oldPrice: 54.0,
    countdown: "04:23:08:30",
  },
  {
    imageUrl: "/dollblue.png",
    title: "Becca: Rev up the playtime Excitement!",
    rating: 5,
    reviews: 23,
    price: 54.0,
    oldPrice: 54.0,
    countdown: "04:23:08:30",
  },
  {
    imageUrl: "/dollred.png",
    title: "Becca: Rev up the playtime Excitement!",
    rating: 5,
    reviews: 23,
    price: 54.0,
    oldPrice: 54.0,
    countdown: "04:23:08:30",
  },
  {
    imageUrl: "/dollblue.png",
    title: "Becca: Rev up the playtime Excitement!",
    rating: 5,
    reviews: 23,
    price: 54.0,
    oldPrice: 54.0,
    countdown: "04:23:08:30",
  },
  // Add more products as needed
];

const BestSellers: React.FC = () => {
  return (
    <section className="py-8">
      <h1 className="text-2xl font-semibold mb-6 pl-20">Best Sellers</h1>
      <div className="flex flex-wrap justify-center">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
         
        ))}
      </div>
      <div className="flex flex-wrap justify-center">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
         
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
