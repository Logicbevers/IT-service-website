import { cn } from '@/lib/utils';

interface SkeletonProps {
    className?: string;
    variant?: 'text' | 'circular' | 'rectangular';
}

export function Skeleton({ className, variant = 'rectangular' }: SkeletonProps) {
    return (
        <div
            className={cn(
                'animate-pulse bg-muted',
                variant === 'text' && 'h-4 rounded',
                variant === 'circular' && 'rounded-full',
                variant === 'rectangular' && 'rounded-lg',
                className
            )}
        />
    );
}

export function ServiceCardSkeleton() {
    return (
        <div className="h-full bg-white border border-[#E8E6E1] rounded-3xl p-8 shadow-sm">
            <Skeleton variant="rectangular" className="w-20 h-20 mb-6" />
            <Skeleton variant="text" className="h-8 w-3/4 mb-3" />
            <Skeleton variant="text" className="h-4 w-full mb-2" />
            <Skeleton variant="text" className="h-4 w-5/6 mb-2" />
            <Skeleton variant="text" className="h-4 w-4/6" />
        </div>
    );
}

export function TestimonialSkeleton() {
    return (
        <div className="bg-white border border-[#E8E6E1] rounded-3xl p-14">
            <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                    <Skeleton key={i} variant="circular" className="w-6 h-6" />
                ))}
            </div>
            <Skeleton variant="text" className="h-6 w-full mb-4" />
            <Skeleton variant="text" className="h-6 w-5/6 mb-4" />
            <Skeleton variant="text" className="h-6 w-4/6 mb-10 mx-auto" />
            <div className="flex flex-col items-center gap-4">
                <Skeleton variant="circular" className="w-20 h-20" />
                <Skeleton variant="text" className="h-5 w-32" />
                <Skeleton variant="text" className="h-4 w-24" />
            </div>
        </div>
    );
}
