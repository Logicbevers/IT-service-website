'use client';

import { motion } from 'framer-motion';
import { Sparkles, Trophy, Smile, Globe, Clock, CheckCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

export function LogoMarquee() {
    const [particles, setParticles] = useState<{ left: string; top: string; delay: string; duration: string }[]>([]);

    useEffect(() => {
        // Generate static particles on client side to avoid hydration mismatch
        const newParticles = Array.from({ length: 20 }).map(() => ({
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            delay: `${Math.random() * 5}s`,
            duration: `${5 + Math.random() * 5}s`,
        }));
        setParticles(newParticles);
    }, []);

    const clients = [
        { name: 'TechCorp Global', industry: 'Technology' },
        { name: 'HealthFirst Systems', industry: 'Healthcare' },
        { name: 'RetailMax', industry: 'Retail' },
        { name: 'FinanceHub', industry: 'Financial Services' },
        { name: 'EduPlatform', industry: 'Education' },
        { name: 'LogisticsPro', industry: 'Logistics' },
        { name: 'ManufactureX', industry: 'Manufacturing' },
        { name: 'GovServices', industry: 'Government' },
    ];

    const duplicatedClients = [...clients, ...clients];

    const stats = [
        { icon: Trophy, number: '500+', label: 'Projects Delivered' },
        { icon: Smile, number: '98%', label: 'Client Satisfaction' },
        { icon: Globe, number: '50+', label: 'Countries Served' },
        { icon: Clock, number: '15+', label: 'Years of Innovation' },
    ];

    const badges = [
        'ISO 27001 Certified',
        'SOC 2 Type II Compliant',
        'GDPR Ready',
        '99.9% Uptime SLA',
    ];

    return (
        <section className="relative py-24 overflow-hidden bg-[#0A1128]">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A1128] to-[#1a1f3a]" />

            {/* Animated Grid Pattern */}
            <div
                className="absolute inset-0 opacity-10 animate-grid-pan"
                style={{
                    backgroundImage: `linear-gradient(rgba(0,212,255,0.3) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0,212,255,0.3) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}
            />

            {/* Floating Particles */}
            {particles.map((p, i) => (
                <div
                    key={i}
                    className="absolute w-1 h-1 bg-[#00D4FF] rounded-full opacity-40 animate-float"
                    style={{
                        left: p.left,
                        top: p.top,
                        animationDelay: p.delay,
                        animationDuration: p.duration,
                    }}
                />
            ))}

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00D4FF]/30 bg-[#00D4FF]/10 backdrop-blur-sm mb-6"
                    >
                        <Sparkles className="w-3 h-3 text-[#00D4FF]" />
                        <span className="text-xs font-bold uppercase tracking-wider text-[#00D4FF]">
                            Trusted Partnerships
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
                    >
                        Trusted by Industry Leaders<br />
                        <span className="bg-gradient-to-r from-[#00D4FF] to-[#6B4CE6] bg-clip-text text-transparent">
                            Worldwide
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed"
                    >
                        Partnering with forward-thinking organizations across the globe
                        to push boundaries and defy traditional limits.
                    </motion.p>
                </div>

                {/* Infinite Scroll Carousel */}
                <div className="relative max-w-[100vw] -mx-4 md:-mx-6 lg:mx-0 mb-20">
                    {/* Gradient Fade Edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0A1128] to-transparent z-20 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0A1128] to-transparent z-20 pointer-events-none" />

                    <div className="flex overflow-hidden py-4 group">
                        <div className="flex gap-6 animate-scroll group-hover:[animation-play-state:paused]">
                            {duplicatedClients.map((client, index) => (
                                <div
                                    key={`${client.name}-${index}`}
                                    className="relative flex-shrink-0 w-[280px] h-[140px] rounded-2xl p-6 flex flex-col items-center justify-center transition-all duration-400 cursor-pointer backdrop-blur-md bg-gradient-to-br from-[#00D4FF]/5 to-[#6B4CE6]/5 border border-[#00D4FF]/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:-translate-y-2 hover:scale-105 hover:border-[#00D4FF] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_40px_rgba(0,212,255,0.2)] group/card"
                                >
                                    {/* Logo Placeholder Badge */}
                                    <div className="w-16 h-16 mb-3 rounded-2xl bg-gradient-to-br from-[#00D4FF] to-[#6B4CE6] flex items-center justify-center text-2xl font-bold text-white shadow-lg transform transition-transform duration-300 group-hover/card:scale-110 group-hover/card:rotate-3">
                                        {client.name.charAt(0)}
                                    </div>

                                    <h3 className="text-lg font-bold text-white/80 group-hover/card:text-white transition-colors">
                                        {client.name}
                                    </h3>
                                    <span className="text-[11px] font-semibold text-[#00D4FF]/80 uppercase tracking-wider">
                                        {client.industry}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Statistics Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative p-8 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-[#6B4CE6]/5 backdrop-blur-md border border-[#00D4FF]/20 text-center group hover:-translate-y-1 hover:border-[#00D4FF] hover:shadow-[0_8px_30px_rgba(0,212,255,0.2)] transition-all duration-300"
                        >
                            <stat.icon className="w-12 h-12 mx-auto mb-4 text-[#00D4FF] transform transition-transform group-hover:scale-110" />
                            <div className="text-4xl font-black mb-2 bg-gradient-to-r from-[#00D4FF] to-[#6B4CE6] bg-clip-text text-transparent">
                                {stat.number}
                            </div>
                            <div className="text-sm font-semibold text-white/70 uppercase tracking-wider">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Trust Badges */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-wrap justify-center gap-8 opacity-60 hover:opacity-100 transition-opacity duration-300"
                >
                    {badges.map((badge) => (
                        <div key={badge} className="flex items-center gap-2 text-sm text-white/60">
                            <CheckCircle className="w-4 h-4 text-[#10B981]" />
                            <span>{badge}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
