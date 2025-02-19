import React from "react";
import { Link } from "react-router-dom";

function ForgotPasswordPage() {
  return (
    <div className="flex min-h-screen">
      {/* Left Side Image */}
      <div
        className="w-1/2 bg-cover bg-center"
        style={{ backgroundImage: "url(/login.png)" }}
      >
        {/* Image only, no text */}
      </div>

      {/* Right Side Form */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-white px-20 py-20">
        <div className="flex space-x-4 mb-10">
          <Link to="/login">
            <button className="rounded-tl-xl rounded-tr rounded-bl rounded-br-xl border border-teal-500 text-teal-500 py-3 px-6 rounded text-lg">
              Log In
            </button>
          </Link>
          <Link to="/signup">
            <button className="rounded-tl-xl rounded-tr rounded-bl rounded-br-xl border border-teal-500 text-teal-500 py-3 px-6 rounded text-lg">
              Sign Up
            </button>
          </Link>
        </div>

        <div className="w-full max-w-md text-center mb-6">
          <h2 className="text-xl font-semibold text-gray-700">
            Forgot password?
          </h2>
          <p className="text-gray-600">We’ll send you an OTP to reset it.</p>
        </div>

        <form className="w-full max-w-md space-y-6">
          <div>
            <label
              className="block text-base font-medium text-gray-700"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email Address"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
          <br />

          <Link to="/otp">
            <button
              type="submit"
              className="rounded-tl-xl rounded-tr rounded-bl rounded-br-xl w-full py-3 bg-teal-500 text-white rounded-md shadow hover:bg-teal-600 text-lg"
            >
              Send OTP
            </button>
          </Link>
        </form>

        <div className="flex items-center justify-center mt-8">
          <span className="text-teal-500 text-lg mr-2">←</span>
          <Link to="/login">
            <a href="#" className="text-gray-600 text-lg hover:underline">
              Back to login
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
