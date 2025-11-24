import { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Button, buttonVariants } from '@/components/ui/Button';
import { client, jobsQuery } from '@/lib/sanity';
import seedData from '@/sanity/seed-content.json';
import Link from 'next/link';
import { MapPin, Clock, Briefcase, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Careers | Premium IT Services',
    description: 'Join our team of innovators and help shape the future of technology.',
};

async function getJobs() {
    try {
        const jobs = await client.fetch(jobsQuery);
        return jobs;
    } catch (error) {
        console.warn('Failed to fetch jobs, using seed data:', error);
        return seedData.jobs;
    }
}

export default async function CareersPage() {
    const jobs = await getJobs();

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <Section className="bg-muted/30 py-20">
                <div className="max-w-3xl mx-auto text-center">
                    <Heading level={1} className="mb-6">Join Our Team</Heading>
                    <p className="text-xl text-muted-foreground mb-8">
                        We're looking for talented individuals who are passionate about technology and innovation.
                    </p>
                    <Link href="#open-positions" className={buttonVariants({ size: 'lg' })}>
                        View Open Positions
                    </Link>
                </div>
            </Section>

            {/* Culture/Benefits Section (Static for now) */}
            <Section>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div className="p-6 bg-card border border-border rounded-xl text-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                            <Briefcase size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Professional Growth</h3>
                        <p className="text-muted-foreground">Continuous learning opportunities and career development paths.</p>
                    </div>
                    <div className="p-6 bg-card border border-border rounded-xl text-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                            <Clock size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Flexible Work</h3>
                        <p className="text-muted-foreground">Remote-friendly policies and flexible working hours.</p>
                    </div>
                    <div className="p-6 bg-card border border-border rounded-xl text-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                            <MapPin size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Global Impact</h3>
                        <p className="text-muted-foreground">Work on projects that make a difference for clients worldwide.</p>
                    </div>
                </div>

                <div id="open-positions">
                    <Heading level={2} className="mb-8 text-center">Open Positions</Heading>

                    <div className="grid grid-cols-1 gap-4 max-w-4xl mx-auto">
                        {jobs.map((job: any, index: number) => (
                            <Link
                                key={job._id || index}
                                href={`/careers/${job.slug.current}`}
                                className="block group"
                            >
                                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 group-hover:border-primary/50">
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{job.title}</h3>
                                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                            <span className="flex items-center gap-1">
                                                <Briefcase size={16} /> {job.department}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <MapPin size={16} /> {job.location}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock size={16} /> {job.type}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <span className={buttonVariants({ variant: 'ghost', size: 'sm' })}>
                                            View Details <ArrowRight className="ml-2 h-4 w-4" />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </Section>
        </div>
    );
}
