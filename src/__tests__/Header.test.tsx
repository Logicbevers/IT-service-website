import { render, screen } from '@testing-library/react';
import { Header } from '@/components/layout/Header';

// Mock usePathname
jest.mock('next/navigation', () => ({
    usePathname: () => '/',
}));

describe('Header', () => {
    it('renders the logo', () => {
        render(<Header />);
        const logo = screen.getByText('Premium IT');
        expect(logo).toBeInTheDocument();
    });

    it('renders navigation links', () => {
        render(<Header />);
        expect(screen.getByText('Services')).toBeInTheDocument();
        expect(screen.getByText('Solutions')).toBeInTheDocument();
        expect(screen.getByText('Case Studies')).toBeInTheDocument();
        expect(screen.getByText('About')).toBeInTheDocument();
    });
});
