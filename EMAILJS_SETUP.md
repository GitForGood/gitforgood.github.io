# EmailJS Setup Guide

This guide will help you set up EmailJS to handle contact form submissions on your website.

## Step 1: Create an EmailJS Account

1. Go to [emailjs.com](https://www.emailjs.com/)
2. Sign up for a free account (200 emails/month on free tier)

## Step 2: Add an Email Service

1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps for your provider
5. Copy the **Service ID** (you'll need this later)

## Step 3: Create an Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Configure your template with these variables:
   ```
   From: {{from_name}} ({{from_email}})
   Subject: {{subject}}

   Message:
   {{message}}
   ```
4. You can customize the template however you like
5. Copy the **Template ID** (you'll need this later)

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** under the API Keys section
3. Copy the **Public Key** (you'll need this later)

## Step 5: Configure Environment Variables

1. Create a `.env` file in the root of your project (copy from `.env.example`):
   ```bash
   cp .env.example .env
   ```

2. Edit the `.env` file and add your EmailJS credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```

3. Replace the placeholder values with the actual IDs you copied earlier

## Step 6: Test the Contact Form

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to the Contact page
3. Fill out and submit the form
4. Check your email to see if you received the message!

## Troubleshooting

### Form not sending emails
- Double-check that all three environment variables are set correctly
- Make sure your `.env` file is in the project root directory
- Restart your development server after changing `.env`
- Check the browser console for any error messages

### Emails going to spam
- Add your domain to EmailJS allowed origins in the settings
- Consider using a custom domain email for better deliverability

### Rate limiting
- Free tier allows 200 emails/month
- Upgrade to a paid plan if you need more

## Security Notes

- The `.env` file is in `.gitignore` to prevent committing secrets
- The public key is safe to expose (it's meant to be public)
- EmailJS has rate limiting and domain restrictions for security

## Need Help?

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS Dashboard](https://dashboard.emailjs.com/)
