// components/DualPricingIndustries.tsx
import React from 'react';
import { Check, MapPin, Building2, Store, Wrench, Zap, Shield, Briefcase } from 'lucide-react';

const DualPricingIndustries = () => {
  const industries = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Restaurants & Food Service",
      description: "Protect thin margins while offering customer payment flexibility. Perfect for most states restaurants, cafes, and food trucks.",
      features: ["Thin margin protection", "Payment flexibility", "Ideal for all food service"]
    },
    {
      icon: <Store className="w-6 h-6" />,
      title: "Retail & Specialty Stores",
      description: "Eliminate processing fees while staying competitive. Ideal for boutiques, hardware stores, and gift shops.",
      features: ["No processing fees", "Stay competitive", "All retail types"]
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Service Businesses",
      description: "Great for contractors, auto repair, salons, and professional services throughout most states.",
      features: ["Contractors", "Auto repair", "Salons", "Professional services"]
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "High-Volume Businesses",
      description: "Maximum savings for businesses processing significant monthly volumes. Gas stations, convenience stores, and more.",
      features: ["Maximum savings", "Volume discounts", "Gas stations", "Convenience stores"]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Firearms Businesses",
      description: "Firearms dealers welcome - dual pricing perfect for gun stores and shooting ranges.",
      features: ["Firearms dealers", "Gun stores", "Shooting ranges", "Industry compliant"]
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Government Contractors",
      description: "Maintain compliance while reducing costs for government and utility processing.",
      features: ["Regulatory compliance", "Cost reduction", "Government contracts", "Utility processing"]
    }
  ];

  const counties = [
    { name: "Washington County", city: "Hagerstown" },
    { name: "Frederick County" },
    { name: "Baltimore County & City" },
    { name: "Anne Arundel County", city: "Annapolis" },
    { name: "Montgomery County" }
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Dual Pricing: <span className="text-blue-600">Perfect For Most States Industries</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored payment solutions for every type of business across most states
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100"
            >
              <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-xl mb-4">
                <div className="text-blue-600">
                  {industry.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {industry.title}
              </h3>
              
              <p className="text-gray-600 mb-4">
                {industry.description}
              </p>
              
              <ul className="space-y-2">
                {industry.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Geographic Coverage */}
        <div className="bg-linear-to-r from-blue-600 to-blue-700 rounded-2xl shadow-xl p-8 text-white">
          <div className="flex items-center mb-8">
            <MapPin className="w-8 h-8 mr-3" />
            <h2 className="text-3xl font-bold">Geographic Coverage</h2>
          </div>
          
          <p className="text-blue-100 text-lg mb-8 max-w-3xl">
            Serving businesses across most states with comprehensive payment solutions
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {counties.map((county, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors duration-300"
              >
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-3 animate-pulse" />
                  <h3 className="text-xl font-bold">
                    {county.name}
                  </h3>
                </div>
                {county.city && (
                  <p className="text-blue-100 pl-6">
                    {county.city}
                  </p>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-10 pt-8 border-t border-white/20">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                🍟 Washington County
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                🍟 Frederick County
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                🍟 Baltimore County & City
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                🍟 Anne Arundel County
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                🍟 Montgomery County
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-linear-to-r from-blue-500 to-blue-600 text-white font-bold py-4 px-8 rounded-full text-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Get Started With Dual Pricing
          </button>
          <p className="text-gray-500 mt-4">
            Join hundreds of most states businesses already saving with our dual pricing solutions
          </p>
        </div>
      </div>
    </div>
  );
};

export default DualPricingIndustries;