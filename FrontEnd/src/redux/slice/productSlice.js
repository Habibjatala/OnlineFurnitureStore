import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
  SUCCESS: "success",
});
const productSlice = createSlice({
  name: "product",
  initialState: {
    Products: [],
    product: null,
    loading: false,
    error: null,
    successMessage: false,
    status: STATUSES.IDLE,
  },
  reducers: {
    addProductRequest: (state) => {
      state.loading = true;
      state.error = null;
      state.successMessage = false;
    },
    addProductSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.product = action.payload;
      state.successMessage = true;
    },
    addProductFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.success = false;
      state.successMessage = false;
    },
    getAllProductRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    getAllProductSuccess: (state, action) => {
      state.loading = false;
      state.Products = action.payload;
      state.error = null;
    },
    getAllProductFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateProductRequest: (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
      state.successMessage = false;
    },
    updateProductSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.success = true;
      state.product = action.payload;
      state.successMessage = true;
    },
    updateProductFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getSingleProductRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    getSingleProductSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.success = true;
      state.product = action.payload;
    },
    getSingleProductFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchAllProducts.pending, (state) => {
  //       state.status = STATUSES.LOADING;
  //     })
  //     .addCase(fetchAllProducts.fulfilled, (state, action) => {
  //       state.Products = action.payload;
  //       state.status = STATUSES.SUCCESS;
  //     })
  //     .addCase(fetchAllProducts.rejected, (state, action) => {
  //       state.status = STATUSES.ERROR;
  //       state.error = action.payload;
  //     });
  //   builder
  //     .addCase(addProduct.pending, (state) => {
  //       state.status = STATUSES.LOADING;
  //     })
  //     .addCase(addProduct.fulfilled, (state, action) => {
  //       console.log("Data sent for product is", action.payload);
  //       state.status = STATUSES.SUCCESS;
  //     })
  //     .addCase(addProduct.rejected, (state, action) => {
  //       state.status = STATUSES.ERROR;
  //       state.error = action.payload;
  //       console.log("Error for Ctreating a Product", action.payload);
  //     });
  // },
});

// export const fetchAllProducts = createAsyncThunk("getAllProducts", async () => {
//   try {
//     const res = await fetch("http://localhost:4000/api/product/getallproducts");
//     const productsData = await res.json();
//     console.log("Products Data", productsData);
//     return productsData;
//   } catch (error) {
//     console.log("Error", error);
//   }
// });

// export const addProduct = createAsyncThunk("addProduct", async (action) => {
//   try {
//     await axios.post(
//       "http://localhost:4000/api/product/addproduct",
//       action.payload,
//       {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       }
//     );
//   } catch (error) {}
// });

export const {
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
} = productSlice.actions;
export default productSlice.reducer;
