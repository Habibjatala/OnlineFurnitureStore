import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ProductCard from "../../../common/ProductCard/ProductCard";
import img1 from "../../../assets/cardImgs/img1.webp";
import calcium_citrate_powder from "../../../assets/cardImgs/calcium_citrate_powder.webp";
import turmeric_powder from "../../../assets/cardImgs/turmeric_powder.webp";
import sodium_lactate from "../../../assets/cardImgs/sodium_lactate.jpg";
import productphoto_coenzyme from "../../../assets/cardImgs/productphoto_coenzyme.webp";
import phytosterol from "../../../assets/cardImgs/phytosterol.webp";
import rutin_joywin from "../../../assets/cardImgs/rutin_joywin.webp";
import ascorbyl_palmitate from "../../../assets/cardImgs/ascorbyl_palmitate.webp";
import SellerCard from "../../../common/SellerCard/SellerCard";
import shriahimsa from "../../../assets/SellerCardImages/shriahimsa.png";
import neepo from "../../../assets/SellerCardImages/neepo.png";
import grandhoyo from "../../../assets/SellerCardImages/grandhoyo.png";
import Joywin from "../../../assets/SellerCardImages/Joywin.jpg";
const AllProducts = () => {
  const navigate = useNavigate();
  return (
    // <div className="">
    <div className="bg-[#F6F6F6] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="productsCardsWrapper bg-white p-4 flex-wrap">
        <h1 className="text-[22px] text-[#262626] font-semibold py-4">
          Top Products
        </h1>
        <div className="productsCardsSection grid  max-w-[500px]:grid-cols-1 grid-cols-2 gap-4">
          <ProductCard
            cardImage={img1}
            onClick={() =>
              // <Link
              //   to={`/homepage/trending-ingredients `}
              //   state={{ img1 }}
              // ></Link>
              console.log("Hello")
            }
          />
          <ProductCard cardImage={calcium_citrate_powder} />
          <ProductCard cardImage={rutin_joywin} />
          <ProductCard cardImage={ascorbyl_palmitate} />
        </div>
        <div
          className="underline text-[#D26338] p-3 text-right cursor-pointer"
          onClick={() => navigate("/homepage/trending-ingredients")}
        >
          View Top Products
        </div>
      </div>
      <div className="productsCardsWrapper bg-white p-4 flex-wrap">
        <h1 className="text-[22px] text-[#262626] font-semibold py-4">
          Top Sellers
        </h1>
        <div className="topSellerCardsSection grid max-w-[500px]:grid-cols-1 grid-cols-2 gap-4">
          <SellerCard cardImage={shriahimsa} />
          <SellerCard cardImage={neepo} />
          <SellerCard cardImage={grandhoyo} />
          <SellerCard cardImage={Joywin} />
        </div>
        <div
          className="underline text-[#D26338] p-3 text-right cursor-pointer"
          onClick={() => navigate("/homepage/trending-ingredients")}
        >
          View All Sellers
        </div>
      </div>

      <div className="productsCardsWrapper bg-white p-4 flex-wrap">
        <h1 className="text-[22px] text-[#262626] font-semibold py-4">
          Promotions
        </h1>
        <div className="productsCardsSection  grid max-w-[500px]:grid-cols-1 grid-cols-2 gap-4">
          <ProductCard cardImage={productphoto_coenzyme} />
          <ProductCard cardImage={sodium_lactate} />
          <ProductCard cardImage={phytosterol} />
          <ProductCard cardImage={turmeric_powder} />
        </div>
        <div
          className="underline text-[#D26338] p-3 text-right cursor-pointer"
          onClick={() => navigate("/homepage/trending-ingredients")}
        >
          View All Promotios
        </div>
      </div>
    </div>
    // </div>
  );
};

export default AllProducts;
