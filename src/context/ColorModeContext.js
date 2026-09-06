import React, { createContext, useMemo, useState } from 'react';

export const ColorModeContext = createContext({ toggleColorMode: () => { } });

export const ColorModeProvider = ({ children }) => {
    const [mode, setMode] = useState(() => {
        const savedMode = localStorage.getItem('portfolio-theme-mode');
        return savedMode ? savedMode : 'light';
    });

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => {
                    const newMode = prevMode === 'light' ? 'dark' : 'light';
                    localStorage.setItem('portfolio-theme-mode', newMode);
                    return newMode;
                });
            },
            mode,
        }),
        [mode]
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            {children}
        </ColorModeContext.Provider>
    );
};
