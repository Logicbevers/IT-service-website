import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Heading } from '@/components/ui/Heading';
import { Home } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-soft">
            <div className="relative mb-8">
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl animate-pulse" />
                <h1 className="relative text-9xl font-bold text-primary/10 dark:text-white/10">404</h1>
                <div className="absolute inset-0 flex items-center justify-center">
                    <Heading level={1} className="text-4xl md:text-5xl">Page Not Found</Heading>
                </div>
            </div>

            <p className="text-xl text-muted-foreground max-w-md mb-8">
                Oops! The page you&apos;re looking for seems to have wandered off into the digital void.
            </p>

            <div className="flex gap-4">
                <Link href="/">
                    <Button size="lg" className="gap-2">
                        <Home size={20} />
                        Back Home
                    </Button>
                </Link>
                <Link href="/contact">
                    <Button variant="outline" size="lg" className="gap-2">
                        Contact Support
                    </Button>
                </Link>
            </div>
        </div>
    );
}
