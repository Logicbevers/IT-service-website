'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button, buttonVariants } from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.h1
                            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                        >
                            Transforming <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                                Digital Futures
                            </span>
                        </motion.h1>

                        <motion.p
                            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            Empowering businesses with cutting-edge technology solutions. From cloud infrastructure to AI-powered analytics, we deliver innovation that drives growth.
                        </motion.p>

                        <motion.div
                            className="flex gap-4 mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                        >
                            <Link href="/contact" className={buttonVariants({ size: 'lg' })}>
                                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                            <Link href="/services" className={buttonVariants({ size: 'lg', variant: 'outline' })}>
                                Our Services
                            </Link>
                        </motion.div>

                        <motion.div
                            className="grid grid-cols-3 gap-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                        >
                            <div>
                                <p className="text-3xl font-bold text-primary">10+</p>
                                <p className="text-sm text-muted-foreground">Years Experience</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-primary">200+</p>
                                <p className="text-sm text-muted-foreground">Projects Delivered</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-primary">98%</p>
                                <p className="text-sm text-muted-foreground">Client Retention</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="relative h-[400px] lg:h-[600px] w-full hidden lg:block"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        {/* 3D Element Placeholder / Fallback */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl backdrop-blur-sm border border-white/10 flex items-center justify-center">
                            <div className="text-center">
                                <div className="w-32 h-32 bg-accent rounded-full mx-auto mb-4 animate-bounce shadow-lg shadow-accent/50" />
                                <p className="text-muted-foreground font-medium">Interactive 3D Experience</p>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <motion.div
                            className="absolute top-10 right-10 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-xl"
                            animate={{ y: [0, -20, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 bg-green-500 rounded-full" />
                                <span className="font-semibold text-sm">System Optimal</span>
                            </div>
                        </motion.div>

                        <motion.div
                            className="absolute bottom-20 left-0 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-xl"
                            animate={{ y: [0, 20, 0] }}
                            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white text-xs">99%</div>
                                <div>
                                    <p className="text-xs text-muted-foreground">Uptime</p>
                                    <p className="font-bold text-sm">Guaranteed</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section >
    );
}
