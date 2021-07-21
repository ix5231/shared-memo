import React from "react";
import { useSelector } from "react-redux";
import { authSelector } from "src/features/firebase/selector";
import { isEmpty, isLoaded, useFirebase } from "react-redux-firebase";
import {
  Box,
  Button,
  makeStyles,
  MenuItem,
  Typography,
} from "@material-ui/core";

import PopperMenu from "src/components/PopperMenu";

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

  const firebase = useFirebase();
  const auth = useSelector(authSelector);

  const handleClick = React.useCallback((_event) => setOpen(true), [setOpen]);
  const handleClose = React.useCallback(() => setOpen(false), [setOpen]);
  const onLogout = React.useCallback(() => firebase.logout(), [firebase]);
  const withClose = (f: () => void) => {
    return () => {
      f();
      handleClose();
    };
  };

  return (
    <Box>
      <Typography variant="body1">
        {isLoaded(auth) &&
          (!isEmpty(auth) ? (
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
                >{`Hi, ${auth.displayName}!`}</span>
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
          ))}
      </Typography>
    </Box>
  );
};

export default AccountStatus;
