import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: "635846fdc9c208c9445c7c43",
  userData: null,
  error: null,
  isLoading: false,
  token: null,
  productData: null,
  customerData: null,
  salesData: null,
  adminsData: null,
  newsData: null,
  isUpdated: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.userData = action.payload;
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.userData = null;
      state.isLoading = false;
      state.error = false;
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
      state.isLoading = false;
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
    passwordUpdate: (state) => {
      state.isUpdated = true;
      state.error = false;
    },
  },
});

export const {
  userLogin,
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  productFetchSuccess,
  customerFetchSuccess,
  fetchStart,
  fetchFailure,
  salesFetchSuccess,
  adminFetchSuccess,
  newsFetchSuccess,
  passwordUpdate,
} = userSlice.actions;

export default userSlice.reducer;
