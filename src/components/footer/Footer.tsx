import React from "react";
// Components
import { Paper } from "@material-ui/core";
// Style
import { withStyles } from "@material-ui/core/styles";
import styles from "./Footer.styles";

type FooterProps = {
  classes: {
    footer: string;
  };
};

const Footer = ({ classes }: FooterProps) => {
  return (
    <Paper component="footer" square className={classes.footer}>
      <p>Made by Talor Hammond</p>

      <p>
        <a
          href="https://github.com/talor-hammond/formik-react-hooks-multi-step-form"
          target="_blank"
          rel="noopener noreferrer"
        >
          Full steps on how this form is structured
        </a>
      </p>
    </Paper>
  );
};

export default withStyles(styles)(Footer);
