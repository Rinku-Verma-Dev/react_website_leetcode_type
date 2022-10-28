import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Home from "../screen/home/home";
import LoginScr from "../screen/login/login";
import Profile from "../components/profile/profile";
import PrivateRoute from "./privateRoute/privateRoute";
import useAuth from "./useAuthHook/useAuth";

const Routing = () => {
  const auth = useAuth();
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute key={1}>
            <Home />
          </PrivateRoute>
        }
      />

      <Route
        path="/login"
        element={auth ? <Navigate to="/" /> : <LoginScr />}
      />

      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default Routing;
