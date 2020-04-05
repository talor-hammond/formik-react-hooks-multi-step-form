import React from "react";
// Components
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">formik-react-hooks-multi-step</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
