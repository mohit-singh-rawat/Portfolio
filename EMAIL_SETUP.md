# Email Setup for Contact Form

## 1. Gmail App Password Setup

1. Go to your Google Account settings
2. Enable 2-Factor Authentication if not already enabled
3. Go to Security > 2-Step Verification > App passwords
4. Generate an app password for "Mail"
5. Copy the 16-character password

## 2. Environment Variables

Update `.env.local` with your credentials:

```
EMAIL_USER=rawat.mohitsingh7455@gmail.com
EMAIL_PASS=your-16-character-app-password
```

## 3. Install Dependencies

```bash
npm install nodemailer
```

## 4. Test the Contact Form

1. Fill out the contact form on your website
2. Check your Gmail inbox for the message
3. Emails should arrive within seconds

## Security Notes

- Never commit `.env.local` to version control
- Use Gmail App Passwords, not your regular password
- The API route runs server-side, keeping credentials secure