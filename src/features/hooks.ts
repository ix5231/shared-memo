import { createSelector } from "@reduxjs/toolkit";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useFirestore } from "react-redux-firebase";
import { Memo } from "src/models";
import { userSelector } from "./firebase/selector";

const memoPathSelector = createSelector(
  userSelector,
  ([user, _loggedin]) => user && `users/${user.uid}/memos`
);

export const useMemoUtils = () => {
  const firestore = useFirestore();
  const addPath = useSelector(memoPathSelector);

  return {
    isReady: !!addPath,
    addMemo: useCallback(
      (memo: Omit<Memo, "id">) => {
        if (addPath) {
          firestore.collection(addPath).add(memo);
        }
      },
      [addPath, firestore]
    ),
  };
};
