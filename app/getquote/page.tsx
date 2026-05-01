'use client';

import { useState, useRef } from 'react';
import { Loader2 } from 'lucide-react';

const MAX_FILE_SIZE = 3 * 1024 * 1024; // 3 MB
const ALLOWED_EXTENSIONS = ['.pdf', '.jpg', '.jpeg', '.png'];

type SubmitStatus = 'idle' | 'success' | 'error';

export default function QuotePage() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [submitError, setSubmitError] = useState('');
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    phone: '',
    email: '',
    yearsInBusiness: '',
    notes: '',
  });
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'yearsInBusiness') {
      setFormData((prev) => ({ ...prev, [name]: value }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError('');
    const f = e.target.files?.[0];
    if (!f) {
      setFile(null);
      return;
    }
    if (f.size > MAX_FILE_SIZE) {
      setFileError('File must be 3 MB or less');
      setFile(null);
      e.target.value = '';
      return;
    }
    const ext = '.' + f.name.split('.').pop()?.toLowerCase();
    if (!ALLOWED_EXTENSIONS.includes(ext)) {
      setFileError('Use PDF or image (JPEG, PNG)');
      setFile(null);
      e.target.value = '';
      return;
    }
    setFile(f);
  };

  const removeFile = () => {
    setFile(null);
    setFileError('');
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitError('');

    try {
      if (file) {
        const form = new FormData();
        form.append('businessName', formData.businessName.trim());
        form.append('contactName', formData.contactName.trim());
        form.append('phone', formData.phone.trim());
        form.append('email', formData.email.trim());
        if (formData.yearsInBusiness.trim()) form.append('yearsInBusiness', formData.yearsInBusiness.trim());
        if (formData.notes.trim()) form.append('notes', formData.notes.trim());
        form.append('statement', file);

        const res = await fetch('/api/quote', { method: 'POST', body: form });
        const data = await res.json().catch(() => ({}));
        if (res.ok && data.success) {
          setSubmitStatus('success');
          setFormData({ businessName: '', contactName: '', phone: '', email: '', yearsInBusiness: '', notes: '' });
          removeFile();
        } else {
          setSubmitStatus('error');
          setSubmitError(data.error || data.details?.join?.(' ') || 'Failed to send quote request.');
        }
      } else {
        const res = await fetch('/api/quote', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            businessName: formData.businessName.trim(),
            contactName: formData.contactName.trim(),
            phone: formData.phone.trim(),
            email: formData.email.trim(),
            yearsInBusiness: formData.yearsInBusiness.trim() ? Number(formData.yearsInBusiness) : undefined,
            notes: formData.notes.trim() || undefined,
          }),
        });
        const data = await res.json().catch(() => ({}));
        if (res.ok && data.success) {
          setSubmitStatus('success');
          setFormData({ businessName: '', contactName: '', phone: '', email: '', yearsInBusiness: '', notes: '' });
        } else {
          setSubmitStatus('error');
          setSubmitError(data.error || data.details?.join?.(' ') || 'Failed to send quote request.');
        }
      }
    } catch {
      setSubmitStatus('error');
      setSubmitError('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-neutral-50 text-neutral-900">

      {/* ambient background glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full 
          bg-cyan-400/20 blur-[120px]" />
      <div className="pointer-events-none absolute top-40 right-0 h-[420px] w-[420px] 
          bg-indigo-400/20 blur-[120px]" />

      {/* mesh background */}
      <div className="absolute inset-0 -z-10 bg-[url(/mesh-gradient.webp)] bg-cover opacity-20" />

      {/* HEADER */}
      <section className="mx-auto max-w-3xl px-6 pt-16 pb-24 text-center relative">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-tight">
          Transparent pricing
          <span className="block text-cyan-600">within 24 hours</span>
        </h1>
        <p className="mt-4 text-neutral-600">
          Upload your latest statement and receive a clear, tailored quote
          no hidden fees, no surprises.
        </p>
      </section>
      <section className="mx-auto mt-14 max-w-7xl px-6 pb-24 relative">
        {/* card glow */}
        <div className="pointer-events-none absolute inset-0 -z-10 flex justify-center">
          <div
            className="h-full w-4/5 rounded-3xl bg-linear-to-r
    from-cyan-400/25 via-sky-400/20 to-indigo-400/25 blur-[100px]"
          />
        </div>

        <div
          className="grid overflow-hidden rounded-3xl
  bg-white/85 backdrop-blur-2xl
  shadow-[0_30px_80px_-20px_rgba(0,0,0,0.15)]
  ring-1 ring-neutral-200
  md:grid-cols-2"
        >

          {/* LEFT – IMAGE */}
          <div className="relative hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1689799514696-b16af9b53753?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Business growth"
              className="h-full w-full object-cover"
            />

            {/* image overlay */}
            <div className="absolute inset-0 bg-blue-500/30 blur-4xl"
            />

            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h3 className="text-3xl font-bold">
                Simple. Honest. Transparent.
              </h3>
              <p className="mt-2 text-sm text-white/80">
                Pricing designed for modern businesses.
              </p>
            </div>
          </div>

          {/* RIGHT – FORM */}
          <div className="p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-5">How should we contact you?</h3>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 rounded-xl bg-green-100 text-green-800 border border-green-200">
                Quote request received. We&apos;ll get back to you within 24 hours.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 rounded-xl bg-red-100 text-red-800 border border-red-200">
                {submitError}
              </div>
            )}

            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 md:grid-cols-2">

              <input
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                placeholder="Business Name"
                required
                className="col-span-2 rounded-xl border border-neutral-300 p-3 h-16
        focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />

              <input
                name="contactName"
                value={formData.contactName}
                onChange={handleChange}
                placeholder="Contact Name"
                required
                className="rounded-xl border border-neutral-300 p-3 h-16
        focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />

              <input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="rounded-xl border border-neutral-300 p-3 h-16
        focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />

              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="col-span-2 rounded-xl border border-neutral-300 p-3 h-16
        focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />

              <input
                name="yearsInBusiness"
                type="number"
                min={0}
                value={formData.yearsInBusiness}
                onChange={handleChange}
                placeholder="Years in Business"
                className="col-span-2 rounded-xl border border-neutral-300 p-3 h-16
        focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />

              {/* upload */}
              <div className="col-span-2">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => fileInputRef.current?.click()}
                  onKeyDown={(e) => e.key === 'Enter' && fileInputRef.current?.click()}
                  className="grid h-32 place-items-center rounded-2xl
        border-2 border-dashed border-neutral-300
        bg-neutral-50 text-sm text-neutral-500 cursor-pointer hover:bg-neutral-100 transition-colors"
                >
                  {file ? (
                    <span className="flex items-center gap-2">
                      {file.name}
                      <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); removeFile(); }}
                        className="text-red-600 hover:underline"
                      >
                        Remove
                      </button>
                    </span>
                  ) : (
                    'Drag or click to upload statement (PDF, JPEG, PNG, max 3 MB)'
                  )}
                </div>
                {fileError && <p className="mt-1 text-sm text-red-600">{fileError}</p>}
              </div>

              <textarea
                name="notes"
                rows={3}
                value={formData.notes}
                onChange={handleChange}
                placeholder="Additional notes (optional)"
                className="col-span-2 rounded-xl border border-neutral-300 p-3
        focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full col-span-2 flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-[#206DD1] to-[#1a5bb3] px-10 py-4 text-base font-bold text-white shadow-[0_10px_25px_rgba(32,109,209,0.4)] transition-transform hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(32,109,209,0.5)] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-white disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending…
                  </>
                ) : (
                  'Get my quote'
                )}
              </button>

            </form>
          </div>

        </div>
      </section>

    </main>
  );
}
