import {
  combineReducers,
  configureStore,
  ConfigureStoreOptions,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import authReducers from "src/features/auth/authSlice";
import { actionTypes, firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  auth: authReducers,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const createStore = (config?: Partial<ConfigureStoreOptions>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [actionTypes.LOGIN],
      },
    }),
    ...config,
  });
};

const store = createStore();
export default store;
