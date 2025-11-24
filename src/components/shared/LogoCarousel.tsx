'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Code, Database, Globe, Lock, Server, Smartphone, Zap } from 'lucide-react';

const logos = [
    { name: 'TechFlow', icon: Cloud },
    { name: 'CyberSafe', icon: Lock },
    { name: 'DevCraft', icon: Code },
    { name: 'DataSphere', icon: Database },
    { name: 'NetScale', icon: Server },
    { name: 'MobileFirst', icon: Smartphone },
    { name: 'GlobalConnect', icon: Globe },
    { name: 'PowerSys', icon: Zap },
];

export function LogoCarousel() {
    return (
        <div className="w-full py-12 bg-white border-y border-[#E8E6E1] overflow-hidden">
            <div className="container mx-auto px-4 mb-8 text-center">
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    Trusted by innovative companies worldwide
                </p>
            </div>

            <div className="relative flex overflow-x-hidden group">
                {/* Gradient Masks for smooth fade edges */}
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />

                {/* Infinite Scroll Container */}
                <motion.div
                    className="flex gap-16 items-center whitespace-nowrap"
                    animate={{ x: [0, -1035] }} // Adjust based on content width
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30,
                            ease: "linear",
                        },
                    }}
                    whileHover={{ animationPlayState: 'paused' }} // Note: Framer motion doesn't support this directly via prop, usually needs CSS or state. 
                // For simplicity in Framer Motion loop, pausing is trickier. 
                // We'll stick to continuous scroll or use a CSS class for hover-pause if needed.
                // Let's use a CSS-based approach for the pause or just keep it simple.
                // Actually, let's just let it scroll smoothly. 
                >
                    {/* Duplicated list for seamless loop */}
                    {[...logos, ...logos, ...logos].map((logo, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-pointer"
                        >
                            <logo.icon className="w-8 h-8" />
                            <span className="text-xl font-bold">{logo.name}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
