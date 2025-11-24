'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Button, buttonVariants } from '@/components/ui/Button';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { cn } from '@/lib/utils';

const navItems = [
    { name: 'Services', href: '/services' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'About', href: '/about' },
    { name: 'Insights', href: '/insights' },
    { name: 'Careers', href: '/careers' },
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <header
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                scrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
            )}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex h-20 items-center justify-between">
                    <Link href="/" className="text-2xl font-bold tracking-tighter text-primary">
                        Premium<span className="text-accent">IT</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center space-x-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    'text-sm font-medium transition-colors hover:text-accent relative group',
                                    pathname === item.href ? 'text-accent' : 'text-muted-foreground'
                                )}
                            >
                                {item.name}
                                <span className={cn(
                                    "absolute -bottom-1 left-0 w-full h-0.5 bg-accent transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100",
                                    pathname === item.href && "scale-x-100"
                                )} />
                            </Link>
                        ))}
                        <ThemeToggle />
                        <Link href="/contact" className={buttonVariants({ size: 'sm' })}>
                            Get Started
                        </Link>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden flex items-center gap-3">
                        <ThemeToggle />
                        <button
                            className="p-2 text-foreground"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-20 left-0 right-0 bg-background border-b shadow-lg md:hidden"
                    >
                        <div className="container mx-auto px-4 py-8 flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        'text-lg font-medium py-2 border-b border-border flex justify-between items-center',
                                        pathname === item.href ? 'text-accent' : 'text-foreground'
                                    )}
                                >
                                    {item.name}
                                    <ChevronRight size={16} className="text-muted-foreground" />
                                </Link>
                            ))}
                            <Link href="/contact" className={buttonVariants({ className: 'w-full mt-4' })}>
                                Get Started
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
