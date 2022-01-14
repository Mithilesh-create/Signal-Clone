import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ChatName: "",
  ChatLogo: "",
};
export const chatInfoSlice = createSlice({
  name: "chatValues",
  initialState,
  reducers: {
    setChatValues: (state, action) => {
      state.ChatName = action.payload.ChatName;
      state.ChatLogo = action.payload.ChatLogo;
    },
  },
});
export const chatSliceName = (state) => state.chatValues.ChatName;
export const chatSliceProfile = (state) => state.chatValues.ChatLogo;

export const { setChatValues } = chatInfoSlice.actions;
export default chatInfoSlice.reducer;
