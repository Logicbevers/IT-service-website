'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { fadeInUp, viewportConfig } from '@/lib/animations';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    container?: boolean;
    animate?: boolean;
    delay?: number;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
    ({ className, container = true, animate = false, delay = 0, children, ...props }, ref) => {
        const Component = animate ? motion.section : 'section';

        const animationProps = animate ? {
            initial: "hidden",
            whileInView: "visible",
            viewport: viewportConfig,
            variants: {
                ...fadeInUp,
                visible: {
                    ...fadeInUp.visible,
                    transition: {
                        ...fadeInUp.visible.transition,
                        delay
                    }
                }
            }
        } : {};

        return (
            <Component
                ref={ref as any}
                className={cn('py-12 md:py-16 lg:py-24', className)}
                {...animationProps}
                {...props}
            >
                {container ? (
                    <div className="container mx-auto px-4 md:px-6">
                        {children}
                    </div>
                ) : (
                    children
                )}
            </Component>
        );
    }
);
Section.displayName = 'Section';
