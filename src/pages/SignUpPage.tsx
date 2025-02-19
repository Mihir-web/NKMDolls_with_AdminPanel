import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUpPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | JSX.Element | null>(
    null
  );
  const navigate = useNavigate();

  const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (email !== confirmEmail) {
      setErrorMessage("Emails do not match.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    setErrorMessage(null); // Clear any existing error message

    try {
      console.log("Username:", username);
      console.log("Email:", email);

      const response = await fetch(`${apiUrl}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();
      console.log("API Response:", data);

      // Check for both 200 and 202 status codes as success
      if (data.status === 200 || data.status === 202) {
        console.log("Registration successful:", data);

        // Store the registered details in localStorage
        localStorage.setItem("registeredEmail", email);
        localStorage.setItem("registeredUsername", username);

        console.log("Navigating to /otp-verify-signup in 4 seconds...");
        setTimeout(() => {
          navigate("/otp-verify-signup");
        }, 3000); // 4-second delay
      } else {
        console.error("Registration failed:", data.message);
        setErrorMessage(data.message || "Sign up failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during sign up:", error);
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  const disableCopyPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Side Image */}
      <div
        className="w-1/2 bg-cover bg-center"
        style={{ backgroundImage: "url(/login.png)" }}
      ></div>

      {/* Right Side Form */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-white px-20 py-16">
        <div className="flex space-x-4 mb-10">
          <Link to="/login">
            <button className="rounded-tl-xl rounded-tr rounded-bl rounded-br-xl border border-teal-500 text-teal-500 py-3 px-6 rounded text-lg">
              Log In
            </button>
          </Link>
          <button className="rounded-tl-xl rounded-tr rounded-bl rounded-br-xl bg-teal-500 text-white py-3 px-6 rounded text-lg">
            Sign Up
          </button>
        </div>

        <form className="w-full max-w-xl space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
              required
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Your Email ID
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onPaste={disableCopyPaste}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
              required
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="confirm-email"
            >
              Confirm Email
            </label>
            <input
              type="email"
              id="confirm-email"
              placeholder="Confirm Email Address"
              value={confirmEmail}
              onChange={(e) => setConfirmEmail(e.target.value)}
              onPaste={disableCopyPaste}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
              required
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="password"
            >
              Your Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onPaste={disableCopyPaste}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
              required
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="confirm-password"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onPaste={disableCopyPaste}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
              required
            />
          </div>

          {errorMessage && (
            <div className="text-red-600 text-center">{errorMessage}</div>
          )}

          <button
            type="submit"
            className="rounded-tl-xl rounded-tr rounded-bl rounded-br-xl w-full py-4 bg-teal-500 text-white rounded-lg shadow hover:bg-teal-600 text-lg"
          >
            Sign Up
          </button>
          <div className="text-center text-lg text-gray-600 mt-8">
            <Link to="/">
              <a href="#" className="hover:underline">
                Back To Home
              </a>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
