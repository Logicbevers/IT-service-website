'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/Card';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

interface BlogCardProps {
    title: string;
    excerpt: string;
    image?: string;
    slug: string;
    publishedAt: string;
    readingTime?: number;
    category?: string;
    tags?: string[];
    index: number;
}

export function BlogCard({
    title,
    excerpt,
    image,
    slug,
    publishedAt,
    readingTime = 5,
    category,
    tags = [],
    index
}: BlogCardProps) {
    const formattedDate = new Date(publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="h-full"
        >
            <Link href={`/insights/${slug}`}>
                <Card className="h-full overflow-hidden border-2 border-border hover:border-accent/40 rounded-3xl shadow-soft hover:shadow-large transition-all duration-300 group cursor-pointer hover-lift">
                    {/* Gradient Border Effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />

                    {/* Image Container */}
                    <div className="relative h-56 w-full overflow-hidden bg-gradient-hero">
                        {image ? (
                            <motion.div
                                className="w-full h-full"
                                whileHover={{ scale: 1.1 }}
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
                            <div className="w-full h-full flex items-center justify-center">
                                <Tag className="w-16 h-16 text-accent/30" />
                            </div>
                        )}
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

                        {/* Category Badge */}
                        {category && (
                            <div className="absolute top-4 left-4 z-10">
                                <span className="px-4 py-2 glass-effect border border-accent/30 text-accent text-xs font-bold rounded-full shadow-soft uppercase tracking-wider">
                                    {category}
                                </span>
                            </div>
                        )}

                        {/* Reading Time */}
                        <div className="absolute bottom-4 right-4 z-10">
                            <div className="flex items-center gap-2 px-3 py-1.5 glass-effect border border-accent/20 rounded-full">
                                <Clock className="w-3.5 h-3.5 text-accent" />
                                <span className="text-xs text-foreground font-medium">{readingTime} min read</span>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <CardContent className="p-6 relative">
                        {/* Decorative Corner */}
                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-accent opacity-5 rounded-bl-full" />

                        {/* Date */}
                        <div className="flex items-center gap-2 mb-3 text-muted-foreground text-sm">
                            <Calendar className="w-4 h-4 text-accent" />
                            <span>{formattedDate}</span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors leading-tight line-clamp-2">
                            {title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed mb-4">
                            {excerpt}
                        </p>

                        {/* Tags */}
                        {tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-4">
                                {tags.slice(0, 3).map((tag, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        )}

                        {/* Read More Link */}
                        <motion.div
                            className="flex items-center text-accent font-semibold text-sm group/link"
                            whileHover={{ x: 4 }}
                            transition={{ duration: 0.3 }}
                        >
                            <span>Read Article</span>
                            <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                        </motion.div>
                    </CardContent>
                </Card>
            </Link>
        </motion.div>
    );
}
