import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  userLoginStatus: "active" | "inactive" | "loading";
}

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    userLoginStatus: "loading",
  } as AuthState,
  reducers: {
    login: (state) => {
      state.userLoginStatus = "active";
    },
    logout: (state) => {
      state.userLoginStatus = "inactive";
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
