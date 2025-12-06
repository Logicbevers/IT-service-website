'use client';

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Globe } from 'lucide-react';
import Link from 'next/link';
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

    return (
        <section
            className="relative min-h-[90vh] flex items-center overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            {/* Orange Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#F6A400] via-[#E98000] to-[#FCD9A0]" />

            {/* Geometric Pattern Overlay */}
            <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }} />

            {/* Animated Shapes */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <motion.div style={transform3} className="absolute top-[10%] right-[5%] w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl" />
                <motion.div style={transform3} className="absolute bottom-[15%] left-[8%] w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl" />
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
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FFF4E4] border border-[#F6A400]/20 mb-8 shadow-[0_0_15px_rgba(246,164,0,0.1)]"
                        >
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E98000] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E98000]"></span>
                            </span>
                            <span className="text-sm font-semibold text-[#E98000] tracking-wide uppercase">✨ Who We Are</span>
                        </motion.div>

                        {/* Main Headline */}
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white leading-[1.1]"
                        >
                            Building the Future of<br />
                            Business & Innovation
                        </motion.h1>

                        {/* Subheadline */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.15 }}
                            className="text-xl text-white/95 mb-8 leading-relaxed max-w-lg"
                        >
                            We empower organizations and professionals to scale smarter through integrated solutions in technology, logistics, digital transformation, and skill development.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="flex flex-wrap gap-4 mb-10"
                        >

                            <Link href="/about" className="inline-flex">
                                <Button variant="ghost" size="lg" className="rounded-full px-8 h-14 text-lg text-white border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all">
                                    Watch Our Story
                                </Button>
                            </Link>
                        </motion.div>

                        {/* Trust Indicators */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="flex flex-wrap gap-6 text-sm text-white/90"
                        >
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="font-medium">500+ Projects Delivered</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="font-medium">50+ Global Clients</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="font-medium">15+ Years of Excellence</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Floating Stats Cards */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="relative hidden lg:block h-full min-h-[600px]"
                    >
                        {/* Stats Card 1 */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            style={transform2}
                            className="absolute top-[10%] right-[5%] bg-white p-8 rounded-2xl shadow-2xl border border-white/20 z-30 w-64"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-4 bg-[#F6A400]/10 rounded-xl">
                                    <svg className="w-8 h-8 text-[#F6A400]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-[#1A1A1A]">500+</div>
                                    <div className="text-sm text-[#3F3F3F] font-medium">Successful Projects</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Stats Card 2 */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            style={transform1}
                            className="absolute top-[40%] right-[10%] bg-white p-8 rounded-2xl shadow-2xl border border-white/20 z-20 w-64"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-4 bg-[#10B981]/10 rounded-xl">
                                    <svg className="w-8 h-8 text-[#10B981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-[#1A1A1A]">98%</div>
                                    <div className="text-sm text-[#3F3F3F] font-medium">Client Satisfaction</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Stats Card 3 */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 1.0 }}
                            style={transform3}
                            className="absolute top-[70%] right-[5%] bg-white p-8 rounded-2xl shadow-2xl border border-white/20 z-10 w-64"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-4 bg-[#3B82F6]/10 rounded-xl">
                                    <Globe className="w-8 h-8 text-[#3B82F6]" />
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-[#1A1A1A]">50+</div>
                                    <div className="text-sm text-[#3F3F3F] font-medium">Countries Served</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs text-white/60 font-medium uppercase tracking-wider">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-2"
                >
                    <div className="w-1.5 h-2 bg-white rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
}
