import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Button, buttonVariants } from '@/components/ui/Button';
import { client, blogPostBySlugQuery, blogPostsQuery } from '@/lib/sanity';
import seedData from '@/sanity/seed-content.json';
import Link from 'next/link';
import { Calendar, User, ArrowLeft, Share2, Tag } from 'lucide-react';

interface Props {
    params: { slug: string };
}

async function getPost(slug: string) {
    try {
        const post = await client.fetch(blogPostBySlugQuery, { slug });
        return post;
    } catch (error) {
        console.warn('Failed to fetch post, using seed data:', error);
        return seedData.blogPosts.find((p: any) => p.slug.current === slug);
    }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const post = await getPost(params.slug);
    if (!post) return { title: 'Article Not Found' };

    return {
        title: `${post.title} | Insights | Premium IT Services`,
        description: post.excerpt,
    };
}

export async function generateStaticParams() {
    try {
        const posts = await client.fetch(blogPostsQuery);
        return posts.map((post: any) => ({
            slug: post.slug.current,
        }));
    } catch (error) {
        return seedData.blogPosts.map((post: any) => ({
            slug: post.slug.current,
        }));
    }
}

export default async function InsightDetailPage({ params }: Props) {
    const post = await getPost(params.slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen">
            <Section className="pb-0 pt-12">
                <div className="max-w-3xl mx-auto">
                    <Link href="/insights" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Insights
                    </Link>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {post.categories?.map((category: string) => (
                            <span key={category} className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
                                {category}
                            </span>
                        ))}
                    </div>

                    <Heading level={1} className="mb-6 text-4xl md:text-5xl leading-tight">{post.title}</Heading>

                    <div className="flex items-center justify-between border-b border-border pb-8 mb-8">
                        <div className="flex items-center gap-4">
                            {post.author?.image ? (
                                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                    <Image src={post.author.image} alt={post.author.name} fill className="object-cover" />
                                </div>
                            ) : (
                                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                                    <User className="text-muted-foreground" />
                                </div>
                            )}
                            <div>
                                <p className="font-medium">{post.author?.name || 'Team Member'}</p>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Calendar className="h-3 w-3" />
                                    <span>{post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : 'Recent'}</span>
                                </div>
                            </div>
                        </div>

                        <button className={buttonVariants({ variant: 'ghost', size: 'icon' })}>
                            <Share2 className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </Section>

            {post.mainImage && (
                <div className="container mx-auto px-4 md:px-6 mb-12">
                    <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
                        <Image
                            src={post.mainImage}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            )}

            <Section className="pt-0">
                <div className="max-w-3xl mx-auto">
                    <div className="prose prose-lg dark:prose-invert">
                        {/* In a real app, render PortableText here */}
                        <p className="lead text-xl text-muted-foreground mb-8">{post.excerpt}</p>

                        {post.body ? (
                            // If body is complex block content, we'd use a PortableText component.
                            // For seed data/demo, we might just have text or we can simulate content.
                            <div dangerouslySetInnerHTML={{ __html: typeof post.body === 'string' ? post.body : '<p>Full article content would be rendered here using PortableText...</p>' }} />
                        ) : (
                            <>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                                <h2>Key Takeaways</h2>
                                <p>
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <ul>
                                    <li>Strategic planning is crucial for digital transformation.</li>
                                    <li>Security should never be an afterthought.</li>
                                    <li>User experience drives adoption and success.</li>
                                </ul>
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                </p>
                            </>
                        )}
                    </div>

                    <div className="mt-16 pt-8 border-t border-border">
                        <Heading level={3} className="mb-6">Related Topics</Heading>
                        <div className="flex flex-wrap gap-2">
                            {post.categories?.map((category: string) => (
                                <Link key={category} href={`/insights?category=${category}`} className={buttonVariants({ variant: 'outline', size: 'sm' })}>
                                    <Tag className="mr-2 h-3 w-3" /> {category}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
