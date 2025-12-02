import { PageBanner } from '@/components/shared/PageBanner';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowRight, GraduationCap, Video, BookOpen, Users, Award, Calendar } from 'lucide-react';

export default function EducationSolutionsPage() {
    return (
        <div className="flex flex-col gap-0">
            <PageBanner
                category="Industry Solutions"
                title="Education & Training"
                subtitle="Learning management systems, virtual classrooms, and corporate training platforms to empower educational institutions"
            />

            {/* Overview Section */}
            <Section className="bg-white py-24">
                <div className="max-w-4xl mx-auto">
                    <Heading level={2} className="mb-6">Empowering the Future of Learning</Heading>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                        Education is no longer confined to the classroom. We build robust ed-tech platforms that facilitate remote learning, enhance student engagement, and streamline administrative processes for institutions and corporations alike.
                    </p>
                </div>
            </Section>

            {/* Key Solutions */}
            <Section className="bg-[#FAFAFA] py-24">
                <div className="max-w-6xl mx-auto">
                    <Heading level={2} className="text-center mb-16">Our Education Solutions</Heading>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: BookOpen,
                                title: 'Learning Management Systems',
                                description: 'Custom LMS platforms for course delivery, tracking, and reporting.'
                            },
                            {
                                icon: Video,
                                title: 'Virtual Classrooms',
                                description: 'Interactive video conferencing tools integrated with learning materials.'
                            },
                            {
                                icon: Users,
                                title: 'Student Information Systems',
                                description: 'Centralized databases for managing student records and admissions.'
                            },
                            {
                                icon: Award,
                                title: 'Certification Platforms',
                                description: 'Digital credentialing and certification management systems.'
                            },
                            {
                                icon: GraduationCap,
                                title: 'Corporate Training Portals',
                                description: 'Employee development platforms for upskilling and compliance training.'
                            },
                            {
                                icon: Calendar,
                                title: 'Scheduling & Timetabling',
                                description: 'Automated tools for class scheduling and resource allocation.'
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
                    <Heading level={2} className="mb-6">Transform Your Educational Institution</Heading>
                    <p className="text-lg text-muted-foreground mb-8">
                        Let's build a learning environment that inspires and engages.
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
