'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceChipProps {
    icon: LucideIcon;
    label: string;
    delay?: number;
}

export function ServiceChip({ icon: Icon, label, delay = 0 }: ServiceChipProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            whileHover={{ scale: 1.05, y: -2 }}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-[#E8E6E1] rounded-full shadow-sm hover:shadow-md hover:border-accent/30 transition-all cursor-default group"
        >
            <div className="p-1.5 rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                <Icon className="w-3 h-3" />
            </div>
            <span className="text-sm font-medium text-[#242424]">{label}</span>
        </motion.div>
    );
}
