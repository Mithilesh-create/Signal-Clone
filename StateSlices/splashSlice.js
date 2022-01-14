import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  removed: false,
};
export const RemoveSplashSlice = createSlice({
  name: "removeSplashSlice",
  initialState,
  reducers: {
    disableSplash: (state) => {
      state.removed = true;
    },
  },
});
export const removeSplashData = (state) => state.removeSplashSlice.removed;
export const { disableSplash } = RemoveSplashSlice.actions;
export default RemoveSplashSlice.reducer;
