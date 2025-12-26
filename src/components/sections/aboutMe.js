import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { Grid, Typography, Paper } from "@mui/material";
import { withStyles } from '@mui/styles';
import { useStyles } from "./../../styles/theme";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { motion, useInView } from "framer-motion";
import { Palette, Cpu, Lightbulb } from "lucide-react";

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

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

function AnimatedProgressBar({ Component, value, delay = 0 }) {
  const [progress, setProgress] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        const duration = 1200;
        const steps = 60;
        const increment = value / steps;
        let current = 0;

        const interval = setInterval(() => {
          current += increment;
          if (current >= value) {
            setProgress(value);
            clearInterval(interval);
          } else {
            setProgress(Math.floor(current));
          }
        }, duration / steps);

        return () => clearInterval(interval);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isInView, value, delay]);

  return (
    <div ref={ref}>
      <Component variant="determinate" value={progress} style={{ width: '100%' }} />
    </div>
  );
}

export default function AboutMe() {
  const classes = useStyles();
  const theme = useTheme();
  const smallDevice = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid item container xs={12} sm={12} md={12} id="about-me">
      <Grid item xs={12} md={12}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h4" component="h4" className={classes.titleText}>
            <b>About me</b>
          </Typography>
        </motion.div>
      </Grid>
      <Grid item xs={12} md={12}>
        <Paper elevation={1} style={{ paddingBottom: '6rem', paddingTop: '3.5rem' }}>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Box pl={smallDevice ? 0 : 2} pr={smallDevice ? 0 : 2}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                >
                  <Grid item md={12}>
                    <motion.div variants={fadeInUp}>
                      <Typography variant="h5" gutterBottom><b>Professional Summary</b></Typography>
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                      <Typography variant="body1" gutterBottom>
                        <b>Pragmatic, tool-agnostic developer focused on building scalable, maintainable systems. Skilled in modernizing legacy stacks, optimizing cloud workflows,
                          and blending backend precision with frontend finesse and creative design to deliver lasting solutions.</b>
                      </Typography>
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                      <Box mt={2} mb={2}>
                        <Button
                          variant="contained"
                          color="secondary"
                          component="a"
                          href={require("../../assets/resume/Warren De Veyra - Resume 2025.pdf")}
                          download="Ren De Veyra - Resume 2025.pdf"
                        >
                          Download CV
                        </Button>
                      </Box>
                    </motion.div>
                  </Grid>
                </motion.div>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box pl={smallDevice ? 0 : 2} pr={smallDevice ? 0 : 2}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                >
                  <motion.div variants={fadeInUp}>
                    <Typography variant="body1">
                      <b>UI/UX</b>
                    </Typography>
                    <AnimatedProgressBar Component={PurpleProgressBar} value={86} delay={200} />
                    <br />
                    <br />
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <Typography variant="body1">
                      <b>Software Development</b>
                    </Typography>
                    <AnimatedProgressBar Component={YellowProgressBar} value={95} delay={200} />
                    <br />
                    <br />
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <Typography variant="body1">
                      <b>Solutions & Ideation</b>
                    </Typography>
                    <AnimatedProgressBar Component={PinkProgressBar} value={80} delay={200} />
                  </motion.div>
                </motion.div>
              </Box>
            </Grid>
            <Grid container item justify="space-between" className={classes.mt8}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={staggerContainer}
                style={{ display: 'flex', width: '100%', justifyContent: 'space-between', flexWrap: 'wrap' }}
              >
                <Grid item xs={12} md={4} style={{ display: 'flex' }}>
                  <Box pl={smallDevice ? 0 : 2} pr={smallDevice ? 0 : 2} style={{ display: 'flex', width: '100%', flexDirection: 'column' }}>
                    <motion.div variants={cardVariants} style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
                      <Paper elevation={2} style={{ height: '100%', minHeight: smallDevice ? '350px' : '420px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                        <Grid
                          container
                          direction="column"
                          justify="center"
                          alignItems="center"
                          className={classes.mb3}
                          style={{ flex: 1, padding: '20px 0' }}
                        >
                          <Box mt={3} pb={2}>
                            <Palette size={72} color="#FFFFFF" strokeWidth={2} />
                          </Box>
                          <Typography align='center' className={classes.colorCardTitle} variant="subtitle1" gutterBottom>
                            Graphic Design
                          </Typography>
                          <Typography className={classes.colorCardSubtitle} variant="body2" align="center" style={{ padding: '0 15px' }} gutterBottom>
                            Combining artistic vision with technical precision to create impactful visual identities and user-centric designs.
                          </Typography>
                        </Grid>
                      </Paper>
                    </motion.div>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4} style={{ display: 'flex' }}>
                  <Box pl={smallDevice ? 0 : 2} pr={smallDevice ? 0 : 2} style={{ display: 'flex', width: '100%', flexDirection: 'column' }}>
                    <motion.div variants={cardVariants} style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
                      <Paper elevation={3} style={{ height: '100%', minHeight: smallDevice ? '350px' : '420px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                        <Grid
                          container
                          direction="column"
                          justify="center"
                          alignItems="center"
                          className={classes.mb3}
                          style={{ flex: 1, padding: '20px 0' }}
                        >
                          <Box mt={3} pb={2}>
                            <Cpu size={72} color="#FFFFFF" strokeWidth={2} />
                          </Box>
                          <Typography align='center' className={classes.colorCardTitle} variant="subtitle1" gutterBottom>
                            Technology
                          </Typography>
                          <Typography className={classes.colorCardSubtitle} variant="body2" align="center" style={{ padding: '0 15px' }} gutterBottom>
                            Passionate about exploring emerging technologies, architectural patterns, and developing high-performance solutions.
                          </Typography>
                        </Grid>
                      </Paper>
                    </motion.div>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4} style={{ display: 'flex' }}>
                  <Box pl={smallDevice ? 0 : 2} pr={smallDevice ? 0 : 2} style={{ display: 'flex', width: '100%', flexDirection: 'column' }}>
                    <motion.div variants={cardVariants} style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
                      <Paper elevation={4} style={{ height: '100%', minHeight: smallDevice ? '350px' : '420px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                        <Grid
                          container
                          direction="column"
                          justify="center"
                          alignItems="center"
                          className={classes.mb3}
                          style={{ flex: 1, padding: '20px 0' }}
                        >
                          <Box mt={3} pb={2}>
                            <Lightbulb size={72} color="#FFFFFF" strokeWidth={2} />
                          </Box>
                          <Typography align='center' className={classes.colorCardTitle} variant="subtitle1" gutterBottom>
                            Ideating
                          </Typography>
                          <Typography className={classes.colorCardSubtitle} variant="body2" align="center" style={{ padding: '0 15px' }} gutterBottom>
                            Focusing on creative brainstorming and problem-solving to transform complex challenges into innovative, user-centered solutions.
                          </Typography>
                        </Grid>
                      </Paper>
                    </motion.div>
                  </Box>
                </Grid>
              </motion.div>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
