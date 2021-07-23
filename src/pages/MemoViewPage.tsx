import {
  Button,
  createStyles,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useMemoUtils } from "src/features/hooks";

const useStyle = makeStyles(
  createStyles({
    memoContainer: {
      whiteSpace: "pre-line",
    },
  })
);

interface Props {
  id: string;
}

const MemoViewPage = ({ id }: Props) => {
  const styles = useStyle();
  const { getMemo, deleteMemo } = useMemoUtils();
  const memo = getMemo(id);
  const history = useHistory();
  const onEdit = useCallback(() => {
    history.push(`/memos/${id}/edit`);
  }, [id, history]);
  const onDelete = useCallback(() => {
    deleteMemo(id);
    history.push(`/`);
  }, [id, deleteMemo, history]);

  return (
    <>
      {memo && (
        <>
          <Typography component="h1" variant="h3">
            {memo.title}
          </Typography>
          <Typography component="article" className={styles.memoContainer}>
            {memo.content}
          </Typography>
          <Button onClick={onEdit}>EDIT</Button>
          <Button onClick={onDelete}>DELETE</Button>
        </>
      )}
    </>
  );
};

export default MemoViewPage;
