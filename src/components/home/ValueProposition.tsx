'use client';

import { ServicePillarCard } from './ServicePillarCard';
import { Code, Package, Rocket, GraduationCap } from 'lucide-react';

export function ValueProposition() {
    const pillars = [
        {
            icon: Code,
            title: 'Technology Solutions',
            description: 'Transform your digital infrastructure with custom software, cloud solutions, and enterprise applications built for scale.',
            services: [
                'Custom Software Development',
                'Cloud Infrastructure & DevOps',
                'Enterprise Application Integration',
                'Mobile & Web Applications'
            ],
            href: '/services/software-development'
        },
        {
            icon: Package,
            title: 'Logistics & Supply Chain',
            description: 'Optimize operations with intelligent logistics solutions that reduce costs and improve efficiency across your supply chain.',
            services: [
                'Supply Chain Management',
                'Warehouse Automation',
                'Inventory Optimization',
                'Transportation Management'
            ],
            href: '/services/logistics'
        },
        {
            icon: Rocket,
            title: 'Digital Transformation',
            description: 'Modernize your business processes, embrace automation, and unlock new growth opportunities with strategic digital transformation.',
            services: [
                'Process Automation & RPA',
                'Digital Strategy Consulting',
                'Legacy System Modernization',
                'Change Management'
            ],
            href: '/services/digital-marketing'
        },
        {
            icon: GraduationCap,
            title: 'Skill Development',
            description: 'Empower your workforce with cutting-edge training programs and certification courses designed for the future of work.',
            services: [
                'Corporate Training Programs',
                'Technical Certifications',
                'Leadership Development',
                'E-Learning Platforms'
            ],
            href: '/services/training'
        }
    ];

    return (
        <section className="relative bg-gradient-to-b from-[#FAFAFA] to-white py-24 md:py-32">
            <div className="container mx-auto px-4 md:px-6">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 mb-4">
                        <span className="w-8 h-1 bg-[#F6A400] rounded-full"></span>
                        <span className="text-sm text-[#F6A400] font-bold uppercase tracking-wider">What We Do</span>
                        <span className="w-8 h-1 bg-[#F6A400] rounded-full"></span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] mb-6 leading-tight">
                        Practical Expertise Powered by<br />
                        Cutting-Edge Technology
                    </h2>

                    <p className="text-lg text-[#4A4A4A] leading-relaxed">
                        We deliver integrated solutions across four core domains, helping businesses transform, scale, and thrive in the digital age.
                    </p>
                </div>

                {/* Service Pillars Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    {pillars.map((pillar, index) => (
                        <ServicePillarCard
                            key={pillar.title}
                            {...pillar}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
