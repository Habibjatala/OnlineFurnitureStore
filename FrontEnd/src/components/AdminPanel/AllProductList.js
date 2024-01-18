import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductRequest } from "../../redux/slice/productSlice";
// import { fetchAllProducts } from "../../redux/slice/productSlice";
import { Buffer } from "buffer";
import { Link } from "react-router-dom";
import "./AllProductsList.scss";

const AllProductList = () => {
  const dispatch = useDispatch();
  const AllProducts = useSelector((state) => state.product.Products);
  const State = useSelector((state) => state);

  console.log("AllProducts are :", AllProducts);
  console.log("state", State);
  useEffect(() => {
    // Dispatch the action to get all services
    dispatch(getAllProductRequest());
    // dispatch(fetchAllProducts());
  }, []);

  return (
    <>
      <div className=" w-full grid  md:grid-cols-12 gap-4 p-10 ">
        {AllProducts.length ? (
          AllProducts.map((item) => (
            <div className="w-full md:col-span-4  items-start justify-start   shadow-lg">
              <div className="cardImage w-full">
                <img
                  src={
                    item?.productImage?.data
                      ? `data:${
                          item?.productImage?.contentType
                        };base64,${Buffer.from(
                          item?.productImage?.data
                        ).toString("base64")}`
                      : "" // Set an empty string if data is not available
                  }
                  alt="cardImg"
                  className="w-full h-[100%]"
                />
              </div>
              <div className="productName text-[14px] font-semibold px-2 border-box">
                <h1> {item.productName} </h1>
              </div>
              <hr className=" mt-3 border-b   border-gray-300 " />
              <div className="manufacturerName text-[14px] px-2 py-2 border-box">
                <h1>By Salvi Chemical Industries</h1>
              </div>
              <div className=" p-2 mt-14">
                <Link
                  to={`/admin-pannel/edit-product/${item?._id}`}
                  state={{ item }}
                >
                  <button
                    type="button"
                    className=" text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  >
                    Edit Product
                  </button>
                </Link>

                <Link
                  to={`/admin-pannel/edit-service/${item?._id}`}
                  state={{ item }}
                  className="bg-content hover:bg-primary text-white py-2 px-5 text-sm flex flex-row rounded-l-md "
                >
                  Edit Data
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 ml-3 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center loader">
            <h1>Loading Services...</h1>
            <br />
            <div role="status">
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
              <span className="sr-only text-white">Loading...</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AllProductList;