# Netlify Deployment Guide

This project is configured for easy deployment on Netlify with serverless functions.

## Prerequisites

1. A Netlify account (sign up at https://netlify.com)
2. Gmail credentials for the contact form email functionality

## Deployment Steps

### Option 1: Deploy via Git (Recommended)

1. **Push your code to a Git repository** (GitHub, GitLab, or Bitbucket)

2. **Connect to Netlify:**
   - Log in to Netlify
   - Click "Add new site" → "Import an existing project"
   - Choose your Git provider and select your repository
   - Netlify will auto-detect the build settings from `netlify.toml`

3. **Configure Environment Variables:**
   - Go to Site settings → Environment variables
   - Add the following variables:
     - `GMAIL_USER`: Your Gmail address (e.g., `your-email@gmail.com`)
     - `GMAIL_APP_PASSWORD`: Your Gmail App Password (16-character password)
   
   **How to get Gmail App Password:**
   - Go to your Google Account settings
   - Navigate to Security → 2-Step Verification (enable if not already)
   - Scroll down to "App passwords"
   - Generate a new app password for "Mail"
   - Copy the 16-character password

4. **Deploy:**
   - Click "Deploy site"
   - Netlify will automatically build and deploy your site

### Option 2: Deploy via Netlify CLI

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify:**
   ```bash
   netlify login
   ```

3. **Initialize the site:**
   ```bash
   netlify init
   ```

4. **Set environment variables:**
   ```bash
   netlify env:set GMAIL_USER "your-email@gmail.com"
   netlify env:set GMAIL_APP_PASSWORD "your-16-char-password"
   ```

5. **Deploy:**
   ```bash
   netlify deploy --prod
   ```

## Build Configuration

The project uses the following configuration (defined in `netlify.toml`):

- **Build command:** `npm run build`
- **Publish directory:** `dist/public`
- **Functions directory:** `netlify/functions`
- **Node version:** 20

## API Endpoints

The contact form API is available at:
- Development: `http://localhost:5000/api/contact`
- Production: `https://your-site.netlify.app/api/contact`

The API route is automatically redirected to the Netlify serverless function.

## Troubleshooting

### Build Fails

1. Check that all environment variables are set correctly
2. Verify Node version is 20 or higher
3. Check the build logs in Netlify dashboard

### Contact Form Not Working

1. Verify Gmail credentials in environment variables
2. Check that Gmail App Password is correct (not your regular password)
3. Ensure 2-Step Verification is enabled on your Google Account
4. Check the Function logs in Netlify dashboard

### 404 Errors on Routes

The `_redirects` file ensures SPA routing works correctly. If you're getting 404s:
1. Verify `public/_redirects` file exists
2. Check that the build completed successfully
3. Clear the deploy cache and rebuild

## Post-Deployment

1. Test the contact form with a real submission
2. Verify emails are being sent correctly
3. Set up a custom domain (optional) in Netlify settings
4. Enable HTTPS (automatic with Netlify)

## Local Development

To run the development server locally:

```bash
npm install
npm run dev
```

The app will be available at `http://localhost:5000`

## Project Structure

```
.
├── client/              # React frontend source
├── netlify/
│   └── functions/       # Serverless functions
│       └── contact.ts   # Contact form API
├── server/              # Express server (for local dev only)
├── dist/
│   └── public/          # Built frontend (generated)
├── netlify.toml         # Netlify configuration
└── package.json
```

## Environment Variables Reference

| Variable | Description | Example |
|----------|-------------|---------|
| `GMAIL_USER` | Gmail address for sending emails | `your-email@gmail.com` |
| `GMAIL_APP_PASSWORD` | Gmail App Password (16 chars) | `abcd efgh ijkl mnop` |

## Support

For issues related to:
- **Netlify deployment:** Check [Netlify Docs](https://docs.netlify.com)
- **Gmail setup:** Check [Google App Passwords Guide](https://support.google.com/accounts/answer/185833)
- **Build errors:** Check the build logs in Netlify dashboard
