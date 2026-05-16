'use client';
import * as React from 'react';

const ThemeContext = React.createContext({
    theme: 'system',
    resolvedTheme: 'light',
    setTheme: () => {},
});

const getSystemTheme = () => {
    if (typeof window === 'undefined') {
        return 'light';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export function ThemeProvider({ children, defaultTheme = 'light', storageKey = 'theme', }) {
    const [theme, setThemeState] = React.useState(() => {
        if (typeof window === 'undefined') {
            return defaultTheme;
        }
        return window.localStorage.getItem(storageKey) || defaultTheme;
    });

    const resolvedTheme = theme === 'system' ? getSystemTheme() : theme;

    const setTheme = React.useCallback((nextTheme) => {
        setThemeState(nextTheme);
        if (typeof window !== 'undefined') {
            window.localStorage.setItem(storageKey, nextTheme);
        }
    }, [storageKey]);

    React.useEffect(() => {
        const root = document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(resolvedTheme);
    }, [resolvedTheme]);

    React.useEffect(() => {
        const media = window.matchMedia('(prefers-color-scheme: dark)');
        const onChange = () => {
            if (theme === 'system') {
                setThemeState('system');
            }
        };
        media.addEventListener('change', onChange);
        return () => media.removeEventListener('change', onChange);
    }, [theme]);

    const value = React.useMemo(() => ({
        theme,
        resolvedTheme,
        setTheme,
    }), [theme, resolvedTheme, setTheme]);

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
    return React.useContext(ThemeContext);
}

