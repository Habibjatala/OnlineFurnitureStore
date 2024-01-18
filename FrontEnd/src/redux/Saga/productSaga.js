import axios from "axios";
import { takeLatest, put, call } from "redux-saga/effects";
import { toast } from "react-toastify";
import {
  addProductRequest,
  addProductSuccess,
  addProductFailure,
  getAllProductRequest,
  getAllProductSuccess,
  getAllProductFailure,
  getSingleProductRequest,
  getSingleProductSuccess,
  getSingleProductFailure,
  updateProductRequest,
  updateProductSuccess,
  updateProductFailure,
} from "../slice/productSlice";

// ADD NEW PRODUCT

function* addProduct(action) {
  try {
    //console.log("Clicked");
    //const formData = action.payload;
    //console.log("Service:", action.payload);

    // Make the API call with axios
    const response = yield call(
      axios.post,
      "http://localhost:4000/api/product/addproduct",
      action.payload,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    yield put(addProductSuccess(response.data));
    console.log("Service :", response.data);
  } catch (error) {
    yield put(addProductFailure(error.message));
  }
}

// GET ALL PRODUCT
function* getAllProductWorker(action) {
  try {
    const response = yield call(
      axios.get,
      "http://localhost:4000/api/product/getallproducts"
    );
    yield put(getAllProductSuccess(response.data));
  } catch (error) {
    yield put(getAllProductFailure(error.message));
  }
}

// GET SINGLE PRODUCT
function* getSingleProductWorker(action) {
  try {
    const id = action.payload;
    const response = yield call(
      axios.get,
      `http://localhost:4000/api/product/getsingleproduct/${id}`
    );
    yield put(getSingleProductSuccess(response.data));
    console.log(response.data);
  } catch (error) {
    yield put(getSingleProductFailure(error.message));
  }
}

// UPDATE PRODUCT
function* updateProduct(action) {
  try {
    const { formdata, id } = action.payload;
    const response = yield call(
      axios.put,
      `http://localhost:4000/api/product/updateproduct/${id}`,
      formdata
    );
    yield put(updateProductSuccess(response.data));
  } catch (error) {
    yield put(updateProductFailure(error.message));
  }
}

function* watchAddProduct() {
  yield takeLatest(addProductRequest.type, addProduct);
}
function* watchGetAllProduct() {
  yield takeLatest(getAllProductRequest.type, getAllProductWorker);
}
function* watchGetSingleProduct() {
  yield takeLatest(getSingleProductRequest.type, getSingleProductWorker);
}
function* watchUpdateProduct() {
  yield takeLatest(updateProductRequest.type, updateProduct);
}
export {
  watchAddProduct,
  watchGetAllProduct,
  watchUpdateProduct,
  watchGetSingleProduct,
};
