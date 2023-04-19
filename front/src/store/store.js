import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./features/userSlice";
import { loginReducer } from "./features/loginSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    login: loginReducer,
  },
  devTools: true,
});
