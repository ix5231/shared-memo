import { createSelector } from "@reduxjs/toolkit";
import { useCallback } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { useFirestore } from "react-redux-firebase";
import { Memo } from "src/models";
import { userSelector } from "./firebase/selector";
import { memosRecordSelector } from "./firestore/selector";

const memoPathSelector = createSelector(
  userSelector,
  ([user, _loggedin]) => user && `users/${user.uid}/memos`
);

export const useMemoUtils = () => {
  const firestore = useFirestore();
  const targetPath = useSelector(memoPathSelector);
  const memos = useSelector(memosRecordSelector, shallowEqual);

  return {
    isReady: !!targetPath,
    getMemo: useCallback(
      (id: string) => {
        return memos && memos[id];
      },
      [memos]
    ),
    addMemo: useCallback(
      (memo: Omit<Memo, "id">) => {
        if (targetPath) {
          firestore.add({ collection: targetPath }, memo);
        }
      },
      [targetPath, firestore]
    ),
    editMemo: useCallback(
      (id: string, memo: Omit<Memo, "id">) => {
        if (targetPath) {
          firestore.set({ collection: targetPath, doc: id }, memo);
        }
      },
      [targetPath, firestore]
    ),
    deleteMemo: useCallback(
      (id: string) => {
        if (targetPath) {
          firestore.delete({ collection: targetPath, doc: id });
        }
      },
      [targetPath, firestore]
    ),
  };
};
