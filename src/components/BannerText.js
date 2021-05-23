import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import clsx from "clsx";

import SingleAvatar from "./../components/svg/singleAvatar";
import { LinkedInIcon, GithubIcon, GitlabIcon, Scrollicon } from "./icons";
import { useStyles } from "./../styles/theme";

export default function NavigationHeader() {
  const classes = useStyles();
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up("sm"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
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
    >
      <Box mt={!sm ? 4 : 0} className={classes.animateTransition}>
        <Box
          display="flex"
          justifyContent={md ? "flex-start" : "center"}
          alignItems="center"
        >
          {!md ? <SingleAvatar /> : null}
        </Box>
        <Typography
          variant={md ? "h4" : "h3"}
          component={md ? "h4" : "h3"}
          align={md ? "left" : "center"}
        >
          {!md ? (
            <>
              <span
                className={clsx(classes.textBlack, classes.bannerTextSmall)}
              >
                Hi I’m Warren,
                <br />
                A&nbsp;
              </span>
              <span
                className={clsx(
                  classes.textExtraBold,
                  classes.bannerTextSmallPurple
                )}
              >
                Software Engineer
              </span>
            </>
          ) : (
            <>
              <span
                className={clsx(classes.textBlack, classes.bannerTextNormal)}
              >
                👋 Hi I’m Warren,
                <br />
                A&nbsp;
              </span>
              <span
                className={clsx(
                  classes.textExtraBold,
                  classes.bannerTextPurple
                )}
              >
                Software Engineer
              </span>
            </>
          )}
        </Typography>
        <Box
          display="flex"
          justifyContent={md ? "flex-start" : "center"}
          alignItems="center"
          className={classes.animateTransition}
        >
          <a
            rel="noreferrer"
            target="_blank" 
            href="https://github.com/warrendeveyra"
            style={{
              paddingTop: "1rem",
              paddingBottom: "1rem",
              paddingRight: "1.3rem",
            }}
          >
            <GithubIcon />
          </a>
          <a
            rel="noreferrer"
            target="_blank" 
            href="https://gitlab.com/warrendeveyra11"
            style={{
              paddingTop: "1rem",
              paddingBottom: "1rem",
              paddingRight: "1.3rem",
            }}
          >
            <GitlabIcon />
          </a>
          <a
            rel="noreferrer"
            target="_blank" 
            href="https://www.linkedin.com/in/warren-de-veyra-552224195/"
            style={{
              paddingTop: "1rem",
              paddingBottom: "1rem",
            }} 
          >
            <LinkedInIcon />
          </a>
        </Box>
        <br />
        <Box
          display="flex"
          justifyContent={md ? "flex-start" : "center"}
          alignItems="center"
          className={classes.animateTransition}
        >
          <Typography variant="subtitle2" className={classes.bannerTextPink}>
            <b>👇&nbsp;Meet Warren De Veyra </b>
          </Typography>
        </Box>
        <br />
        <Box
          display="flex"
          justifyContent={md ? "flex-start" : "center"}
          alignItems="center"
          className={classes.animateTransition}
        >
          <Scrollicon />
        </Box>
      </Box>
    </Grid>
  );
}
