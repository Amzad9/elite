"use client";

import { Users, TrendingUp, ThumbsUp, DollarSign, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function SuccessStories() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative py-20 px-4 md:px-8 overflow-hidden bg-linear-to-b from-white to-gray-50">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-emerald-500/10 via-teal-500/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-linear-to-tr from-green-500/10 via-emerald-500/5 to-transparent rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Most States Businesses Thriving with Dual Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We use the same terminal technology that powers major gas station chains across America.
          </p>
        </div>

        {/* Success Stories Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Hagerstown Family Restaurant */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-emerald-200 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-orange-500 to-amber-500 flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Hagerstown Family Restaurant</h3>
                <div className="text-xs text-gray-500">Restaurant</div>
              </div>
            </div>
            
            <p className="text-gray-700 mb-6 italic leading-relaxed">
              "We were paying almost $2,000/month in processing fees. Now it's $0. Our customers adapted in just two weeks - they're used to it from gas stations!"
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Customer complaints: 0</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Implementation time: 1 week</span>
              </div>
            </div>
          </div>

          {/* Frederick Hardware Store */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-emerald-200 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Frederick Hardware Store</h3>
                <div className="text-xs text-gray-500">Retail</div>
              </div>
            </div>
            
            <p className="text-gray-700 mb-6 italic leading-relaxed">
              "Best decision we made. Customers understand immediately - it's just like buying gas. We're saving over $1,000 monthly."
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Cash transactions increased 15%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Customer satisfaction maintained</span>
              </div>
            </div>
          </div>

          {/* Hagerstown Automotive Mechanic */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-emerald-200 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <ThumbsUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Hagerstown Automotive Mechanic</h3>
                <div className="text-xs text-gray-500">Service</div>
              </div>
            </div>
            
            <p className="text-gray-700 mb-6 italic leading-relaxed">
              "Our margins were getting killed by processing fees. Dual pricing saved our business. Customers get it right away."
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Zero customer pushback</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Faster checkout process</span>
              </div>
            </div>
          </div>
        </div>

        {/* Results Banner */}
        <div className="mb-16">
          <div className="bg-linear-to-r from-emerald-50 to-green-50 rounded-2xl p-8 border border-emerald-100">
            <div className="text-center mb-8">
              <p className="text-2xl font-bold text-gray-900 mb-4">
                The time is now to switch to dual pricing and cash discounting
              </p>
              <p className="text-lg text-gray-700">
                More than 50% of our new applications are switching to dual pricing/cash discount.
              </p>
            </div>
            
            {/* Results Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-emerald-500 to-teal-500 flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-3xl font-bold text-emerald-600 mb-2">$1,800/month</h4>
                  <p className="text-gray-600">Average savings</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-linear-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
            <a 
              href="/contact"
              className="relative inline-block bg-linear-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl shadow-emerald-500/30 hover:shadow-3xl hover:shadow-emerald-500/50 transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-center gap-3">
                <span>Join These Most States Businesses</span>
                <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'translate-x-2' : ''}`} />
              </div>
            </a>
          </div>
          
          <p className="mt-10 text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Start saving like these successful most states businesses today.
          </p>
        </div>
      </div>
    </section>
  );
}