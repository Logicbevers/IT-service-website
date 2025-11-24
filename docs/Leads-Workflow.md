# Leads Workflow

## Overview

Lead generation is a critical part of the website. The flow is as follows:

1.  **User Interaction**: User fills out the contact form on \`/contact\`.
2.  **API Submission**: Data is POSTed to \`/api/leads\`.
3.  **Validation**: Server-side validation checks for required fields.
4.  **Database**: Lead is stored in Supabase (simulated in demo).
5.  **Notification**: Email notification is sent via SendGrid (simulated in demo).
6.  **Response**: Success message is returned to the client.

## API Endpoint

\`POST /api/leads\`

**Payload:**
\`\`\`json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "company": "Acme Inc",
  "message": "Hello..."
}
\`\`\`

**Response:**
\`\`\`json
{
  "message": "Lead submitted successfully",
  "id": "123"
}
\`\`\`
