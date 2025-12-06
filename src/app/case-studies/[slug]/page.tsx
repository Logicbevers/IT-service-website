import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Button, buttonVariants } from '@/components/ui/Button';
import { client, caseStudyBySlugQuery, caseStudiesQuery } from '@/lib/sanity';
import seedData from '@/sanity/seed-content.json';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Calendar, Tag } from 'lucide-react';

interface Props {
    params: { slug: string };
}

async function getCaseStudy(slug: string) {
    try {
        const study = await client.fetch(caseStudyBySlugQuery, { slug });
        return study;
    } catch (error) {
        console.warn('Failed to fetch case study from Sanity, using seed data.');
        return seedData.caseStudies.find((s: any) => s.slug.current === slug);
    }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const study = await getCaseStudy(params.slug);
    if (!study) return { title: 'Case Study Not Found' };

    return {
        title: `${study.title} | Premium IT Services`,
        description: study.summary,
    };
}

export async function generateStaticParams() {
    try {
        const studies = await client.fetch(caseStudiesQuery);
        return studies.map((study: any) => ({
            slug: study.slug.current,
        }));
    } catch (error) {
        return seedData.caseStudies.map((study: any) => ({
            slug: study.slug.current,
        }));
    }
}

export default async function CaseStudyDetailPage({ params }: Props) {
    const study = await getCaseStudy(params.slug);

    if (!study) {
        notFound();
    }

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
                {study.mainImage ? (
                    <Image
                        src={study.mainImage}
                        alt={study.title}
                        fill
                        className="object-cover brightness-50"
                        priority
                    />
                ) : (
                    <div className="absolute inset-0 bg-gray-900" />
                )}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="container mx-auto px-4 md:px-6 text-center text-white">
                        <div className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium mb-6">
                            {study.client}
                        </div>
                        <Heading level={1} className="mb-6 text-white max-w-4xl mx-auto">{study.title}</Heading>
                        <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">{study.summary}</p>
                    </div>
                </div>
            </div>

            <Section>
                <div className="max-w-4xl mx-auto">
                    <Link href="/case-studies" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Case Studies
                    </Link>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                        <div className="md:col-span-2">
                            <div className="prose prose-lg dark:prose-invert">
                                <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
                                <p className="mb-8">
                                    {study.challenge || "Detailed description of the challenge faced by the client..."}
                                </p>

                                <h3 className="text-2xl font-bold mb-4">Our Solution</h3>
                                <p className="mb-8">
                                    {study.solution || "Detailed description of the solution provided..."}
                                </p>

                                <h3 className="text-2xl font-bold mb-4">The Results</h3>
                                <p>
                                    {study.results || "Detailed description of the results achieved..."}
                                </p>
                            </div>
                        </div>

                        <div className="md:col-span-1">
                            <div className="bg-muted/30 rounded-xl p-6 border border-border sticky top-24">
                                <h4 className="font-semibold mb-4">Project Details</h4>

                                <div className="space-y-4">
                                    <div>
                                        <p className="text-sm text-muted-foreground mb-1">Client</p>
                                        <p className="font-medium">{study.client}</p>
                                    </div>

                                    <div>
                                        <p className="text-sm text-muted-foreground mb-1">Date</p>
                                        <div className="flex items-center gap-2">
                                            <Calendar className="h-4 w-4 text-muted-foreground" />
                                            <span className="font-medium">
                                                {study.publishedAt ? new Date(study.publishedAt).toLocaleDateString() : 'Recent'}
                                            </span>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-sm text-muted-foreground mb-2">Technologies</p>
                                        <div className="flex flex-wrap gap-2">
                                            {study.tags?.map((tag: string) => (
                                                <span key={tag} className="px-2 py-1 rounded-md bg-background border border-border text-xs font-medium flex items-center gap-1">
                                                    <Tag className="h-3 w-3" /> {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-border">
                                    <Link href="/contact" className={buttonVariants({ className: 'w-full' })}>
                                        Start Your Project
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            <Section className="bg-primary text-primary-foreground">
                <div className="text-center max-w-2xl mx-auto">
                    <Heading level={2} className="mb-4 text-white">Ready to achieve similar results?</Heading>
                    <p className="text-gray-300 mb-8">
                        Let's discuss how we can help your business transform and grow.
                    </p>
                    <Link href="/contact" className={buttonVariants({ size: 'lg', variant: 'secondary' })}>
                        Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </div>
            </Section>
        </div>
    );
}
