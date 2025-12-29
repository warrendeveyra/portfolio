import React, { useState, useEffect } from "react";
import { Grid, Typography, Box, Chip, Paper, IconButton } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import LaunchIcon from '@mui/icons-material/Launch';
import { useStyles } from "../../styles/theme";

// Cal-Q Assets
import CalQLanding from "../../assets/images/projects/calq_landing.png";
import CalQDashboard from "../../assets/images/projects/calq_dashboard.png";
import CalQAddFood from "../../assets/images/projects/calq_add_food.png";
import CalQSettings from "../../assets/images/projects/calq_settings.png";

// TCG Assets
import TCGLanding from "../../assets/images/projects/tcg_landing.png";
import TCGSet from "../../assets/images/projects/tcg_set.png";
import TCGCustomSet from "../../assets/images/projects/tcg_custom_set.png";
import TCGPrintSettings from "../../assets/images/projects/tcg_print_settings.png";

// RentoPH Assets
import RentoPHComingSoon from "../../assets/images/projects/rentoph_coming_soon.png";

// San Policarpo Assets
import WireframeLanding from "../../assets/images/projects/wireframe_landing.png";

const projects = [
  {
    id: 1,
    title: "Cal-Q App",
    description: "AI-powered calorie and nutrition tracker with photo recognition. Track macros, set personalized goals for weight loss, maintenance, or muscle building with intelligent food logging.",
    tags: ["React", "PWA", "AI/ML", "Supabase"],
    images: [CalQLanding, CalQDashboard, CalQAddFood, CalQSettings],
    color: "#10b981",
    link: "https://cal-q.app/"
  },
  {
    id: 2,
    title: "TCG Placeholder Gen",
    description: "A community-focused tool built to simplify card collection for TCG enthusiasts. This free application allows collectors to generate and print professional placeholders for their binders, helping organize sets with ease.",
    tags: ["React", "TailwindCSS", "PWA", "GraphQL", "Supabase"],
    images: [TCGLanding, TCGSet, TCGCustomSet, TCGPrintSettings],
    color: "#a855f7",
    link: "https://warrendeveyra.github.io/TcgPlaceholderGen/"
  },
  {
    id: 3,
    title: "RentoPH",
    description: "A comprehensive rental platform designed to simplify the Philippine property market. From discovery to payment, it provides a secure, all-in-one dashboard to manage the entire rental lifecycle for both tenants and owners.",
    tags: ["React Native", "React", "Spring Boot", "AWS", "AI/ML"],
    images: [RentoPHComingSoon],
    color: "#6366f1",
    link: "Coming Soon"
  },
  {
    id: 4,
    title: "San Policarpo Wireframe",
    description: "Development-ready high-fidelity wireframes featuring hand-crafted UI components tailored to the client's specific vision. Designed for seamless engineering handoff with a focus on intuitive user flows and thematic consistency.",
    tags: ["Figma", "UI/UX", "Prototyping"],
    images: [WireframeLanding],
    color: "#38BDF8",
    link: "https://www.figma.com/proto/cQvQqnaTp0uxegJA4kVNIo/SanPolicarpo_Wireframe?page-id=6%3A564&node-id=6-565&t=y8o5EdvkB5fnWVDf-1"
  }
];

