import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const login = localStorage.getItem("login");

  if (login == "true") {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
