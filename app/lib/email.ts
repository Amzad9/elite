import sgMail from '@sendgrid/mail';

function getSendGridKey(): string {
  const key = process.env.SENDGRID_API_KEY;
  if (!key) throw new Error('SENDGRID_API_KEY is not set');
  return key;
}

const fromEmail = process.env.FROM_EMAIL ?? '';

/**
 * Parse CONTACT_EMAIL (comma-separated) into an array of recipient addresses.
 * Both Jacque and Josh receive all form submissions.
 */
function getContactRecipients(): string[] {
  const raw = process.env.CONTACT_EMAIL ?? '';
  return raw
    .split(',')
    .map((e) => e.trim())
    .filter(Boolean);
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export type ContactNotificationData = {
  name: string;
  email: string;
  telephone?: string;
  company?: string;
  message: string;
};

export async function sendContactNotification(data: ContactNotificationData): Promise<void> {
  const to = getContactRecipients();
  if (!to.length) throw new Error('CONTACT_EMAIL is not set');
  if (!fromEmail) throw new Error('FROM_EMAIL is not set');

  sgMail.setApiKey(getSendGridKey());

  const html = `
    <h2>Contact form submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
    ${data.telephone ? `<p><strong>Telephone:</strong> ${escapeHtml(data.telephone)}</p>` : ''}
    ${data.company ? `<p><strong>Company:</strong> ${escapeHtml(data.company)}</p>` : ''}
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(data.message).replace(/\n/g, '<br />')}</p>
  `;

  await sgMail.send({
    to,
    from: fromEmail,
    subject: `Contact form: ${escapeHtml(data.name)}`,
    html,
  });
}

export type QuoteNotificationData = {
  businessName: string;
  contactName: string;
  phone: string;
  email: string;
  yearsInBusiness?: number;
  notes?: string;
  /** Optional attachment: [buffer, filename] for statement upload */
  attachment?: { content: Buffer; filename: string };
};

function getMimeType(filename: string): string {
  const ext = filename.split('.').pop()?.toLowerCase();
  if (ext === 'pdf') return 'application/pdf';
  if (ext === 'jpg' || ext === 'jpeg') return 'image/jpeg';
  if (ext === 'png') return 'image/png';
  return 'application/octet-stream';
}

export async function sendQuoteNotification(data: QuoteNotificationData): Promise<void> {
  const to = getContactRecipients();
  if (!to.length) throw new Error('CONTACT_EMAIL is not set');
  if (!fromEmail) throw new Error('FROM_EMAIL is not set');

  sgMail.setApiKey(getSendGridKey());

  const html = `
    <h2>Quote request</h2>
    <p><strong>Business Name:</strong> ${escapeHtml(data.businessName)}</p>
    <p><strong>Contact Name:</strong> ${escapeHtml(data.contactName)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>
    <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
    ${data.yearsInBusiness != null ? `<p><strong>Years in Business:</strong> ${data.yearsInBusiness}</p>` : ''}
    ${data.notes ? `<p><strong>Notes:</strong></p><p>${escapeHtml(data.notes).replace(/\n/g, '<br />')}</p>` : ''}
    ${data.attachment ? `<p><strong>Statement:</strong> attached (${escapeHtml(data.attachment.filename)})</p>` : ''}
  `;

  const msg: {
    to: string[];
    from: string;
    subject: string;
    html: string;
    attachments?: { content: string; filename: string; type: string; disposition: string }[];
  } = {
    to,
    from: fromEmail,
    subject: `Quote request: ${escapeHtml(data.businessName)}`,
    html,
  };

  if (data.attachment) {
    msg.attachments = [
      {
        content: data.attachment.content.toString('base64'),
        filename: data.attachment.filename,
        type: getMimeType(data.attachment.filename),
        disposition: 'attachment',
      },
    ];
  }

  await sgMail.send(msg);
}

export type NewsletterSignupData = {
  email: string;
  name?: string;
};

export async function sendNewsletterSignup(data: NewsletterSignupData): Promise<void> {
  const to = getContactRecipients();
  if (!to.length) throw new Error('CONTACT_EMAIL is not set');
  if (!fromEmail) throw new Error('FROM_EMAIL is not set');

  sgMail.setApiKey(getSendGridKey());

  const html = `
    <h2>Newsletter signup</h2>
    <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
    ${data.name ? `<p><strong>Name:</strong> ${escapeHtml(data.name)}</p>` : ''}
  `;

  await sgMail.send({
    to,
    from: fromEmail,
    subject: `Newsletter signup: ${escapeHtml(data.email)}`,
    html,
  });
}
