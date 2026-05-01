'use client';

import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function CareersPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // Placeholder submit – integrate with backend/email service as needed
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('sent');
      e.currentTarget.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <main className="pt-0">
      <section className="relative py-16 lg:py-20 min-h-[240px] flex items-center bg-[#233037]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">Careers</h1>
          <p className="text-lg lg:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Join the team. Submit your details and resume below and we’ll get back to you.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl border border-gray-200/60">
            <h2 className="text-xl font-bold text-slate-900 mb-2">Apply with us</h2>
            <p className="text-gray-500 text-sm mb-6">
              Fill out the form and attach your resume. We typically respond within one business day.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="career-name" className="block text-sm font-medium text-slate-900 mb-2">
                    Name
                  </label>
                  <input
                    id="career-name"
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-slate-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="career-email" className="block text-sm font-medium text-slate-900 mb-2">
                    Email
                  </label>
                  <input
                    id="career-email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-slate-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="career-message" className="block text-sm font-medium text-slate-900 mb-2">
                  Message
                </label>
                <textarea
                  id="career-message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-slate-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent resize-y min-h-[100px]"
                  placeholder="Tell us about yourself and the role you’re interested in..."
                />
              </div>

              <div>
                <label htmlFor="career-resume" className="block text-sm font-medium text-slate-900 mb-2">
                  Resume <span className="text-gray-500 font-normal">(optional)</span>
                </label>
                <input
                  id="career-resume"
                  name="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-slate-900 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-sky-50 file:text-sky-700 hover:file:bg-sky-100 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                />
                <p className="text-xs text-gray-500 mt-1">PDF or Word, max 10MB</p>
              </div>

              {status === 'sent' && (
                <p className="text-sm font-medium text-green-600">
                  Thanks! Your application has been submitted. We’ll be in touch soon.
                </p>
              )}

              {status === 'error' && (
                <p className="text-sm font-medium text-red-600">Something went wrong. Please try again.</p>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex justify-center items-center gap-2 px-8 py-3 rounded-lg font-semibold text-base bg-linear-to-r from-sky-500 to-indigo-500 hover:from-sky-600 hover:to-indigo-600 text-white transition-colors shadow-lg disabled:opacity-70"
              >
                {status === 'sending' ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Submit application
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
