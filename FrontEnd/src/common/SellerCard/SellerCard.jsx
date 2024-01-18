import React from "react";
const SellerCard = ({ cardImage }) => {
  return (
    <div className="sellerCardParent h-full flex flex-col items-start justify-start gap-8 shadow-lg">
      <div className="cardImage h-[50%]  flex flex-col items-center justify-center">
        <img src={cardImage} alt="cardImg" />
      </div>
      <div className="productName text-[14px] font-semibold px-2 border-box">
        <h1 className="text-[16px] flex-wrap">Shri Ahimsa Naturals</h1>
      </div>
      <div className="manufacturerName cursor-pointer  w-full flex items-center justify-center">
        <h1 className="text-black text-center font-bold text-[16px] w-[80%] px-2 py-3 border-box border  border-black">
          View Seller
        </h1>
      </div>
    </div>
  );
};

export default SellerCard;
