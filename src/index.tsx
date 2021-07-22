import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";
import { createTheme, ThemeProvider } from "@material-ui/core";

import store from "./state/store";

import App from "src/App";
import reportWebVitals from "src/reportWebVitals";

const theme = createTheme();

const firebaseConfig = {
  apiKey: "AIzaSyDr8RK6Lkv8P6ZHZQNOVHuHjhPyMF_8hjg",
  authDomain: "shared-memo-5ef64.firebaseapp.com",
  projectId: "shared-memo-5ef64",
  storageBucket: "shared-memo-5ef64.appspot.com",
  messagingSenderId: "355138905316",
  appId: "1:355138905316:web:6946885dbd201c99b478f1",
};
firebase.initializeApp(firebaseConfig);
firebase.firestore();

const rrfProps = {
  firebase,
  config: {},
  dispatch: store.dispatch,
  createFirestoreInstance,
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
