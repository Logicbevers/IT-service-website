import { HomeBanner } from '@/components/home/HomeBanner';

import { ValueProposition } from '@/components/home/ValueProposition';
import { MissionVisionSection } from '@/components/home/MissionVisionSection';
import { IndustryShowcase } from '@/components/home/IndustryShowcase';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { ProcessTimeline } from '@/components/home/ProcessTimeline';
import { TechnologyStack } from '@/components/home/TechnologyStack';
import { ConversionCTA } from '@/components/home/ConversionCTA';
import { MetricsSection } from '@/components/home/MetricsSection';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { FloatingCTA } from '@/components/shared/FloatingCTA';
import { SectionDivider } from '@/components/ui/SectionDivider';
import { client, servicesQuery, caseStudiesQuery, testimonialsQuery } from '@/lib/sanity';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NRT Groups - Building the Future of Business & Innovation',
  description: 'Empowering organizations with integrated solutions in technology, logistics, digital transformation, and skill development. 500+ projects delivered, 50+ global clients, 15+ years of excellence.',
  keywords: ['IT solutions', 'logistics', 'digital transformation', 'software development', 'training', 'enterprise solutions', 'NRT Groups'],
  openGraph: {
    title: 'NRT Groups - Building the Future of Business & Innovation',
    description: 'Empowering organizations with integrated solutions in technology, logistics, digital transformation, and skill development.',
    type: 'website',
  },
};

// Fallback data in case CMS is not connected
import seedData from '@/sanity/seed-content.json';

async function getData() {
  try {
    const services = await client.fetch(servicesQuery);
    const caseStudies = await client.fetch(caseStudiesQuery);
    const testimonials = await client.fetch(testimonialsQuery);
    return { services, caseStudies, testimonials };
  } catch {
    // Silently fall back to seed data if Sanity is not configured
    return {
      services: seedData.services,
      caseStudies: seedData.caseStudies,
      testimonials: seedData.testimonials
    };
  }
}

export default async function Home() {
  await getData();

  return (
    <div className="flex flex-col gap-0 relative">
      <HomeBanner />



      <ValueProposition />

      <MissionVisionSection />

      <IndustryShowcase />

      {/* About Section */}
      <Section className="relative bg-white overflow-hidden pt-32 pb-32" animate>
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-8 h-1 bg-accent rounded-full"></span>
            <span className="text-sm text-accent font-bold uppercase tracking-wider">Who We Are</span>
          </div>
          <Heading level={2} className="mb-8 text-4xl md:text-5xl text-[#242424]">
            Your One-Stop Partner for Smart Business Solutions
          </Heading>
          <p className="text-xl text-muted-foreground leading-relaxed mb-6 max-w-4xl mx-auto">
            At NRT Groups, our mission is to empower businesses with smarter operations by combining cutting-edge technology, logistics expertise, and customer-centric solutions. We believe in making complex processes simple, transparent, and efficient—helping companies deliver more value to their customers while reducing operational stress.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            We&apos;re a team of problem-solvers committed to transforming logistics, IT, and customer support services into seamless, technology-driven solutions for businesses worldwide.
          </p>
        </div>
        <SectionDivider type="wave" position="bottom" fill="#23272F" />
      </Section>

      {/* Metrics & Value Prop (Dark Anchor) */}
      <div className="relative">
        <MetricsSection />
        <SectionDivider type="diagonal" position="bottom" fill="#F6F6F6" />
      </div>



      <TestimonialsSection />

      <ProcessTimeline />

      <TechnologyStack />

      <ConversionCTA />

      <FloatingCTA />
    </div>
  );
}
