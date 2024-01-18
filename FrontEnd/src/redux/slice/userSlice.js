import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    loading: false,
    error: null,
    success: null,
  },
  reducers: {
    registerStart(state) {
      state.loading = true;
    },
    registerSuccess(state, action) {
      state.loading = false;
      state.user = action.payload;
      state.success = "Success";
    },
    registerFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    signInStart(state) {
      state.loading = true;
    },
    signInSuccess(state, action) {
      state.loading = false;
      state.user = action.payload;
      state.success = "Success";
      state.error = null;
    },
    signInFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const {
  registerStart,
  registerSuccess,
  registerFailure,
  signInStart,
  signInSuccess,
  signInFailure,
} = userSlice.actions;
export default userSlice.reducer;
