import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: "635846fdc9c208c9445c7c43",
  userData: null,
  userimg: null,
  error: null,
  isLoading: false,
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
    loginStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.userData = action.payload;
    },
    setuserimage: (state, action) => {
      state.userimg = action.payload;
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
  setuserimage,
} = userSlice.actions;

export default userSlice.reducer;
