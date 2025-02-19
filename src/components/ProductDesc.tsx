"use client";

import {
  ChevronDown,
  ChevronUp,
  Star,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";
import { useState } from "react";

export default function Component() {
  const [expandedSections, setExpandedSections] = useState({
    safety: false,
    materials: false,
    wash: false,
    refund: false,
    shipping: false,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="w-[90%] mx-auto p-6 font-bold">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-6">
          <section>
            <h2 className=" font-bold text-2xl font-medium text-gray-700 mb-2">
              Product Description
            </h2>
            <p className="text-gray-600">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Inceptos
              aliquam morbi consectetur nostra ac; ultrices natoque pellentesque
              rhoncus.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-lg font-medium text-gray-700 mb-2">
              Size And Weight
            </h3>
            <div className="space-y-1 text-gray-600">
              <p>HEAD TO TOE: 18" inch in height</p>
              <p>Weight: 1.57 lbs </p>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-lg font-medium text-gray-700">
              Specifications
            </h3>

            {/* Safety Section */}
            <div className="border-b border-gray-200">
              <button
                onClick={() => toggleSection("safety")}
                className="flex justify-between items-center w-full py-4 text-left"
              >
                <span className="font-medium">Safety</span>
                {expandedSections.safety ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
              {expandedSections.safety && (
                <div className="pb-4 text-gray-600">
                  At NKM Dolls, safety is a top priority. Each doll is crafted
                  with non-toxic, eco-friendly materials to ensure a safe play
                  experience for children of all ages. Our dolls are free from
                  harmful chemicals, such as formaldehyde and other harsh
                  additives, so parents can feel confident about their children
                  handling and playing with them. The vinyl used for the dolls'
                  limbs is durable and phthalate-free, providing a sturdy yet
                  soft feel. Additionally, the dolls’ hair, made from 100% human
                  hair, is carefully sourced and prepared to meet high safety
                  standards. It can be styled, washed, and heated with proper
                  supervision, much like natural hair. With NKM Dolls, parents
                  can trust that each product is designed to encourage
                  imaginative play, self-expression, and skill-building—all
                  within a safe, kid-friendly design
                </div>
              )}
            </div>

            {/* Materials Section */}
            <div className="border-b border-gray-200">
              <button
                onClick={() => toggleSection("materials")}
                className="flex justify-between items-center w-full py-4 text-left"
              >
                <span className="font-medium">Materials</span>
                {expandedSections.materials ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
              {expandedSections.materials && (
                <div className="pb-4 space-y-4">
                  <p className="text-gray-600">
                    NKM Dolls are crafted from high quality, non-toxic and
                    sustainable materials like soft polyester fibers. Our dolls
                    are not only durable but they can be included in your
                    child’s bathtime.
                    <br/><br/>
                    <li>
                      Our NKM Doll, Imani is the standard doll, she comes with a
                      detachable outfit
                    </li>
                    <li>
                      Imani’s limbs are vinyl with and a soft body lower torso
                    </li>
                    <li>
                      Additional outfits and matching t-shirts for youth can be
                      purchased separately
                    </li>
                  </p>
                  
                </div>
              )}
            </div>

            {/* Additional collapsible sections */}
            {["wash", "refund", "shipping"].map((section) => (
              <div key={section} className="border-b border-gray-200">
                <button
                  onClick={() =>
                    toggleSection(section as keyof typeof expandedSections)
                  }
                  className="flex justify-between items-center w-full py-4 text-left"
                >
                  <span className="font-medium capitalize">
                    {section === "wash" ? "Wash & care" : section}
                  </span>
                  {expandedSections[
                    section as keyof typeof expandedSections
                  ] ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>
              </div>
            ))}
          </section>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-medium text-gray-700">Ratings</h2>
              <Star className="w-6 h-6 text-teal-500" />
            </div>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl font-bold">4.8</span>
              <div className="text-sm text-gray-500">2.9k verified Buyers</div>
            </div>

            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center gap-2">
                <span className="w-3">{rating}</span>
                <Star className="w-4 h-4" />
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="h-2 rounded-full"
                    style={{
                      width:
                        rating === 5
                          ? "90%"
                          : rating === 4
                          ? "20%"
                          : rating === 3
                          ? "5%"
                          : rating === 2
                          ? "2%"
                          : "5%",
                      backgroundColor:
                        rating === 3
                          ? "#D69A2A" // Dark Yellow for rating 3
                          : rating === 2 || rating === 1
                          ? "#9B2C2C" // Dark Red for ratings 2 and 1
                          : "#38B2AC", // Teal for rating 5 and 4
                    }}
                  />
                </div>
                  <span className="w-6 text-right">
                    {rating === 5
                      ? "18"
                      : rating === 4
                      ? "4"
                      : rating === 3
                      ? "0"
                      : rating === 2
                      ? "0"
                      : "1"}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-medium text-gray-700">
                Customer Photos
              </h2>
              <button className="text-rose-500">View More</button>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <img
                src="/penguin.png"
                alt="Customer photo"
                className="w-full aspect-square object-cover rounded-lg"
              />
              <img
                src="/teddy.png"
                alt="Customer photo"
                className="w-full aspect-square object-cover rounded-lg"
              />
              <img
                src="/child.png"
                alt="Customer photo"
                className="w-full aspect-square object-cover rounded-lg"
              />
            </div>
          </section>

          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-medium text-gray-700">
                Lovely Reviews
              </h2>
              <button className="text-rose-500">View All</button>
            </div>

            {[1, 2].map((review) => (
              <div key={review} className="mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-teal-500 text-white rounded px-2 py-1 text-sm flex items-center gap-1">
                    <span>5.0</span>
                    <Star className="w-4 h-4" />
                  </div>
                  <span className="text-gray-600">
                    Non sit platea egestas at augue.
                  </span>
                </div>

                <p className="text-gray-600 mb-4">
                  Eleifend nec nulla tristique morbi tellus hendrerit purus
                  mattis. Sollicitudin lacus ultricies magnis dapibus dui.
                  Rhoncus lorem pellentesque arcu sit finibus maximus primis.
                </p>

                <div className="grid grid-cols-4 gap-2 mb-4">
                  <img
                    src="/violet.png"
                    alt="Review photo"
                    className="w-full aspect-square object-cover rounded-lg"
                  />
                  <img
                    src="/yellow.png"
                    alt="Review photo"
                    className="w-full aspect-square object-cover rounded-lg"
                  />
                  <img
                    src="/violet.png"
                    alt="Review photo"
                    className="w-full aspect-square object-cover rounded-lg"
                  />
                  <div className="relative">
                    <img
                      src="/yellow.png"
                      alt="Review photo"
                      className="w-full aspect-square object-cover rounded-lg"
                    />
                    <button className="absolute inset-0 bg-black/50 text-white flex items-center justify-center text-sm font-medium rounded-lg">
                      View More
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src="/baby.png"
                      alt="Amroj Nandha"
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="font-medium">Amroj Nandha</span>
                  </div>
                  <div className="text-sm text-gray-500">1st Aug 2023</div>
                </div>

                <div className="flex items-center gap-4 mt-4">
                  <button className="flex items-center gap-1 text-gray-500">
                    <ThumbsUp className="w-4 h-4" />
                    <span>84</span>
                  </button>
                  <button className="flex items-center gap-1 text-gray-500">
                    <ThumbsDown className="w-4 h-4" />
                    <span>02</span>
                  </button>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
