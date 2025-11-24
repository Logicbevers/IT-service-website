'use client';

import React from 'react';

interface SectionDividerProps {
    type?: 'wave' | 'curve' | 'diagonal';
    position?: 'top' | 'bottom';
    className?: string;
    fill?: string;
}

export function SectionDivider({
    type = 'wave',
    position = 'bottom',
    className = '',
    fill = '#FFFFFF' // Default to white to blend with next section
}: SectionDividerProps) {

    const isTop = position === 'top';
    const transform = isTop ? 'rotate(180deg)' : '';

    const renderPath = () => {
        switch (type) {
            case 'curve':
                return <path d="M0,0 C480,100 960,100 1440,0 L1440,120 L0,120 Z" />;
            case 'diagonal':
                return <path d="M0,0 L1440,100 L1440,120 L0,120 Z" />;
            case 'wave':
            default:
                return <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" />;
        }
    };

    return (
        <div
            className={`absolute left-0 w-full overflow-hidden leading-none z-10 ${isTop ? 'top-0' : 'bottom-0'} ${className}`}
            style={{ transform }}
        >
            <svg
                className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[120px]"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 120"
                preserveAspectRatio="none"
            >
                <path d={renderPath().props.d} fill={fill} />
            </svg>
        </div>
    );
}
