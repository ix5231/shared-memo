import firebase from "firebase/app";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "src/features/auth/authSlice";
import { RootState } from "src/state/store";

export const useAuth = () => {
  const dispatch = useDispatch();
  const userStatus = useSelector(
    (state: RootState) => state.auth.userLoginStatus
  );

  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        if (user) {
          dispatch(login());
        } else {
          dispatch(logout());
        }
      });
    return () => unregisterAuthObserver();
  }, [dispatch]);

  return userStatus;
};
