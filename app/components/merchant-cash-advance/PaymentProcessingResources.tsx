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
  const [isHoveredView, setIsHoveredView] = useState(false);
  const [isHoveredGet, setIsHoveredGet] = useState(false);

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
            Level III Processing Resources<br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-400">
              And Government Support
            </span>
          </h2>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Everything you need to optimize your Level III payment processing and grow your government business
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Complete Level III Solutions */}
          <div className="group bg-linear-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 p-4 md:p-8 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 h-full flex flex-col">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-18 h-14 rounded-xl bg-linear-to-r from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                <CreditCard className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-xl font-bold text-white leading-tight">Complete Level III Solutions:</h2>
            </div>
            
            <div className="space-y-4 flex-grow">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                <span className="text-gray-200 text-base leading-relaxed">Level III processing technology and equipment</span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                <span className="text-gray-200 text-base leading-relaxed">Government contractor merchant services</span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                <span className="text-gray-200 text-base leading-relaxed">Corporate purchasing card programs</span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                <span className="text-gray-200 text-base leading-relaxed">B2B payment processing solutions</span>
              </div>
            </div>
          </div>

          {/* Government Business Growth */}
          <div className="group bg-linear-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 p-4 md:p-8 hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 h-full flex flex-col">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-18 h-14 rounded-xl bg-linear-to-r from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-xl font-bold text-white leading-tight">Government Business Growth:</h2>
            </div>
            
            <div className="space-y-4 flex-grow">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></div>
                <span className="text-gray-200 text-base leading-relaxed">Merchant cash advance for government contractor financing</span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></div>
                <span className="text-gray-200 text-base leading-relaxed">Account management portal for Level III transaction monitoring</span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></div>
                <span className="text-gray-200 text-base leading-relaxed">Government compliance consulting and audit support</span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></div>
                <span className="text-gray-200 text-base leading-relaxed">Procurement system integration and optimization</span>
              </div>
            </div>
          </div>

          {/* Level III Support and Training */}
          <div className="group bg-linear-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 p-4 md:p-8 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 h-full flex flex-col">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-18 h-14 rounded-xl bg-linear-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-xl font-bold text-white leading-tight">Level III Support and Training:</h2>
            </div>
            
            <div className="space-y-4 flex-grow">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                <span className="text-gray-200 text-base leading-relaxed">Professional Level III equipment installation and setup</span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                <span className="text-gray-200 text-base leading-relaxed">Comprehensive government compliance training programs</span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                <span className="text-gray-200 text-base leading-relaxed">Ongoing technical support for Level III credit card processing</span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                <span className="text-gray-200 text-base leading-relaxed">System updates and government regulation compliance</span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                <span className="text-gray-200 text-base leading-relaxed">24/7 Level III merchant services support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-white/20 my-12"></div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onMouseEnter={() => setIsHoveredView(true)}
            onMouseLeave={() => setIsHoveredView(false)}
            className="group flex items-center gap-3 px-4 md:px-8 py-4 bg-linear-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl shadow-2xl shadow-blue-500/30 hover:shadow-3xl hover:shadow-blue-500/40 transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
          >
            <span className="text-lg">View all Level III solutions</span>
            <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${isHoveredView ? 'translate-x-2' : ''}`} />
          </button>
          
          <button 
            onMouseEnter={() => setIsHoveredGet(true)}
            onMouseLeave={() => setIsHoveredGet(false)}
            className="group flex items-center gap-3 px-4 md:px-8 py-4 bg-linear-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl shadow-2xl shadow-emerald-500/30 hover:shadow-3xl hover:shadow-emerald-500/40 transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
          >
            <span className="text-lg">Get started with government processing today</span>
            <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${isHoveredGet ? 'translate-x-2' : ''}`} />
          </button>
        </div>
      </div>
    </section>
  );
}