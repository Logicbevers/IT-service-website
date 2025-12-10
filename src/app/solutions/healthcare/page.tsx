import { PageBanner } from '@/components/shared/PageBanner';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowRight, Heart, Activity, Pill, Users, Shield, TrendingUp } from 'lucide-react';

export default function HealthcareSolutionsPage() {
    return (
        <div className="flex flex-col gap-0">
            <PageBanner
                category="Industry Solutions"
                title="Healthcare & Life Sciences"
                subtitle="Digital transformation solutions for hospitals, clinics, and pharmaceutical companies to improve patient care and operational efficiency"
            />

            {/* Overview Section */}
            <Section className="bg-background py-24">
                <div className="max-w-4xl mx-auto">
                    <Heading level={2} className="mb-6">Transforming Healthcare Through Technology</Heading>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                        The healthcare industry faces unique challenges in managing patient data, ensuring compliance, and delivering quality care. Our comprehensive solutions help healthcare organizations modernize their operations, improve patient outcomes, and reduce costs.
                    </p>
                </div>
            </Section>

            {/* Key Solutions */}
            <Section className="bg-muted/30 py-24">
                <div className="max-w-6xl mx-auto">
                    <Heading level={2} className="text-center mb-16">Our Healthcare Solutions</Heading>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Activity,
                                title: 'Electronic Health Records (EHR)',
                                description: 'Comprehensive EHR systems for seamless patient data management and interoperability.'
                            },
                            {
                                icon: Users,
                                title: 'Patient Portal Solutions',
                                description: 'Secure patient portals for appointment scheduling, test results, and communication.'
                            },
                            {
                                icon: Pill,
                                title: 'Pharmacy Management',
                                description: 'Integrated pharmacy systems for prescription management and inventory control.'
                            },
                            {
                                icon: Shield,
                                title: 'HIPAA Compliance',
                                description: 'Security solutions ensuring full compliance with healthcare regulations.'
                            },
                            {
                                icon: TrendingUp,
                                title: 'Healthcare Analytics',
                                description: 'Data analytics platforms for insights into patient outcomes and operations.'
                            },
                            {
                                icon: Heart,
                                title: 'Telemedicine Platforms',
                                description: 'Virtual care solutions enabling remote consultations and monitoring.'
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
                    <Heading level={2} className="mb-6">Ready to Transform Your Healthcare Operations?</Heading>
                    <p className="text-lg text-muted-foreground mb-8">
                        Let's discuss how our healthcare solutions can help you improve patient care and operational efficiency.
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
