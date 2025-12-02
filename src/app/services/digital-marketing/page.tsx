import { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { PageBanner } from '@/components/shared/PageBanner';
import { buttonVariants } from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowRight, CheckCircle, TrendingUp, Search, Target, Share2, Mail, ChevronRight, BarChart } from 'lucide-react';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
    title: 'Digital Marketing Services | NRT Groups',
    description: 'Performance-focused digital marketing strategies. SEO, paid advertising, content marketing, and social media management to grow your brand and generate quality leads.',
};

export default function DigitalMarketingPage() {
    return (
        <div className="min-h-screen bg-background">
            <PageBanner
                category="Digital Marketing"
                title="Performance-Focused Digital Marketing"
                subtitle="We help brands increase visibility, attract the right audience, and generate high-quality leads using data-driven strategies and creative execution."
            />

            {/* Services Section */}
            <Section id="services" className="bg-muted/30" animate>
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 mb-4 animate-fade-in-up">
                        <span className="w-8 h-1 bg-accent rounded-full"></span>
                        <span className="text-sm text-accent font-bold uppercase tracking-wider">Our Services</span>
                    </div>
                    <Heading level={2} className="mb-6 text-4xl md:text-5xl animate-fade-in-up delay-100">Marketing Capabilities</Heading>
                    <p className="text-muted-foreground text-lg animate-fade-in-up delay-200">
                        Comprehensive marketing solutions to amplify your brand and drive measurable growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            icon: Search,
                            title: "SEO Optimization",
                            desc: "Improve discoverability with technical SEO, on-page optimization, and link building."
                        },
                        {
                            icon: Target,
                            title: "Paid Advertising",
                            desc: "Highly targeted ad campaigns on Google, Meta, and LinkedIn that maximize ROI."
                        },
                        {
                            icon: TrendingUp,
                            title: "Content Strategy",
                            desc: "Engaging blogs, guides, and social messaging crafted for brand impact."
                        },
                        {
                            icon: Share2,
                            title: "Social Media",
                            desc: "Creative content and community engagement strategies for all major platforms."
                        },
                        {
                            icon: Mail,
                            title: "Marketing Automation",
                            desc: "Email workflows, CRM integrations, and smart lead-nurturing systems."
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

            {/* Benefits & Industries */}
            <Section className="bg-white overflow-hidden" animate>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="absolute -left-20 -top-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
                        <Heading level={2} className="mb-8 text-4xl relative z-10">Key Benefits</Heading>
                        <div className="space-y-6">
                            {[
                                'Improved brand visibility & reach',
                                'Higher-quality leads & conversions',
                                'Data-driven insights & strategy',
                                'Stronger online presence across channels',
                                'Measurable ROI on marketing spend'
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

                    <div className="relative animate-float">
                        <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-primary/5 rounded-[2rem] transform rotate-2" />
                        <div className="relative bg-card p-10 rounded-[2rem] border border-border shadow-2xl">
                            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                                <BarChart className="w-6 h-6 text-accent" />
                                Industries Served
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    'Technology & SaaS',
                                    'Retail & E-commerce',
                                    'Logistics & Supply Chain',
                                    'Manufacturing',
                                    'Education & Training',
                                    'Professional Services'
                                ].map((industry, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/5 transition-colors cursor-default group"
                                    >
                                        <ChevronRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
                                        <span className="font-medium group-hover:text-accent transition-colors">{industry}</span>
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
                            'Performance-first approach',
                            'Certified marketing specialists',
                            'Transparent reporting',
                            'Customized strategies',
                            'Creative + Analytical balance',
                            'ROI focused campaigns',
                            'Continuous optimization'
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
                            Ready to grow your brand?
                        </Heading>
                        <p className="text-xl text-white/90 mb-10 leading-relaxed">
                            Start a results-driven marketing campaign with us and watch your business thrive.
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
