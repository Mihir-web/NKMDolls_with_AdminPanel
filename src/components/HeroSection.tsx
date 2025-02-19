import React, { useState } from "react";
import sampleImg from "../assets/hero_img.png"; // Make sure this path is correct
import samplevid from "../assets/HomeVideo.mp4"; // Path to your video file
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleVideoOpen = () => {
    setIsVideoOpen(true);
  };

  return (
    <section
      className="relative bg-cover bg-center p-8 text-white"
      style={{ backgroundImage: `url(${sampleImg})` }} // Wrap image path in `url()`
    >
      <div className="flex flex-col items-start max-w-md space-y-6 m-20 ">
        <h1 className="text-6xl font-bold">
          Every Curl <br />
          Tells a Story
        </h1>
        <p className="text-lg">
          Litora erat fringilla porta orci class viverra. Vehicula fusce class
          consequat tempor nostra ac tempor. Posuere vestibulum.
        </p>
        <div className="flex space-x-4">
          <a
            href="/product"
            className="bg-teal-500 px-6 py-3 rounded-tl-xl rounded-tr rounded-bl rounded-br-xl hover:bg-teal-600 transition-all"
          >
            Shop Now
          </a>

          <button
            className="flex items-center bg-gray-900 bg-opacity-30 px-6 py-3 rounded-tl-xl rounded-tr rounded-bl rounded-br-xl border border-teal-600 hover:bg-opacity-80 transition-all"
            onClick={handleVideoOpen}
          >
            <span className="mr-2">Watch Demo Video</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14.752 11.168l-4.197 2.41A1 1 0 019 12.682V7.318a1 1 0 011.555-.832l4.197 2.41a1 1 0 010 1.664z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative w-11/12 max-w-2xl">
            <video
              width="100%"
              height="400"
              controls
              autoPlay
              className="rounded-lg"
            >
              <source src={samplevid} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-2 right-2 bg-red-600 text-white px-4 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
