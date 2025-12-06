'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

export function ConversionCTA() {
    return (
        <section className="relative bg-gradient-to-br from-[#F6A400] via-[#E98000] to-[#D86E00] py-24 md:py-32 overflow-hidden">
            {/* Animated Pattern Overlay */}
            <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                animation: 'slide 20s linear infinite'
            }} />

            {/* Floating Shapes */}
            <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"
            />
            <motion.div
                animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"
            />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Main CTA Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-4xl mx-auto mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
                        Let&apos;s discuss how NRT Groups can help you achieve your goals with tailored solutions designed for your success.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                        <Link href="/contact">
                            <Button
                                size="lg"
                                className="bg-white text-[#F6A400] hover:bg-white/90 rounded-full px-10 h-16 text-lg font-semibold shadow-2xl hover:shadow-3xl hover:scale-105 transition-all group"
                            >
                                Schedule a Consultation
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </div>

                    {/* Trust Indicators */}
                    <div className="flex flex-wrap justify-center gap-6 text-sm text-white/90">
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Free 30-minute consultation</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>No obligation</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Quick response within 24 hours</span>
                        </div>
                    </div>
                </motion.div>

                {/* Contact Options Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
                >
                    {/* Call Us */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all group">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4 group-hover:scale-110 transition-transform">
                            <Phone className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                        <p className="text-white/90 mb-2">+919779369555</p>
                        <p className="text-sm text-white/70">Available 24/7</p>
                    </div>

                    {/* Email Us */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all group">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4 group-hover:scale-110 transition-transform">
                            <Mail className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                        <p className="text-white/90 mb-2">Operations@nrtgroups.com</p>
                        <p className="text-sm text-white/70">Quick response</p>
                    </div>

                    {/* Visit Us */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all group">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4 group-hover:scale-110 transition-transform">
                            <MapPin className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
                        <p className="text-white/90 mb-2">E-43, Phase-8, Phase 8</p>
                        <p className="text-sm text-white/70">Sahibzada Ajit Singh Nagar, Punjab 160071</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
