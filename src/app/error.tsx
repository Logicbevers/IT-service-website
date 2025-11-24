'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { Heading } from '@/components/ui/Heading';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-soft">
            <div className="w-20 h-20 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mb-6 text-red-600 dark:text-red-400">
                <AlertTriangle size={40} />
            </div>

            <Heading level={1} className="mb-4 text-3xl md:text-4xl">Something went wrong!</Heading>

            <p className="text-xl text-muted-foreground max-w-md mb-8">
                We apologize for the inconvenience. An unexpected error has occurred.
            </p>

            <div className="flex gap-4">
                <Button onClick={() => reset()} size="lg" className="gap-2">
                    <RefreshCw size={20} />
                    Try Again
                </Button>
                <Button variant="outline" size="lg" onClick={() => window.location.href = '/'}>
                    Back Home
                </Button>
            </div>
        </div>
    );
}
