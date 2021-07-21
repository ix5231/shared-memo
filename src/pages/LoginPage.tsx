import React from "react";
import { Typography } from "@material-ui/core";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { useFirebase } from "react-redux-firebase";
import fb from "firebase/app";

const LoginPage = () => {
  const firebase = useFirebase();

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
      <Typography variant="h4">Login Page</Typography>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </>
  );
};

export default LoginPage;
