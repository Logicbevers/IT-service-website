import { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';

export const metadata: Metadata = {
    title: 'Terms of Service | Premium IT Services',
    description: 'The terms and conditions governing the use of our website and services.',
};

export default function TermsPage() {
    return (
        <div className="min-h-screen">
            <Section className="bg-muted/30 py-16">
                <div className="max-w-3xl mx-auto text-center">
                    <Heading level={1} className="mb-4">Terms of Service</Heading>
                    <p className="text-muted-foreground">Last Updated: January 1, 2024</p>
                </div>
            </Section>

            <Section>
                <div className="max-w-3xl mx-auto prose prose-lg dark:prose-invert">
                    <h3>1. Agreement to Terms</h3>
                    <p>
                        These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity (&quot;you&quot;) and Premium IT Services (&quot;we,&quot; &quot;us&quot; or &quot;our&quot;), concerning your access to and use of the website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the &quot;Site&quot;).
                    </p>
                    <p>
                        You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these Terms of Service. If you do not agree with all of these Terms of Service, then you are expressly prohibited from using the Site and you must discontinue use immediately.
                    </p>

                    <h3>2. Intellectual Property Rights</h3>
                    <p>
                        Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the &quot;Content&quot;) and the trademarks, service marks, and logos contained therein (the &quot;Marks&quot;) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights.
                    </p>

                    <h3>3. User Representations</h3>
                    <p>
                        By using the Site, you represent and warrant that:
                    </p>
                    <ul>
                        <li>All registration information you submit will be true, accurate, current, and complete.</li>
                        <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
                        <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
                        <li>You are not a minor in the jurisdiction in which you reside.</li>
                    </ul>

                    <h3>4. Prohibited Activities</h3>
                    <p>
                        You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
                    </p>

                    <h3>5. Contact Us</h3>
                    <p>
                        In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
                    </p>
                    <p>
                        Premium IT Services<br />
                        123 Tech Blvd<br />
                        San Francisco, CA 94105<br />
                        hello@premiumit.com
                    </p>
                </div>
            </Section>
        </div>
    );
}
