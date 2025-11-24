import { Skeleton } from "@/components/ui/Skeleton";
import { Section } from "@/components/ui/Section";

export default function Loading() {
    return (
        <div className="min-h-screen">
            {/* Hero Skeleton */}
            <Section className="bg-muted/30 py-20">
                <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
                    <Skeleton className="h-8 w-32 rounded-full mb-6" />
                    <Skeleton className="h-12 w-64 mb-6" />
                    <Skeleton className="h-6 w-3/4" />
                </div>
            </Section>

            {/* Filters Skeleton */}
            <Section className="py-8 border-b border-border">
                <div className="flex justify-center gap-3">
                    {[...Array(5)].map((_, i) => (
                        <Skeleton key={i} className="h-10 w-24 rounded-full" />
                    ))}
                </div>
            </Section>

            {/* Blog Grid Skeleton */}
            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="space-y-4">
                            <Skeleton className="h-64 w-full rounded-2xl" />
                            <div className="flex gap-2">
                                <Skeleton className="h-6 w-20 rounded-full" />
                                <Skeleton className="h-6 w-24 rounded-full" />
                            </div>
                            <Skeleton className="h-8 w-full" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-2/3" />
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
