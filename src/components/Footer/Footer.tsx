import React from "react";
import SocialIcons from "./SocialIcons";
import HelpfulLinks from "./HelpfulLinks";
import ContactInfo from "./ContactInfo";
import Top from "../../assets/top.svg";

interface FooterProps {
  logoSrc: string;
  description: string;
  copyrightYear: number;
  companyName: string;
}

const Footer: React.FC<FooterProps> = ({
  logoSrc,
  description,
  copyrightYear,
  companyName,
}) => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll animation
    });
  };

  return (
    <footer className="flex gap-10 justify-center items-center px-16 py-10 bg-teal-600 bg-opacity-10 max-md:px-5">
      <div className="flex flex-wrap gap-10 items-center self-stretch my-auto min-w-[240px] max-md:max-w-full">
        <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[424px] max-md:max-w-full">
          <div className="flex flex-col w-full text-base font-medium text-gray-600 max-md:max-w-full">
            <img
              loading="lazy"
              src={logoSrc}
              alt={`${companyName} logo`}
              className="object-contain max-w-full aspect-[0.99] w-[200px]"
            />
            <p>{description}</p>
          </div>
          <div className="flex flex-col mt-8 max-w-full w-[362px]">
            <SocialIcons />
            <div className="mt-4 w-full border border-gray-600 border-solid min-h-[1px]" />
            <p className="mt-4 text-base font-medium text-gray-600">
              Copyright © {copyrightYear}. {companyName}. All rights reserved.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-10 justify-center items-start self-stretch my-auto text-gray-600 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-wrap gap-10 items-start min-w-[240px] max-md:max-w-full">
            <HelpfulLinks />
            <ContactInfo />
          </div>
          <div
            onClick={handleScrollToTop}
            className="cursor-pointer" // Add a cursor pointer for better UX
          >
            <img
              loading="lazy"
              src={Top}
              alt="Scroll to top"
              className="object-contain shrink-0 rounded-none aspect-square w-[80px]"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
