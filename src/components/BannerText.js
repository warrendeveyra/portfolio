import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import clsx from "clsx";

import SingleAvatar from "./../components/svg/singleAvatar";
import { LinkedInIcon, GithubIcon, GitlabIcon, Scrollicon } from "./icons";
import { useStyles } from "./../styles/theme";
import { TypingEffect } from "./TypingEffect";

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
      justifyContent="center"
      alignItems="center"
    >
      <Box mt={!sm ? 4 : 0} className={classes.animateTransition}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {!md ? <SingleAvatar /> : null}
        </Box>
        <Typography
          variant={md ? "h4" : "h3"}
          component={md ? "h4" : "h3"}
          align="center"
        >
          {!md ? (
            <>
              <span
                className={clsx(classes.textBlack, classes.bannerTextSmall)}
              >
                Hi I’m Ren,
                <br />
                A&nbsp;
              </span>
              <TypingEffect
                words={[
                  "Developer",
                  "Tinkerer",
                  "Tech Enthusiast",
                  "Problem Solver",
                  "Code Craftsman"
                ]}
                className={clsx(
                  classes.textExtraBold,
                  classes.bannerTextSmallPurple
                )}
              />
            </>
          ) : (
            <>
              <span
                className={clsx(classes.textBlack, classes.bannerTextNormal)}
              >
                👋 Hi I’m Ren,
                <br />
                A&nbsp;
              </span>
              <TypingEffect
                words={[
                  "Developer",
                  "Tinkerer",
                  "Tech Enthusiast",
                  "Problem Solver",
                  "Code Craftsman"
                ]}
                className={clsx(
                  classes.textExtraBold,
                  classes.bannerTextPurple
                )}
              />
            </>
          )}
        </Typography>
        <Box
          display="flex"
          justifyContent="center"
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
          justifyContent="center"
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
          justifyContent="center"
          alignItems="center"
          className={classes.animateTransition}
        >
          <Scrollicon />
        </Box>
      </Box>
    </Grid>
  );
}
