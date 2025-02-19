import React from "react";

const helpfulLinks = [
  [
    "About Us",
    "Help and FAQ",
    "Shop",
    "Contact Us",
    "Terms of Service",
    "Privacy Policy",
  ],
  [
    "Order Tracking",
    "Cancellation",
    "Returns",
    "Shipping",
    "Terms of Service",
    "Return Policy",
  ],
];

const HelpfulLinks: React.FC = () => {
  return (
    <nav className="flex flex-col min-w-[240px]">
      <h2 className="text-2xl font-semibold">Helpful Links</h2>
      <div className="flex gap-10 items-start mt-6 text-base font-medium">
        {helpfulLinks.map((column, columnIndex) => (
          <div key={columnIndex} className="flex flex-col">
            {column.map((link, linkIndex) => (
              <a
                href="#"
                key={linkIndex}
                className={linkIndex > 0 ? "mt-4" : ""}
              >
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default HelpfulLinks;
