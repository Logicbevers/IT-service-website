import { PageBanner } from '@/components/shared/PageBanner';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowRight, ShoppingBag, BarChart, Smartphone, Globe, Users, CreditCard } from 'lucide-react';

export default function RetailSolutionsPage() {
    return (
        <div className="flex flex-col gap-0">
            <PageBanner
                category="Industry Solutions"
                title="Retail & E-Commerce"
                subtitle="End-to-end solutions for online and offline retail, including inventory management, customer analytics, and omnichannel experiences"
            />

            {/* Overview Section */}
            <Section className="bg-white py-24">
                <div className="max-w-4xl mx-auto">
                    <Heading level={2} className="mb-6">Reimagining Retail for the Digital Age</Heading>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                        The retail landscape is evolving rapidly. Customers expect seamless experiences across all channels. Our solutions help retailers integrate their physical and digital operations, personalize customer interactions, and optimize their supply chains for maximum efficiency.
                    </p>
                </div>
            </Section>

            {/* Key Solutions */}
            <Section className="bg-[#FAFAFA] py-24">
                <div className="max-w-6xl mx-auto">
                    <Heading level={2} className="text-center mb-16">Our Retail Solutions</Heading>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: ShoppingBag,
                                title: 'Omnichannel Commerce',
                                description: 'Unified platforms connecting in-store, online, and mobile shopping experiences.'
                            },
                            {
                                icon: BarChart,
                                title: 'Customer Analytics',
                                description: 'AI-driven insights to understand behavior and personalize marketing.'
                            },
                            {
                                icon: Smartphone,
                                title: 'Mobile POS Systems',
                                description: 'Modern point-of-sale solutions for flexible and efficient checkout.'
                            },
                            {
                                icon: Globe,
                                title: 'E-Commerce Platforms',
                                description: 'Scalable online stores built for performance and conversion.'
                            },
                            {
                                icon: Users,
                                title: 'Loyalty Programs',
                                description: 'Digital loyalty solutions to increase retention and customer lifetime value.'
                            },
                            {
                                icon: CreditCard,
                                title: 'Payment Integration',
                                description: 'Secure and diverse payment gateway integrations for global transactions.'
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
                    <Heading level={2} className="mb-6">Ready to Grow Your Retail Business?</Heading>
                    <p className="text-lg text-muted-foreground mb-8">
                        Let's discuss how we can help you create exceptional shopping experiences.
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
