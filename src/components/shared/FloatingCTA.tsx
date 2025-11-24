'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function FloatingCTA() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="mb-4 bg-white border border-[#E8E6E1] p-6 rounded-2xl shadow-2xl w-80"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="font-bold text-lg text-[#242424]">Need Help?</h3>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                            Our team is ready to answer your questions and help you find the right solution.
                        </p>
                        <Button className="w-full bg-accent hover:bg-accent-dark text-white rounded-full">
                            Chat with Sales <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-muted text-foreground border border-[#E8E6E1]' : 'bg-accent text-white'
                    }`}
            >
                {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
            </motion.button>
        </div>
    );
}
