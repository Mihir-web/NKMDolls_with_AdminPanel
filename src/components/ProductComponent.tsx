import { ArrowLeftRight, CreditCard, Truck, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import React, {useEffect, useState} from "react";

interface Product {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
}


export default function Component() {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    // Fetch Becca's product data from the backend
    fetch('http://localhost:5000/api/products/becca')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        return response.json();
      })
      .then((data) => {
        setProduct(data)

        console.clear()
        console.log('data', data)
      })
      .catch((error) => console.error('Error fetching product:', error));
  }, []);

  return (
    <>
      <br /> <br />
      {
        product && (
          <div className="container mx-auto p-6">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Product Image Section */}
          <div className="relative">
            <img
              src="/inami.png"
              alt="Becca Doll"
              className="mx-auto h-[630px] w-auto"
            />
          </div>

          {/* Product Info Section */}
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold">NKM Doll - Imani</h1>

            <div className="space-y-4">
              <h2 className="text-lg font-medium text-gray-900">DESCRIPTION</h2>
              <div className="text-gray-600 space-y-2">
              {product.description.split('\n').map((paragraph, index) => (
               <p key={index}>{paragraph}</p>
               ))}
              </div>
            </div>
            <br />
            <div className="space-y-4">
              <p className="text-2xl font-bold text-[#3CC7A6]">${product.price}</p>
              <Link
                to="/product"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <br />
                <button className="rounded-tl-xl rounded-tr rounded-bl rounded-br-xl bg-[#3CC7A6] hover:bg-[#2bb090] text-white font-bold py-2 px-4 rounded">
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Service Features */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-red-50 p-4 shadow">
            <div className="flex items-center gap-3">
              <img src="/money.png" alt="Arrow Icon" className="h-12 w-12" />
              <div>
                <h3 className="font-semibold">MONEY Return</h3>
                <p className="text-sm text-gray-600">
                  Back guarantee under 7 days.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-blue-50 p-4 shadow">
            <div className="flex items-center gap-3">
            <img src="/wallet.png" alt="Arrow Icon" className="h-12 w-12" />
              <div>
                <h3 className="font-semibold">Secure Payment</h3>
                <p className="text-sm text-gray-600">
                  On every order over $150
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-green-50 p-4 shadow">
            <div className="flex items-center gap-3">
            <img src="/truck.png" alt="Arrow Icon" className="h-12 w-12" />
              <div>
                <h3 className="font-semibold">Home Delivery</h3>
                <p className="text-sm text-gray-600">
                  Free delivery to your home
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-purple-50 p-4 shadow">
            <div className="flex items-center gap-3">
            <img src="/clock.png" alt="Arrow Icon" className="h-12 w-12" />
              <div>
                <h3 className="font-semibold">24/7 Support</h3>
                <p className="text-sm text-gray-600">
                  Dedicated support in 24hrs.
                </p>
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
        )
      }
    </>
  );
}
