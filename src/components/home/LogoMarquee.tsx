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
        <section className="relative bg-white py-16 overflow-hidden border-y border-gray-100">
            <div className="container mx-auto px-4 md:px-6">
                {/* Section Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-2">
                        Trusted by Industry Leaders Worldwide
                    </h2>
                    <p className="text-[#3F3F3F]">
                        Partnering with organizations across the globe
                    </p>
                </div>

                {/* Infinite Scroll Container */}
                <div className="relative">
                    {/* Gradient Fade Edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                    {/* Scrolling Logos */}
                    <div className="flex overflow-hidden">
                        <motion.div
                            className="flex gap-16 items-center"
                            animate={{
                                x: [0, -50 * clients.length],
                            }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 30,
                                    ease: "linear",
                                },
                            }}
                        >
                            {duplicatedClients.map((client, index) => (
                                <div
                                    key={`${client.name}-${index}`}
                                    className="flex-shrink-0 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer"
                                    style={{ width: `${client.width}px` }}
                                >
                                    {/* Placeholder logo - replace with actual logo images */}
                                    <div className="h-12 bg-gradient-to-r from-gray-300 to-gray-400 rounded flex items-center justify-center">
                                        <span className="text-xs font-bold text-white text-center px-2">
                                            {client.name}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Trust Metrics */}
                <div className="mt-12 flex flex-wrap justify-center gap-8 text-center">
                    <div>
                        <div className="text-3xl font-bold text-[#F6A400]">500+</div>
                        <div className="text-sm text-[#3F3F3F]">Projects Delivered</div>
                    </div>
                    <div className="hidden sm:block w-px bg-gray-200" />
                    <div>
                        <div className="text-3xl font-bold text-[#F6A400]">50+</div>
                        <div className="text-sm text-[#3F3F3F]">Global Clients</div>
                    </div>
                    <div className="hidden sm:block w-px bg-gray-200" />
                    <div>
                        <div className="text-3xl font-bold text-[#F6A400]">98%</div>
                        <div className="text-sm text-[#3F3F3F]">Satisfaction Rate</div>
                    </div>
                    <div className="hidden sm:block w-px bg-gray-200" />
                    <div>
                        <div className="text-3xl font-bold text-[#F6A400]">15+</div>
                        <div className="text-sm text-[#3F3F3F]">Years Experience</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
