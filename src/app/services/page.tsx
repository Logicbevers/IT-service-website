import { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { ServiceCard } from '@/components/shared/ServiceCard';
import { PageBanner } from '@/components/shared/PageBanner';
import { client, servicesQuery } from '@/lib/sanity';
import seedData from '@/sanity/seed-content.json';
import { Service } from '@/types';

export const metadata: Metadata = {
    title: 'Our Services | Premium IT Services',
    description: 'Explore our comprehensive range of IT services and consulting solutions.',
};

async function getServices() {
    try {
        const services = await client.fetch(servicesQuery);
        return services;
    } catch (error) {
        console.warn('Failed to fetch services, using seed data:', error);
        return seedData.services;
    }
}

export default async function ServicesPage() {
    const services = await getServices();

    return (
        <div className="min-h-screen">
            <PageBanner
                category="Our Services"
                title="Comprehensive IT Solutions & Services"
                subtitle="End-to-end technology solutions designed to drive your business forward"
            />

            <Section animate>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service: Service, index: number) => (
                        <ServiceCard
                            key={service._id || index}
                            index={index}
                            title={service.title}
                            description={service.shortDescription || service.description || ''}
                            iconName={service.icon}
                            slug={service.slug.current}
                        />
                    ))}
                </div>
            </Section>
        </div>
    );
}
