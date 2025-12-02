'use client';

import { IndustryCard } from './IndustryCard';
import { Building2, ShoppingCart, Plane, Heart, GraduationCap, Factory } from 'lucide-react';

export function IndustryShowcase() {
    const industries = [
        {
            title: 'Healthcare & Life Sciences',
            description: 'Digital transformation solutions for hospitals, clinics, and pharmaceutical companies to improve patient care and operational efficiency.',
            icon: <Heart className="w-8 h-8" />,
            href: '/solutions/healthcare'
        },
        {
            title: 'Retail & E-Commerce',
            description: 'End-to-end solutions for online and offline retail, including inventory management, customer analytics, and omnichannel experiences.',
            icon: <ShoppingCart className="w-8 h-8" />,
            href: '/solutions/retail'
        },
        {
            title: 'Manufacturing & Industrial',
            description: 'Smart manufacturing solutions with IoT integration, supply chain optimization, and predictive maintenance systems.',
            icon: <Factory className="w-8 h-8" />,
            href: '/solutions/manufacturing'
        },
        {
            title: 'Education & Training',
            description: 'Learning management systems, virtual classrooms, and corporate training platforms to empower educational institutions.',
            icon: <GraduationCap className="w-8 h-8" />,
            href: '/solutions/education'
        },
        {
            title: 'Logistics & Transportation',
            description: 'Advanced logistics solutions including route optimization, fleet management, and real-time tracking systems.',
            icon: <Plane className="w-8 h-8" />,
            href: '/solutions/logistics'
        },
        {
            title: 'Enterprise & Corporate',
            description: 'Custom enterprise solutions for large organizations including ERP, CRM, and business intelligence platforms.',
            icon: <Building2 className="w-8 h-8" />,
            href: '/solutions/enterprise'
        }
    ];

    return (
        <section className="relative bg-gradient-to-b from-white to-[#FAFAFA] py-24 md:py-32">
            <div className="container mx-auto px-4 md:px-6">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 mb-4">
                        <span className="w-8 h-1 bg-[#F6A400] rounded-full"></span>
                        <span className="text-sm text-[#F6A400] font-bold uppercase tracking-wider">Industries We Serve</span>
                        <span className="w-8 h-1 bg-[#F6A400] rounded-full"></span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] mb-6 leading-tight">
                        Tailored Solutions for<br />
                        Every Industry
                    </h2>

                    <p className="text-lg text-[#4A4A4A] leading-relaxed">
                        From healthcare to manufacturing, we deliver industry-specific solutions that drive growth and innovation across diverse sectors.
                    </p>
                </div>

                {/* Industry Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {industries.map((industry, index) => (
                        <IndustryCard
                            key={industry.title}
                            {...industry}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
