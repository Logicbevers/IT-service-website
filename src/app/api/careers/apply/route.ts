import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        // In a real app, this would likely handle multipart/form-data for file uploads (resume)
        // For this demo, we'll assume JSON or simple form data
        const body = await request.json();

        if (!body.email || !body.name || !body.jobId) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        console.log('Simulating Job Application:', body);

        // Simulate delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        return NextResponse.json(
            { message: 'Application received successfully', id: 'app-id-456' },
            { status: 201 }
        );
    } catch (error) {
        console.error('Error processing application:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}

export async function GET(request: Request) {
    // Simple GET to test the route or return info
    return NextResponse.json({ message: 'Apply endpoint ready' });
}
