import React, { useCallback } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Button, Link, List, ListItem, Typography } from "@material-ui/core";
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
            <Typography key={m.id}>
              <ListItem>
                <Link component={RouterLink} to={`/memos/${m.id}`}>
                  {m.title}
                </Link>
              </ListItem>
            </Typography>
          ))}
      </List>
    </>
  );
};

export default HomePage;
