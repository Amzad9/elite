import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Political Accounts | Elite Card Processing",
  description:
    "Secure, compliant credit card processing for political campaigns, PACs, committees, and fundraising platforms.",
};

const GradientHero = ({ children }: { children: React.ReactNode }) => (
  <section className="relative flex items-center justify-center overflow-hidden px-6 py-24 text-white">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
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

export default function PoliticalAccountsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-linear-to-br from-slate-50 via-white to-blue-50 text-slate-900">
      <GradientHero>
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <div className="mb-6 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/90 backdrop-blur">
            Political Accounts &amp; Campaign Processing
          </div>
          <h1 className="mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Payment Processing Built for Political Campaigns
          </h1>
          <p className="mx-auto mb-10 max-w-3xl text-lg md:text-xl leading-relaxed text-white/85">
            Elite Card Processing provides secure, FEC-aware credit card
            processing for political campaigns, committees, PACs, and
            fundraising platforms across the United States. Reliable technology,
            dedicated support, and the compliance infrastructure candidates
            require.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/getquote"
              className="rounded-xl bg-[#f4e28f] px-8 py-4 font-semibold text-[#10284D] shadow-lg transition hover:brightness-95"
            >
              Get Your Free Quote
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
              Who We Serve
            </h2>
            <p className="mx-auto max-w-2xl text-slate-600">
              From local races to federal campaigns, we process donations for
              candidates and organizations nationwide.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "Candidate Campaigns",
                "Federal, state, and local candidate committees at every level of office.",
                "M3 21v-2a4 4 0 014-4h10a4 4 0 014 4v2M12 11a4 4 0 100-8 4 4 0 000 8z",
              ],
              [
                "PACs & Super PACs",
                "Political action committees raising and disbursing funds at scale.",
                "M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-6a4 4 0 11-8 0 4 4 0 018 0zm6 3a3 3 0 100-6 3 3 0 000 6z",
              ],
              [
                "Party Committees",
                "County, state, and national party organizations and caucus committees.",
                "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
              ],
              [
                "Fundraising Platforms",
                "Online donation platforms, advocacy groups, and political vendors.",
                "M13 10V3L4 14h7v7l9-11h-7z",
              ],
            ].map(([title, body, icon]) => (
              <div
                key={title}
                className="rounded-3xl border border-white/40 bg-white/40 backdrop-blur-xl p-6 transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#10284D]">
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
                </div>
                <h3 className="mb-2 text-lg font-bold">{title}</h3>
                <p className="text-sm text-slate-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
              Our Campaign Processing Solutions
            </h2>
            <p className="mx-auto max-w-2xl text-slate-600">
              Purpose-built payment infrastructure for the unique demands of
              political fundraising.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Online Donation Processing",
                body: "Secure donation pages, recurring contributions, and one-click giving integrations designed for donor conversion and retention.",
                icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
              },
              {
                title: "FEC-Aware Compliance",
                body: "Contribution limit monitoring, donor information capture, and reporting tools that help committees stay on the right side of federal and state rules.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
              },
              {
                title: "Fraud & Risk Monitoring",
                body: "Advanced screening tools flag suspicious transactions, foreign contributions, and card testing attempts — protecting your committee and its reputation.",
                icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
              },
              {
                title: "High-Volume Scalability",
                body: "Handle end-of-quarter surges, debate-night spikes, and major fundraising moments without throttling, slowdowns, or failed donations.",
                icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
              },
              {
                title: "Fast Settlement",
                body: "Next-day funding keeps cash flow strong when your campaign needs it most — from media buys to GOTV operations.",
                icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
              },
              {
                title: "Dedicated Support",
                body: "Talk to real people who understand campaign cycles, deadlines, and pressure. No offshore call centers. No script readers.",
                icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",
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

      <section className="px-6 py-20 text-white bg-linear-to-br from-[#0a1445] via-[#0b2f6a] to-[#0e4b87] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagmonds.png')]" />
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Why Campaigns Choose Elite Card Processing
            </h2>
            <p className="mx-auto max-w-2xl text-blue-100">
              Most processors won&apos;t touch political accounts. We specialize
              in them.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "Specialized in Political Processing",
                "Political accounts are considered high-risk by most banks. We've built the relationships and infrastructure to approve and support them.",
              ],
              [
                "No Deplatforming Risk",
                "Unlike mainstream payment platforms that have dropped political clients without warning, we stand behind the accounts we approve.",
              ],
              [
                "Nationwide Service",
                "We process for campaigns in all 50 states — federal, state legislative, gubernatorial, county, and municipal.",
              ],
              [
                "Competitive Rates",
                "Transparent, campaign-friendly pricing that protects donor dollars and stretches every fundraising cycle further.",
              ],
              [
                "Seamless Platform Integration",
                "Integrates with popular donation platforms, CRMs, and campaign software — or use our branded donation pages out of the box.",
              ],
              [
                "Fast Onboarding",
                "We know campaigns move fast. Our team works to get you approved, integrated, and processing donations quickly.",
              ],
            ].map(([title, body]) => (
              <div key={title} className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500">
                  <svg
                    className="h-5 w-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold">{title}</h3>
                  <p className="text-sm text-blue-100">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <div className="mb-4 inline-block rounded-full bg-[#10284D]/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#10284D]">
              Campaign Fundraising Tools
            </div>
            <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl">
              Built to Maximize Donor Conversion
            </h2>
            <p className="mb-6 leading-relaxed text-slate-600">
              Every abandoned donation is a lost opportunity. Our campaign
              donation tools are optimized to convert visitors into contributors
              — with mobile-first forms, saved payment info, and one-click
              recurring giving.
            </p>
            <ul className="space-y-3">
              {[
                "Mobile-optimized donation forms that convert on any device",
                "Recurring contributions to build sustainable donor programs",
                "Custom donation amount presets and upsell logic",
                "Automatic donor receipts and compliance-ready reporting",
                "Real-time dashboards for finance directors and treasurers",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-blue-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <span className="text-slate-700">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-white/40 bg-white/40 backdrop-blur-xl p-8 shadow-xl">
            <div className="rounded-2xl bg-white/70 backdrop-blur p-6 shadow-sm">
              <div className="mb-6 text-center">
                <h4 className="text-xl font-bold text-slate-900">
                  Support the Campaign
                </h4>
                <p className="mt-1 text-sm text-slate-500">
                  Secure Contribution
                </p>
              </div>
              <div className="mb-4 grid grid-cols-3 gap-2">
                {["$25", "$100", "$250", "$500", "$1,000", "Other"].map(
                  (amt) => (
                    <button
                      key={amt}
                      type="button"
                      className={
                        amt === "$100"
                          ? "rounded-xl bg-[#10284D] py-3 font-bold text-white"
                          : "rounded-xl border border-[#10284D] py-3 font-bold text-[#10284D]"
                      }
                    >
                      {amt}
                    </button>
                  ),
                )}
              </div>
              <div className="mb-4 flex items-center gap-2 rounded-md bg-slate-50 p-3">
                <input
                  type="checkbox"
                  checked
                  readOnly
                  className="h-4 w-4 accent-[#10284D]"
                />
                <span className="text-sm text-slate-700">
                  Make this a monthly contribution
                </span>
              </div>
              <button
                type="button"
                className="w-full rounded-xl bg-[#f4e28f] py-4 font-bold text-[#10284D] transition hover:brightness-95"
              >
                Donate Now →
              </button>
              <p className="mt-4 text-center text-xs text-slate-400">
                🔒 Secure processing by Elite Card Processing
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200/70 bg-white/40 backdrop-blur px-6 py-16">
        <div className="mx-auto grid max-w-5xl gap-8 text-center md:grid-cols-3">
          {[
            ["50", "States Served"],
            ["Next-Day", "Funding Available"],
            ["4.9★", "Client Rating"],
          ].map(([value, label]) => (
            <div key={label}>
              <div className="mb-2 text-4xl font-bold text-blue-700 md:text-5xl">
                {value}
              </div>
              <div className="text-sm uppercase tracking-wide text-slate-600">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600">Answers to what campaigns ask us most.</p>
          </div>
          <div className="space-y-4">
            {[
              [
                "Why do most processors reject political accounts?",
                "Political campaigns are classified as high-risk by most underwriters due to chargeback exposure, regulatory scrutiny, and reputational considerations. We maintain specialized banking relationships that allow us to underwrite and support political accounts that mainstream processors turn away.",
              ],
              [
                "How long does approval take?",
                "Most political accounts can be approved within a few business days once documentation is complete. We know campaigns move fast, especially close to filing deadlines, and we prioritize quick turnaround.",
              ],
              [
                "Do you integrate with our existing donation platform?",
                "Yes. We integrate with most major campaign CRMs and donation platforms via standard gateway APIs. If you have a custom platform, our technical team will work directly with your developers to get integration live quickly.",
              ],
              [
                "What about compliance and reporting?",
                "Our donation pages capture the donor information required for FEC and state-level filings — including occupation and employer where applicable. Exports are designed to integrate cleanly with standard compliance software used by treasurers and finance directors.",
              ],
              [
                "Can you handle end-of-quarter fundraising spikes?",
                "Absolutely. Our infrastructure is built to handle the massive volume spikes that happen at quarter-end, after debates, and around major campaign moments. No throttling, no failed donations, no lost contributions.",
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
            Ready to Get Your Campaign Processing?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/85">
            Talk to a specialist who actually understands political accounts.
            Quick approvals, transparent pricing, and the reliability your
            campaign can&apos;t afford to lose.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/getquote"
              className="rounded-xl bg-[#f4e28f] px-8 py-4 font-semibold text-[#10284D] shadow-lg transition hover:brightness-95"
            >
              Get Your Free Quote
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
