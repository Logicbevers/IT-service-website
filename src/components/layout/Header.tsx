'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { buttonVariants } from '@/components/ui/Button';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { cn } from '@/lib/utils';

const navItems = [
    { name: 'Services', href: '/services', hasDropdown: true, dropdownType: 'services' },
    { name: 'Solutions', href: '/solutions', hasDropdown: true, dropdownType: 'solutions' },
    { name: 'About', href: '/about' },
];

const serviceDropdownItems = [
    { name: 'Logistics & Supply Chain', href: '/services/logistics' },
    { name: 'Software Development', href: '/services/software-development' },
    { name: 'Digital Marketing', href: '/services/digital-marketing' },
    { name: 'Training & Development', href: '/services/training' },
    { name: 'Customer-First Approach', href: '/services/customer-first' },
];

const solutionDropdownItems = [
    { name: 'Healthcare & Life Sciences', href: '/solutions/healthcare' },
    { name: 'Retail & E-Commerce', href: '/solutions/retail' },
    { name: 'Manufacturing & Industrial', href: '/solutions/manufacturing' },
    { name: 'Education & Training', href: '/solutions/education' },
    { name: 'Logistics & Transportation', href: '/solutions/logistics' },
    { name: 'Enterprise & Corporate', href: '/solutions/enterprise' },
];

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
    const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();
    const { theme, resolvedTheme } = useTheme();

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMobileMenuOpen(false);
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMobileServicesOpen(false);
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMobileSolutionsOpen(false);
    }, [pathname]);

    // Determine which logo to show based on theme
    const logoSrc = mounted && (resolvedTheme === 'dark' || theme === 'dark')
        ? '/logo-light.png'
        : '/logo-dark.png';

    return (
        <header
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-sm py-3' : 'bg-transparent py-5'
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 z-50 relative h-10">
                    {mounted ? (
                        <Image
                            src={logoSrc}
                            alt="NRT Groups Logo"
                            width={140}
                            height={40}
                            className="h-10 w-auto object-contain"
                            priority
                        />
                    ) : (
                        <div className="h-10 w-[140px]" /> // Placeholder to prevent layout shift
                    )}
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <div key={item.name} className="relative group">
                            {item.hasDropdown ? (
                                <div
                                    className="relative"
                                    onMouseEnter={() => item.dropdownType === 'services' ? setServicesDropdownOpen(true) : setSolutionsDropdownOpen(true)}
                                    onMouseLeave={() => item.dropdownType === 'services' ? setServicesDropdownOpen(false) : setSolutionsDropdownOpen(false)}
                                >
                                    <button
                                        className={cn(
                                            'text-sm font-medium transition-colors hover:text-primary flex items-center gap-1 py-2',
                                            pathname.startsWith(item.href) ? 'text-primary' : 'text-muted-foreground'
                                        )}
                                    >
                                        {item.name}
                                        <ChevronDown className={cn(
                                            "w-4 h-4 transition-transform duration-200",
                                            (item.dropdownType === 'services' && servicesDropdownOpen) || (item.dropdownType === 'solutions' && solutionsDropdownOpen) ? "rotate-180" : ""
                                        )} />
                                    </button>

                                    {/* Dropdown Menu */}
                                    <AnimatePresence>
                                        {((item.dropdownType === 'services' && servicesDropdownOpen) || (item.dropdownType === 'solutions' && solutionsDropdownOpen)) && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute top-full left-0 w-64 pt-2"
                                            >
                                                <div className="bg-popover border border-border rounded-xl shadow-lg overflow-hidden p-2">
                                                    {(item.dropdownType === 'services' ? serviceDropdownItems : solutionDropdownItems).map((dropdownItem) => (
                                                        <Link
                                                            key={dropdownItem.name}
                                                            href={dropdownItem.href}
                                                            className={cn(
                                                                "block px-4 py-3 text-sm rounded-lg transition-colors hover:bg-accent/10 hover:text-accent",
                                                                pathname === dropdownItem.href ? "bg-accent/10 text-accent font-medium" : "text-foreground"
                                                            )}
                                                        >
                                                            {dropdownItem.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ) : (
                                <Link
                                    href={item.href}
                                    className={cn(
                                        'text-sm font-medium transition-colors hover:text-primary relative',
                                        pathname === item.href ? 'text-primary' : 'text-muted-foreground'
                                    )}
                                >
                                    {item.name}
                                    {pathname === item.href && (
                                        <motion.div
                                            layoutId="underline"
                                            className="absolute left-0 right-0 -bottom-1 h-0.5 bg-primary"
                                        />
                                    )}
                                </Link>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <ThemeToggle />
                    <Link href="/contact" className={buttonVariants({ variant: 'primary', size: 'sm' })}>
                        Contact Us
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden z-50 p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>

                {/* Mobile Navigation Overlay */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed inset-0 bg-background z-40 md:hidden flex flex-col pt-24 px-6"
                        >
                            <nav className="flex flex-col gap-6 text-lg">
                                {navItems.map((item) => (
                                    <div key={item.name}>
                                        {item.hasDropdown ? (
                                            <div>
                                                <button
                                                    onClick={() => item.dropdownType === 'services' ? setMobileServicesOpen(!mobileServicesOpen) : setMobileSolutionsOpen(!mobileSolutionsOpen)}
                                                    className={cn(
                                                        'flex items-center justify-between w-full font-medium transition-colors',
                                                        pathname.startsWith(item.href) ? 'text-primary' : 'text-foreground'
                                                    )}
                                                >
                                                    {item.name}
                                                    <ChevronDown className={cn(
                                                        "w-5 h-5 transition-transform",
                                                        (item.dropdownType === 'services' && mobileServicesOpen) || (item.dropdownType === 'solutions' && mobileSolutionsOpen) ? "rotate-180" : ""
                                                    )} />
                                                </button>
                                                <AnimatePresence>
                                                    {((item.dropdownType === 'services' && mobileServicesOpen) || (item.dropdownType === 'solutions' && mobileSolutionsOpen)) && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: 'auto', opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            className="overflow-hidden pl-4 border-l-2 border-border mt-2 space-y-3"
                                                        >
                                                            {(item.dropdownType === 'services' ? serviceDropdownItems : solutionDropdownItems).map((dropdownItem) => (
                                                                <Link
                                                                    key={dropdownItem.name}
                                                                    href={dropdownItem.href}
                                                                    onClick={() => setMobileMenuOpen(false)}
                                                                    className="block text-base text-muted-foreground hover:text-primary py-1"
                                                                >
                                                                    {dropdownItem.name}
                                                                </Link>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        ) : (
                                            <Link
                                                href={item.href}
                                                onClick={() => setMobileMenuOpen(false)}
                                                className={cn(
                                                    'font-medium transition-colors hover:text-primary block',
                                                    pathname === item.href ? 'text-primary' : 'text-foreground'
                                                )}
                                            >
                                                {item.name}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                                <div className="h-px bg-border my-2" />
                                <Link
                                    href="/contact"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={buttonVariants({ variant: 'primary', size: 'lg', className: 'w-full' })}
                                >
                                    Contact Us
                                </Link>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