export default function RecentWorks() {
  const classes = useStyles();
  const [activeProject, setActiveProject] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Auto-cycle through images for active project
  useEffect(() => {
    if (!projects[activeProject]) return;

    const interval = setInterval(() => {
      setActiveImageIndex(prev =>
        (prev + 1) % projects[activeProject].images.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [activeProject]);

  // Reset image index when project changes
  useEffect(() => {
    setActiveImageIndex(0);
  }, [activeProject]);

  const handleNext = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <Grid item container xs={12} sm={12} md={12} id="works">
      <Grid item xs={12} md={12}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h4" component="h4" className={classes.titleText}>
            <b>Recent Works</b>
          </Typography>
        </motion.div>
      </Grid>

      <Grid item xs={12} style={{ marginBottom: "6rem", position: 'relative' }}>
        {/* Previous Button - Left Side */}
        <IconButton
          onClick={handlePrev}
          sx={{
            position: 'absolute',
            left: { xs: '-10px', md: '-20px' },
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            backgroundColor: projects[activeProject].color,
            color: 'white',
            '&:hover': {
              backgroundColor: projects[activeProject].color,
              opacity: 0.8
            }
          }}
        >
          <NavigateBeforeIcon />
        </IconButton>

        {/* Next Button - Right Side */}
        <IconButton
          onClick={handleNext}
          sx={{
            position: 'absolute',
            right: { xs: '-10px', md: '-20px' },
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            backgroundColor: projects[activeProject].color,
            color: 'white',
            '&:hover': {
              backgroundColor: projects[activeProject].color,
              opacity: 0.8
            }
          }}
        >
          <NavigateNextIcon />
        </IconButton>

        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = Math.abs(offset.x) * velocity.x;
            if (swipe < -10000) {
              handleNext();
            } else if (swipe > 10000) {
              handlePrev();
            }
          }}
        >
          <Paper elevation={5} style={{ overflow: 'hidden', cursor: 'grab' }}>
            <Box style={{ padding: '2rem 3rem' }}>
              <Grid container spacing={6} alignItems="center">
                {/* Left Side - Descriptions */}
                <Grid item xs={12} md={6}>
                  <Box sx={{ position: 'relative', minHeight: { xs: 'auto', md: '400px' } }}>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeProject}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      >
                        <Typography
                          variant="h3"
                          gutterBottom
                          style={{
                            fontWeight: 'bold',
                            color: projects[activeProject].color,
                            marginBottom: '1.5rem'
                          }}
                        >
                          {projects[activeProject].title}
                        </Typography>
                        <Typography
                          variant="body1"
                          paragraph
                          style={{
                            lineHeight: 1.7,
                            marginBottom: '1.5rem',
                            color: '#373C44',
                            fontSize: '1rem',
                            minHeight: '4.5rem'
                          }}
                        >
                          {projects[activeProject].description}
                        </Typography>
                        <Box display="flex" flexWrap="wrap" gap={1}>
                          {projects[activeProject].tags.map((tag, idx) => (
                            <Chip
                              key={idx}
                              label={tag}
                              style={{
                                backgroundColor: `${projects[activeProject].color}20`,
                                color: projects[activeProject].color,
                                fontWeight: 700,
                                fontSize: '0.9rem',
                                padding: '1.2rem 0.8rem'
                              }}
                            />
                          ))}
                        </Box>
                        {projects[activeProject].link && (
                          <Box mt={3}>
                            {projects[activeProject].link === "Coming Soon" ? (
                              <Typography
                                variant="body1"
                                style={{
                                  color: '#999',
                                  fontWeight: 700,
                                  fontSize: '1.1rem',
                                  fontStyle: 'italic'
                                }}
                              >
                                Coming Soon
                              </Typography>
                            ) : (
                              <a
                                href={projects[activeProject].link}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                  textDecoration: 'none',
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: '8px',
                                  color: projects[activeProject].color,
                                  fontWeight: 700,
                                  fontSize: '1.1rem',
                                  transition: 'transform 0.2s ease',
                                }}
                                onMouseOver={(e) => e.currentTarget.style.transform = 'translateX(5px)'}
                                onMouseOut={(e) => e.currentTarget.style.transform = 'translateX(0)'}
                              >
                                {projects[activeProject].title === "San Policarpo Wireframe" ? "View live wireframe" : "View Live Website"} <LaunchIcon style={{ fontSize: '1.2rem' }} />
                              </a>
                            )}
                          </Box>
                        )}
                        <Box mt={2}>
                          <Typography
                            variant="body2"
                            style={{
                              color: '#999',
                              fontSize: '0.9rem'
                            }}
                          >
                            Project {activeProject + 1} of {projects.length}
                          </Typography>
                        </Box>
                      </motion.div>
                    </AnimatePresence>
                  </Box>
                </Grid>

                {/* Right Side - Images */}
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      height: { xs: '300px', sm: '400px', md: '500px' },
                      borderRadius: '12px',
                      overflow: 'hidden',
                      transition: 'all 0.5s ease'
                    }}
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`${activeProject}-${activeImageIndex}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        style={{ width: '100%', height: '100%', position: 'relative' }}
                      >
                        <motion.img
                          src={projects[activeProject].images[activeImageIndex]}
                          alt={`${projects[activeProject].title} ${activeImageIndex + 1}`}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                          }}
                        />
                        {/* Global Color Tint (Hue) Overlay */}
                        <Box
                          sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: projects[activeProject].color,
                            mixBlendMode: 'hue',
                            opacity: 0.12,
                            pointerEvents: 'none'
                          }}
                        />
                        {/* Subtle Gradient to improve legibility and depth */}
                        <Box
                          sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: `linear-gradient(to bottom, transparent 60%, ${projects[activeProject].color}08 100%)`,
                            pointerEvents: 'none'
                          }}
                        />
                      </motion.div>
                    </AnimatePresence>

                    {/* Image indicators */}
                    {projects[activeProject].images.length > 1 && (
                      <Box
                        style={{
                          position: 'absolute',
                          bottom: '1rem',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          display: 'flex',
                          gap: '0.5rem'
                        }}
                      >
                        {projects[activeProject].images.map((_, idx) => (
                          <Box
                            key={idx}
                            style={{
                              width: activeImageIndex === idx ? '2rem' : '0.5rem',
                              height: '0.5rem',
                              borderRadius: '0.25rem',
                              backgroundColor: activeImageIndex === idx ? projects[activeProject].color : 'rgba(255,255,255,0.5)',
                              transition: 'all 0.3s ease',
                              cursor: 'pointer'
                            }}
                            onClick={() => setActiveImageIndex(idx)}
                          />
                        ))}
                      </Box>
                    )}
                  </Box>
                </Grid>
              </Grid>

            </Box>
          </Paper>
        </motion.div>
      </Grid>
    </Grid>
  );
}
