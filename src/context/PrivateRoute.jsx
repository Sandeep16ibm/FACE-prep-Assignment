import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = ({}) => {
  const status = localStorage.getItem("loggedIn");
  console.log(status);

  return status ? <Outlet /> : <Navigate to={"/"} />;
};

export default PrivateRoute;
