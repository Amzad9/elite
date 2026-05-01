import { NextResponse } from 'next/server';
import { sendContactNotification } from '@/app/lib/email';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, telephone, company, message } = body;

    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: 'Validation failed', details: ['Name is required'] },
        { status: 400 }
      );
    }
    if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: 'Validation failed', details: ['Valid email is required'] },
        { status: 400 }
      );
    }
    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: 'Validation failed', details: ['Message is required'] },
        { status: 400 }
      );
    }

    await sendContactNotification({
      name: name.trim(),
      email: email.trim(),
      telephone: typeof telephone === 'string' ? telephone.trim() : undefined,
      company: typeof company === 'string' ? company.trim() : undefined,
      message: message.trim(),
    });

    return NextResponse.json({
      success: true,
      message: "Message sent. We'll respond within 24 hours.",
    });
  } catch (err) {
    console.error('Contact form error:', err);
    return NextResponse.json(
      {
        success: false,
        error: err instanceof Error ? err.message : 'Failed to send message.',
      },
      { status: 500 }
    );
  }
}
