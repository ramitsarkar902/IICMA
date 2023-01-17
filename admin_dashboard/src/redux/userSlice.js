import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: "635846fdc9c208c9445c7c43",
  userData: null,
  error: null,
  isLoading: true,
  productData: null,
  customerData: null,
  salesData: null,
  adminsData: null,
  newsData: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogin: (state, action) => {
      state.userData = action.payload;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.error = action.payload;
    },
    logOut: (state, action) => {
      state.userData = null;
    },
    productFetchSuccess: (state, action) => {
      state.productData = action.payload;
      state.isLoading = false;
    },
    fetchStart: (state, action) => {
      state.isLoading = true;
    },
    customerFetchSuccess: (state, action) => {
      state.customerData = action.payload;
      state.isLoading = false;
    },
    newsFetchSuccess: (state, action) => {
      state.newsData = action.payload;
    },
    salesFetchSuccess: (state, action) => {
      state.salesData = action.payload;
    },
    adminFetchSuccess: (state, action) => {
      state.adminsData = action.payload;
    },
    fetchFailure: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  userLogin,
  loginFailure,
  logOut,
  productFetchSuccess,
  customerFetchSuccess,
  fetchStart,
  fetchFailure,
  salesFetchSuccess,
  adminFetchSuccess,
  newsFetchSuccess,
} = userSlice.actions;

export default userSlice.reducer;
