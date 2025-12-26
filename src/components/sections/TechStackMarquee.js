import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const SectionContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    padding: '2rem 0',
    marginBottom: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
}));

const MarqueeContainer = styled(Box)(({ width = '80%', theme }) => ({
    width: width,
    maxWidth: '1000px',
    overflow: 'hidden',
    position: 'relative',
    marginBottom: '2.5rem',
    '&::before, &::after': {
        content: '""',
        position: 'absolute',
        top: 0,
        width: '150px',
        height: '100%',
        zIndex: 2,
        pointerEvents: 'none',
    },
    '&::before': {
        left: 0,
        background: 'linear-gradient(to right, #F8F8FF, transparent)',
    },
    '&::after': {
        right: 0,
        background: 'linear-gradient(to left, #F8F8FF, transparent)',
    },
    [theme.breakpoints.down('sm')]: {
        width: '100%',
        '&::before, &::after': {
            width: '50px',
        },
    },
}));

const TechItem = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '100px',
    flexShrink: 0,
    filter: 'grayscale(100%)',
    opacity: 0.6,
    transition: 'all 0.3s ease',
    '&:hover': {
        filter: 'grayscale(0%)',
        opacity: 1,
        transform: 'scale(1.05)',
    },
    [theme.breakpoints.down('sm')]: {
        minWidth: '70px',
    },
}));

const TechLogo = styled('img')(({ theme }) => ({
    height: '60px',
    width: 'auto',
    maxWidth: '100px',
    objectFit: 'contain',
    pointerEvents: 'none',
    [theme.breakpoints.down('sm')]: {
        height: '40px',
        maxWidth: '70px',
    },
}));

export default function TechStackMarquee() {
    const languages = [
        { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'Spring Boot', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
        { name: 'Material UI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg' },
        { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'Angular', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
        { name: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
        { name: 'CodeIgniter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg' },
        { name: 'Laravel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
    ];

    const tools = [
        { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
        { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
        { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg' },
        { name: 'Jenkins', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
        { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
        { name: 'GitHub Copilot', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    ];

    const marqueeVariants = {
        animate: (custom) => ({
            x: custom.direction === 'left' ? [0, '-50%'] : ['-50%', 0],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: custom.duration,
                    ease: "linear",
                },
            },
        }),
    };

    const TechSet = ({ items, type }) => (
        <Box sx={{ display: 'flex', gap: '2rem', pr: '2rem' }}>
            {items.map((tech, index) => (
                <TechItem key={`${type}-${tech.name}-${index}`}>
                    <TechLogo src={tech.logo} alt={tech.name} />
                </TechItem>
            ))}
        </Box>
    );

    return (
        <SectionContainer>
            <Typography
                variant="h4"
                sx={{
                    fontFamily: "Montserrat",
                    fontWeight: "bold",
                    fontSize: "2rem",
                    color: "#373C44",
                    mb: 4
                }}
            >
                <b>Technologies I work with</b>
            </Typography>

            {/* Top Marquee */}
            <MarqueeContainer width="90%">
                <motion.div
                    style={{ display: 'flex', width: 'max-content' }}
                    variants={marqueeVariants}
                    animate="animate"
                    custom={{ direction: 'left', duration: 50 }}
                >
                    <TechSet items={languages} type="lang1" />
                    <TechSet items={languages} type="lang2" />
                </motion.div>
            </MarqueeContainer>

            {/* Bottom Marquee */}
            <MarqueeContainer width="70%">
                <motion.div
                    style={{ display: 'flex', width: 'max-content' }}
                    variants={marqueeVariants}
                    animate="animate"
                    custom={{ direction: 'right', duration: 80 }}
                >
                    <TechSet items={tools} type="tool1" />
                    <TechSet items={tools} type="tool2" />
                </motion.div>
            </MarqueeContainer>
        </SectionContainer>
    );
}


