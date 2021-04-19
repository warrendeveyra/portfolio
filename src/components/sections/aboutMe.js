import React from "react";
import { Grid, Typography, Paper } from "@material-ui/core";

import { useStyles } from "./../../styles/theme";

export default function AboutMe() {
  const classes = useStyles();
  return (
    <Grid item container xs={12} sm={12} md={12}>
      <Grid item xs={12} md={12}>
        <Typography variant="h4" component="h4" className={classes.titleText}>
          About me
        </Typography>
      </Grid>
      <Grid item xs={12} md={12}>
        <Paper elevation={1}>awdawdawd</Paper>
      </Grid>
    </Grid>
  );
}
