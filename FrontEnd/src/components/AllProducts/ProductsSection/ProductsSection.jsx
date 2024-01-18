import React, { useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import { FaArrowDownLong } from "react-icons/fa6";
import { MdGridView } from "react-icons/md";
import { IoIosList } from "react-icons/io";
import ProductCard from "../../../common/ProductCard/ProductCard";
import turmeric_powder from "../../../assets/cardImgs/turmeric_powder.webp";
import sodium_lactate from "../../../assets/cardImgs/sodium_lactate.jpg";
import productphoto_coenzyme from "../../../assets/cardImgs/productphoto_coenzyme.webp";
import phytosterol from "../../../assets/cardImgs/phytosterol.webp";
const ProductsSection = () => {
  const totalProducts = 59;
  const showingProducts = 20;
  const [isArrowUp, setIsArrowUp] = useState(true);
  const [isGridView, setIsGridView] = useState(true);
  return (
    <div className="allProductParent">
      <div className="topHead flex items-center justify-between max-[768px]:hidden">
        <div className="productsInfo">
          Showing {showingProducts} products out of {totalProducts}
        </div>
        <div className="Filter flex items-center gap-2 ">
          <div className="sort-by text-[16px]">SORT&nbsp;BY</div>
          <select className="w-full py-2 px-1 productFormSelect border border-gray text-[14px]">
            <option value="" disabled></option>
            <option value="chinoCA">Position</option>
            <option value="edisonNJ">Product Name</option>
          </select>
          <div
            className="arrow cursor-pointer"
            onClick={() => setIsArrowUp(!isArrowUp)}
          >
            {isArrowUp ? <FaArrowUpLong /> : <FaArrowDownLong />}
          </div>
          <div className="viewType flex items-center gap-1 border border-gray ">
            <div
              className="cursor-pointer py-2 px-1 bg-red"
              style={isGridView ? { backgroundColor: "#DEDEDE" } : {}}
              onClick={() => setIsGridView(!isGridView)}
            >
              <MdGridView className="text-[22px]" />
            </div>
            <div
              className="cursor-pointer py-2 px-1"
              style={!isGridView ? { backgroundColor: "#DEDEDE" } : {}}
              onClick={() => setIsGridView(!isGridView)}
            >
              <IoIosList className="text-[22px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="productsSection flex items-center max-[768px]:justify-center gap-5 flex-wrap py-5">
        <ProductCard cardImage={productphoto_coenzyme} />
        <ProductCard cardImage={sodium_lactate} />
        <ProductCard cardImage={phytosterol} />
        <ProductCard cardImage={turmeric_powder} />
        <ProductCard cardImage={productphoto_coenzyme} />
        <ProductCard cardImage={sodium_lactate} />
        <ProductCard cardImage={phytosterol} />
        <ProductCard cardImage={turmeric_powder} />
        <ProductCard cardImage={productphoto_coenzyme} />
        <ProductCard cardImage={sodium_lactate} />
        <ProductCard cardImage={phytosterol} />
        <ProductCard cardImage={turmeric_powder} />
        <ProductCard cardImage={productphoto_coenzyme} />
        <ProductCard cardImage={sodium_lactate} />
        <ProductCard cardImage={phytosterol} />
        <ProductCard cardImage={turmeric_powder} />
      </div>
    </div>
  );
};

export default ProductsSection;
