import React from "react";
import { Grid, Typography, Paper } from "@material-ui/core";
import Timeline from '@material-ui/lab/Timeline'
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import { useStyles } from "../../styles/theme";

export default function Experience() {
  const classes = useStyles();
  const theme = useTheme();
  const smallDevice = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid item container xs={12} md={12} style={!smallDevice ? { height: "100vh" } : null}>
      <Grid item xs={12} md={12}>
        <Typography variant="h4" component="h4" className={classes.titleText}>
        Experience
        </Typography>
      </Grid>
      <Grid container item justify="space-between" style={{ paddingBottom: "6rem" }} >
        <Grid item style={!smallDevice ? {width: "48%"} : {width: "100%"}}>
          <Paper elevation={5}>
            <Timeline>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="primary" >
                    <SchoolIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent style={{marginBottom: "5rem"}}>
                    2017 - 2020
                    <Typography variant="h6" component="h1">
                      <b>Bachelor’s Degree</b>
                    </Typography>
                    <Typography>Elementum ultricies convallis elementum odio dolor gravida cursus arcu.</Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="primary">
                    <SchoolIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent style={{marginBottom: "5rem"}}>
                    2017 - 2018
                    <Typography variant="h6" component="h1">
                      <b>Associate’s Degree</b>
                    </Typography>
                    <Typography>Elementum ultricies convallis elementum odio dolor gravida cursus arcu.</Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="primary">
                    <SchoolIcon />
                  </TimelineDot>
                </TimelineSeparator>
                <TimelineContent>
                    2014 - 2016
                    <Typography variant="h6" component="h1">
                      <b>Senior Highschool</b>
                    </Typography>
                    <Typography>Elementum ultricies convallis elementum odio dolor gravida cursus arcu.</Typography>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Paper>
        </Grid>
        <Grid item style={!smallDevice ? {width: "48%"} : {width: "100%"}}>
          <Paper elevation={5}>
            <Timeline>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="primary">
                    <WorkIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent style={{marginBottom: "5rem"}}>
                    2021 - Present
                    <Typography variant="h6" component="h1">
                      <b>Assoc. Software Engineer</b>
                    </Typography>
                    <Typography>Elementum ultricies convallis elementum odio dolor gravida cursus arcu.</Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="primary">
                    <WorkIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent style={{marginBottom: "5rem"}}>
                    2020  - 2021
                    <Typography variant="h6" component="h1">
                      <b>Freelance Software Dev.</b>
                    </Typography>
                    <Typography>Elementum ultricies convallis elementum odio dolor gravida cursus arcu.</Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="primary">
                    <WorkIcon />
                  </TimelineDot>
                </TimelineSeparator>
                <TimelineContent>
                    2019 - 2020
                    <Typography variant="h6" component="h1">
                      <b>Intern Software Engineer</b>
                    </Typography>
                    <Typography>Elementum ultricies convallis elementum odio dolor gravida cursus arcu.</Typography>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}
