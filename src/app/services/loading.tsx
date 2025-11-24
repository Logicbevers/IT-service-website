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

            {/* Services Grid Skeleton */}
            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="h-full border border-border rounded-3xl p-8 space-y-4">
                            <Skeleton className="h-16 w-16 rounded-2xl mb-4" />
                            <Skeleton className="h-8 w-3/4 mb-2" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-5/6" />
                            <Skeleton className="h-4 w-1/2 mt-4" />
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
