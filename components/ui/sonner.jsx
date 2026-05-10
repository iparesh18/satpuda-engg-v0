'use client';
import { useTheme } from '../shared/theme-provider.jsx';
import { Toaster as Sonner } from 'sonner';
const Toaster = ({ ...props }) => {
    const { resolvedTheme } = useTheme();
    return (<Sonner theme={resolvedTheme} className="toaster group" style={{
            '--normal-bg': 'var(--popover)',
            '--normal-text': 'var(--popover-foreground)',
            '--normal-border': 'var(--border)',
        }} {...props}/>);
};
export { Toaster };
