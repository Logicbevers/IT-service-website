import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Button, buttonVariants } from '@/components/ui/Button';
import { client, serviceBySlugQuery, servicesQuery } from '@/lib/sanity';
import seedData from '@/sanity/seed-content.json';
import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Service } from '@/types';

interface Props {
    params: { slug: string };
}

async function getService(slug: string) {
    try {
        const service = await client.fetch(serviceBySlugQuery, { slug });
        return service;
    } catch (error) {
        console.warn('Failed to fetch service, using seed data:', error);
        // @ts-ignore
        return seedData.services.find((s: any) => s.slug.current === slug);
    }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const service = await getService(params.slug);
    if (!service) return { title: 'Service Not Found' };

    return {
        title: `${service.title} | Premium IT Services`,
        description: service.shortDescription,
    };
}

export async function generateStaticParams() {
    try {
        const services = await client.fetch(servicesQuery);
        return services.map((service: Service) => ({
            slug: service.slug.current,
        }));
    } catch (error) {
        return seedData.services.map((service: any) => ({
            slug: service.slug.current,
        }));
    }
}

export default async function ServiceDetailPage({ params }: Props) {
    const service = await getService(params.slug);

    if (!service) {
        notFound();
    }

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-primary text-primary-foreground py-24 overflow-hidden">
                <div className="absolute inset-0 bg-accent/10" />
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-3xl">
                        <Heading level={1} className="mb-6 text-white">{service.title}</Heading>
                        <p className="text-xl text-gray-300 mb-8">{service.shortDescription}</p>
                        <Link href="/contact" className={buttonVariants({ size: 'lg', variant: 'secondary' })}>
                            Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>

            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <Heading level={2} className="mb-6">Overview</Heading>
                        <div className="prose prose-lg dark:prose-invert mb-8">
                            {/* In a real app, use PortableText here. For demo/seed, we might have strings or blocks. 
                  Assuming simple text or mapping blocks for now if complex. 
                  For seed data it's likely just text or simple structure. 
              */}
                            <p>{service.description ? (Array.isArray(service.description) ? 'Detailed description content...' : service.description) : service.shortDescription}</p>
                        </div>

                        <div className="mb-8">
                            <Heading level={3} className="mb-4">Key Features</Heading>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {service.features?.map((feature: string, idx: number) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        <CheckCircle className="text-accent mt-1 flex-shrink-0" size={20} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <Heading level={3} className="mb-4">Benefits</Heading>
                            <ul className="space-y-3">
                                {service.benefits?.map((benefit: string, idx: number) => (
                                    <li key={idx} className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-accent" />
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                        {service.mainImage ? (
                            <Image
                                src={service.mainImage}
                                alt={service.title}
                                fill
                                className="object-cover"
                            />
                        ) : (
                            <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">
                                No Image Available
                            </div>
                        )}
                    </div>
                </div>
            </Section>

            <Section className="bg-muted/30">
                <div className="text-center max-w-2xl mx-auto">
                    <Heading level={2} className="mb-4">Ready to get started?</Heading>
                    <p className="text-muted-foreground mb-8">
                        Contact us today to discuss how our {service.title} services can help your business grow.
                    </p>
                    <Link href="/contact" className={buttonVariants({ size: 'lg' })}>
                        Contact Us
                    </Link>
                </div>
            </Section>
        </div>
    );
}
