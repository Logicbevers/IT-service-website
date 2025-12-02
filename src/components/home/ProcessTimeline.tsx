'use client';

import { motion } from 'framer-motion';
import { Search, Lightbulb, Code, Rocket, HeadphonesIcon } from 'lucide-react';

export function ProcessTimeline() {
    const steps = [
        {
            number: 1,
            title: 'Discovery',
            description: 'We analyze your business needs and goals',
            icon: Search
        },
        {
            number: 2,
            title: 'Strategy',
            description: 'Custom solution design tailored to you',
            icon: Lightbulb
        },
        {
            number: 3,
            title: 'Development',
            description: 'Agile implementation with regular updates',
            icon: Code
        },
        {
            number: 4,
            title: 'Launch',
            description: 'Seamless deployment and go-live support',
            icon: Rocket
        },
        {
            number: 5,
            title: 'Support',
            description: 'Ongoing maintenance and optimization',
            icon: HeadphonesIcon
        }
    ];

    return (
        <section className="relative bg-gradient-to-b from-[#FAFAFA] to-white py-24 md:py-32 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 mb-4">
                        <span className="w-8 h-1 bg-[#F6A400] rounded-full"></span>
                        <span className="text-sm text-[#F6A400] font-bold uppercase tracking-wider">Our Process</span>
                        <span className="w-8 h-1 bg-[#F6A400] rounded-full"></span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] mb-6 leading-tight">
                        How We Work With You
                    </h2>

                    <p className="text-lg text-[#4A4A4A] leading-relaxed">
                        Our proven methodology ensures successful project delivery from concept to completion.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative max-w-6xl mx-auto">
                    {/* Connection Line */}
                    <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-[#E6E6E6] via-[#F6A400] to-[#E6E6E6]" />

                    {/* Steps */}
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <motion.div
                                    key={step.number}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="relative flex flex-col items-center text-center"
                                >
                                    {/* Number Circle */}
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                                        className="relative z-10 w-20 h-20 rounded-full bg-gradient-to-br from-[#F6A400] to-[#E98000] flex items-center justify-center mb-6 shadow-lg"
                                    >
                                        <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                                    </motion.div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold text-[#1E1E1E] mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-[#4A4A4A]">
                                        {step.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
