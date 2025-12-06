import { MetadataRoute } from 'next';
import { client, servicesQuery, solutionsQuery, caseStudiesQuery, blogPostsQuery, jobsQuery } from '@/lib/sanity';
import seedData from '@/sanity/seed-content.json';
import { Service, Solution, CaseStudy, BlogPost, Job } from '@/types';

const baseUrl = 'https://www.premiumit.com'; // Replace with actual domain

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // Static routes
    const routes = [
        '',
        '/services',
        '/solutions',
        '/case-studies',
        '/about',
        '/careers',
        '/insights',
        '/contact',
        '/privacy',
        '/terms',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic routes
    let services: Service[] = [];
    let solutions: Solution[] = [];
    let caseStudies: CaseStudy[] = [];
    let posts: BlogPost[] = [];
    let jobs: Job[] = [];

    try {
        services = await client.fetch(servicesQuery);
        solutions = await client.fetch(solutionsQuery);
        caseStudies = await client.fetch(caseStudiesQuery);
        posts = await client.fetch(blogPostsQuery);
        jobs = await client.fetch(jobsQuery);
    } catch {
        console.warn('Sitemap: Failed to fetch from Sanity, using seed data');
        services = seedData.services as any;
        solutions = seedData.solutions as any;
        caseStudies = seedData.caseStudies as any;
        posts = seedData.blogPosts as any;
        jobs = seedData.jobs as any;
    }

    const serviceRoutes = services.map((item: Service) => ({
        url: `${baseUrl}/services/${item.slug.current}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    const solutionRoutes = solutions.map((item: Solution) => ({
        url: `${baseUrl}/solutions/${item.slug.current}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    const caseStudyRoutes = caseStudies.map((item: CaseStudy) => ({
        url: `${baseUrl}/case-studies/${item.slug.current}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    const postRoutes = posts.map((item: BlogPost) => ({
        url: `${baseUrl}/insights/${item.slug.current}`,
        lastModified: new Date(item.publishedAt || new Date()),
        changeFrequency: 'weekly' as const,
        priority: 0.6,
    }));

    const jobRoutes = jobs.map((item: Job) => ({
        url: `${baseUrl}/careers/${item.slug.current}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.5,
    }));

    return [
        ...routes,
        ...serviceRoutes,
        ...solutionRoutes,
        ...caseStudyRoutes,
        ...postRoutes,
        ...jobRoutes,
    ];
}
