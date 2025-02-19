import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const OTPVerificationPageForSignup: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  // Retrieve email and username from localStorage
  const email = localStorage.getItem("registeredEmail");
  const username = localStorage.getItem("registeredUsername");

  const apiUrl = "http://localhost:5000/api/auth/verify";

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return; // Only allow single character
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    // Automatically move to the next input
    if (value && index < otp.length - 1) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const code = otp.join(""); // Combine OTP digits into a single string

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, username, code }),
      });

      const data = await response.json();

      if (response.status === 200) {
        console.log("Verification successful:", data);
        navigate("/login"); // Redirect to homepage after successful verification
      } else {
        setErrorMessage(data.message || "Verification failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during verification:", error);
      setErrorMessage("An error occurred. Please try again.");
    }
  };

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
            A One-Time Password has been sent to: <strong>{email}</strong>
          </p>
          <p className="text-gray-600">Username: <strong>{username}</strong></p>
        </div>

        <form className="w-full max-w-md space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              className="block text-base font-medium text-gray-700"
              htmlFor="otp"
            >
              Enter OTP
            </label>
            <div className="flex justify-between mt-2 space-x-2">
              {otp.map((value, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  value={value}
                  maxLength={1}
                  className="w-12 h-12 border border-gray-300 rounded-md text-center text-lg focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                  onChange={(e) => handleChange(index, e.target.value)}
                />
              ))}
            </div>
          </div>

          {errorMessage && (
            <p className="text-red-500 text-center">{errorMessage}</p>
          )}

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
            Verify
          </button>
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
};

export default OTPVerificationPageForSignup;
