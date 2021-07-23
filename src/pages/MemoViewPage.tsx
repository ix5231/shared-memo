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
  const { getMemo } = useMemoUtils();
  const memo = getMemo(id);
  const history = useHistory();
  const onClick = useCallback(() => {
    history.push(`/memos/${id}/edit`);
  }, [id, history]);

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
          <Button onClick={onClick}>EDIT</Button>
        </>
      )}
    </>
  );
};

export default MemoViewPage;
