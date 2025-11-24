import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Button, buttonVariants } from '@/components/ui/Button';
import { client, jobBySlugQuery, jobsQuery } from '@/lib/sanity';
import seedData from '@/sanity/seed-content.json';
import Link from 'next/link';
import { MapPin, Clock, Briefcase, ArrowLeft, CheckCircle } from 'lucide-react';

interface Props {
    params: { slug: string };
}

async function getJob(slug: string) {
    try {
        const job = await client.fetch(jobBySlugQuery, { slug });
        return job;
    } catch (error) {
        console.warn('Failed to fetch job, using seed data:', error);
        return seedData.jobs.find((j: any) => j.slug.current === slug);
    }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const job = await getJob(params.slug);
    if (!job) return { title: 'Job Not Found' };

    return {
        title: `${job.title} | Careers | Premium IT Services`,
        description: `Join us as a ${job.title} in ${job.location}.`,
    };
}

export async function generateStaticParams() {
    try {
        const jobs = await client.fetch(jobsQuery);
        return jobs.map((job: any) => ({
            slug: job.slug.current,
        }));
    } catch (error) {
        return seedData.jobs.map((job: any) => ({
            slug: job.slug.current,
        }));
    }
}

export default async function JobDetailPage({ params }: Props) {
    const job = await getJob(params.slug);

    if (!job) {
        notFound();
    }

    return (
        <div className="min-h-screen">
            <Section className="bg-muted/30 py-16">
                <div className="max-w-3xl mx-auto">
                    <Link href="/careers" className="inline-flex items-center text-muted-foreground hover:text-primary mb-6 transition-colors">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Careers
                    </Link>

                    <Heading level={1} className="mb-4">{job.title}</Heading>

                    <div className="flex flex-wrap gap-6 text-muted-foreground mb-8">
                        <span className="flex items-center gap-2">
                            <Briefcase size={20} className="text-primary" /> {job.department}
                        </span>
                        <span className="flex items-center gap-2">
                            <MapPin size={20} className="text-primary" /> {job.location}
                        </span>
                        <span className="flex items-center gap-2">
                            <Clock size={20} className="text-primary" /> {job.type}
                        </span>
                    </div>

                    <Link href={`/api/careers/apply?job=${job.slug.current}`} className={buttonVariants({ size: 'lg' })}>
                        Apply for this Position
                    </Link>
                </div>
            </Section>

            <Section>
                <div className="max-w-3xl mx-auto">
                    <div className="prose prose-lg dark:prose-invert mb-12">
                        <h3 className="text-2xl font-bold mb-4">About the Role</h3>
                        <p className="mb-8">
                            {job.description || "We are seeking a talented individual to join our team..."}
                        </p>

                        <h3 className="text-2xl font-bold mb-4">Responsibilities</h3>
                        <ul className="space-y-2 mb-8">
                            {job.responsibilities?.map((item: string, idx: number) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                                    <span>{item}</span>
                                </li>
                            )) || (
                                    <>
                                        <li className="flex items-start gap-3"><CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} /><span>Collaborate with cross-functional teams</span></li>
                                        <li className="flex items-start gap-3"><CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} /><span>Design and implement scalable solutions</span></li>
                                    </>
                                )}
                        </ul>

                        <h3 className="text-2xl font-bold mb-4">Requirements</h3>
                        <ul className="space-y-2 mb-8">
                            {job.requirements?.map((item: string, idx: number) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            )) || (
                                    <>
                                        <li className="flex items-start gap-3"><div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" /><span>Bachelor's degree in Computer Science or related field</span></li>
                                        <li className="flex items-start gap-3"><div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" /><span>3+ years of relevant experience</span></li>
                                    </>
                                )}
                        </ul>
                    </div>

                    <div className="bg-muted/30 rounded-xl p-8 text-center border border-border">
                        <Heading level={3} className="mb-4">Interested?</Heading>
                        <p className="text-muted-foreground mb-6">
                            If you think you'd be a good fit, we'd love to hear from you.
                        </p>
                        <Link href={`/api/careers/apply?job=${job.slug.current}`} className={buttonVariants({ size: 'lg' })}>
                            Apply Now
                        </Link>
                    </div>
                </div>
            </Section>
        </div>
    );
}
