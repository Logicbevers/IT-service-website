'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from './Button';
import { AlertTriangle } from 'lucide-react';

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Error caught by boundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback;
            }

            return (
                <div className="min-h-[400px] flex items-center justify-center p-8">
                    <div className="text-center max-w-md">
                        <AlertTriangle className="w-16 h-16 text-accent mx-auto mb-4" />
                        <h2 className="text-2xl font-bold text-foreground mb-2">
                            Something went wrong
                        </h2>
                        <p className="text-muted-foreground mb-6">
                            We&apos;re sorry for the inconvenience. Please try refreshing the page.
                        </p>
                        <Button
                            onClick={() => window.location.reload()}
                            className="bg-accent hover:bg-accent-dark text-white"
                        >
                            Refresh Page
                        </Button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
