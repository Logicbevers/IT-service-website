'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Send, Loader2, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function ContactForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsLoading(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // In a real app, we would send data to /api/leads
        console.log('Form submitted successfully');

        setIsLoading(false);
        setIsSuccess(true);
    }

    return (
        <div className="relative overflow-hidden rounded-2xl bg-card border border-border shadow-lg">
            <AnimatePresence mode="wait">
                {isSuccess ? (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.4 }}
                        className="p-10 text-center flex flex-col items-center justify-center min-h-[500px]"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
                            className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6 text-green-600 dark:text-green-400"
                        >
                            <CheckCircle2 size={40} />
                        </motion.div>
                        <h3 className="text-2xl font-bold mb-3 text-foreground">Message Sent!</h3>
                        <p className="text-muted-foreground mb-8 max-w-xs mx-auto">
                            Thank you for reaching out. We&apos;ll get back to you shortly.
                        </p>
                        <Button onClick={() => setIsSuccess(false)} variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white">
                            Send Another Message
                        </Button>
                    </motion.div>
                ) : (
                    <motion.form
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        onSubmit={handleSubmit}
                        className="p-8 space-y-6"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="firstName" className="text-sm font-medium">
                                    First Name
                                </label>
                                <input
                                    id="firstName"
                                    name="firstName"
                                    required
                                    className="flex h-11 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all"
                                    placeholder="John"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="lastName" className="text-sm font-medium">
                                    Last Name
                                </label>
                                <input
                                    id="lastName"
                                    name="lastName"
                                    required
                                    className="flex h-11 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all"
                                    placeholder="Doe"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className="flex h-11 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all"
                                placeholder="john@example.com"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="company" className="text-sm font-medium">
                                Company (Optional)
                            </label>
                            <input
                                id="company"
                                name="company"
                                className="flex h-11 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all"
                                placeholder="Acme Inc."
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                className="flex w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none transition-all"
                                placeholder="How can we help you?"
                            />
                        </div>

                        <Button type="submit" className="w-full h-12 text-base bg-gradient-accent hover:opacity-90 transition-opacity" disabled={isLoading}>
                            {isLoading ? (
                                <>
                                    <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...
                                </>
                            ) : (
                                <>
                                    Send Message <Send className="ml-2 h-5 w-5" />
                                </>
                            )}
                        </Button>
                    </motion.form>
                )}
            </AnimatePresence>
        </div>
    );
}
