import React from "react";
import { Navigate } from "react-router";
import useAuth from "../useAuthHook/useAuth";

const PrivateRoute = ({ children }) => {
  const auth = useAuth();
  return auth ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
