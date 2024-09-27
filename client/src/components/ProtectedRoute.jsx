/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { toast } from "react-toastify";

function ProtectedRoute({ children }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    toast.error("Please login to access this page");
    return <Navigate to="/login"></Navigate>;
  }
  return children;
}

export default ProtectedRoute;
