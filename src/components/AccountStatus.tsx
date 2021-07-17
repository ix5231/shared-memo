import {
  Box,
  Button,
  makeStyles,
  MenuItem,
  Typography,
} from "@material-ui/core";
import firebase from "firebase";
import React from "react";
import PopperMenu from "src/components/PopperMenu";
import { useUser } from "src/hooks/useUser";

const AccountStatus = () => {
  const styles = makeStyles((theme) => ({
    allowSmallCase: {
      textTransform: "none",
    },
    accountStatus: {
      verticalAlign: "-0.3rem",
      color: "#fff",
    },
  }))();

  const anchorRef = React.useRef(null);
  const [open, setOpen] = React.useState(false);

  const userData = useUser();

  const handleClick = React.useCallback((_event) => setOpen(true), [setOpen]);
  const handleClose = React.useCallback(() => setOpen(false), [setOpen]);
  const onLogout = React.useCallback(() => firebase.auth().signOut(), []);
  const withClose = (f: () => void) => {
    return () => {
      f();
      handleClose();
    };
  };

  return (
    <Box>
      <Typography variant="body1">
        {userData?.name ? (
          <>
            <Button
              aria-controls="profile-menu"
              aria-haspopup="true"
              onClick={handleClick}
              ref={anchorRef}
              className={styles.allowSmallCase}
            >
              <span
                className={styles.accountStatus}
              >{`Hi, ${userData.name}!`}</span>
            </Button>
            <PopperMenu
              id="profile-menu"
              open={open}
              anchorEl={anchorRef.current}
              handleClose={handleClose}
            >
              <MenuItem onClick={withClose(onLogout)}>Logout</MenuItem>
            </PopperMenu>
          </>
        ) : (
          <span className={styles.accountStatus}>Not logged in</span>
        )}
      </Typography>
    </Box>
  );
};

export default AccountStatus;
