import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const [credential, setCredential] = useState(""); // Unified field for email/username
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | JSX.Element | null>(null);
  const navigate = useNavigate();

  const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null); // Reset error message

    try {
      // Determine if input is email or username
      const isEmail = credential.includes('@');
      const payload = isEmail
        ? { email: credential, password }
        : { username: credential, password };

      const response = await fetch(`${apiUrl}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload), // Send appropriate fields
      });

      const data = await response.json();

      if (data.status === 200) {
        // Store the username in localStorage
        localStorage.setItem("username", data.data.username);
        localStorage.setItem("token", data.data.id_token); // Optional, if token is needed
        navigate("/"); // Redirect to homepage
      } else {
        setErrorMessage(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage("An error occurred. Please check your connection and try again.");
    }
  };

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
          <button className="rounded-tl-xl rounded-tr rounded-bl rounded-br-xl bg-teal-500 text-white py-4 px-8 rounded text-xl">
            Log In
          </button>
          <Link to="/signup">
            <button className="rounded-tl-xl rounded-tr rounded-bl rounded-br-xl border border-teal-500 text-teal-500 py-4 px-8 rounded text-xl">
              Sign Up
            </button>
          </Link>
        </div>

        <form className="w-full max-w-xl space-y-10" onSubmit={handleSubmit}>
          <div>
            <label
              className="block text-lg font-medium text-gray-700"
              htmlFor="credential"
            >
              Email or Username
            </label>
            <input
              type="text"
              id="credential"
              placeholder="Enter Email or Username"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              className="mt-3 block w-full px-5 py-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 text-lg"
              required
            />
          </div>

          <div>
            <label
              className="block text-lg font-medium text-gray-700"
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
              className="mt-3 block w-full px-5 py-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 text-lg"
              required
            />
          </div>

          {errorMessage && (
            <div className="text-red-600 text-center">{errorMessage}</div>
          )}

          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="h-6 w-6 accent-red-700 focus:ring-red-500 border-gray-300 rounded"
            />
            <label htmlFor="remember" className="ml-3 text-lg text-gray-600">
              Remember Password
            </label>
          </div>

          <button
            type="submit"
            className="rounded-tl-xl rounded-tr rounded-bl rounded-br-xl w-full py-4 px-8 bg-teal-500 text-white rounded-lg shadow hover:bg-teal-600 text-xl"
          >
            Log In
          </button>

          <div className="text-center text-lg text-gray-600 mt-8">
            <Link to="/forget">
              <a href="#" className="hover:underline">
                Forgot Password?
              </a>
            </Link>
          </div>
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

export default LoginPage;
