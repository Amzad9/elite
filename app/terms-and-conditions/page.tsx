import React from "react";

const TERMS_OF_SERVICE_PDF =
  "/pdf/Elite-NTI-CITIZENS-Merchant Agreement-M2M-202604.pdf";
const MPA_TC_PDF = "/pdf/Elite-NTI-CITIZENS-Merchant Agreement-3YR-202604.pdf";

export default function TermsAndConditionsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-linear-to-br from-blue-50 via-indigo-50 to-pink-50">
      <section className="relative flex h-[250px] items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        />
        <div className="absolute inset-0 bg-linear-to-br from-[#152E5A]/90 via-[#152E5A]/75 to-[#152E5A]/90" />

        <div className="relative z-10 px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Terms &amp; Conditions
          </h1>
          <p className="text-white/80 text-base sm:text-lg">
            View or download the latest agreements below.
          </p>
          <div className="mx-auto mt-6 h-1 w-28 rounded-full bg-linear-to-r from-blue-500 via-purple-500 to-pink-500" />
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-5xl px-6 pb-24 pt-14">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Terms of Service",
              description: "Merchant Agreement (Month-to-Month)",
              href: TERMS_OF_SERVICE_PDF,
            },
            {
              title: "MPA T&C",
              description: "Merchant Agreement (3 Year)",
              href: MPA_TC_PDF,
            },
          ].map((doc) => (
            <div
              key={doc.title}
              className="rounded-3xl border border-white/40 bg-white/40 backdrop-blur-xl shadow-sm p-8"
            >
              <h2 className="text-2xl font-bold text-slate-900">{doc.title}</h2>
              <p className="mt-2 text-slate-600">{doc.description}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={doc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-[#152E5A] px-5 py-3 text-sm font-semibold text-white hover:bg-[#0f2447] transition-colors"
                >
                  Open PDF
                </a>
                <a
                  href={doc.href}
                  download
                  className="inline-flex items-center justify-center rounded-xl border border-slate-300/70 bg-white/60 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-white transition-colors"
                >
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-slate-500">
          If you have questions, contact us at{" "}
          <a className="underline" href="mailto:support@elitecardprocessing.com">
            support@elitecardprocessing.com
          </a>
          .
        </p>
      </section>
    </div>
  );
}

