import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';

const scrollLeft = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const scrollRight = keyframes`
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
`;

const SectionContainer = styled(Box)({
    width: '100%',
    padding: '2rem 0',
    marginBottom: '2rem',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

const SectionTitle = styled(Typography)(({ theme }) => ({
    fontSize: '1.5rem',
    fontWeight: 600,
    color: '#373C44',
    marginBottom: '2rem',
    fontFamily: 'Montserrat',
    [theme.breakpoints.down('sm')]: {
        fontSize: '1.2rem',
        marginBottom: '1.5rem',
    },
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
            width: '50px', // Smaller fade gradient on mobile
        },
    },
}));

const MarqueeTrack = styled(Box)(({ speed = 30, direction = 'left' }) => ({
    display: 'flex',
    gap: '1rem',
    animation: `${direction === 'left' ? scrollLeft : scrollRight} ${speed}s linear infinite`,
    willChange: 'transform',
    backfaceVisibility: 'hidden',
    perspective: 1000,
    '&:hover': {
        animationPlayState: 'paused',
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

    // Create 8x duplicates for ultra-smooth scrolling
    const languageItems = Array(8).fill(languages).flat();
    const toolItems = Array(8).fill(tools).flat();

    return (
        <SectionContainer>
            <SectionTitle>Technologies I work with</SectionTitle>

            {/* Top Marquee - Languages & Frameworks (slower, left) */}
            <MarqueeContainer width="80%">
                <MarqueeTrack speed={50} direction="left">
                    {languageItems.map((tech, index) => (
                        <TechItem key={`lang-${tech.name}-${index}`}>
                            <TechLogo src={tech.logo} alt={tech.name} />
                        </TechItem>
                    ))}
                </MarqueeTrack>
            </MarqueeContainer>

            {/* Bottom Marquee - Tools (faster, right) */}
            <MarqueeContainer width="60%">
                <MarqueeTrack speed={30} direction="right">
                    {toolItems.map((tech, index) => (
                        <TechItem key={`tool-${tech.name}-${index}`}>
                            <TechLogo src={tech.logo} alt={tech.name} />
                        </TechItem>
                    ))}
                </MarqueeTrack>
            </MarqueeContainer>
        </SectionContainer>
    );
}
