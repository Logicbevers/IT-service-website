'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/Card';
import { Linkedin, Mail, Twitter, Github } from 'lucide-react';

interface TeamMember {
    _id: string;
    name: string;
    role: string;
    bio?: string;
    image?: string;
    linkedin?: string;
    twitter?: string;
    github?: string;
    email?: string;
}

interface TeamCardProps {
    member: TeamMember;
    index: number;
}

export function TeamCard({ member, index }: TeamCardProps) {
    const [isFlipped, setIsFlipped] = useState(false);

    const getInitials = (name: string) => {
        return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
    };

    const socialLinks = [
        { icon: Linkedin, url: member.linkedin, label: 'LinkedIn' },
        { icon: Twitter, url: member.twitter, label: 'Twitter' },
        { icon: Github, url: member.github, label: 'GitHub' },
        { icon: Mail, url: member.email ? `mailto:${member.email}` : null, label: 'Email' },
    ].filter(link => link.url);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="h-full perspective-1000"
        >
            <div
                className="relative w-full h-full cursor-pointer"
                style={{ transformStyle: 'preserve-3d' }}
                onMouseEnter={() => member.bio && setIsFlipped(true)}
                onMouseLeave={() => setIsFlipped(false)}
            >
                {/* Front of Card */}
                <motion.div
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ backfaceVisibility: 'hidden' }}
                    className="absolute inset-0"
                >
                    <Card className="h-full overflow-hidden border-2 border-border hover:border-accent/40 rounded-3xl shadow-soft hover:shadow-large transition-all duration-300 group">
                        {/* Gradient Border Effect */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />

                        <CardContent className="p-0 h-full flex flex-col">
                            {/* Image Container */}
                            <div className="relative h-64 w-full overflow-hidden bg-gradient-hero">
                                {member.image ? (
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center">
                                        <div className="w-32 h-32 rounded-full bg-gradient-accent flex items-center justify-center text-white font-bold text-4xl shadow-large">
                                            {getInitials(member.name)}
                                        </div>
                                    </div>
                                )}
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                            </div>

                            {/* Info Container */}
                            <div className="p-6 flex-grow flex flex-col justify-between relative">
                                {/* Decorative Corner */}
                                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-accent opacity-5 rounded-bl-full" />

                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                                        {member.name}
                                    </h3>
                                    <p className="text-accent font-semibold mb-4 uppercase tracking-wider text-sm">
                                        {member.role}
                                    </p>
                                    {member.bio && (
                                        <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                                            {member.bio}
                                        </p>
                                    )}
                                </div>

                                {/* Social Links */}
                                {socialLinks.length > 0 && (
                                    <div className="flex gap-3 mt-4 relative z-10">
                                        {socialLinks.map((link, i) => (
                                            <motion.a
                                                key={i}
                                                href={link.url!}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 rounded-full glass-effect border border-accent/30 flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-all duration-300"
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                                whileTap={{ scale: 0.95 }}
                                                aria-label={link.label}
                                            >
                                                <link.icon className="w-5 h-5" />
                                            </motion.a>
                                        ))}
                                    </div>
                                )}

                                {/* Flip Indicator */}
                                {member.bio && (
                                    <div className="mt-4 text-xs text-muted-foreground text-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        Hover to read bio
                                    </div>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Back of Card */}
                {member.bio && (
                    <motion.div
                        animate={{ rotateY: isFlipped ? 0 : -180 }}
                        transition={{ duration: 0.6 }}
                        style={{ backfaceVisibility: 'hidden' }}
                        className="absolute inset-0"
                    >
                        <Card className="h-full overflow-hidden border-2 border-accent/50 rounded-3xl shadow-large bg-gradient-soft">
                            <CardContent className="p-8 h-full flex flex-col justify-center relative">
                                {/* Decorative Elements */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-accent opacity-10 rounded-full blur-3xl" />
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-accent opacity-10 rounded-full blur-3xl" />

                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold mb-2 text-accent">
                                        {member.name}
                                    </h3>
                                    <p className="text-sm font-semibold mb-4 text-muted-foreground uppercase tracking-wider">
                                        {member.role}
                                    </p>
                                    <p className="text-foreground leading-relaxed">
                                        {member.bio}
                                    </p>
                                </div>

                                {/* Social Links on Back */}
                                {socialLinks.length > 0 && (
                                    <div className="flex gap-3 mt-6 relative z-10">
                                        {socialLinks.map((link, i) => (
                                            <motion.a
                                                key={i}
                                                href={link.url!}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 rounded-full bg-gradient-accent flex items-center justify-center text-white hover:shadow-large transition-all duration-300"
                                                whileHover={{ scale: 1.15, rotate: 10 }}
                                                whileTap={{ scale: 0.9 }}
                                                aria-label={link.label}
                                            >
                                                <link.icon className="w-5 h-5" />
                                            </motion.a>
                                        ))}
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </motion.div>
                )}
            </div>

            <style jsx>{`
                .perspective-1000 {
                    perspective: 1000px;
                }
            `}</style>
        </motion.div>
    );
}
