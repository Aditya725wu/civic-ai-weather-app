import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { authAPI } from "../api/api";

const ProtectedRoute = ({ children }) => {
  const [isValid, setIsValid] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const verifyToken = async () => {
      if (!token) {
        setIsValid(false);
        return;
      }

      try {
        await authAPI.getUser();
        setIsValid(true);
      } catch (error) {
        // Token is invalid, clear it
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setIsValid(false);
      }
    };

    verifyToken();
  }, [token]);

  if (isValid === null) {
    // Still verifying
    return <div style={{ padding: "100px", textAlign: "center" }}>Loading...</div>;
  }

  if (!isValid) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
