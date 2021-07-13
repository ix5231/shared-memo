import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  userLoggedIn: boolean;
}

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    userLoggedIn: false,
  } as AuthState,
  reducers: {
    login: (state) => {
      state.userLoggedIn = true;
    },
    logout: (state) => {
      state.userLoggedIn = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
