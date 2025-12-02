import { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { PageBanner } from '@/components/shared/PageBanner';
import { CaseStudyCard } from '@/components/shared/CaseStudyCard';
import { client, caseStudiesQuery } from '@/lib/sanity';
import seedData from '@/sanity/seed-content.json';

export const metadata: Metadata = {
    title: 'Case Studies | Premium IT Services',
    description: 'Real-world examples of how we help businesses transform and grow.',
};

async function getCaseStudies() {
    try {
        const caseStudies = await client.fetch(caseStudiesQuery);
        return caseStudies;
    } catch (error) {
        console.warn('Failed to fetch case studies, using seed data:', error);
        return seedData.caseStudies;
    }
}

export default async function CaseStudiesPage() {
    const caseStudies = await getCaseStudies();

    return (
        <div className="min-h-screen">
            <PageBanner
                category="Success Stories"
                title="Case Studies"
                subtitle="See how we've helped leading organizations achieve their technology goals."
            />

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {caseStudies.map((study: any, index: number) => (
                        <CaseStudyCard
                            key={study._id || index}
                            index={index}
                            title={study.title}
                            client={study.client}
                            summary={study.summary}
                            image={study.mainImage}
                            tags={study.tags}
                            slug={study.slug.current}
                        />
                    ))}
                </div>
            </Section>
        </div>
    );
}
