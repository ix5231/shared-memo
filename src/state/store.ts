import {
  combineReducers,
  configureStore,
  ConfigureStoreOptions,
} from "@reduxjs/toolkit";
import authReducers from "src/features/auth/authSlice";

const rootReducer = combineReducers({
  auth: authReducers,
});

export type RootState = ReturnType<typeof rootReducer>;

export const createStore = (config?: Partial<ConfigureStoreOptions>) => {
  return configureStore({
    reducer: rootReducer,
    ...config,
  });
};

const store = createStore();
export default store;
