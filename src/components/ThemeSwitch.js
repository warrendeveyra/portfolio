import React from 'react';
import { motion } from 'framer-motion';
import { Box } from '@mui/material';

const ThemeSwitch = ({ mode, toggleColorMode }) => {
    const isDark = mode === 'dark';

    return (
        <Box
            onClick={toggleColorMode}
            sx={{
                width: 64,
                height: 32,
                borderRadius: 16,
                backgroundColor: isDark ? '#2D3748' : '#CBD5E0',
                display: 'flex',
                alignItems: 'center',
                padding: '4px',
                cursor: 'pointer',
                position: 'relative',
                transition: 'background-color 0.3s ease',
                boxShadow: isDark
                    ? 'inset 0 2px 4px rgba(0,0,0,0.3)'
                    : 'inset 0 2px 4px rgba(0,0,0,0.1)',
            }}
        >
            {/* Background elements - Stars for dark mode */}
            {isDark && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        position: 'absolute',
                        left: 10,
                        display: 'flex',
                        gap: '4px'
                    }}
                >
                    {[1, 2, 3].map((i) => (
                        <Box
                            key={i}
                            sx={{
                                width: i === 2 ? 3 : 2,
                                height: i === 2 ? 3 : 2,
                                borderRadius: '50%',
                                backgroundColor: 'white',
                            }}
                        />
                    ))}
                </motion.div>
            )}

            {/* Background elements - Clouds for light mode */}
            {!isDark && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        position: 'absolute',
                        right: 10,
                        display: 'flex',
                        gap: '2px',
                        alignItems: 'baseline'
                    }}
                >
                    <Box sx={{ width: 6, height: 6, borderRadius: '50% 50% 0 0', backgroundColor: 'white', opacity: 0.8 }} />
                    <Box sx={{ width: 8, height: 8, borderRadius: '50% 50% 0 0', backgroundColor: 'white' }} />
                </motion.div>
            )}

            {/* The Toggle Knob */}
            <motion.div
                animate={{
                    x: isDark ? 32 : 0,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 30
                }}
                style={{
                    width: 24,
                    height: 24,
                    borderRadius: 12,
                    backgroundColor: isDark ? '#F6E05E' : '#FED766',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                }}
            >
                {/* Sun logic: The knob itself looks like a sun. 
            Moon logic: We overlay a circle to create a crescent effect. */}
                {isDark && (
                    <motion.div
                        initial={{ x: 20 }}
                        animate={{ x: 6 }}
                        style={{
                            position: 'absolute',
                            width: 20,
                            height: 20,
                            borderRadius: '50%',
                            backgroundColor: '#2D3748',
                        }}
                    />
                )}
            </motion.div>
        </Box>
    );
};

export default ThemeSwitch;
