import { HomeBanner } from '@/components/home/HomeBanner';
import { LogoMarquee } from '@/components/home/LogoMarquee';
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
import { ServiceCard } from '@/components/shared/ServiceCard';
import { CaseStudyCard } from '@/components/shared/CaseStudyCard';
import { TestimonialCarousel } from '@/components/shared/TestimonialCarousel';
import { FloatingCTA } from '@/components/shared/FloatingCTA';
import { SectionDivider } from '@/components/ui/SectionDivider';
import { client, servicesQuery, caseStudiesQuery, testimonialsQuery } from '@/lib/sanity';
import { Button, buttonVariants } from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Service, CaseStudy, Testimonial } from '@/types';
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
  } catch (error) {
    // Silently fall back to seed data if Sanity is not configured
    return {
      services: seedData.services,
      caseStudies: seedData.caseStudies,
      testimonials: seedData.testimonials
    };
  }
}

export default async function Home() {
  const { services, caseStudies, testimonials } = await getData();

  return (
    <div className="flex flex-col gap-0 relative">
      <HomeBanner />

      <LogoMarquee />

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
            We're a team of problem-solvers committed to transforming logistics, IT, and customer support services into seamless, technology-driven solutions for businesses worldwide.
          </p>
        </div>
        <SectionDivider type="wave" position="bottom" fill="#23272F" />
      </Section>

      {/* Metrics & Value Prop (Dark Anchor) */}
      <div className="relative">
        <MetricsSection />
        <SectionDivider type="diagonal" position="bottom" fill="#F6F6F6" />
      </div>


      {/* Trust / Testimonials (Dark Anchor) */}
      <Section className="relative bg-[#23272F] text-white overflow-hidden pt-32 pb-32" animate>
        <SectionDivider type="curve" position="top" fill="#FFFFFF" />

        <div className="relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 justify-center mb-6">
              <span className="w-2 h-2 rounded-full bg-accent"></span>
              <span className="text-sm text-accent font-bold uppercase tracking-wider">Client Trust</span>
              <span className="w-2 h-2 rounded-full bg-accent"></span>
            </div>
            <Heading level={2} className="text-white mb-6 text-4xl md:text-5xl">Excellence Delivered</Heading>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Partnering with industry leaders to create lasting value.
            </p>
          </div>
          <TestimonialCarousel testimonials={testimonials} />
        </div>
        <SectionDivider type="diagonal" position="bottom" fill="#FFFFFF" />
      </Section>

      {/* CTA Section (White) */}
      <Section className="relative overflow-hidden bg-white pt-32 pb-32" animate>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="bg-[#F6F6F6] rounded-[2.5rem] p-12 md:p-20 text-center border border-[#E8E6E1] relative overflow-hidden group hover:shadow-2xl transition-shadow duration-500">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/10 transition-colors duration-500" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 group-hover:bg-accent/10 transition-colors duration-500" />

            <div className="relative z-10">
              <Heading level={2} className="mb-6 text-[#242424] text-4xl md:text-5xl">Ready to Scale?</Heading>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
                Let&apos;s discuss how we can engineer your digital future.
              </p>
              <Link href="/contact" className={buttonVariants({ size: 'lg', className: 'bg-accent hover:bg-accent-dark text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all px-12 py-7 text-lg font-semibold rounded-full' })}>
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <TestimonialsSection />

      <ProcessTimeline />

      <TechnologyStack />

      <ConversionCTA />

      <FloatingCTA />
    </div>
  );
}
