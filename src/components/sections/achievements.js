import React from "react";
import { Grid, Typography, Box, Paper, Avatar } from "@mui/material";
import { motion } from "framer-motion";
import { useStyles } from "../../styles/theme";
import StarIcon from '@mui/icons-material/Star';
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import VerifiedIcon from '@mui/icons-material/Verified';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';

const achievements = [
  {
    id: 1,
    title: "AWS Certified Cloud Practitioner",
    org: "Amazon Web Services",
    description: "Foundational understanding of the AWS Cloud platform, including core services, security, architecture, and pricing models.",
    icon: <CloudQueueIcon />,
    color: "#9B09DF"
  },
  {
    id: 2,
    title: "1st Place - Xurpas Hackathon",
    org: "Xurpas Inc.",
    description: "Created a blockchain-powered peer-to-peer lending platform for gadgets and materials during COVID lockdowns, ensuring safety and transparency for users.",
    icon: <EmojiEventsIcon />,
    color: "#9B09DF"
  },
  {
    id: 3,
    title: "2nd Place - UnionBank Hackathon",
    org: "UnionBank of the Philippines",
    description: "Built a blockchain supply chain solution bridging consumers and producers to ensure food quality and traceability from farm to table.",
    icon: <EmojiEventsIcon />,
    color: "#9B09DF"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
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
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

export default function Achievements() {
  const classes = useStyles();

  return (
    <Box component="section" id="achievements" sx={{ width: '100%', py: 8 }}>
      <Grid container spacing={0}>
        <Grid item xs={12} style={{ marginBottom: '3rem' }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h4" component="h4" className={classes.titleText}>
              <b>Achievements</b>
            </Typography>
          </motion.div>
        </Grid>

        <Grid item xs={12}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <Grid container spacing={4} alignItems="stretch">
              {achievements.map((achievement) => (
                <Grid item xs={12} sm={6} md={4} key={achievement.id} sx={{ display: 'flex' }}>
                  <motion.div variants={cardVariants} style={{ display: 'flex', width: '100%' }}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 0,
                        width: '100%',
                        minHeight: '440px',
                        borderRadius: '24px',
                        display: 'flex',
                        flexDirection: 'column',
                        overflow: 'hidden',
                        backgroundColor: '#FFFFFF',
                        border: '1px solid rgba(0,0,0,0.05)',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                        '&:hover': {
                          transform: 'translateY(-12px)',
                          boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
                          '& .accent-bar': {
                            height: '12px'
                          }
                        }
                      }}
                    >
                      {/* Top Accent Bar */}
                      <Box
                        className="accent-bar"
                        sx={{
                          height: '8px',
                          width: '100%',
                          bgcolor: achievement.color,
                          transition: 'height 0.3s ease'
                        }}
                      />

                      <Box sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                        <Avatar
                          sx={{
                            width: 70,
                            height: 70,
                            bgcolor: `${achievement.color}10`,
                            color: achievement.color,
                            mb: 3,
                            fontSize: '2.5rem',
                            border: `2px solid ${achievement.color}20`
                          }}
                        >
                          {achievement.icon}
                        </Avatar>

                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 800,
                            mb: 1,
                            color: '#1a202c',
                            lineHeight: 1.2,
                            fontSize: '1.1rem'
                          }}
                        >
                          {achievement.title}
                        </Typography>

                        <Box
                          sx={{
                            px: 1.5,
                            py: 0.5,
                            borderRadius: '20px',
                            bgcolor: `${achievement.color}08`,
                            mb: 2.5
                          }}
                        >
                          <Typography
                            variant="caption"
                            sx={{
                              color: achievement.color,
                              fontWeight: 800,
                              textTransform: 'uppercase',
                              letterSpacing: '1px',
                              fontSize: '0.7rem'
                            }}
                          >
                            {achievement.org}
                          </Typography>
                        </Box>

                        <Typography
                          variant="body2"
                          sx={{
                            color: '#64748b',
                            lineHeight: 1.6,
                            fontSize: '0.9rem'
                          }}
                        >
                          {achievement.description}
                        </Typography>
                      </Box>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
}

