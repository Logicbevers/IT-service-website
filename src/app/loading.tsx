import { Skeleton } from "@/components/ui/Skeleton";
import { Section } from "@/components/ui/Section";

export default function Loading() {
    return (
        <div className="min-h-screen">
            {/* Hero Skeleton */}
            <div className="h-[600px] w-full bg-muted/10 animate-pulse relative overflow-hidden">
                <div className="container mx-auto px-4 h-full flex flex-col justify-center">
                    <Skeleton className="h-12 w-3/4 max-w-2xl mb-6" />
                    <Skeleton className="h-6 w-1/2 max-w-xl mb-8" />
                    <div className="flex gap-4">
                        <Skeleton className="h-12 w-40 rounded-full" />
                        <Skeleton className="h-12 w-40 rounded-full" />
                    </div>
                </div>
            </div>

            {/* Metrics Skeleton */}
            <Section>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <Skeleton className="h-16 w-16 rounded-full mb-4" />
                            <Skeleton className="h-8 w-24 mb-2" />
                            <Skeleton className="h-4 w-32" />
                        </div>
                    ))}
                </div>
            </Section>

            {/* Content Grid Skeleton */}
            <Section className="bg-muted/5">
                <div className="mb-12">
                    <Skeleton className="h-10 w-64 mb-4" />
                    <Skeleton className="h-6 w-96" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="space-y-4">
                            <Skeleton className="h-64 w-full rounded-2xl" />
                            <Skeleton className="h-6 w-3/4" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-2/3" />
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
