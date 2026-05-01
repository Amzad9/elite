// components/SurchargeFAQAccordion.tsx
"use client";

import { useState } from 'react';

export default function SurchargeFAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

  const faqs = [
    {
      question: "What's the difference between surcharging and dual pricing?",
      answer: "Surcharging adds a fee on top of your advertised price. Dual pricing shows two prices upfront - cash and card. Customers prefer seeing choices rather than surprise fees.",
      highlight: true,
      keyPoints: ["Surcharging: adds fee at checkout", "Dual pricing: shows two prices upfront", "Customers prefer transparency"]
    },
    {
      question: "Is credit card surcharging legal in Most States?",
      answer: "Yes, credit card surcharging is legal in Most States, but it comes with significant compliance requirements including network registration, specific signage, and receipt formatting. Dual pricing offers the same savings without these complexities.",
      highlight: true,
      keyPoints: ["Legal but regulated", "Requires network registration", "Dual pricing is simpler"]
    },
    {
      question: "Which saves more money - surcharging or dual pricing?",
      answer: "Both offer identical savings potential (typically 2-4% per transaction). Dual pricing achieves this through transparent pricing while surcharging adds fees at checkout. Dual pricing often leads to better customer acceptance and higher cash usage.",
      highlight: false,
      keyPoints: ["Same savings potential", "2-4% per transaction", "Better customer acceptance with dual pricing"]
    },
    {
      question: "Can I surcharge debit cards in Most States?",
      answer: "No, surcharging debit cards is strictly prohibited nationwide. Dual pricing, however, works with all payment types including debit cards, giving you more flexibility and compliance peace of mind.",
      highlight: true,
      keyPoints: ["Debit surcharging: prohibited", "Dual pricing works with all cards", "Better compliance"]
    },
    {
      question: "What are Most States's surcharge disclosure requirements?",
      answer: "Most States businesses must: 1) Register with card networks 30 days in advance, 2) Display specific signage at entry and POS, 3) Show surcharge amounts on receipts separately, and 4) Limit fees to actual processing costs. Dual pricing requires none of this.",
      highlight: false,
      keyPoints: ["30-day registration", "Specific signage required", "Receipt formatting rules", "No requirements for dual pricing"]
    },
    {
      question: "Why do gas stations use dual pricing instead of surcharging?",
      answer: "Gas stations prefer dual pricing because it's simpler to implement, avoids customer confusion at the pump, eliminates registration requirements, and allows them to advertise competitive cash prices that drive traffic.",
      highlight: false,
      keyPoints: ["Simple implementation", "No registration needed", "Better customer experience", "Competitive cash pricing"]
    },
    {
      question: "Can I switch from surcharging to dual pricing?",
      answer: "Absolutely, and many Most States businesses are making the switch. The transition is straightforward - update your pricing displays and inform your payment processor. Most see improved customer satisfaction immediately.",
      highlight: false,
      keyPoints: ["Easy transition", "Update pricing displays", "Improved customer satisfaction", "Many businesses switching"]
    },
    {
      question: "Do I need to register dual pricing with Visa/Mastercard?",
      answer: "No registration is required for dual pricing. Unlike surcharging which requires 30-day advance registration with each network, dual pricing is considered a standard pricing practice with no registration needed.",
      highlight: true,
      keyPoints: ["No registration needed", "Standard pricing practice", "Immediate implementation"]
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-20 px-4 md:px-8 overflow-hidden bg-linear-to-b from-white to-gray-50">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-bl from-blue-500/10 via-cyan-500/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-linear-to-tr from-emerald-500/10 via-teal-500/5 to-transparent rounded-full blur-[300px]" />
      
      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">    
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
              Surcharging Vs Dual Pricing
              <span className="block text-2xl md:text-3xl font-normal text-gray-600 mt-2">
                Most States Business Owner FAQ
              </span>
            </h2>
          </div>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            Click on any question below to expand the answer. Key questions are highlighted.
          </p>
        </div>

        {/* Accordion FAQ */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl transition-all duration-300 ${
                openIndex === index 
                  ? faq.highlight 
                    ? 'bg-linear-to-r from-blue-500/10 to-cyan-500/10 ring-2 ring-blue-200' 
                    : 'bg-linear-to-b from-gray-50 to-white ring-1 ring-gray-200'
                  : faq.highlight
                    ? 'bg-linear-to-r from-blue-500/5 to-cyan-500/5 hover:bg-linear-to-r hover:from-blue-500/10 hover:to-cyan-500/10'
                    : 'bg-linear-to-b from-white to-gray-50 hover:from-gray-50 hover:to-gray-100'
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left p-6 rounded-2xl"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-lg shrink-0 flex items-center justify-center ${
                      faq.highlight 
                        ? 'bg-linear-to-br from-blue-500 to-cyan-500 text-white' 
                        : 'bg-linear-to-br from-gray-100 to-gray-200 text-gray-600'
                    }`}>
                      <span className="font-bold">{index + 1}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-bold text-gray-900">
                        {faq.question}
                      </h3>
                      {faq.highlight && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-linear-to-r from-blue-50 to-cyan-50 border border-blue-200 text-xs font-medium text-blue-700">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                          </svg>
                          Key Question
                        </span>
                      )}
                    </div>
                  </div>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${
                    openIndex === index 
                      ? 'bg-linear-to-br from-blue-500 to-cyan-500 text-white rotate-180' 
                      : 'bg-linear-to-br from-gray-100 to-gray-200 text-gray-600'
                  }`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                
                {/* Answer Section with animation */}
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-[500px] opacity-100 mt-6' : 'max-h-0 opacity-0'
                }`}>
                  <div className="border-t border-gray-200 pt-6">
                    <div className="flex gap-6">
                      <div className="flex-1">
                        <p className="text-gray-700 leading-relaxed mb-4">
                          {faq.answer}
                        </p>
                        
                        {/* Key Points */}
                        <div className="bg-linear-to-r from-gray-50 to-gray-100/50 rounded-xl p-4">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-2 h-2 bg-linear-to-r from-blue-500 to-cyan-500 rounded-full" />
                            <h4 className="text-sm font-bold text-gray-900">Key Points</h4>
                          </div>
                          <div className="grid sm:grid-cols-2 gap-2">
                            {faq.keyPoints.map((point, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <div className={`w-1.5 h-1.5 rounded-full ${faq.highlight ? 'bg-blue-500' : 'bg-gray-400'}`} />
                                <span className="text-sm text-gray-700">{point}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Quick Status */}
                      <div className="hidden md:block shrink-0 w-48">
                        <div className={`rounded-xl p-4 ${
                          faq.question.includes("debit cards") 
                            ? 'bg-linear-to-b from-red-50 to-white border border-red-100'
                            : faq.question.includes("legal") 
                            ? 'bg-linear-to-b from-amber-50 to-white border border-amber-100'
                            : 'bg-linear-to-b from-emerald-50 to-white border border-emerald-100'
                        }`}>
                          <div className="text-center mb-2">
                            <div className={`text-2xl font-bold mb-1 ${
                              faq.question.includes("debit cards") 
                                ? 'text-red-600'
                                : faq.question.includes("legal")
                                ? 'text-amber-600'
                                : 'text-emerald-600'
                            }`}>
                              {faq.question.includes("debit cards") ? '✗' : 
                               faq.question.includes("legal") ? '⚠' : '✓'}
                            </div>
                            <h5 className="text-xs font-bold text-gray-900 uppercase tracking-wide">
                              Status
                            </h5>
                          </div>
                          <p className="text-xs text-gray-600 text-center">
                            {faq.question.includes("debit cards") 
                              ? 'Not Permitted' 
                              : faq.question.includes("legal")
                              ? 'Legal with Conditions'
                              : 'Recommended'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-linear-to-b from-white to-gray-50 rounded-2xl p-6 border border-gray-200 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">90%</div>
            <h4 className="font-bold text-gray-900 mb-1">Less Complexity</h4>
            <p className="text-gray-600 text-sm">Dual pricing vs surcharging</p>
          </div>
          
          <div className="bg-linear-to-b from-white to-gray-50 rounded-2xl p-6 border border-gray-200 text-center">
            <div className="text-3xl font-bold text-emerald-600 mb-2">100%</div>
            <h4 className="font-bold text-gray-900 mb-1">Legal Compliance</h4>
            <p className="text-gray-600 text-sm">Dual pricing compliance rate</p>
          </div>
          
          <div className="bg-linear-to-b from-white to-gray-50 rounded-2xl p-6 border border-gray-200 text-center">
            <div className="text-3xl font-bold text-amber-600 mb-2">30 Days</div>
            <h4 className="font-bold text-gray-900 mb-1">Faster Setup</h4>
            <p className="text-gray-600 text-sm">No registration waiting period</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-linear-to-r from-blue-600 via-cyan-600 to-indigo-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
            <a href="#" className="relative inline-block bg-linear-to-r from-blue-600 via-cyan-600 to-indigo-600 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl shadow-blue-500/30 hover:shadow-3xl hover:shadow-blue-500/50 transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center justify-center gap-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Get Personalized Advice</span>
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </a>
          </div>
          <p className="text-gray-500 mt-6 text-sm">
            Still have questions? Our Most States payment experts are here to help
          </p>
        </div>
      </div>
    </section>
  );
}