'use client';
import { useState } from "react";
import { Send, Loader2, Phone, Mail, MapPin, PhoneCall, ArrowRight, Check, Sparkles, Zap } from "lucide-react";

const contactItems = [
  { icon: Phone, label: "Local (Hagerstown)", value: "(240) 329-9424", href: "tel:+12403299424" },
  { icon: PhoneCall, label: "Toll-Free", value: "(877) 415-8627", href: "tel:+18774158627" },
  // { icon: Mail, label: "Email Support", value: "support@elitecardprocessing.com", href: "mailto:support@elitecardprocessing.com" },
  { icon: MapPin, label: "Visit", value: "13701 Maugansville Rd #5, Hagerstown, MD 21740", href: "https://maps.google.com/?q=13701+Maugansville+Rd+%235,+Hagerstown,+MD+21740" },
];

const benefits = [
  "Free consultation with payment experts",
  "Same-day competitive quote",
  "No high-pressure sales tactics",
  "Expert support you can count on",
];

const specialOffers = [
  { text: "No setup fees for qualified businesses", isLink: true },
  { text: "Cash discount program consultation included", isLink: true },
  { text: "Learn about our services", isLink: true },
  { text: "See cash discount savings", isLink: true },
  { text: "Firearms dealer accounts", isLink: true },
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
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-tr from-blue-600/10 via-transparent to-indigo-600/10" />
        <div className="absolute top-10 left-10 w-72 h-72 sm:w-96 sm:h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse hidden sm:block" />
        <div className="absolute bottom-10 right-10 w-64 h-64 sm:w-80 sm:h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000 hidden sm:block" />

        <div className="container mx-auto relative z-10 px-4">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 sm:px-6 py-2 mb-6 text-[12px] font-semibold tracking-wider text-blue-400 uppercase bg-blue-100/20 backdrop-blur-md rounded-full border border-blue-200/50">
              <Zap className="inline w-4 h-4 mr-1" /> Get In Touch
            </span>
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-snug sm:leading-tight">
              Ready to Get Started With Elite Card Processing?
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
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

                <div className="relative z-10">
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
      <section className="py-16 md:py-8">
        <div className="container mx-auto px-4">
          <div className="relative rounded-3xl overflow-hidden p-10 md:p-20 text-center text-black bg-[url('https://images.unsplash.com/photo-1651094856217-6f30970b1521?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
            <div className="absolute inset-0 bg-blue-100/70 backdrop-blur-2xl" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6">
                Get Your Free Quote Today
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl opacity-90 mb-8 sm:mb-12 max-w-2xl mx-auto">
                Start saving on processing fees with zero risk — transparent rates and expert support.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
                <button className="inline-flex items-center px-8 sm:px-10 py-4 rounded-2xl bg-white text-gray-600 font-bold text-lg shadow-2xl hover:shadow-indigo-500/50 hover:scale-105 transition-all group">
                  Free Consultation
                  <ArrowRight className="ml-3 h-5 sm:h-6 w-5 sm:w-6 group-hover:translate-x-2 transition-transform" />
                </button>
                
                <a href="tel:+12403299424" className="inline-flex items-center px-8 sm:px-10 py-4 rounded-2xl border-4 border-white/50 bg-white/10 backdrop-blur-md font-bold text-lg hover:bg-white/20 transition-all">
                  <Phone className="mr-3 h-5 sm:h-6 w-5 sm:w-6" />
                  Call (240) 329-9424
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Offers */}
      <section className="py-16 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

            {/* Benefits Card */}
            <div className="relative overflow-hidden rounded-3xl p-8 md:p-10 bg-white/75 dark:bg-slate-900/75 backdrop-blur-2xl border border-white/40 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all">
              <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 sm:h-80 sm:w-80 rounded-full bg-linear-to-br from-green-400/20 to-transparent blur-3xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 sm:gap-4 mb-6">
                  <div className="p-3 sm:p-4 rounded-2xl bg-green-500/15 ring-1 ring-green-500/30">
                    <Check className="w-6 sm:w-8 h-6 sm:h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">What You’ll Get</h3>
                </div>
                <ul className="space-y-4 sm:space-y-6">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3 sm:gap-5">
                      <Check className="w-5 sm:w-6 h-5 sm:h-6 text-green-500 mt-1 shrink-0" />
                      <span className="text-sm sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Special Offers Card */}
            <div className="relative overflow-hidden rounded-3xl p-8 md:p-10 bg-white/75 dark:bg-slate-900/75 backdrop-blur-2xl border border-white/40 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all">
              <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 sm:h-80 sm:w-80 rounded-full bg-linear-to-tr from-purple-400/20 to-transparent blur-3xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 sm:gap-4 mb-6">
                  <div className="p-3 sm:p-4 rounded-2xl bg-purple-500/15 ring-1 ring-purple-500/30">
                    <Sparkles className="w-6 sm:w-8 h-6 sm:h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">Special Offers</h3>
                </div>
                <ul className="space-y-4 sm:space-y-6">
                  {specialOffers.map((offer, index) => (
                    <li key={index} className="flex items-start gap-3 sm:gap-5">
                      <Sparkles className="w-5 sm:w-6 h-5 sm:h-6 text-purple-500 mt-1 shrink-0" />
                      {offer.isLink ? (
                        <a href="#" className="text-sm sm:text-lg font-medium text-purple-600 hover:text-purple-500 underline underline-offset-4 transition-colors">{offer.text}</a>
                      ) : (
                        <span className="text-sm sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">{offer.text}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
};

export default ContactPage;
