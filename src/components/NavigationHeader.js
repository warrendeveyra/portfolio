import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Container, Link } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useStyles } from "./../styles/theme";

import { NavigationLogo } from "./svg";

export default function NavigationHeader() {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <AppBar position="sticky" color="default" >
        <Container maxWidth="lg">
          <Toolbar style={{ height: "9vh" }} className={classes.animateTransition}>
            <Typography noWrap className={classes.title}>
              <NavigationLogo className={classes.logo}/>
            </Typography>
            <Link
              color="inherit"
              className={classes.buttonLink}
              component="button"
            >
              <b>Home</b>
            </Link>
            <Link
              color="inherit"
              className={classes.buttonLink}
              component="button"
            >
              <b>About</b>
            </Link>
            <Link
              color="inherit"
              className={classes.buttonLink}
              component="button"
            >
              <b>Experience</b>
            </Link>
            <Link
              color="inherit"
              className={classes.buttonLink}
              component="button"
            >
              <b>Works</b>
            </Link>
            <Link
              color="inherit"
              className={classes.buttonLink}
              component="button"
            >
              <b>Achievements</b>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
