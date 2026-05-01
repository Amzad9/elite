"use client";

import { useState, useEffect } from "react";

const STEPS = [
  {
    id: "integrate",
    number: "01",
    title: "Integrate",
    description:
      "Embed payment capabilities directly into your software with developer-friendly APIs and SDKs. Get up and running quickly with documentation, sandbox environments, and dedicated technical support.",
  },
  {
    id: "monetize",
    number: "02",
    title: "Monetize",
    description:
      "Unlock new revenue streams by offering payment processing to your customers. Flexible pricing models and transparent reporting help you grow your bottom line while adding value for your users.",
  },
  {
    id: "grow",
    number: "03",
    title: "Grow",
    description:
      "Partner with our expert team from integration through activation and take advantage of dedicated sales and marketing resources to help accelerate adoption and grow your business.",
  },
];

export default function StepsSection() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isMobile, setIsMobile] = useState(false);
  const active = STEPS[activeIndex];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="bg-gray-100 py-12 md:py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-8 md:mb-12 text-center md:text-left">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-3">
            A simple path to integrated payments
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto md:mx-0">
            Move from evaluation to live, revenue‑generating payments in three focused steps.
          </p>
        </div>

        {/* Mobile: Vertical stack */}
        {isMobile ? (
          <div className="flex flex-col gap-6">
            {STEPS.map((step, index) => {
              const isActive = index === activeIndex;
              return (
                <div 
                  key={step.id}
                  className={`rounded-2xl border transition-all overflow-hidden ${
                    isActive 
                      ? "border-[#d4af37]/70 shadow-md" 
                      : "border-gray-200/80"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className="w-full text-left px-5 py-4 bg-white flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`inline-flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold tracking-widest ${
                          isActive
                            ? "bg-[#d4af37]/15 text-[#d4af37] border border-[#d4af37]/60"
                            : "bg-gray-200 text-gray-700"
                        }`}
                      >
                        {step.number}
                      </span>
                      <span
                        className={`text-base font-semibold ${
                          isActive ? "text-[#10284D]" : "text-gray-600"
                        }`}
                      >
                        {step.title}
                      </span>
                    </div>
                    
                    {/* Active indicator */}
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
                    )}
                  </button>
                  
                  {/* Expandable description on mobile */}
                  {isActive && (
                    <div className="px-5 pb-5 pt-2 bg-[#f9fafb] border-t border-gray-100">
                      <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                        Step {step.number} &middot; {step.title}
                      </p>
                      <p className="text-sm text-gray-800 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          /* Desktop: Grid layout with side navigation */
          <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-8 lg:gap-10 items-start">
            {/* Steps list */}
            <div className="space-y-2">
              {STEPS.map((step, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={step.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-4 transition-all border ${
                      isActive
                        ? "border-[#d4af37]/70 bg-[#f9fafb] shadow-sm"
                        : "border-transparent hover:border-gray-200 hover:bg-white/60"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`inline-flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold tracking-widest shrink-0 ${
                          isActive
                            ? "bg-[#d4af37]/15 text-[#d4af37] border border-[#d4af37]/60"
                            : "bg-gray-200 text-gray-700"
                        }`}
                      >
                        {step.number}
                      </span>
                      <span
                        className={`text-base font-semibold ${
                          isActive ? "text-[#10284D]" : "text-gray-600"
                        }`}
                      >
                        {step.title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active step detail */}
            <div className="relative rounded-2xl border border-gray-200/80 p-6 lg:p-8 shadow-sm bg-[#f9fafb] overflow-hidden">
              <div
                className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-[#d4af37]/10 blur-3xl"
                aria-hidden
              />
              <div className="relative">
                <p className="text-xs lg:text-sm font-semibold uppercase tracking-[0.18em] text-gray-500 mb-2 lg:mb-3">
                  Step {active.number} &middot; {active.title}
                </p>
                <p className="text-base lg:text-lg text-gray-800 leading-relaxed">
                  {active.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}