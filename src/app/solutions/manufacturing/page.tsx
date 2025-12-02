import { PageBanner } from '@/components/shared/PageBanner';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowRight, Factory, Cpu, Truck, BarChart2, ShieldCheck, Zap } from 'lucide-react';

export default function ManufacturingSolutionsPage() {
    return (
        <div className="flex flex-col gap-0">
            <PageBanner
                category="Industry Solutions"
                title="Manufacturing & Industrial"
                subtitle="Smart manufacturing solutions with IoT integration, supply chain optimization, and predictive maintenance systems"
            />

            {/* Overview Section */}
            <Section className="bg-white py-24">
                <div className="max-w-4xl mx-auto">
                    <Heading level={2} className="mb-6">Industry 4.0 and Beyond</Heading>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                        The manufacturing sector is undergoing a digital revolution. We help manufacturers embrace Industry 4.0 technologies to optimize production, reduce downtime, and create smarter, more agile supply chains.
                    </p>
                </div>
            </Section>

            {/* Key Solutions */}
            <Section className="bg-[#FAFAFA] py-24">
                <div className="max-w-6xl mx-auto">
                    <Heading level={2} className="text-center mb-16">Our Manufacturing Solutions</Heading>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Factory,
                                title: 'Smart Factory Solutions',
                                description: 'IoT-enabled systems for real-time monitoring and control of production lines.'
                            },
                            {
                                icon: Zap,
                                title: 'Predictive Maintenance',
                                description: 'AI algorithms to predict equipment failures and schedule maintenance proactively.'
                            },
                            {
                                icon: Truck,
                                title: 'Supply Chain Visibility',
                                description: 'End-to-end tracking and analytics for raw materials and finished goods.'
                            },
                            {
                                icon: Cpu,
                                title: 'Digital Twin Technology',
                                description: 'Virtual replicas of physical systems for simulation and optimization.'
                            },
                            {
                                icon: ShieldCheck,
                                title: 'Quality Control Automation',
                                description: 'Computer vision and AI for automated defect detection and quality assurance.'
                            },
                            {
                                icon: BarChart2,
                                title: 'Production Analytics',
                                description: 'Dashboards and reporting tools for OEE and KPI tracking.'
                            }
                        ].map((solution, index) => {
                            const Icon = solution.icon;
                            return (
                                <div key={index} className="bg-white p-8 rounded-2xl border border-[#E6E6E6] hover:shadow-xl transition-all">
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
            <Section className="bg-white py-24">
                <div className="max-w-4xl mx-auto text-center">
                    <Heading level={2} className="mb-6">Optimize Your Production Today</Heading>
                    <p className="text-lg text-muted-foreground mb-8">
                        Discover how our smart manufacturing solutions can increase efficiency and reduce costs.
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
