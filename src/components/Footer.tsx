import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="flex gap-10 justify-center items-center px-16 py-10 mt-12 w-full bg-teal-600 bg-opacity-10 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-between items-center self-stretch my-auto min-w-[240px] w-[1320px] max-md:max-w-full">
        <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[424px] max-md:max-w-full">
          <div className="flex flex-col w-full text-base font-medium text-gray-600 max-md:max-w-full">
            <img
              loading="lazy"
              src="/dark.png"
              className="object-contain max-w-full aspect-[0.99] w-[200px]"
              alt="Company Logo"
            />
            <p className="max-md:max-w-full">
              Vel quam arcu semper augue; curae vulputate montes eros. Amet mus
              dolor sagittis; augue convallis.
            </p>
          </div>
          <div className="flex flex-col mt-8 max-w-full w-[362px]">
            <div className="flex gap-4 items-start self-start min-h-[38px]">
              <a
                href="#facebook"
                aria-label="Visit our Facebook page"
                className="text-gray-600 hover:text-teal-600 transition-colors duration-300"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="#twitter"
                aria-label="Visit our Twitter page"
                className="text-gray-600 hover:text-teal-600 transition-colors duration-300"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#instagram"
                aria-label="Visit our Instagram page"
                className="text-gray-600 hover:text-teal-600 transition-colors duration-300"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="#linkedin"
                aria-label="Visit our LinkedIn page"
                className="text-gray-600 hover:text-teal-600 transition-colors duration-300"
              >
                <FaLinkedinIn size={24} />
              </a>
            </div>
            <hr className="mt-4 w-full border border-gray-600 border-solid" />
            <p className="mt-4 text-base font-medium text-gray-600">
              Copyright © {new Date().getFullYear()}. NKMDOLLS. All rights
              reserved.
            </p>
          </div>
        </div>
        <nav className="flex flex-wrap gap-10 justify-center items-start self-stretch my-auto text-gray-600 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-wrap gap-10 items-start min-w-[240px] max-md:max-w-full">
            <div className="flex flex-col min-w-[240px]">
              <h3 className="text-2xl font-semibold">Helpful Links</h3>
              <ul className="flex gap-10 items-start mt-6 text-base font-medium">
                <li>
                  <ul>
                    <li>
                      <a href="#about">About Us</a>
                    </li>
                    <li className="mt-4">
                      <a href="#faq">Help and FAQ</a>
                    </li>
                    <li className="mt-4">
                      <a href="#shop">Shop</a>
                    </li>
                    <li className="mt-4">
                      <a href="#contact">Contact Us</a>
                    </li>
                    <li className="mt-4">
                      <a href="#terms">Terms of Service</a>
                    </li>
                    <li className="mt-4">
                      <a href="#privacy">Privacy Policy</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li>
                      <a href="#tracking">Order Tracking</a>
                    </li>
                    <li className="mt-4">
                      <a href="#cancellation">Cancellation</a>
                    </li>
                    <li className="mt-4">
                      <a href="#returns">Returns</a>
                    </li>
                    <li className="mt-4">
                      <a href="#shipping">Shipping</a>
                    </li>
                    <li className="mt-4">
                      <a href="#terms">Terms of Service</a>
                    </li>
                    <li className="mt-4">
                      <a href="#return-policy">Return Policy</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h3 className="text-2xl font-semibold">Contact Info</h3>
              <address className="flex flex-col mt-6 text-base font-medium not-italic">
                <p>1 Harbour Square, Toronto, ON M5J 1A6, Canada</p>
                <p className="mt-4">
                  Email: <a href="mailto:info@nkmdolls.ca">info@nkmdolls.ca</a>
                </p>
                <p className="mt-4">
                  Telephone: <a href="tel:+18880000000">+1 (888) 000-0000</a>
                </p>
              </address>
            </div>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
