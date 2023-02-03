import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import useAdmin from "../../Hooks/userAdmin/useAdmin";
import Loader from "../../Pages/Shared/Loader/Loader";

const AdminRoute = ({ children }) => {
  const { user, loading, logOut } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <Loader></Loader>
  }

  if (user && isAdmin) {
    return children;
  }
  logOut();
return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;