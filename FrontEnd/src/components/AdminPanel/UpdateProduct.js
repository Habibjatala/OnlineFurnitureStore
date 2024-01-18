import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProductRequest } from "../../redux/slice/productSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { Buffer } from "buffer";
const UpdateProduct = () => {
  const dispatch = useDispatch();
  let { state } = useLocation();
  const navigate = useNavigate();
  const successMessage = useSelector((state) => state.product.successMessage);

  let productDetail = state?.item;

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

  //  Modal show data
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    navigate("/admin-pannel");
  };

  //   handle Image
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

  //   handle Forms Inputs
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //   SUBMIT FORM DATA
  // SUBMIT FORM DATA
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Clicked");

    const formData = new FormData();

    formData.append("productName", productData.productName);
    formData.append("productFactory", productData.productFactory);
    if (
      productData.productImage &&
      productData.productImage !== productDetail.productImage
    ) {
      formData.append("productImage", productData.productImage);
    }

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

    console.log("Product Data is :", productData);
    dispatch(
      updateProductRequest({ formdata: formData, id: productDetail._id })
    );

    openModal();
  };

  useEffect(() => {
    if (productDetail) {
      const productImageDetail = productDetail?.productImage
        ? `data:${productDetail.productImage.contentType};base64,${Buffer.from(
            productDetail.productImage.data
          ).toString("base64")}`
        : null;
      setImagePreview(productImageDetail);
      setProductData({
        productName: productDetail.productName,
        productFactory: productDetail.productFactory,
        productImage: productDetail.productImage,
        productSku: productDetail.productSku,
        productCas: productDetail.productCas,
        countryOrigin: productDetail.countryOrigin,
        ingredientCode: productDetail.ingredientCode,
        productMaterial: productDetail.productMaterial,
        productMethod: productDetail.productMethod,
        productOverview: productDetail.productOverview,
        productSolubility: productDetail.productSolubility,
        productLife: productDetail.productLife,
        chemicalFormula: productDetail.chemicalFormula,
        molecularWeight: productDetail.molecularWeight,
      });
    }
  }, []);

  return (
    <>
      <div className="w-[90%] md:w-[60%] 2xl:w-[40%] pt-4 rounded-2xl mt-2 mb-5 shadow-2xl mx-auto">
        <div>
          <p className="mt-10 text-center text-2xl font-bold">
            Edit Your Product
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
      <div>
        {showModal ? (
          <>
            <div className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto w-96">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold">Updating Product</h3>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto ">
                    {successMessage ? (
                      <>
                        <div className="text-center mt-7 mb-7">
                          <p className="text-green-800 font-bold ">
                            {" "}
                            Updated Product Successfully
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-green-700 p-6">
                            Updateing Prouduct
                          </p>
                          <svg
                            aria-hidden="true"
                            class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-green-500"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                              fill="currentColor"
                            />
                            <path
                              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                              fill="currentFill"
                            />
                          </svg>
                        </div>
                      </>
                    )}
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default UpdateProduct;
