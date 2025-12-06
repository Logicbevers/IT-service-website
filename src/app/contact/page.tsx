import { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { PageBanner } from '@/components/shared/PageBanner';
import { ContactForm } from '@/components/shared/ContactForm';
import { Mail, Phone, MapPin, Clock, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Contact Us | Premium IT Services',
    description: 'Get in touch with our team to discuss your technology needs.',
};

export default function ContactPage() {
    return (
        <div className="min-h-screen">
            <PageBanner
                category="Get in Touch"
                title="Contact Us"
                subtitle="Have a project in mind? We'd love to hear from you."
            />

            <Section animate>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <Heading level={2} className="mb-6">Contact Information</Heading>
                        <p className="text-muted-foreground mb-8 text-lg">
                            Fill out the form and our team will get back to you within 24 hours.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-5 group">
                                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0 text-accent group-hover:scale-110 transition-transform duration-300">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold mb-1 text-lg">Email</h3>
                                    <p className="text-muted-foreground hover:text-accent transition-colors cursor-pointer">Operations@nrtgroups.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5 group">
                                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0 text-accent group-hover:scale-110 transition-transform duration-300">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold mb-1 text-lg">Phone</h3>
                                    <p className="text-muted-foreground hover:text-accent transition-colors cursor-pointer">+919779369555</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5 group">
                                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0 text-accent group-hover:scale-110 transition-transform duration-300">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold mb-1 text-lg">Office</h3>
                                    <p className="text-muted-foreground">
                                        E-43, Phase-8, Phase 8<br />
                                        Sahibzada Ajit Singh Nagar<br />
                                        Punjab 160071
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5 group">
                                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0 text-accent group-hover:scale-110 transition-transform duration-300">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold mb-1 text-lg">Hours</h3>
                                    <p className="text-muted-foreground">
                                        Mon-Fri: 9am - 6pm PST<br />
                                        Sat-Sun: Closed
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-accent opacity-5 rounded-3xl blur-xl" />
                        <div className="relative">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </Section>

            <Section className="bg-muted/30" animate>
                <div className="text-center max-w-2xl mx-auto">
                    <Heading level={2} className="mb-4">Frequently Asked Questions</Heading>
                    <p className="text-muted-foreground mb-10">
                        Can't find the answer you're looking for? Reach out to our support team.
                    </p>

                    <div className="text-left space-y-4">
                        <div className="bg-card p-6 rounded-2xl border border-border hover:border-accent/30 transition-all hover:shadow-soft">
                            <h3 className="font-bold mb-2 text-lg">How quickly do you respond?</h3>
                            <p className="text-muted-foreground">We aim to respond to all inquiries within 24 business hours.</p>
                        </div>
                        <div className="bg-card p-6 rounded-2xl border border-border hover:border-accent/30 transition-all hover:shadow-soft">
                            <h3 className="font-bold mb-2 text-lg">Do you offer free consultations?</h3>
                            <p className="text-muted-foreground">Yes, we offer a free initial 30-minute consultation to discuss your project needs.</p>
                        </div>
                        <div className="bg-card p-6 rounded-2xl border border-border hover:border-accent/30 transition-all hover:shadow-soft">
                            <h3 className="font-bold mb-2 text-lg">What industries do you serve?</h3>
                            <p className="text-muted-foreground">We specialize in Healthcare, Finance, and Retail, but have experience across many sectors.</p>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
