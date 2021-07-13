import firebase from "firebase/app";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "src/features/auth/authSlice";
import { RootState } from "src/state/store";

export const useAuth = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.auth.userLoggedIn);

  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        console.log("a");
        if (user) {
          dispatch(login);
        } else {
          dispatch(logout);
        }
      });
    return () => unregisterAuthObserver();
  }, [dispatch]);

  return isLoggedIn;
};
