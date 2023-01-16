import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.mode = state.mode === "dark" ? "light" : "dark";
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
