import { PageBanner } from '@/components/shared/PageBanner';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowRight, Plane, Map, Package, Clock, BarChart, Truck } from 'lucide-react';

export default function LogisticsSolutionsPage() {
    return (
        <div className="flex flex-col gap-0">
            <PageBanner
                category="Industry Solutions"
                title="Logistics & Transportation"
                subtitle="Advanced logistics solutions including route optimization, fleet management, and real-time tracking systems"
            />

            {/* Overview Section */}
            <Section className="bg-background py-24">
                <div className="max-w-4xl mx-auto">
                    <Heading level={2} className="mb-6">Moving the World Efficiently</Heading>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                        In the fast-paced world of logistics, efficiency and visibility are paramount. Our solutions provide real-time insights, optimize complex operations, and ensure that goods reach their destinations on time and cost-effectively.
                    </p>
                </div>
            </Section>

            {/* Key Solutions */}
            <Section className="bg-muted/30 py-24">
                <div className="max-w-6xl mx-auto">
                    <Heading level={2} className="text-center mb-16">Our Logistics Solutions</Heading>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Map,
                                title: 'Route Optimization',
                                description: 'AI-powered routing to minimize fuel consumption and delivery times.'
                            },
                            {
                                icon: Truck,
                                title: 'Fleet Management',
                                description: 'Comprehensive systems for vehicle tracking, maintenance, and driver performance.'
                            },
                            {
                                icon: Package,
                                title: 'Warehouse Management (WMS)',
                                description: 'Digital solutions for inventory tracking, picking, and packing optimization.'
                            },
                            {
                                icon: Clock,
                                title: 'Real-Time Tracking',
                                description: 'End-to-end visibility for shipments with automated status updates.'
                            },
                            {
                                icon: Plane,
                                title: 'Freight Forwarding Systems',
                                description: 'Platforms for managing international shipments and documentation.'
                            },
                            {
                                icon: BarChart,
                                title: 'Supply Chain Analytics',
                                description: 'Data-driven insights to identify bottlenecks and improve efficiency.'
                            }
                        ].map((solution, index) => {
                            const Icon = solution.icon;
                            return (
                                <div key={index} className="bg-card p-8 rounded-2xl border border-border hover:shadow-xl transition-all">
                                    <div className="w-16 h-16 bg-[#F6A400]/10 rounded-xl flex items-center justify-center mb-6">
                                        <Icon className="w-8 h-8 text-[#F6A400]" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                                    <p className="text-muted-foreground">{solution.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Section>

            {/* CTA Section */}
            <Section className="bg-background py-24">
                <div className="max-w-4xl mx-auto text-center">
                    <Heading level={2} className="mb-6">Streamline Your Logistics Operations</Heading>
                    <p className="text-lg text-muted-foreground mb-8">
                        Partner with us to build a smarter, more resilient supply chain.
                    </p>
                    <Link href="/contact">
                        <Button size="lg" className="bg-[#F6A400] hover:bg-[#E98000]">
                            Schedule a Consultation
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                </div>
            </Section>
        </div>
    );
}
