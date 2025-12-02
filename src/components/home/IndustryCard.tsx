'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface IndustryCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    href: string;
    index: number;
}

export function IndustryCard({ title, description, icon, href, index }: IndustryCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative h-full"
        >
            <Link href={href} className="block h-full">
                <div className="relative h-full bg-white rounded-2xl border border-[#E6E6E6] p-8 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#F6A400]">
                    {/* Top Accent Line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F6A400] to-[#E98000] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                    {/* Icon */}
                    <div className="mb-6 p-4 bg-[#FFF4E4] rounded-xl inline-flex items-center justify-center group-hover:bg-[#F6A400] transition-colors duration-300">
                        <div className="text-[#F6A400] group-hover:text-white transition-colors duration-300">
                            {icon}
                        </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-[#1E1E1E] mb-3 group-hover:text-[#F6A400] transition-colors">
                        {title}
                    </h3>
                    <p className="text-[#4A4A4A] mb-6 line-clamp-3">
                        {description}
                    </p>

                    {/* Arrow */}
                    <div className="flex items-center text-[#F6A400] font-semibold text-sm mt-auto">
                        <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                            Learn More
                        </span>
                        <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
