'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, Building2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';

interface Testimonial {
    _id: string;
    quote: string;
    author: string;
    role: string;
    company: string;
    rating?: number;
}

interface TestimonialCarouselProps {
    testimonials: Testimonial[];
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [testimonials.length, isPaused]);

    if (!testimonials.length) return null;

    const getInitials = (name: string) => {
        return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
    };

    const currentTestimonial = testimonials[currentIndex];
    const rating = currentTestimonial.rating || 5;

    return (
        <div
            className="relative w-full max-w-5xl mx-auto"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="overflow-hidden py-12">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="w-full"
                    >
                        <Card className="bg-white border border-[#E8E6E1] shadow-2xl rounded-3xl overflow-hidden relative">
                            <CardContent className="p-10 md:p-14 flex flex-col items-center text-center relative">
                                {/* Decorative Background Elements */}
                                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-accent opacity-5 rounded-full blur-3xl" />
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-accent opacity-5 rounded-full blur-3xl" />

                                {/* Large Quote Icon */}
                                <motion.div
                                    className="absolute top-6 left-6 opacity-10"
                                    animate={{ rotate: [0, 5, 0] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                >
                                    <Quote size={80} className="text-accent" />
                                </motion.div>

                                {/* Star Rating */}
                                <motion.div
                                    className="flex gap-1 mb-6 relative z-10"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ scale: 0, rotate: -180 }}
                                            animate={{ scale: 1, rotate: 0 }}
                                            transition={{ delay: 0.3 + i * 0.1, type: "spring" }}
                                        >
                                            <Star
                                                className={`w-6 h-6 ${i < rating ? 'text-accent fill-accent' : 'text-muted'}`}
                                            />
                                        </motion.div>
                                    ))}
                                </motion.div>

                                {/* Quote Text */}
                                <motion.p
                                    className="text-2xl md:text-3xl font-medium mb-10 leading-relaxed text-[#242424] relative z-10 italic max-w-3xl"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    &quot;{currentTestimonial.quote}&quot;
                                </motion.p>

                                {/* Author Info */}
                                <motion.div
                                    className="flex flex-col items-center gap-4 relative z-10"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    {/* Avatar Circle with Initials */}
                                    <motion.div
                                        className="w-20 h-20 rounded-full bg-gradient-accent flex items-center justify-center text-white font-bold text-2xl shadow-medium"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        {getInitials(currentTestimonial.author)}
                                    </motion.div>

                                    <div>
                                        <h4 className="font-bold text-xl text-[#242424] mb-1">
                                            {currentTestimonial.author}
                                        </h4>
                                        <p className="text-muted-foreground text-base mb-2">
                                            {currentTestimonial.role}
                                        </p>
                                        <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-muted border border-[#E8E6E1]">
                                            <Building2 className="w-4 h-4 text-accent" />
                                            <p className="text-accent font-semibold text-sm">
                                                {currentTestimonial.company}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-3 mt-6">
                {testimonials.map((_, idx) => (
                    <motion.button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-2.5 rounded-full transition-all duration-300 ${idx === currentIndex
                            ? 'w-10 bg-gradient-accent shadow-soft'
                            : 'w-2.5 bg-muted hover:bg-accent/50'
                            }`}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>

            {/* Progress Bar */}
            <div className="mt-8 w-full max-w-md mx-auto h-1 bg-muted rounded-full overflow-hidden">
                <motion.div
                    className="h-full bg-gradient-accent"
                    initial={{ width: "0%" }}
                    animate={{ width: isPaused ? "100%" : "100%" }}
                    transition={{
                        duration: isPaused ? 0 : 6,
                        ease: "linear",
                        repeat: isPaused ? 0 : Infinity,
                    }}
                    key={currentIndex}
                />
            </div>
        </div>
    );
}
