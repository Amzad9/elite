"use client";

import { 
  CreditCard, 
  ShoppingBag, 
  Store,
  TrendingUp, 
  Users, 
  Shield,
  ArrowRight
} from 'lucide-react';

export default function ProcessingResources() {
  return (
    <section className="relative min-h-screen py-24 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-linear-to-br from-blue-900/90 via-gray-900/85 to-purple-900/90 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-transparent via-black/20 to-black/50"></div>
      </div>

      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-linear-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-linear-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Retail Payment Processing<br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-400">
              Resources and Support
            </span>
          </h2>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Everything you need to optimize your retail payment processing and grow your retail business
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Complete Retail Solutions */}
          <div className="group bg-linear-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 p-4 md:p-8 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 h-full flex flex-col">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-18 h-14 rounded-xl bg-linear-to-r from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                <Store className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-xl font-bold text-white leading-tight">Complete Retail Solutions:</h2>
            </div>
            
            <div className="space-y-4 grow">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 shrink-0"></div>
                <span className="text-gray-200 text-base leading-relaxed">Retail POS systems and equipment</span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 shrink-0"></div>
                <span className="text-gray-200 text-base leading-relaxed">Retail payment processing hardware</span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 shrink-0"></div>
                <span className="text-gray-200 text-base leading-relaxed">Cash discount programs for retail businesses</span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 shrink-0"></div>
                <span className="text-gray-200 text-base leading-relaxed">Firearms-friendly accounts for firearms retailers</span>
              </div>
            </div>
          </div>

          {/* Retail Business Growth */}
          <div className="group bg-linear-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 p-4 md:p-8 hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 h-full flex flex-col">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-18 h-14 rounded-xl bg-linear-to-r from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-xl font-bold text-white leading-tight">Retail Business Growth:</h2>
            </div>
            
            <div className="space-y-4 flex-grow">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></div>
                <span className="text-gray-200 text-base leading-relaxed">Merchant cash advance for retail inventory financing</span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></div>
                <span className="text-gray-200 text-base leading-relaxed">ATM placement programs for additional retail revenue</span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></div>
                <span className="text-gray-200 text-base leading-relaxed">Account management portal for retail payment monitoring</span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></div>
                <span className="text-gray-200 text-base leading-relaxed">Multi-location retail management and coordination</span>
              </div>
            </div>
          </div>

          {/* Retail Support and Training */}
          <div className="group bg-linear-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 p-4 md:p-8 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 h-full flex flex-col">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-18 h-14 rounded-xl bg-linear-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-xl font-bold text-white leading-tight">Retail Support and Training:</h2>
            </div>
            
            <div className="space-y-4 flex-grow">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                <span className="text-gray-200 text-base leading-relaxed">Professional retail equipment installation and setup</span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                <span className="text-gray-200 text-base leading-relaxed">Comprehensive retail staff training programs</span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                <span className="text-gray-200 text-base leading-relaxed">Ongoing technical support for retail payment processing</span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                <span className="text-gray-200 text-base leading-relaxed">Retail POS system updates and feature enhancements</span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                <span className="text-gray-200 text-base leading-relaxed">24/7 retail merchant services support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-white/20 my-12"></div>

        {/* CTA Buttons - Removed blue button, Contact button added */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a 
            href="/contact"
            className="group flex items-center gap-3 px-4 md:px-8 py-4 bg-linear-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl shadow-2xl shadow-emerald-500/30 hover:shadow-3xl hover:shadow-emerald-500/40 transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
          >
            <span className="text-lg">Get started with retail merchant services today</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
          </a>
        </div>
      </div>
    </section>
  );
}