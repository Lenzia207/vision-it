export const runtime = "nodejs";

import { NextResponse } from 'next/server';
import { getOwnerNotificationEmail, getCustomerConfirmationEmail } from './email-format';
import { emailRegex, transporter } from './utils';

export async function POST(request: Request) {
  // basic size limit
  const contentLength = request.headers.get('content-length');
  if (contentLength && Number(contentLength) > 10_000) {
    return NextResponse.json({ success: false, error: 'Payload too large' }, { status: 413 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: 'Invalid JSON' }, { status: 400 });
  }

  const payload = (body && typeof body === 'object' ? body : {}) as {
    name?: unknown;
    company?: unknown;
    email?: unknown;
    message?: unknown;
    recaptchaToken?: unknown;
    locale?: unknown;
    privacyAccepted?: unknown;
  };

  const { name, company, email, message, locale, privacyAccepted } = payload;
  if (!name || !email || !message || typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string') {
    return NextResponse.json({ success: false, error: 'Invalid  input' }, { status: 400 });
  }
  if (message.length > 5000) {
    return NextResponse.json({ success: false, error: 'Message too long' }, { status: 413 });
  }

  if (!emailRegex.test(email)) {
    return NextResponse.json({ success: false, error: 'Invalid email format' }, { status: 400 });
  }

  if (privacyAccepted !== true) {
    return NextResponse.json({ success: false, error: 'Privacy policy not accepted' }, { status: 400 });
  }

  // optional reCAPTCHA verification
  // if (process.env.RECAPTCHA_SECRET && recaptchaToken) {
  //   try {
  //     const res = await fetch(
  //       'https://www.google.com/recaptcha/api/siteverify',
  //       {
  //         method: 'POST',
  //         headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  //         body: `secret=${encodeURIComponent(process.env.RECAPTCHA_SECRET)}&response=${encodeURIComponent(recaptchaToken)}`,
  //       }
  //     );
  //     const data = await res.json();
  //     if (!data.success) return NextResponse.json({ success: false, error: 'reCAPTCHA failed' }, { status: 403 });
  //   } catch {
  //     return NextResponse.json({ success: false, error: 'reCAPTCHA verification error' }, { status: 500 });
  //   }
  // }


  try {
    const contactData = {
      name,
      company: typeof company === 'string' ? company : undefined,
      email,
      message,
    };
    const ownerEmail = getOwnerNotificationEmail(contactData);
    const customerEmail = getCustomerConfirmationEmail(contactData, typeof locale === 'string' ? locale : 'de');

    // Send email to site owner (me)
    await transporter.sendMail({
      from: process.env.CONTACT_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_RECEIVER || process.env.SMTP_USER,
      replyTo: email,
      ...ownerEmail,
    });

    // Send confirmation email to the customer
    await transporter.sendMail({
      from: `"${process.env.CONTACT_FROM_NAME || 'Lena Zyadeh, BSc.'}" <${process.env.CONTACT_FROM || process.env.SMTP_USER}>`,
      to: email,
      ...customerEmail,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('mail error:', error);
    return NextResponse.json({ success: false, error: 'Mail send failed' }, { status: 500 });
  }
}



export async function GET() {
  return NextResponse.json({ ok: true }, { status: 200 });
}