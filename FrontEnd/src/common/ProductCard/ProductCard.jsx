import React from "react";
import img1 from "../../assets/cardImgs/img1.webp";
import { Link, useNavigate } from "react-router-dom";
const ProductCard = ({ cardImage }) => {
  const navigate = useNavigate();
  return (
    <div
      className="cardParent flex flex-col items-start justify-start gap-8  shadow-lg w-[190px] max-[500px]:w-[140px] max-[768px]:justify-center"
      onClick={() =>
        //  <Link to={`/homepage/trending-ingredients`}></Link>
        navigate("/productDetails/:id", { state: { cardImage: cardImage } })
      }
    >
      <div className="cardImage w-full">
        <img src={cardImage} alt="cardImg" className="w-full h-[100%]" />
      </div>
      <div className="productName text-[14px] font-semibold px-2 border-box">
        <h1>Choline L-Bitartrate Coated by Salvi Chemic...</h1>
      </div>
      <div className="manufacturerName text-[14px] px-2 py-2 border-box">
        <h1>By Salvi Chemical Industries</h1>
      </div>
    </div>
  );
};

export default ProductCard;
