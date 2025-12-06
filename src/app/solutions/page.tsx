import { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { PageBanner } from '@/components/shared/PageBanner';
import { ServiceCard } from '@/components/shared/ServiceCard';
import { client, solutionsQuery } from '@/lib/sanity';
import seedData from '@/sanity/seed-content.json';
import { Solution } from '@/types';

export const metadata: Metadata = {
    title: 'Industry Solutions | Premium IT Services',
    description: 'Tailored technology solutions for your specific industry challenges.',
};

async function getSolutions() {
    try {
        const solutions = await client.fetch(solutionsQuery);
        return solutions;
    } catch (error) {
        console.warn('Failed to fetch solutions from Sanity, using seed data.');
        return seedData.solutions;
    }
}

export default async function SolutionsPage() {
    const solutions = await getSolutions();

    return (
        <div className="min-h-screen">
            <PageBanner
                category="Industry Solutions"
                title="Specialized Industry Solutions"
                subtitle="Tailored strategies and technologies designed to meet the unique demands of your specific sector."
            />

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {solutions.map((solution: Solution, index: number) => (
                        <ServiceCard
                            key={solution._id || index}
                            index={index}
                            title={solution.title}
                            description={solution.shortDescription || solution.description || ''}
                            iconName={solution.icon}
                            slug={solution.slug.current}
                            href={`/solutions/${solution.slug.current}`}
                        />
                    ))}
                </div>
            </Section>
        </div>
    );
}
