import { render, screen } from '@testing-library/react';
import { Footer } from '@/components/layout/Footer';

describe('Footer', () => {
    it('renders the company name', () => {
        render(<Footer />);
        const companyName = screen.getByText('Premium IT Services');
        expect(companyName).toBeInTheDocument();
    });

    it('renders social links', () => {
        render(<Footer />);
        expect(screen.getByText('LinkedIn')).toBeInTheDocument();
        expect(screen.getByText('Twitter')).toBeInTheDocument();
    });

    it('renders copyright notice', () => {
        render(<Footer />);
        expect(screen.getByText(/All rights reserved/i)).toBeInTheDocument();
    });
});
