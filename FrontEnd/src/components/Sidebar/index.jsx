import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpeg";
import NavLinks from "../navLinks";
const SideBar = () => {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-black">
      <Link to="/" className={`font-bold text-white `}>
        <div className="w-32 md:w-40 flex items-center justify-center gap-2 pb-[25px]">
          {/* <span className="text-white text-[18px] font-medium">Shop Now</span> */}
          <img src={logo} alt="logo" />
        </div>
        <NavLinks />
      </Link>
    </div>
  );
};

export default SideBar;
