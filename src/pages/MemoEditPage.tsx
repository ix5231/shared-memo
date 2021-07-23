import { useCallback } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { useHistory } from "react-router-dom";
import MemoForm from "src/components/MemoForm";
import { memoSelectorFactory } from "src/features/firestore/selector";
import { useMemoUtils } from "src/features/hooks";

interface Props {
  id: string;
}

const MemoEditPage = ({ id }: Props) => {
  const memoSelector = memoSelectorFactory(id);
  const memo = useSelector(memoSelector, shallowEqual);
  const history = useHistory();
  const { isReady, editMemo } = useMemoUtils();
  const onSubmit = useCallback(
    (values) => {
      const { title, content } = values;
      editMemo(id, {
        title,
        content,
      });
      history.push(`/memos/${id}`);
    },
    [editMemo, history, id]
  );

  return (
    <>
      {memo && (
        <MemoForm
          defaultValue={{
            title: memo.title,
            content: memo.content,
          }}
          onSubmit={onSubmit}
          disabled={!isReady || !memo}
        />
      )}
    </>
  );
};

export default MemoEditPage;
