import React from 'react';

interface ImageComponentProps {
  src: string;
  alt: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({ src, alt }) => {
  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className="object-contain w-full aspect-[2.16] max-md:max-w-full"
    />
  );
};

export default ImageComponent;