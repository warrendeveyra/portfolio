import React from "react";
import { Grid } from "@material-ui/core";

import { useStyles } from "./../styles/theme";
import { BannerAvatar } from "./svg";

export default function BannerIllustration() {
  const classes = useStyles();
  return (
    <Grid
      item
      container
      xs={12}
      sm={12}
      md={6}
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.animateTransition}
    >
      <BannerAvatar />
    </Grid>
  );
}
