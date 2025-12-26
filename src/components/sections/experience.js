
import { Grid, Typography, Paper, Avatar } from "@mui/material";
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { motion } from "framer-motion";

import { useStyles } from "../../styles/theme";
import acn from "../../assets/images/acn.png";
import nbi from "../../assets/images/nbi.png";
import sunlife from "../../assets/images/sunlife.png";
import ubx from "../../assets/images/ubx.png";
import { ExpandableText } from "./ExpandableText";

const MotionTimelineConnector = motion(TimelineConnector);

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const popVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  }
};

const lineVariants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: {
      duration: 0.8,
      ease: "easeInOut"
    }
  }
};

export default function Experience() {
  const classes = useStyles();

  return (
    <Grid item container xs={12} md={12} id="experience">
      <Grid item xs={12} md={12}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h4" component="h4" className={classes.titleText}>
            <b>Experience</b>
          </Typography>
        </motion.div>
      </Grid>
      <Grid container item justifyContent="center" style={{ paddingBottom: "6rem" }} >
        <Grid item xs={12}>
          <Paper elevation={5}>
            <Timeline
              sx={{
                '& .MuiTimelineItem-root:before': {
                  display: 'none',
                },
              }}
            >
              <TimelineItem>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  style={{ display: 'flex', width: '100%' }}
                >
                  <TimelineSeparator>
                    <motion.div variants={popVariants}>
                      <TimelineDot style={{ padding: 0, overflow: 'hidden', backgroundColor: 'transparent', boxShadow: 'none', margin: 0 }}>
                        <Avatar src={acn} alt="Accenture" style={{ width: '50px', height: '50px', backgroundColor: '#fff', padding: '6px', border: '4px solid #9B09DF' }} imgProps={{ style: { objectFit: 'contain' } }} />
                      </TimelineDot>
                    </motion.div>
                    <MotionTimelineConnector
                      variants={lineVariants}
                      style={{ transformOrigin: "top", width: "2px", backgroundColor: "#9B09DF" }}
                    />
                  </TimelineSeparator>
                  <motion.div variants={popVariants} style={{ flexGrow: 1 }}>
                    <TimelineContent style={{ marginBottom: "2rem" }}>
                      <Typography variant="body2" color="textSecondary">
                        Apr 2025 - Present
                      </Typography>
                      <Typography variant="h6" component="h1" style={{ fontWeight: "bold" }}>
                        Senior Software Engineer
                      </Typography>
                      <Typography variant="subtitle1" style={{ fontStyle: "italic" }}>
                        Accenture Inc. — Ayala Makati, Philippines
                      </Typography>
                      <ExpandableText text="Maintained and enhanced core banking systems and cloud APIs, ensuring reliable operations through incident resolution, log analysis, and seamless integrations. Balanced legacy system updates with cloud‑based service improvements to strengthen stability and support smooth data flow across applications. Collaborated across diverse technical areas, from batch processing and vendor coordination to cloud infrastructure and API lifecycle management, contributing to consistent system performance and dependable service delivery." />
                    </TimelineContent>
                  </motion.div>
                </motion.div>
              </TimelineItem>

              <TimelineItem>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  style={{ display: 'flex', width: '100%' }}
                >
                  <TimelineSeparator>
                    <motion.div variants={popVariants}>
                      <TimelineDot style={{ padding: 0, overflow: 'hidden', backgroundColor: 'transparent', boxShadow: 'none', margin: 0 }}>
                        <Avatar src={sunlife} alt="Sunlife" style={{ width: '50px', height: '50px', backgroundColor: '#fff', padding: '6px', border: '4px solid #9B09DF' }} imgProps={{ style: { objectFit: 'contain' } }} />
                      </TimelineDot>
                    </motion.div>
                    <MotionTimelineConnector
                      variants={lineVariants}
                      style={{ transformOrigin: "top", width: "2px", backgroundColor: "#9B09DF" }}
                    />
                  </TimelineSeparator>
                  <motion.div variants={popVariants} style={{ flexGrow: 1 }}>
                    <TimelineContent style={{ marginBottom: "2rem" }}>
                      <Typography variant="body2" color="textSecondary">
                        Dec 2022 - Apr 2025
                      </Typography>
                      <Typography variant="h6" component="h1" style={{ fontWeight: "bold" }}>
                        Analyst Programmer
                      </Typography>
                      <Typography variant="subtitle1" style={{ fontStyle: "italic" }}>
                        Sunlife Financial — BGC Taguig, Philippines
                      </Typography>
                      <ExpandableText text="Developed and maintained Java/Spring Boot applications, managed cloud‑hosted APIs, conducted testing, resolved incidents, supported integrations, and documented workflows to ensure reliable, user‑friendly systems" />
                    </TimelineContent>
                  </motion.div>
                </motion.div>
              </TimelineItem>

              <TimelineItem>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  style={{ display: 'flex', width: '100%' }}
                >
                  <TimelineSeparator>
                    <motion.div variants={popVariants}>
                      <TimelineDot style={{ padding: 0, overflow: 'hidden', backgroundColor: 'transparent', boxShadow: 'none', margin: 0 }}>
                        <Avatar src={acn} alt="Accenture" style={{ width: '50px', height: '50px', backgroundColor: '#fff', padding: '6px', border: '4px solid #9B09DF' }} imgProps={{ style: { objectFit: 'contain' } }} />
                      </TimelineDot>
                    </motion.div>
                    <MotionTimelineConnector
                      variants={lineVariants}
                      style={{ transformOrigin: "top", width: "2px", backgroundColor: "#9B09DF" }}
                    />
                  </TimelineSeparator>
                  <motion.div variants={popVariants} style={{ flexGrow: 1 }}>
                    <TimelineContent style={{ marginBottom: "2rem" }}>
                      <Typography variant="body2" color="textSecondary">
                        Feb 2021 - Dec 2022
                      </Typography>
                      <Typography variant="h6" component="h1" style={{ fontWeight: "bold" }}>
                        Software Engineering Analyst
                      </Typography>
                      <Typography variant="subtitle1" style={{ fontStyle: "italic" }}>
                        Accenture Inc. — BGC Taguig, Philippines
                      </Typography>
                      <ExpandableText text="Developed internal applications and reusable assets, supported project lifecycle improvements, and co‑created training modules and bootcamp exercises in modern frameworks and DevOps practices to enhance delivery and team capability." />
                    </TimelineContent>
                  </motion.div>
                </motion.div>
              </TimelineItem>

              <TimelineItem>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  style={{ display: 'flex', width: '100%' }}
                >
                  <TimelineSeparator>
                    <motion.div variants={popVariants}>
                      <TimelineDot style={{ padding: 0, overflow: 'hidden', backgroundColor: 'transparent', boxShadow: 'none', margin: 0 }}>
                        <Avatar src={nbi} alt="NBI" style={{ width: '50px', height: '50px', backgroundColor: '#fff', padding: '6px', border: '4px solid #9B09DF' }} imgProps={{ style: { objectFit: 'contain' } }} />
                      </TimelineDot>
                    </motion.div>
                    <MotionTimelineConnector
                      variants={lineVariants}
                      style={{ transformOrigin: "top", width: "2px", backgroundColor: "#9B09DF" }}
                    />
                  </TimelineSeparator>
                  <motion.div variants={popVariants} style={{ flexGrow: 1 }}>
                    <TimelineContent style={{ marginBottom: "2rem" }}>
                      <Typography variant="body2" color="textSecondary">
                        Jul 2020 - Dec 2020
                      </Typography>
                      <Typography variant="h6" component="h1" style={{ fontWeight: "bold" }}>
                        I.T. Project Worker
                      </Typography>
                      <Typography variant="subtitle1" style={{ fontStyle: "italic" }}>
                        National Bureau of Investigation — Manila, Philippines
                      </Typography>
                      <ExpandableText text="Monitored and maintained servers and legacy applications to ensure reliable uptime, supported modernization through architecture design and mockups, managed databases with integrity safeguards, and contributed to workflow enhancements including the transition to paperless case processing for greater efficiency." />
                    </TimelineContent>
                  </motion.div>
                </motion.div>
              </TimelineItem>

              <TimelineItem>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  style={{ display: 'flex', width: '100%' }}
                >
                  <TimelineSeparator>
                    <motion.div variants={popVariants}>
                      <TimelineDot style={{ padding: 0, overflow: 'hidden', backgroundColor: 'transparent', boxShadow: 'none', margin: 0 }}>
                        <Avatar src={ubx} alt="UBX" style={{ width: '50px', height: '50px', backgroundColor: '#2E2E48', padding: '6px', border: '4px solid #9B09DF' }} imgProps={{ style: { objectFit: 'contain' } }} />
                      </TimelineDot>
                    </motion.div>
                  </TimelineSeparator>
                  <motion.div variants={popVariants} style={{ flexGrow: 1 }}>
                    <TimelineContent>
                      <Typography variant="body2" color="textSecondary">
                        Dec 2019 - Mar 2020
                      </Typography>
                      <Typography variant="h6" component="h1" style={{ fontWeight: "bold" }}>
                        Intern Software Engineer
                      </Typography>
                      <Typography variant="subtitle1" style={{ fontStyle: "italic" }}>
                        UBX Philippines — Pasig, Philippines
                      </Typography>
                      <ExpandableText text="Contributed to frontend development of an MVP with reusable React.js components, streamlined UI/UX workflows, implemented backend‑frontend transactional logic for real‑time loan processing, and collaborated in an agile team to deliver a successful launch within a few weeks." />
                    </TimelineContent>
                  </motion.div>
                </motion.div>
              </TimelineItem>
            </Timeline>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}
