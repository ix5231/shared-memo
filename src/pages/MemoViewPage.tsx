import {
  Button,
  createStyles,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useCallback } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { memoSelectorFactory } from "src/features/firestore/selector";

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
  const memoSelector = memoSelectorFactory(id);
  const memo = useSelector(memoSelector, shallowEqual);
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
