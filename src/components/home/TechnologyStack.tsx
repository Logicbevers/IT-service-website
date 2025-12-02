'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export function TechnologyStack() {
    const [activeTab, setActiveTab] = useState('frontend');

    const technologies = {
        frontend: [
            { name: 'React', category: 'Framework' },
            { name: 'Next.js', category: 'Framework' },
            { name: 'TypeScript', category: 'Language' },
            { name: 'Tailwind CSS', category: 'Styling' },
            { name: 'Vue.js', category: 'Framework' },
            { name: 'Angular', category: 'Framework' }
        ],
        backend: [
            { name: 'Node.js', category: 'Runtime' },
            { name: 'Python', category: 'Language' },
            { name: 'Java', category: 'Language' },
            { name: 'PostgreSQL', category: 'Database' },
            { name: 'MongoDB', category: 'Database' },
            { name: 'Redis', category: 'Cache' }
        ],
        cloud: [
            { name: 'AWS', category: 'Provider' },
            { name: 'Azure', category: 'Provider' },
            { name: 'Google Cloud', category: 'Provider' },
            { name: 'Docker', category: 'Container' },
            { name: 'Kubernetes', category: 'Orchestration' },
            { name: 'Terraform', category: 'IaC' }
        ],
        mobile: [
            { name: 'React Native', category: 'Framework' },
            { name: 'Flutter', category: 'Framework' },
            { name: 'Swift', category: 'Language' },
            { name: 'Kotlin', category: 'Language' },
            { name: 'Expo', category: 'Platform' },
            { name: 'Firebase', category: 'Backend' }
        ]
    };

    const tabs = [
        { id: 'frontend', label: 'Frontend' },
        { id: 'backend', label: 'Backend' },
        { id: 'cloud', label: 'Cloud & DevOps' },
        { id: 'mobile', label: 'Mobile' }
    ];

    return (
        <section className="relative bg-[#1E1E1E] py-24 md:py-32">
            <div className="container mx-auto px-4 md:px-6">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 mb-4">
                        <span className="w-8 h-1 bg-[#F6A400] rounded-full"></span>
                        <span className="text-sm text-[#F6A400] font-bold uppercase tracking-wider">Technology Stack</span>
                        <span className="w-8 h-1 bg-[#F6A400] rounded-full"></span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        Cutting-Edge Technologies<br />
                        We Master
                    </h2>

                    <p className="text-lg text-white/80 leading-relaxed">
                        We leverage the latest and most powerful technologies to build scalable, secure, and high-performance solutions.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-6 py-3 rounded-full font-semibold transition-all ${activeTab === tab.id
                                    ? 'bg-gradient-to-r from-[#F6A400] to-[#E98000] text-white shadow-lg'
                                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Technology Grid */}
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto"
                >
                    {technologies[activeTab as keyof typeof technologies].map((tech, index) => (
                        <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/10 transition-all cursor-pointer border border-white/10 hover:border-[#F6A400]"
                        >
                            <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-br from-[#F6A400]/20 to-[#E98000]/20 flex items-center justify-center text-3xl font-bold text-[#F6A400]">
                                {tech.name.charAt(0)}
                            </div>
                            <div className="font-bold text-white mb-1">{tech.name}</div>
                            <div className="text-xs text-white/60">{tech.category}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
