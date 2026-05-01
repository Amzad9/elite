"use client";

import { useState, useEffect } from "react";
import { CreditCard, FileText, BarChart3, Code2, Zap, Users } from "lucide-react";

const TABS = [
  "SEAMLESS PAYMENTS",
  "DEVELOPER-FRIENDLY INTEGRATION",
  "PARTNERSHIP IN GROWTH",
];

const TAB_CONTENT = [
  {
    headline: "Create exceptional user experiences with",
    highlight: "seamless omni-channel payments",
    cards: [
      {
        icon: CreditCard,
        text:
          "Streamline payments across online, in‑person, and mobile channels with one unified checkout experience.",
      },
      {
        icon: FileText,
        text:
          "Reduce friction for your users with a single, branded payments layer that fits naturally into your workflows.",
      },
      {
        icon: BarChart3,
        text:
          "Gain real‑time visibility into transaction trends so you can optimize pricing, cash flow, and customer experience.",
      },
    ],
  },
  {
    headline: "Build faster with",
    highlight: "developer-friendly APIs and tools",
    cards: [
      {
        icon: Code2,
        text:
          "Modern REST APIs, SDKs, and examples that let your team embed payments in days instead of months.",
      },
      {
        icon: Zap,
        text:
          "Robust sandbox, test data, and webhooks so you can validate every edge case before going live.",
      },
      {
        icon: FileText,
        text:
          "Dedicated technical support, integration reviews, and clear documentation to keep your roadmap moving.",
      },
    ],
  },
  {
    headline: "Scale with a",
    highlight: "partnership built for growth",
    cards: [
      {
        icon: Users,
        text:
          "Work with partner managers who understand your vertical and stay engaged from launch through expansion.",
      },
      {
        icon: BarChart3,
        text:
          "Tap into sales enablement, playbooks, and marketing assets that help you drive adoption with your customers.",
      },
      {
        icon: Zap,
        text:
          "Collaborate on go‑to‑market campaigns and programs designed to grow recurring revenue for both sides.",
      },
    ],
  },
];

export default function TabsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const content = TAB_CONTENT[activeTab];

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // For mobile: render as accordion instead of tabs
  const renderMobileView = () => (
    <div className="space-y-4">
      {TABS.map((label, index) => {
        const isActive = index === activeTab;
        const tabContent = TAB_CONTENT[index];
        
        return (
          <div 
            key={index}
            className={`border rounded-xl overflow-hidden transition-all ${
              isActive 
                ? "border-[#d4af37] shadow-md" 
                : "border-gray-200"
            }`}
          >
            <button
              type="button"
              onClick={() => setActiveTab(isActive ? -1 : index)}
              className={`w-full text-left px-5 py-4 flex items-center justify-between ${
                isActive ? "bg-white" : "bg-gray-50"
              }`}
            >
              <span className={`text-sm font-semibold uppercase tracking-wide ${
                isActive ? "text-[#10284D]" : "text-gray-600"
              }`}>
                {label}
              </span>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center transition-transform ${
                isActive ? "rotate-180 bg-[#d4af37]/10" : "bg-gray-200"
              }`}>
                <svg 
                  className={`w-3 h-3 ${isActive ? "text-[#d4af37]" : "text-gray-500"}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            
            {isActive && (
              <div className="p-5 pt-0 bg-white">
                <p className="text-lg sm:text-xl font-bold text-gray-900 leading-tight mb-6">
                  {tabContent.headline}{" "}
                  <span className="text-[#d4af37]">{tabContent.highlight}</span>
                </p>
                <div className="space-y-4">
                  {tabContent.cards.map((card, i) => (
                    <div
                      key={i}
                      className="bg-gray-50 border border-gray-100 rounded-lg p-4"
                    >
                      <div className="flex items-start gap-3">
                        <card.icon className="w-6 h-6 text-[#10284D] shrink-0 mt-0.5" strokeWidth={1.5} />
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {card.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );

  // For tablet: horizontal scrollable tabs
  const renderTabletView = () => (
    <>
      <div className="relative mb-8">
        <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-hide -mx-4 px-4">
          {TABS.map((label, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveTab(index)}
              aria-selected={activeTab === index}
              className={`flex-shrink-0 px-5 py-3.5 text-xs font-semibold uppercase tracking-wide rounded-full transition-all ${
                activeTab === index
                  ? "bg-[#10284D] text-white shadow-md"
                  : "bg-white border border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        {/* Fade indicators for scroll */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />
      </div>
      
      <div className="pt-4">
        <p className="text-2xl font-bold text-gray-900 leading-tight mb-8">
          {content.headline}{" "}
          <span className="text-[#d4af37]">{content.highlight}</span>
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {content.cards.map((card, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <card.icon className="w-8 h-8 text-[#10284D] mb-3" strokeWidth={1.5} />
              <p className="text-sm text-gray-700 leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );

  // For desktop: original tabs design
  const renderDesktopView = () => (
    <>
      <div className="flex flex-wrap gap-1 border-b-2 border-gray-200">
        {TABS.map((label, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveTab(index)}
            aria-selected={activeTab === index}
            aria-controls={`tabpanel-${index}`}
            id={`tab-${index}`}
            className={`relative px-4 md:px-5 lg:px-6 py-3 md:py-4 text-xs md:text-sm font-semibold uppercase tracking-wide transition-colors border-b-2 -mb-0.5 ${
              activeTab === index
                ? "text-gray-900 border-[#d4af37]"
                : "text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      <div
        id={`tabpanel-${activeTab}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeTab}`}
        className="pt-10 md:pt-12 pb-4"
      >
        <p className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-8 md:mb-10">
          {content.headline}{" "}
          <span className="text-[#d4af37]">{content.highlight}</span>
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {content.cards.map((card, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl p-5 lg:p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <card.icon className="w-8 h-8 lg:w-10 lg:h-10 text-[#10284D] mb-3 lg:mb-4" strokeWidth={1.5} />
              <p className="text-sm lg:text-base text-gray-700 leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8 lg:mb-10">
          The integrated payments advantage
        </h2>
        
        {isMobile ? renderMobileView() : isTablet ? renderTabletView() : renderDesktopView()}
      </div>

      <style jsx>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        /* Hide scrollbar for IE, Edge and Firefox */
        .scrollbar-hide {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </section>
  );
}