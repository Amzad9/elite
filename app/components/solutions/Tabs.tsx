"use client";

import Business from "./Business";
import Features from "./Features";
import HardwareGrid from "./HardwareGrid";
import IndustrySolutions from "./Industries";
import MarylandBusiness from './MarylandBusinesse'
import { useState } from 'react';

const TAB_LABELS = [
  "Business Solutions",
  "Features",
  "Industries",
  "Payment Hardware",
];

export default function BusinessTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="w-full bg-linear-to-b from-gray-50 to-white mx-auto px-2 pt-16 md:pt-20">
      <div className="">
        {/* Tab Navigation - match Retail Services style */}
        <div className="relative mb-8 md:mb-12">
          <div className="flex overflow-x-auto pb-4 md:pb-0 scrollbar-hide md:flex-wrap md:justify-center md:gap-4">
            <div className="flex gap-2 py-3 md:gap-4 min-w-max md:min-w-0 px-4">
              {TAB_LABELS.map((label, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`
                    relative px-4 py-3 md:px-8 md:py-4 text-sm md:text-base font-semibold rounded-xl 
                    transition-all duration-300 ease-in-out transform whitespace-nowrap
                    shrink-0
                    ${activeTab === index 
                      ? 'text-white shadow-xl scale-105' 
                      : 'text-gray-700 hover:text-gray-900 hover:bg-white/80 hover:shadow-lg hover:-translate-y-1'
                    }
                  `}
                >
                  {activeTab === index && (
                    <div className="absolute inset-0 bg-linear-to-r from-black-600 bg-[#10284D] to-black-500 rounded-xl -z-10"></div>
                  )}
                  
                  {activeTab !== index && (
                    <div className="absolute inset-0 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-xl -z-10"></div>
                  )}
                  
                  <span className="relative z-10">
                    {label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="relative">
          {/* Glass morphism container for content */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-2xl shadow-blue-500/5 overflow-hidden">
            <div className="overflow-x-hidden overflow-y-hidden">
              {/* Tab 1 Content */}
              {activeTab === 0 && (
                <div className="animate-fadeIn">
                  <Business />
                </div>
              )}

              {/* Tab 2 Content */}
              {activeTab === 1 && (
                <div className="animate-fadeIn">
                  <Features />
                </div>
              )}

              {/* Tab 3 Content */}
              {activeTab === 2 && (
                <div className="animate-fadeIn">
                  <IndustrySolutions />
                </div>
              )}

              {/* Tab 4 Content */}
              {activeTab === 3 && (
                <div className="animate-fadeIn">
                  <HardwareGrid />
                </div>
              )}
           
            </div>
          </div>
        </div>

        {/* Tab indicator dots for mobile */}
        <div className="flex justify-center gap-2 mt-8 md:hidden">
          {TAB_LABELS.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeTab === index 
                  ? 'w-8 bg-linear-to-r from-blue-600 to-cyan-500' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to tab ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        
        /* Hide scrollbar but keep functionality */
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}