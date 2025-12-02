'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function Footer() {
    const [mounted, setMounted] = useState(false);
    const { theme, resolvedTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    // Determine which logo to show based on theme
    const logoSrc = mounted && (resolvedTheme === 'dark' || theme === 'dark')
        ? '/logo-light.png'
        : '/logo-dark.png';

    return (
        <footer className="bg-[#181A1B] text-white border-t border-white/10 pt-20 pb-10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block relative h-10">
                            {mounted ? (
                                <Image
                                    src="/logo-light.png"
                                    alt="NRT Groups Logo"
                                    width={140}
                                    height={40}
                                    className="h-10 w-auto object-contain"
                                />
                            ) : (
                                <div className="h-10 w-[140px]" />
                            )}
                        </Link>
                        <p className="text-gray-400 leading-relaxed">
                            Empowering businesses with scalable, secure, and innovative technology solutions.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-accent hover:text-white transition-all duration-300"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-accent"></span>
                            Company
                        </h4>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/about" className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2 group">
                                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2 group">
                                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-accent"></span>
                            Services
                        </h4>
                        <ul className="space-y-4">
                            {['IT Services', 'Logistics', 'Custom Software', 'Digital Marketing', 'Professional Training'].map((item) => (
                                <li key={item}>
                                    <Link href="/services" className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2 group">
                                        <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-accent"></span>
                            Contact
                        </h4>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4 text-gray-400">
                                <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                                <span>123 Innovation Drive,<br />Tech Valley, CA 94043</span>
                            </li>
                            <li className="flex items-center gap-4 text-gray-400">
                                <Phone className="w-5 h-5 text-accent shrink-0" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-4 text-gray-400">
                                <Mail className="w-5 h-5 text-accent shrink-0" />
                                <span>hello@antigravity.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} NRT Groups. All rights reserved.
                    </p>
                    <div className="flex gap-8 text-sm text-gray-500">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
