import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from '@mui/material/IconButton';
import MoreIcon from '@mui/icons-material/MoreVert'
import { Container, Grid, Link, Stack } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { useStyles } from "./../styles/theme";

import { NavigationLogo } from "./svg";

export default function NavigationHeader() {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <AppBar position="sticky" color="default" elevation={0}>
        <Container maxWidth="lg">
          <Toolbar style={{ height: "9vh" }} className={classes.animateTransition}>
            <Typography noWrap className={classes.title}>
              <NavigationLogo className={classes.logo} />
            </Typography>
            <Stack direction="row" spacing={4} className={classes.navBarMd} sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Link
                color="inherit"
                underline="none"
                className={classes.buttonLink}
                component="button"
              >
                <b>Home</b>
              </Link>
              <Link
                color="inherit"
                underline="none"
                className={classes.buttonLink}
                component="button"
              >
                <b>About</b>
              </Link>
              <Link
                color="inherit"
                underline="none"
                className={classes.buttonLink}
                component="button"
              >
                <b>Experience</b>
              </Link>
              <Link
                color="inherit"
                underline="none"
                className={classes.buttonLink}
                component="button"
              >
                <b>Works</b>
              </Link>
              <Link
                color="inherit"
                underline="none"
                className={classes.buttonLink}
                component="button"
              >
                <b>Achievements</b>
              </Link>
            </Stack>
            <Grid className={classes.navBarSm} sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                aria-label="show more"
                // aria-controls={}
                // aria-haspopup="true"
                // onClick={}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
