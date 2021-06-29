import React from "react";
import { AppBar, Toolbar, Box, Typography } from "@material-ui/core";
import AccountStatus from "src/components/AccountStatus";

const SharedMemoBar = () => {
  return (
    <AppBar>
      <Toolbar>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          width="100%"
        >
          <Typography variant="h6">Shared Memo</Typography>
          <AccountStatus />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default SharedMemoBar;
