import { Metadata } from 'next';
import { client, blogPostsQuery } from '@/lib/sanity';
import seedData from '@/sanity/seed-content.json';
import { InsightsClient } from '@/components/insights/InsightsClient';

export const metadata: Metadata = {
    title: 'Insights & Blog | Premium IT Services',
    description: 'Latest trends, strategies, and insights from our technology experts.',
};

async function getPosts() {
    try {
        const posts = await client.fetch(blogPostsQuery);
        return posts;
    } catch (error) {
        console.warn('Failed to fetch posts from Sanity, using seed data.');
        return seedData.blogPosts;
    }
}

export default async function InsightsPage() {
    const posts = await getPosts();

    return <InsightsClient posts={posts} />;
}
