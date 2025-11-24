import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Validate body (simple validation)
        if (!body.email || !body.firstName || !body.lastName || !body.message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Simulate database insertion (Supabase)
        console.log('Simulating Supabase insertion:', body);

        // Simulate email sending (SendGrid)
        console.log('Simulating SendGrid email:', {
            to: 'admin@premiumit.com',
            subject: 'New Lead Received',
            body: `New lead from ${body.firstName} ${body.lastName} (${body.email}): ${body.message}`
        });

        // Simulate delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        return NextResponse.json(
            { message: 'Lead submitted successfully', id: 'demo-id-123' },
            { status: 201 }
        );
    } catch (error) {
        console.error('Error processing lead:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
