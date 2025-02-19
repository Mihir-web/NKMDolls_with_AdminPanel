import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sampleImg from "../assets/hero_img.png";

interface ContactDetail {
  icon: string;
  text: string;
  alt: string;
}

interface NavLink {
  text: string;
  href: string;
}

const Header: React.FC = () => {
  const [username, setUsername] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    // Fetch username from localStorage
    const storedUsername = localStorage.getItem("username");
    setUsername(storedUsername);
  }, []);

  const contactDetails: ContactDetail[] = [
    {
      icon: "/phone.png",
      text: "+888-0000-000",
      alt: "Phone icon",
    },
    {
      icon: "/message.png",
      text: "info@nkmdolls.ca",
      alt: "Email icon",
    },
  ];

  const navLinks: NavLink[] = [
    { text: "Home", href: "/" },
    { text: "About Us", href: "#about-us" },
    { text: "Products", href: "/products" },
    { text: "FAQ", href: "#faq" },
    { text: "Contact Us", href: "#contact-us" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("username");
    window.location.href = "/logout"; // Redirect to the logout functionality
  };

  return (
    <header className="flex flex-col shadow-[0px_2px_4px_rgba(0,0,0,0.24)]">
      {/* Contact Section */}
      <div className="flex overflow-hidden flex-wrap gap-10 justify-between items-center px-16 py-3 w-full bg-teal-600 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-6 items-start text-base text-center text-white whitespace-nowrap min-w-[240px]">
          {contactDetails.map((detail, index) => (
            <div
              key={index}
              className={`flex gap-2 items-center ${
                index === 0 ? "font-semibold" : "font-medium"
              }`}
            >
              <img
                loading="lazy"
                src={detail.icon}
                alt={detail.alt}
                className="object-contain w-6 aspect-square"
              />
              <div>{detail.text}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Section */}
      <div
        className="relative bg-center-top bg-cover p-0 text-white"
        style={{ backgroundImage: `url(${sampleImg})` }}
      >
        <nav className="flex relative gap-2.5 justify-between items-center px-16 py-6 w-full text-white border-b bg-zinc-800 bg-opacity-40 border-neutral-600 min-h-[84px] max-md:px-5 max-md:max-w-full">
          {/* Logo */}
          <a href="/">
            <img
              loading="lazy"
              src="/logo.png"
              alt="Company logo"
              className="object-contain w-[83px]"
            />
          </a>

          {/* Navigation Links */}
          <div className="flex gap-5 items-center">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="px-2.5 py-2 text-base font-medium whitespace-nowrap hover:text-teal-300 transition-colors"
              >
                {link.text}
              </a>
            ))}
          </div>

          {/* User Section */}
          <div className="flex gap-4 items-center relative">
            <div className="flex overflow-hidden gap-2.5 justify-center items-center px-8 py-4 text-base rounded-tl-xl rounded-tr rounded-bl rounded-br-xl border border-teal-500 border-solid bg-zinc-800 bg-opacity-40 shadow-[0px_4px_24px_rgba(0,22,27,0.24)] transition-all duration-300 w-48">
              <img
                loading="lazy"
                src="/search.png"
                alt="Search icon"
                className="object-contain w-6 aspect-square"
              />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent border-none outline-none text-white w-full"
              />
            </div>
            {username ? (
              <div className="relative">
                <span
                  className="text-lg flex items-center cursor-pointer"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  Welcome, {username}! <span className="ml-2">▼</span>
                </span>
                {dropdownOpen && (
                  <ul className="absolute right-0 mt-2 bg-white text-black shadow-lg rounded-md">
                    <li
                      className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                      onClick={handleLogout}
                    >
                      Logout
                    </li>
                  </ul>
                )}
              </div>
            ) : (
              <Link to="/login">
                <button className="px-8 py-3 text-lg bg-teal-500 rounded-tl-xl rounded-tr rounded-bl rounded-br-xl shadow-[0px_4px_24px_rgba(0,0,0,0.24)] hover:bg-teal-600 transition-colors">
                  Login
                </button>
              </Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
