'use client';

import { motion } from 'framer-motion';
import { Target, Globe } from 'lucide-react';

export function MissionVisionSection() {
    return (
        <section className="relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* LEFT SIDE: Our Mission */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative bg-gradient-to-br from-[#F6A400] via-[#E98000] to-[#D86E00] py-20 md:py-32 px-6 md:px-12 lg:px-16 overflow-hidden group hover:scale-[1.02] transition-transform duration-500"
                >
                    {/* Decorative Pattern */}
                    <div className="absolute inset-0 opacity-10" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }} />

                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10 max-w-xl mx-auto lg:mx-0">
                        {/* Icon */}
                        <motion.div
                            animate={{
                                scale: [1, 1.1, 1],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-8"
                        >
                            <Target className="w-10 h-10 text-white" strokeWidth={1.5} />
                        </motion.div>

                        {/* Heading */}
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Our Mission
                        </h2>

                        {/* Description */}
                        <p className="text-lg md:text-xl text-white/95 leading-relaxed mb-12">
                            To drive business growth and empower individuals through innovative solutions, technical excellence, and learning that creates real opportunities for sustainable success.
                        </p>

                        {/* Statistics */}
                        <div className="grid grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-white mb-2">15+</div>
                                <div className="text-sm text-white/80 uppercase tracking-wider">Years</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-white mb-2">500+</div>
                                <div className="text-sm text-white/80 uppercase tracking-wider">Projects</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-white mb-2">98%</div>
                                <div className="text-sm text-white/80 uppercase tracking-wider">Success Rate</div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* RIGHT SIDE: Our Vision */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative bg-[#2C2C2C] py-20 md:py-32 px-6 md:px-12 lg:px-16 overflow-hidden group hover:scale-[1.02] transition-transform duration-500"
                >
                    {/* Decorative Pattern */}
                    <div className="absolute inset-0 opacity-5" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }} />

                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(246,164,0,0.15)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10 max-w-xl mx-auto lg:mx-0">
                        {/* Icon */}
                        <motion.div
                            animate={{
                                rotate: [0, 360],
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#F6A400]/20 backdrop-blur-sm mb-8"
                        >
                            <Globe className="w-10 h-10 text-[#F6A400]" strokeWidth={1.5} />
                        </motion.div>

                        {/* Heading */}
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Our Vision
                        </h2>

                        {/* Description */}
                        <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-12">
                            To become a global leader offering smart, integrated, and impactful services across technology, logistics, marketing, and education—empowering businesses worldwide to innovate and excel.
                        </p>

                        {/* Statistics */}
                        <div className="grid grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-[#F6A400] mb-2">50+</div>
                                <div className="text-sm text-white/70 uppercase tracking-wider">Countries</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-[#F6A400] mb-2">25+</div>
                                <div className="text-sm text-white/70 uppercase tracking-wider">Industries</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-[#F6A400] mb-2">4</div>
                                <div className="text-sm text-white/70 uppercase tracking-wider">Continents</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Animated Gradient Line Separator */}
            <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-transparent via-white/30 to-transparent hidden lg:block"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
            />
        </section>
    );
}
