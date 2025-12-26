import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from '@mui/material/IconButton';
import { Container, Grid, Link, Stack, Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { useStyles } from "./../styles/theme";
import { motion, AnimatePresence } from "framer-motion";

import { NavigationLogo } from "./svg";

const navItems = [
  { label: 'Works', id: 'works' },
  { label: 'Experience', id: 'experience' },
  { label: 'Achievements', id: 'achievements' },
  { label: 'About Me', id: 'about-me' }
];

// Animated hamburger/X icon
const MenuIcon = ({ isOpen }) => {
  return (
    <Box sx={{ width: 24, height: 24, position: 'relative', cursor: 'pointer' }}>
      <motion.span
        style={{
          position: 'absolute',
          width: 20,
          height: 2,
          backgroundColor: '#373C44',
          left: 2,
          borderRadius: 1
        }}
        animate={{
          top: isOpen ? 11 : 6,
          rotate: isOpen ? 45 : 0
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        style={{
          position: 'absolute',
          width: 20,
          height: 2,
          backgroundColor: '#373C44',
          left: 2,
          top: 11,
          borderRadius: 1
        }}
        animate={{
          opacity: isOpen ? 0 : 1,
          scaleX: isOpen ? 0 : 1
        }}
        transition={{ duration: 0.2 }}
      />
      <motion.span
        style={{
          position: 'absolute',
          width: 20,
          height: 2,
          backgroundColor: '#373C44',
          left: 2,
          borderRadius: 1
        }}
        animate={{
          top: isOpen ? 11 : 16,
          rotate: isOpen ? -45 : 0
        }}
        transition={{ duration: 0.3 }}
      />
    </Box>
  );
};

export default function NavigationHeader() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    setMobileOpen(false); // Close menu first

    // Small delay to let menu close, then scroll
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const navbarHeight = window.innerHeight * 0.09;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: elementPosition - navbarHeight - 20, behavior: 'smooth' });
      }
    }, 100);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileOpen(false);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="default"
        elevation={0}
        sx={{
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(0,0,0,0.05)',
          zIndex: 1100
        }}
      >
        <Container maxWidth="lg">
          <Toolbar style={{ height: "9vh" }} className={classes.animateTransition}>
            <Typography noWrap className={classes.title} onClick={scrollToTop} sx={{ cursor: 'pointer' }}>
              <NavigationLogo className={classes.logo} />
            </Typography>
            <Stack direction="row" spacing={4} className={classes.navBarMd} sx={{ display: { xs: 'none', md: 'flex' } }}>
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  color="inherit"
                  underline="none"
                  className={classes.buttonLink}
                  component="button"
                  onClick={() => scrollToSection(item.id)}
                >
                  <b>{item.label}</b>
                </Link>
              ))}
            </Stack>
            <Grid className={classes.navBarSm} sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                aria-label={mobileOpen ? "close menu" : "open menu"}
                color="inherit"
                onClick={handleDrawerToggle}
              >
                <MenuIcon isOpen={mobileOpen} />
              </IconButton>
            </Grid>
          </Toolbar>
        </Container>

        {/* Extending Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              style={{ overflow: 'hidden' }}
            >
              <Box
                sx={{
                  display: { xs: 'flex', md: 'none' },
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 2,
                  py: 3,
                  backgroundColor: 'rgba(255, 255, 255, 0.98)',
                  borderTop: '1px solid rgba(0,0,0,0.05)'
                }}
              >
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08, duration: 0.2 }}
                  >
                    <Link
                      component="button"
                      underline="none"
                      onClick={() => scrollToSection(item.id)}
                      sx={{
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        color: '#373C44',
                        py: 1,
                        transition: 'color 0.3s ease',
                        '&:hover': {
                          color: '#9B09DF'
                        }
                      }}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          )}
        </AnimatePresence>
      </AppBar>
    </div>
  );
}
