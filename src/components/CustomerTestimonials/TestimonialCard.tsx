import React from "react";

interface TestimonialCardProps {
  name: string;
  rating: number;
  content: string;
  imageSrc: string;
  usefulCount: number;
  daysAgo: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  rating,
  content,
  imageSrc,
  usefulCount,
  daysAgo,
}) => {
  return (
    <article className="overflow-hidden py-8 pr-12 pl-6 bg-white rounded-lg border-2 border-solid border-stone-200 shadow-[0px_8px_12px_rgba(0,147,134,0.12)] max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[32%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src={imageSrc}
            alt={`Testimonial from ${name}`}
            className="object-contain grow w-full rounded-md aspect-[0.95] max-md:mt-10"
          />
        </div>
        <div className="flex flex-col ml-5 w-[68%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start w-full max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-wrap gap-10 justify-between items-center self-stretch w-full font-semibold max-md:max-w-full">
              <div className="flex gap-4 items-center self-stretch my-auto text-lg text-gray-600">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/81724df8e21da489eebb8f6adb466f4ec21730c4651219ac790e6b607921064d?placeholderIfAbsent=true&apiKey=301088363f3e48efb5f4626d7787f8fb"
                  alt=""
                  className="object-contain shrink-0 self-stretch my-auto rounded-none aspect-square w-[50px]"
                />
                <span className="self-stretch my-auto">{name}</span>
              </div>
              <div className="self-stretch px-8 my-auto w-16 text-2xl text-center text-teal-500 whitespace-nowrap rotate-[-2.7755575615628914e-17rad]">
                {rating.toFixed(1)}
              </div>
            </div>
            <p className="mt-6 max-w-full text-base font-medium text-gray-600 rounded-none w-[487px] max-md:max-w-full">
              {content}
            </p>
            <div className="flex gap-5 items-center mt-6 text-base text-gray-600">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f81778a228cecc0af8edc3171a2aa0f89a035eadc30f61ed8c0d487666e2d13d?placeholderIfAbsent=true&apiKey=301088363f3e48efb5f4626d7787f8fb"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              />
              <div className="flex gap-5 items-center self-stretch my-auto min-w-[240px]">
                <span className="self-stretch my-auto">
                  {usefulCount} People found this useful
                </span>
                <div className="shrink-0 self-stretch my-auto w-0 h-6 border border-solid border-stone-300" />
                <span className="self-stretch my-auto">{daysAgo} days ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default TestimonialCard;
