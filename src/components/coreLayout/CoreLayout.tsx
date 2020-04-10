import React from "react";
// Components
import { Container } from "@material-ui/core";
// Styles
import { withStyles } from "@material-ui/core/styles";
import styles from "./CoreLayout.styles";

type CoreLayoutProps = {
  children: React.ReactChild | React.ReactChildren;
  classes: {
    layout: string;
  };
};

const CoreLayout = ({ children, classes }: CoreLayoutProps) => {
  return (
    <Container maxWidth="sm" className={classes.layout}>
      {children}
    </Container>
  );
};

export default withStyles(styles)(CoreLayout);
