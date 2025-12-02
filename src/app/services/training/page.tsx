import { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { PageBanner } from '@/components/shared/PageBanner';
import { buttonVariants } from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowRight, CheckCircle, GraduationCap, BookOpen, Users, Award, ChevronRight, MonitorPlay } from 'lucide-react';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
    title: 'Professional Training & Skill Development | NRT Groups',
    description: 'Industry-ready training programs in logistics, IT, digital marketing, and business operations. Build job-ready skills with expert-led courses.',
};

export default function TrainingPage() {
    return (
        <div className="min-h-screen bg-background">
            <PageBanner
                category="Training & Development"
                title="Professional Training & Skill Development"
                subtitle="Build job-ready capabilities in fast-growing industries with our industry-aligned courses designed for real-world career outcomes."
            />

            {/* Programs Section */}
            <Section id="programs" className="bg-muted/30" animate>
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 mb-4 animate-fade-in-up">
                        <span className="w-8 h-1 bg-accent rounded-full"></span>
                        <span className="text-sm text-accent font-bold uppercase tracking-wider">Our Programs</span>
                    </div>
                    <Heading level={2} className="mb-6 text-4xl md:text-5xl animate-fade-in-up delay-100">Training Programs</Heading>
                    <p className="text-muted-foreground text-lg animate-fade-in-up delay-200">
                        Comprehensive, industry-aligned courses designed to accelerate your career growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        {
                            icon: BookOpen,
                            title: "Logistics & Supply Chain",
                            desc: "Master warehousing, distribution, procurement, inventory management, and transportation operations."
                        },
                        {
                            icon: MonitorPlay,
                            title: "Information Technology",
                            desc: "Foundational and advanced courses in software development, cloud computing, and automation."
                        },
                        {
                            icon: Users,
                            title: "Digital Marketing",
                            desc: "Learn SEO, paid advertising, content strategy, branding, analytics, and social media marketing."
                        },
                        {
                            icon: Award,
                            title: "Business Operations",
                            desc: "Develop skills in project management, communication, leadership, and process improvement."
                        }
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className={cn(
                                "group p-8 rounded-3xl bg-card border border-border transition-all duration-300",
                                "hover:shadow-card-hover hover:-translate-y-1 hover:border-accent/30"
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

            {/* Formats & Benefits */}
            <Section className="bg-white overflow-hidden" animate>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="relative">
                        <div className="absolute -left-20 -top-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
                        <Heading level={2} className="mb-8 text-4xl relative z-10">Training Formats</Heading>
                        <div className="space-y-6">
                            {[
                                'Classroom training with hands-on practice',
                                'Live online sessions with experts',
                                'Self-paced modules for flexibility',
                                'Corporate training workshops',
                                'Certification programs'
                            ].map((format, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 border border-transparent hover:border-accent/30 hover:bg-accent/5 transition-all duration-300 group animate-slide-in-left"
                                    style={{ animationDelay: `${idx * 100}ms` }}
                                >
                                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                        <CheckCircle className="text-accent h-5 w-5" />
                                    </div>
                                    <span className="text-lg font-medium group-hover:text-accent-dark transition-colors">{format}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative animate-float delay-200">
                        <div className="absolute inset-0 bg-gradient-to-tl from-accent/20 to-primary/5 rounded-[2rem] transform rotate-1" />
                        <div className="relative bg-card p-10 rounded-[2rem] border border-border shadow-2xl">
                            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                                <Award className="w-6 h-6 text-accent" />
                                Key Benefits
                            </h3>
                            <div className="space-y-4">
                                {[
                                    'Industry-aligned curriculum',
                                    'Practical, hands-on training',
                                    'Real case studies & projects',
                                    'Job readiness support',
                                    'Expert instructors',
                                    'Networking opportunities'
                                ].map((benefit, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/5 transition-colors cursor-default group"
                                    >
                                        <ChevronRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
                                        <span className="font-medium group-hover:text-accent transition-colors">{benefit}</span>
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
                            'Current industry trends',
                            'Placement assistance',
                            'Customized corporate programs',
                            'Modern training labs',
                            'Certified trainers',
                            'Flexible schedules',
                            'Career counseling'
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
                            Advance your career with us
                        </Heading>
                        <p className="text-xl text-white/90 mb-10 leading-relaxed">
                            Explore courses designed to help you succeed in today's competitive job market.
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
