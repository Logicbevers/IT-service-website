'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
    name: string;
    role: string;
    company: string;
    content: string;
    rating: number;
    index: number;
}

export function EnhancedTestimonialCard({ name, role, company, content, rating, index }: TestimonialCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative h-full"
        >
            <div className="relative h-full bg-white rounded-2xl border border-[#E6E6E6] p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#F6A400]">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Quote className="w-16 h-16 text-[#F6A400]" />
                </div>

                {/* Star Rating */}
                <div className="flex gap-1 mb-4 relative z-10">
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                        >
                            <Star
                                className={`w-5 h-5 ${i < rating
                                    ? 'fill-[#F6A400] text-[#F6A400]'
                                    : 'fill-gray-200 text-gray-200'
                                    }`}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Content */}
                <p className="text-[#4A4A4A] leading-relaxed mb-6 relative z-10 italic">
                    "{content}"
                </p>

                {/* Client Info */}
                <div className="relative z-10">
                    <div className="font-bold text-[#1E1E1E] text-lg mb-1">{name}</div>
                    <div className="text-sm text-[#4A4A4A]">
                        {role} at {company}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
