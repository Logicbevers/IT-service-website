import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { PageBanner } from '@/components/shared/PageBanner';
import { buttonVariants } from '@/components/ui/Button';
import { client, solutionBySlugQuery, solutionsQuery } from '@/lib/sanity';
import seedData from '@/sanity/seed-content.json';
import Link from 'next/link';
import { CheckCircle, BarChart, ShieldCheck, Zap } from 'lucide-react';
import { Solution } from '@/types';

interface Props {
    params: { slug: string };
}

async function getSolution(slug: string) {
    try {
        const solution = await client.fetch(solutionBySlugQuery, { slug });
        return solution;
    } catch {
        console.warn('Failed to fetch solution from Sanity, using seed data.');
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
    } catch {
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
            <PageBanner
                category="Industry Solution"
                title={solution.title}
                subtitle={solution.shortDescription}
            />

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
