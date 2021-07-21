import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "src/models";

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
      state.userData = undefined;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
