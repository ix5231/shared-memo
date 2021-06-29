import React from "react";
import { Typography } from "@material-ui/core";
import firebase from "firebase";
import { StyledFirebaseAuth } from "react-firebaseui";
import { uiConfig } from "src/App";

const LoginPage = () => {
  return (
    <>
      <Typography variant="h4">Login Page</Typography>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </>
  );
};

export default LoginPage;
