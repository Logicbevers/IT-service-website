'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/Card';
import { ArrowRight, Award } from 'lucide-react';

interface CaseStudyCardProps {
    title: string;
    client: string;
    summary: string;
    image: string;
    slug: string;
    tags: string[];
    index: number;
}

export function CaseStudyCard({ title, client, summary, image, slug, tags, index }: CaseStudyCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="h-full"
        >
            <Link href={`/case-studies/${slug}`}>
                <Card className="overflow-hidden h-full group cursor-pointer border-2 border-border hover:border-accent/50 rounded-3xl shadow-soft hover:shadow-large transition-all duration-500 hover-lift">
                    {/* Image Container */}
                    <div className="relative h-72 w-full overflow-hidden bg-muted">
                        {image ? (
                            <motion.div
                                className="w-full h-full"
                                animate={{ scale: isHovered ? 1.1 : 1 }}
                                transition={{ duration: 0.6 }}
                            >
                                <Image
                                    src={image}
                                    alt={title}
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gradient-hero">
                                <Award className="w-16 h-16 text-accent/30" />
                            </div>
                        )}

                        {/* Gradient Overlay */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"
                            animate={{ opacity: isHovered ? 0.7 : 0.9 }}
                            transition={{ duration: 0.3 }}
                        />

                        {/* Tags on Image */}
                        <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
                            {tags.slice(0, 2).map((tag, i) => (
                                <motion.span
                                    key={tag}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                    className="px-4 py-1.5 glass-effect border border-accent/30 text-accent text-xs font-bold rounded-full shadow-soft uppercase tracking-wider"
                                >
                                    {tag}
                                </motion.span>
                            ))}
                        </div>

                        {/* Hover Reveal - Additional Info */}
                        <AnimatePresence>
                            {isHovered && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute bottom-4 left-4 right-4 z-10"
                                >
                                    <div className="glass-effect border border-accent/30 rounded-2xl p-4">
                                        <p className="text-sm text-foreground font-medium">
                                            Click to view full case study →
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Content */}
                    <CardContent className="p-6 relative">
                        {/* Decorative Corner */}
                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-accent opacity-5 rounded-bl-full" />

                        {/* Client Name */}
                        <motion.p
                            className="text-sm font-bold text-accent mb-2 uppercase tracking-wider flex items-center gap-2"
                            animate={{ x: isHovered ? 4 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Award className="w-4 h-4" />
                            {client}
                        </motion.p>

                        {/* Title */}
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors leading-tight">
                            {title}
                        </h3>

                        {/* Summary */}
                        <p className="text-muted-foreground text-base line-clamp-3 leading-relaxed mb-4">
                            {summary}
                        </p>

                        {/* Read More Link */}
                        <motion.div
                            className="flex items-center text-accent font-semibold text-sm"
                            animate={{ x: isHovered ? 8 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <span>Read Case Study</span>
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </motion.div>
                    </CardContent>
                </Card>
            </Link>
        </motion.div>
    );
}
