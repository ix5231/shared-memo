import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import MemoForm from "src/components/MemoForm";
import { useMemoUtils } from "src/features/hooks";

const CreateMemo = () => {
  const history = useHistory();
  const { isReady, addMemo } = useMemoUtils();
  const onSubmit = useCallback(
    (values) => {
      addMemo({
        title: values.title,
        content: values.content,
      });
      history.push("/");
    },
    [addMemo, history]
  );

  return <MemoForm onSubmit={onSubmit} disabled={!isReady} />;
};

export default CreateMemo;
