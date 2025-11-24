import { Variants } from 'framer-motion';

// Fade In Up
export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

// Fade In Down
export const fadeInDown: Variants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

// Fade In Left
export const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

// Fade In Right
export const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

// Stagger Children
export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

// Scale Up
export const scaleUp: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

// Hover Lift
export const hoverLift = {
    y: -8,
    transition: { duration: 0.3, ease: "easeOut" }
};

// Hover Scale
export const hoverScale = {
    scale: 1.05,
    transition: { duration: 0.3, ease: "easeOut" }
};

// Pulse Glow
export const pulseGlow = {
    scale: [1, 1.05, 1],
    opacity: [0.8, 1, 0.8],
    transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
    }
};

// Viewport settings for scroll triggering
export const viewportConfig = {
    once: true,
    margin: "-100px"
};
