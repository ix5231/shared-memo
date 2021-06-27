import firebase from "firebase/app";
import "firebase/auth";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import AccountStatus from "./components/AccountStatus";
import { useAuth } from "./hooks/useAuth";

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
    <div className="App">
      <h1>Login Page</h1>
      {!isSignedIn ? (
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      ) : (
        <button onClick={() => firebase.auth().signOut()}>Logout</button>
      )}
      <AccountStatus
        name={firebase.auth().currentUser?.displayName ?? undefined}
      />
    </div>
  );
};

export default App;
