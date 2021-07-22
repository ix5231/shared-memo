import React from "react";
import { Typography } from "@material-ui/core";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { useFirebase } from "react-redux-firebase";
import fb from "firebase/app";
import { useSelector } from "react-redux";
import { authStateSelector } from "src/features/firebase/selector";
import { Redirect } from "react-router-dom";

const LoginPage = () => {
  const firebase = useFirebase();
  const state = useSelector(authStateSelector);

  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      fb.auth.EmailAuthProvider.PROVIDER_ID,
      fb.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false,
    },
  };

  return (
    <>
      {state === "loading" ? null : state === "inactive" ? (
        <>
          <Typography variant="h4">Login Page</Typography>
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};

export default LoginPage;
