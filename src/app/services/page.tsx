import { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { ServiceCard } from '@/components/shared/ServiceCard';
import { client, servicesQuery } from '@/lib/sanity';
import seedData from '@/sanity/seed-content.json';
import { Service } from '@/types';
import { Sparkles } from 'lucide-react';

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
            <Section className="relative bg-gradient-soft py-24 overflow-hidden" animate>
                {/* Decorative Background */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                <div className="max-w-3xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-accent/20 mb-6">
                        <Sparkles className="w-4 h-4 text-accent" />
                        <span className="text-sm text-accent font-semibold">What We Do</span>
                    </div>
                    <Heading level={1} className="mb-6 text-4xl md:text-5xl">Our Services</Heading>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        We provide end-to-end technology solutions to help your business thrive in the digital age.
                    </p>
                </div>
            </Section>

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
