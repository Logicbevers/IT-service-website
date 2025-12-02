import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/packages/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#F6A400', // Primary Orange
                    light: '#FCD9A0',   // Light Gold/Peach
                    dark: '#E98000',    // Deep Amber
                    foreground: '#1E1E1E',
                },
                accent: {
                    DEFAULT: '#F6A400',
                    hover: '#FFBA27',   // Hover Orange
                    pressed: '#D86E00', // Pressed Orange
                    light: '#FFEBD2',   // Soft Peach
                    foreground: '#1E1E1E',
                },
                neutral: {
                    dark: '#1E1E1E',    // Text Dark
                    grey: '#4A4A4A',    // Text Grey
                    light: '#FAFAFA',   // Light Background
                    border: '#E6E6E6',  // Border Light
                },
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                card: {
                    DEFAULT: '#FFFFFF',
                    foreground: '#1E1E1E',
                },
                popover: {
                    DEFAULT: 'var(--popover)',
                    foreground: 'var(--popover-foreground)',
                },
                muted: {
                    DEFAULT: '#FAFAFA',
                    foreground: '#4A4A4A',
                },
                input: '#E6E6E6',
                ring: '#F6A400',
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
export default config;
