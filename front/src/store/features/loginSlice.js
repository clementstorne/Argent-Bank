import { createSlice } from "@reduxjs/toolkit";

const loginState = {
  token: null,
  isAuth: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState: loginState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload.body.token;
      state.isAuth = true;
    },
    logout: (state) => {
      (state.token = null), (state.isAuth = false);
    },
  },
});

export const { login, logout } = loginSlice.actions;

export const loginReducer = loginSlice.reducer;
