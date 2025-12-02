import { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { PageBanner } from '@/components/shared/PageBanner';
import { buttonVariants } from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Shield, MessageCircle, Users, Target, Heart, Handshake, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
    title: 'Customer-First Approach | NRT Groups',
    description: 'Built on trust, transparency, and long-term partnership. Experience reliable service with precision, accountability, and dedicated support.',
};

export default function CustomerFirstPage() {
    return (
        <div className="min-h-screen bg-background">
            <PageBanner
                category="Our Approach"
                title="Customer-First Philosophy"
                subtitle="Our business is built on trust, transparency, and long-term partnership. We believe that strong relationships deliver strong results."
            />

            {/* Values Section */}
            <Section id="values" className="bg-muted/30" animate>
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 mb-4 animate-fade-in-up">
                        <span className="w-8 h-1 bg-accent rounded-full"></span>
                        <span className="text-sm text-accent font-bold uppercase tracking-wider">Our Values</span>
                    </div>
                    <Heading level={2} className="mb-6 text-4xl md:text-5xl animate-fade-in-up delay-100">What Defines Us</Heading>
                    <p className="text-muted-foreground text-lg animate-fade-in-up delay-200">
                        Every interaction, every project, every decision is guided by our commitment to your success.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            icon: MessageCircle,
                            title: "Transparent Comms",
                            desc: "Clear timelines, honest updates, and no hidden surprises — ever."
                        },
                        {
                            icon: Users,
                            title: "Dedicated Ownership",
                            desc: "Every project has responsible leads who ensure smooth execution from start to finish."
                        },
                        {
                            icon: Target,
                            title: "Personalized Solutions",
                            desc: "We adapt our strategies and services to your unique business needs, not generic templates."
                        },
                        {
                            icon: Shield,
                            title: "Reliable Delivery",
                            desc: "Our team ensures timely delivery and ongoing assistance that you can depend on."
                        },
                        {
                            icon: Handshake,
                            title: "Long-Term Partnership",
                            desc: "We invest in your growth as if it's our own, building trust that lasts beyond a single project."
                        }
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className={cn(
                                "group p-8 rounded-3xl bg-card border border-border transition-all duration-300",
                                "hover:shadow-card-hover hover:-translate-y-1 hover:border-accent/30",
                                idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
                            )}
                        >
                            <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <item.icon className="w-7 h-7 text-accent group-hover:text-primary-dark transition-colors" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">{item.title}</h3>
                            <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Benefits & Trust */}
            <Section className="bg-white overflow-hidden" animate>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="relative">
                        <div className="absolute -left-20 -top-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
                        <Heading level={2} className="mb-8 text-4xl relative z-10">Benefits of Our Approach</Heading>
                        <div className="space-y-6">
                            {[
                                'Smooth, stress-free project experience',
                                'Strong alignment with your business goals',
                                'Faster delivery through real collaboration',
                                'Lower risk through proactive communication',
                                'Confidence and clarity at every stage'
                            ].map((benefit, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 border border-transparent hover:border-accent/30 hover:bg-accent/5 transition-all duration-300 group animate-slide-in-left"
                                    style={{ animationDelay: `${idx * 100}ms` }}
                                >
                                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                        <CheckCircle className="text-accent h-5 w-5" />
                                    </div>
                                    <span className="text-lg font-medium group-hover:text-accent-dark transition-colors">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative animate-float delay-200">
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/5 rounded-[2rem] transform rotate-3" />
                        <div className="relative bg-card p-10 rounded-[2rem] border border-border shadow-2xl">
                            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                                <Shield className="w-6 h-6 text-accent" />
                                Why Clients Trust Us
                            </h3>
                            <div className="space-y-4">
                                {[
                                    'Proven track record of reliability',
                                    'High retention rate & long-term relationships',
                                    'Professional & ethical service delivery',
                                    'Hands-on support whenever you need it',
                                    'Transparent pricing & no hidden costs'
                                ].map((trust, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/5 transition-colors cursor-default group"
                                    >
                                        <ChevronRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
                                        <span className="font-medium group-hover:text-accent transition-colors">{trust}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Why Choose Us */}
            <Section className="bg-muted/30" animate>
                <div className="max-w-5xl mx-auto">
                    <Heading level={2} className="mb-12 text-center text-4xl">Why Choose Us</Heading>
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            'Client-centric mindset',
                            'Integrity & honesty',
                            'Agile & adaptable',
                            'Results-oriented',
                            'Proactive problem solving',
                            'Accessible leadership',
                            'Commitment to quality'
                        ].map((reason, idx) => (
                            <div
                                key={idx}
                                className="flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-border shadow-sm hover:shadow-md hover:border-accent/50 hover:-translate-y-1 transition-all duration-300 cursor-default animate-scale-in"
                                style={{ animationDelay: `${idx * 50}ms` }}
                            >
                                <CheckCircle className="text-accent h-4 w-4" />
                                <span className="font-medium">{reason}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* CTA Section */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-cta opacity-90" />
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" />

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="max-w-3xl mx-auto animate-fade-in-up">
                        <Heading level={2} className="mb-6 text-white text-4xl md:text-5xl font-bold">
                            Let's build success together
                        </Heading>
                        <p className="text-xl text-white/90 mb-10 leading-relaxed">
                            Contact us to experience a truly customer-first partnership that puts your goals at the center of everything we do.
                        </p>
                        <Link
                            href="/contact"
                            className={cn(
                                buttonVariants({ size: 'lg', variant: 'secondary' }),
                                "bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 min-w-[200px]"
                            )}
                        >
                            Contact Us Today <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
