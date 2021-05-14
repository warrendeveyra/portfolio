import React from "react";
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import LinearProgress from '@material-ui/core/LinearProgress';  
import { Grid, Typography, Paper } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import { useStyles } from "./../../styles/theme";
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import GameVector from './../../assets/game.svg';
import ArtVector from './../../assets/art.svg';
import TechVector from './../../assets/tech.svg';

const PinkProgressBar = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    background: 'linear-gradient(90deg, #DF09CA 0%, #FC7281 100%)',
  },
}))(LinearProgress);

const PurpleProgressBar = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    background: 'linear-gradient(90deg, #9B09DF 0%, #DF09CA 100%);',
  },
}))(LinearProgress);

const YellowProgressBar = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    background: 'linear-gradient(270deg, #FFCF06 0%, #FAC036 100%);',
  },
}))(LinearProgress);

export default function AboutMe() {
  const classes = useStyles();
  const theme = useTheme();
  const smallDevice = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid item container xs={12} sm={12} md={12}>
      <Grid item xs={12} md={12}>
        <Typography variant="h4" component="h4" className={classes.titleText}>
          About me
        </Typography>
      </Grid>
      <Grid item xs={12} md={12}>
        <Paper elevation={1} style={{paddingBottom: '6rem', paddingTop: '3.5rem'}}>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Box pl={smallDevice ? 0 : 2} pr={smallDevice ? 0 : 2}>
                <Grid item md={12}>
                  <Typography variant="body1" gutterBottom>
                    <b>Gravida sit elit sit cras volutpat odio. Id in amet, dui ornare mauris sodales aliquam amet. Tincidunt iaculis vel rutrum morbi aliquet vitae, adipiscing.</b>
                  </Typography>
                  <Box mt={2} mb={2}>
                    <Button variant="contained" color="secondary" >
                      Download CV
                    </Button>
                  </Box>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
                <Box pl={smallDevice ? 0 : 2} pr={smallDevice ? 0 : 2}>
                    <Typography variant="body1">
                        <b>UI/UX</b>
                    </Typography>
                    <PinkProgressBar variant="determinate" value={86} style={{ width: '100%' }} />
                    <br/>
                    <br/>
                    <Typography variant="body1">
                      <b>Frontend Development</b>
                    </Typography>
                    <PurpleProgressBar variant="determinate" value={95} style={{ width: '100%' }} />
                    <br/>
                    <br/>
                    <Typography variant="body1">
                      <b>Backend Development</b>
                    </Typography>
                    <YellowProgressBar variant="determinate" value={80} style={{ width: '100%' }} />
                </Box>
            </Grid>
            <Grid container item justify="space-between" className={classes.mt8}>
                <Grid item xs={12} md={4} >
                  <Box pl={smallDevice ? 0 : 2} pr={smallDevice ? 0 : 2}>
                    <Paper elevation={2} >
                      <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                        className={classes.mb3}
                      >
                        <Box mt={3} pb={2}>
                          <embed height={60} src={ArtVector} />
                        </Box>
                        <Typography align='center' className={classes.colorCardTitle} variant="subtitle1" gutterBottom>
                          Graphic Design
                        </Typography>
                        <Typography className={classes.colorCardSubtitle} variant="body2" gutterBottom>
                          Vivamus lorem enim, dictum amet, tincidunt laoreet sed nunc quis.
                        </Typography>
                      </Grid>
                    </Paper>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4} >
                  <Box pl={smallDevice ? 0 : 2} pr={smallDevice ? 0 : 2}>
                    <Paper elevation={3}>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                        className={classes.mb3}
                      >
                      <Box mt={3} pb={2}>
                        <embed height={60} src={TechVector} />
                      </Box>
                      <Typography align='center' className={classes.colorCardTitle} variant="subtitle1" gutterBottom>
                          Technology
                      </Typography>
                      <Typography className={classes.colorCardSubtitle} variant="body2" gutterBottom>
                        Vivamus lorem enim, dictum amet, tincidunt laoreet sed nunc quis.
                      </Typography>
                    </Grid>
                    </Paper>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box pl={smallDevice ? 0 : 2} pr={smallDevice ? 0 : 2}>
                    <Paper elevation={4}>
                      <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                        className={classes.mb3}
                      >
                        <Box mt={3} pb={2}>
                          <embed height={60} src={GameVector} />
                        </Box>
                        <Typography align='center' className={classes.colorCardTitle} variant="subtitle1" gutterBottom>
                          Video Games
                        </Typography>
                        <Typography className={classes.colorCardSubtitle} variant="body2" gutterBottom>
                          Vivamus lorem enim, dictum amet, tincidunt laoreet sed nunc quis.
                        </Typography>
                      </Grid>
                    </Paper>
                  </Box>
                </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
