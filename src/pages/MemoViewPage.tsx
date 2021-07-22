import { createStyles, makeStyles, Typography } from "@material-ui/core";
import { shallowEqual, useSelector } from "react-redux";
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
        </>
      )}
    </>
  );
};

export default MemoViewPage;
