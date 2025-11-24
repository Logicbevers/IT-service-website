import { render, screen } from '@testing-library/react';
import { Hero } from '@/components/home/Hero';

describe('Hero', () => {
    it('renders the main headline', () => {
        render(<Hero />);
        const headline = screen.getByText(/Transforming Business/i);
        expect(headline).toBeInTheDocument();
    });

    it('renders the CTA button', () => {
        render(<Hero />);
        const button = screen.getByText(/Get Started/i);
        expect(button).toBeInTheDocument();
    });
});
