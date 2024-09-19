import { createContext, useState, useContext, ReactNode, useEffect } from 'react';

// Define the possible theme values
type Theme = 'light' | 'dark';

// Create the ThemeContext with a default value
const ThemeContext = createContext<{ theme: Theme; toggleTheme: () => void } | undefined>(undefined);

// Create a custom provider component
const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<Theme>('dark');

    // Toggle between light and dark themes
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    // Add a side effect to apply the theme class to the <html> element
    useEffect(() => {
        const root = document.documentElement;

        // Apply the appropriate theme class
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Create a custom hook for accessing the context
const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export { ThemeProvider, useTheme };
