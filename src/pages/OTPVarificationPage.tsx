import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const OTPVerificationPage: React.FC = () => {
  const [registeredEmail, setRegisteredEmail] = useState<string | null>(null);

  useEffect(() => {
    // Fetch the registered email from localStorage
    const email = localStorage.getItem("registeredEmail");
    setRegisteredEmail(email);
  }, []);

  return (
    <div className="flex min-h-screen">
      {/* Left Side Image */}
      <div
        className="w-1/2 bg-cover bg-center"
        style={{ backgroundImage: "url(/login.png)" }}
      ></div>

      {/* Right Side Form */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-white px-20 py-20">
        <div className="flex space-x-4 mb-10">
          <Link to="/login">
            <button className="rounded-tl-xl rounded-tr rounded-bl border border-teal-500 text-teal-500 py-3 px-6 rounded text-lg">
              Log In
            </button>
          </Link>
          <Link to="/signup">
            <button className="rounded-tl-xl rounded-tr rounded-bl border border-teal-500 text-teal-500 py-3 px-6 rounded text-lg">
              Sign Up
            </button>
          </Link>
        </div>

        <div className="w-full max-w-md text-center mb-6">
          <p className="text-gray-600">
            A One-Time Password has been sent to:{" "}
            <strong>{registeredEmail || "your email"}</strong>
          </p>
        </div>

        <form className="w-full max-w-md space-y-6">
          <div>
            <label
              className="block text-base font-medium text-gray-700"
              htmlFor="otp"
            >
              Enter OTP
            </label>
            <div className="flex justify-between mt-2 space-x-2">
              {Array.from({ length: 6 }).map((_, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  className="w-12 h-12 border border-gray-300 rounded-md text-center text-lg focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                />
              ))}
            </div>
          </div>

          <p className="text-center text-gray-600">
            Didn’t Receive Code?{" "}
            <a href="#" className="text-red-500 hover:underline">
              Resend.
            </a>
          </p>

          <button
            type="submit"
            className="rounded-tl-xl rounded-tr rounded-bl w-full py-3 bg-teal-500 text-white rounded-md shadow hover:bg-teal-600 text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default OTPVerificationPage;
