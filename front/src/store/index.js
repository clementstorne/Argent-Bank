/** Redux Toolkit */
import { configureStore } from "@reduxjs/toolkit";

/** Slices */
import { userReducer } from "./userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
  devTools: true,
});
