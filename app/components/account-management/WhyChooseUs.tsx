"use client";

import { 
  MapPin, 
  CreditCard, 
  Headphones, 
  DollarSign,
  GraduationCap, 
  Users,
  Check,
  X
} from 'lucide-react';

export default function WhyChooseUs() {
  return (
    <section className="relative py-20 px-4 md:px-8 overflow-hidden bg-linear-to-b from-white to-gray-50">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-linear-to-br from-blue-500/10 via-cyan-500/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-linear-to-tr from-purple-500/10 via-indigo-500/5 to-transparent rounded-full blur-3xl" />
      
      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-linear-to-r from-blue-50 to-cyan-50 border border-blue-100 mb-6">
            <div className="w-2 h-2 bg-linear-to-r from-blue-500 to-cyan-500 rounded-full mr-2" />
            <span className="text-sm font-medium text-blue-700">THE ELITE DIFFERENCE</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Elite Card Processing
          </h2>
          <p className="text-2xl text-blue-600 font-medium">
            For Dual Pricing In Most States
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden mb-16">
          {/* Table Header */}
          <div className="grid grid-cols-3 border-b border-gray-200">
            <div className="p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Feature</h3>
              <p className="text-gray-600">What matters for your business</p>
            </div>
            <div className="p-8 text-center bg-linear-to-b from-emerald-50 to-emerald-100/30 border-x border-gray-200">
              <h3 className="text-2xl font-bold text-emerald-600 mb-2">Elite Card Processing</h3>
              <p className="text-emerald-700 font-medium">The Better Choice</p>
            </div>
            <div className="p-8 text-center bg-linear-to-b from-gray-50 to-gray-100/30">
              <h3 className="text-2xl font-bold text-gray-700 mb-2">Other Processors</h3>
              <p className="text-gray-600">Standard national programs</p>
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-gray-100">
            {[
              {
                feature: "Local Expertise",
                elite: "Most states compliance specialists",
                other: "No local focus",
                eliteIcon: <MapPin className="w-4 h-4" />,
                otherIcon: <X className="w-4 h-4" />
              },
              {
                feature: "Equipment",
                elite: "Valor PayTech advanced terminals",
                other: "Basic surcharge programs",
                eliteIcon: <CreditCard className="w-4 h-4" />,
                otherIcon: <X className="w-4 h-4" />
              },
              {
                feature: "Support",
                elite: "Same-day on-site service",
                other: "48+ hour call center wait",
                eliteIcon: <Headphones className="w-4 h-4" />,
                otherIcon: <X className="w-4 h-4" />
              },
              {
                feature: "Program Costs",
                elite: "$0/month",
                other: "$50–$100/month",
                eliteIcon: <DollarSign className="w-4 h-4" />,
                otherIcon: <X className="w-4 h-4" />
              },
              {
                feature: "Training",
                elite: "Free setup & compliance signage",
                other: "Fees & minimal training",
                eliteIcon: <GraduationCap className="w-4 h-4" />,
                otherIcon: <X className="w-4 h-4" />
              },
              {
                feature: "Ongoing Support",
                elite: "Hands-on, local relationship",
                other: "Limited impersonal help",
                eliteIcon: <Users className="w-4 h-4" />,
                otherIcon: <X className="w-4 h-4" />
              }
            ].map((row, index) => (
              <div key={index} className="grid grid-cols-3 hover:bg-gray-50/50 transition-colors duration-200">
                <div className="p-6 border-r border-gray-200">
                  <h4 className="text-lg font-bold text-gray-900">{row.feature}</h4>
                </div>
                <div className="p-6 border-r border-gray-200 bg-linear-to-r from-emerald-50/50 to-emerald-100/10">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-linear-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                      <div className="text-white">
                        {row.eliteIcon}
                      </div>
                    </div>
                    <span className="text-gray-800 font-medium">{row.elite}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-linear-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                      <div className="text-white">
                        {row.otherIcon}
                      </div>
                    </div>
                    <span className="text-gray-600">{row.other}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-linear-to-r from-blue-600 via-cyan-600 to-indigo-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
            <button className="relative bg-linear-to-r from-blue-600 via-cyan-600 to-indigo-600 text-white px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl shadow-blue-500/30 hover:shadow-3xl hover:shadow-blue-500/50 transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center justify-center gap-3">
                <span>Choose the Local Experts</span>
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </button>
          </div>
          
          <p className="mt-10 text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Join most states businesses who trust local expertise for their payment processing needs.
          </p>
        </div>
      </div>
    </section>
  );
}