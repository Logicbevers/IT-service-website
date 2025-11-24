'use client';

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Cloud, Cpu, Layout, Shield, Zap, Globe } from 'lucide-react';
import Link from 'next/link';
import { ServiceChip } from '@/components/shared/ServiceChip';
import { useState, useEffect } from 'react';

export function HomeBanner() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const moveX = clientX - window.innerWidth / 2;
        const moveY = clientY - window.innerHeight / 2;
        setMousePosition({ x: moveX, y: moveY });
    };

    // Parallax transforms
    const x = useSpring(useMotionValue(0), { stiffness: 100, damping: 30 });
    const y = useSpring(useMotionValue(0), { stiffness: 100, damping: 30 });

    useEffect(() => {
        x.set(mousePosition.x);
        y.set(mousePosition.y);
    }, [mousePosition, x, y]);

    const transform1 = { x: useTransform(x, (val) => val / 30), y: useTransform(y, (val) => val / 30) };
    const transform2 = { x: useTransform(x, (val) => val / -20), y: useTransform(y, (val) => val / -20) };
    const transform3 = { x: useTransform(x, (val) => val / 50), y: useTransform(y, (val) => val / 50) };

    // Typewriter effect variants
    const sentence = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.2,
                staggerChildren: 0.03,
            },
        },
    };

    const letter = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
        },
    };

    const headlineText = "Discover 360° Value Across Sectors";

    return (
        <section
            className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#F9FAFB]"
            onMouseMove={handleMouseMove}
        >
            {/* Background Elements */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
                <motion.div style={transform3} className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
                <motion.div style={transform3} className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20 pb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Column: Content */}
                    <div className="max-w-2xl">
                        {/* Animated Badge */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#E8E6E1] mb-8 shadow-sm"
                        >
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                            </span>
                            <span className="text-xs font-bold text-accent tracking-wide uppercase">Innovation Partner</span>
                        </motion.div>

                        {/* Stacked Headline with Typewriter/Reveal */}
                        <motion.h1
                            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-[#242424] leading-[1.1]"
                            variants={sentence}
                            initial="hidden"
                            animate="visible"
                        >
                            {headlineText.split("").map((char, index) => {
                                return (
                                    <motion.span key={char + "-" + index} variants={letter}>
                                        {char === " " ? "\u00A0" : char}
                                    </motion.span>
                                )
                            })}
                        </motion.h1>

                        {/* Subheadline */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg"
                        >
                            Be at the helm of digital transformation. We engineer scalable solutions that drive growth and efficiency.
                        </motion.p>

                        {/* Service Chips */}
                        <div className="flex flex-wrap gap-3 mb-10">
                            <ServiceChip icon={Cloud} label="Cloud Native" delay={1.0} />
                            <ServiceChip icon={Cpu} label="AI / ML" delay={1.1} />
                            <ServiceChip icon={Layout} label="UI/UX Design" delay={1.2} />
                            <ServiceChip icon={Shield} label="Cybersecurity" delay={1.3} />
                        </div>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.4 }}
                            className="flex flex-wrap gap-4 mb-16"
                        >
                            <Link href="/contact" className="inline-flex">
                                <Button size="lg" className="btn-shine bg-accent hover:bg-accent-dark text-white rounded-full px-8 h-14 text-lg shadow-lg shadow-accent/20 hover:shadow-xl hover:scale-105 transition-all relative overflow-hidden">
                                    Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                            <Link href="/services" className="inline-flex">
                                <Button variant="ghost" size="lg" className="rounded-full px-8 h-14 text-lg text-muted-foreground hover:text-[#242424] hover:bg-white border border-transparent hover:border-[#E8E6E1]">
                                    Explore Services
                                </Button>
                            </Link>
                        </motion.div>

                        {/* Trust Band (Mini) */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1.6 }}
                            className="pt-8 border-t border-[#E8E6E1]"
                        >
                            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Trusted by Industry Leaders</p>
                            <div className="flex gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                                {/* Simple SVG Placeholders for Logos */}
                                <div className="h-6 w-20 bg-muted-foreground/20 rounded" />
                                <div className="h-6 w-20 bg-muted-foreground/20 rounded" />
                                <div className="h-6 w-20 bg-muted-foreground/20 rounded" />
                                <div className="h-6 w-20 bg-muted-foreground/20 rounded" />
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="relative hidden lg:block h-full min-h-[600px]"
                    >
                        {/* Abstract Geometric Composition with Parallax */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none">
                            <motion.div
                                style={transform1}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 border-[1px] border-dashed border-accent/20 rounded-full"
                            />
                            <motion.div
                                style={transform2}
                                animate={{ rotate: -360 }}
                                transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-[10%] border-[1px] border-accent/10 rounded-full"
                            />
                        </div>

                        {/* Floating Cards / Visuals with Parallax */}
                        <motion.div
                            style={transform2}
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-[20%] right-[10%] bg-white p-6 rounded-2xl shadow-2xl border border-[#E8E6E1] z-20 max-w-xs"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-green-100 text-green-600 rounded-xl">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#242424]">Efficiency Boost</h3>
                                    <p className="text-sm text-muted-foreground">+45% Productivity</p>
                                </div>
                            </div>
                            <div className="h-2 bg-muted rounded-full overflow-hidden">
                                <div className="h-full w-[75%] bg-green-500 rounded-full" />
                            </div>
                        </motion.div>

                        <motion.div
                            style={transform1}
                            animate={{ y: [0, 30, 0] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-[20%] left-[10%] bg-white p-6 rounded-2xl shadow-2xl border border-[#E8E6E1] z-10 max-w-xs"
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                                    <Globe className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#242424]">Global Scale</h3>
                                    <p className="text-sm text-muted-foreground">Deployed in 12 Regions</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Central Visual Anchor */}
                        <motion.div style={transform3} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-tr from-accent to-orange-300 rounded-full opacity-10 blur-3xl" />
                        <motion.div style={transform3} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white rounded-full shadow-2xl flex items-center justify-center z-0 border border-[#E8E6E1]">
                            <div className="text-center">
                                <span className="block text-4xl font-bold text-[#242424]">10+</span>
                                <span className="text-xs text-muted-foreground uppercase tracking-wider">Years Exp.</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
