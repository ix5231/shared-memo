import { useCallback } from "react";
import { useFirebase } from "react-redux-firebase";

export const useUserUtils = () => {
  const firebase = useFirebase();
  return {
    logout: useCallback(() => firebase.logout(), [firebase]),
  };
};
