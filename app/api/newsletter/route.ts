import { NextResponse } from 'next/server';
import { sendNewsletterSignup } from '@/app/lib/email';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name } = body;

    if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: 'Validation failed', details: ['Valid email is required'] },
        { status: 400 }
      );
    }

    await sendNewsletterSignup({
      email: email.trim(),
      name: typeof name === 'string' && name.trim() ? name.trim() : undefined,
    });

    return NextResponse.json({
      success: true,
      message: "You're subscribed. We'll be in touch.",
    });
  } catch (err) {
    console.error('Newsletter signup error:', err);
    return NextResponse.json(
      {
        success: false,
        error: err instanceof Error ? err.message : 'Failed to subscribe.',
      },
      { status: 500 }
    );
  }
}
