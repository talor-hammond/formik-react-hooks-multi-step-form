import React from "react";
// Components
import { AppBar, Typography } from "@material-ui/core";
// Styles
import { withStyles } from "@material-ui/core/styles";
import styles from "./Header.styles";

type HeaderProps = {
  classes: {
    header: string;
  };
};

const Header = ({ classes }: HeaderProps) => {
  return (
    <AppBar position="static" className={classes.header}>
      <Typography variant="h6">formik-react-hooks-multi-step</Typography>
    </AppBar>
  );
};

export default withStyles(styles)(Header);
