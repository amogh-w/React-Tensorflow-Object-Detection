import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Header = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography>
          Welcome to React.js with Tensorflow Object Detection
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
