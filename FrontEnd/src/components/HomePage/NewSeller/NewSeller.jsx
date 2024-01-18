import React from "react";
import SellerCard from "../../../common/SellerCard/SellerCard";
import shriahimsa from "../../../assets/SellerCardImages/shriahimsa.png";
import neepo from "../../../assets/SellerCardImages/neepo.png";
import grandhoyo from "../../../assets/SellerCardImages/grandhoyo.png";
import Joywin from "../../../assets/SellerCardImages/Joywin.jpg";
const NewSeller = () => {
  return (
    <div className="bg-white">
      <div className="headingNewSeller text-[26px] pl-10 py-4 font-semibold">
        <h1>New Sellers</h1>
      </div>
      <div className="newSellerParent  flex items-center grid max-[500px]:grid-cols-1 max-[700px]:grid-cols-2 gap-4 py-5  grid-cols-6  bg-white">
        <SellerCard cardImage={shriahimsa} />
        <SellerCard cardImage={neepo} />
        <SellerCard cardImage={grandhoyo} />
        {/* <SellerCard cardImage={Joywin} /> */}
        <SellerCard cardImage={shriahimsa} />
        <SellerCard cardImage={neepo} />
        <SellerCard cardImage={grandhoyo} />
      </div>
    </div>
  );
};

export default NewSeller;
