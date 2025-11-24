import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Verify signature (mock)
        const signature = request.headers.get('x-slack-signature');
        if (!signature) {
            // In production, verify this!
            console.warn('Missing Slack signature');
        }

        console.log('Received Slack Webhook:', body);

        // Handle different event types
        if (body.type === 'url_verification') {
            return NextResponse.json({ challenge: body.challenge });
        }

        return NextResponse.json({ received: true }, { status: 200 });
    } catch (error) {
        console.error('Error processing webhook:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
