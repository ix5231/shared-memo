import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import MemoForm from "src/components/MemoForm";
import { useMemoUtils } from "src/features/hooks";

interface Props {
  id: string;
}

const MemoEditPage = ({ id }: Props) => {
  const { getMemo } = useMemoUtils();
  const memo = getMemo(id);
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
