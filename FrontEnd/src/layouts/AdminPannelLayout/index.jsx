import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../../components/Sidebar";
import { useSelector } from "react-redux";
const AdminPannelLayout = () => {
  const AllProducts = useSelector((state) => state.product.Products);
  return (
    <div className="flex flex-col md:flex-row ">
      <div className="w-full md:w-64">{AllProducts.length && <SideBar />} </div>
      <Outlet />
    </div>
  );
};

export default AdminPannelLayout;
