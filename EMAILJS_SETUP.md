# EmailJS Setup Instructions

To receive emails from your contact form, follow these steps:

## 1. Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service
1. Go to Email Services in your dashboard
2. Click "Add New Service"
3. Choose Gmail and connect your Gmail account
4. Note down your Service ID (replace 'service_portfolio' in Contact.js)

## 3. Create Email Template
1. Go to Email Templates
2. Click "Create New Template"
3. Use this template:

**Subject:** New Contact from {{from_name}}

**Content:**
```
You have received a new message from your portfolio:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Note down your Template ID (replace 'template_contact' in Contact.js)

## 4. Get Public Key
1. Go to Account > General
2. Copy your Public Key (replace 'your_public_key' in Contact.js)

## 5. Update Contact.js
Replace these values in `/app/components/Contact.js`:
- `service_portfolio` → Your Service ID
- `template_contact` → Your Template ID  
- `your_public_key` → Your Public Key

## 6. Test
1. Fill out your contact form
2. Check your Gmail inbox
3. Emails should arrive within a few minutes

## Security Note
The public key is safe to use in frontend code as it's designed for client-side usage.