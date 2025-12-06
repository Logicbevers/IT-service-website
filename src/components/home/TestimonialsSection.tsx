'use client';

import { EnhancedTestimonialCard } from './EnhancedTestimonialCard';

export function TestimonialsSection() {
    const testimonials = [
        {
            name: 'Sarah Johnson',
            role: 'CTO',
            company: 'TechCorp Global',
            content: 'NRT Groups transformed our entire digital infrastructure. Their expertise in cloud solutions and DevOps helped us scale 10x while reducing costs by 40%.',
            rating: 5
        },
        {
            name: 'Michael Chen',
            role: 'Operations Director',
            company: 'LogiFlow Inc',
            content: 'The logistics optimization platform they built has revolutionized our supply chain. Real-time tracking and AI-powered route optimization saved us millions.',
            rating: 5
        },
        {
            name: 'Emily Rodriguez',
            role: 'VP of Marketing',
            company: 'BrandBoost',
            content: 'Their digital transformation strategy was exactly what we needed. The team understood our vision and delivered beyond expectations.',
            rating: 5
        },
        {
            name: 'David Park',
            role: 'CEO',
            company: 'EduTech Solutions',
            content: 'Outstanding training programs! Our team\'s productivity increased by 60% after completing their custom corporate training modules.',
            rating: 5
        },
        {
            name: 'Lisa Anderson',
            role: 'Product Manager',
            company: 'InnovateCo',
            content: 'Professional, responsive, and incredibly skilled. They delivered our mobile app ahead of schedule with exceptional quality.',
            rating: 5
        },
        {
            name: 'James Wilson',
            role: 'CFO',
            company: 'FinanceFirst',
            content: 'The ROI on our investment with NRT Groups has been phenomenal. Their solutions are not just innovative but also cost-effective.',
            rating: 5
        }
    ];

    return (
        <section className="relative bg-white py-24 md:py-32">
            <div className="container mx-auto px-4 md:px-6">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 mb-4">
                        <span className="w-8 h-1 bg-[#F6A400] rounded-full"></span>
                        <span className="text-sm text-[#F6A400] font-bold uppercase tracking-wider">Client Success Stories</span>
                        <span className="w-8 h-1 bg-[#F6A400] rounded-full"></span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] mb-6 leading-tight">
                        Trusted by Industry Leaders<br />
                        Worldwide
                    </h2>

                    <p className="text-lg text-[#4A4A4A] leading-relaxed">
                        Don&apos;t just take our word for it. Hear what our clients have to say about their experience working with NRT Groups.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <EnhancedTestimonialCard
                            key={testimonial.name}
                            {...testimonial}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
