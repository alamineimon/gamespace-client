import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import Loader from "../../Pages/Shared/Loader/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading, userLoading } = useContext(AuthContext);
  const location = useLocation();
  if (loading || userLoading) {
    return <Loader></Loader>;
  }
  if (user && user?.uid) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
