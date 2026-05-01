import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "QuickBooks Credit Card Processing | Elite Card Processing",
  description:
    "Stop overpaying for QuickBooks credit card processing. Our integrated AR automation platform slashes fees, speeds up payments, and keeps your books reconciled.",
};

const GradientHero = ({ children }: { children: React.ReactNode }) => (
  <section className="relative flex items-center justify-center overflow-hidden px-6 py-24 text-white">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    />
    <div className="absolute inset-0 bg-linear-to-br from-[#152E5A]/90 via-[#152E5A]/75 to-[#152E5A]/90" />
    <div className="absolute inset-0 opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/diagmonds.png')]" />
    {children}
  </section>
);

const IconCircle = ({ children }: { children: React.ReactNode }) => (
  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-blue-500/20 to-indigo-500/20 border border-white/20 backdrop-blur">
    {children}
  </div>
);

const Icon = ({ path }: { path: string }) => (
  <svg
    className="h-7 w-7 text-white"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d={path}
    />
  </svg>
);

export default function QuickBooksProcessingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-linear-to-br from-slate-50 via-white to-blue-50 text-slate-900">
      <GradientHero>
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <div className="mb-6 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/90 backdrop-blur">
            QuickBooks Credit Card Processing
          </div>
          <h1 className="mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Stop Overpaying for QuickBooks Payments
          </h1>
          <p className="mx-auto mb-10 max-w-3xl text-lg md:text-xl leading-relaxed text-white/85">
            QuickBooks charges up to{" "}
            <span className="font-semibold text-white">3.5% per transaction</span>
            . We replace their high-rate processing with a fully integrated
            solution that automates your accounts receivable, accelerates
            payment, and keeps your books perfectly in sync — all without
            changing how you use QuickBooks.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/getquote"
              className="rounded-xl bg-[#f4e28f] px-8 py-4 font-semibold text-[#10284D] shadow-lg transition hover:brightness-95"
            >
              See How Much You&apos;ll Save
            </a>
            <a
              href="tel:+12403299424"
              className="rounded-xl border border-white/40 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              Call 240-329-9424
            </a>
          </div>
        </div>
      </GradientHero>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
              The Real Cost of QuickBooks Payments
            </h2>
            <p className="mx-auto max-w-2xl text-slate-600">
              Flat-rate pricing looks simple — until you add it up. B2B and
              invoicing businesses get hit hardest.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200/70 bg-white/60 backdrop-blur p-8 shadow-sm">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-xl font-bold text-slate-900">
                  QuickBooks Payments
                </h3>
                <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
                  High Rate
                </span>
              </div>
              <ul className="space-y-4 text-slate-700">
                {[
                  ["Invoiced card payments", "2.99%"],
                  ["Keyed-in transactions", "3.5%"],
                  ["Swiped transactions", "2.5%"],
                  ["ACH transfers", "1%"],
                  ["Pass fees to customers", "Limited"],
                ].map(([label, value]) => (
                  <li
                    key={label}
                    className="flex items-center justify-between border-b border-slate-200 pb-3 last:border-b-0 last:pb-0"
                  >
                    <span>{label}</span>
                    <span className="font-bold text-red-600">{value}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm italic text-slate-500">
                Rates source: Intuit published pricing
              </p>
            </div>

            <div className="relative rounded-3xl border border-[#10284D]/15 bg-white/70 backdrop-blur p-8 shadow-lg">
              <div className="absolute -top-3 left-8 rounded-full bg-[#10284D] px-3 py-1 text-xs font-bold text-white">
                RECOMMENDED
              </div>
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-xl font-bold text-slate-900">
                  Elite Card Processing
                </h3>
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                  Save Thousands
                </span>
              </div>
              <ul className="space-y-4 text-slate-700">
                {[
                  ["Interchange-optimized rates", "Lower"],
                  ["Level 2 / Level 3 optimization", "Included"],
                  ["ACH processing", "Available"],
                  ["Cash discount / dual pricing", "Eliminate fees"],
                  ["Dedicated local support", "Included"],
                ].map(([label, value]) => (
                  <li
                    key={label}
                    className="flex items-center justify-between border-b border-blue-100 pb-3 last:border-b-0 last:pb-0"
                  >
                    <span>{label}</span>
                    <span className="font-bold text-green-700">{value}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 font-semibold text-[#10284D]">
                Most QuickBooks users save 25–50% on processing fees.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-4xl rounded-3xl p-8 text-white bg-linear-to-br from-[#0a1445] via-[#0b2f6a] to-[#0e4b87] shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagmonds.png')]" />
            <div className="grid gap-6 text-center md:grid-cols-3">
              <div>
                <div className="mb-1 text-xs uppercase tracking-widest text-blue-200">
                  Monthly Processing
                </div>
                <div className="text-2xl font-bold">$50,000</div>
              </div>
              <div>
                <div className="mb-1 text-xs uppercase tracking-widest text-blue-200">
                  QuickBooks Payments (2.99%)
                </div>
                <div className="text-2xl font-bold text-red-300">$1,495/mo</div>
              </div>
              <div>
                <div className="mb-1 text-xs uppercase tracking-widest text-blue-200">
                  With Elite (Est.)
                </div>
                <div className="text-2xl font-bold text-green-300">
                  Save $6,000+/yr
                </div>
              </div>
            </div>
            <p className="mt-6 text-center text-sm text-blue-100">
              Example only. Actual savings depend on card mix, ticket size, and
              volume. Request a free statement analysis for your exact number.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <div className="mb-4 inline-block rounded-full bg-[#10284D]/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#10284D]">
              Integrated AR Automation
            </div>
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
              More Than a Lower Rate — A Smarter Way to Get Paid
            </h2>
            <p className="mx-auto max-w-2xl text-slate-600">
              We pair our processing with a powerful AR automation platform that
              plugs directly into QuickBooks Online and Desktop. You keep
              invoicing the way you always have — we handle the rest.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Two-Way QuickBooks Sync",
                body: "Invoices, customers, and payments sync automatically between QuickBooks and our platform. No double entry. No reconciliation headaches.",
                icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
              },
              {
                title: "Automated Invoice Follow-Ups",
                body: "Customizable email reminder sequences hunt down overdue invoices so your team doesn't have to. Merchants typically see a 40% drop in overdue AR.",
                icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
              },
              {
                title: "Get Paid 15 Days Faster",
                body: "Click-to-pay invoices with embedded branded payment links shorten average DSO significantly — real cash flow impact in the first month.",
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
              },
              {
                title: "Surcharge & Cash Discount Built-In",
                body: "Compliantly pass processing fees to customers who pay by card. For many QuickBooks users, this effectively drops processing cost to near zero.",
                icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
              },
              {
                title: "Secure Card Vault & Recurring Billing",
                body: "Tokenize customer payment methods for subscriptions, payment plans, and one-click repeat payments — PCI compliant and auto-posted back to QuickBooks.",
                icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
              },
              {
                title: "Save 10–20 Hours per Week",
                body: "Automating invoicing, follow-ups, and reconciliation eliminates the grunt work that's eating your bookkeeper's or controller's time.",
                icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-3xl border border-white/40 bg-white/40 backdrop-blur-xl p-8 transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="mb-5">
                  <IconCircle>
                    <Icon path={f.icon} />
                  </IconCircle>
                </div>
                <h3 className="mb-3 text-xl font-bold">{f.title}</h3>
                <p className="text-slate-600">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
              How It Works
            </h2>
            <p className="text-slate-600">
              Nothing changes about how you use QuickBooks. Everything changes
              about what happens next.
            </p>
          </div>

          <div className="space-y-8">
            {[
              [
                "Free Statement Analysis",
                "Send us a recent QuickBooks Payments or processing statement. We'll show you — line by line — exactly what you're being charged and what you'd pay with us.",
              ],
              [
                "Quick Setup & Sync",
                "Our team handles onboarding. Connect your QuickBooks Online or Desktop account in 15–45 minutes. No new software to learn.",
              ],
              [
                "Invoice Like Normal",
                "Continue creating invoices in QuickBooks exactly how you do today. Behind the scenes, our platform takes over delivery, follow-ups, and payment collection.",
              ],
              [
                "Get Paid Faster, Pay Less",
                "Payments auto-post and reconcile in QuickBooks. You keep more of every dollar and recover hours every week.",
              ],
            ].map(([title, body], idx) => (
              <div key={title} className="flex items-start gap-6">
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-xl font-bold text-white bg-[#10284D]"
                >
                  {idx + 1}
                </div>
                <div
                  className={`flex-1 ${idx < 3 ? "border-b border-slate-200 pb-8" : ""}`}
                >
                  <h3 className="mb-2 text-xl font-bold text-slate-900">
                    {title}
                  </h3>
                  <p className="text-slate-600">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 text-white bg-linear-to-br from-[#0a1445] via-[#0b2f6a] to-[#0e4b87] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagmonds.png')]" />
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Built for QuickBooks Users Who Invoice
            </h2>
            <p className="mx-auto max-w-2xl text-blue-100">
              If you send invoices out of QuickBooks Online or Desktop,
              you&apos;re paying too much. Here&apos;s who saves the most.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "B2B & Wholesale",
                "Higher-ticket invoices where Level 2/3 data unlocks the biggest interchange savings.",
                "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
              ],
              [
                "Contractors & Trades",
                "Field service, construction, HVAC, and specialty trades that invoice through QuickBooks.",
                "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
              ],
              [
                "Professional Services",
                "Law firms, accounting practices, consultants, and agencies that bill by invoice.",
                "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
              ],
              [
                "Recurring Billing",
                "Subscription services, property management, and any business with repeat invoicing cycles.",
                "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
              ],
            ].map(([title, body, icon]) => (
              <div
                key={title}
                className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur"
              >
                <div className="mb-4 h-10 w-10 text-blue-200">
                  <svg
                    className="h-10 w-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={icon}
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-bold">{title}</h3>
                <p className="text-sm text-blue-100">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200/70 bg-white/40 backdrop-blur px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Real Results for QuickBooks Users
            </h2>
          </div>
          <div className="grid gap-8 text-center md:grid-cols-3">
            {[
              ["40%", "Reduction in Overdue Invoices"],
              ["15 Days", "Faster Time-to-Payment"],
              ["10–20 hrs", "Weekly Admin Time Saved"],
            ].map(([value, label]) => (
              <div key={label}>
                <div className="mb-2 text-5xl font-bold text-blue-700">
                  {value}
                </div>
                <div className="text-sm uppercase tracking-wide text-slate-600">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600">
              The questions QuickBooks users ask before switching.
            </p>
          </div>
          <div className="space-y-4">
            {[
              [
                "Do I have to stop using QuickBooks?",
                "No. You keep using QuickBooks Online or Desktop exactly how you do today. We simply replace the processor behind it. Invoices, customers, and payments all continue to live in QuickBooks.",
              ],
              [
                "What about my existing invoices and recurring payments?",
                "Open invoices sync over during onboarding. Recurring billing profiles and saved payment methods can be migrated so there's no disruption to your customers or cash flow.",
              ],
              [
                "How long does setup take?",
                "Most QuickBooks users are fully set up in 15–45 minutes. Our team handles onboarding and walks you through the sync — no new software to learn and no developer required.",
              ],
              [
                "Will it work with QuickBooks Desktop and Online?",
                "Yes. We support both QuickBooks Online and QuickBooks Desktop (including multi-company file environments).",
              ],
              [
                "How do I know I'll actually save money?",
                "We don't ask you to guess. Send a recent processing statement and we'll do a free, line-by-line analysis showing exactly what you're paying now versus what you'd pay with us. No pressure, no obligation.",
              ],
              [
                "Can I pass processing fees to my customers?",
                "Yes. We support compliant surcharging and cash discount programs. For many QuickBooks users — especially B2B — this drops their effective processing cost close to zero.",
              ],
            ].map(([q, a]) => (
              <details
                key={q}
                className="group rounded-2xl border border-white/40 bg-white/40 backdrop-blur-xl p-6 shadow-sm"
              >
                <summary className="flex cursor-pointer items-center justify-between font-semibold text-slate-900">
                  {q}
                  <span className="text-xl text-[#10284D] transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-slate-600">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <GradientHero>
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">
            See Exactly How Much You&apos;d Save
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/85">
            Send us one recent processing statement. We&apos;ll come back with a
            side-by-side comparison and a custom proposal — no sales pitch
            required.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/getquote"
              className="rounded-xl bg-[#f4e28f] px-8 py-4 font-semibold text-[#10284D] shadow-lg transition hover:brightness-95"
            >
              Get Free Statement Analysis
            </a>
            <a
              href="tel:+12403299424"
              className="rounded-xl border border-white/40 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              Call 240-329-9424
            </a>
          </div>
        </div>
      </GradientHero>

      <section className="px-6 py-14">
        <div className="mx-auto grid max-w-6xl gap-8 text-center md:grid-cols-3">
          {[
            [
              "Call Us",
              "(240) 329-9424",
              "tel:+12403299424",
              "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
            ],
            [
              "Visit Us",
              "13701 Maugansville Rd, Suite 5\nHagerstown, MD 21740",
              "",
              "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
            ],
            [
              "Contact Online",
              "Go to Contact Page",
              "/contact",
              "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
            ],
          ].map(([title, text, href, icon]) => (
            <div key={title}>
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#10284D]">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={icon}
                  />
                </svg>
              </div>
              <h4 className="mb-1 font-bold text-slate-900">{title}</h4>
              {href ? (
                <a href={href} className="text-blue-700 hover:underline">
                  {text}
                </a>
              ) : (
                <p className="whitespace-pre-line text-sm text-slate-600">
                  {text}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
