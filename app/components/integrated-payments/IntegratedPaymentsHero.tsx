'use client';
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function IntegratedPaymentsHero() {
  return (
    <>
      {/* Hero section */}
      <section className="relative flex items-center py-12 md:py-16 lg:py-24 justify-center overflow-hidden bg-white min-h-[90vh] lg:min-h-0">
        {/* Subtle background accents - adjusted for mobile */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-[#10284D]/5 blur-3xl" />
          <div className="absolute right-[-80px] bottom-[-40px] h-80 w-80 rounded-full bg-[#d4af37]/10 blur-3xl lg:block" />
          <div className="absolute inset-y-0 right-0 w-1/3 max-w-xs bg-[radial-gradient(circle_at_top,rgba(16,40,77,0.08),transparent_60%)] hidden lg:block" />
          {/* Mobile accent */}
          <div className="absolute top-20 right-0 w-40 h-40 bg-[#d4af37]/5 rounded-full blur-2xl lg:hidden" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] gap-8 lg:gap-16 items-center mx-auto">
            <div className="text-center lg:text-left">
              {/* Badge - responsive */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#10284D]/5 text-[#10284D] text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] mb-3 sm:mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
                <span className="truncate max-w-[250px] sm:max-w-none">
                  Integrated Payments for Software Vendors
                </span>
              </div>
              
              {/* Headline - responsive */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 tracking-tight mb-4 sm:mb-5">
                Integrated payments
                <span className="block text-[#10284D] mt-1 sm:mt-0">
                  to supercharge your software
                </span>
              </h1>
              
              {/* Description - responsive */}
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0">
                Integrate and monetize payments within your platform to create a seamless user experience,
                unlock recurring revenue, and give your customers one trusted partner for software and payments.
              </p>
              
              {/* CTA Section - responsive */}
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center lg:justify-start px-4 sm:px-0">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-semibold text-slate-900 bg-[linear-gradient(90deg,#f4e28f,#f1d86a,#d4af37,#c9a227,#f4e28f)] bg-[length:300%_100%] animate-[gradientMove_4s_ease_infinite] shadow-[0_0_20px_rgba(212,175,55,0.35)] hover:shadow-[0_0_28px_rgba(212,175,55,0.45)] transition-all"
                >
                  Talk to our team
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </Link>
                <span className="text-xs sm:text-sm text-gray-500">
                  Go live in weeks, not months.
                </span>
              </div>
              
              {/* Stats - responsive grid */}
              <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-4 sm:gap-6 text-left max-w-lg mx-auto lg:mx-0">
                <div className="bg-white/50 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-gray-100/50 lg:border-0 lg:bg-transparent lg:backdrop-blur-none lg:p-0">
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#10284D]">30%+</p>
                  <p className="text-xs sm:text-sm text-gray-600 leading-tight">
                    Average increase in payments revenue for platforms.
                  </p>
                </div>
                <div className="bg-white/50 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-gray-100/50 lg:border-0 lg:bg-transparent lg:backdrop-blur-none lg:p-0">
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#10284D]">1 integration</p>
                  <p className="text-xs sm:text-sm text-gray-600 leading-tight">
                    Powering online, in‑person, and recurring payments.
                  </p>
                </div>
              </div>
            </div>

            {/* Hero Image - visible on tablet and up */}
            <div className="hidden md:block lg:hidden xl:block">
              <div className="relative max-w-md mx-auto lg:max-w-none">
                <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-[#10284D]/8 to-[#d4af37]/10 blur-xl" />
                <div className="relative rounded-xl lg:rounded-2xl border border-gray-200 bg-white shadow-lg lg:shadow-xl overflow-hidden">
                  <img
                    src="/payment-integration/payment.png"
                    alt="Customer completing a seamless payment"
                    className="w-full h-auto object-cover"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Breadcrumb / title bar - responsive */}
      <section className="bg-gray-100 border-b border-gray-200">
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between lg:justify-start">
            <p className="text-xs sm:text-sm md:text-base text-gray-700 font-medium truncate">
              Integrated Payments for Software Vendors
            </p>
            {/* Mobile home link */}
            <Link href="/" className="lg:hidden text-xs text-gray-500 hover:text-[#10284D]">
              Home
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile Hero Image - shown below on small devices */}
      <div className="md:hidden w-full px-4 pb-8 -mt-4">
        <div className="relative">
          <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-[#10284D]/8 to-[#d4af37]/10 blur-xl" />
          <div className="relative rounded-xl border border-gray-200 bg-white shadow-lg overflow-hidden">
            <img
              src="/payment-integration/payment.png"
              alt="Customer completing a seamless payment"
              className="w-full h-auto object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </>
  );
}