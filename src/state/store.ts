import { configureStore } from "@reduxjs/toolkit";
import authReducers from "src/features/auth/authSlice";

const store = configureStore({
  reducer: {
    auth: authReducers,
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
