'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ServicePillarCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    services: string[];
    href: string;
    index: number;
}

export function ServicePillarCard({ icon: Icon, title, description, services, href, index }: ServicePillarCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="group relative"
        >
            <Link href={href}>
                <div className="relative h-full bg-white rounded-2xl border border-[#E6E6E6] p-8 md:p-10 transition-all duration-350 hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)] hover:-translate-y-2 hover:border-[#F6A400] hover:border-2">
                    {/* Icon Badge */}
                    <motion.div
                        className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#FFEBD2] mb-6"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Icon className="w-10 h-10 text-[#F6A400]" strokeWidth={1.5} />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-[#1E1E1E] mb-4 group-hover:text-[#F6A400] transition-colors">
                        {title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#4A4A4A] leading-relaxed mb-6">
                        {description}
                    </p>

                    {/* Key Services */}
                    <div className="mb-6">
                        <h4 className="text-sm font-semibold text-[#1E1E1E] uppercase tracking-wider mb-3">
                            Key Services:
                        </h4>
                        <ul className="space-y-2">
                            {services.map((service, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-[#4A4A4A]">
                                    <svg className="w-5 h-5 text-[#F6A400] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm">{service}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-[#F6A400] font-semibold group-hover:gap-4 transition-all">
                        <span>Explore Services</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#F6A400]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
            </Link>
        </motion.div>
    );
}
