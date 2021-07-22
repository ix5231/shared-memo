import React, { useCallback } from "react";
import { Button, List, ListItem, Typography } from "@material-ui/core";
import { useUserMemos } from "src/features/firestore/hooks";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const memos = useUserMemos();
  const history = useHistory();
  const onClick = useCallback(() => history.push("/create-memo"), [history]);

  return (
    <>
      <Button
        onClick={onClick}
        variant="contained"
        color="primary"
        aria-label="新しいメモの作成"
      >
        NEW
      </Button>
      <List>
        {memos &&
          memos.map((m) => (
            <ListItem key={m.id}>
              <Typography>{m.title}</Typography>
            </ListItem>
          ))}
      </List>
    </>
  );
};

export default HomePage;
