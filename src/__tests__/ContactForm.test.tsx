import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ContactForm } from '@/components/shared/ContactForm';

describe('ContactForm', () => {
    it('renders form fields', () => {
        render(<ContactForm />);
        expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
    });

    it('submits the form', async () => {
        render(<ContactForm />);

        fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: 'John' } });
        fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: 'Doe' } });
        fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john@example.com' } });
        fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: 'Hello' } });

        fireEvent.click(screen.getByText(/Send Message/i));

        await waitFor(() => {
            expect(screen.getByText(/Message Sent!/i)).toBeInTheDocument();
        });
    });
});
