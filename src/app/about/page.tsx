import { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { PageBanner } from '@/components/shared/PageBanner';
import { CheckCircle, Users, Globe, Award, TrendingUp, Target, Zap, Layers } from 'lucide-react';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
    title: 'About Us | NRT Groups - Building the Future of Business',
    description: 'NRT Groups is your growth partner for IT services, logistics, software development, digital marketing, and professional training. Driving business growth through innovation and excellence.',
};

export default async function AboutPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* 1. HERO SECTION - PREMIUM REDESIGN */}
            <PageBanner
                category="Who We Are"
                title={<>Building the Future of <br /><span className="text-[#1A1A1A]">Business & Innovation</span></>}
                subtitle="We empower organizations and professionals to scale smarter through integrated solutions in technology, logistics, digital transformation, and skill development."
                className="min-h-[85vh]"
                showScrollIndicator={true}
            />

            {/* 2. INTRO PARAGRAPH */}
            <Section className="bg-white" animate>
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                    <div className="md:col-span-8">
                        <Heading level={2} className="mb-6 text-3xl md:text-4xl">
                            Practical expertise powered by <span className="text-accent">cutting-edge technology</span>.
                        </Heading>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            With a strong presence across <strong className="text-foreground">IT services, logistics, custom software development, digital marketing, and education</strong>, we deliver integrated solutions that help organizations operate smarter.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            In a world that evolves every minute, businesses need a partner that understands speed, precision, and real-world impact. That&apos;s exactly what we bring to the table.
                        </p>
                    </div>
                    <div className="md:col-span-4 flex justify-center md:justify-end">
                        <div className="relative">
                            <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl" />
                            <div className="relative bg-white p-6 rounded-2xl shadow-xl border border-border rotate-3 hover:rotate-0 transition-transform duration-500">
                                <Zap className="w-12 h-12 text-accent mb-2" />
                                <div className="text-2xl font-bold">100+</div>
                                <div className="text-sm text-muted-foreground">Projects Delivered</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* 3. MISSION / VISION CARDS */}
            <Section className="bg-muted/30" animate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {/* Mission */}
                    <div className="group p-10 rounded-3xl bg-white border border-border shadow-sm hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/20 rounded-3xl transition-colors duration-300" />
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors" />

                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent/10 mb-6 group-hover:scale-110 transition-transform duration-300">
                            <Target className="text-accent h-7 w-7" />
                        </div>
                        <Heading level={3} className="mb-4 text-2xl">Our Mission</Heading>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            To drive business growth and empower individuals through innovative solutions, technical excellence, and learning that creates real opportunities.
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="group p-10 rounded-3xl bg-white border border-border shadow-sm hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/20 rounded-3xl transition-colors duration-300" />
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />

                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent/10 mb-6 group-hover:scale-110 transition-transform duration-300">
                            <Globe className="text-accent h-7 w-7" />
                        </div>
                        <Heading level={3} className="mb-4 text-2xl">Our Vision</Heading>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            To become a global leader offering smart, integrated, and impactful services across technology, logistics, marketing, and education.
                        </p>
                    </div>
                </div>
            </Section>

            {/* 4. WHY CHOOSE US */}
            <Section animate>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 mb-4">
                        <span className="w-8 h-1 bg-accent rounded-full"></span>
                        <span className="text-sm text-accent font-bold uppercase tracking-wider">Our Strengths</span>
                    </div>
                    <Heading level={2} className="mb-6 text-4xl md:text-5xl">Why Choose Us</Heading>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        Partnering with NRT Groups means working with a team that understands the demands of today&apos;s fast-moving digital environment.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {[
                        {
                            icon: CheckCircle,
                            title: "Expertise in IT Solutions",
                            desc: "Modern and scalable IT solutions that help businesses stay secure, efficient, and future-ready."
                        },
                        {
                            icon: Layers,
                            title: "Strong Logistics Capability",
                            desc: "Reliable execution across the supply chain with structured planning and real-time coordination."
                        },
                        {
                            icon: Zap,
                            title: "Custom Software Development",
                            desc: "Tailored software tailored to your business goals, from automation systems to enterprise tools."
                        },
                        {
                            icon: TrendingUp,
                            title: "Performance-Focused Marketing",
                            desc: "Strategies built to deliver measurable growth, visibility, and high-quality leads."
                        },
                        {
                            icon: Award,
                            title: "Professional Training",
                            desc: "Industry-aligned courses designed to build job-ready skills in fast-growing fields."
                        },
                        {
                            icon: Users,
                            title: "Customer-First Approach",
                            desc: "Transparency, communication, and long-term partnership in every project."
                        }
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="flex gap-6 p-6 rounded-2xl hover:bg-muted/50 transition-colors duration-300 animate-fade-in-up"
                            style={{ animationDelay: `${idx * 100}ms` }}
                        >
                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                                <item.icon className="text-accent h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* 6. GROWTH / TIMELINE SECTION */}
            <Section animate>
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <Heading level={2} className="mb-4 text-3xl md:text-4xl">Our Journey</Heading>
                        <p className="text-muted-foreground text-lg">A timeline of growth and innovation.</p>
                    </div>

                    <div className="relative border-l-2 border-accent/20 ml-4 md:ml-1/2 space-y-12">
                        {[
                            { year: '2020', title: 'Foundation', desc: 'NRT Groups was established with a vision to provide integrated business solutions.' },
                            { year: '2021', title: 'Expansion', desc: 'Expanded services to include Logistics and Custom Software Development.' },
                            { year: '2022', title: 'Digital Growth', desc: 'Launched Digital Marketing division to help clients scale online.' },
                            { year: '2023', title: 'Education Initiative', desc: 'Started Professional Training programs to bridge the industry skills gap.' },
                            { year: '2024', title: 'Global Reach', desc: 'Serving clients internationally with a growing team of experts.' }
                        ].map((item, idx) => (
                            <div key={idx} className="relative pl-8 md:pl-0">
                                {/* Dot */}
                                <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-accent border-4 border-white shadow-sm md:left-1/2 md:-translate-x-1/2" />

                                <div className={cn(
                                    "md:w-1/2",
                                    idx % 2 === 0 ? "md:pr-12 md:text-right md:ml-0" : "md:pl-12 md:ml-auto"
                                )}>
                                    <span className="text-accent font-bold text-lg block mb-1">{item.year}</span>
                                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                    <p className="text-muted-foreground">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
        </div>
    );
}
