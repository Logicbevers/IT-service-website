'use client';

import { motion } from 'framer-motion';
import { Trophy, Users, Server, Briefcase, ArrowUpRight } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';

interface MetricCardProps {
    icon: React.ReactNode;
    value: string;
    label: string;
    isPercentage?: boolean;
    delay: number;
}

function MetricCard({ icon, value, label, isPercentage = false, delay }: MetricCardProps) {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        const targetValue = parseFloat(value.replace(/[^0-9.]/g, ''));
        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = targetValue / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= targetValue) {
                setCount(targetValue);
                clearInterval(timer);
            } else {
                setCount(current);
            }
        }, duration / steps);

        return () => clearInterval(timer);
    }, [isVisible, value]);

    const displayValue = isPercentage
        ? `${count.toFixed(1)}%`
        : count >= 1000
            ? `${Math.floor(count)}+`
            : Math.floor(count).toString();

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay }}
            className="relative group"
        >
            <div className="relative p-6 border-l-2 border-white/10 hover:border-accent pl-8 transition-colors duration-300">
                {/* Icon */}
                <div className="mb-4 text-accent">
                    {icon}
                </div>

                {/* Value */}
                <div className="mb-2">
                    <div className="text-5xl md:text-6xl font-bold text-white tracking-tight">
                        {displayValue}
                    </div>
                </div>

                {/* Label */}
                <div>
                    <p className="text-gray-400 font-medium text-lg">{label}</p>
                </div>
            </div>
        </motion.div>
    );
}

export function MetricsSection() {
    return (
        <Section className="relative bg-[#23272F] overflow-hidden py-32">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="relative z-10 container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
                            <Trophy className="w-4 h-4 text-accent" />
                            <span className="text-sm text-white font-semibold">Impact by the Numbers</span>
                        </div>
                        <Heading level={2} className="text-white mb-6 text-4xl md:text-5xl leading-tight">
                            Delivering Real Value <br />
                            <span className="text-gray-400">At Scale</span>
                        </Heading>
                    </div>
                    <div>
                        <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl">
                            We don't just build software; we engineer outcomes. Our track record speaks to our commitment to precision, speed, and tangible business growth.
                        </p>
                    </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <MetricCard
                        icon={<Users className="w-8 h-8" />}
                        value="98"
                        label="Client Retention"
                        isPercentage
                        delay={0}
                    />
                    <MetricCard
                        icon={<Server className="w-8 h-8" />}
                        value="99.9"
                        label="Uptime Guarantee"
                        isPercentage
                        delay={0.1}
                    />
                    <MetricCard
                        icon={<Briefcase className="w-8 h-8" />}
                        value="500"
                        label="Projects Delivered"
                        delay={0.2}
                    />
                    <MetricCard
                        icon={<Trophy className="w-8 h-8" />}
                        value="15"
                        label="Industry Awards"
                        delay={0.3}
                    />
                </div>
            </div>
        </Section>
    );
}
