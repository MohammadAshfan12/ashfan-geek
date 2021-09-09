import React, { useState } from 'react';

export const useDarkMode = () => {
    const [theme, setTheme ] = useState('Light')

    const toggleTheme = () => {
        if(theme === 'Dark') {
            setTheme('Light');
        }
        if(theme === 'Light') {
            setTheme('Dark');
        }
    }
    return [theme, toggleTheme];
}