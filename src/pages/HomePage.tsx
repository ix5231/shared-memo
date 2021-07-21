import React from "react";
import { Button, List, ListItem, Typography } from "@material-ui/core";
import { useUserMemos } from "src/hooks/useUserMemos";

const HomePage = () => {
  const [memos, isLoading, errorOccured] = useUserMemos();

  return (
    <>
      <Button aria-label="新しいメモの作成">NEW</Button>
      {errorOccured ? (
        <Typography>error!</Typography>
      ) : isLoading ? (
        <Typography></Typography>
      ) : (
        <List>
          {memos && memos.map((m) => <ListItem key={m.id}>{m.title}</ListItem>)}
        </List>
      )}
    </>
  );
};

export default HomePage;
