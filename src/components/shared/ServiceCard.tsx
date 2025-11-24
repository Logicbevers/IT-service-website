'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card';
import { buttonVariants } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import {
    CloudMigrationIcon,
    CybersecurityIcon,
    CustomSoftwareIcon,
    DataAnalyticsIcon,
    AIMLIcon,
    DevOpsIcon
} from '@/components/ui/AnimatedIcons';

const animatedIcons: Record<string, React.ComponentType<any>> = {
    Cloud: CloudMigrationIcon,
    Shield: CybersecurityIcon,
    Code: CustomSoftwareIcon,
    BarChart: DataAnalyticsIcon,
    Smartphone: AIMLIcon,
    Database: DevOpsIcon,
};

interface ServiceCardProps {
    title: string;
    description: string;
    iconName: string;
    slug: string;
    index: number;
    href?: string;
}

export function ServiceCard({ title, description, iconName, slug, index, href }: ServiceCardProps) {
    const AnimatedIcon = animatedIcons[iconName] || CustomSoftwareIcon;
    const linkHref = href || `/services/${slug}`;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            className="h-full"
        >
            <Card className="h-full flex flex-col group relative overflow-hidden bg-white border border-[#E8E6E1] hover:border-accent/30 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Subtle Hover Effect */}
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-accent opacity-5 rounded-bl-full" />

                <CardHeader className="relative z-10 pb-4">
                    {/* Animated Icon */}
                    <motion.div
                        className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 text-accent shadow-sm group-hover:shadow-md transition-all duration-300 border border-accent/20"
                        whileHover={{
                            scale: 1.1,
                            rotate: [0, -10, 10, -5, 5, 0],
                            transition: { duration: 0.5 }
                        }}
                    >
                        <AnimatedIcon className="w-12 h-12" />
                    </motion.div>

                    <CardTitle className="mb-3 text-2xl group-hover:text-accent transition-colors duration-300">
                        {title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                        {description}
                    </CardDescription>
                </CardHeader>

                <CardContent className="flex-grow relative z-10">
                    {/* Spacer for consistent card heights */}
                </CardContent>

                <CardFooter className="relative z-10 pt-4">
                    <Link
                        href={linkHref}
                        className={buttonVariants({
                            variant: 'ghost',
                            className: 'p-0 hover:bg-transparent text-accent hover:text-accent-dark group/link font-semibold'
                        })}
                    >
                        Learn More
                        <motion.div
                            className="inline-block ml-2"
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <ArrowRight className="h-4 w-4" />
                        </motion.div>
                    </Link>
                </CardFooter>
            </Card>
        </motion.div>
    );
}
