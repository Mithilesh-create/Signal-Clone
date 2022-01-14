import { configureStore } from "@reduxjs/toolkit";
import removeSplashSliceReducer from "../StateSlices/splashSlice";
import authSliceReducer from "../StateSlices/authSlice";
import chatSliceReducer from "../StateSlices/chatInfoSlice";
export const store = configureStore({
  reducer: {
    removeSplashSlice: removeSplashSliceReducer,
    AuthValues: authSliceReducer,
    chatValues: chatSliceReducer,
  },
});
