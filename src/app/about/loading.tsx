import { Skeleton } from "@/components/ui/Skeleton";
import { Section } from "@/components/ui/Section";

export default function Loading() {
    return (
        <div className="min-h-screen">
            {/* Hero Skeleton */}
            <Section className="bg-muted/30 py-20">
                <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
                    <Skeleton className="h-12 w-48 mb-6" />
                    <Skeleton className="h-6 w-3/4" />
                </div>
            </Section>

            {/* Mission Skeleton */}
            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <Skeleton className="h-10 w-40 mb-6" />
                        <Skeleton className="h-24 w-full mb-6" />
                        <div className="space-y-4">
                            <Skeleton className="h-12 w-full rounded-xl" />
                            <Skeleton className="h-12 w-full rounded-xl" />
                            <Skeleton className="h-12 w-full rounded-xl" />
                        </div>
                    </div>
                    <Skeleton className="h-[400px] w-full rounded-3xl" />
                </div>
            </Section>

            {/* Team Grid Skeleton */}
            <Section>
                <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col items-center">
                    <Skeleton className="h-10 w-64 mb-4" />
                    <Skeleton className="h-6 w-3/4" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="space-y-4">
                            <Skeleton className="h-80 w-full rounded-2xl" />
                            <div className="space-y-2">
                                <Skeleton className="h-6 w-3/4" />
                                <Skeleton className="h-4 w-1/2" />
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
