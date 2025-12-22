# API Documentation

This document describes the API endpoints available in the website.

## Table of Contents

- [Overview](#overview)
- [Contact Form API](#contact-form-api)
- [Setup Instructions](#setup-instructions)
- [Error Handling](#error-handling)
- [Rate Limiting](#rate-limiting)

---

## Overview

The website includes one API endpoint for handling contact form submissions. The API is built using Next.js Route Handlers.

**Base Path**: `/api`

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/contact` | POST | Submit contact form |

---

## Contact Form API

### POST `/api/contact`

**File**: `app/api/contact/route.ts`

Handles contact form submissions and sends email notifications using the Resend API.

#### Request

**Headers**:
```
Content-Type: application/json
```

**Body**:
```json
{
  "name": "string",
  "email": "string",
  "subject": "string",
  "message": "string"
}
```

| Field | Type | Required | Validation |
|-------|------|----------|------------|
| `name` | string | Yes | Non-empty |
| `email` | string | Yes | Valid email format |
| `subject` | string | Yes | Non-empty |
| `message` | string | Yes | Non-empty |

**Example**:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Therapy Inquiry",
  "message": "I'm interested in learning more about your services."
}
```

#### Response

**Success (200)**:
```json
{
  "message": "Email sent successfully",
  "data": {
    "id": "email-id-from-resend"
  }
}
```

**Validation Error (400)**:
```json
{
  "error": "All fields are required"
}
```

**Server Error (500)**:
```json
{
  "error": "Failed to send email"
}
```

#### Email Format

The API sends an HTML email with this format:

```html
<h2>New Contact Form Submission</h2>
<p><strong>From:</strong> {name}</p>
<p><strong>Email:</strong> {email}</p>
<p><strong>Subject:</strong> {subject}</p>
<hr />
<h3>Message:</h3>
<p>{message}</p>
```

**Email Configuration**:
- **From**: `Website Contact Form <onboarding@resend.dev>`
- **To**: `wenqingli.smile@gmail.com`
- **Reply-To**: Sender's email address
- **Subject**: `Website Contact: {subject}`

---

## Setup Instructions

### Prerequisites

1. Node.js 20+
2. npm or pnpm
3. Resend account

### Step 1: Install Dependencies

The `resend` package is included in `package.json`. Install it with:

```bash
npm install
# or
pnpm install
```

### Step 2: Create Resend Account

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account
3. Verify your email address

### Step 3: Generate API Key

1. Navigate to [API Keys](https://resend.com/api-keys)
2. Click "Create API Key"
3. Name it (e.g., "Personal Website Contact Form")
4. Copy the key (starts with `re_`)

### Step 4: Configure Environment

Create `.env.local` in the project root:

```bash
RESEND_API_KEY=re_your_actual_api_key_here
```

**Important**: 
- Never commit `.env.local` to version control
- The file is already in `.gitignore`

### Step 5: Restart Development Server

```bash
npm run dev
```

### Step 6: Test the Form

1. Navigate to `http://localhost:3000/#contact`
2. Fill out and submit the form
3. Check your email

---

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `RESEND_API_KEY` | Yes | Resend API key for sending emails |

### Production Deployment

When deploying to Vercel, Netlify, or other platforms:

1. Go to your project's environment variables settings
2. Add `RESEND_API_KEY` with your production API key
3. Redeploy if necessary

**Vercel**:
```
Project Settings → Environment Variables → Add New
```

**Netlify**:
```
Site Settings → Build & Deploy → Environment → Add Variable
```

---

## Error Handling

### Client-Side (Contact.tsx)

The Contact component handles API responses:

```typescript
try {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });

  if (response.ok) {
    setSubmitStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
  } else {
    setSubmitStatus('error');
  }
} catch (error) {
  console.error('Error submitting form:', error);
  setSubmitStatus('error');
}
```

### Server-Side (route.ts)

The API route handles errors:

```typescript
export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Send email
    const data = await resend.emails.send({...});
    
    return NextResponse.json(
      { message: 'Email sent successfully', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
```

### Common Errors

| Error | Cause | Solution |
|-------|-------|----------|
| `Failed to send email` | Invalid API key | Check `RESEND_API_KEY` in `.env.local` |
| `Failed to send email` | Network error | Check internet connection |
| `All fields are required` | Empty form fields | Ensure all fields are filled |
| Form not submitting | JavaScript error | Check browser console |

---

## Rate Limiting

### Resend Free Tier Limits

| Limit | Value |
|-------|-------|
| Emails per day | 100 |
| Emails per month | 3,000 |
| No credit card required | ✓ |

These limits are sufficient for a personal website contact form.

### Recommendations

For high-traffic sites, consider:

1. **Upgrading Resend plan** for higher limits
2. **Adding rate limiting** using Next.js middleware
3. **Implementing CAPTCHA** to prevent spam

Example rate limiting middleware:

```typescript
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const rateLimit = new Map();

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/api/contact') {
    const ip = request.ip ?? 'unknown';
    const now = Date.now();
    const windowMs = 60 * 1000; // 1 minute
    const maxRequests = 5;

    const requestCount = rateLimit.get(ip) || { count: 0, lastReset: now };
    
    if (now - requestCount.lastReset > windowMs) {
      requestCount.count = 0;
      requestCount.lastReset = now;
    }

    if (requestCount.count >= maxRequests) {
      return NextResponse.json(
        { error: 'Too many requests' },
        { status: 429 }
      );
    }

    requestCount.count++;
    rateLimit.set(ip, requestCount);
  }

  return NextResponse.next();
}
```

---

## Troubleshooting

### Emails Not Sending

1. **Check API Key**:
   ```bash
   # Verify .env.local exists and contains the key
   cat .env.local
   ```

2. **Restart Dev Server**:
   ```bash
   # Stop and restart after adding .env.local
   npm run dev
   ```

3. **Check Console Logs**:
   - Browser console for client errors
   - Terminal for server errors

4. **Verify Resend Dashboard**:
   - Log into Resend
   - Check "Logs" for sent/failed emails

### Form Validation Errors

Ensure form fields meet requirements:
- Name: Non-empty string
- Email: Valid format (e.g., `user@domain.com`)
- Subject: Non-empty string
- Message: At least 10 characters

### CORS Issues

If accessing from a different domain:
- The API only accepts same-origin requests by default
- For cross-origin access, add CORS headers in `route.ts`

---

## Security Considerations

1. **API Key Protection**: Never expose `RESEND_API_KEY` in client-side code
2. **Input Sanitization**: The API uses the Resend SDK which handles HTML escaping
3. **Rate Limiting**: Consider implementing for production
4. **Spam Prevention**: Consider adding CAPTCHA for public sites
5. **Reply-To Header**: Allows replying directly to sender without exposing your email

---

## Customization

### Changing Recipient Email

Edit `app/api/contact/route.ts`:

```typescript
const data = await resend.emails.send({
  // ...
  to: ['your-email@example.com'],  // Change this
  // ...
});
```

### Custom Email Template

Modify the `html` field in the email configuration:

```typescript
html: `
  <div style="font-family: Arial, sans-serif; max-width: 600px;">
    <h2 style="color: #4A90A4;">New Contact Form Submission</h2>
    <p><strong>From:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <hr style="border: 1px solid #eee;" />
    <h3>Message:</h3>
    <p>${message.replace(/\n/g, '<br>')}</p>
  </div>
`,
```

### Adding Fields

1. Update form state in `Contact.tsx`
2. Add form field JSX
3. Update validation
4. Modify API route to handle new field
5. Update email template

