# Environment Variables for Vercel

## Required Environment Variables

Add these in your Vercel Project Settings → Environment Variables:

| Variable Name | Value | Notes |
|--------------|-------|-------|
| `EMAIL_USER` | `kbrian1237@gmail.com` | Your Gmail address |
| `EMAIL_PASS` | `ptri tozw suip akjk` | Gmail App Password (with spaces) |

## How to Add Environment Variables in Vercel:

1. Go to your project in Vercel Dashboard
2. Click **Settings**
3. Click **Environment Variables** in the sidebar
4. For each variable:
   - Enter the **Name** (e.g., `EMAIL_USER`)
   - Enter the **Value** (e.g., `kbrian1237@gmail.com`)
   - Select which environments: **Production**, **Preview**, **Development** (select all)
   - Click **Save**

5. After adding all variables, **redeploy** your site:
   - Go to **Deployments** tab
   - Click the three dots on the latest deployment
   - Click **Redeploy**

## Troubleshooting

### If contact form shows 405 error:
1. Verify environment variables are set correctly
2. Check Vercel Function Logs for errors
3. Make sure you redeployed after adding env variables

### To Check Vercel Function Logs:
1. Go to your Vercel project
2. Click on the latest deployment
3. Click **Functions** tab
4. Click on `/api/send-email`
5. View the logs to see what's happening

### Common Issues:
- **405 Error**: Method not allowed - check if POST is being received
- **500 Error**: Server error - check environment variables and logs
- **Email not sending**: Verify Gmail app password is correct
