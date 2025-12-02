import { HomeBanner } from '@/components/home/HomeBanner';
import { LogoMarquee } from '@/components/home/LogoMarquee';
import { ValueProposition } from '@/components/home/ValueProposition';
import { MissionVisionSection } from '@/components/home/MissionVisionSection';
import { IndustryShowcase } from '@/components/home/IndustryShowcase';
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

      {/* Services Preview (Light Gray) */}
      <Section className="relative bg-[#F6F6F6] overflow-hidden pt-32 pb-32" animate>
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-8 h-1 bg-accent rounded-full"></span>
                <span className="text-sm text-accent font-bold uppercase tracking-wider">Our Expertise</span>
              </div>
              <Heading level={2} className="mb-6 text-4xl md:text-5xl text-[#242424]">Comprehensive Solutions</Heading>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                Tailored technology strategies to propel your business forward.
              </p>
            </div>
            <Link href="/services" className={buttonVariants({ variant: 'outline', size: 'lg', className: 'mt-6 md:mt-0 border-accent text-accent hover:bg-accent hover:text-white' })}>
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {/* Logistics Card */}
            <div className="group p-8 rounded-3xl bg-white border border-border hover:border-accent/30 hover:shadow-2xl transition-all duration-300">
              <div className="mb-6">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Strong Logistics & Supply Chain Capability</h3>
                <p className="text-sm text-accent font-semibold mb-4">Delivering reliable, efficient, and optimized logistics operations.</p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our logistics team brings deep industry expertise to ensure seamless execution across every stage of your supply chain. Through structured planning, real-time coordination, and optimized workflows, we help reduce delays, enhance service quality, and improve overall operational efficiency.
                </p>
              </div>
              <Link href="/services/logistics" className="inline-flex items-center text-accent font-semibold hover:gap-3 gap-2 transition-all group/link">
                Learn More
                <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Software Development Card */}
            <div className="group p-8 rounded-3xl bg-white border border-border hover:border-accent/30 hover:shadow-2xl transition-all duration-300">
              <div className="mb-6">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Custom Software Development</h3>
                <p className="text-sm text-accent font-semibold mb-4">Tailored digital solutions that drive business innovation.</p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We build custom software designed around your goals — from automation systems and enterprise platforms to specialized applications. Every solution simplifies complex processes, boosts productivity, and scales effortlessly as your business grows.
                </p>
              </div>
              <Link href="/services/software-development" className="inline-flex items-center text-accent font-semibold hover:gap-3 gap-2 transition-all group/link">
                Learn More
                <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Digital Marketing Card */}
            <div className="group p-8 rounded-3xl bg-white border border-border hover:border-accent/30 hover:shadow-2xl transition-all duration-300">
              <div className="mb-6">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Performance-Focused Digital Marketing</h3>
                <p className="text-sm text-accent font-semibold mb-4">Strategies built to grow your brand and deliver measurable results.</p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our digital marketing team combines SEO, content strategy, paid advertising, and social media expertise to increase your visibility and attract the right audience. We focus on generating high-quality leads that convert into sustained business growth.
                </p>
              </div>
              <Link href="/services/digital-marketing" className="inline-flex items-center text-accent font-semibold hover:gap-3 gap-2 transition-all group/link">
                Learn More
                <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Training Card */}
            <div className="group p-8 rounded-3xl bg-white border border-border hover:border-accent/30 hover:shadow-2xl transition-all duration-300">
              <div className="mb-6">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Professional Training & Skill Development</h3>
                <p className="text-sm text-accent font-semibold mb-4">Industry-ready courses for today's fast-growing careers.</p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We offer practical, job-focused training programs in logistics, IT, digital marketing, and business operations. Each course is built to develop real-world skills that help learners excel, grow, and stay competitive in their careers.
                </p>
              </div>
              <Link href="/services/training" className="inline-flex items-center text-accent font-semibold hover:gap-3 gap-2 transition-all group/link">
                Learn More
                <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Customer-First Card */}
            <div className="group p-8 rounded-3xl bg-white border border-border hover:border-accent/30 hover:shadow-2xl transition-all duration-300">
              <div className="mb-6">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Customer-First Approach</h3>
                <p className="text-sm text-accent font-semibold mb-4">Reliable service backed by trust, clarity, and commitment.</p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We prioritize transparency, communication, and long-term partnership in every project. With a focus on precision and accountability, we ensure smooth delivery and consistent, dependable results for every client.
                </p>
              </div>
              <Link href="/services/customer-first" className="inline-flex items-center text-accent font-semibold hover:gap-3 gap-2 transition-all group/link">
                Learn More
                <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
        <SectionDivider type="wave" position="bottom" fill="#FFFFFF" />
      </Section>

      {/* Case Studies Preview (White) */}
      <Section className="relative bg-white overflow-hidden pt-32 pb-32" animate>
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-8 h-1 bg-accent rounded-full"></span>
                <span className="text-sm text-accent font-bold uppercase tracking-wider">Success Stories</span>
              </div>
              <Heading level={2} className="mb-6 text-4xl md:text-5xl text-[#242424]">Impact in Action</Heading>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                Real results for forward-thinking organizations.
              </p>
            </div>
            <Link href="/case-studies" className={buttonVariants({ variant: 'outline', size: 'lg', className: 'mt-6 md:mt-0 border-accent text-accent hover:bg-accent hover:text-white' })}>
              View All Case Studies
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {caseStudies.slice(0, 2).map((study: CaseStudy, index: number) => (
              <CaseStudyCard
                key={study._id || index}
                index={index}
                title={study.title}
                client={study.client}
                summary={study.summary}
                image={study.mainImage}
                slug={study.slug.current}
                tags={study.tags || []}
              />
            ))}
          </div>
        </div>
      </Section>

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

      <ConversionCTA />

      <FloatingCTA />
    </div>
  );
}
