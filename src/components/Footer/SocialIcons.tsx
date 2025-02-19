import React from "react";

import TwitterIcon from "../../assets/twitter.svg";
import FacebookIcon from "../../assets/facebook.svg";
import InstagramIcon from "../../assets/instagram.svg";
import GithubIcon from "../../assets/github.svg";

const socialIcons = [
  {
    src: TwitterIcon,
    alt: "Social icon 1",
    href: "https://twitter.com", // Add the link here
  },
  {
    src: FacebookIcon,
    alt: "Social icon 2",
    href: "https://www.facebook.com", // Add the link here
  },
  {
    src: InstagramIcon,
    alt: "Social icon 3",
    href: "https://www.instagram.com", // Add the link here
  },
  {
    src: GithubIcon,
    alt: "Social icon 4",
    href: "https://www.github.com", // Add the link here
  },
];

const SocialIcons: React.FC = () => {
  return (
    <div className="flex gap-4 items-start self-start min-h-[38px]">
      {socialIcons.map((icon, index) => (
        <a
          key={index}
          href={icon.href} // Make it clickable
          target="_blank" // Open the link in a new tab
          rel="noopener noreferrer" // Security best practice
        >
          <img
            loading="lazy"
            src={icon.src}
            alt={icon.alt}
            className="object-contain shrink-0 aspect-square w-[38px]"
          />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
