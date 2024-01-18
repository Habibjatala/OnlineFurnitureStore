import React from "react";
import { Dropdown } from "flowbite-react";
import "./ProductFilter.scss";
const ProductsFilters = () => {
  return (
    <div className="filterParent ">
      <div className="filterBox border px-2 py-3 flex flex-col gap-5 rounded">
        <div className="inStock flex flex-col items-start">
          <label for="inStock" className="text-[14px]">
            In Stock
          </label>
          <div className="flex items-center gap-[5px]">
            <input
              type="radio"
              id="inStock"
              name="inStock"
              value="inStock"
            ></input>
            <div className="text-[14px]">{"Yes"}</div>
            <div className="text-[14px]">{"(43)"}</div>
          </div>
        </div>
        <div className="productForm ">
          <div className="text-[14px]">Product Form</div>
          <select className="w-full py-2 px-1 productFormSelect border border-gray text-[14px]">
            <option value="" disabled></option>
            <option value="liquid">Liquid{" (30)"}</option>
            <option value="oil">Oil{" (2)"}</option>
            <option value="powder">Powder{" (11)"}</option>
          </select>
        </div>
        <div className="application">
          <div className="applicationHeading">Aplication</div>
          <div className="applicationOption">
            <input type="radio" id="animalNutrition"></input>
            <label for="animalNutrition" className="px-2 text-[14px]">
              Animal Nutrition {" (3)"}
            </label>
          </div>
          <div className="applicationOption">
            <input type="radio" id="cognitiveSupport"></input>
            <label for="cognitiveSupport" className="px-2 text-[14px]">
              Cognitive Support {" (1)"}
            </label>
          </div>
          <div className="applicationOption">
            <input type="radio" id="digestiveSupport"></input>
            <label for="digestiveSupport" className="px-2 text-[14px]">
              Digestive Support {" (4)"}
            </label>
          </div>
          <div className="applicationOption">
            <input type="radio" id="foodBeverages"></input>
            <label for="foodBeverages" className="px-2 text-[14px]">
              Food and Beverages {" (57)"}
            </label>
          </div>
          <div className="applicationOption">
            <input type="radio" id="hairSkin"></input>
            <label for="hairSkin" className="px-2 text-[14px]">
              Hair,Skin, and Nails {" (6)"}
            </label>
          </div>
          <div className="applicationOption">
            <input type="radio" id="immuneSupport"></input>
            <label for="immuneSupport" className="px-2 text-[14px]">
              Immune Support {" (5)"}
            </label>
          </div>
          <div className="applicationOption">
            <input type="radio" id="joinSuport"></input>
            <label for="joinSuport" className="px-2 text-[14px]">
              Join Support {" (2)"}
            </label>
          </div>
          <div className="applicationOption">
            <input type="radio" id="sportsNutrition"></input>
            <label for="sportsNutrition" className="px-2 text-[14px]">
              Sports Nutrition {" (3)"}
            </label>
          </div>
          <div className="applicationOption">
            <input type="radio" id="weightManagement"></input>
            <label for="weightManagement" className="px-2 text-[14px]">
              Weight Management{" (1)"}
            </label>
          </div>
        </div>
        <div className="certifications">
          <div className="certificationsHeading">Certifications</div>

          <div className="certificationsOption">
            <input type="radio" id="joinSuport"></input>
            <label for="joinSuport" className="px-2 text-[14px]">
              Organic {" (2)"}
            </label>
          </div>
          <div className="certificationsOption">
            <input type="radio" id="sportsNutrition"></input>
            <label for="sportsNutrition" className="px-2 text-[14px]">
              Kosher {" (12)"}
            </label>
          </div>
          <div className="certificationsOption">
            <input type="radio" id="weightManagement"></input>
            <label for="weightManagement" className="px-2 text-[14px]">
              Halal{" (10)"}
            </label>
          </div>
        </div>
        <div className="wareHouse ">
          <div className="text-[14px]">Warehouse</div>
          <select className="w-full py-2 px-1 productFormSelect border border-gray text-[14px]">
            <option value="" disabled></option>
            <option value="chinoCA">Chino CA{" (8)"}</option>
            <option value="edisonNJ">Edison, Nj{" (9)"}</option>
            <option value="sellerWarehouse">Seller Warehouse{" (39)"}</option>
          </select>
        </div>
        <div className="price ">
          <div className="text-[14px]">Price</div>
          <select className="w-full py-2 px-1 productFormSelect border border-gray text-[14px]">
            <option value="" disabled></option>
            <option value="100">$0 - $100</option>
            <option value="200">$100 - $200</option>
            <option value="300">$0 - $100</option>
          </select>
        </div>
        <div className="Factory ">
          <div className="text-[14px]">Factory</div>
          <select className="w-full py-2 px-1 productFormSelect border border-gray text-[14px]">
            <option value="" disabled></option>
            <option value="botanicInnovations">
              Botanic Innovations {"3"}
            </option>
            <option value="CustomFlavors">Custom Flavors {"13"}</option>
            <option value="daffodilPharmachem">
              Daffodil Pharmachem {"23"}
            </option>
            <option value="botanicInnovations">
              Botanic Innovations {"3"}
            </option>
            <option value="CustomFlavors">Custom Flavors {"13"}</option>
            <option value="daffodilPharmachem">
              Daffodil Pharmachem {"23"}
            </option>
          </select>
        </div>
        <div className="countryOrigin ">
          <div className="text-[14px]">Country or Origin</div>
          <select className="w-full py-2 px-1 productFormSelect border border-gray text-[14px]">
            <option value="" disabled></option>
            <option value="100">Brazil {" (1)"}</option>
            <option value="200">France {" (1)"} </option>
            <option value="300">United States {" 3"}</option>
            <option value="300">India {" 48"}</option>
            <option value="300">Vietnam {" 6"}</option>
          </select>
        </div>
        <div className="privateLabel flex flex-col items-start">
          <label for="privateLabel" className="text-[14px]">
            Private Label
          </label>
          <div className="flex items-center gap-[5px]">
            <input
              type="radio"
              id="privateLabel"
              name="privateLabel"
              value="privateLabel"
            ></input>
            <div className="text-[14px]">{"Yes"}</div>
            <div className="text-[14px]">{"(0)"}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsFilters;
