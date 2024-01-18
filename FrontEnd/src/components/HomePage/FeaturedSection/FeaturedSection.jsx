import React from "react";
import { CiLock } from "react-icons/ci";

const FeaturedSection = () => {
  return (
    <div className="parent shadow-lg bg-white w-[75%] h-screen">
      <div className=" flex justify-end items-end ">
        <h1 className="text-[16px]  bg-black text-white font-semibold text-center px-3 py-3">
          SPONSORED
        </h1>
      </div>
      <h1 className="text-[26px] font-semibold pl-10">
        Featured Ingredients of the Week
      </h1>
      <div className="viewSectioParent  w-full h-[80%] flex flex-col items-center justify-center backdrop-blur-sm bg-white/30">
        <CiLock className="text-[50px] font-extrabold	" />
        <div className="text-[18px] font-bold">
          You must Login to view this feature
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
