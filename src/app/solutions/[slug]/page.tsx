import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Button, buttonVariants } from '@/components/ui/Button';
import { client, solutionBySlugQuery, solutionsQuery } from '@/lib/sanity';
import seedData from '@/sanity/seed-content.json';
import Link from 'next/link';
import { CheckCircle, ArrowRight, BarChart, ShieldCheck, Zap } from 'lucide-react';
import { Solution } from '@/types';

interface Props {
    params: { slug: string };
}

async function getSolution(slug: string) {
    try {
        const solution = await client.fetch(solutionBySlugQuery, { slug });
        return solution;
    } catch (error) {
        console.warn('Failed to fetch solution, using seed data:', error);
        // @ts-ignore
        return seedData.solutions.find((s: any) => s.slug.current === slug);
    }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const solution = await getSolution(params.slug);
    if (!solution) return { title: 'Solution Not Found' };

    return {
        title: `${solution.title} | Premium IT Services`,
        description: solution.shortDescription,
    };
}

export async function generateStaticParams() {
    try {
        const solutions = await client.fetch(solutionsQuery);
        return solutions.map((solution: Solution) => ({
            slug: solution.slug.current,
        }));
    } catch (error) {
        return seedData.solutions.map((solution: any) => ({
            slug: solution.slug.current,
        }));
    }
}

export default async function SolutionDetailPage({ params }: Props) {
    const solution = await getSolution(params.slug);

    if (!solution) {
        notFound();
    }

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-24 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
                                Industry Solution
                            </div>
                            <Heading level={1} className="mb-6 text-white">{solution.title}</Heading>
                            <p className="text-xl text-gray-300 mb-8">{solution.shortDescription}</p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/contact" className={buttonVariants({ size: 'lg' })}>
                                    Schedule Consultation <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                                <Link href="/case-studies" className={buttonVariants({ size: 'lg', variant: 'outline', className: 'text-white border-white hover:bg-white/10' })}>
                                    View Case Studies
                                </Link>
                            </div>
                        </div>
                        <div className="relative">
                            {/* Placeholder for a relevant illustration or 3D element */}
                            <div className="aspect-video rounded-xl bg-white/5 border border-white/10 p-8 flex items-center justify-center backdrop-blur-sm">
                                <div className="text-center">
                                    <Zap className="w-16 h-16 text-accent mx-auto mb-4" />
                                    <h3 className="text-2xl font-bold mb-2">Accelerate Growth</h3>
                                    <p className="text-gray-400">Tailored technology to speed up your business outcomes.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                        <Heading level={2} className="mb-6">Comprehensive Approach</Heading>
                        <div className="prose prose-lg dark:prose-invert mb-12">
                            <p>{solution.description ? (Array.isArray(solution.description) ? 'Detailed description content...' : solution.description) : solution.shortDescription}</p>
                            <p>
                                We understand the specific challenges faced by the {solution.title} industry. Our solution is designed to address these pain points directly, leveraging cutting-edge technology to drive efficiency, security, and innovation.
                            </p>
                        </div>

                        <Heading level={3} className="mb-6">Key Capabilities</Heading>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                            {solution.features?.map((feature: string, idx: number) => (
                                <div key={idx} className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border border-border">
                                    <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                                    <span className="font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="bg-card border border-border rounded-xl p-6 shadow-sm sticky top-24">
                            <Heading level={3} className="mb-6 text-xl">Why Choose Us?</Heading>
                            <ul className="space-y-6">
                                {solution.benefits?.map((benefit: string, idx: number) => (
                                    <li key={idx} className="flex gap-4">
                                        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 text-accent">
                                            {idx === 0 ? <BarChart size={20} /> : idx === 1 ? <ShieldCheck size={20} /> : <Zap size={20} />}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1">Benefit {idx + 1}</h4>
                                            <p className="text-sm text-muted-foreground">{benefit}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8 pt-6 border-t border-border">
                                <Heading level={4} className="mb-2 text-lg">Need a custom solution?</Heading>
                                <p className="text-sm text-muted-foreground mb-4">
                                    We can tailor our services to your exact requirements.
                                </p>
                                <Link href="/contact" className={buttonVariants({ variant: 'secondary', className: 'w-full' })}>
                                    Talk to an Expert
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
