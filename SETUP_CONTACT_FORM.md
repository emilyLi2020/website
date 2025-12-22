# Contact Form Setup Instructions

Your contact form is now configured to send emails to: **wenqingli.smile@gmail.com**

## Setup Steps

### 1. Install Dependencies

```bash
npm install
```

This will install the `resend` package that was added to your dependencies.

### 2. Get a Resend API Key

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account (no credit card required)
3. Verify your email address
4. Go to [API Keys](https://resend.com/api-keys)
5. Click "Create API Key"
6. Give it a name (e.g., "Personal Website Contact Form")
7. Copy the API key (it starts with `re_`)

### 3. Add Environment Variable

1. Create a file named `.env.local` in the `mywebsite` folder
2. Add this line (replace with your actual key):

```
RESEND_API_KEY=re_your_actual_api_key_here
```

**Important:** Never commit `.env.local` to git! It's already in `.gitignore`.

### 4. Test the Contact Form

1. Start your development server:
```bash
npm run dev
```

2. Go to your contact form at `http://localhost:3000/#contact`
3. Fill out and submit the form
4. Check your email at **wenqingli.smile@gmail.com**

## How It Works

- When someone submits the contact form, the data is sent to `/api/contact`
- The API route uses Resend to send an email to your address
- The sender's email is set as the "Reply-To", so you can reply directly to them
- You'll see their name, email, subject, and message in the email

## Free Tier Limits

Resend's free tier includes:
- 100 emails per day
- 3,000 emails per month
- No credit card required

This is more than enough for a personal website contact form!

## Deployment Notes

When deploying to Vercel/Netlify/etc:
1. Add the `RESEND_API_KEY` environment variable in your hosting platform's dashboard
2. The contact form will work automatically

## Troubleshooting

If emails aren't sending:
1. Check that `RESEND_API_KEY` is set correctly in `.env.local`
2. Check the browser console for error messages
3. Make sure you ran `npm install` after adding resend
4. Restart your dev server after adding the `.env.local` file

## Need Help?

Contact form issues are usually related to:
- Missing or incorrect API key
- Not restarting the dev server after adding `.env.local`
- Typos in the environment variable name


