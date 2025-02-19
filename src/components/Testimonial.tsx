import React from "react";

const Testimonial = () => {
  return (
    <div className="flex justify-between items-start bg-white p-8 rounded-lg shadow-lg w-11/12 mx-auto my-8">
      <div className="w-1/3">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">
          What Our Customers Say About Us
        </h2>
        <p className="text-gray-500 mb-6">
          Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
          placerat nisi, adipiscing mauris non purus parturient.
        </p>
        <button className="hover:bg-teal-600 rounded-tl-xl rounded-tr rounded-bl rounded-br-xl bg-teal-500 text-white px-4 py-2 rounded-md shadow-md mb-8">
          View All
        </button>
        <div className="flex space-x-4">
        <button className="w-12 h-12 flex items-center justify-center rounded-lg bg-white shadow-md hover:bg-gray-100">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 text-teal-500"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 19.5L8.25 12l7.5-7.5"
    />
  </svg>
</button>

<button className="w-12 h-12 flex items-center justify-center rounded-lg bg-white shadow-md hover:bg-gray-100">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 text-teal-500"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 4.5l7.5 7.5-7.5 7.5"
    />
  </svg>
</button>

        </div>
      </div>
      <div className="flex items-start w-2/3 bg-white p-6 rounded-lg shadow-md">
        <div className="w-1/3">
          <img
            src="/baby.png"
            alt="Testimonial image"
            className="w-full h-full rounded-lg object-cover"
          />
        </div>
        <div className="w-2/3 ml-6">
          <div className="flex items-center mb-4">
            <img
              src="/avatar.png"
              alt="Avatar"
              className="w-10 h-10 rounded-full mr-3"
            />
            <div className="font-bold text-gray-800">Sarah D.</div>
          </div>
          <p className="text-gray-600 mb-4">
            Litora erat fringilla porta orci class viverra. Vehicula fusce class
            consequat tempor nostra ac tempor. Posuere vestibulum interdum
            commodo auctor montes cubilia. Vel quam arcu semper augue; curae
            vulputate montes eros. Amet mus dolor sagittis; augue convallis hac
            imperdiet aptent condimentum.
          </p>
          <div className="flex items-center text-gray-500 text-sm">
            <span className="mr-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 inline-block mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 12.75l3 3 7.5-7.5"
                />
              </svg>
              03 People found this useful
            </span>
            <span>7 days ago</span>
          </div>
          <div className="flex items-center mt-4">
          <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="#d4af37"
      width="24px"
      height="24px"
    >
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
            <span className="ml-2 font-bold text-teal-500">5.0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
