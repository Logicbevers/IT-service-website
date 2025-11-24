'use client';

import { motion } from 'framer-motion';

interface AnimatedIconProps {
    className?: string;
}

export function CloudMigrationIcon({ className = "w-12 h-12" }: AnimatedIconProps) {
    return (
        <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Cloud */}
            <motion.path
                d="M48 32C48 28.6863 45.3137 26 42 26C41.6565 26 41.3178 26.0244 40.9862 26.0713C39.8093 21.6193 35.7732 18.4 31 18.4C25.2562 18.4 20.6 23.0562 20.6 28.8C20.6 29.2418 20.6298 29.6766 20.6875 30.1025C17.5625 30.8625 15.2 33.6625 15.2 37C15.2 40.8675 18.3325 44 22.2 44H42C45.3137 44 48 41.3137 48 38C48 35.0538 45.9462 32.6 43.2 32.1C43.3875 31.4375 43.5 30.7312 43.5 30C43.5 26.9625 41.0375 24.5 38 24.5"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            />
            {/* Upward Arrows */}
            {[0, 1, 2].map((i) => (
                <motion.path
                    key={i}
                    d={`M${24 + i * 8} 38 L${24 + i * 8} 28 M${20 + i * 8} 32 L${24 + i * 8} 28 L${28 + i * 8} 32`}
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: [0, 1, 0] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeInOut"
                    }}
                />
            ))}
        </svg>
    );
}

export function CybersecurityIcon({ className = "w-12 h-12" }: AnimatedIconProps) {
    return (
        <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Shield */}
            <motion.path
                d="M32 12L18 18V28C18 38 24 46 32 50C40 46 46 38 46 28V18L32 12Z"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="currentColor"
                fillOpacity="0.1"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
            />
            {/* Lock */}
            <motion.g
                initial={{ rotate: -10, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                <rect x="28" y="30" width="8" height="10" rx="1" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.2" />
                <path d="M28 30V26C28 23.7909 29.7909 22 32 22C34.2091 22 36 23.7909 36 26V30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <motion.circle
                    cx="32"
                    cy="35"
                    r="1.5"
                    fill="currentColor"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                />
            </motion.g>
        </svg>
    );
}

export function CustomSoftwareIcon({ className = "w-12 h-12" }: AnimatedIconProps) {
    return (
        <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Code Brackets */}
            <motion.path
                d="M20 22L12 32L20 42"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ x: 5, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
            />
            <motion.path
                d="M44 22L52 32L44 42"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ x: -5, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
            />
            {/* Typing Cursor */}
            <motion.line
                x1="32"
                y1="24"
                x2="32"
                y2="40"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
            />
            {/* Code Lines */}
            {[26, 32, 38].map((y, i) => (
                <motion.line
                    key={i}
                    x1="24"
                    y1={y}
                    x2="40"
                    y2={y}
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    opacity="0.5"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                />
            ))}
        </svg>
    );
}

export function DataAnalyticsIcon({ className = "w-12 h-12" }: AnimatedIconProps) {
    return (
        <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Bar Chart */}
            {[
                { x: 18, height: 15, delay: 0 },
                { x: 28, height: 25, delay: 0.1 },
                { x: 38, height: 20, delay: 0.2 },
                { x: 48, height: 30, delay: 0.3 },
            ].map((bar, i) => (
                <motion.rect
                    key={i}
                    x={bar.x}
                    y={50 - bar.height}
                    width="6"
                    height={bar.height}
                    rx="1"
                    fill="currentColor"
                    fillOpacity="0.7"
                    initial={{ scaleY: 0, y: 50 }}
                    animate={{ scaleY: 1, y: 50 - bar.height }}
                    transition={{
                        duration: 0.8,
                        delay: bar.delay,
                        repeat: Infinity,
                        repeatType: "reverse",
                        repeatDelay: 1
                    }}
                />
            ))}
            {/* Trend Line */}
            <motion.path
                d="M16 40 L26 30 L36 35 L46 20 L56 25"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            />
        </svg>
    );
}

export function AIMLIcon({ className = "w-12 h-12" }: AnimatedIconProps) {
    return (
        <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Brain/Neural Network */}
            <motion.circle
                cx="32"
                cy="32"
                r="18"
                stroke="currentColor"
                strokeWidth="2"
                fill="currentColor"
                fillOpacity="0.05"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
            />
            {/* Neural Nodes */}
            {[
                { cx: 32, cy: 20 },
                { cx: 24, cy: 32 },
                { cx: 40, cy: 32 },
                { cx: 28, cy: 42 },
                { cx: 36, cy: 42 },
            ].map((node, i) => (
                <motion.circle
                    key={i}
                    cx={node.cx}
                    cy={node.cy}
                    r="3"
                    fill="currentColor"
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.2, 1] }}
                    transition={{ duration: 0.5, delay: i * 0.1, repeat: Infinity, repeatDelay: 2 }}
                />
            ))}
            {/* Connections */}
            <motion.g stroke="currentColor" strokeWidth="1.5" opacity="0.5">
                <motion.line x1="32" y1="20" x2="24" y2="32" animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 1.5, repeat: Infinity }} />
                <motion.line x1="32" y1="20" x2="40" y2="32" animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 1.5, delay: 0.2, repeat: Infinity }} />
                <motion.line x1="24" y1="32" x2="28" y2="42" animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 1.5, delay: 0.4, repeat: Infinity }} />
                <motion.line x1="40" y1="32" x2="36" y2="42" animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 1.5, delay: 0.6, repeat: Infinity }} />
            </motion.g>
        </svg>
    );
}

export function DevOpsIcon({ className = "w-12 h-12" }: AnimatedIconProps) {
    return (
        <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Infinity Symbol */}
            <motion.path
                d="M20 32C20 26 24 22 28 22C32 22 34 26 36 32C38 26 40 22 44 22C48 22 52 26 52 32C52 38 48 42 44 42C40 42 38 38 36 32C34 38 32 42 28 42C24 42 20 38 20 32Z"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="currentColor"
                fillOpacity="0.05"
            />
            {/* Flowing Dots */}
            {[0, 1, 2, 3].map((i) => (
                <motion.circle
                    key={i}
                    r="2"
                    fill="currentColor"
                    initial={{ offsetDistance: "0%", scale: 0 }}
                    animate={{
                        offsetDistance: "100%",
                        scale: [0, 1, 1, 0]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.75,
                        ease: "linear"
                    }}
                    style={{
                        offsetPath: "path('M20 32C20 26 24 22 28 22C32 22 34 26 36 32C38 26 40 22 44 22C48 22 52 26 52 32C52 38 48 42 44 42C40 42 38 38 36 32C34 38 32 42 28 42C24 42 20 38 20 32Z')"
                    }}
                />
            ))}
        </svg>
    );
}
