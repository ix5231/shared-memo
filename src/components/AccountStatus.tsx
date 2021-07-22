import React, { useCallback, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { userSelector } from "src/features/firebase/selector";
import {
  Box,
  Button,
  makeStyles,
  MenuItem,
  Typography,
} from "@material-ui/core";

import PopperMenu from "src/components/PopperMenu";
import { useUserUtils } from "src/features/firebase/hooks";

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

  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  const { logout } = useUserUtils();
  const [user, isLoaded] = useSelector(userSelector);

  const handleClick = useCallback((_event) => setOpen(true), [setOpen]);
  const handleClose = useCallback(() => setOpen(false), [setOpen]);
  const onLogout = useCallback(() => logout(), [logout]);
  const withClose = (f: () => void) => {
    return () => {
      f();
      handleClose();
    };
  };

  return (
    <Box>
      <Typography variant="body1">
        {isLoaded &&
          (user ? (
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
                >{`Hi, ${user.name}!`}</span>
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
