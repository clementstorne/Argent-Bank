import { createSlice } from "@reduxjs/toolkit";

const userState = {
  email: null,
  firstName: null,
  lastName: null,
  id: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: userState,
  reducers: {
    userLogin: (state, action) => {
      (state.email = action.payload.body.email),
        (state.firstName = action.payload.body.firstName),
        (state.lastName = action.payload.body.lastName),
        (state.id = action.payload.body.id);
    },
    userLogout: (state) => {
      (state.email = null),
        (state.firstName = null),
        (state.lastName = null),
        (state.id = null);
    },
  },
});

export const { userLogin, userLogout } = userSlice.actions;

export const userReducer = userSlice.reducer;
