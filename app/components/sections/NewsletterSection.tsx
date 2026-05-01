'use client';
import { Mail, Send, Loader2 } from 'lucide-react';
import { useState } from 'react';

type SubmitStatus = 'idle' | 'success' | 'error';

export default function NewsletterSection() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
    const [submitError, setSubmitError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');
        setSubmitError('');
        try {
            const res = await fetch('/api/newsletter', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, name }),
            });
            const data = await res.json().catch(() => ({}));
            if (res.ok && data.success) {
                setSubmitStatus('success');
                setEmail('');
                setName('');
            } else {
                setSubmitStatus('error');
                setSubmitError(data.error || data.details?.join?.(' ') || 'Failed to subscribe.');
            }
        } catch {
            setSubmitStatus('error');
            setSubmitError('Network error. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="w-full bg-linear-to-br from-blue-600 via-purple-600 to-pink-600 px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden" aria-labelledby="newsletter-heading">
            <div className="absolute inset-0 opacity-10"></div>
            <div className="container mx-auto max-w-3xl relative z-10">
                <div className="text-center mb-10">
                    <div className="inline-flex p-3 bg-white/20 backdrop-blur-md rounded-full mb-6">
                        <Mail className="w-8 h-8 text-white" />
                    </div>
                    <h2 id="newsletter-heading" className="text-4xl sm:text-5xl font-bold text-white mb-4">
                        Stay Connected
                    </h2>
                    <p className="text-lg text-blue-100">
                        Get the latest updates and exclusive offers delivered to your inbox
                    </p>
                </div>
                {submitStatus === 'success' && (
                    <p className="mb-4 text-center text-white font-medium">
                        You&apos;re subscribed. We&apos;ll be in touch.
                    </p>
                )}
                {submitStatus === 'error' && (
                    <p className="mb-4 text-center text-yellow-200">
                        {submitError}
                    </p>
                )}
                <form
                    className="space-y-4"
                    onSubmit={handleSubmit}
                >
                    <div className="flex flex-col sm:flex-row gap-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="flex-1 px-6 py-4 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white/30"
                            aria-label="Your Name"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="flex-1 px-6 py-4 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white/30"
                            aria-label="Email Address"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto mx-auto flex items-center justify-center gap-3 px-10 py-5 bg-white hover:bg-yellow-400 text-blue-600 hover:text-slate-900 font-bold rounded-full transition-all shadow-[0_10px_40px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.3)] focus:outline-none focus:ring-2 focus:ring-yellow-400 disabled:opacity-70"
                        aria-label="Subscribe to Newsletter"
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                Subscribing…
                            </>
                        ) : (
                            <>
                                Subscribe Now
                                <Send className="w-5 h-5" />
                            </>
                        )}
                    </button>
                </form>
                <p className="mt-6 text-center text-sm text-white/80">
                    By subscribing, you agree to our <a href="/privacy-policy" className="underline hover:text-white">Privacy Policy</a>.
                    Reply STOP to opt-out anytime.
                </p>
            </div>
        </section>
    );
}