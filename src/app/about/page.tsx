import { Metadata } from 'next';
import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { TeamCard } from '@/components/shared/TeamCard';
import { client, teamQuery } from '@/lib/sanity';
import seedData from '@/sanity/seed-content.json';
import { CheckCircle, Users, Globe, Award, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
    title: 'About Us | Premium IT Services',
    description: 'Learn about our mission, values, and the team driving digital transformation.',
};

async function getTeam() {
    try {
        const team = await client.fetch(teamQuery);
        return team;
    } catch (error) {
        console.warn('Failed to fetch team, using seed data:', error);
        return seedData.teamMembers;
    }
}

export default async function AboutPage() {
    const team = await getTeam();

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <Section className="relative bg-gradient-soft py-24 overflow-hidden" animate>
                {/* Decorative Background */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                <div className="max-w-3xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-accent/20 mb-6">
                        <Sparkles className="w-4 h-4 text-accent" />
                        <span className="text-sm text-accent font-semibold">Who We Are</span>
                    </div>
                    <Heading level={1} className="mb-6 text-4xl md:text-5xl">About Us</Heading>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        We are a team of passionate technologists dedicated to helping businesses thrive in the digital age.
                    </p>
                </div>
            </Section>

            {/* Mission & Vision */}
            <Section animate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <Heading level={2} className="mb-6">Our Mission</Heading>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            To empower organizations with innovative technology solutions that drive growth, efficiency, and competitive advantage. We believe in the power of digital transformation to create a better future for businesses and their customers.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/30 border border-border hover:border-accent/30 transition-colors">
                                <CheckCircle className="text-accent h-6 w-6 flex-shrink-0" />
                                <span className="font-medium text-foreground">Client-Centric Approach</span>
                            </div>
                            <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/30 border border-border hover:border-accent/30 transition-colors">
                                <CheckCircle className="text-accent h-6 w-6 flex-shrink-0" />
                                <span className="font-medium text-foreground">Innovation & Excellence</span>
                            </div>
                            <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/30 border border-border hover:border-accent/30 transition-colors">
                                <CheckCircle className="text-accent h-6 w-6 flex-shrink-0" />
                                <span className="font-medium text-foreground">Integrity & Transparency</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-hero group">
                        {/* Placeholder for office/team image */}
                        <div className="absolute inset-0 flex items-center justify-center text-white/20 bg-gradient-to-br from-primary to-primary/80">
                            <Users size={80} />
                        </div>
                        <div className="absolute inset-0 bg-gradient-accent opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
                    </div>
                </div>
            </Section>

            {/* Stats/Values */}
            <Section className="bg-primary text-primary-foreground relative overflow-hidden" animate>
                {/* Decorative Background */}
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative z-10">
                    <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                        <Globe className="h-12 w-12 mx-auto mb-4 text-accent" />
                        <h3 className="text-5xl font-bold mb-2 text-white">10+</h3>
                        <p className="text-gray-300 font-medium">Countries Served</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                        <Users className="h-12 w-12 mx-auto mb-4 text-accent" />
                        <h3 className="text-5xl font-bold mb-2 text-white">50+</h3>
                        <p className="text-gray-300 font-medium">Expert Consultants</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                        <Award className="h-12 w-12 mx-auto mb-4 text-accent" />
                        <h3 className="text-5xl font-bold mb-2 text-white">100%</h3>
                        <p className="text-gray-300 font-medium">Client Satisfaction</p>
                    </div>
                </div>
            </Section>

            {/* Team Section */}
            <Section animate>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <Heading level={2} className="mb-4">Meet Our Leadership</Heading>
                    <p className="text-muted-foreground text-lg">
                        Our diverse team of experts brings decades of experience across various industries and technologies.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {team.map((member: any, index: number) => (
                        <TeamCard
                            key={member._id || index}
                            member={member}
                            index={index}
                        />
                    ))}
                </div>
            </Section>
        </div>
    );
}
