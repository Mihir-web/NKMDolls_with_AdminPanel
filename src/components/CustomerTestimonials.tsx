import React from "react";
import { FC } from "react";

interface Testimonial {
  name: string;
  rating: number;
  content: string;
  imageSrc: string;
  usefulCount: number;
  daysAgo: number;
}

interface CustomerTestimonialsProps {
  testimonials: Testimonial[];
}

const TestimonialCard: FC<Testimonial> = ({
  name,
  rating,
  content,
  imageSrc,
  usefulCount,
  daysAgo,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex gap-6 items-start">
      <div className="flex-1">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold">{name}</h3>
            <span className="text-teal-500 font-bold text-xl">★ {rating}</span>
          </div>
        </div>
        <p className="text-gray-600 mb-4">{content}</p>
        <div className="flex items-center text-gray-400 text-sm">
          <div className="flex items-center gap-1">
            <span>👍</span>
            <span>{usefulCount} People found this useful</span>
          </div>
          <span className="mx-2">|</span>
          <span>{daysAgo} days ago</span>
        </div>
      </div>
      <img
        src={imageSrc}
        alt={name}
        className="w-20 h-20 rounded-full object-cover"
      />
    </div>
  );
};

const CustomerTestimonials: FC<CustomerTestimonialsProps> = ({
  testimonials,
}) => {
  return (
    <section className="flex flex-wrap justify-between items-center mt-16 max-w-full w-[1320px] mx-auto px-4">
      <div className="flex flex-col w-[424px]">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          What Our Customers Say About Us
        </h2>
        <p className="text-gray-600 mb-8">
          Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
          placerat nisi, adipiscing mauris non purus parturient.
        </p>
        <div className="flex gap-4 items-center mb-4">
          <button className="px-6 py-3 bg-teal-500 text-white font-semibold rounded-tl-xl rounded-tr rounded-bl rounded-br-xl shadow-md">
            View All
          </button>
          <button className="w-10 h-10 bg-gray-100 rounded-tl-xl rounded-tr rounded-bl rounded-br-xl flex items-center justify-center shadow">
            {"<"}
          </button>
          <button className="w-10 h-10 bg-gray-100 rounded-tl-xl rounded-tr rounded-bl rounded-br-xl flex items-center justify-center shadow">
            {">"}
          </button>
        </div>
      </div>

      {/* Testimonial Cards Section */}
      <div className="flex-3 w-[600px]">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default CustomerTestimonials;
