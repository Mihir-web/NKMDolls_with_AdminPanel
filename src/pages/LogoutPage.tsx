import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LogoutPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      try {
        // Retrieve the token from local storage
        const token = localStorage.getItem("token");

        if (!token) {
          console.warn("No token found. Redirecting to home.");
          // Clear local storage and force reload
          localStorage.clear();
          window.location.href = "/";
          return;
        }

        // Call the backend logout API
        const response = await fetch("http://localhost:5000/api/auth/logout", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          console.log("User logged out successfully.");

          // Clear local storage
          localStorage.clear();

          // Force reload to reset React state and ensure proper logout
          window.location.href = "/";
        } else {
          console.error("Failed to log out. Redirecting to home.");

          // Clear local storage as a fallback
          localStorage.clear();
          window.location.href = "/";
        }
      } catch (error) {
        console.error("Logout error:", error);

        // Fallback to ensure user is logged out on the frontend
        localStorage.clear();
        window.location.href = "/";
      }
    };

    logout();
  }, [navigate]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <p className="text-lg text-gray-700">Logging out...</p>
    </div>
  );
};

export default LogoutPage;
