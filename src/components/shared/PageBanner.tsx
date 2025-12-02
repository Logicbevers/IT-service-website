'use client';

import { ReactNode } from 'react';
import { Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PageBannerProps {
    category?: string;
    title: ReactNode;
    subtitle: ReactNode;
    showScrollIndicator?: boolean;
    className?: string;
}

export function PageBanner({
    category,
    title,
    subtitle,
    showScrollIndicator = false,
    className
}: PageBannerProps) {
    return (
        <section className={cn(
            "relative min-h-[70vh] flex items-center justify-center overflow-hidden",
            "pt-32 md:pt-40 pb-24 md:pb-32",
            className
        )}>
            {/* Premium Diagonal Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFEED4] via-[#F6A40033] to-[#FFF7EC]" />

            {/* Warm Center Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(246,164,0,0.12)_0%,transparent_60%)]" />

            {/* Soft Abstract Shapes - Blurred Circular Glows */}
            <div className="absolute top-20 right-[10%] w-[500px] h-[500px] bg-[#F6A400]/15 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-20 left-[15%] w-[400px] h-[400px] bg-[#FFEED4]/20 rounded-full blur-3xl animate-pulse-soft" />
            <div className="absolute top-1/3 left-[5%] w-[300px] h-[300px] bg-[#FCD9A0]/12 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />

            {/* Gentle Curved Waves */}
            <div className="absolute inset-0 opacity-[0.06]">
                <svg className="absolute bottom-0 left-0 w-full h-64" viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <path fill="#F6A400" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>

            {/* Minimal Geometric Particles */}
            <div className="absolute inset-0 opacity-[0.05]">
                <div className="absolute top-[20%] left-[20%] w-2 h-2 bg-[#F6A400] rounded-full animate-pulse" />
                <div className="absolute top-[40%] right-[25%] w-1.5 h-1.5 bg-[#E98000] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                <div className="absolute bottom-[30%] left-[30%] w-1 h-1 bg-[#F6A400] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-[60%] right-[15%] w-2 h-2 bg-[#FCD9A0] rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
                <div className="absolute top-[25%] right-[40%] w-1 h-16 bg-gradient-to-b from-[#F6A400]/20 to-transparent" />
                <div className="absolute bottom-[25%] left-[45%] w-1 h-20 bg-gradient-to-t from-[#E98000]/20 to-transparent" />
            </div>

            {/* Right-side Abstract 3D Orb/Gradient Ring */}
            <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.15] pointer-events-none hidden lg:block">
                <div className="relative w-full h-full">
                    {/* Outer ring */}
                    <div className="absolute inset-0 rounded-full border-[40px] border-[#F6A400]/30 blur-sm" />
                    {/* Inner glow */}
                    <div className="absolute inset-[80px] rounded-full bg-gradient-to-br from-[#F6A400]/40 to-[#E98000]/20 blur-2xl" />
                    {/* Center orb */}
                    <div className="absolute inset-[140px] rounded-full bg-gradient-radial from-[#FCD9A0]/50 to-transparent" />
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                {/* Category Tag with Subtle Glow */}
                {category && (
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FFF4E4] border border-[#F6A400]/20 mb-6 shadow-[0_0_15px_rgba(246,164,0,0.1)] animate-float">
                        <Sparkles className="w-4 h-4 text-[#E98000]" />
                        <span className="text-sm font-semibold text-[#E98000] tracking-wide">{category}</span>
                    </div>
                )}

                {/* Title with Fade-in + Slide-up Animation */}
                <h1
                    className="mb-6 text-[#1A1A1A] text-4xl md:text-5xl lg:text-[52px] font-bold tracking-tight leading-[1.15] max-w-[780px] mx-auto animate-fade-in-up"
                    style={{ animationDuration: '0.4s' }}
                >
                    {title}
                </h1>

                {/* Subtitle with Delayed Fade-in */}
                <p
                    className="text-base md:text-lg text-[#3F3F3F] leading-relaxed max-w-[700px] mx-auto mb-8 animate-fade-in-up font-normal"
                    style={{ animationDuration: '0.6s', animationDelay: '0.2s', animationFillMode: 'both', lineHeight: '1.6' }}
                >
                    {subtitle}
                </p>

                {/* Scroll Indicator */}
                {showScrollIndicator && (
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
                        <span className="text-xs text-[#3F3F3F]/60 font-medium uppercase tracking-wider">Scroll</span>
                        <div className="w-6 h-10 rounded-full border-2 border-[#F6A400]/40 flex items-start justify-center p-2">
                            <div className="w-1.5 h-2 bg-[#F6A400] rounded-full animate-scroll-indicator" />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
