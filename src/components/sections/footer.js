import React from "react";
import { Box, Typography, IconButton, Link } from "@mui/material";
import { motion } from "framer-motion";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const socialLinks = [
    {
        icon: <LinkedInIcon />,
        href: "https://linkedin.com/in/warrendeveyra",
        label: "LinkedIn"
    },
    {
        icon: <GitHubIcon />,
        href: "https://github.com/warrendeveyra",
        label: "GitHub"
    },
    {
        icon: <EmailIcon />,
        href: "mailto:ren.deveyra.work@gmail.com",
        label: "Email"
    }
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <Box
            component="footer"
            sx={{
                width: '100%',
                py: 6,
                mt: 8,
                borderTop: '1px solid rgba(0,0,0,0.08)',
                background: 'linear-gradient(180deg, transparent 0%, rgba(248,211,80,0.05) 100%)'
            }}
        >
            <Box
                sx={{
                    maxWidth: 'lg',
                    mx: 'auto',
                    px: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 3
                }}
            >
                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        {socialLinks.map((social, index) => (
                            <IconButton
                                key={index}
                                component={Link}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                sx={{
                                    width: 48,
                                    height: 48,
                                    color: '#64748b',
                                    bgcolor: 'rgba(0,0,0,0.03)',
                                    border: '1px solid rgba(0,0,0,0.05)',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        color: '#F8D350',
                                        bgcolor: 'rgba(248,211,80,0.1)',
                                        transform: 'translateY(-4px)',
                                        boxShadow: '0 8px 20px rgba(248,211,80,0.2)'
                                    }
                                }}
                            >
                                {social.icon}
                            </IconButton>
                        ))}
                    </Box>
                </motion.div>

                {/* Tagline */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Typography
                        variant="body2"
                        sx={{
                            color: '#94a3b8',
                            fontWeight: 500,
                            letterSpacing: '0.5px'
                        }}
                    >
                        Built with passion & coffee ☕
                    </Typography>
                </motion.div>

                {/* Copyright */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <Typography
                        variant="caption"
                        sx={{
                            color: '#cbd5e1',
                            fontSize: '0.75rem'
                        }}
                    >
                        © {currentYear} Ren De Veyra. All rights reserved.
                    </Typography>
                </motion.div>
            </Box>
        </Box>
    );
}
