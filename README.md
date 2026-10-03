# KreatorDev

Source for [kreatordev.com](https://kreatordev.com), the website of **KREATORDEV LLC**, an independent software company that designs, builds and publishes its own mobile apps for iOS and Android.

Built with Next.js and Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

## Environment

The contact form needs these variables in `.env` (see `.env.example`):

- `RESEND_KEY`, `SENDER_EMAIL`, `FORWARD_EMAIL` for [Resend](https://resend.com)
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`, `RECAPTCHA_SECRET_KEY` for [Google reCAPTCHA v3](https://www.google.com/recaptcha/admin/create)

© KREATORDEV LLC. All rights reserved.
