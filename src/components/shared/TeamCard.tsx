'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/Card';
import { Linkedin, Mail, Twitter, Github } from 'lucide-react';

export interface TeamMember {
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
        >
            <Card className="h-full border border-border hover:border-accent/40 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 group bg-white overflow-hidden hover:-translate-y-1">
                <CardContent className="p-8 flex flex-col items-center text-center">
                    {/* Avatar Container */}
                    <div className="relative mb-6">
                        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-300 relative z-10">
                            {member.image ? (
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                />
                            ) : (
                                <div className="w-full h-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-3xl">
                                    {getInitials(member.name)}
                                </div>
                            )}
                        </div>
                        {/* Decorative background blob */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 bg-accent/10 rounded-full blur-xl group-hover:bg-accent/20 transition-colors duration-300" />
                    </div>

                    {/* Info */}
                    <h3 className="text-xl font-bold mb-1 group-hover:text-accent transition-colors">
                        {member.name}
                    </h3>
                    <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
                        {member.role}
                    </p>

                    {member.bio && (
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                            {member.bio}
                        </p>
                    )}

                    {/* Social Links */}
                    {socialLinks.length > 0 && (
                        <div className="flex gap-3 mt-auto">
                            {socialLinks.map((link, i) => (
                                <a
                                    key={i}
                                    href={link.url!}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-white transition-all duration-300"
                                    aria-label={link.label}
                                >
                                    <link.icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    )}
                </CardContent>
            </Card>
        </motion.div>
    );
}
