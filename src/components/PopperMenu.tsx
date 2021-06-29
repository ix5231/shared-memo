import { ReferenceObject } from "popper.js";
import {
  Paper,
  ClickAwayListener,
  MenuList,
  Grow,
  Popper,
} from "@material-ui/core";
import React from "react";

interface Props {
  id: string;
  open: boolean;
  anchorEl?: ReferenceObject | null;
  handleClose?: (event: React.MouseEvent<Document, MouseEvent>) => void;
  children: JSX.Element;
}

const PopperMenu = React.memo(
  ({ children, id, open, anchorEl, handleClose }: Props) => {
    return (
      <Popper open={open} anchorEl={anchorEl} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose ?? ((_e) => {})}>
                <MenuList id={id}>{children}</MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    );
  }
);

export default PopperMenu;
