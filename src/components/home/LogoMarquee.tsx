'use client';

import { motion } from 'framer-motion';

export function LogoMarquee() {
    // Placeholder client logos - these would be replaced with actual logo images
    const clients = [
        { name: 'Fortune 500 Tech', width: 120 },
        { name: 'Global Finance Corp', width: 140 },
        { name: 'Healthcare Systems', width: 130 },
        { name: 'Retail Leaders', width: 110 },
        { name: 'Manufacturing Inc', width: 135 },
        { name: 'Education Platform', width: 125 },
        { name: 'Government Services', width: 145 },
        { name: 'Logistics Global', width: 115 },
    ];

    // Duplicate the array for seamless infinite scroll
    const duplicatedClients = [...clients, ...clients];

    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background - NRT Orange Theme Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#F6A400] to-[#E98000]" />

            {/* Subtle Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 bg-[url('/grid-pattern.svg')] bg-repeat" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Section Heading */}
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <span className="px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-xs font-bold uppercase tracking-wider text-white">
                            TRUSTED WORLDWIDE
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Trusted by Industry Leaders <span className="text-white/90">Worldwide</span>
                    </h2>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto">
                        Partnering with organizations across the globe
                    </p>
                </div>

                {/* Infinite Scroll Container */}
                <div className="relative max-w-[100vw] -mx-4 md:-mx-6 lg:mx-0">
                    {/* Gradient Fade Edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F6A400] to-transparent z-20 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#E98000] to-transparent z-20 pointer-events-none" />

                    {/* Scrolling Logos */}
                    <div className="flex overflow-hidden py-4">
                        <motion.div
                            className="flex gap-8 items-center"
                            animate={{
                                x: [0, -50 * clients.length * 4], // Adjusted for card width + gap
                            }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 40,
                                    ease: "linear",
                                },
                            }}
                            whileHover={{ animationPlayState: 'paused' }}
                        >
                            {duplicatedClients.map((client, index) => (
                                <div
                                    key={`${client.name}-${index}`}
                                    className="group relative flex-shrink-0 w-[280px] h-[100px] rounded-2xl p-8 flex items-center justify-center transition-all duration-400 cursor-pointer backdrop-blur-md bg-white/5 border border-[#F6A400]/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:scale-105 hover:-translate-y-1 hover:border-white hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                                >
                                    {/* Logo Text/Image */}
                                    <span className="text-xl font-bold text-white/60 group-hover:text-white transition-colors duration-300">
                                        {client.name}
                                    </span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
