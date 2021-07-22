import { useSelector, shallowEqual } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import { authSelector } from "src/features/firebase/selector";

interface Props {
  children: React.ReactNode;
}

const MemoProvider = ({ children }: Props) => {
  const auth = useSelector(authSelector, shallowEqual);
  useFirestoreConnect([
    {
      collection: "users",
      doc: auth.uid,
      subcollections: [{ collection: "memos" }],
      storeAs: "myMemos",
    },
  ]);

  return <>{children}</>;
};

export default MemoProvider;
