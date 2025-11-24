import { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { ContactForm } from '@/components/shared/ContactForm';
import { Mail, Phone, MapPin, Clock, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Contact Us | Premium IT Services',
    description: 'Get in touch with our team to discuss your technology needs.',
};

export default function ContactPage() {
    return (
        <div className="min-h-screen">
            <Section className="relative bg-gradient-soft py-24 overflow-hidden" animate>
                {/* Decorative Background */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                <div className="max-w-3xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-accent/20 mb-6">
                        <Sparkles className="w-4 h-4 text-accent" />
                        <span className="text-sm text-accent font-semibold">Get in Touch</span>
                    </div>
                    <Heading level={1} className="mb-6 text-4xl md:text-5xl">Contact Us</Heading>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Have a project in mind? We'd love to hear from you.
                    </p>
                </div>
            </Section>

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
                                    <p className="text-muted-foreground hover:text-accent transition-colors cursor-pointer">hello@premiumit.com</p>
                                    <p className="text-muted-foreground hover:text-accent transition-colors cursor-pointer">support@premiumit.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5 group">
                                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0 text-accent group-hover:scale-110 transition-transform duration-300">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold mb-1 text-lg">Phone</h3>
                                    <p className="text-muted-foreground hover:text-accent transition-colors cursor-pointer">+1 (555) 123-4567</p>
                                    <p className="text-muted-foreground hover:text-accent transition-colors cursor-pointer">+1 (555) 987-6543</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5 group">
                                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0 text-accent group-hover:scale-110 transition-transform duration-300">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold mb-1 text-lg">Office</h3>
                                    <p className="text-muted-foreground">
                                        123 Tech Blvd<br />
                                        San Francisco, CA 94105<br />
                                        United States
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
