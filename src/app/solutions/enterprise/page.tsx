import { PageBanner } from '@/components/shared/PageBanner';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowRight, Building2, Database, Shield, Briefcase, PieChart, Globe } from 'lucide-react';

export default function EnterpriseSolutionsPage() {
    return (
        <div className="flex flex-col gap-0">
            <PageBanner
                category="Industry Solutions"
                title="Enterprise & Corporate"
                subtitle="Custom enterprise solutions for large organizations including ERP, CRM, and business intelligence platforms"
            />

            {/* Overview Section */}
            <Section className="bg-white py-24">
                <div className="max-w-4xl mx-auto">
                    <Heading level={2} className="mb-6">Scalable Solutions for Global Enterprises</Heading>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                        Large organizations require robust, scalable, and secure technology infrastructures. We design and implement enterprise-grade solutions that streamline complex workflows, break down data silos, and drive strategic decision-making.
                    </p>
                </div>
            </Section>

            {/* Key Solutions */}
            <Section className="bg-[#FAFAFA] py-24">
                <div className="max-w-6xl mx-auto">
                    <Heading level={2} className="text-center mb-16">Our Enterprise Solutions</Heading>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Database,
                                title: 'ERP Systems',
                                description: 'Integrated Enterprise Resource Planning for finance, HR, and operations.'
                            },
                            {
                                icon: Users,
                                title: 'CRM Platforms',
                                description: 'Customer Relationship Management solutions to boost sales and service.'
                            },
                            {
                                icon: PieChart,
                                title: 'Business Intelligence',
                                description: 'Analytics and reporting tools for data-driven strategic planning.'
                            },
                            {
                                icon: Shield,
                                title: 'Cybersecurity',
                                description: 'Advanced security frameworks to protect enterprise assets and data.'
                            },
                            {
                                icon: Briefcase,
                                title: 'Workflow Automation',
                                description: 'BPA tools to reduce manual tasks and improve operational efficiency.'
                            },
                            {
                                icon: Globe,
                                title: 'Digital Transformation',
                                description: 'Holistic strategies to modernize legacy systems and processes.'
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
                    <Heading level={2} className="mb-6">Future-Proof Your Enterprise</Heading>
                    <p className="text-lg text-muted-foreground mb-8">
                        Let's build the digital foundation for your organization's next chapter of growth.
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

import { Users } from 'lucide-react';
