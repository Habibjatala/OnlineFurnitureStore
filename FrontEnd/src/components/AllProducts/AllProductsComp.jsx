import React, { useState } from "react";
import InternalPagesLayout from "../../common/InternalPagesLayout/InternalPagesLayout";
import ProductsFilters from "./ProductsFilters/ProductsFilters";
import ProductsSection from "./ProductsSection/ProductsSection";
import { IoMdClose } from "react-icons/io";

import "./AllProductsComp.scss";
import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";
const AllProductsComp = () => {
  const [filters, setFilters] = useState(false);
  const [displaySorter, setDisplaySorter] = useState(false);
  const [isArrowUp, setIsArrowUp] = useState(true);

  return (
    <div className="py-7">
      {filters ? (
        <div className="filtersMobile  px-2">
          <div className="filterHeading py-2 text-[#000000] font-semibold text-[20px] flex items-center gap-2">
            <IoMdClose onClick={() => setFilters(false)} />
            Filter
          </div>
          <ProductsFilters />
        </div>
      ) : (
        ""
      )}
      {displaySorter ? (
        <div className="filtersMobile  px-2">
          <div className="filterHeading py-2 text-[#000000] font-semibold text-[20px] flex items-center gap-2">
            <IoMdClose onClick={() => setDisplaySorter(false)} />
            Sorter
          </div>
          <div className="mobileSorter flex items-center gap-1">
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
          </div>
        </div>
      ) : (
        ""
      )}
      <InternalPagesLayout>
        <div className="filterHeading py-2 text-[#000000] font-semibold text-[20px] max-[768px]:hidden">
          Filter
        </div>
        <div className="allProducts flex max-[768px]:flex-col w-full py-1 gap-7">
          <div className="productsFilters w-[20%] max-[768px]:hidden">
            <ProductsFilters />
          </div>
          <div className="hidden max-[768px]:flex justify-center items-center gap-4 ">
            <div
              className="filters border px-16 max-[500px]:px-10 border-box py-1"
              onClick={() => setFilters(!filters)}
            >
              Filters
            </div>
            <div
              className="sortBy border px-16 max-[500px]:px-10 border-box py-1"
              onClick={() => setDisplaySorter(!displaySorter)}
            >
              Sort By
            </div>
          </div>
          <div className="w-[80%] max-[768px]:w-full">
            <ProductsSection />
          </div>
        </div>
      </InternalPagesLayout>
    </div>
  );
};

export default AllProductsComp;
