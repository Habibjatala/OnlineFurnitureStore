import React from "react";
import { Navigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
const PrivateRouteWrapper = ({ children }) => {
  //   const navigate = useNavigate();
  console.log("Wrapper");
  const token = localStorage.getItem("token") || true;
  const userData = JSON.parse(localStorage.getItem("user"));
  const isAdmin = userData?.user?.isAdmin;
  return token && isAdmin ? <Navigate to="/admin-pannel" /> : children;
};

export default PrivateRouteWrapper;
