"use client";

import { useState, useEffect } from "react";
import { Star, Minus, Plus } from "lucide-react";
import { Link } from "react-router-dom";

export default function Component() {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [productDetails, setProductDetails] = useState(null);

  // Function to fetch product details from backend
  const fetchProductDetails = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/details/6736a83e09e786524e7242c6");
      if (!response.ok) {
        throw new Error("Failed to fetch product details");
      }
      const data = await response.json();

      // Store the product details in localStorage
      localStorage.setItem("productDetails", JSON.stringify(data));

      setProductDetails(data);
    } catch (error) {
      console.error("Error fetching product details:", error);

      // Fallback to localStorage if API fails
      const storedDetails = localStorage.getItem("productDetails");
      if (storedDetails) {
        setProductDetails(JSON.parse(storedDetails));
      }
    }
  };

  useEffect(() => {
    // Check localStorage for saved quantity and product details
    const savedQuantity = localStorage.getItem("quantity");
    const storedDetails = localStorage.getItem("productDetails");

    if (savedQuantity) {
      setQuantity(parseInt(savedQuantity, 10));
    }

    if (storedDetails) {
      setProductDetails(JSON.parse(storedDetails));
    } else {
      fetchProductDetails();
    }
  }, []);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
    localStorage.setItem("quantity", newQuantity.toString());
  };

  const handleAddToCart = () => {
    const cartItem = {
      id: productDetails._id,
      name: productDetails.productName,
      description: productDetails.description,
      originalPrice: productDetails.originalPrice,
      discountedPrice: productDetails.price,
      discount: productDetails.discount,
      quantity,
      imageUrl: images[selectedImage], // Use the currently selected image
    };

    const updatedCart = [...(JSON.parse(localStorage.getItem("cart") || "[]"))];
    const existingItemIndex = updatedCart.findIndex((item) => item.id === cartItem.id);

    if (existingItemIndex !== -1) {
      updatedCart[existingItemIndex] = { ...cartItem };
    } else {
      updatedCart.push(cartItem);
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const images = [
    "/dollblueproduct.png?height=300&width=500",
    "/dollproduct.png?height=300&width=500",
    "/dollproduct.png?height=300&width=500",
    "/dollproduct.png?height=300&width=500",
    "/hair.png?height=300&width=500",
  ];

  if (!productDetails) {
    return <div>Loading...</div>; // Show a loader or placeholder while fetching data
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="flex gap-4">
          <div className="flex flex-col gap-5">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`border-2 rounded-lg overflow-hidden w-24 h-24 ${
                  selectedImage === index ? "border-primary" : "border-gray-200"
                }`}
              >
                <img
                  src={img}
                  alt={`Product view ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
          <div className="flex-1">
            <img
              src={images[selectedImage]}
              alt="Main product view"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

        <div className="space-y-6">
          <h1 className="text-3xl font-semibold text-gray-800">
            {productDetails.productName}
          </h1>

          <p className="text-gray-600">{productDetails.description}</p>

          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold">{productDetails.rating}+</span>
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span className="text-gray-600">{productDetails.ratingCount} Ratings</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold text-primary text-teal-500">
              ${productDetails.price.toFixed(2)}
            </span>
            <span className="text-lg text-gray-500 line-through">
              ${productDetails.originalPrice.toFixed(2)}
            </span>
            <span className="text-rose-500">({productDetails.discount})</span>
          </div>

          <p className="text-sm text-gray-500">Inclusive of all taxes</p>

          <div className="space-y-2">
            <label className="text-gray-700">Quantity</label>
            <div className="flex items-center gap-4">
              <button
                onClick={() => handleQuantityChange(Math.max(1, quantity - 1))}
                className="p-2 border rounded-md hover:bg-gray-50"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-12 text-center">{quantity}</span>
              <button
                onClick={() => handleQuantityChange(quantity + 1)}
                className="p-2 border rounded-md hover:bg-gray-50"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="flex-1 px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5">
              Add To Wishlist
            </button>
            <Link to="/cart">
              <button
                onClick={handleAddToCart}
                className="flex-1 px-6 py-3 bg-teal-500 text-white border-2 border-teal-500 font-semibold rounded-lg hover:bg-teal-600"
              >
                Add To Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
