import { shallowEqual, useSelector } from "react-redux";
import { memosSelector } from "src/features/firestore/selector";

export const useUserMemos = () => {
  const memos = useSelector(memosSelector, shallowEqual);
  return memos;
};
