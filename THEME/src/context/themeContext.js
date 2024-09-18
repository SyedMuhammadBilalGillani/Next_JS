'use client'

import { createContext, useState, useEffect, useContext } from 'react';

// Create a Theme Context
const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState('light');

    useEffect(() => {
        // Check for user's saved theme in localStorage
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setTheme(storedTheme);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };
    useEffect(() => {
        // Update body class based on the theme
        document.body.className = theme === 'light' ? 'light' : 'dark';
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
