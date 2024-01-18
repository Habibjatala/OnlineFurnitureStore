import React from "react";
import { Link } from "react-router-dom";

const NavLinks = () => {
  const links = [
    { name: "Create Products", href: "/admin-pannel/create-product" },
  ];
  return (
    <div className="py-2 px-1 bg-[#FAF9F6]">
      {links.map((link) => {
        return (
          <Link key={link?.name} to={link?.href} className="py-5">
            <p className="text-black text-[18px]">{link?.name}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinks;
