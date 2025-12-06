'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function ThemeToggle() {
    const { theme, setTheme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Avoid hydration mismatch
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="w-10 h-10 rounded-full bg-muted animate-pulse" />
        );
    }

    const currentTheme = theme === 'system' ? systemTheme : theme;
    const isDark = currentTheme === 'dark';

    const toggleTheme = () => {
        setTheme(isDark ? 'light' : 'dark');
    };

    return (
        <button
            onClick={toggleTheme}
            className="relative w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent-light hover:shadow-medium transition-all duration-300 flex items-center justify-center group overflow-hidden"
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        >
            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-light to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Icon Container */}
            <div className="relative z-10">
                <AnimatePresence mode="wait" initial={false}>
                    {isDark ? (
                        <motion.div
                            key="moon"
                            initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                            animate={{ rotate: 0, opacity: 1, scale: 1 }}
                            exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                            <Moon className="w-5 h-5 text-white" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="sun"
                            initial={{ rotate: 90, opacity: 0, scale: 0.6 }}
                            animate={{ rotate: 0, opacity: 1, scale: 1 }}
                            exit={{ rotate: -90, opacity: 0, scale: 0.6 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                            <Sun className="w-5 h-5 text-white" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Pulse Ring on Hover */}
            <div className="absolute inset-0 rounded-full border-2 border-white/30 scale-100 group-hover:scale-110 opacity-0 group-hover:opacity-100 transition-all duration-300" />
        </button>
    );
}
