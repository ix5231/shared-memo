import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  name: string;
  uid: string;
}

interface AuthState {
  userLoginStatus: "active" | "inactive" | "loading";
  userData?: User;
}

interface LoginPayload {
  userData: User;
}

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    userLoginStatus: "loading",
  } as AuthState,
  reducers: {
    login: (state, action: PayloadAction<LoginPayload>) => {
      state.userLoginStatus = "active";
      state.userData = action.payload.userData;
    },
    logout: (state) => {
      state.userLoginStatus = "inactive";
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
