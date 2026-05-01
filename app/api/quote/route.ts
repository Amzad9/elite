import { NextResponse } from 'next/server';
import { sendQuoteNotification } from '@/app/lib/email';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FILE_SIZE = 3 * 1024 * 1024; // 3 MB
const ALLOWED_TYPES = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];

function parseNumber(value: unknown): number | undefined {
  if (value === undefined || value === null || value === '') return undefined;
  const n = Number(value);
  return Number.isFinite(n) && n >= 0 ? n : undefined;
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get('content-type') ?? '';
    let businessName: string;
    let contactName: string;
    let phone: string;
    let email: string;
    let yearsInBusiness: number | undefined;
    let notes: string | undefined;
    let attachment: { content: Buffer; filename: string } | undefined;

    if (contentType.includes('multipart/form-data')) {
      const formData = await request.formData();
      businessName = (formData.get('businessName') as string)?.trim() ?? '';
      contactName = (formData.get('contactName') as string)?.trim() ?? '';
      phone = (formData.get('phone') as string)?.trim() ?? '';
      email = (formData.get('email') as string)?.trim() ?? '';
      yearsInBusiness = parseNumber(formData.get('yearsInBusiness'));
      notes = (formData.get('notes') as string)?.trim() || undefined;

      const file = formData.get('statement') as File | null;
      if (file && file.size > 0) {
        if (file.size > MAX_FILE_SIZE) {
          return NextResponse.json(
            { success: false, error: 'Validation failed', details: ['Statement file must be 3 MB or less'] },
            { status: 400 }
          );
        }
        if (!ALLOWED_TYPES.includes(file.type)) {
          return NextResponse.json(
            { success: false, error: 'Validation failed', details: ['Statement must be PDF or image (JPEG, PNG)'] },
            { status: 400 }
          );
        }
        const buffer = Buffer.from(await file.arrayBuffer());
        const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_').slice(0, 100) || 'statement';
        attachment = { content: buffer, filename: safeName };
      }
    } else {
      const body = await request.json();
      businessName = (body.businessName ?? '').trim();
      contactName = (body.contactName ?? '').trim();
      phone = (body.phone ?? '').trim();
      email = (body.email ?? '').trim();
      yearsInBusiness = parseNumber(body.yearsInBusiness);
      notes = (body.notes ?? '').trim() || undefined;
    }

    if (!businessName) {
      return NextResponse.json(
        { success: false, error: 'Validation failed', details: ['Business name is required'] },
        { status: 400 }
      );
    }
    if (!contactName) {
      return NextResponse.json(
        { success: false, error: 'Validation failed', details: ['Contact name is required'] },
        { status: 400 }
      );
    }
    if (!phone) {
      return NextResponse.json(
        { success: false, error: 'Validation failed', details: ['Phone is required'] },
        { status: 400 }
      );
    }
    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Validation failed', details: ['Valid email is required'] },
        { status: 400 }
      );
    }

    await sendQuoteNotification({
      businessName,
      contactName,
      phone,
      email,
      yearsInBusiness,
      notes,
      attachment,
    });

    return NextResponse.json({
      success: true,
      message: "Quote request received. We'll get back to you within 24 hours.",
    });
  } catch (err) {
    console.error('Quote form error:', err);
    return NextResponse.json(
      {
        success: false,
        error: err instanceof Error ? err.message : 'Failed to send quote request.',
      },
      { status: 500 }
    );
  }
}
