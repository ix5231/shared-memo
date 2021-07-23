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
  const targetPath = useSelector(memoPathSelector);

  return {
    isReady: !!targetPath,
    addMemo: useCallback(
      (memo: Omit<Memo, "id">) => {
        if (targetPath) {
          firestore.collection(targetPath).add(memo);
        }
      },
      [targetPath, firestore]
    ),
    editMemo: useCallback(
      (id: string, memo: Omit<Memo, "id">) => {
        if (targetPath) {
          firestore.collection(targetPath).doc(id).set(memo);
        }
      },
      [targetPath, firestore]
    ),
  };
};
