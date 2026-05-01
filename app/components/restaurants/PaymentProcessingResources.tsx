"use client";

import { 
  CreditCard, 
  ShoppingBag, 
  Utensils, 
  DollarSign,
  TrendingUp, 
  Cpu, 
  Users, 
  FileCheck,
  Settings,
  BookOpen,
  Shield,
  RefreshCw,
  ArrowRight
} from 'lucide-react';
import { useState } from 'react';

export default function ProcessingResources() {
  const [isHoveredGet, setIsHoveredGet] = useState(false);

  return (
    <section className="relative min-h-screen py-24 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-linear-to-br from-orange-900/90 via-gray-900/85 to-red-900/90 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-transparent via-black/20 to-black/50"></div>
      </div>

      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-linear-to-r from-orange-500/20 to-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-linear-to-r from-red-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Restaurant Payment Processing Resources<br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-orange-400">
              And Support
            </span>
          </h2>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Everything you need to optimize your restaurant payment processing and grow your food service business
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Complete Restaurant Solutions */}
          <div className="group bg-linear-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 p-4 md:p-8 hover:border-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 h-full flex flex-col">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-18 h-14 rounded-xl bg-linear-to-r from-orange-500 to-amber-500 flex items-center justify-center shadow-lg">
                <Utensils className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-xl font-bold text-white leading-tight">Complete Restaurant Solutions:</h2>
            </div>
            
            <div className="space-y-4 flex-grow">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="w-2 h-2 rounded-full bg-amber-400 mt-2 flex-shrink-0"></div>
                <span className="text-gray-200 text-base leading-relaxed">Restaurant POS systems and equipment</span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="w-2 h-2 rounded-full bg-amber-400 mt-2 flex-shrink-0"></div>
                <span className="text-gray-200 text-base leading-relaxed">Restaurant payment processing hardware</span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="w-2 h-2 rounded-full bg-amber-400 mt-2 flex-shrink-0"></div>
                <span className="text-gray-200 text-base leading-relaxed">Restaurant online ordering platform</span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="w-2 h-2 rounded-full bg-amber-400 mt-2 flex-shrink-0"></div>
                <span className="text-gray-200 text-base leading-relaxed">Cash discount programs for restaurants</span>
              </div>
            </div>
          </div>

          {/* Restaurant Business Growth */}
          <div className="group bg-linear-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 p-4 md:p-8 hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 h-full flex flex-col">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-18 h-14 rounded-xl bg-linear-to-r from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-xl font-bold text-white leading-tight">Restaurant Business Growth:</h2>
            </div>
            
            <div className="space-y-4 flex-grow">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></div>
                <span className="text-gray-200 text-base leading-relaxed">Merchant cash advance for restaurant equipment financing</span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></div>
                <span className="text-gray-200 text-base leading-relaxed">ATM placement programs for additional restaurant revenue</span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></div>
                <span className="text-gray-200 text-base leading-relaxed">Account management portal for restaurant payment monitoring</span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></div>
                <span className="text-gray-200 text-base leading-relaxed">Restaurant marketing and SEO services</span>
              </div>
            </div>
          </div>

          {/* Restaurant Support and Training */}
          <div className="group bg-linear-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 p-4 md:p-8 hover:border-red-500/30 hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500 h-full flex flex-col">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-18 h-14 rounded-xl bg-linear-to-r from-red-500 to-pink-500 flex items-center justify-center shadow-lg">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-xl font-bold text-white leading-tight">Restaurant Support and Training:</h2>
            </div>
            
            <div className="space-y-4 flex-grow">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
                <span className="text-gray-200 text-base leading-relaxed">Professional restaurant equipment installation and setup</span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
                <span className="text-gray-200 text-base leading-relaxed">Comprehensive restaurant staff training programs</span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
                <span className="text-gray-200 text-base leading-relaxed">Ongoing technical support for restaurant payment processing</span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
                <span className="text-gray-200 text-base leading-relaxed">Restaurant POS system updates and feature enhancements</span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
                <span className="text-gray-200 text-base leading-relaxed">24/7 restaurant merchant services support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-white/20 my-12"></div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        
          
          <a href="/getquote"
            className="group flex items-center gap-3 px-4 md:px-8 py-4 bg-linear-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl shadow-2xl shadow-emerald-500/30 hover:shadow-3xl hover:shadow-emerald-500/40 transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
          >
            <span className="text-lg">Get started with restaurant merchant services today</span>
            <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${isHoveredGet ? 'translate-x-2' : ''}`} />
          </a>
        </div>
      </div>
    </section>
  );
}