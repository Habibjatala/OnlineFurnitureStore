import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct, addProductRequest } from "../../redux/slice/productSlice";
const CreateNewProduct = () => {
  const dispatch = useDispatch();
  const [imagePreview, setImagePreview] = useState(null);

  const [productData, setProductData] = useState({
    productName: "",
    productFactory: "",
    productImage: "",
    productSku: "",
    productCas: "",
    countryOrigin: "",
    ingredientCode: "",
    productMaterial: "",
    productMethod: "",
    productOverview: "",
    productSolubility: "",
    productLife: "",
    chemicalFormula: "",
    molecularWeight: "",
  });

  const handleImage = (event) => {
    const selectedFile = event.target.files[0];

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);

      // Set the selected image to productImage in productData
      setProductData((prevData) => ({
        ...prevData,
        productImage: selectedFile,
      }));
    };
    reader.readAsDataURL(selectedFile);
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Clicked");

    const formData = new FormData();

    formData.append("productName", productData.productName);
    formData.append("productFactory", productData.productFactory);
    formData.append("productImage", productData.productImage);
    formData.append("productSku", productData.productSku);
    formData.append("productCas", productData.productCas);
    formData.append("countryOrigin", productData.countryOrigin);
    formData.append("ingredientCode", productData.ingredientCode);
    formData.append("productMaterial", productData.productMaterial);
    formData.append("productMethod", productData.productMethod);
    formData.append("productOverview", productData.productOverview);
    formData.append("productSolubility", productData.productSolubility);
    formData.append("productLife", productData.productLife);
    formData.append("chemicalFormula", productData.chemicalFormula);
    formData.append("molecularWeight", productData.molecularWeight);

    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }

    console.log("Product Data is :", productData);
    dispatch(addProductRequest(formData));
    // dispatch(addProduct(formData));
  };

  return (
    <>
      <div className="w-[90%] md:w-[60%] 2xl:w-[40%] pt-4 rounded-2xl mt-2 mb-5 shadow-2xl mx-auto">
        <div>
          <p className="mt-10 text-center text-2xl font-bold">
            Add New Product
          </p>
        </div>
        <form
          className=" p-4 mt-10"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <div className="  flex flex-col w-full">
            {imagePreview && (
              <div className="text-center mx-auto  md:w-1/6">
                <img src={imagePreview} alt="Selected" />
              </div>
            )}
            <label htmlFor="fileInput" className="fileLabel cursor-pointer">
              {!imagePreview && (
                <div className="addText text-[14px]">Add Card Image</div>
              )}
              <div className="addImg text-[50px]">+ </div>
            </label>
            <input
              type="file"
              id="fileInput"
              accept=".png, .svg, .jpg, .jpeg"
              onChange={handleImage}
              style={{ display: "none" }}
            />
          </div>

          {/* //////// */}

          <div className="grid  md:grid-cols-12 p-2">
            <div className="w-full md:col-span-5 ">
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Add the Product"
                  name="productName"
                  value={productData.productName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="factory"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Product Factory
                </label>
                <input
                  type="text"
                  id="factory"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Add the product Factory"
                  name="productFactory"
                  value={productData.productFactory}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Product Overview
                </label>
                <input
                  type="text"
                  id="Overview"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Add the Product Overview"
                  name="productOverview"
                  value={productData.productOverview}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="Material"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Starting Material
                </label>
                <input
                  type="text"
                  id="Material"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Add the Product Starting Material"
                  name="productMaterial"
                  value={productData.productMaterial}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="Method"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Processing Method
                </label>
                <input
                  type="text"
                  id="Method"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Add the Product Processing Method"
                  name="productMethod"
                  value={productData.productMethod}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="solubility"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  SOLUBILITY
                </label>
                <input
                  type="text"
                  id="solubility"
                  className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Add the  Product Solubility"
                  name="productSolubility"
                  value={productData.productSolubility}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="ORIGIN"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  COUNTRY OF ORIGIN
                </label>
                <input
                  type="text"
                  id="country_origin"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Add the  COUNTRY OF ORIGIN"
                  name="countryOrigin"
                  value={productData.countryOrigin}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="w-full md:col-span-2"></div>
            <div className=" w-full md:col-span-5 ">
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  PARENT SKU
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Add the Product"
                  name="productSku"
                  value={productData.productSku}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  INGREDIENT CODE
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Add the INGREDIENT CODE"
                  name="ingredientCode"
                  value={productData.ingredientCode}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="CAS"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  CAS
                </label>
                <input
                  type="text"
                  id="cas"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Add the  CAS"
                  name="productCas"
                  value={productData.productCas}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="life"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  GENERAL SHELF LIFE (MTH)
                </label>
                <input
                  type="text"
                  id="shelf_life"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Add the Product"
                  name="productLife"
                  value={productData.productLife}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="chemical_formula"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  CHEMICAL FORMULA
                </label>
                <input
                  type="text"
                  id="chemical_formula"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Add the Product Chemical Formula"
                  name="chemicalFormula"
                  value={productData.chemicalFormula}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="molecular_weight"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  MOLECULAR WEIGHT
                </label>
                <input
                  type="text"
                  id="molecular_weight"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Add the Product MOLECULAR WEIGHT "
                  name="molecularWeight"
                  value={productData.molecularWeight}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* <div className="document">
                <div
                  className="text-[18px] font-extrabold cursor-pointer py-5"
                  onClick={() => {
                    setDocumentToggle(true);
                  }}
                >
                  + Add Document
                </div>
                {documentToggle && (
                  <div className="categoryName flex flex-col gap-[5px] ">
                    <input
                      type="text"
                      id="molecular_weight"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Add Document Name "
                      required
                    />
                    <div className="saveSubCat cursor-pointer bg-blue-600  text-white px-3 py-1 w-[100px] text-center rounded">
                      save
                    </div>
                  </div>
                )}

              
              </div> */}
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-green-600 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateNewProduct;
