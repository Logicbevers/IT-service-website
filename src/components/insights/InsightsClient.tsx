'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { BlogCard } from '@/components/shared/BlogCard';
import { Sparkles } from 'lucide-react';

interface BlogPost {
    _id: string;
    title: string;
    excerpt: string;
    mainImage?: string;
    slug: { current: string };
    publishedAt: string;
    readingTime?: number;
    category?: string;
    tags?: string[];
}

interface InsightsClientProps {
    posts: BlogPost[];
}

const categories = ['All', 'Cloud', 'Security', 'AI/ML', 'DevOps', 'Development'];

export function InsightsClient({ posts }: InsightsClientProps) {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredPosts = selectedCategory === 'All'
        ? posts
        : posts.filter(post => post.category === selectedCategory);

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <Section className="bg-gradient-soft py-20 relative overflow-hidden">
                {/* Decorative Background */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-accent opacity-10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-accent opacity-10 rounded-full blur-3xl" />

                <div className="max-w-3xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-accent/20 mb-6"
                    >
                        <Sparkles className="w-4 h-4 text-accent" />
                        <span className="text-sm text-accent font-semibold">Latest Insights</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Heading level={1} className="mb-6 text-4xl md:text-5xl">
                            Insights & News
                        </Heading>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Stay ahead of the curve with our latest thoughts on technology, business, and innovation.
                        </p>
                    </motion.div>
                </div>
            </Section>

            {/* Topic Filters */}
            <Section className="py-8 border-b border-border">
                <div className="flex flex-wrap justify-center gap-3">
                    {categories.map((category, i) => (
                        <motion.button
                            key={category}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05 }}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${selectedCategory === category
                                    ? 'bg-gradient-accent text-white shadow-medium'
                                    : 'glass-effect border border-accent/30 text-foreground hover:border-accent/50 hover:bg-accent/10'
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {category}
                        </motion.button>
                    ))}
                </div>
            </Section>

            {/* Blog Posts Grid */}
            <Section>
                {filteredPosts.length > 0 ? (
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        layout
                    >
                        {filteredPosts.map((post, index) => (
                            <BlogCard
                                key={post._id}
                                title={post.title}
                                excerpt={post.excerpt}
                                image={post.mainImage}
                                slug={post.slug.current}
                                publishedAt={post.publishedAt}
                                readingTime={post.readingTime}
                                category={post.category}
                                tags={post.tags}
                                index={index}
                            />
                        ))}
                    </motion.div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-muted-foreground text-lg">
                            No posts found in this category.
                        </p>
                    </div>
                )}
            </Section>
        </div>
    );
}
