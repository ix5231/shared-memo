import firebase from "firebase/app";
import { useState, useEffect } from "react";

export const useAuth = () => {
  const [isSignedIn, setIsSignedIn] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        setIsSignedIn(!!user);
      });
    return () => unregisterAuthObserver();
  }, []);

  return isSignedIn;
};
