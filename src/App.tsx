import { Box, Container } from "@material-ui/core";
import firebase from "firebase/app";
import "firebase/auth";
import SharedMemoBar from "src/components/SharedMemoBar";
import { useAuth } from "src/hooks/useAuth";
import HomePage from "src/pages/HomePage";
import LoginPage from "src/pages/LoginPage";

const firebaseConfig = {
  apiKey: "AIzaSyDr8RK6Lkv8P6ZHZQNOVHuHjhPyMF_8hjg",
  authDomain: "shared-memo-5ef64.firebaseapp.com",
  projectId: "shared-memo-5ef64",
  storageBucket: "shared-memo-5ef64.appspot.com",
  messagingSenderId: "355138905316",
  appId: "1:355138905316:web:6946885dbd201c99b478f1",
};
firebase.initializeApp(firebaseConfig);

export const uiConfig = {
  signInFlow: "popup",
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    signInSuccessWithAuthResult: () => false,
  },
};

const App = () => {
  const isSignedIn = useAuth();

  return (
    <Container className="App">
      <SharedMemoBar />
      <Box pt={10}>{!isSignedIn ? <LoginPage /> : <HomePage />}</Box>
    </Container>
  );
};

export default App;
