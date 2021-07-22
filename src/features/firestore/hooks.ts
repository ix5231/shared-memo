import { createSelector } from "@reduxjs/toolkit";
import { shallowEqual, useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import { authSelector } from "src/features/firebase/selector";
import { orderedSelector } from "src/features/firestore/selector";
import { Memo } from "src/models";

const memosSelector = createSelector(
  orderedSelector,
  (data) => data.myMemos as Memo[] | undefined
);

export const useUserMemos = () => {
  const auth = useSelector(authSelector, shallowEqual);
  useFirestoreConnect([
    {
      collection: "users",
      doc: auth.uid,
      subcollections: [{ collection: "memos" }],
      storeAs: "myMemos",
    },
  ]);
  const memos = useSelector(memosSelector);
  return memos;
};
