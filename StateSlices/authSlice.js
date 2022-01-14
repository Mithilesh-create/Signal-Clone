import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: true,
  userName: "",
  profilelogo: "",
};
export const authSlice = createSlice({
  name: "AuthValues",
  initialState,
  reducers: {
    actionLogin: (state, action) => {
      state.auth = true;
      state.userName = action.payload.userName;
      state.profilelogo = action.payload.profilelogo;
    },
    actionLogout: (state) => {
      state.auth = false;
      state.userName = null;
      state.profilelogo = null;
    },
  },
});
export const authSliceState = (state) => state.AuthValues.auth;
export const authSliceName = (state) => state.AuthValues.userName;
export const authSliceProfile = (state) => state.AuthValues.profilelogo;

export const { actionLogin, actionLogout } = authSlice.actions;
export default authSlice.reducer;
