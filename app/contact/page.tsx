'use client';
import { useState } from "react";
import { Send, Loader2, Phone, MapPin, PhoneCall, ArrowRight, Zap } from "lucide-react";

const contactItems = [
  { icon: Phone, label: "Local (Hagerstown)", value: "(240) 329-9424", href: "tel:+12403299424" },
  { icon: PhoneCall, label: "Toll-Free", value: "(877) 415-8627", href: "tel:+18774158627" },
  { icon: MapPin, label: "Visit", value: "13701 Maugansville Rd #5, Hagerstown, MD 21740", href: "https://maps.google.com/?q=13701+Maugansville+Rd+%235,+Hagerstown,+MD+21740" },
];

type SubmitStatus = 'idle' | 'success' | 'error';

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [submitError, setSubmitError] = useState<string>('');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
    company: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        setSubmitStatus('success');
        setFormData({ name: "", email: "", telephone: "", company: "", message: "" });
      } else {
        setSubmitStatus('error');
        setSubmitError(data.error || data.details?.join?.(' ') || 'Failed to send message.');
      }
    } catch {
      setSubmitStatus('error');
      setSubmitError('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <main className="min-h-screen bg-linear-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-black dark:to-indigo-950">

      {/* Hero Section */}
      <section className="relative py-16 md:py-20 overflow-hidden bg-blue-500 dark:bg-slate-950">
        {/* <div className="absolute inset-0 bg-sky-500/10 dark:bg-indigo-500/10" /> */}
        {/* <div className="absolute top-10 left-10 w-72 h-72 sm:w-96 sm:h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse hidden sm:block" /> */}
        {/* <div className="absolute bottom-10 right-10 w-64 h-64 sm:w-80 sm:h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000 hidden sm:block" /> */}

        <div className="container mx-auto relative z-10 px-4">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 sm:px-6 py-2 mb-6 text-[12px] font-semibold tracking-wider text-sky-700 dark:text-sky-300 uppercase bg-white/40 dark:bg-white/10 backdrop-blur-md rounded-full border border-sky-200/60 dark:border-white/10 shadow-sm">
              <Zap className="inline w-4 h-4 mr-1" /> Get In Touch
            </span>
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold  text-white mb-6 leading-snug sm:leading-tight">
              Ready to Get Started With Elite Card Processing?
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-100 max-w-3xl mx-auto">
              Join thousands of businesses saving more with transparent payment processing.
            </p>
            <div className="mx-auto mt-2 h-1 w-28 rounded-full bg-linear-to-r from-blue-500 via-purple-500 to-pink-500" />

          </div>
        </div>
      </section>
      

      {/* Form & Contact Info Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">

            {/* Contact Form */}
            <div className="col-span-1 md:col-span-7">
              <div className="relative overflow-hidden rounded-3xl p-8 md:p-10 bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl border border-white/40 dark:border-white/10 shadow-xl">
                
                {/* Glow circles */}
                <div className="pointer-events-none absolute -top-32 -left-32 h-64 w-64 sm:h-96 sm:w-96 rounded-full bg-linear-to-br from-sky-400/30 via-indigo-400/20 to-transparent blur-3xl" />
                <div className="pointer-events-none absolute -bottom-32 -left-32 h-64 w-64 sm:h-96 sm:w-96 rounded-full bg-linear-to-tr from-indigo-400/20 via-purple-400/10 to-transparent blur-3xl" />

                <div className="relative z-10" id="contact-form">
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                    Contact Us Today
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-8 max-w-md">
                    We’ll respond within 24 hours — no obligation, just honest advice.
                  </p>

                  {submitStatus === 'success' && (
                    <div className="mb-6 p-4 rounded-xl bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 border border-green-200 dark:border-green-800">
                      Message sent. We&apos;ll respond within 24 hours.
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="mb-6 p-4 rounded-xl bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 border border-red-200 dark:border-red-800">
                      {submitError}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        className="w-full h-14 rounded-xl px-4 sm:px-5 text-sm sm:text-base bg-white/80 dark:bg-slate-800/80 border border-slate-300/40 dark:border-slate-700/40 focus:ring-4 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
                      />
                      <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                        className="w-full h-14 rounded-xl px-4 sm:px-5 text-sm sm:text-base bg-white/80 dark:bg-slate-800/80 border border-slate-300/40 dark:border-slate-700/40 focus:ring-4 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      <input
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleChange}
                        placeholder="Telephone (optional)"
                        className="w-full h-14 rounded-xl px-4 sm:px-5 text-sm sm:text-base bg-white/80 dark:bg-slate-800/80 border border-slate-300/40 dark:border-slate-700/40 focus:ring-4 focus:ring-sky-500/20 transition-all"
                      />
                      <input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company Name (optional)"
                        className="w-full h-14 rounded-xl px-4 sm:px-5 text-sm sm:text-base bg-white/80 dark:bg-slate-800/80 border border-slate-300/40 dark:border-slate-700/40 focus:ring-4 focus:ring-sky-500/20 transition-all"
                      />
                    </div>

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      placeholder="Tell us about your business needs..."
                      className="w-full rounded-xl px-4 sm:px-5 py-4 text-sm sm:text-base bg-white/80 dark:bg-slate-800/80 border border-slate-300/40 dark:border-slate-700/40 focus:ring-4 focus:ring-sky-500/20 resize-none transition-all"
                    />

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-3 w-full md:w-auto justify-center rounded-xl px-8 sm:px-10 py-4 bg-linear-to-r from-sky-500 to-indigo-500 text-white font-semibold shadow-lg hover:shadow-2xl hover:scale-[1.02] active:scale-100 transition-all disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="col-span-1 md:col-span-5 space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6">Quick Contact</h3>
              {contactItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target={item.icon === MapPin ? "_blank" : undefined}
                  rel={item.icon === MapPin ? "noopener noreferrer" : undefined}
                  className="block p-4 sm:p-6 rounded-2xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border border-white/30 hover:border-blue-400/50 hover:scale-105 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-center gap-4 sm:gap-5">
                    <div className="p-3 sm:p-4 rounded-xl bg-linear-to-br from-blue-500/20 to-indigo-500/20">
                      <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">{item.label}</p>
                      <p className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white">{item.value}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-16">
        <div className="container mx-auto px-4">
          <div className="relative rounded-3xl overflow-hidden p-10 md:p-20 text-center">
            <div className="absolute inset-0 bg-white/60 dark:bg-slate-950/55" />
            <div className="absolute inset-0 bg-linear-to-r from-sky-500/20 via-indigo-500/15 to-fuchsia-500/20" />
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.28),transparent_60%),radial-gradient(circle_at_bottom,rgba(99,102,241,0.22),transparent_60%)]" />
            <div className="relative z-10 text-slate-900 dark:text-white">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6">
                Get Your Free Quote Today
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl opacity-90 mb-8 sm:mb-12 max-w-2xl mx-auto">
                Start saving on processing fees with zero risk — transparent rates and expert support.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
                <a
                  href="#contact-form"
                  className="inline-flex items-center px-8 sm:px-10 py-4 rounded-2xl bg-linear-to-r from-sky-600 to-indigo-600 text-white font-bold text-lg shadow-2xl shadow-indigo-500/25 hover:shadow-indigo-500/45 hover:scale-105 transition-all group focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-500/35"
                >
                  Free Consultation
                  <ArrowRight className="ml-3 h-5 sm:h-6 w-5 sm:w-6 group-hover:translate-x-2 transition-transform" />
                </a>
                
                <a
                  href="tel:+12403299424"
                  className="inline-flex items-center px-8 sm:px-10 py-4 rounded-2xl border-2 border-slate-900/10 dark:border-white/25 bg-white/30 dark:bg-white/10 backdrop-blur-md font-bold text-lg hover:bg-white/40 dark:hover:bg-white/15 transition-all"
                >
                  <Phone className="mr-3 h-5 sm:h-6 w-5 sm:w-6" />
                  Call (240) 329-9424
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default ContactPage;
